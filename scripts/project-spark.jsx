// project-spark.jsx — Team Spark long-form case study.
// Source text: /home/sindri/agents/writing-agent/notes/team-spark-draft-v4.md

const SPARK_INTRO = [
  "This is a look back on the best, most challenging, most frustrating, and sometimes most belittling time of my life. I want to write this because it's fun to look back and see things in this weird grand perspective rather than living through it chaotically, day by day. But I'm also writing this because I think that for the people who want to support us, and there are many, this might contain some very valuable information and some irreplaceable context.",
  "I've spent three years with Team Spark, the University of Iceland's Formula Student team. Formula Student, for those unfamiliar, is a competition where university students design, build, and race an open-wheel car. Teams from across the world are judged not just on the car but on the engineering process — the design choices, the cost analysis, the business case. It is, in my experience, the best engineering education available in this country, and it is without a doubt the greatest opportunity to take your skills to the next level, and progress beyond what the school can teach you.",
  "The last time Team Spark produced a driveable car was 2019. From 2020 onwards, the team worked on essentially the same car, season after season, making minor adjustments, never finishing. This summer we are taking the car to competition in Spain. What I want to do here is try to understand what happened during those years — how a group of capable, motivated engineering students could fail to finish a car, repeatedly — and what it took to break the cycle.",
  "I should say upfront: I don't have all the answers. I was there for three of the six years. The first year I was in the drivetrain group, learning the ropes and helping build the carbon fibre monocoque. The second year I was head of drivetrain. The third year — this year — I was head of production. Some of what I'm about to describe I pieced together from older members, and I'm sure there are perspectives I'm missing. This is my account, not the definitive one."
];

const SPARK_SECTIONS = [
  {
    "num": "01",
    "label": "Losing the thread",
    "heading": "The years before the car came back.",
    "paragraphs": [
      "The decline started, as these things usually do, with something that looked manageable at the time. The team had one individual who carried a huge part of the electrical system. He was capable and productive, and when he graduated, a lot of knowledge left with him. In a healthy organisation that's absorbable — you have documentation, overlap between generations, people who've worked alongside the departing member and can carry the thread forward. That didn't happen. The electrical system, the most complex part of the car, suddenly had no owner who truly understood it.",
      "And then it compounded. Each year more people graduated. Each year fewer remained who had been part of a team that actually finished something. And then, at some point that nobody can quite pinpoint, there was nobody left who had ever built a driveable car. You're not iterating on experience anymore. You're guessing. You're looking at a half-assembled car and trying to figure out what was supposed to happen next. Every year a new group of students inherited a slightly more confusing version of the same unsolved puzzle.",
      "The university didn't help. The school took a hands-off approach to Team Spark, which probably worked fine when the team was functional. Autonomy is great when things are going well. But when things started going sideways — year after year of no finished car — nobody from the administration stepped in. No course correction, no mentor saying \"this is off the rails,\" no structural support. The same management style that enables a healthy team provides zero safety net for a struggling one. The school didn't understand the project well enough to intervene, and maybe didn't care enough either. That's hard to write, but it's what I observed.",
      "One thing I want to be clear about: funding was not the issue. The team was never flush with cash, but it had the resources to produce a functional car. What it lacked was organisational health.",
      "The battery pack is probably the best way to understand what those years of dysfunction looked like up close, so I'm going to keep coming back to it throughout this piece. Team Spark had never really produced a good battery pack. In previous years, the mechanical attachment of the batteries to the car was more of a suggestion than a necessity. There's a story from around 2018 where the car simply was not allowed to crash because the batteries weren't properly constrained inside it. When the rules eventually required teams to prove the battery pack could withstand 20g of acceleration in the vertical direction without damage, the whole design philosophy collapsed. This was a massive problem, and in the years following 2019 it should have been a top priority to fix — the fundamental design had to be rethought. But it was buried under the responsibilities of the electric lead, who was already struggling with the car's most complex system even when we exclude the battery pack. Without anyone with experience to step in and decouple this problem, it stayed buried, the assumption being it could be left for last."
    ]
  },
  {
    "num": "02",
    "label": "Joining the team",
    "heading": "Monocoque, Croatia, and the next group of people.",
    "paragraphs": [
      "I joined Team Spark in the fall of 2023 and was placed in the drivetrain group. The big project that year was the monocoque — the carbon fibre chassis. I helped build it, and we baked the body in Össur's facilities. That's where I met Mási. He worked at the company, and really saved our asses during the process. He did all of that in his own time, when the company didn't know he was working. And by the end he was just happy to hear that next semester he had a place in our team. He is now our head of chassis.",
      "After the 2023–2024 season, the first wave of departures hit. Several people who had been running the team moved on. To their credit, they had taken the car to a competition in Croatia in the summer of 2024 as a concept entry. The car didn't drive, but they got it there.",
      "That fall I became head of drivetrain, and the team brought in a strong class of new recruits. With the programme in a familiar spot — no experience, the electrical system in disarray, uncertain future, and a lack of support for newcomers — I started putting time into the new people. Extra Sunday sessions anyone could join, working through calculation examples from the Formula Student tests, getting people comfortable with the engineering. I got the team to fund sporting sessions. We had barbecues. The point wasn't just social. It was about finding people — figuring out who had something in them, who cared beyond the credit they'd receive for their first year, who might stick around when there was no formal incentive left.",
      "Because that's a structural reality of Team Spark that shapes everything: the university awards credit for your first year of participation, and after that, nothing. You're volunteering. The team runs on people who choose to keep showing up when there's no grade, no pay, and no guarantee the car will ever drive.",
      "Lárus was one of the only recruits who came to the problem-solving sessions more than once. Those sessions were where we got to align our thinking about what the team needed to become. He's now head of suspension. Todor was in my drivetrain group and showed enough energy and initiative to take over as head of drivetrain when I moved on. Árni was maybe the most enthusiastic recruit of the season and became head of aero.",
      "Late that fall the head of the electrical group quit. The electrical team was orphaned again — the same system that had been losing its owners since 2019. Rather than forcing a leadership role onto someone who wasn't ready, the approach was to adopt individual members and their projects into other groups. Ás, one of my drivetrain recruits, had a friend named Alex in the electrical group. Alex came over through Ás, working with the social connections that already existed.",
      "The project for them was to get the motor turning from bare necessities — a power supply, a motor controller, a motor. We had a test setup and it seemed like a good way to build understanding of the system from the ground up. It turned out to be far more ambitious than anticipated. Isolating the motor from the car's existing electrical system doesn't just simplify things — it creates new problems. When the ultimate goal is to drive the car, it makes more sense to focus on getting that system right rather than isolating it into its own setup. The project didn't achieve what I thought it would.",
      "What it did do, unintentionally, was bring Kristján Örn back.",
      "Kristján was part of the 2019 team, one of the last people to have been part of a car that actually drove. He'd stayed loosely connected after graduating, but around 2023 he'd had enough of watching the team stagnate. He stepped back. But he never fully disconnected — team members would still send him questions on Discord, and he'd answer them. He couldn't not. He knew the answers and he couldn't watch people struggle with problems he could solve in five minutes.",
      "Ás and Alex, stuck on the motor project, started asking him questions. That was the interaction that pulled him back in. Over the spring and early summer of 2025 he started looking more closely at what the team was doing. What he saw was different from what had driven him away. By summer he was fully committed, took a part-time role with the school to support the project, and has been putting serious time into it since.",
      "In January 2025 the second wave of the old guard left. By then it barely mattered. The people who were going to carry the team forward were already in place.",
      "By summer 2025 the car was grounded. No competition that year. The focus shifted to getting each subsystem done correctly — without the distraction of trying to ship a car overseas, which in Iceland means losing roughly three weeks just to transit. Ordering a shipping container, packing the car, getting it to mainland Europe, competing, getting it back. Every other team in central Europe drives their car to competition or puts it on a short-haul truck. We plan a logistics operation. That reality shapes the entire season calendar, and that summer it made more sense to spend the time getting things right than to pour it into shipping an unfinished car across the Atlantic."
    ]
  },
  {
    "num": "03",
    "label": "Rebuilding depth",
    "heading": "When the team stopped depending on one person at a time.",
    "paragraphs": [
      "Todor and Árni both left earlier this year. Life pulled them in different directions, for reasons that had nothing to do with the team. It was a sharp lesson in something the team should have learned years ago from the electrical situation: you cannot build around individuals alone. You need depth. You need to know that when someone leaves — and someone always leaves — the system doesn't collapse with them.",
      "When Árni left, Sólveig stepped up to lead aero. She'd been in his group during the 24/25 season, learning, contributing, building her understanding. In the environment the team had built — where a subsystem lead can pour themselves into their own system while the other groups move forward independently — she thrived. She wasn't pulled into every surface-level crisis. She wasn't firefighting someone else's problems. She could focus and go deep.",
      "I want to emphasise how unthinkable this would have been eighteen months earlier. Under the old structure, any new member would inevitably have been dragged into whatever chaos the team was dealing with that week. Nobody could specialise because everything was always on fire. Specialisation requires stability. Sólveig is proof that the team finally has it, and for the coming season she's been elected team leader.",
      "For the 2025–2026 season the team recruited a record number of new members. More hands, more energy, and crucially, visible proof that the programme was alive — the kind of thing that shows up in numbers and forces people to pay attention. But it also created friction. Some people held an image of Team Spark as an elite group, a small team of the best engineers. A large intake meant a lot of members who were, honestly, contributing very little. That clashed with the identity some wanted to project.",
      "The tension was real but manageable. A team that hasn't finished a car in five years doesn't get to be elite. It needs people, visibility, and proof of life. The question was always whether the quantity approach would produce quality — whether somewhere in that large intake were the individuals who'd make the difference. By this point I was deep in the battery pack and no longer the one getting to know every new face. The culture and the structure had to do that work on their own. And they did."
    ]
  },
  {
    "num": "04",
    "label": "The battery pack",
    "heading": "The subsystem that carried the whole story.",
    "paragraphs": [
      "The battery pack story picks up here. Kristján, now fully back, made it a point that someone reliable needed to own it. Me and Ás took it on.",
      "Some background on what we were working with. In 2020 the team had purchased a set of battery cells. Some of those cells had gone into partial production — assembled into blocks of twelve on HC-PCBs. I was there for the tail end of that effort, during the 2024 push to get the car ready for Croatia. A few weeks before the container was supposed to ship, the team tried to rush the batteries through production. It was halted because the gluing quality simply wasn't good enough. The partially-assembled blocks sat around after that. Later, when it became clear the team needed more cells, a rebuy was ordered from China. The plan assumed some of the old blocks were salvageable and the new cells would fill the gaps. Both assumptions turned out to be shaky.",
      "The scope of what we needed to do was staggering. Solve the mechanical constraint problem — make the pack survive the 20g requirement without re-manufacturing the battery box. Test every cell we had, old and new, for voltage and internal resistance. Electrically connect twelve cells into each block on an HC-PCB, verify voltage readings from the board, then run charge-discharge cycles on every single block to confirm capacity. Figure out a gluing process to bond pairs of blocks into segments. Attach heat sensors.",
      "The electrical connections were the first real challenge. We used an old micro tig welding machine the team had gotten from a dental technician — because apparently nobody else in Iceland uses these machines at this scale. Nobody on the team knew how to operate it. I taught myself, practised on scrap, got results that were decent but never as consistent as I wanted. I kept suspecting the 1mm copper on the HC-PCB was the problem — it seemed too thick, it pulled heat away too fast — but I didn't know the previous design had used thinner copper. Nobody had documented the change. So I couldn't confirm what my gut was telling me, and without that confirmation I kept chasing the wrong variables, adjusting the machine when the real issue was the material underneath. It only affected a couple of surfaces out of roughly twenty-two per block, but not knowing why those specific joints kept failing while others held made the whole process feel unreliable.",
      "Production started with the legacy blocks — the ones from the 2020 cells that had gone into partial assembly before the Croatia rush. When we tested them, we found dead cells. Voltages under 3.4V in blocks that were supposed to be fine. That triggered a much larger testing phase, and the results were bad. A significant number of the legacy blocks were unusable. The rebuy plan, which had counted on those blocks supplementing the new cells, was undermined.",
      "Then the new Chinese cells: they'd been ordered with shorter tabs than the originals. The 3D-printed spacer that was supposed to sit between the HC-PCB and the block didn't fit — the tabs didn't reach through. These cells had travelled from China to Iceland, weeks of shipping and customs, and they didn't match the existing design. Another inherited assumption, wrong.",
      "I tried to bring some of the new recruits into the testing process. My instructions weren't clear enough, and every test they ran had to be redone. That was on me — I underestimated how much guidance was needed and how much could go wrong in a process that seemed straightforward once you knew it. Around the same time, some plastic debris from our cells got into the air compressor in the storage room where we'd been working. The room was never really ours — it was a storage area outside the main garage that we'd been using by default. The supervisor, understandably, wanted us out. We ended up moving battery assembly into the shipping container the team uses to transport the car to competitions. Building a battery pack in a shipping container. In Iceland.",
      "By Christmas, nothing was working cleanly. The tig machine was inconsistent. The legacy blocks were unreliable. The new cells didn't fit. We were losing our workspace. The scope of testing ahead was massive.",
      "After Christmas, things started to move. We found a way to ditch the spacer altogether, which opened a pathway for both old and new cells without the fit problem. I made adjustments to the micro tig setup that improved consistency. The next round of testing ran cleanly and quickly. Mási stepped in to help me and Ás, and the three of us found a working rhythm. Kristján helped get the charge-discharge test setup running, which had been a significant hurdle on its own.",
      "Róbert had joined the team that fall — one of the key recruits of the 25/26 season. He matched Kristján's work ethic and brought the kind of base knowledge needed to actually trace through years of accumulated mistakes in the electrical system and fix them one by one. Having Kristján — who knew what the system was supposed to look like — and Róbert — who had the skill and stamina to untangle what it had become — was the combination that finally resolved the team's longest-standing problem.",
      "We developed a gluing process for bonding blocks into segments and produced the first segment from new cells in late February. Then we turned to the older blocks. The mechanical solution — an aluminium frame that the blocks were glued to, fitting tightly into the segment compartments — did something we hadn't expected: it protected the vulnerable cells within the poorly-made legacy blocks, making them usable where they wouldn't have been before. These blocks needed rebalancing, another setup challenge that Kristján solved.",
      "Over Easter we did it. Seven days straight. Charging, balancing, discharging, charging, gluing into segments. Block after block. No breakthroughs, no genius moments. Just disciplined repetition with a process that finally worked and people who trusted each other enough to keep going. By the end we had reached 500V — what the electrical team was confident running the car on.",
      "The battery pack took months of dead ends, inherited mistakes, undocumented design changes, equipment nobody understood, disappearing workspaces, and my own errors. Then it came together in a concentrated burst once the right process and the right people were in place. That's the story of the whole team compressed into one subsystem."
    ]
  },
  {
    "num": "05",
    "label": "Spain 2026",
    "heading": "A running car, not a victory lap.",
    "paragraphs": [
      "The car drives. It's an electric car with a carbon fibre monocoque, rear-wheel-drive single motor chain drive, a retrofitted suspension, liquid cooling on the motor and controller, fans blowing on the batteries because there's nothing better, and practically no aerodynamics. A real character.",
      "This summer it goes to Spain. It will not be the fastest car there. But it will be there, and after six years, that is the statement.",
      "I'm not writing this to take a victory lap. There is too much still broken for that. The relationships with the university and our sponsors have been worn down by years of promises that didn't materialise. Trust doesn't rebuild itself. We need the school to engage differently going forward, and we need to earn our sponsors' attention back.",
      "What I want the people reading this to understand is what this programme actually is. Team Spark is the only project in Iceland that gives engineering students first-hand experience building a complete engineered system from scratch. It is a real challenge for promising engineers who will not develop a fraction as much simply by scoring tens on their exams. It is an opportunity for sponsors to meet and get to know their future employees before they ever enter the job market. And for the students who go through it — the best, most challenging, most frustrating, and sometimes most belittling time of their lives, and not a day of it wasted.",
      "We are not asking for a rescue. The hard internal work has been done. The team is built, the culture is built, the car is built. What we are asking for is energy. Pay attention to what is happening here. Come to the garage. Talk to the students. Engage with the programme. The door is open, and the people walking through it deserve to be met on the other side.",
      "Daníel, Ás, Mási, Lárus, Sólveig, Kristján, Róbert, Alex, Elín, Beta, Todor, Árni — and others I haven't named here — put something of themselves into this project that they won't get back. This summer in Spain, a car pieced together from salvaged cells, dental equipment, a shipping container, and stubbornness will line up alongside teams with bigger budgets, shorter supply lines, and generations of institutional memory. It won't be the fastest. But it will be there."
    ]
  }
];

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
      letterSpacing: '0.005em', overflow: 'hidden', position: 'relative',
      '--bloom-ink': p.ink, '--bloom-clay': p.clay, '--bloom-cream': p.cream,
    }}>
      <header style={{
        position: 'relative', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '32px 80px',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <nav className="bloom-nav" style={{ display: 'flex', gap: 28, fontFamily: fontText, fontSize: 13,
            letterSpacing: '0.04em' }}>
            {[
              { l: 'Work',    h: '../index.html#work' },
              { l: 'Now',     h: '../index.html#now' },
              { l: 'Résumé', h: '../index.html#resume' },
              { l: 'Say hi',  h: '../index.html#contact' },
            ].map((n) => (
              <a key={n.h} href={n.h} style={{ color: p.mute, textDecoration: 'none' }}>{n.l}</a>
            ))}
          </nav>
          <LangToggle lang={lang} setLang={setLang} palette={p} fontBody={fontText}/>
        </div>
      </header>

      <div style={{
        padding: '20px 80px', borderBottom: `1.5px solid ${p.line}`,
        fontFamily: fontText, fontSize: 12, color: p.mute,
        letterSpacing: '0.04em', display: 'flex', gap: 10, alignItems: 'center',
      }}>
        <a href="../index.html#work" style={{ color: p.mute, textDecoration: 'none' }}>← Work</a>
        <span style={{ color: p.line }}>/</span>
        <span style={{ color: p.ink }}>Team Spark</span>
      </div>

      <section style={{ position: 'relative', padding: '72px 80px 64px',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64,
        alignItems: 'end', borderBottom: `2px solid ${p.line}` }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 28 }}>
            <span style={{ fontFamily: fontDisplay, fontWeight: 600,
              fontSize: 22, color: p.moss, letterSpacing: '-0.01em' }}>01</span>
            <span style={{ fontFamily: fontText, fontSize: 11, color: p.ink,
              textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600 }}>
              Formula Student · 2023—26
            </span>
          </div>
          <h1 style={{
            fontFamily: fontDisplay, fontWeight: 600, fontSize: 88, lineHeight: 1.0,
            letterSpacing: '-0.018em', margin: '0 0 18px', color: p.ink,
          }}>
            How to Build a Car in Six Years
          </h1>
          <p style={{
            fontFamily: fontDisplay, fontStyle: 'italic', fontSize: 24, fontWeight: 400,
            lineHeight: 1.4, color: p.clay, maxWidth: 620, margin: 0,
          }}>
            A long-form account of three years with Team Spark, the University of Iceland's Formula Student team, and the work it took to bring a car back to competition.
          </p>
        </div>

        <div style={{
          background: p.cream, border: `1.5px solid ${p.line}`, borderRadius: 12,
          padding: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
        }}>
          {[
            ['Role', 'Production Lead'],
            ['Timeline', '2023—26'],
            ['Team', 'Team Spark'],
            ['Status', 'Spain 2026'],
          ].map(([k, v], i) => (
            <div key={i}>
              <div style={{ fontFamily: fontText, fontSize: 10, color: p.mute,
                textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600, marginBottom: 6 }}>{k}</div>
              <div style={{ fontFamily: fontDisplay, fontWeight: 500,
                fontSize: 17, color: p.ink, letterSpacing: '-0.01em', lineHeight: 1.35 }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ position: 'relative', padding: '64px 80px', borderBottom: `2px solid ${p.line}` }}>
        <SparkHero palette={p} fontMono={fontMono}/>
      </section>

      <ArticleSection num="00" label="Opening" heading="Why write this now." paragraphs={SPARK_INTRO} palette={p} SectionLabel={SectionLabel}/>

      {SPARK_SECTIONS.map((section, i) => (
        <ArticleSection key={section.num} num={section.num} label={section.label} heading={section.heading}
          paragraphs={section.paragraphs} palette={p} SectionLabel={SectionLabel} shaded={i % 2 === 1}/>
      ))}

      <section style={{ position: 'relative', padding: '120px 80px 96px' }}>
        <div style={{ maxWidth: 760 }}>
          <SectionLabel num="—">Back to the portfolio</SectionLabel>
          <h2 style={{
            fontFamily: fontDisplay, fontWeight: 600, fontSize: 64, lineHeight: 1.0,
            letterSpacing: '-0.018em', margin: '0 0 32px', color: p.ink,
          }}>
            Team Spark goes to Spain.
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: p.mute, maxWidth: 620, margin: '0 0 36px' }}>
            This page is a review draft adapted from the long-form Team Spark text. The copy is intentionally kept close to the source so it can be reviewed locally before tightening for the final portfolio version.
          </p>
          <HLButton palette={p} fontBody={fontText} href="../index.html#work">← More work</HLButton>
        </div>
        <Footer palette={p} fontText={fontText}/>
      </section>
    </div>
  );
}

function ArticleSection({ num, label, heading, paragraphs, palette: p, SectionLabel, shaded }) {
  const fontDisplay = `'Source Serif 4', Georgia, serif`;
  return (
    <section style={{ position: 'relative', padding: '88px 80px',
      background: shaded ? p.cream : p.paper, borderBottom: `2px solid ${p.line}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80 }}>
        <div>
          <SectionLabel num={num}>{label}</SectionLabel>
          <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 44,
            lineHeight: 1.05, letterSpacing: '-0.018em', margin: 0, color: p.ink }}>
            {heading}
          </h2>
        </div>
        <ArticleBody paragraphs={paragraphs} palette={p}/>
      </div>
    </section>
  );
}

function ArticleBody({ paragraphs, palette: p }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20,
      fontSize: 18, lineHeight: 1.7, color: p.mute, maxWidth: 720 }}>
      {paragraphs.map((paragraph, i) => (
        <p key={i} style={{ margin: 0 }}>{paragraph}</p>
      ))}
    </div>
  );
}

function Footer({ palette: p, fontText }) {
  return (
    <div style={{ marginTop: 96, paddingTop: 24, borderTop: `2px solid ${p.line}`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      fontFamily: fontText, fontSize: 11, color: p.mute,
      letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
      <span>© 2026 — Sindri Már Hilmarsson</span>
      <a href="../index.html#work" style={{ color: p.ink, textDecoration: 'none' }}>← More work</a>
    </div>
  );
}

function SparkHero({ palette: p, fontMono }) {
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 7',
      background: p.cream, border: `1.5px solid ${p.line}`, borderRadius: 20, overflow: 'hidden' }}>
      <svg viewBox="0 0 1600 700" preserveAspectRatio="xMidYMid meet"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <g fill="none" stroke={p.ink} strokeOpacity="0.12" strokeWidth="1">
          {[60, 100, 140].map((d) => (
            <path key={d} d={`M ${400 + d} 350 C ${400 + d} ${150 + d/2}, 800 ${120 + d/2}, 1000 ${200 + d/2} S ${1350 - d/2} 350, ${1200 - d/2} 500 S 800 ${600 - d/2}, 600 ${530 - d/2} S ${400 + d} 550, ${400 + d} 350`}/>
          ))}
        </g>
        <path d="M 460 350 C 460 200, 800 140, 1000 220 S 1320 350, 1160 490 S 800 580, 600 520 S 460 500, 460 350"
          fill="none" stroke={p.moss} strokeWidth="3" strokeOpacity="0.7"/>
        <line x1="460" y1="290" x2="460" y2="410" stroke={p.ink} strokeWidth="2" strokeOpacity="0.4" strokeDasharray="8 6"/>
        <g transform="translate(460, 315)">
          <rect x="-18" y="-10" width="36" height="20" rx="4" fill={p.moss} opacity="0.9"/>
          <rect x="-8" y="-14" width="16" height="6" rx="2" fill={p.clay} opacity="0.85"/>
          <rect x="-8" y="8" width="16" height="6" rx="2" fill={p.clay} opacity="0.85"/>
          {[[-20,-8],[-20,4],[16,-8],[16,4]].map(([cx,cy],i) => (
            <rect key={i} x={cx} y={cy} width="8" height="4" rx="1" fill={p.ink} opacity="0.75"/>
          ))}
        </g>
        <g transform="translate(90, 205)">
          <rect x="0" y="0" width="220" height="290" rx="4" fill={p.paper} stroke={p.line} strokeWidth="1.5"/>
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <rect key={`${r}-${c}`} x={18 + c * 38} y={18 + r * 50} width="28" height="42" rx="3"
                fill={(r + c) % 7 === 0 ? p.clay : p.ink} opacity="0.8"/>
            ))
          )}
          <rect x="18" y="260" width="184" height="8" rx="2" fill={p.moss} opacity="0.5"/>
        </g>
        <text x="800" y="650" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="13" fill={p.mute} letterSpacing="0.12em">
          BATTERY PACK · RUNNING CAR · SPAIN 2026
        </text>
      </svg>
      <div style={{ position: 'absolute', top: 22, left: 28, fontFamily: fontMono, fontSize: 11,
        color: p.ink, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
        Battery pack as the spine
      </div>
      <div style={{ position: 'absolute', top: 22, right: 28, fontFamily: fontMono, fontSize: 11,
        color: p.ink, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
        Spain 2026
      </div>
    </div>
  );
}

window.SparkPage = SparkPage;
