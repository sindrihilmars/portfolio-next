// direction-bloom.jsx — Editorial direction, in Highlands.
// Source Serif 4 carries display + italic asides; Bricolage Grotesque body;
// JetBrains Mono for small chrome. Ember red is the brand pull, glacier-900
// the type color, glacier-200 the dividers. No gradients — Highlands forbids
// them. Section numerals (01, 02…) replace the "§" mark.
//
// Hover is print-leaning per the system: rules darken, underlines draw in
// from the left, the card numeral shifts to clay. No lifts, no transforms.

if (typeof document !== 'undefined' && !document.getElementById('bloom-styles')) {
  const s = document.createElement('style');
  s.id = 'bloom-styles';
  s.textContent = `
    /* Nav: animated underline drawing in from the left. */
    .bloom-nav a {
      position: relative;
      padding-bottom: 4px;
      transition: color 0.12s linear;
    }
    .bloom-nav a::after {
      content: '';
      position: absolute; left: 0; right: 0; bottom: 0;
      height: 1.5px; background: currentColor;
      transform-origin: left center;
      transform: scaleX(0);
      transition: transform 0.18s cubic-bezier(.4,.0,.2,1);
    }
    .bloom-nav a.is-active::after { transform: scaleX(1); }
    .bloom-nav a:hover { color: var(--bloom-ink); }
    .bloom-nav a:hover::after { transform: scaleX(1); }

    /* Project cards: top rule darkens, numeral shifts to clay, arrow slides. */
    .bloom-card {
      cursor: pointer;
      transition: border-color 0.16s linear;
    }
    .bloom-card .bloom-card-num {
      transition: color 0.16s linear;
    }
    .bloom-card .bloom-card-arrow {
      display: inline-block;
      transform: translateX(0);
      opacity: 0;
      transition: transform 0.18s cubic-bezier(.4,.0,.2,1), opacity 0.16s linear;
    }
    .bloom-card:hover { border-top-color: var(--bloom-ink); }
    .bloom-card:hover .bloom-card-num { color: var(--bloom-clay); }
    .bloom-card:hover .bloom-card-arrow { opacity: 1; transform: translateX(6px); }
    .bloom-card .bloom-card-title {
      background-image: linear-gradient(currentColor, currentColor);
      background-repeat: no-repeat;
      background-position: 0 100%;
      background-size: 0 2px;
      transition: background-size 0.25s cubic-bezier(.4,.0,.2,1);
      padding-bottom: 2px;
    }
    .bloom-card:hover .bloom-card-title {
      background-size: 100% 2px;
    }

    /* Résumé rows: tint on hover. */
    .bloom-resume-row {
      transition: background-color 0.14s linear;
      margin: 0 -8px;
      padding-left: 8px !important;
      padding-right: 8px !important;
    }
    .bloom-resume-row:hover { background: var(--bloom-cream); }

    /* Contact links: underline thickens / offset deepens. */
    .bloom-contact a {
      transition: text-underline-offset 0.18s cubic-bezier(.4,.0,.2,1);
    }
    .bloom-contact a:hover {
      text-underline-offset: 9px;
    }

    /* Hero "weird" / italic accents already inherit color from inline style.
       Nothing to do there. */
  `;
  document.head.appendChild(s);
}

function BloomLanding({ palette: p, cardStyle = 'default' }) {
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
      '--bloom-moss': p.moss,
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
            Sindri&nbsp;Már&nbsp;Hilmarsson
          </span>
          <span style={{ fontFamily: fontText, fontSize: 11, color: p.mute,
            letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500 }}>
            — portfolio · 2026
          </span>
        </div>
        <nav className="bloom-nav" style={{ display: 'flex', gap: 28, fontFamily: fontText, fontSize: 13,
          letterSpacing: '0.04em' }}>
          {[
            { l: 'Work',    h: '#work' },
            { l: 'Now',     h: '#now' },
            { l: 'Résumé', h: '#resume' },
            { l: 'Say hi',  h: '#contact' },
          ].map((n, i) => (
            <a key={n.l} href={n.h} className={i === 0 ? 'is-active' : ''}
              style={{ color: i === 0 ? p.ink : p.mute, textDecoration: 'none' }}>
              {n.l}
            </a>
          ))}
        </nav>
      </header>

      {/* ─── hero ──────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '88px 80px 100px',
        display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 64,
        borderBottom: `2px solid ${p.line}` }}>
        <div>
          <div style={{ fontFamily: fontDisplay, fontStyle: 'italic',
            fontSize: 20, color: p.clay, marginBottom: 28 }}>
            Reykjavík, Iceland — open for work.
          </div>
          <h1 style={{
            fontFamily: fontDisplay, fontWeight: 600,
            fontSize: 104, lineHeight: 0.98,
            letterSpacing: '-0.018em',
            margin: '0 0 32px', color: p.ink,
          }}>
            Engineering<br/>
            between&nbsp;<span style={{
              fontStyle: 'italic', fontWeight: 500, color: p.moss,
            }}>batteries</span><br/>
            and&nbsp;<span style={{
              fontStyle: 'italic', fontWeight: 500, color: p.spring,
            }}>machine&nbsp;learning</span>.
          </h1>
          <p style={{
            fontSize: 20, lineHeight: 1.5, maxWidth: 540,
            color: p.mute, margin: '0 0 36px',
          }}>
            Formula Student by day. Edge models for fish and field reports by night.
            One careful pass at a time.
          </p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <HLButton primary palette={p} fontBody={fontText} href="#work">See the work</HLButton>
            <HLButton palette={p} fontBody={fontText} href={`mailto:${PROFILE.email}`}>Write to me</HLButton>
          </div>
        </div>

        {/* Brand portrait — boxed photograph, ember hard-offset, concentric rings. */}
        <div style={{
          position: 'relative', alignSelf: 'stretch', minHeight: 420,
          background: p.cream, border: `1.5px solid ${p.line}`, borderRadius: 20,
          overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* Concentric rings — ink, faint, as decorative ground. */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            {[20,30,40,50].map((r,i) => (
              <circle key={r} cx="50" cy="50" r={r} fill="none"
                stroke={p.ink} strokeOpacity={0.10 - i*0.018} strokeWidth="0.25"/>
            ))}
          </svg>
          {/* Headshot — framed, ember hard-offset shadow, gently desaturated. */}
          <div style={{
            position: 'relative',
            width: 280, maxWidth: '78%',
            aspectRatio: '4 / 5',
            border: `1.5px solid ${p.ink}`,
            overflow: 'hidden',
            background: p.tundra,
            boxShadow: `8px 8px 0 ${p.moss}`,
          }}>
            <img src={PROFILE.photo} alt={PROFILE.name}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                objectPosition: 'center 25%',
                filter: 'grayscale(0.15) contrast(1.02)',
                display: 'block',
              }}/>
          </div>
          {/* Spec stamp in the corner. */}
          <div style={{
            position: 'absolute', bottom: 18, right: 22,
            fontFamily: fontMono, fontSize: 10, color: p.ink,
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            No. 0007 · Spring 26
          </div>
        </div>
      </section>

      {/* ─── selected work ─────────────────────────────────────────── */}
      <section id="work" style={{ position: 'relative', padding: '88px 80px',
        borderBottom: `2px solid ${p.line}`, scrollMarginTop: 80 }}>
        <SectionLabel num="01">Selected work · 2024—26</SectionLabel>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, rowGap: 64,
        }}>
          {PROJECTS.map((proj, i) => (
            <BloomCard key={proj.num} proj={proj} palette={p} style={cardStyle}
              fonts={{ display: fontDisplay, text: fontText, mono: fontMono }}/>
          ))}
        </div>
      </section>

      {/* ─── now ────────────────────────────────────────────────────── */}
      <section id="now" style={{ position: 'relative', padding: '88px 80px',
        display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80,
        borderBottom: `2px solid ${p.line}`, scrollMarginTop: 80 }}>
        <div>
          <SectionLabel num="02">Now</SectionLabel>
          <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 52,
            lineHeight: 1.05, letterSpacing: '-0.018em',
            margin: '0 0 16px', color: p.ink }}>
            What I'm <em style={{ color: p.clay, fontWeight: 500 }}>actually</em><br/>
            working on.
          </h2>
          <p style={{ color: p.mute, fontSize: 15, maxWidth: 380, margin: 0 }}>
            Updated whenever the answer changes. No dashboard, no streaks — just the
            next three or four real things in front of me.
          </p>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0,
          borderTop: `2px solid ${p.line}` }}>
          {NOW_ITEMS.map((it, i) => (
            <li key={i} style={{
              display: 'grid', gridTemplateColumns: '140px 1fr', gap: 24,
              padding: '22px 0', borderBottom: `1.5px solid ${p.line}`,
              alignItems: 'baseline',
            }}>
              <span style={{ fontFamily: fontText, fontSize: 11, color: p.mute,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                fontWeight: 600 }}>
                {it.date}
              </span>
              <span style={{ fontSize: 19, lineHeight: 1.45,
                fontFamily: fontDisplay, fontStyle: 'italic',
                fontWeight: 400, color: p.ink }}>
                {it.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── résumé ────────────────────────────────────────────────── */}
      <section id="resume" style={{ position: 'relative', padding: '88px 80px',
        display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80,
        borderBottom: `2px solid ${p.line}`, scrollMarginTop: 80 }}>
        <div>
          <SectionLabel num="03">Résumé</SectionLabel>
          <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 52,
            lineHeight: 1.05, letterSpacing: '-0.018em',
            margin: '0 0 28px', color: p.ink }}>
            The official<br/>
            <em style={{ color: p.clay, fontWeight: 500 }}>version</em>.
          </h2>
          <HLButton palette={p} fontBody={fontText} href={PROFILE.cvHref}>Open full CV →</HLButton>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0,
          borderTop: `2px solid ${p.line}` }}>
          {RESUME.map((r, i) => (
            <li key={i} className="bloom-resume-row" style={{
              display: 'grid', gridTemplateColumns: '120px 200px 1fr', gap: 24,
              padding: '22px 0', borderBottom: `1.5px solid ${p.line}`,
              alignItems: 'baseline',
            }}>
              <span style={{ fontFamily: fontMono, fontSize: 12, color: p.mute,
                letterSpacing: '0.04em' }}>{r.period}</span>
              <span style={{ fontFamily: fontDisplay, fontWeight: 600,
                fontSize: 22, color: p.ink, letterSpacing: '-0.01em' }}>{r.org}</span>
              <span style={{ fontSize: 15, color: p.mute }}>{r.line}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── contact ───────────────────────────────────────────────── */}
      <section id="contact" style={{
        position: 'relative', padding: '120px 80px 96px',
        background: p.cream, scrollMarginTop: 80,
      }}>
        <SectionLabel num="04">Say hi</SectionLabel>
        <h2 style={{
          fontFamily: fontDisplay, fontWeight: 600, fontSize: 112,
          lineHeight: 0.98, letterSpacing: '-0.018em',
          margin: '0 0 48px', color: p.ink,
        }}>
          Let's build<br/>
          something <em style={{ color: p.moss, fontWeight: 500 }}>weird</em>.
        </h2>
        <div className="bloom-contact" style={{ display: 'flex', gap: 56, flexWrap: 'wrap',
          fontFamily: fontText, fontSize: 13, letterSpacing: '0.04em' }}>
          {[
            ['Email',    PROFILE.email, `mailto:${PROFILE.email}`],
            PROFILE.phone && ['Phone', PROFILE.phone, `tel:${PROFILE.phone.replace(/\s+/g, '')}`],
            PROFILE.github && ['GitHub', PROFILE.github, `https://${PROFILE.github}`],
            PROFILE.linkedin && ['LinkedIn', PROFILE.linkedin, `https://linkedin.com/${PROFILE.linkedin}`],
          ].filter(Boolean).map(([k, v, h]) => (
            <div key={k}>
              <div style={{ color: p.mute, fontSize: 11, textTransform: 'uppercase',
                letterSpacing: '0.14em', marginBottom: 6, fontWeight: 600 }}>{k}</div>
              <a href={h} style={{ color: p.ink, fontSize: 22, textDecoration: 'underline',
                textUnderlineOffset: 5, textDecorationColor: p.moss,
                textDecorationThickness: 2,
                fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400 }}>
                {v}
              </a>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 96, paddingTop: 24,
          borderTop: `2px solid ${p.line}`,
          display: 'flex',
          justifyContent: 'space-between', alignItems: 'baseline',
          fontFamily: fontText, fontSize: 11, color: p.mute,
          letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
          <span>© 2026 — Sindri Már Hilmarsson</span>
          <span style={{
            fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400,
            textTransform: 'none', letterSpacing: '0', fontSize: 14,
            color: p.clay,
          }}>
            Made slowly, in Reykjavík.
          </span>
        </div>
      </section>
    </div>
  );
}

function BloomCard({ proj, palette: p, fonts, style }) {
  const minimal = style === 'minimal';
  const featured = style === 'featured';
  const artHeight = featured ? 280 : minimal ? 0 : 220;
  const Tag = proj.href ? 'a' : 'article';
  const tagProps = proj.href ? { href: proj.href } : {};

  return (
    <Tag {...tagProps} className="bloom-card" style={{
      display: 'flex', flexDirection: 'column', gap: 18,
      paddingTop: 28, borderTop: `2px solid ${p.line}`,
      textDecoration: 'none', color: 'inherit',
      cursor: proj.href ? 'pointer' : 'default',
    }}>
      {!minimal && (
        <ProjectArt kind={proj.art} palette={p} style={{
          width: '100%', height: artHeight,
        }}/>
      )}
      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16,
      }}>
        <span className="bloom-card-num" style={{ fontFamily: fonts.display, fontWeight: 600,
          fontSize: 20, color: p.moss, letterSpacing: '-0.01em' }}>
          {proj.num}
        </span>
        <span style={{ fontFamily: fonts.text, fontSize: 11, color: p.mute,
          letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
          {proj.tag} · {proj.year}
        </span>
      </div>
      <h3 style={{
        fontFamily: fonts.display, fontWeight: 600,
        fontSize: featured ? 44 : 38,
        lineHeight: 1.05, margin: 0, color: p.ink, letterSpacing: '-0.018em',
      }}>
        <span className="bloom-card-title">{proj.name}</span>
        <span className="bloom-card-arrow" style={{ color: p.clay, marginLeft: 8 }}>→</span>
      </h3>
      <p style={{
        fontSize: 15, lineHeight: 1.6, color: p.mute, margin: 0, maxWidth: 480,
      }}>
        {proj.blurb}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '4px 12px', borderRadius: 999,
          background: p.tundra, color: p.clay, fontFamily: fonts.text,
          fontSize: 11, letterSpacing: '0.09em', textTransform: 'uppercase',
          fontWeight: 600,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%',
            background: p.moss }}/>
          {proj.status}
        </span>
        <span style={{ fontFamily: fonts.mono, fontSize: 11, color: p.mute }}>
          {proj.role}
        </span>
      </div>
    </Tag>
  );
}

window.BloomLanding = BloomLanding;
