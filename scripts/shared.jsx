// shared.jsx — Highlands tokens, project data, shared art primitives.
//
// The palette object keeps its original key names (paper/cream/ink/mute/line/
// moss/spring/tundra/clay) so the three direction files don't need to be
// rewritten end-to-end. The hex values come straight from the Highlands
// design system. Each palette only swaps which accent plays the role of the
// dominant warmth — ember red is always present in the system, the question
// is how loud it speaks.

const HL = {
  // Glacier — cold neutrals.
  glacier50:  '#f4f6f7',
  glacier100: '#e6eaec',
  glacier200: '#cdd5d9',
  glacier300: '#a9b5bb',
  glacier400: '#7d8c93',
  glacier500: '#58656c',
  glacier700: '#38444a',
  glacier900: '#1c262b',
  // Primary — volcanic crater (the brand warmth).
  primary100: '#f6ddd0',
  primary300: '#df9168',
  primary500: '#c0492a',  // ember red — THE brand color
  primary700: '#8a2f1c',
  // Accents — glacial water, highland moss, warm ember.
  glacierAccent: '#2bb6c4',
  mossAccent:    '#8a9637',
  emberAccent:   '#e89d3c',
};

const PALETTES = {
  // Default Highlands: ember warmth, glacial water as cool secondary.
  ember: {
    paper:  HL.glacier50,
    cream:  HL.glacier100,
    ink:    HL.glacier900,
    mute:   HL.glacier700,
    line:   HL.glacier200,
    moss:   HL.primary500,     // dominant warmth (ember red)
    spring: HL.glacierAccent,  // cool counterpoint
    tundra: HL.primary100,     // soft warm tint surface
    clay:   HL.primary700,     // deepest warmth
  },
  // Moss-led: lichen green is the dominant warmth, ember still punctuates.
  moss: {
    paper:  HL.glacier50,
    cream:  HL.glacier100,
    ink:    HL.glacier900,
    mute:   HL.glacier700,
    line:   HL.glacier200,
    moss:   HL.mossAccent,
    spring: HL.glacierAccent,
    tundra: HL.glacier100,
    clay:   HL.primary500,
  },
  // Glacier-led: cool teal forward, ember reserved for one or two punctuations.
  glacier: {
    paper:  HL.glacier50,
    cream:  HL.glacier100,
    ink:    HL.glacier900,
    mute:   HL.glacier700,
    line:   HL.glacier200,
    moss:   HL.glacierAccent,
    spring: HL.mossAccent,
    tundra: HL.glacier100,
    clay:   HL.primary500,
  },
};

// Dark mode — swap bg/surface/fg per the Highlands deviation note. Ember
// (and whichever accent is "moss" in the palette) stays exactly where it is.
const DARK_OF = (p) => ({
  ...p,
  paper:  '#10171a',
  cream:  '#1c262b',
  ink:    '#f4f6f7',
  mute:   '#cdd5d9',
  line:   '#2a363c',
  tundra: '#2a363c',
});

function resolvePalette(name, dark) {
  const base = PALETTES[name] || PALETTES.ember;
  return dark ? DARK_OF(base) : base;
}

const PROFILE = {
  name: 'Sindri Hilmarsson',
  initials: 'SH',
  role: 'Engineer · Team lead · AI tinkerer',
  location: 'Trondheim, NO',
  email: 'sindrihilmars@gmail.com',
  github: 'github.com/sindrihilmars',
  linkedin: 'in/sindrihilmars',
  blurb: 'I work between high-voltage hardware and applied machine learning — Formula Student by day, edge models for fish and field reports by night.',
};

const PROJECTS = [
  {
    num: '01',
    name: 'Team Spark — 2026 Season',
    tag:  'Formula Student',
    role: 'Team Principal',
    year: '2025—26',
    status: 'In season',
    blurb: 'Leading a 38-person student-built electric race car program through design, manufacture and four European events.',
    bullets: ['Team of 38 across 6 disciplines', '4 events · Hockenheim, Spielberg, Most, Assen', 'Budget +42% YoY'],
    art: 'circuit',
  },
  {
    num: '02',
    name: 'High-Voltage Pack',
    tag:  'Hardware',
    role: 'Lead Engineer',
    year: '2025—26',
    status: 'Production',
    blurb: 'A 600V lithium pack — cell selection, BMS, liquid cooling, crash structure. The whole stack, drawn cell-up.',
    bullets: ['600V · 7.2 kWh · LFP', 'Custom BMS, 144 cells monitored', 'Sub-12s thermal runaway containment'],
    art: 'pack',
  },
  {
    num: '03',
    name: 'Dagskýrslutól',
    tag:  'Applied AI',
    role: 'Builder',
    year: '2025—',
    status: 'Daily production',
    href: 'work/construction-copilot.html',
    blurb: 'A voice-first daily-reporting copilot for Icelandic worksites. Supervisors dictate the day; Claude extracts structured fields; ReportLab renders the company\'s existing PDF — in Icelandic, in seconds.',
    bullets: ['Python · Claude · Whisper · Telegram', 'Clarification loops + Opus→Sonnet→Haiku fallback', 'Multilingual input → Icelandic output'],
    art: 'agent',
  },
  {
    num: '04',
    name: 'Wild Salmon Watch',
    tag:  'Edge ML',
    role: 'Builder',
    year: '2024—25',
    status: 'Field trial',
    blurb: 'A solar-powered river camera that uses on-device vision to flag farmed salmon escapees in Norwegian rivers — no cloud, no signal needed.',
    bullets: ['On-device · runs on a Coral TPU', '92.4% F1 on the Orkla test set', 'Deployed on 3 rivers in Trøndelag'],
    art: 'salmon',
  },
];

const NOW_ITEMS = [
  { date: 'this week',  text: 'Stress-testing pack modules ahead of Hockenheim.' },
  { date: 'this month', text: 'Tuning Construction Copilot\'s evidence retrieval and citation behaviour.' },
  { date: 'this month', text: 'Writing up the Salmon Watch field data for SINTEF.' },
  { date: 'reading',    text: 'The Pattern on the Stone — Hillis. Re-reading.' },
];

const RESUME = [
  { period: '2024—', org: 'NTNU',          line: 'MSc Energy & Environmental Engineering, in progress.' },
  { period: '2025—', org: 'Team Spark',    line: 'Team Principal. 2024–25: Battery Lead.' },
  { period: '2024—', org: 'Independent',   line: 'Edge ML & AI agents — fisheries and construction.' },
  { period: '2023',  org: 'Kongsberg Mar.',line: 'Intern, control systems. Drilling automation.' },
  { period: '2020',  org: 'NTNU',          line: 'Started undergrad. Built a robot lawnmower the same year.' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Art primitives — flat planes only. Highlands disallows gradients, patterns
// and full-bleed photography; surfaces are atmospheric flat color with one
// or two geometric pulls from the palette. Each glyph is a CSS/SVG placeholder
// the user can later swap for real screenshots or project art.

function ArtBlob({ palette, seed = 0, style }) {
  // Flat plane with two solid color shapes — no gradients.
  const hues = [palette.moss, palette.spring, palette.clay, palette.tundra];
  const a = hues[seed % 4];
  const b = hues[(seed + 1) % 4];
  return (
    <div style={{
      position: 'relative', overflow: 'hidden', borderRadius: 12,
      background: palette.cream,
      border: `1.5px solid ${palette.line}`,
      ...style,
    }}>
      <div style={{
        position: 'absolute', width: '60%', height: '70%',
        left: '8%', top: '12%', background: a,
      }}/>
      <div style={{
        position: 'absolute', width: '40%', height: '50%',
        right: '6%', bottom: '8%', background: b,
      }}/>
    </div>
  );
}

function ArtCircuit({ palette, style }) {
  // Racetrack outline on a flat moss field.
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 12,
      background: palette.moss,
      border: `1.5px solid ${palette.ink}`, ...style }}>
      <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet" style={{
        position: 'absolute', inset: '10%', width: '80%', height: '80%',
      }}>
        <path d="M 20 60 C 20 20, 80 20, 100 40 S 180 30, 180 60 S 140 100, 100 90 S 20 100, 20 60 Z"
              fill="none" stroke={palette.paper} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M 20 60 C 20 20, 80 20, 100 40 S 180 30, 180 60 S 140 100, 100 90 S 20 100, 20 60 Z"
              fill="none" stroke={palette.paper} strokeWidth="0.8" strokeDasharray="2 6" opacity="0.6"/>
        <circle cx="100" cy="40" r="3.5" fill={palette.paper}/>
        <circle cx="100" cy="40" r="6.5" fill="none" stroke={palette.paper} strokeWidth="0.8" opacity="0.5"/>
      </svg>
    </div>
  );
}

function ArtPack({ palette, style }) {
  // Battery cells — flat grid of pills on a cool tundra ground.
  const cells = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) {
    cells.push(<div key={`${r}-${c}`} style={{
      width: 14, height: 28, borderRadius: 4,
      background: (r + c) % 5 === 0 ? palette.clay : palette.ink,
      opacity: 0.85,
    }}/>);
  }
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 12,
      background: palette.tundra,
      border: `1.5px solid ${palette.line}`, padding: 22, ...style }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 14px)',
        gap: 6, justifyContent: 'center', alignContent: 'center', height: '100%' }}>
        {cells}
      </div>
    </div>
  );
}

function ArtAgent({ palette, style }) {
  // Node-graph: solid circles connected by 1.5px lines. No fill gradient.
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 12,
      background: palette.cream,
      border: `1.5px solid ${palette.line}`, ...style }}>
      <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet"
           style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <g stroke={palette.ink} strokeOpacity="0.55" strokeWidth="1.2" fill="none">
          <line x1="40" y1="40" x2="100" y2="60"/>
          <line x1="100" y1="60" x2="160" y2="30"/>
          <line x1="100" y1="60" x2="150" y2="90"/>
          <line x1="40" y1="40" x2="50" y2="90"/>
          <line x1="50" y1="90" x2="100" y2="60"/>
        </g>
        <g fill={palette.spring}>
          <circle cx="40" cy="40" r="7"/>
          <circle cx="160" cy="30" r="6"/>
          <circle cx="50" cy="90" r="5"/>
          <circle cx="150" cy="90" r="6"/>
        </g>
        <circle cx="100" cy="60" r="11" fill={palette.moss}/>
      </svg>
    </div>
  );
}

function ArtSalmon({ palette, style }) {
  // Flat river bands — two stripes of color, not a gradient.
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 12,
      background: palette.spring,
      border: `1.5px solid ${palette.ink}`, ...style }}>
      <svg viewBox="0 0 200 120" preserveAspectRatio="none"
           style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect x="0" y="78" width="200" height="42" fill={palette.tundra} opacity="0.6"/>
        <rect x="0" y="96" width="200" height="24" fill={palette.cream} opacity="0.45"/>
        <g fill={palette.ink}>
          <ellipse cx="120" cy="55" rx="10" ry="4"/>
          <path d="M 130 55 l 7 -4 l 0 8 z"/>
        </g>
        <g stroke={palette.clay} strokeWidth="1.5" fill="none">
          <circle cx="120" cy="55" r="16"/>
          <circle cx="120" cy="55" r="26" opacity="0.55"/>
          <circle cx="120" cy="55" r="36" opacity="0.25"/>
        </g>
      </svg>
    </div>
  );
}

function ProjectArt({ kind, palette, style }) {
  if (kind === 'circuit') return <ArtCircuit palette={palette} style={style}/>;
  if (kind === 'pack')    return <ArtPack    palette={palette} style={style}/>;
  if (kind === 'agent')   return <ArtAgent   palette={palette} style={style}/>;
  if (kind === 'salmon')  return <ArtSalmon  palette={palette} style={style}/>;
  return <ArtBlob palette={palette} style={style}/>;
}

// Highlands button — sharp 0px corners, 2px glacier-900 border, hard offset
// shadow. Press collapses the shadow. Used across all three directions.
// Renders as <a> when `href` is provided, otherwise <button>.
function HLButton({ children, primary, palette, style, fontBody, href }) {
  const p = palette;
  const bg = primary ? p.moss : p.paper;
  const fg = primary ? p.paper : p.ink;
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : { type: 'button' };
  return (
    <Tag
      {...tagProps}
      style={{
        display: 'inline-block',
        fontFamily: fontBody || `'Bricolage Grotesque', system-ui, sans-serif`,
        fontWeight: 600, fontSize: 13,
        padding: '14px 26px',
        borderRadius: 0,
        background: bg, color: fg,
        border: `2px solid ${p.ink}`,
        textTransform: 'uppercase',
        letterSpacing: '0.09em',
        boxShadow: `4px 4px 0 ${p.ink}`,
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'transform 0.06s linear, box-shadow 0.06s linear',
        ...style,
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translate(3px, 3px)';
        e.currentTarget.style.boxShadow = `1px 1px 0 ${p.ink}`;
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = `4px 4px 0 ${p.ink}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = `4px 4px 0 ${p.ink}`;
      }}
    >
      {children}
    </Tag>
  );
}

Object.assign(window, {
  HL, PALETTES, resolvePalette,
  PROFILE, PROJECTS, NOW_ITEMS, RESUME,
  ArtBlob, ArtCircuit, ArtPack, ArtAgent, ArtSalmon, ProjectArt,
  HLButton,
});
