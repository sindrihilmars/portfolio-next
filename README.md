# Sindri Már Hilmarsson — portfolio

A small personal portfolio site, built on the **Highlands** design
system. Pre-launch: staging redesign meant to replace the live site at
sindrihilmars.github.io once finished.

Editorial direction: Source Serif 4 for display + italic asides,
Bricolage Grotesque for body, JetBrains Mono for chrome. Glacier
neutrals, ember red as the brand warmth. Soft voice, hard edges.

For a walk-through of how the site works under the hood — what the
files do, how React + Babel from a CDN render the pages, where to
edit what — see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md). For a
voice / style brief on how Sindri writes (useful when drafting new
copy in his register), see [`docs/WRITING_STYLE.md`](docs/WRITING_STYLE.md).
For day-to-day commands (dev server, PR review), see [`docs/workflow.md`](docs/workflow.md).

## Where it lives

- **Source:** `github.com/sindrihilmars/portfolio-next` (this repo).
- **Preview:** <https://sindrihilmars.github.io/portfolio-next/> —
  GitHub Pages, built from `main`.
- **Eventually replaces:** <https://sindrihilmars.github.io/> — the
  current live site lives in a separate `sindrihilmars.github.io`
  repo and is untouched until launch day.

## Structure

```
.
├── index.html                                # landing page
├── work/
│   └── construction-copilot.html             # Dagskýrslutól case study
├── CV-Sindri-Mar-Hilmarsson-standalone.html  # self-contained CV (IS/EN
│                                             #   toggle, A4 print layout,
│                                             #   for emailing to employers)
├── Eg.jpg                                    # headshot used in the hero
├── docs/
│   ├── ARCHITECTURE.md                       # how the site is wired
│   ├── WRITING_STYLE.md                      # Sindri's voice / editorial brief
│   └── workflow.md                           # dev server + PR review commands
├── highlands/
│   ├── colors_and_type.css                   # tokens (color, type, spacing,
│   │                                         #   radii, shadows, buttons)
│   ├── fonts/                                # Source Serif 4 (reg + italic)
│   └── assets/                               # mascot illustration
└── scripts/
    ├── shared.jsx                            # palette tokens, PROFILE,
    │                                         #   PROJECTS, NOW_ITEMS, RESUME,
    │                                         #   art primitives, HLButton
    ├── bloom-landing.jsx                     # landing-page component
    ├── project-copilot.jsx                   # case-study component
    ├── app-landing.jsx                       # entry for /index.html
    ├── app-copilot.jsx                       # entry for /work/construction-copilot.html
    ├── diff_server.py                        # visual PR diff preview (port 8081);
    │                                         #   click green highlights to edit inline,
    │                                         #   saves to diff_edits.json for merge
    └── review_pr.py                          # automated review via GitHub Actions

## Running it locally

It's static. Open a small dev server in the repo root, then visit:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
# then open http://localhost:8080
```

Opening `index.html` directly via `file://` will not work — the JSX
files are loaded with relative URLs that most browsers block on
`file://`.

To review a content PR with changes highlighted, use the diff server on
port 8081 instead — see [`docs/workflow.md`](docs/workflow.md). While
reviewing, click any green highlight to open an inline editor; edits
persist to `diff_edits.json` (git-ignored). Tell Claude "merge with my
edits" and it applies them before committing.

## How it's built

The pages use **React + Babel from a CDN** to keep the source readable
and edit-friendly. There is no build step.

If you want to ship this as production, the easy path is to compile
the `.jsx` files with `esbuild` or `swc` into one bundled `.js` per
page and drop the Babel script tag.

## Editing

- **Copy / project data**: `scripts/shared.jsx` — `PROFILE`,
  `PROJECTS`, `NOW_ITEMS`, `RESUME`.
- **Landing layout**: `scripts/bloom-landing.jsx`. Sections are
  anchored with `id="work"`, `id="now"`, `id="resume"`, `id="contact"`
  so the nav links scroll smoothly.
- **Case study**: `scripts/project-copilot.jsx`. The annotated screens
  in §02 (labelled *Listen / Ask / Assemble* / *Hlusta / Spurja / Setja
  saman*) are still geometric placeholders — `ScreenIngest`,
  `ScreenDraft`, `ScreenEvidence` — meant to be replaced with real
  screenshots when available (a Telegram conversation and a sample
  PDF would land well).
- **Bilingual content**: most translatable strings live as `{ is, en }`
  objects routed through `t(value, lang)` in `scripts/shared.jsx`. The
  `useLanguage()` hook (also in `shared.jsx`) holds the current
  language, persists it to `localStorage`, and syncs `<html lang>`. To
  translate a plain English string, swap it for an `{ is, en }` object
  in the data file or the JSX render site.
- **Brand tokens**: `highlands/colors_and_type.css`. Don't change
  ember red (`--primary-500`) — the system locks it.
- **CV**: the standalone HTML at the repo root is self-contained
  (fonts and image embedded as a bundler manifest). The landing's
  Résumé section links to it as "Open full CV →". The bundle was
  authored elsewhere; the file in this repo is the published artifact.
  **Important:** if the CV is regenerated, any `</script>` tags inside
  the `__bundler/template` JSON string must be escaped as `<\/script>`;
  an unescaped one terminates the script block early and the CV fails
  to render.

## Status (June 2026)

**Bilingual.** IS / EN toggle is wired across both pages; selection
persists across navigation via `localStorage`. Default language is
currently English — the plan is to flip to Icelandic-default once the
remaining English-only blocks have IS copy. To flip: change
`useLanguage('en')` → `useLanguage('is')` in `BloomLanding` and
`CopilotPage`.

Real, in Sindri's own voice across both languages:
- Landing hero, project cards (Team Spark + Dagskýrslutól), Now items,
  Résumé rows (trimmed to three most-recent), contact + footer.
- Case-study breadcrumb, article header (Dagskýrslutól, *AI in use
  2026* / *Gervigreind í notkun 2026*), meta card (Role / Timeline /
  Status as *Beta release* / *Beta Útgáfa*), hero artwork labels, §01
  *In brief* (full prose), §02 *How it works* heading + intro, §02
  outro section, §03 *End to end* full prose, §05 *Status* full prose.

Still English-only — to be translated next:
- The three annotated screens in §02 (Listen / Ask / Assemble) — each
  has a blurb and two annotations.
- A few small bits: the Now-section subtitle paragraph
  ("Updated whenever the answer changes…"), the Dagskýrslutól card
  bullets, and the meta-card *Stack* row.

Still placeholder / aspirational across both languages:
- Case-study screens (§02) are abstract geometry, not real product
  shots. The agent rendering as voice → AI → PDF is told in prose;
  the SVG still shows three input shapes from the older multi-modal
  framing.
- No Team Spark case-study page yet — the landing card has no `href`.

## License

Highlands tokens, Source Serif 4 (SIL Open Font License), and the
mascot illustration are bundled here. The site copy and project data
are Sindri's own.
