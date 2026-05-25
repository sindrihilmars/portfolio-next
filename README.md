# Eivind Kjær — portfolio

A small personal portfolio site, built on the **Highlands** design system.

Editorial direction: Source Serif 4 for display + italic asides, Bricolage
Grotesque for body, JetBrains Mono for chrome. Glacier neutrals, ember red
as the brand warmth. Soft voice, hard edges.

## Structure

```
.
├── index.html                         # landing page
├── work/
│   └── construction-copilot.html      # project case study
├── highlands/
│   ├── colors_and_type.css            # all tokens (color, type, spacing, radii, shadows, buttons)
│   ├── fonts/                         # Source Serif 4 (regular + italic variable)
│   └── assets/                        # mascot illustration
└── scripts/
    ├── shared.jsx                     # palette tokens, project data, art primitives, HLButton
    ├── bloom-landing.jsx              # landing-page component
    ├── project-copilot.jsx            # case-study component
    ├── app-landing.jsx                # entry for /index.html
    └── app-copilot.jsx                # entry for /work/construction-copilot.html
```

## Running it locally

It's static. Open a small dev server in the repo root, then visit the page:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly via `file://` will not work — the JSX files
are loaded with relative URLs, which most browsers block on `file://`.

## How it's built

The pages use **React + Babel from a CDN** to keep the source readable and
edit-friendly. There is no build step.

If you want to ship this as production, the easy path is to compile the
`.jsx` files with `esbuild` or `swc` into one bundled `.js` per page and
drop the Babel script tag.

## Editing

- **Copy / project data**: `scripts/shared.jsx` — see the `PROJECTS`,
  `NOW_ITEMS`, `RESUME`, and `PROFILE` constants.
- **Landing layout**: `scripts/bloom-landing.jsx`. Sections are anchored
  with `id="work"`, `id="now"`, `id="resume"`, `id="contact"` so the nav
  links scroll smoothly.
- **Case study**: `scripts/project-copilot.jsx`. The geometric "screens"
  in §02 are meant to be swapped for real screenshots — they're each a
  small component (`ScreenIngest`, `ScreenDraft`, `ScreenEvidence`) you can
  replace with an `<img>` when you have the assets.
- **Brand tokens**: `highlands/colors_and_type.css`. Don't change ember
  red (`--primary-500`) — the system locks it.

## License

The Highlands tokens, Source Serif 4 (SIL Open Font License), and the
mascot illustration are bundled here. The site copy and project data are
yours — edit freely.
