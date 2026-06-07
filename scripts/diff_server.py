#!/usr/bin/env python3
"""
diff_server.py — visual PR diff preview.
Run from repo root on a PR branch. Serves on port 8081.

  ?diff=new (default): PR branch, added strings highlighted green
  ?diff=old:           main branch, removed strings highlighted red

Handles two content formats:
  - JSX files in scripts/: parses t({is:'...', en:'...'}) patterns
  - Standalone HTML (CV): decodes JSON template and diffs decoded HTML
"""

import difflib
import html as html_module
import json
import os
import re
import subprocess
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import parse_qs, urlparse

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORT = 8081


# ── Git helpers ────────────────────────────────────────────────────────────────

def git_show(rel_path):
    """Return file content from the main branch, or None on failure."""
    try:
        r = subprocess.run(
            ['git', 'show', f'main:{rel_path}'],
            capture_output=True, text=True, cwd=REPO_ROOT,
        )
        return r.stdout if r.returncode == 0 else None
    except Exception:
        return None


def changed_files():
    """Return set of repo-relative paths that differ from main."""
    try:
        r = subprocess.run(
            ['git', 'diff', 'main...HEAD', '--name-only'],
            capture_output=True, text=True, cwd=REPO_ROOT,
        )
        return set(r.stdout.strip().splitlines())
    except Exception:
        return set()


# ── Diff parsers ───────────────────────────────────────────────────────────────

def _parse_jsx_diff():
    """Extract changed strings from t({is,en}) calls in scripts/."""
    try:
        r = subprocess.run(
            ['git', 'diff', 'main...HEAD', '--', 'scripts/'],
            capture_output=True, text=True, cwd=REPO_ROOT,
        )
        raw = r.stdout
    except Exception as e:
        print(f'git diff (jsx) failed: {e}', file=sys.stderr)
        return [], []

    added, removed = [], []
    pat = re.compile(r"""(?:en|is):\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")""")

    for line in raw.splitlines():
        if line[:3] in ('+++', '---') or not line or line[0] not in '+-':
            continue
        sign = line[0]
        for m in pat.finditer(line[1:]):
            val = (m.group(1) or m.group(2) or '').replace("\\'", "'").replace('\\"', '"')
            if len(val) > 15:
                (added if sign == '+' else removed).append(val)

    return added, removed


def _parse_cv_diff(changed):
    """Extract changed text strings from the CV standalone HTML file."""
    cv_path = 'CV-Sindri-Mar-Hilmarsson-standalone.html'
    if cv_path not in changed:
        return [], []

    old_raw = git_show(cv_path)
    if not old_raw:
        return [], []
    try:
        new_raw = open(os.path.join(REPO_ROOT, cv_path), encoding='utf-8').read()
    except FileNotFoundError:
        return [], []

    def extract_template(content):
        m = re.search(r'<script[^>]*type="__bundler/template"[^>]*>(.*?)</script>',
                      content, re.DOTALL)
        if not m:
            return None
        try:
            return json.loads(m.group(1).strip())
        except Exception:
            return None

    old_html = extract_template(old_raw)
    new_html = extract_template(new_raw)
    if not old_html or not new_html:
        return [], []

    tag_pat = re.compile(r'<[^>]+>')
    added, removed = [], []

    for line in difflib.unified_diff(old_html.splitlines(), new_html.splitlines(),
                                     lineterm=''):
        if line.startswith(('+++', '---', '@@')) or not line or line[0] not in '+-':
            continue
        sign = line[0]
        text = html_module.unescape(tag_pat.sub('', line[1:]).strip())
        if len(text) > 15:
            (added if sign == '+' else removed).append(text)

    return added, removed


def parse_diff():
    """Return {'new': [...], 'old': [...], 'changed_html': set}."""
    cf = changed_files()

    jsx_added, jsx_removed = _parse_jsx_diff()
    cv_added, cv_removed = _parse_cv_diff(cf)

    added = jsx_added + cv_added
    removed = jsx_removed + cv_removed

    # Strings that appear on both sides weren't actually changed (e.g. a
    # surrounding attribute changed while the text stayed the same).
    unchanged = set(added) & set(removed)
    return {
        'new': [s for s in added if s not in unchanged],
        'old': [s for s in removed if s not in unchanged],
        'changed_html': {f for f in cf if f.endswith('.html')},
    }


# ── Injected HTML fragment ─────────────────────────────────────────────────────
# Single script injected into </head>. Placeholders: __DS__ __BASE__
#
# Everything (styles, toggle div, highlights) is created dynamically inside the
# timer callback so it survives document.documentElement.replaceWith() — which
# the CV bundler calls on DOMContentLoaded, wiping any static DOM we injected.
# window.DS and the pending setTimeout both survive because they live on window.

_HEAD = """<script>
window.DS=__DS__;
(function(){
  var m=new URLSearchParams(location.search).get('diff')||'new';
  var base='__BASE__';
  var ss=(window.DS&&window.DS[m])||[];

  function openEditor(mk){
    var original=mk.dataset.original||mk.textContent;
    var overlay=document.createElement('div');
    overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10000;display:flex;align-items:center;justify-content:center';
    var box=document.createElement('div');
    box.style.cssText='background:#fff;border-radius:8px;padding:24px;width:560px;max-width:90vw;font-family:system-ui,sans-serif;box-shadow:0 8px 32px rgba(0,0,0,.25)';
    var label=document.createElement('p');
    label.style.cssText='margin:0 0 8px;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.05em';
    label.textContent='Edit — added text';
    var ta=document.createElement('textarea');
    ta.value=mk.textContent;
    ta.style.cssText='width:100%;box-sizing:border-box;height:120px;font-size:15px;line-height:1.6;padding:10px;border:1.5px solid #ddd;border-radius:6px;resize:vertical;font-family:inherit';
    var row=document.createElement('div');
    row.style.cssText='display:flex;gap:8px;margin-top:14px;justify-content:flex-end';
    var cancel=document.createElement('button');
    cancel.textContent='Cancel';
    cancel.style.cssText='padding:8px 16px;border:1.5px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:14px';
    var save=document.createElement('button');
    save.textContent='Save';
    save.style.cssText='padding:8px 18px;border:none;border-radius:6px;background:#222;color:#fff;cursor:pointer;font-size:14px;font-weight:600';
    cancel.onclick=function(){ document.body.removeChild(overlay); };
    save.onclick=function(){
      var edited=ta.value.trim();
      if(!edited){ document.body.removeChild(overlay); return; }
      fetch('/edits',{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({original:original,edited:edited})})
      .then(function(){
        mk.dataset.original=original;
        mk.textContent=edited;
        mk.classList.remove('diff-new');
        mk.classList.add('diff-edited');
        document.body.removeChild(overlay);
      });
    };
    row.appendChild(cancel); row.appendChild(save);
    box.appendChild(label); box.appendChild(ta); box.appendChild(row);
    overlay.appendChild(box);
    overlay.onclick=function(e){ if(e.target===overlay) document.body.removeChild(overlay); };
    document.body.appendChild(overlay);
    ta.focus(); ta.select();
  }

  function inject(){
    if(!document.getElementById('diff-styles')){
      var st=document.createElement('style');
      st.id='diff-styles';
      st.textContent=
        'mark.diff-new{background:rgba(60,200,80,.28);border-radius:2px;padding:0 1px;cursor:pointer}'+
        'mark.diff-new:hover{filter:brightness(1.15)}'+
        'mark.diff-old{background:rgba(220,50,50,.28);border-radius:2px;padding:0 1px}'+
        'mark.diff-edited{background:rgba(80,120,220,.28);border-radius:2px;padding:0 1px;cursor:pointer}'+
        'mark.diff-edited:hover{filter:brightness(1.15)}';
      (document.head||document.documentElement).appendChild(st);
    }
    if(!document.getElementById('dt')){
      var dt=document.createElement('div');
      dt.id='dt';
      dt.style.cssText='position:fixed;bottom:24px;right:24px;z-index:9999;'+
        'display:flex;border-radius:20px;overflow:hidden;'+
        'box-shadow:0 2px 10px rgba(0,0,0,.35);'+
        'font:600 13px/1 system-ui,sans-serif;user-select:none';
      ['new','old'].forEach(function(v){
        var a=document.createElement('a');
        a.href=base+'?diff='+v;
        a.textContent=v.charAt(0).toUpperCase()+v.slice(1);
        a.style.cssText='padding:9px 18px;text-decoration:none;color:#fff;'+
          'background:'+(m===v?'#222':'#777');
        if(m===v)a.style.pointerEvents='none';
        dt.appendChild(a);
      });
      document.body.appendChild(dt);
    }
    if(!ss.length)return;
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null);
    var ns=[];while(w.nextNode())ns.push(w.currentNode);
    for(var i=0;i<ns.length;i++){
      var nd=ns[i],tx=nd.nodeValue;
      if(!tx||tx.trim().length<15)continue;
      for(var j=0;j<ss.length;j++){
        var s=ss[j],k=tx.indexOf(s);
        if(k<0)continue;
        var f=document.createDocumentFragment();
        if(k)f.appendChild(document.createTextNode(tx.slice(0,k)));
        var mk=document.createElement('mark');
        mk.className='diff-'+m;mk.textContent=s;f.appendChild(mk);
        var r=tx.slice(k+s.length);
        if(r)f.appendChild(document.createTextNode(r));
        nd.parentNode.replaceChild(f,nd);
        break;
      }
    }
    if(m==='new'){
      document.querySelectorAll('mark.diff-new').forEach(function(mk){
        mk.addEventListener('click',function(e){ e.stopPropagation(); openEditor(mk); });
      });
      fetch('/edits').then(function(r){return r.json();}).then(function(edits){
        document.querySelectorAll('mark.diff-new').forEach(function(mk){
          var hit=edits.find(function(e){return e.original===mk.textContent;});
          if(hit){
            mk.dataset.original=mk.textContent;
            mk.textContent=hit.edited;
            mk.classList.remove('diff-new');
            mk.classList.add('diff-edited');
            mk.title='Original: '+hit.original;
          }
        });
      });
    }
  }
  document.readyState==='loading'
    ?document.addEventListener('DOMContentLoaded',function(){setTimeout(inject,1000);})
    :setTimeout(inject,1000);
})();
</script>"""

_BODY = ''  # nothing static — toggle and styles are created by the script above


# ── HTTP handler ───────────────────────────────────────────────────────────────

class DiffHandler(SimpleHTTPRequestHandler):
    diff_strings = {'new': [], 'old': []}
    changed_html = set()   # repo-relative paths of changed .html files

    def do_GET(self):
        parsed = urlparse(self.path)

        if parsed.path == '/edits':
            edits_path = os.path.join(REPO_ROOT, 'diff_edits.json')
            data = open(edits_path, encoding='utf-8').read() if os.path.exists(edits_path) else '[]'
            self._send(data.encode('utf-8'), 'application/json')
            return

        mode = parse_qs(parsed.query).get('diff', ['new'])[0]
        local = os.path.join(REPO_ROOT, parsed.path.lstrip('/'))
        if os.path.isdir(local):
            local = os.path.join(local, 'index.html')
        ext = os.path.splitext(local)[1].lower()

        if ext == '.html' and os.path.isfile(local):
            self._serve_html(local, mode, parsed.path)
        elif ext == '.jsx' and os.path.isfile(local):
            self._serve_jsx(local, mode)
        else:
            super().do_GET()

    def do_POST(self):
        if self.path != '/edits':
            self.send_error(404)
            return
        length = int(self.headers.get('Content-Length', 0))
        body = json.loads(self.rfile.read(length))
        edits_path = os.path.join(REPO_ROOT, 'diff_edits.json')
        edits = json.loads(open(edits_path, encoding='utf-8').read()) if os.path.exists(edits_path) else []
        edits = [e for e in edits if e['original'] != body['original']]
        edits.append({'original': body['original'], 'edited': body['edited']})
        open(edits_path, 'w', encoding='utf-8').write(json.dumps(edits, ensure_ascii=False, indent=2))
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(b'{"ok":true}')

    def _serve_html(self, local, mode, path):
        rel = os.path.relpath(local, REPO_ROOT)
        is_content_file = rel in self.__class__.changed_html

        if mode == 'old' and is_content_file:
            # Standalone HTML (e.g. CV): serve the main-branch version so the
            # old content is rendered, then highlight removed strings in red.
            content = git_show(rel) or open(local, encoding='utf-8').read()
        else:
            content = open(local, encoding='utf-8').read()
            if mode == 'old' and not is_content_file:
                # JSX-loader page (e.g. case study): rewrite script src
                # attributes so the server returns main-branch JSX.
                content = re.sub(r'(src="[^"]+\.jsx)(")', r'\1?diff=old\2', content)

        head = (_HEAD
                .replace('__DS__', json.dumps(self.diff_strings))
                .replace('__BASE__', path))

        content = content.replace('</head>', head + '\n</head>', 1)
        self._send(content.encode('utf-8'), 'text/html; charset=utf-8')

    def _serve_jsx(self, local, mode):
        if mode == 'old':
            rel = os.path.relpath(local, REPO_ROOT)
            content = git_show(rel) or open(local, encoding='utf-8').read()
        else:
            content = open(local, encoding='utf-8').read()
        self._send(content.encode('utf-8'), 'text/javascript; charset=utf-8')

    def _send(self, data, ctype):
        self.send_response(200)
        self.send_header('Content-Type', ctype)
        self.send_header('Content-Length', str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def log_message(self, *_):
        pass


# ── Entry point ────────────────────────────────────────────────────────────────

if __name__ == '__main__':
    os.chdir(REPO_ROOT)
    print('Parsing diff… ', end='', flush=True)
    ds = parse_diff()
    DiffHandler.diff_strings = {k: ds[k] for k in ('new', 'old')}
    DiffHandler.changed_html = ds['changed_html']
    print(f"{len(ds['new'])} added, {len(ds['old'])} removed strings")
    if ds['changed_html']:
        print(f"  Content HTML: {', '.join(sorted(ds['changed_html']))}")

    srv = HTTPServer(('127.0.0.1', PORT), DiffHandler)
    base = f'http://localhost:{PORT}'
    print(f'Serving at {base}')
    print(f'  Case study: {base}/work/construction-copilot.html')
    print(f'  CV:         {base}/CV-Sindri-Mar-Hilmarsson-standalone.html')
    print('Ctrl-C to stop.\n')
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print('Stopped.')
