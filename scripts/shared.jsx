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
  name: 'Sindri Már Hilmarsson',
  initials: 'SMH',
  role: 'Mechanical Engineer · BS · Edge AI & agents',
  location: 'Reykjavík, Iceland',
  email: 'sindrihilmars@gmail.com',
  phone: '+354 696 1902',
  github: 'github.com/sindrihilmars',
  linkedin: null,
  cvHref: 'CV-Sindri-Mar-Hilmarsson-standalone.html',
  photo: 'Eg.jpg',
  blurb: 'Mechanical engineer with a deep interest in edge AI and agents. My mechanical-engineering background lets me ground that knowledge in tangible work — and I am looking for a role where bringing AI into real systems is at the centre of the work.',
};

const PROJECTS = [
  {
    num: '01',
    name: 'Team Spark',
    tag:  'Formula Student',
    role: { is: 'Framleiðslustjóri', en: 'Production Lead' },
    year: '2023—26',
    status: { is: 'Spánn 2026', en: 'Spain 2026' },
    blurb: {
      is: 'Formula Student lið Háskóla Íslands. Yfir framleiðslu fyrsta battery pakka Team Spark síðan 2017, leiddi liðið með fyrsta keyrandi bílinn síðan 2019, tók stóran þátt í framleiðslu koltrefja einbolungs 2024, var yfir drifkerfinu 2025 og er á leið út á keppni með 30 manna hóp efnilegra verkfræðinga.',
      en: 'University of Iceland\'s Formula Student team. Led production of Team Spark\'s first battery pack since 2017, led the team\'s first running car since 2019, played a major role in the 2024 carbon-fibre monocoque, oversaw the drivetrain in 2025 — heading to competition in Spain with a 30-person crew of promising engineers.',
    },
    bullets: [
      { is: 'Framleiðslustjóri', en: 'Production Lead' },
      { is: 'Fyrsti Batterípakki síðan 2017', en: 'First battery pack since 2017' },
      { is: 'Fyrsti keyrandi bíll síðan 2019 → Spánn 2026', en: 'First running car since 2019 → Spain 2026' },
    ],
    art: 'circuit',
  },
  {
    num: '02',
    name: 'Dagskýrslutól',
    tag:  'Applied AI',
    role: { is: 'Frumkvöður', en: 'Builder' },
    year: '2026—',
    status: { is: 'Beta Útgáfa', en: 'Beta release' },
    href: 'work/construction-copilot.html',
    blurb: {
      is: 'Dagskýrslu erindreki byggður í kringum Íslenskt talmál. Verkstjórar senda radd-skilaboð í gegnum Telegram og fá til baka sérsniðna skýrslu, sem þarf síðan að samþykkja. Erindrekinn getur spurt spurninga sem tryggja að allt kemur fram sem þarf að koma fram.',
      en: 'A daily-report agent built around Icelandic speech. Site supervisors send voice messages via Telegram and receive a tailored report to approve. The agent asks clarifying questions to make sure nothing important gets left out.',
    },
    bullets: [
      'Python · Claude · Whisper · Telegram',
      'Multilingual input → Icelandic output',
      'Clarification loops + Opus→Sonnet→Haiku fallback',
    ],
    art: 'agent',
  },
];

const NOW_ITEMS = [
  {
    date: { is: 'Þetta tímabil', en: 'this season' },
    text: {
      is: 'Taka Team Spark út á Formula Student Spain með keyrandi bíl.',
      en: 'Taking Team Spark to Formula Student Spain — with a running car.',
    },
  },
  {
    date: { is: 'Þennan mánuð', en: 'this month' },
    text: {
      is: 'Koma dagskýrslu erindreka í notkun.',
      en: 'Getting Dagskýrslutól into use.',
    },
  },
  {
    date: { is: 'Leita af', en: 'looking' },
    text: {
      is: 'tækifærum til að innleiða gervigreind inn í Íslenskt atvinnulíf.',
      en: 'for opportunities to bring AI into Icelandic industry.',
    },
  },
];

const RESUME = [
  {
    period: '2022—26',
    org: { is: 'Háskóli Íslands', en: 'University of Iceland' },
    line: {
      is: 'BS í vélaverkfræði með áherslu á gervigreind. REI505M (stærðfræðin á bakvið módelin) og RAF622M (þjálfun á módeli fyrir jarðarkönnuna á ofurtölvu í Jülich).',
      en: 'BS in Mechanical Engineering with a focus on AI. REI505M (the math behind the models) and RAF622M (training a model for earth observation on a supercomputer in Jülich).',
    },
  },
  {
    period: '2023—26',
    org: 'Team Spark',
    line: {
      is: 'Framleiðslustjóri 2026, Hópstjóri drifkerfis 2025, framleiddi koltrefja monocoque með liðinu 2024.',
      en: 'Production Lead 2026, drivetrain team lead 2025, produced the carbon-fibre monocoque with the team in 2024.',
    },
  },
  {
    period: '2024—25',
    org: 'Norðurál',
    line: {
      is: 'Starfsmaður í kerskála, skautskipti og áltaka á brúkrana.',
      en: 'Pot-room worker — anode changing and aluminium tapping on overhead cranes.',
    },
  },
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

// ─── i18n ─────────────────────────────────────────────────────────────────────
// Strings can be either a plain string (same in both languages, e.g. "Python")
// or a { is, en } object. t() resolves to the right language with a fallback
// chain: requested lang → en → is → empty.
//
// To make a string bilingual: replace `'My text'` with `{ is: 'Texti minn',
// en: 'My text' }`. To make a render site bilingual: replace `value` with
// `t(value, lang)`. Wherever data flows through shared.jsx (PROFILE, PROJECTS,
// NOW_ITEMS, RESUME) is a fine place to start.
function t(value, lang) {
  if (typeof value === 'string') return value;
  if (value == null) return '';
  return value[lang] || value.en || value.is || '';
}

// Persists choice to localStorage and keeps <html lang> in sync.
// Default 'en' for now — flip to 'is' once Icelandic copy is complete.
function useLanguage(defaultLang = 'en') {
  const [lang, setLangState] = React.useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-lang');
      return saved === 'is' || saved === 'en' ? saved : defaultLang;
    } catch (_e) { return defaultLang; }
  });
  const setLang = React.useCallback((next) => {
    setLangState(next);
    try { localStorage.setItem('portfolio-lang', next); } catch (_e) {}
    if (typeof document !== 'undefined') document.documentElement.lang = next;
  }, []);
  React.useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.lang = lang;
  }, [lang]);
  return [lang, setLang];
}

// Hard-edged IS / EN toggle for the page chrome. Mirrors the CV's toggle so
// the two artifacts feel like one system.
function LangToggle({ lang, setLang, palette, fontBody }) {
  const p = palette;
  const fontText = fontBody || `'Bricolage Grotesque', system-ui, sans-serif`;
  return (
    <div style={{
      display: 'inline-flex',
      border: `1.5px solid ${p.ink}`,
      background: p.paper,
      fontFamily: fontText,
    }}>
      {['is', 'en'].map((L) => {
        const active = lang === L;
        return (
          <button key={L}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(L)}
            style={{
              fontFamily: 'inherit',
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '6px 11px',
              background: active ? p.ink : 'transparent',
              color: active ? p.paper : p.ink,
              border: 'none', cursor: 'pointer', outline: 'none',
              transition: 'background-color 0.1s linear, color 0.1s linear',
            }}>
            {L.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, {
  HL, PALETTES, resolvePalette,
  PROFILE, PROJECTS, NOW_ITEMS, RESUME,
  ArtBlob, ArtCircuit, ArtPack, ArtAgent, ArtSalmon, ProjectArt,
  HLButton,
  t, useLanguage, LangToggle,
});
