// project-copilot.jsx — Project detail page for Construction Copilot.
// Editorial / Highlands. Tight one-pager: header, lede, the brief, what we
// built (annotated geometric screens), outro CTA. First-person careful voice.
// Plain technical tone. Geometric placeholders for product imagery.

function CopilotPage({ palette: p }) {
  const fontDisplay = `'Source Serif 4', Georgia, serif`;
  const fontText    = `'Bricolage Grotesque', system-ui, sans-serif`;
  const fontMono    = `'JetBrains Mono', ui-monospace, monospace`;

  const SectionLabel = ({ num, children }) => (
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 16,
      borderTop: `2px solid ${p.line}`, paddingTop: 22, marginBottom: 32,
    }}>
      <span style={{ fontFamily: fontDisplay, fontWeight: 600,
        fontSize: 20, color: p.moss, letterSpacing: '-0.01em' }}>
        {num}
      </span>
      <span style={{ fontFamily: fontText, fontSize: 12, color: p.ink,
        textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600 }}>
        {children}
      </span>
    </div>
  );

  return (
    <div style={{
      width: '100%', minHeight: '100%', background: p.paper, color: p.ink,
      fontFamily: fontText, fontSize: 16, lineHeight: 1.6,
      letterSpacing: '0.005em',
      overflow: 'hidden', position: 'relative',
      '--bloom-ink': p.ink, '--bloom-clay': p.clay, '--bloom-cream': p.cream,
    }}>

      {/* ─── nav ────────────────────────────────────────────────────── */}
      <header style={{
        position: 'relative', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '32px 80px',
        borderBottom: `2px solid ${p.line}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span style={{ fontFamily: fontDisplay, fontStyle: 'italic',
            fontSize: 26, fontWeight: 400, color: p.clay }}>
            Eivind&nbsp;Kjær
          </span>
          <span style={{ fontFamily: fontText, fontSize: 11, color: p.mute,
            letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500 }}>
            — portfolio · 2026
          </span>
        </div>
        <nav className="bloom-nav" style={{ display: 'flex', gap: 28, fontFamily: fontText, fontSize: 13,
          letterSpacing: '0.04em' }}>
          {[
            { l: 'Work',    h: '../index.html#work' },
            { l: 'Now',     h: '../index.html#now' },
            { l: 'Résumé', h: '../index.html#resume' },
            { l: 'Say hi',  h: '../index.html#contact' },
          ].map((n) => (
            <a key={n.l} href={n.h}
              style={{ color: p.mute, textDecoration: 'none' }}>
              {n.l}
            </a>
          ))}
        </nav>
      </header>

      {/* ─── breadcrumb ─────────────────────────────────────────────── */}
      <div style={{
        padding: '20px 80px',
        borderBottom: `1.5px solid ${p.line}`,
        fontFamily: fontText, fontSize: 12, color: p.mute,
        letterSpacing: '0.04em',
        display: 'flex', gap: 10, alignItems: 'center',
      }}>
        <a href="../index.html#work" style={{ color: p.mute, textDecoration: 'none' }}>← Work</a>
        <span style={{ color: p.line }}>/</span>
        <span style={{ color: p.ink }}>Construction Copilot</span>
      </div>

      {/* ─── article header ─────────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '72px 80px 64px',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64,
        alignItems: 'end',
        borderBottom: `2px solid ${p.line}` }}>
        <div>
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 28,
          }}>
            <span style={{ fontFamily: fontDisplay, fontWeight: 600,
              fontSize: 22, color: p.moss, letterSpacing: '-0.01em' }}>
              03
            </span>
            <span style={{ fontFamily: fontText, fontSize: 11, color: p.ink,
              textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600 }}>
              Applied AI · 2025
            </span>
          </div>
          <h1 style={{
            fontFamily: fontDisplay, fontWeight: 600,
            fontSize: 92, lineHeight: 1.0,
            letterSpacing: '-0.018em',
            margin: '0 0 28px', color: p.ink,
          }}>
            Construction<br/>Copilot.
          </h1>
          <p style={{
            fontFamily: fontDisplay, fontStyle: 'italic',
            fontSize: 24, fontWeight: 400, lineHeight: 1.4,
            color: p.clay, maxWidth: 560, margin: 0,
          }}>
            An agent that drafts site reports for construction supervisors
            from photos, voice notes and the day's drawings — on-site, in minutes.
          </p>
        </div>

        {/* meta card */}
        <div style={{
          background: p.cream, border: `1.5px solid ${p.line}`, borderRadius: 12,
          padding: 28,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
        }}>
          {[
            ['Role',    'Builder · solo'],
            ['Span',    '2025, four months'],
            ['Stack',   'Python, OpenAI, ' + 'tool-use orchestration'],
            ['Status',  'Pilot · 4 sites'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontFamily: fontText, fontSize: 10, color: p.mute,
                textTransform: 'uppercase', letterSpacing: '0.14em',
                fontWeight: 600, marginBottom: 6 }}>{k}</div>
              <div style={{ fontFamily: fontDisplay, fontWeight: 500,
                fontSize: 17, color: p.ink, letterSpacing: '-0.01em',
                lineHeight: 1.35 }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── hero artwork — wide flat plane ─────────────────────────── */}
      <section style={{ position: 'relative', padding: '64px 80px',
        borderBottom: `2px solid ${p.line}` }}>
        <CopilotHero palette={p} fontMono={fontMono}/>
      </section>

      {/* ─── 01 — The brief ─────────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '80px 80px 88px',
        display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80,
        borderBottom: `2px solid ${p.line}` }}>
        <div>
          <SectionLabel num="01">The brief</SectionLabel>
          <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 44,
            lineHeight: 1.05, letterSpacing: '-0.018em',
            margin: 0, color: p.ink }}>
            Drafting reports<br/>
            is the slowest<br/>
            part of the day.
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22,
          fontSize: 18, lineHeight: 1.65, color: p.mute, maxWidth: 620 }}>
          <p style={{ margin: 0 }}>
            A site supervisor on a mid-size construction project files a daily
            report. The report says what was built, what was delayed, what was
            inspected, and what's blocking tomorrow. It takes most supervisors
            between 45 minutes and two hours at the end of the day, and it's
            done from memory.
          </p>
          <p style={{ margin: 0 }}>
            We approached this by treating the report not as a form but as
            a <em style={{ fontFamily: fontDisplay, color: p.ink }}>summary
            of evidence the supervisor was already capturing</em> —
            photos taken on their phone, voice notes dictated between trades,
            and the day's drawings marked up on a tablet. The evidence existed.
            Nobody was reading it back to themselves at 6pm.
          </p>
          <p style={{ margin: 0 }}>
            The brief we wrote with the pilot partner was deliberately small:
            cut the writing time in half, keep every claim traceable to a
            piece of evidence, and never invent anything that wasn't said,
            shown, or drawn.
          </p>
        </div>
      </section>

      {/* ─── 02 — What we built ─────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '80px 80px 96px',
        background: p.cream,
        borderBottom: `2px solid ${p.line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr',
          gap: 80, marginBottom: 56 }}>
          <div>
            <SectionLabel num="02">What we built</SectionLabel>
            <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 44,
              lineHeight: 1.05, letterSpacing: '-0.018em',
              margin: 0, color: p.ink }}>
              Three screens.<br/>
              One job.
            </h2>
          </div>
          <div style={{ fontSize: 18, lineHeight: 1.65, color: p.mute,
            maxWidth: 620, alignSelf: 'end' }}>
            <p style={{ margin: 0 }}>
              The product is small on purpose. The supervisor opens it on a phone
              or tablet, drops in whatever they've collected, reads the draft,
              checks the citations, and sends it. Below: the three screens that
              do that, drawn in their working geometry.
            </p>
          </div>
        </div>

        {/* Annotated screens */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
          <AnnotatedScreen
            palette={p} fontDisplay={fontDisplay} fontMono={fontMono} fontText={fontText}
            num="i"
            title="Ingest"
            blurb="The supervisor drops in the day's evidence in any combination — a folder of photos, a voice memo, the marked-up drawing. The agent classifies each piece into a single timeline before it writes a word."
            screen={<ScreenIngest palette={p} fontMono={fontMono} fontText={fontText}/>}
            annotations={[
              { x: 12, y: 22, w: 220, label: 'Drag-drop. Any combo. Order doesn\'t matter.' },
              { x: 68, y: 64, w: 200, label: 'Voice notes are transcribed locally before upload.' },
            ]}
          />
          <AnnotatedScreen
            palette={p} fontDisplay={fontDisplay} fontMono={fontMono} fontText={fontText}
            num="ii"
            title="Draft"
            blurb="The agent writes the report paragraph by paragraph, in the supervisor's house style. Every claim is anchored to the evidence it came from. The supervisor reads and edits — they never re-write from scratch."
            screen={<ScreenDraft palette={p} fontMono={fontMono} fontText={fontText}/>}
            reverse
            annotations={[
              { x: 8, y: 14, w: 220, label: 'Section structure follows the site\'s report template.' },
              { x: 56, y: 60, w: 240, label: 'Inline citation chips. Click to see the source evidence.' },
            ]}
          />
          <AnnotatedScreen
            palette={p} fontDisplay={fontDisplay} fontMono={fontMono} fontText={fontText}
            num="iii"
            title="Evidence"
            blurb="Tapping a citation pulls up the exact photo, transcript span, or drawing markup that supported the sentence. This is the trust surface — the supervisor can audit any claim in two taps without leaving the draft."
            screen={<ScreenEvidence palette={p} fontMono={fontMono} fontText={fontText}/>}
            annotations={[
              { x: 50, y: 18, w: 220, label: 'Source pane: photo, transcript or plan marker.' },
              { x: 12, y: 70, w: 230, label: 'The sentence the citation belongs to stays in view.' },
            ]}
          />
        </div>
      </section>

      {/* ─── outro / CTA ────────────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '120px 80px 96px' }}>
        <div style={{ maxWidth: 760 }}>
          <SectionLabel num="—">What's next</SectionLabel>
          <h2 style={{
            fontFamily: fontDisplay, fontWeight: 600, fontSize: 64,
            lineHeight: 1.0, letterSpacing: '-0.018em',
            margin: '0 0 32px', color: p.ink,
          }}>
            Four sites are running it.<br/>
            <em style={{ color: p.clay, fontWeight: 500 }}>
              I'm taking on one or two more this year.
            </em>
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: p.mute,
            maxWidth: 620, margin: '0 0 36px' }}>
            If you run a project where supervisors are spending an hour a day
            writing reports — and you'd rather they spent that hour on the
            morning of the next day — I'd like to hear from you.
          </p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <HLButton primary palette={p} fontBody={fontText}
              href={`mailto:${'hello@eivind.dev'}?subject=${encodeURIComponent('Construction Copilot pilot')}`}>
              Email about pilots
            </HLButton>
            <span style={{ fontFamily: fontDisplay, fontStyle: 'italic',
              fontSize: 17, color: p.mute }}>
              hello@eivind.dev — replies usually within a day.
            </span>
          </div>
        </div>

        <div style={{ marginTop: 96, paddingTop: 24,
          borderTop: `2px solid ${p.line}`,
          display: 'flex',
          justifyContent: 'space-between', alignItems: 'baseline',
          fontFamily: fontText, fontSize: 11, color: p.mute,
          letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
          <span>© 2026 — Eivind Kjær</span>
          <a href="../index.html#work" style={{ color: p.ink, textDecoration: 'none' }}>
            Next: Wild Salmon Watch →
          </a>
        </div>
      </section>
    </div>
  );
}

// ─── hero artwork ────────────────────────────────────────────────────────────
function CopilotHero({ palette: p, fontMono }) {
  // A flat plane composition: ember disc (the agent), three input shapes
  // converging into it (photo, voice, plan), one output stream leaving it.
  return (
    <div style={{
      position: 'relative', width: '100%', aspectRatio: '16 / 7',
      background: p.cream, border: `1.5px solid ${p.line}`, borderRadius: 20,
      overflow: 'hidden',
    }}>
      <svg viewBox="0 0 1600 700" preserveAspectRatio="xMidYMid meet"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {/* concentric agent rings */}
        {[120, 180, 240].map((r, i) => (
          <circle key={r} cx="850" cy="350" r={r}
            fill="none" stroke={p.ink} strokeOpacity={0.08 + i * 0.02}
            strokeWidth="1"/>
        ))}
        {/* agent core — ember */}
        <circle cx="850" cy="350" r="78" fill={p.moss}/>
        {/* three input nodes */}
        <g>
          <rect x="180" y="180" width="140" height="100" fill={p.spring}/>
          <circle cx="200" cy="430" r="44" fill={p.tundra} stroke={p.clay} strokeWidth="2"/>
          <polygon points="160,560 320,560 240,640" fill={p.ink} opacity="0.85"/>
        </g>
        {/* connection lines */}
        <g stroke={p.ink} strokeWidth="1.5" strokeOpacity="0.55" fill="none">
          <line x1="320" y1="230" x2="772" y2="340"/>
          <line x1="244" y1="430" x2="772" y2="350"/>
          <line x1="240" y1="560" x2="780" y2="370"/>
        </g>
        {/* output stream — to the right */}
        <g stroke={p.clay} strokeWidth="2" fill="none">
          <line x1="928" y1="350" x2="1200" y2="350"/>
          <line x1="1200" y1="350" x2="1200" y2="240"/>
          <line x1="1200" y1="240" x2="1420" y2="240"/>
        </g>
        {/* output frame — a "draft" */}
        <g>
          <rect x="1180" y="160" width="280" height="380" fill={p.paper}
            stroke={p.ink} strokeWidth="1.5"/>
          {[200, 226, 252, 278, 304, 330, 356, 382, 408, 434, 460, 486].map((y, i) => (
            <line key={y} x1="1208" x2={1208 + (i % 3 === 2 ? 180 : 220)}
              y1={y} y2={y} stroke={p.glacier300 || p.line} strokeWidth="3"/>
          ))}
          {/* a citation chip */}
          <rect x="1208" y="338" width="60" height="14" fill={p.moss} opacity="0.85"/>
        </g>
      </svg>

      {/* corner labels */}
      <div style={{ position: 'absolute', top: 22, left: 28,
        fontFamily: fontMono, fontSize: 11, color: p.ink,
        letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
        Evidence in
      </div>
      <div style={{ position: 'absolute', top: 22, right: 28,
        fontFamily: fontMono, fontSize: 11, color: p.ink,
        letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
        Draft out
      </div>
      <div style={{ position: 'absolute', bottom: 22, left: 28,
        fontFamily: fontMono, fontSize: 11, color: p.mute,
        letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Fig. 01 — system at a glance
      </div>
    </div>
  );
}

// ─── annotated screen frame ──────────────────────────────────────────────────
function AnnotatedScreen({ palette: p, fontDisplay, fontMono, fontText,
                          num, title, blurb, screen, annotations, reverse }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: reverse ? '1fr 1.4fr' : '1.4fr 1fr',
      gap: 48,
      alignItems: 'start',
    }}>
      <div style={{ order: reverse ? 2 : 1 }}>
        <div style={{
          position: 'relative',
          background: p.paper, border: `1.5px solid ${p.line}`, borderRadius: 12,
          padding: 0, overflow: 'hidden',
          aspectRatio: '4 / 3',
        }}>
          {screen}
        </div>
        {/* annotations — small mono callouts with leader lines */}
        <div style={{ position: 'relative', marginTop: 18,
          display: 'flex', flexWrap: 'wrap', gap: '12px 24px' }}>
          {annotations.map((a, i) => (
            <div key={i} style={{
              display: 'flex', gap: 10, alignItems: 'flex-start',
              maxWidth: 280,
            }}>
              <span style={{
                fontFamily: fontMono, fontSize: 11, color: p.moss,
                letterSpacing: '0.04em', fontWeight: 600,
                paddingTop: 1,
              }}>{String.fromCharCode(97 + i)}.</span>
              <span style={{
                fontFamily: fontDisplay, fontStyle: 'italic',
                fontSize: 14, color: p.mute, lineHeight: 1.45,
              }}>{a.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ order: reverse ? 1 : 2, paddingTop: 8 }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 18,
        }}>
          <span style={{ fontFamily: fontDisplay, fontStyle: 'italic',
            fontWeight: 500, fontSize: 20, color: p.clay }}>
            {num}
          </span>
          <span style={{ fontFamily: fontText, fontSize: 11, color: p.ink,
            textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600 }}>
            {title}
          </span>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: p.mute, margin: 0 }}>
          {blurb}
        </p>
      </div>
    </div>
  );
}

// ─── individual screen sketches (geometric, no real UI) ──────────────────────
function ScreenIngest({ palette: p, fontMono, fontText }) {
  return (
    <div style={{ width: '100%', height: '100%', background: p.cream,
      position: 'relative' }}>
      {/* top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 36,
        background: p.paper, borderBottom: `1.5px solid ${p.line}`,
        display: 'flex', alignItems: 'center', padding: '0 16px',
        fontFamily: fontMono, fontSize: 10, color: p.mute,
        letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>
        New report · today
      </div>
      {/* dropzone */}
      <div style={{
        position: 'absolute', top: 64, left: 32, right: 32, bottom: 88,
        border: `1.5px dashed ${p.line}`, borderRadius: 8,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 16,
      }}>
        <div style={{ display: 'flex', gap: 14 }}>
          {/* three glyph blocks for photo / voice / plan */}
          <div style={{ width: 56, height: 56, background: p.tundra,
            border: `1.5px solid ${p.clay}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: fontText, fontWeight: 600, fontSize: 11, color: p.clay,
            letterSpacing: '0.09em', textTransform: 'uppercase' }}>Photo</div>
          <div style={{ width: 56, height: 56, background: p.spring,
            border: `1.5px solid ${p.ink}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: fontText, fontWeight: 600, fontSize: 11, color: p.ink,
            letterSpacing: '0.09em', textTransform: 'uppercase' }}>Voice</div>
          <div style={{ width: 56, height: 56, background: p.cream,
            border: `1.5px solid ${p.ink}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: fontText, fontWeight: 600, fontSize: 11, color: p.ink,
            letterSpacing: '0.09em', textTransform: 'uppercase' }}>Plan</div>
        </div>
        <div style={{ fontFamily: fontText, fontSize: 12, color: p.mute,
          letterSpacing: '0.04em' }}>
          Drop the day's evidence anywhere.
        </div>
      </div>
      {/* primary button */}
      <div style={{
        position: 'absolute', bottom: 24, right: 32,
        padding: '10px 20px', background: p.moss, color: p.paper,
        border: `1.5px solid ${p.ink}`,
        fontFamily: fontText, fontSize: 11, fontWeight: 600,
        textTransform: 'uppercase', letterSpacing: '0.09em',
        boxShadow: `3px 3px 0 ${p.ink}`,
      }}>
        Draft report
      </div>
    </div>
  );
}

function ScreenDraft({ palette: p, fontMono, fontText }) {
  // Rows of paragraph lines with a few ember citation chips inline.
  const rows = Array.from({ length: 16 }).map((_, i) => {
    const lens = [0.94, 0.86, 0.92, 0.70, 0.90, 0.88, 0.76, 0.94, 0.62, 0.88, 0.90, 0.78, 0.84, 0.92, 0.66, 0.40];
    return lens[i];
  });
  return (
    <div style={{ width: '100%', height: '100%', background: p.paper,
      position: 'relative', padding: '40px 36px 36px' }}>
      {/* top tab strip */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 32,
        background: p.cream, borderBottom: `1.5px solid ${p.line}`,
        display: 'flex', alignItems: 'center', padding: '0 16px', gap: 14,
        fontFamily: fontMono, fontSize: 10, color: p.mute,
        letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>
        <span style={{ color: p.ink, fontWeight: 600 }}>Draft</span>
        <span>Evidence</span>
        <span>Export</span>
        <span style={{ marginLeft: 'auto' }}>auto-saved</span>
      </div>
      {/* section heading */}
      <div style={{ fontFamily: `'Source Serif 4', Georgia, serif`,
        fontWeight: 600, fontSize: 18, color: p.ink, letterSpacing: '-0.01em',
        marginBottom: 18, paddingBottom: 8, borderBottom: `1.5px solid ${p.line}` }}>
        1. Works completed
      </div>
      {/* paragraph lines */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {rows.map((w, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ flex: `0 0 ${w * 70}%`,
              height: 8, background: p.glacier300 || p.line, opacity: 0.7,
              borderRadius: 2 }}/>
            {(i === 2 || i === 6 || i === 11) && (
              <div style={{
                padding: '1px 8px', background: p.moss, color: p.paper,
                fontFamily: fontMono, fontSize: 9, fontWeight: 600,
                letterSpacing: '0.06em',
              }}>cite</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenEvidence({ palette: p, fontMono, fontText }) {
  return (
    <div style={{ width: '100%', height: '100%', background: p.paper,
      position: 'relative', display: 'flex' }}>
      {/* left: draft paragraph with highlighted sentence */}
      <div style={{ flex: 1, padding: '32px 22px', borderRight: `1.5px solid ${p.line}` }}>
        <div style={{ fontFamily: fontMono, fontSize: 9, color: p.mute,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          marginBottom: 14, fontWeight: 600 }}>
          Draft · §2
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[0.94, 0.88, 0.92].map((w, i) => (
            <div key={i} style={{ height: 8, width: `${w * 100}%`,
              background: p.glacier300 || p.line, opacity: 0.7,
              borderRadius: 2 }}/>
          ))}
          {/* highlighted sentence (the one that owns the citation) */}
          <div style={{ marginTop: 6, height: 10, width: '92%',
            background: p.tundra, border: `1px solid ${p.clay}`,
            borderRadius: 2 }}/>
          <div style={{ height: 8, width: '78%',
            background: p.tundra, border: `1px solid ${p.clay}`, borderTop: 0,
            borderRadius: 2 }}/>
          {[0.86, 0.92, 0.72].map((w, i) => (
            <div key={`b-${i}`} style={{ height: 8, width: `${w * 100}%`,
              background: p.glacier300 || p.line, opacity: 0.7,
              borderRadius: 2, marginTop: i === 0 ? 6 : 0 }}/>
          ))}
        </div>
      </div>
      {/* right: source evidence — a photo block */}
      <div style={{ flex: 1.05, padding: '32px 22px',
        display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontFamily: fontMono, fontSize: 9, color: p.mute,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          fontWeight: 600 }}>
          Evidence · photo 14:32
        </div>
        <div style={{ flex: 1, background: p.tundra,
          border: `1.5px solid ${p.clay}`, position: 'relative',
          overflow: 'hidden' }}>
          {/* fake "photo" — two color planes representing site geometry */}
          <div style={{ position: 'absolute', left: 0, right: 0, top: '55%',
            bottom: 0, background: p.glacier300 || p.line, opacity: 0.7 }}/>
          <div style={{ position: 'absolute', left: '14%', top: '32%',
            width: '32%', height: '36%', background: p.ink, opacity: 0.6 }}/>
          <div style={{ position: 'absolute', left: '55%', top: '24%',
            width: '24%', height: '50%', background: p.clay, opacity: 0.75 }}/>
        </div>
        <div style={{ fontFamily: fontMono, fontSize: 10, color: p.mute,
          letterSpacing: '0.04em' }}>
          IMG_2451.jpg · supervisor capture
        </div>
      </div>
    </div>
  );
}

window.CopilotPage = CopilotPage;
