# Sindri Már Hilmarsson — portfolio

A small personal portfolio site, built on the **Highlands** design
system. Pre-launch: staging redesign meant to replace the live site at
sindrihilmars.github.io once finished.

Editorial direction: Source Serif 4 for display + italic asides,
Bricolage Grotesque for body, JetBrains Mono for chrome. Glacier
neutrals, ember red as the brand warmth. Soft voice, hard edges.

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
    └── app-copilot.jsx                       # entry for /work/construction-copilot.html
```

## Running it locally

It's static. Open a small dev server in the repo root, then visit:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly via `file://` will not work — the JSX
files are loaded with relative URLs that most browsers block on
`file://`.

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
  in §02 (labelled Listen / Reason / Render) are still geometric
  placeholders — `ScreenIngest`, `ScreenDraft`, `ScreenEvidence` —
  meant to be replaced with real screenshots when available (a
  Telegram conversation and a sample PDF would land well).
- **Brand tokens**: `highlands/colors_and_type.css`. Don't change
  ember red (`--primary-500`) — the system locks it.
- **CV**: the standalone HTML at the repo root is self-contained
  (fonts and image embedded as a bundler manifest). The landing's
  Résumé section links to it as "Open full CV →". The bundle was
  authored elsewhere; the file in this repo is the published artifact.

## Status (May 2026)

Real, from the CV:
- Identity, contact, headshot, CV link, languages.
- `PROJECTS`: Team Spark (HÍ Formula Student) and Dagskýrslutól (the
  case study).
- `RESUME` and `NOW_ITEMS` populated from CV data.

Still placeholder / aspirational:
- Case-study screens (§02) are abstract geometry, not real product
  shots.
- No Team Spark case-study page yet — the landing card has no `href`.
- The portfolio is English-only; the CV is bilingual (IS/EN). Adding a
  language toggle is a future direction.

## License

Highlands tokens, Source Serif 4 (SIL Open Font License), and the
mascot illustration are bundled here. The site copy and project data
are Sindri's own.
