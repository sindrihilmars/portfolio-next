# How this website works

A walk-through of the moving pieces, for someone who can code but
hasn't built websites before. Skim it top to bottom; each section is
short.

## The big picture: a static site

This whole site is just **files sitting on a server.** There is no
backend, no database, no server-side code. When you visit a URL,
GitHub's web server hands the browser a few files (HTML, CSS, images,
JavaScript) — and from that point on, everything happens **inside the
browser**.

That's the entire deployment model: edit a file → commit → push to
GitHub → GitHub Pages serves it. No build step, no compiler, no
container.

A site like that is called a **static site**. It's the opposite of
something like a Rails or Django app where the server does work to
generate each response.

## The browser is the runtime

The browser is the engine that interprets and executes everything
here. It understands three languages natively:

- **HTML** — the page skeleton. Boxes, links, text, structure.
- **CSS** — the styling. Colors, fonts, spacing, layout.
- **JavaScript (JS)** — the logic. Anything dynamic. JS can read or
  mutate the HTML after the page loads.

A useful analogy: HTML is the markup describing *what* is on the page,
CSS is the rules for *how* it looks, JS is a program that can modify
both at runtime.

## Where the work actually happens

When you open `index.html`, the browser does roughly this:

1. Parses the HTML. Sees `<div id="root"></div>` — an empty placeholder.
2. Sees three `<script>` tags pointing to a CDN. Downloads:
   - **React** (the UI library)
   - **ReactDOM** (the bit of React that talks to the browser's HTML)
   - **Babel** (a compiler that translates "JSX" — see below — into
     plain JavaScript the browser understands)
3. Sees three more `<script type="text/babel">` tags pointing to local
   `.jsx` files. Babel fetches them, compiles them in-memory, and runs
   the result.
4. The compiled JS calls `ReactDOM.createRoot(...).render(...)`, which
   takes a "tree" of components and fills in the empty `<div id="root">`
   with real HTML on the fly.

That last step is the trick: instead of writing the page's HTML by
hand, you describe it as a function tree in JavaScript and React
*generates* the HTML for you. Every visible word on the landing page
came out of `BloomLanding` in `scripts/bloom-landing.jsx`.

## JSX, briefly

Open `scripts/bloom-landing.jsx` and you'll see things like:

```jsx
<h1 style={{ fontSize: 92 }}>
  Engineering between batteries and machine learning.
</h1>
```

That looks like HTML, but it's inside a JavaScript file. This is
**JSX** — a small extension to JavaScript that lets you write
HTML-like syntax. Browsers don't understand JSX natively, so Babel
compiles it to regular JS (the `<h1>` becomes a `React.createElement(...)`
call) before the browser runs it. The advantage: it reads like the
HTML you're building, which is much friendlier than writing
`createElement` by hand.

## Why "from a CDN" — no build step

A CDN is a public file-hosting service (here: `unpkg.com`). The
`<script src="https://unpkg.com/react@18..." >` lines mean *"the
browser, please download React from this URL."* Same with ReactDOM
and Babel.

This setup has a tradeoff:

- **Pro:** no toolchain. No `npm install`, no `webpack`, no `next dev`.
  You can edit a `.jsx` file and reload the browser — the whole site
  rebuilds itself in the browser every time.
- **Con:** the browser does the Babel compile on every page load.
  Slower than a pre-compiled bundle. Fine for a personal portfolio;
  not what you'd ship for a high-traffic app. The README has a note
  on how to swap in a real build step if/when it matters.

## The file structure

```
.
├── index.html                                 ← landing page (skeleton)
├── work/
│   └── construction-copilot.html              ← case-study page (skeleton)
├── CV-Sindri-Mar-Hilmarsson-standalone.html   ← bundled CV (self-contained)
├── Eg.jpg                                     ← headshot
├── highlands/
│   ├── colors_and_type.css                    ← design-system tokens
│   ├── fonts/                                 ← Source Serif 4 font files
│   └── assets/                                ← mascot image
└── scripts/
    ├── shared.jsx                             ← palette, profile, projects, helpers
    ├── bloom-landing.jsx                      ← BloomLanding component
    ├── project-copilot.jsx                    ← CopilotPage component
    ├── app-landing.jsx                        ← mounts BloomLanding into index.html
    └── app-copilot.jsx                        ← mounts CopilotPage into the case study
```

Two HTML files (`index.html` and `work/construction-copilot.html`)
each act as a thin **skeleton** that loads shared `.jsx` files and
hands rendering off to React. Both skeletons load `shared.jsx` first
because it defines the data and helpers everyone else uses.

## How an HTML page boots a React component

Take `index.html` as the example:

1. `<head>` loads the CSS tokens from `highlands/colors_and_type.css`.
2. `<body>` contains `<div id="root"></div>` — empty.
3. Scripts load in order: React → ReactDOM → Babel → shared.jsx →
   bloom-landing.jsx → app-landing.jsx.
4. `shared.jsx` defines `PROFILE`, `PROJECTS`, `NOW_ITEMS`, `RESUME`,
   plus helpers (`HLButton`, `LangToggle`, `t`, `useLanguage`, art
   primitives) and exposes them on `window` so the other scripts can
   see them.
5. `bloom-landing.jsx` defines the `BloomLanding` component (the
   whole landing page as a function returning JSX).
6. `app-landing.jsx` is the tiny entry point — it picks a palette
   and calls `ReactDOM.createRoot(document.getElementById('root')).render(<BloomLanding ... />)`.
7. React calls `BloomLanding`, which returns a tree of JSX. React
   converts the tree into actual HTML and injects it into the empty
   `<div id="root">`. The page becomes visible.

The case-study page (`work/construction-copilot.html`) follows the
identical pattern, just with `CopilotPage` instead of `BloomLanding`.

## Where content lives

**`scripts/shared.jsx`** is the content + design system file. The
constants at the top are the data:

- `PROFILE` — name, role, email, photo, etc.
- `PROJECTS` — the cards on the landing page.
- `NOW_ITEMS` — the bullets in the "Now" section.
- `RESUME` — the timeline rows.

Edit one of these and the site re-renders the next time you reload.
Most copy edits are one-liners in this file.

**`scripts/bloom-landing.jsx`** owns the *layout* of the landing page
— how the data is arranged on screen. Edit it if you want to change
section ordering, the hero copy, the font sizes.

**`scripts/project-copilot.jsx`** owns the case-study layout. Same
idea, different page.

**`highlands/colors_and_type.css`** owns the brand tokens — colors,
fonts, spacing. Most of the visual identity lives here. Don't change
ember red (`--primary-500`) — the design system locks it.

## The language toggle

There's a small bilingual mechanic wired up:

- `useLanguage()` is a React hook in `shared.jsx` that holds the
  current language (`'is'` or `'en'`), persists it to `localStorage`,
  and keeps `<html lang>` in sync.
- `LangToggle` is the IS / EN button cluster you see in the top-right
  of every page.
- `t(value, lang)` is a tiny helper that resolves either a plain
  string (same in both languages) or a `{ is, en }` object (returns
  the right language with a fallback chain).

When a string needs translating, it goes from `'Hello'` to
`{ is: 'Halló', en: 'Hello' }` in the data, and the render site uses
`t(value, lang)` to pick the right one. See `docs/` for the
translation workflow (or the README) once that doc exists.

## Deployment

**The repo:** `github.com/sindrihilmars/portfolio-next` (this one).

**The host:** GitHub Pages — a free static-site host built into
GitHub. It watches the `main` branch and re-serves whatever's there.
Every push triggers a rebuild that takes 30–60 seconds.

**The URL:** <https://sindrihilmars.github.io/portfolio-next/>

This is the preview site. There's a *separate* repo at
`sindrihilmars.github.io` that hosts the current live portfolio
(the old design); when this site is ready to launch, its contents
get copied over there.

## Editing day-to-day

The whole flow with no build step:

```bash
# 1. Start a local server (the JSX files need HTTP, not file://)
python3 -m http.server 8000

# 2. Edit any file in scripts/, highlands/, *.html

# 3. Reload the browser at http://localhost:8000

# 4. When happy:
git add -A
git commit -m "what you changed"
git push
```

Within a minute the preview URL reflects what you pushed.

## Things you'll commonly want to do

| Want to change… | Edit… |
|---|---|
| Your name, email, photo, CV link | `scripts/shared.jsx` → `PROFILE` |
| The project cards on the landing | `scripts/shared.jsx` → `PROJECTS` |
| What you're "now" working on | `scripts/shared.jsx` → `NOW_ITEMS` |
| Résumé rows | `scripts/shared.jsx` → `RESUME` |
| Landing page layout / sections | `scripts/bloom-landing.jsx` |
| Case study content | `scripts/project-copilot.jsx` |
| Colors, fonts, spacing | `highlands/colors_and_type.css` |
| The tab title (browser bar) | `<title>` tag in the .html files |
| The CV itself | The standalone HTML at the repo root |

That's the whole architecture. Two HTML skeletons, three JSX files of
logic, one CSS file of design tokens, a bundled CV, and a headshot —
loaded together via React and Babel from a CDN, served by GitHub
Pages.
