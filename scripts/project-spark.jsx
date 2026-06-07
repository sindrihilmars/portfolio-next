// project-spark.jsx — Team Spark Formula Student case study.
// Highlands/moss palette. Three-year arc: monocoque 2024 → drivetrain 2025 → production lead 2026.

function SparkPage({ palette: p }) {
  const fontDisplay = `'Source Serif 4', Georgia, serif`;
  const fontText    = `'Bricolage Grotesque', system-ui, sans-serif`;
  const fontMono    = `'JetBrains Mono', ui-monospace, monospace`;
  const [lang, setLang] = useLanguage('en');

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
            Sindri&nbsp;Hilmarsson
          </span>
          <span style={{ fontFamily: fontText, fontSize: 11, color: p.mute,
            letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500 }}>
            {t({ is: '— verkefnasafn 2026', en: '— portfolio · 2026' }, lang)}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <nav style={{ display: 'flex', gap: 28, fontFamily: fontText, fontSize: 13,
            letterSpacing: '0.04em' }}>
            {[
              { l: { is: 'Verkefni',     en: 'Work' },    h: '../index.html#work' },
              { l: { is: 'Í vinnslu',    en: 'Now' },     h: '../index.html#now' },
              { l: { is: 'Ferilskrá',    en: 'Résumé' }, h: '../index.html#resume' },
              { l: { is: 'Hafa samband', en: 'Say hi' },  h: '../index.html#contact' },
            ].map((n) => (
              <a key={n.h} href={n.h}
                style={{ color: p.mute, textDecoration: 'none' }}>
                {t(n.l, lang)}
              </a>
            ))}
          </nav>
          <LangToggle lang={lang} setLang={setLang} palette={p} fontBody={fontText}/>
        </div>
      </header>

      {/* ─── breadcrumb ─────────────────────────────────────────────── */}
      <div style={{
        padding: '20px 80px',
        borderBottom: `1.5px solid ${p.line}`,
        fontFamily: fontText, fontSize: 12, color: p.mute,
        letterSpacing: '0.04em',
        display: 'flex', gap: 10, alignItems: 'center',
      }}>
        <a href="../index.html#work" style={{ color: p.mute, textDecoration: 'none' }}>{t({ is: '← Verkefni', en: '← Work' }, lang)}</a>
        <span style={{ color: p.line }}>/</span>
        <span style={{ color: p.ink }}>Team Spark</span>
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
              01
            </span>
            <span style={{ fontFamily: fontText, fontSize: 11, color: p.ink,
              textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600 }}>
              {t({ is: 'Formula Student 2023—26', en: 'Formula Student 2023—26' }, lang)}
            </span>
          </div>
          <h1 style={{
            fontFamily: fontDisplay, fontWeight: 600,
            fontSize: 92, lineHeight: 1.0,
            letterSpacing: '-0.018em',
            margin: '0 0 18px', color: p.ink,
          }}>
            Team Spark.
          </h1>
          <p style={{
            fontFamily: fontText, fontSize: 13, color: p.mute,
            letterSpacing: '0.05em', textTransform: 'uppercase',
            fontWeight: 600, margin: '0 0 22px',
          }}>
            {t({
              is: 'Kappakstursbíll smíðaður af nemendum — frá uppköstum á blað til keppni á vegum.',
              en: 'A racing car built by students — from drawings to competition on tarmac.',
            }, lang)}
          </p>
          <p style={{
            fontFamily: fontDisplay, fontStyle: 'italic',
            fontSize: 24, fontWeight: 400, lineHeight: 1.4,
            color: p.clay, maxWidth: 580, margin: 0,
          }}>
            {t({
              is: 'Þrjú ár. Koltrefjaþak 2024. Drifkerfi 2025. Framleiðslustjóri 2026 — á leið á keppni í Spáni með 30 manna hóp.',
              en: 'Three years. Carbon-fibre monocoque 2024. Drivetrain lead 2025. Production Lead 2026 — heading to competition in Spain with a crew of 30.',
            }, lang)}
          </p>
        </div>

        {/* meta card */}
        <div style={{
          background: p.cream, border: `1.5px solid ${p.line}`, borderRadius: 12,
          padding: 28,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
        }}>
          {[
            [{ is: 'Hlutverk',        en: 'Role'     }, { is: 'Framleiðslustjóri', en: 'Production Lead' }],
            [{ is: 'Tímalína',        en: 'Timeline' }, '2023—26'],
            [{ is: 'Lið',             en: 'Team'     }, { is: '30 á keppni',        en: '30 at competition' }],
            [{ is: 'Staða',           en: 'Status'   }, { is: 'Spánn 2026',         en: 'Spain 2026' }],
          ].map(([k, v], i) => (
            <div key={i}>
              <div style={{ fontFamily: fontText, fontSize: 10, color: p.mute,
                textTransform: 'uppercase', letterSpacing: '0.14em',
                fontWeight: 600, marginBottom: 6 }}>{t(k, lang)}</div>
              <div style={{ fontFamily: fontDisplay, fontWeight: 500,
                fontSize: 17, color: p.ink, letterSpacing: '-0.01em',
                lineHeight: 1.35 }}>{t(v, lang)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── hero artwork ───────────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '64px 80px',
        borderBottom: `2px solid ${p.line}` }}>
        <SparkHero palette={p} fontMono={fontMono} lang={lang}/>
      </section>

      {/* ─── 01 — The team ──────────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '80px 80px 88px',
        display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80,
        borderBottom: `2px solid ${p.line}` }}>
        <div>
          <SectionLabel num="01">{t({ is: 'Liðið', en: 'The team' }, lang)}</SectionLabel>
          <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 44,
            lineHeight: 1.05, letterSpacing: '-0.018em',
            margin: 0, color: p.ink }}>
            {t({ is: 'Bíllinn', en: 'The car' }, lang)}<br/>
            {t({ is: 'þarf að keyra.', en: 'has to run.' }, lang)}
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22,
          fontSize: 18, lineHeight: 1.65, color: p.mute, maxWidth: 620 }}>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Team Spark er Formula Student lið Háskóla Íslands. Nemendur hanna og smíða rafknúinn kappakstursbíl — frá uppköstum á blað til keppni á vegum — á tveimur árum. Flest Formula Student lið í heiminum klára smíðina. Ekki öll ná í raun að keyra.',
              en: 'Team Spark is the University of Iceland\'s Formula Student team. Students design and build an electric racing car — from drawings to competition on tarmac — in the span of two years. Most Formula Student teams finish building. Not all of them actually get the car running.',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Þegar ég gekk til liðs við Team Spark árið 2023 hafði bíllinn ekki keyrt síðan 2019. Batterípakki hafði ekki verið smíðaður síðan 2017. Það eru nokkur ár af þekkingu sem tölvur hafa ekki og fólk sem bjó til hana hefur oft farið.',
              en: 'When I joined Team Spark in 2023, the car hadn\'t run since 2019. A battery pack hadn\'t been built since 2017. That is several years of knowledge that isn\'t written down anywhere and the people who built it have mostly moved on.',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Þetta er saga þess hvernig við náðum bílnum til að keyra aftur.',
              en: 'This is the story of how we got the car running again.',
            }, lang)}
          </p>
        </div>
      </section>

      {/* ─── 02 — Three years ───────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '80px 80px 96px',
        background: p.cream,
        borderBottom: `2px solid ${p.line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr',
          gap: 80, marginBottom: 56 }}>
          <div>
            <SectionLabel num="02">{t({ is: 'Þrjú ár', en: 'Three years' }, lang)}</SectionLabel>
            <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 44,
              lineHeight: 1.05, letterSpacing: '-0.018em',
              margin: 0, color: p.ink }}>
              {t({ is: 'Smíða.', en: 'Build.' }, lang)}<br/>
              {t({ is: 'Keyra.', en: 'Run.' }, lang)}<br/>
              {t({ is: 'Keppast.', en: 'Race.' }, lang)}
            </h2>
          </div>
          <div style={{ fontSize: 18, lineHeight: 1.65, color: p.mute,
            maxWidth: 620, alignSelf: 'end' }}>
            <p style={{ margin: 0 }}>
              {t({
                is: 'Þrjár keppnistímabilar, þrjár mismunandi ábyrgðir. Hvert ár bætti ég við eitt lag: fyrst framleiðslufærni, svo tæknilega dýpt á ökukerf, og að lokum framleiðslustjórnun yfir öllum hópum. Sama lið, breiðara sjónarhorn.',
                en: 'Three competition seasons, three different scopes of responsibility. Each year added one layer: first production craft, then technical depth on the drivetrain, then production management across all groups. Same team, wider view.',
              }, lang)}
            </p>
          </div>
        </div>

        {/* three year panels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
          <YearPanel
            palette={p} fontDisplay={fontDisplay} fontMono={fontMono} fontText={fontText}
            year="2024"
            label={{ is: 'Koltrefja einbolungur', en: 'Carbon-fibre monocoque' }}
            heading={{ is: 'Grunneining bílsins.', en: 'The structural core.' }}
            body={{
              is: 'Ég tók stóran þátt í framleiðslu koltrefja einbolungsins — bolgskelina sem bíllinn er byggður utan um. Þetta er mannlegt verkefni: koltrefjaklæðning, gunnur, og vandlægar vinnustofulegar aðferðir þar sem mistök kosta bæði tíma og efni. Engar flýtilegar leiðréttingar.',
              en: 'I played a major role in producing the carbon-fibre monocoque — the structural shell the rest of the car is built around. This is a hands-on job: composite layups, vacuum bagging, and careful workshop procedure where mistakes cost both time and material. No quick corrections.',
            }}
            art={<ArtMonocoque palette={p} fontMono={fontMono}/>}
            annotations={[
              { label: { is: 'Koltrefjaklæðning í lögum — efnið sem ákvarðar þyngd og styrk.', en: 'Carbon-fibre layup — the material that determines weight and stiffness.' } },
              { label: { is: 'Einbolungurinn er bæði reipi og grunnur. Ef hann er rangur, er allt annað rangt.', en: 'The monocoque is both chassis and safety cell. If it is wrong, everything else is wrong.' } },
            ]}
            lang={lang}
          />
          <YearPanel
            palette={p} fontDisplay={fontDisplay} fontMono={fontMono} fontText={fontText}
            year="2025"
            label={{ is: 'Hópstjóri drifkerfis', en: 'Drivetrain team lead' }}
            heading={{ is: 'Krafturinn í hjólin.', en: 'Power to the wheels.' }}
            body={{
              is: 'Sem hópstjóri drifkerfis 2025 var ég ábyrgur fyrir samþættingu rafmótorar, gírkassar og aflflutnings til hjólanna. Þetta er hlið bílsins sem tengir rafeindakerfið við raunverulegar vegalegar afleiðingar. Lítið fyrirgefst þegar kerfin eru farin að vinna saman.',
              en: 'As drivetrain team lead in 2025 I was responsible for integrating the electric motor, gearbox, and power transfer to the wheels. This is the side of the car that connects the electronics to actual mechanical consequences. Very little is forgiving once the systems start working together.',
            }}
            art={<ArtDrivetrain palette={p} fontMono={fontMono}/>}
            annotations={[
              { label: { is: 'Rafmótor → gírkassi → hjól. Sérhvert tengi er tækifæri til bilunar.', en: 'Motor → gearbox → wheel. Every joint is an opportunity for failure.' } },
              { label: { is: 'Samþætting þvert á hópa: rafeindaverkfræðar, kvikt- og burðarþolshópar verða að tala saman.', en: 'Cross-group integration: electrical, dynamics, and structures teams have to speak the same language.' } },
            ]}
            lang={lang}
            reverse
          />
          <YearPanel
            palette={p} fontDisplay={fontDisplay} fontMono={fontMono} fontText={fontText}
            year="2026"
            label={{ is: 'Framleiðslustjóri', en: 'Production Lead' }}
            heading={{ is: 'Allir hlutar saman.', en: 'All parts together.' }}
            body={{
              is: 'Framleiðslustjórinn sér til þess að bíllinn verður til á réttum tíma. Þetta þýðir samhæfingu milli allra hópa, eftirlit með framleiðsluáætlun og að vita alltaf hvar vandinn mun koma upp næst. Fyrsta batterípakki liðsins síðan 2017. Fyrsti keyrandi bíll síðan 2019. Keppni í Spáni 2026 með 30 manna hóp.',
              en: 'The Production Lead makes sure the car gets built on time. That means coordinating between all groups, tracking the production schedule, and always knowing where the next problem is going to surface. First battery pack since 2017. First running car since 2019. Competition in Spain 2026 with a 30-person crew.',
            }}
            art={<ArtProduction palette={p} fontMono={fontMono} fontText={fontText}/>}
            annotations={[
              { label: { is: 'Framleiðsluáætlun yfir alla hópa: rafeindakerfi, bolgskel, göngugerð og drifkerfi.', en: 'Production schedule across all groups: electronics, monocoque, suspension, drivetrain.' } },
              { label: { is: 'Keppnistímabilið krefst þess að allir séu klárir á sama dag — á Spáni.', en: 'Competition day requires everyone to be ready on the same day — in Spain.' } },
            ]}
            lang={lang}
          />
        </div>
      </section>

      {/* ─── 03 — What this teaches ─────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '80px 80px 88px',
        display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80,
        borderBottom: `2px solid ${p.line}` }}>
        <div>
          <SectionLabel num="03">{t({ is: 'Það sem þetta kennir', en: 'What this teaches' }, lang)}</SectionLabel>
          <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 44,
            lineHeight: 1.05, letterSpacing: '-0.018em',
            margin: 0, color: p.ink }}>
            {t({ is: 'Líkamlegt,', en: 'Physical,' }, lang)}<br/>
            {t({ is: 'ekki bara tæknilegt.', en: 'not just technical.' }, lang)}
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22,
          fontSize: 18, lineHeight: 1.65, color: p.mute, maxWidth: 620 }}>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Flestir sem læra um rafknúna bíla gera það í hermun. Við smíðum. Það er munur á að skilja hvernig batteríþyrping virkar í bók og að ganga í gegnum hana þegar hún er í bílnum og bíllinn á að aka.',
              en: 'Most people who learn about electric vehicles do it through simulation. We build. There is a difference between understanding how a battery pack works in a textbook and working through it when it is in the car and the car is supposed to move.',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Framleiðslustjórnun er annað dæmi. Það er auðvelt að skipuleggja verkefni þegar allt gengur. Það er annað mál þegar tímamörk eru föst, efni seinkast og hópar eru háðir hvert öðru. Þetta er það sem keppni kennir.',
              en: 'Production management is the same. It is easy to manage a project when everything goes to plan. It is something else when deadlines are fixed, materials are late, and groups are depending on each other. That is what competition teaches.',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Ég er vélaverkfræðingur sem veit hvað það þýðir að ná einhverju í gegnum, ekki bara að hugsa um það. Þetta er grundvöllurinn sem ég stend á þegar ég vinna með gervigreind og hugbúnað — ég skil hvað líkamlegur veruleiki þýðir.',
              en: 'I am a mechanical engineer who knows what it means to get something through, not just think about it. That is the foundation I stand on when working with AI and software — I understand what physical reality means.',
            }, lang)}
          </p>
        </div>
      </section>

      {/* ─── 04 — Spain 2026 ────────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '80px 80px 88px',
        display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80,
        borderBottom: `2px solid ${p.line}` }}>
        <div>
          <SectionLabel num="04">{t({ is: 'Spánn 2026', en: 'Spain 2026' }, lang)}</SectionLabel>
          <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 44,
            lineHeight: 1.05, letterSpacing: '-0.018em',
            margin: 0, color: p.ink }}>
            {t({ is: 'Keyrandi bíll.', en: 'Running car.' }, lang)}<br/>
            <em style={{ color: p.clay, fontWeight: 500 }}>
              {t({ is: 'Keppni næst.', en: 'Competition next.' }, lang)}
            </em>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22,
          fontSize: 18, lineHeight: 1.65, color: p.mute, maxWidth: 620 }}>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Team Spark er á leið á Formula Student Spain 2026. Þetta er fyrsta keppnin sem liðið fer á síðan bíllinn fór að keyra aftur. 30 manna hópur. Raunveruleg keppni á raunverulegu braut.',
              en: 'Team Spark is heading to Formula Student Spain 2026. This is the first competition the team has entered since the car started running again. 30-person crew. Real competition on a real circuit.',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Það sem við getum sýnt þar er meira en kappakstursgeta. Við sýnum að lítið lið frá Íslandi getur smíðað flókið tæknilegt kerfi og tekið það á keppni — frá grunni.',
              en: 'What we can demonstrate there is more than racing capability. We are showing that a small team from Iceland can build a complex technical system and take it to competition — from scratch.',
            }, lang)}
          </p>
        </div>
      </section>

      {/* ─── outro / CTA ────────────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '120px 80px 96px' }}>
        <div style={{ maxWidth: 760 }}>
          <SectionLabel num="—">{t({ is: 'Hvað er næst', en: "What's next" }, lang)}</SectionLabel>
          <h2 style={{
            fontFamily: fontDisplay, fontWeight: 600, fontSize: 64,
            lineHeight: 1.0, letterSpacing: '-0.018em',
            margin: '0 0 32px', color: p.ink,
          }}>
            {t({ is: 'Við keyrum,', en: 'We run.' }, lang)}<br/>
            <em style={{ color: p.clay, fontWeight: 500 }}>
              {t({
                is: 'og við erum á leið á keppni.',
                en: 'And we are going racing.',
              }, lang)}
            </em>
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: p.mute,
            maxWidth: 620, margin: '0 0 24px' }}>
            {t({
              is: 'Þrjú ár á Team Spark gáfu mér grundvöll sem fer ekki í burtu: ég skil hvað það þýðir að smíða eitthvað sem þarf í raun að virka. Koltrefjaþak, drifkerfi, framleiðslustjórnun — og svo keppni í Spáni með 30 manna hóp.',
              en: 'Three years on Team Spark gave me a foundation that doesn\'t go away: I understand what it means to build something that actually has to work. Carbon-fibre monocoque, drivetrain, production management — and then competition in Spain with a 30-person crew.',
            }, lang)}
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: p.mute,
            maxWidth: 620, margin: '0 0 36px' }}>
            {t({
              is: 'Ég leita af tækifærum þar sem þessi blönda — líkamleg framleiðsla, tæknileg dýpt og gervigreind — skilar eitthvað nýju.',
              en: 'I am looking for opportunities where this combination — physical production, technical depth, and AI — produces something new.',
            }, lang)}
          </p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <HLButton primary palette={p} fontBody={fontText}
              href={`mailto:${'sindrihilmars@gmail.com'}?subject=${encodeURIComponent('Team Spark / Formula Student')}`}>
              {t({ is: 'Hafa samband', en: 'Get in touch' }, lang)}
            </HLButton>
            <span style={{ fontFamily: fontDisplay, fontStyle: 'italic',
              fontSize: 17, color: p.mute }}>
              {t({ is: 'sindrihilmars@gmail.com — Ísland.', en: 'sindrihilmars@gmail.com — Iceland.' }, lang)}
            </span>
          </div>
        </div>

        <div style={{ marginTop: 96, paddingTop: 24,
          borderTop: `2px solid ${p.line}`,
          display: 'flex',
          justifyContent: 'space-between', alignItems: 'baseline',
          fontFamily: fontText, fontSize: 11, color: p.mute,
          letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
          <span>© 2026 — Sindri Már Hilmarsson</span>
          <a href="../index.html#work" style={{ color: p.ink, textDecoration: 'none' }}>
            {t({ is: '← Fleiri Verkefni', en: '← More work' }, lang)}
          </a>
        </div>
      </section>
    </div>
  );
}

// ─── hero artwork ────────────────────────────────────────────────────────────
function SparkHero({ palette: p, fontMono, lang }) {
  return (
    <div style={{
      position: 'relative', width: '100%', aspectRatio: '16 / 7',
      background: p.cream, border: `1.5px solid ${p.line}`, borderRadius: 20,
      overflow: 'hidden',
    }}>
      <svg viewBox="0 0 1600 700" preserveAspectRatio="xMidYMid meet"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>

        {/* circuit track outline — stylised top-down Formula Student layout */}
        <g fill="none" stroke={p.ink} strokeOpacity="0.12" strokeWidth="1">
          {[60, 100, 140].map((d, i) => (
            <path key={d}
              d={`M ${400 + d} ${350} C ${400 + d} ${150 + d/2}, ${800} ${120 + d/2}, ${1000} ${200 + d/2} S ${1350 - d/2} ${350}, ${1200 - d/2} ${500} S ${800} ${600 - d/2}, ${600} ${530 - d/2} S ${400 + d} ${550}, ${400 + d} ${350}`}
            />
          ))}
        </g>

        {/* main circuit line */}
        <path
          d="M 460 350 C 460 200, 800 140, 1000 220 S 1320 350, 1160 490 S 800 580, 600 520 S 460 500, 460 350"
          fill="none" stroke={p.moss} strokeWidth="3" strokeOpacity="0.7"/>

        {/* car — simple geometric top-down silhouette at start/finish */}
        <g transform="translate(460, 315)">
          <rect x="-18" y="-10" width="36" height="20" rx="4"
            fill={p.moss} opacity="0.9"/>
          <rect x="-8" y="-14" width="16" height="6" rx="2"
            fill={p.clay} opacity="0.85"/>
          <rect x="-8" y="8" width="16" height="6" rx="2"
            fill={p.clay} opacity="0.85"/>
          {/* wheels */}
          {[[-20,-8],[-20,4],[16,-8],[16,4]].map(([cx,cy],i) => (
            <rect key={i} x={cx} y={cy} width="8" height="4" rx="1"
              fill={p.ink} opacity="0.75"/>
          ))}
        </g>

        {/* start/finish line */}
        <line x1="460" y1="290" x2="460" y2="410"
          stroke={p.ink} strokeWidth="2" strokeOpacity="0.4"
          strokeDasharray="8 6"/>

        {/* circuit annotation points */}
        {[
          { cx: 800, cy: 148, label: 'chicane' },
          { cx: 1160, cy: 490, label: 'hairpin' },
          { cx: 600, cy: 520, label: 'sweep' },
        ].map((pt) => (
          <g key={pt.label}>
            <circle cx={pt.cx} cy={pt.cy} r="6"
              fill="none" stroke={p.moss} strokeWidth="1.5" strokeOpacity="0.6"/>
            <circle cx={pt.cx} cy={pt.cy} r="2.5" fill={p.moss} opacity="0.6"/>
          </g>
        ))}

        {/* left panel — battery cell grid */}
        <g transform="translate(80, 220)">
          <rect x="0" y="0" width="200" height="260" rx="4"
            fill={p.paper} stroke={p.line} strokeWidth="1.5"/>
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <rect key={`${r}-${c}`}
                x={14 + c * 36} y={16 + r * 56}
                width="28" height="46" rx="3"
                fill={(r + c) % 7 === 0 ? p.clay : p.ink}
                opacity="0.8"/>
            ))
          )}
          <rect x="14" y="238" width="172" height="8" rx="2"
            fill={p.moss} opacity="0.5"/>
        </g>
      </svg>

      {/* corner labels */}
      <div style={{ position: 'absolute', top: 22, left: 28,
        fontFamily: fontMono, fontSize: 11, color: p.ink,
        letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
        {t({ is: 'Batterípakki · Drifkerfi · Kappaksturs-braut', en: 'Battery · Drivetrain · Circuit' }, lang)}
      </div>
      <div style={{ position: 'absolute', top: 22, right: 28,
        fontFamily: fontMono, fontSize: 11, color: p.ink,
        letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
        {t({ is: 'Spánn 2026', en: 'Spain 2026' }, lang)}
      </div>
      <div style={{ position: 'absolute', bottom: 22, left: 28,
        fontFamily: fontMono, fontSize: 11, color: p.mute,
        letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {t({ is: 'Mynd. 01 — frá batteríum til brautar.', en: 'Fig. 01 — from battery cells to circuit.' }, lang)}
      </div>
    </div>
  );
}

// ─── year panel ──────────────────────────────────────────────────────────────
function YearPanel({ palette: p, fontDisplay, fontMono, fontText,
                     year, label, heading, body, art, annotations, reverse, lang }) {
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
          overflow: 'hidden',
          aspectRatio: '4 / 3',
        }}>
          {art}
        </div>
        <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: '12px 24px' }}>
          {annotations.map((a, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', maxWidth: 280 }}>
              <span style={{ fontFamily: fontMono, fontSize: 11, color: p.moss,
                letterSpacing: '0.04em', fontWeight: 600, paddingTop: 1 }}>
                {String.fromCharCode(97 + i)}.
              </span>
              <span style={{ fontFamily: fontDisplay, fontStyle: 'italic',
                fontSize: 14, color: p.mute, lineHeight: 1.45 }}>
                {t(a.label, lang)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ order: reverse ? 1 : 2, paddingTop: 8 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 18 }}>
          <span style={{ fontFamily: fontDisplay, fontStyle: 'italic',
            fontWeight: 500, fontSize: 20, color: p.clay }}>{year}</span>
          <span style={{ fontFamily: fontText, fontSize: 11, color: p.ink,
            textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600 }}>
            {t(label, lang)}
          </span>
        </div>
        <p style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 28,
          lineHeight: 1.15, letterSpacing: '-0.01em', color: p.ink, margin: '0 0 16px' }}>
          {t(heading, lang)}
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: p.mute, margin: 0 }}>
          {t(body, lang)}
        </p>
      </div>
    </div>
  );
}

// ─── year art panels ─────────────────────────────────────────────────────────
function ArtMonocoque({ palette: p }) {
  const layers = [
    { y: 60, w: 0.78, opacity: 0.9 },
    { y: 80, w: 0.92, opacity: 0.75 },
    { y: 100, w: 0.86, opacity: 0.85 },
    { y: 120, w: 0.95, opacity: 0.7 },
    { y: 140, w: 0.80, opacity: 0.9 },
    { y: 160, w: 0.88, opacity: 0.8 },
    { y: 180, w: 0.72, opacity: 0.85 },
    { y: 200, w: 0.90, opacity: 0.75 },
    { y: 220, w: 0.84, opacity: 0.9 },
    { y: 240, w: 0.65, opacity: 0.8 },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: p.cream, position: 'relative' }}>
      <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {/* section outline — monocoque cross-section shape */}
        <path d="M 80 40 L 320 40 L 340 280 L 60 280 Z"
          fill="none" stroke={p.line} strokeWidth="1.5"/>
        {/* carbon fibre layers */}
        {layers.map((l, i) => {
          const xStart = 80 + (1 - l.w) * 120;
          const xEnd = 320 - (1 - l.w) * 120;
          const angle = (i % 2 === 0 ? 1 : -1) * 12;
          return (
            <line key={i}
              x1={xStart} y1={l.y} x2={xEnd} y2={l.y}
              stroke={i % 3 === 0 ? p.clay : p.ink}
              strokeWidth="3" opacity={l.opacity}
              transform={`rotate(${angle}, 200, ${l.y})`}/>
          );
        })}
        {/* label */}
        <text x="200" y="300" textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace" fontSize="10"
          fill={p.mute} opacity="0.8" letterSpacing="0.1em">
          CARBON LAYUP · CROSS-SECTION
        </text>
      </svg>
    </div>
  );
}

function ArtDrivetrain({ palette: p }) {
  return (
    <div style={{ width: '100%', height: '100%', background: p.paper, position: 'relative' }}>
      <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {/* motor */}
        <rect x="40" y="120" width="80" height="80" rx="6"
          fill={p.moss} opacity="0.85"/>
        <text x="80" y="167" textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace" fontSize="9"
          fill={p.paper} fontWeight="600" letterSpacing="0.06em">MOTOR</text>
        {/* shaft line */}
        <line x1="120" y1="160" x2="180" y2="160"
          stroke={p.ink} strokeWidth="3" strokeOpacity="0.8"/>
        {/* gearbox */}
        <rect x="180" y="110" width="80" height="100" rx="6"
          fill={p.cream} stroke={p.ink} strokeWidth="1.5"/>
        <text x="220" y="167" textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace" fontSize="9"
          fill={p.ink} fontWeight="600" letterSpacing="0.06em">GEAR</text>
        {/* output shaft */}
        <line x1="260" y1="160" x2="340" y2="160"
          stroke={p.ink} strokeWidth="3" strokeOpacity="0.8"/>
        {/* wheel */}
        <ellipse cx="355" cy="160" rx="20" ry="36"
          fill={p.ink} opacity="0.8"/>
        <ellipse cx="355" cy="160" rx="10" ry="20"
          fill={p.clay} opacity="0.7"/>
        {/* torque arrow */}
        <path d="M 330 130 A 30 30 0 0 1 330 190"
          fill="none" stroke={p.clay} strokeWidth="2" strokeOpacity="0.7"
          markerEnd="url(#arr)"/>
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 Z" fill={p.clay} opacity="0.7"/>
          </marker>
        </defs>
        <text x="200" y="300" textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace" fontSize="10"
          fill={p.mute} opacity="0.8" letterSpacing="0.1em">
          DRIVETRAIN SCHEMATIC
        </text>
      </svg>
    </div>
  );
}

function ArtProduction({ palette: p, fontText }) {
  const groups = [
    { x: 200, y: 60,  label: 'Production' },
    { x: 80,  y: 160, label: 'Elec.' },
    { x: 200, y: 160, label: 'Chassis' },
    { x: 320, y: 160, label: 'Drivetrain' },
    { x: 80,  y: 260, label: 'Aero' },
    { x: 320, y: 260, label: 'Suspension' },
  ];
  const edges = [[0,1],[0,2],[0,3],[1,4],[3,5]];
  return (
    <div style={{ width: '100%', height: '100%', background: p.cream, position: 'relative' }}>
      <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {edges.map(([a, b], i) => (
          <line key={i}
            x1={groups[a].x} y1={groups[a].y}
            x2={groups[b].x} y2={groups[b].y}
            stroke={p.ink} strokeWidth="1.5" strokeOpacity="0.35"/>
        ))}
        {groups.map((g, i) => (
          <g key={i} transform={`translate(${g.x}, ${g.y})`}>
            <rect x="-36" y="-16" width="72" height="32" rx="4"
              fill={i === 0 ? p.moss : p.paper}
              stroke={i === 0 ? p.ink : p.line} strokeWidth={i === 0 ? 1.5 : 1}
              opacity={i === 0 ? 0.9 : 1}/>
            <text x="0" y="5" textAnchor="middle"
              fontFamily="'JetBrains Mono', monospace" fontSize="9"
              fill={i === 0 ? p.paper : p.ink}
              fontWeight={i === 0 ? '600' : '400'}
              letterSpacing="0.06em">
              {g.label}
            </text>
          </g>
        ))}
        <text x="200" y="305" textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace" fontSize="10"
          fill={p.mute} opacity="0.8" letterSpacing="0.1em">
          PRODUCTION COORDINATION
        </text>
      </svg>
    </div>
  );
}

window.SparkPage = SparkPage;
