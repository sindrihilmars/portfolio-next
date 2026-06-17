// project-copilot.jsx — Project detail page for Construction Copilot.
// Editorial / Highlands. Tight one-pager: header, lede, the brief, what we
// built (annotated geometric screens), outro CTA. First-person careful voice.
// Plain technical tone. Geometric placeholders for product imagery.

function CopilotPage({ palette: p }) {
  const fontDisplay = `'Source Serif 4', Georgia, serif`;
  const fontText    = `'Bricolage Grotesque', system-ui, sans-serif`;
  const fontMono    = `'JetBrains Mono', ui-monospace, monospace`;
  const [lang, setLang] = useLanguage('en');
  const [lightbox, setLightbox] = React.useState(null);

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
            Sindri&nbsp;Hilmarsson
          </span>
          <span style={{ fontFamily: fontText, fontSize: 11, color: p.mute,
            letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500 }}>
            {t({ is: '— verkefnasafn 2026', en: '— portfolio · 2026' }, lang)}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <nav className="bloom-nav" style={{ display: 'flex', gap: 28, fontFamily: fontText, fontSize: 13,
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
        <span style={{ color: p.ink }}>Dagskýrslutól</span>
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
              02
            </span>
            <span style={{ fontFamily: fontText, fontSize: 11, color: p.ink,
              textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600 }}>
              {t({ is: 'Gervigreind í notkun 2026', en: 'AI in use 2026' }, lang)}
            </span>
          </div>
          <h1 style={{
            fontFamily: fontDisplay, fontWeight: 600,
            fontSize: 92, lineHeight: 1.0,
            letterSpacing: '-0.018em',
            margin: '0 0 18px', color: p.ink,
          }}>
            Dagskýrslutól.
          </h1>
          <p style={{
            fontFamily: fontText, fontSize: 13, color: p.mute,
            letterSpacing: '0.05em', textTransform: 'uppercase',
            fontWeight: 600, margin: '0 0 22px',
          }}>
            {t({
              is: 'Erindreki fyrir verkstjóra sem vilja vera á verkstaðnum.',
              en: 'Icelandic voice-first field reporting — from the phone, not the desk.',
            }, lang)}
          </p>
          <p style={{
            fontFamily: fontDisplay, fontStyle: 'italic',
            fontSize: 24, fontWeight: 400, lineHeight: 1.4,
            color: p.clay, maxWidth: 580, margin: 0,
          }}>
            {t({
              is: 'Verkstjórar greina frá deginum í töluðu máli. Claude notar viðeigandi upplýsingar til að spyrja réttu spurninganna og fylla inn í sérsniðna skýrslu fyrirtækisins. Skilar lesanlegu PDF skjali sem verkstjóri samþykkir — og sleppir því að koma við á skrifstofunni.',
              en: 'A working prototype for people who need to report what happened, but do not want to add a computer to the end of the day. Speak into Telegram, answer the missing questions, review the PDF, approve.',
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
            [{ is: 'Hlutverk',        en: 'Role'     }, { is: 'Samsetning',  en: 'Integration' }],
            [{ is: 'Tímalína',        en: 'Timeline' }, { is: '2026, apríl—', en: 'April 2026—' }],
            ['Stack',                                    'Python · Claude · Whisper · Telegram'],
            [{ is: 'Staða verkefnis', en: 'Status'   }, { is: 'Beta Útgáfa',  en: 'Beta release' }],
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

      {/* ─── hero artwork — wide flat plane ─────────────────────────── */}
      <section style={{ position: 'relative', padding: '64px 80px',
        borderBottom: `2px solid ${p.line}` }}>
        <CopilotHero palette={p} fontMono={fontMono} lang={lang}/>
      </section>

      {/* ─── 01 — The brief ─────────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '80px 80px 88px',
        display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80,
        borderBottom: `2px solid ${p.line}` }}>
        <div>
          <SectionLabel num="01">{t({ is: 'Í stuttu máli', en: 'In brief' }, lang)}</SectionLabel>
          <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 44,
            lineHeight: 1.05, letterSpacing: '-0.018em',
            margin: 0, color: p.ink }}>
            {t({ is: 'Skýrslan', en: 'The report' }, lang)}<br/>
            {t({ is: 'sem á sér ekki sinn tíma.', en: 'no one has time for.' }, lang)}
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22,
          fontSize: 18, lineHeight: 1.65, color: p.mute, maxWidth: 620 }}>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Hvenær á að gera allar þessar litlu ómerkilegu skýrslur? Á skrifstofunni? Heima í fartölvunni? Ráða manneskju? Afhverju ekki bara eftir að þú hoppar upp í bílinn og áður en þú keyrir heim. Með núverandi tækni er einfalt að búa til sérhæfðan aðstoðarmann sem gerir þér kleyft að gera einföld verkefni án þess að þau taki tíma frá persónulega lífinu eða krefjist sérstakrar ferðar upp á skrifstofu. Og þetta er hræódýrt, ótrúlega skalanlegt og einfalt að setja upp.',
              en: 'When are all these tiny, low-priority reports meant to get done? At the office? At home on the laptop? By a hired hand? The person on site already knows what happened. The phone is already in their pocket. A short voice message from the truck is often a better interface than a form built for a desk.',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Yfirmaður minn fékk mig lengi vel til að gera þetta fyrir sig og borgaði mér fyrir. Svo í staðinn byggði ég fyrir hann einfaldan erindreka til að gera það sem ég gerði áður fyrr og hefur hann nú leyst mig af.',
              en: 'For a long stretch my boss had me writing these reports for him and paid me to do it. So I built a simple agent for the job I used to do: listen to the day, pull out the useful parts, and turn it into the company\'s report format.',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Skilyrðið var að þessi erindreki gæti tekið við fyrirmælum á íslensku og að ekki þyrfti að rífa upp lyklaborðið, að niðurstöðurnar væru fullnægjandi í yfir 90% tilfella og að skýrsla færi aldrei neitt áður en hún hefði verið samþykkt tvisvar.',
              en: 'The conditions were practical: it had to understand Icelandic field speech, work from the phone, ask instead of guessing, and keep the supervisor in control before anything became official.',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Þetta aukaverkefni er einfalt í uppsetningu og notkun og bíður eftir því að vera innleitt í fleiri sambærilega verkferla.',
              en: 'It is still a prototype, but the shape is complete: voice message → AI → tailored report. Small enough to understand. Useful enough to test in the real workflow.',
            }, lang)}
          </p>
        </div>
      </section>

      {/* ─── 02 — Why Icelandic speech changes the problem ──────────── */}
      <section style={{ position: 'relative', padding: '80px 80px 88px',
        display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80,
        borderBottom: `2px solid ${p.line}` }}>
        <div>
          <SectionLabel num="02">{t({ is: 'Íslenskt talmál', en: 'Icelandic speech' }, lang)}</SectionLabel>
          <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 44,
            lineHeight: 1.05, letterSpacing: '-0.018em',
            margin: 0, color: p.ink }}>
            {t({ is: 'Talmálið', en: 'The language' }, lang)}<br/>
            {t({ is: 'er hluti af vörunni.', en: 'is part of the product.' }, lang)}
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22,
          fontSize: 18, lineHeight: 1.65, color: p.mute, maxWidth: 620 }}>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Þetta er ekki enskur hugbúnaður með íslenskum hnöppum. Erfiðasti hluti verkefnisins er íslenskt talmál úr raunverulegu umhverfi: staðarnöfn, vélaheiti, nöfn starfsmanna, hálfar setningar, leiðréttingar og orðalag sem á fullkomlega heima á verkstað en ekki endilega í hreinni skýrslu.',
              en: 'This is not an English-first tool with Icelandic labels. The hard part is Icelandic field speech: place names, machine names, worker names, half-sentences, corrections, and phrasing that makes perfect sense on site but does not arrive as a clean form submission.',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Í góðri upptöku segir verkstjóri kannski nákvæmlega það sem þarf. Í venjulegri upptöku segir hann líka eitthvað í framhjáhlaupi, gleymir einu atriði, notar styttingar eða breytir um skoðun í miðri setningu. Kerfið þarf að finna skýrsluna inni í talinu án þess að þykjast vita meira en það veit.',
              en: 'On a good recording the supervisor may say exactly what the report needs. On a normal recording he also says something in passing, forgets one detail, uses shorthand, or changes his mind mid-sentence. The system has to find the report inside the speech without pretending to know more than it does.',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Þess vegna er samhengi hluti af kerfinu. Hvaða verkstaður er þetta? Hvaða vélar koma til greina? Hvernig lítur dagskýrsla fyrirtækisins út? Hvaða upplýsingar þarf að fylla út áður en hægt er að gera PDF? Þessar skorður gera erindrekann minna almennan og miklu nytsamlegri.',
              en: 'Context becomes part of the system. Which site is this? Which machines are possible? What does this company’s daily report look like? Which fields have to be filled before a PDF can be trusted? Those constraints make the agent less general and much more useful.',
            }, lang)}
          </p>
        </div>
      </section>

      {/* ─── 03 — What we built ─────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '80px 80px 96px',
        background: p.cream,
        borderBottom: `2px solid ${p.line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr',
          gap: 80, marginBottom: 56 }}>
          <div>
            <SectionLabel num="03">{t({ is: 'Hvernig virkar þetta?', en: 'How does this work?' }, lang)}</SectionLabel>
            <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 44,
              lineHeight: 1.05, letterSpacing: '-0.018em',
              margin: 0, color: p.ink }}>
              {t({ is: 'Hlusta.', en: 'Listen.' }, lang)}<br/>
              {t({ is: 'Spurja.', en: 'Ask.' }, lang)}<br/>
              {t({ is: 'Setja saman.', en: 'Assemble.' }, lang)}
            </h2>
          </div>
          <div style={{ fontSize: 18, lineHeight: 1.65, color: p.mute,
            maxWidth: 620, alignSelf: 'end' }}>
            <p style={{ margin: 0 }}>
              {t({
                is: "Verkstjóri talar við erindrekann í gegnum Telegram. Erindrekinn er talmenni sem hægt er að leita af og finna á Telegram. Eftir að hafa fengið aðgang að talmenninu þá eru raddskilaboð tekin upp og erindrekinn spyr spurninga í textaformi þangað til skýrslan er útfyllt. Erindrekinn notar Whisper frá OpenAI til að breyta raddskilaboðum í texta og Opus 4.7 til að breyta textanum í rétt uppsetta skýrslu samkvæmt þeim reglum sem hann er bundinn við, eftir þetta er skýrslan framkölluð sem pdf með Python, pdf skýrslan er send af erindrekanum í gegnum Telegram þar sem hægt er að opna skýrsluna, skoða hana og ákveða hvort hún verði notuð eða ekki. Skýrslunum er safnað saman í gagnabanka og þegar kemur að því að skila skýrslum til þriðja aðila, t.d. vikulega, þá er skýrslur vikunnar settar í innhólf viðkomandi sem 'draft' þar sem hægt er að fara aftur yfir áður en skýrslurnar eru sendar.",
                en: "The supervisor talks to the agent through Telegram. A voice note comes in from the phone. Whisper turns Icelandic speech into text. A language model extracts the structured report fields, checks them against the expected format, and asks a follow-up question when the day is underspecified. Python renders the approved result as a PDF. The reports stay in a SQLite archive so they can be reviewed, re-rendered, grouped into weekly handovers, or used to improve the next version.",
              }, lang)}
            </p>
          </div>
        </div>

        {/* Screenshot */}
        <div style={{ marginTop: 8 }}>
          <img
            src="../work/assets/dagskyrslutol-telegram.png"
            alt="Telegram conversation: voice note in, clarifying question, PDF out"
            onClick={() => setLightbox('../work/assets/dagskyrslutol-telegram.png')}
          style={{ width: '100%', maxWidth: 720, display: 'block', margin: '0 auto', borderRadius: 8,
              border: `1px solid ${p.line}`, boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              cursor: 'zoom-in' }}
          />
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
            <p style={{ margin: 0, fontSize: 13, color: p.mute, lineHeight: 1.5 }}>
              {t({
                is: 'Samtal í Telegram — raddskilaboð inn, skýring út, PDF til baka.',
                en: 'Telegram thread — voice note in, clarifying question out, PDF back.',
              }, lang)}
            </p>
            <a
              href="../work/assets/dagskyrslutol-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ flexShrink: 0, fontSize: 13, color: p.ink, textDecoration: 'none',
                borderBottom: `1px solid ${p.ink}`, paddingBottom: 1, whiteSpace: 'nowrap' }}>
              {t({ is: 'Skoða skýrslu PDF →', en: 'View report PDF →' }, lang)}
            </a>
          </div>
        </div>
      </section>

      {/* ─── 04 — What I built ──────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '80px 80px 88px',
        display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80,
        borderBottom: `2px solid ${p.line}` }}>
        <div>
          <SectionLabel num="04">{t({ is: 'Það sem ég byggði', en: 'What I built' }, lang)}</SectionLabel>
          <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 44,
            lineHeight: 1.05, letterSpacing: '-0.018em',
            margin: 0, color: p.ink }}>
            {t({ is: 'Enda á milli,', en: 'End to end,' }, lang)}<br/>
            {t({ is: 'ekki bara skilaboð á módel.', en: 'not just a model call.' }, lang)}
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22,
          fontSize: 18, lineHeight: 1.65, color: p.mute, maxWidth: 620 }}>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Ég byggði símaflæðið, raddskilaboðin, umritunina, útdráttinn, spurningalykkjuna, PDF framköllunina, samþykktarferlið og gagnageymsluna með hjálp gervigreindar. Fyrir hversdaglega skýrslur gerir þetta mér kleift að fá vöru í hendurnar sem fyrst og að prófa hana um leið.',
              en: 'I built the phone workflow, the voice-message intake, the transcription step, the extraction layer, the clarification loop, the PDF rendering, the approval step, and the report archive. One API call would have been a demo. The seams between the parts are where it becomes a tool.',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Raddskilaboð geta verið ruglandi og ófullkomin. Módel sem svarar af öryggi er ekki endilega módel sem á að treysta. Þarna liggur hönnunarvinnan: hvar á kerfið að fylla út, hvar á það að spyrja og hvar á manneskjan að samþykkja?',
              en: 'A voice message is not a form. A transcript is not a report. A confident model answer is not automatically something to trust. The design work sits there: where should the system fill in, where should it ask, and where should the human approve?',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Ég smíðaði líka verkfærin í kringum kerfið: stillingar fyrir mismunandi skýrsluform, gagnagrunn fyrir eldri skýrslur, endurframköllun á PDF skjölum og einföld próf til að bera saman hvernig íslenska umritunin stendur sig. Kerfið ætti því aðeins að vaxa og verða betra þeimun fleiri sem nota það.',
              en: 'I also built the scaffolding around the workflow: configuration for different report formats, a database for previous reports, tools for re-rendering PDFs, and simple checks for comparing Icelandic transcription quality. That is the distance between a demo and a tool someone can actually operate.',
            }, lang)}
          </p>
        </div>
      </section>

      {/* ─── 05 — Status and direction ──────────────────────────────── */}
      <section style={{ position: 'relative', padding: '80px 80px 88px',
        display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80,
        borderBottom: `2px solid ${p.line}` }}>
        <div>
          <SectionLabel num="05">{t({ is: 'Staða', en: 'Status' }, lang)}</SectionLabel>
          <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 44,
            lineHeight: 1.05, letterSpacing: '-0.018em',
            margin: 0, color: p.ink }}>
            {t({ is: 'Virk prótótýpa.', en: 'Working prototype.' }, lang)}<br/>
            <em style={{ color: p.clay, fontWeight: 500 }}>
              {t({ is: 'Raunnotkun næst.', en: 'Real use next.' }, lang)}
            </em>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22,
          fontSize: 18, lineHeight: 1.65, color: p.mute, maxWidth: 620 }}>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Dagskýrslutól er ekki sett fram sem fullbúin vara eða stór innleiðing. Það er virk prótótýpa byggð utan um eitt raunverulegt skýrsluferli. Næsta próf er einfalt og óþægilegt á réttan hátt: alvöru notendur, alvöru skýrslur, alvöru mistök.',
              en: 'Dagskýrslutól is not being presented as a finished SaaS product or a broad deployment. It is a working prototype built around one real reporting workflow. The next test is simple and uncomfortable in the useful way: real users, real reports, real mistakes.',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Byggingarvinnan gefur verkefninu skýrt upphaf: dagskýrslur, fólk, tæki, veður, verkþættir, athugasemdir og PDF sem einhver þarf að geta lesið. Mynstrið er samt stærra. Viðhald, eftirlit, fiskvinnsla, álver, veitukerfi — alls staðar þar sem manneskjan með upplýsingarnar er ekki endilega við skrifborð.',
              en: 'Construction gives the project a concrete start: daily reports, people, machines, weather, work completed, notes, and a PDF someone has to read later. The pattern is larger. Maintenance, inspections, fisheries, aluminium smelters, utilities — anywhere the person with the information is not necessarily at a desk.',
            }, lang)}
          </p>
          <p style={{ margin: 0 }}>
            {t({
              is: 'Það er eiginlega pælingin. Ekki almennur spjallbot fyrir allt. Sérhæfður erindreki fyrir leiðinlegt en mikilvægt verk, nógu nálægt raunveruleikanum til að spara tíma.',
              en: 'That is the bet. Not a general chatbot for everything. A specific agent for a boring but important job, close enough to the real workflow to save time.',
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
            {t({ is: 'Þetta virkar,', en: 'It works.' }, lang)}<br/>
            <em style={{ color: p.clay, fontWeight: 500 }}>
              {t({
                is: 'núna leita ég af öðrum vandamálum líkum þessu.',
                en: 'Looking for the next problem like it.',
              }, lang)}
            </em>
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: p.mute,
            maxWidth: 620, margin: '0 0 24px' }}>
            {t({
              is: 'Dagskýrslutólið er virk prótótýpa, byggð utan um eitt raunverulegt skýrsluferli - næstu skref eru að sjá hvernig það virkar í raunverulegum aðstæðum. Raddskilaboð → Gervigreind → sérsniðin skýrsla, fyrir þá sem ættu ekki að þurfa skrifborð til að segja hvað gerðist. Byggingarvinnan er fyrsta notkunartilfellið. Fiskiðnaður, álver, viðhald, eftirlit — mynstrið er víðara.',
              en: 'Dagskýrslutól is a working prototype built for one real reporting workflow, with the next step being practical use and feedback. Voice messages → AI → tailored report, for people who should not need a desk to say what happened. Construction is the first use case. Fisheries, aluminium smelters, maintenance, inspections — the pattern is wider.',
            }, lang)}
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: p.mute,
            maxWidth: 620, margin: '0 0 36px' }}>
            {t({
              is: 'Ég leita af tækifærum á Íslandi til að innleiða gervigreind inn í fyrirtæki sem vita ekki hvar þau eiga að byrja — og að spennandi rannsóknarverkefnum þar sem framlína gervigreindarinnar er könnuð.',
              en: 'I am looking for opportunities in Iceland to bring AI into companies that know the work but do not yet know where AI fits — and for research projects close enough to the frontier to teach me something.',
            }, lang)}
          </p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <HLButton primary palette={p} fontBody={fontText}
              href={`mailto:${'sindrihilmars@gmail.com'}?subject=${encodeURIComponent('Dagskýrslutól / AI integration')}`}>
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

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000, cursor: 'zoom-out', padding: 32 }}>
          <img
            src={lightbox}
            alt=""
            style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 6,
              boxShadow: '0 8px 64px rgba(0,0,0,0.5)' }}
          />
        </div>
      )}
    </div>
  );
}

// ─── hero artwork ────────────────────────────────────────────────────────────
function CopilotHero({ palette: p, fontMono, lang }) {
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
        {t({ is: 'Raddskilaboð inn', en: 'Voice messages in' }, lang)}
      </div>
      <div style={{ position: 'absolute', top: 22, right: 28,
        fontFamily: fontMono, fontSize: 11, color: p.ink,
        letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
        {t({ is: 'Skýrslan kemur út', en: 'The report comes out' }, lang)}
      </div>
      <div style={{ position: 'absolute', bottom: 22, left: 28,
        fontFamily: fontMono, fontSize: 11, color: p.mute,
        letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {t({ is: 'Mynd. 01 — kerfið í hnotskurn.', en: 'Fig. 01 — the system in a nutshell.' }, lang)}
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
