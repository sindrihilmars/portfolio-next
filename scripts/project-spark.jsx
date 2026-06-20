// project-spark.jsx — Team Spark long-form case study.
// Rewritten from Sindri's review feedback: programme decline, Croatia overhead, battery-pack spine.

const SPARK_INTRO = [
  "This is a look back on the best, most challenging, most frustrating, and sometimes most belittling time of my life. I want to write this because it is useful to step back and see the whole thing at once, rather than only remembering it as a sequence of late evenings, broken plans, and urgent fixes. I also want to write it because the people around Team Spark — the school, sponsors, alumni, future members — need the context. The car that goes to Spain this summer did not appear from one good semester. It came out of years of accumulated work and years of accumulated problems.",
  "I have spent three years with Team Spark, the University of Iceland's Formula Student team. Formula Student is a competition where university students design, build, and race an open-wheel car. Teams are judged not only on whether the car drives, but on the engineering behind it: design choices, cost analysis, business case, manufacturing, safety, and the ability to explain what was built. In Iceland, I think it is the best engineering education available. It gives students a chance to move beyond coursework and find out what their skills mean when the thing in front of them has to work.",
  "The last time Team Spark produced a driveable car was 2019. From 2020 onward, the team worked on essentially the same car, season after season, changing pieces, fixing pieces, never quite finishing. This summer we are taking the car to Formula Student Spain. What I want to understand here is not just how the car came back, but how a group of capable engineering students could spend years not getting there — and what finally changed enough for the work to convert into a running car.",
  "I should say upfront that I do not have all the answers. I was there for three of the six years. Some of the earlier story comes from older members, and some of it is only visible to me through the car and the state of the organisation I walked into. So this is not a definitive history of Team Spark. It is my account of the programme as I experienced it, and of the work it took to bring the thread back."
];

const SPARK_SECTIONS = [
  {
    "num": "01",
    "label": "Losing the thread",
    "heading": "A programme in decline.",
    "paragraphs": [
      "The car did not disappear because one person left. That would be too neat, and it would not be true. Covid played a role. Graduation played a role. The limited depth of the school and the alumni base played a role. There are probably factors I do not know about because I was not there when the first cracks opened. What I can describe is the programme I joined: ambitious, capable, still full of people who wanted to build something difficult — but without anyone in the active team who had built a functional car.",
      "That changes the work completely. You are no longer improving a known system. You are inheriting a half-finished one, with several years of decisions embedded in PCBs, cables, brackets, spreadsheets, and assumptions nobody can fully explain. Each year the car becomes harder to read. Every new group inherits not only the work left unfinished, but the reasoning that disappeared with the people who made it.",
      "The electrical system showed this most clearly. When I joined, there were about six months until the head of electrical quit. He was replaced, and about a year later that lead quit as well. Those departures were not the cause of the problem, but they exposed it. The electric lead was being asked to debug the most complex system in the car: self-made PCBs, custom cables, years of accumulated mistakes, and very little reliable institutional memory. At some point debugging stops being a clean engineering task and becomes archaeology.",
      "The battery pack was buried inside that workload. It should have been treated as its own programme-level risk, separated from the rest of the electrical system so someone could own it properly. Instead, it sat under an electric lead who already had more than enough to untangle. No one with the necessary experience and bird's-eye view stepped in early enough to say that the pack had to be decoupled, or that the electrical lead had no real chance of debugging the car while also carrying the battery pack. I do not think anyone could articulate that clearly at the time. We were too close to the mess.",
      "Team Spark had never really produced a good battery pack. In earlier cars, the mechanical attachment of the batteries was closer to a suggestion than a necessity. There is a story from around 2018 where the car simply was not allowed to crash because the batteries were not properly constrained inside it. When the rules later required teams to prove the pack could withstand 20g of acceleration in the vertical direction without damage, the old design philosophy collapsed. The pack should have become one of the central projects of the team. Instead, it remained one more thing on an already impossible list.",
      "That kind of programme is hard to recruit into and harder to stay in. If the car has not driven for years, and no one can guarantee even a driveable car by the end of the semester, investing your time becomes difficult to justify. Some people contributed moderately and protected the rest of their life. Others jumped in, gave it everything, and burned out when none of the work turned into a visible reward.",
      "The people who approached it more moderately often did better. That says something uncomfortable about the state of the team. It was not that the most committed people lacked ability. It was that the organisation could absorb huge amounts of effort without converting that effort into a running car. A healthy programme can reward obsession. An unhealthy one can punish it.",
      "So when I say Team Spark had lost the thread, I do not mean that it had lost ambition. The ambition was obvious. What it lacked was depth, continuity, and a structure that protected the important work from being buried under everything else. The battery pack is the clearest example, so it runs through this story. It compressed the larger organisational problem into one subsystem."
    ]
  },
  {
    "num": "02",
    "label": "Croatia and overhead",
    "heading": "The work around the car.",
    "paragraphs": [
      "I joined Team Spark in the fall of 2023 and was placed in the drivetrain group. The big project that year was the monocoque — the carbon-fibre chassis. It was not easy. There was a month or two of learning the process, making mistakes, preparing materials, and putting in the labour. We baked the body in Össur's facilities, and that is where I met Mási. He worked at the company and really saved our asses during the process, mostly in his own time. By the end, he was just happy to hear that next semester he had a place in our team. He is now our head of chassis.",
      "The monocoque is a good example of what was still alive in the team. Even when the car did not drive, people were willing to take on difficult work. But the car itself was only part of what Team Spark demanded from them.",
      "During the school year, Team Spark is a course within the University of Iceland, but it is almost completely run by the individuals inside the team. There is a weekly team meeting, weekly group sessions, sometimes two in a week, and group lead meetings. The team also runs its own internal courses: 3D modelling, PCB design, welding, and a mandatory safety course for working on the car. New members have to be received and taught. Group leads have to coordinate work that may not produce visible progress for months.",
      "When the team competes, the members organise the transport of the car, the campsite, the equipment, the paperwork, and the logistics of getting an Icelandic Formula Student team to mainland Europe. For central European teams, a competition can mean driving the car onto a trailer and taking it a few hours down the road. For us, it means shipping containers, customs, lost weeks, and planning around the fact that the car leaves the country long before the team does.",
      "On top of that, the stationary car became one of the programme's main contributions to the school. We took it to Vísindavaka Rannís, Legókeppnin, UTmessan, Háskóladagurinn, Dagur Verkfræðinnar, and Verk og vit. Those events usually meant giving up a weekend to transport the car, set it up, stand beside it, and explain the project. We also received visiting student groups, organised company visits, recruitment events, a design-push getaway, Christmas movie nights, Þrettándi, and the annual árshátíð. We handled sponsor communication. We administered the Formula Student submission process, including the full day of quizzes, documents, and bookkeeping required to get into a competition.",
      "All of that work was real, and much of it was valuable. It also meant that ambitious people who joined because they wanted to build a race car were quickly pulled into everything around the race car. If you came in with a burning interest in suspension, there was a good chance you would spend a weekend at a public event, prepare a safety course, help with submission documents, or cover a responsibility that had nothing to do with the system you wanted to build. In a functional team, that overhead is part of the bargain. In a team with a stationary car, it becomes restraining.",
      "Croatia in the summer of 2024 made this obvious. The team went as a concept entry. The car did not drive, but getting it there still required the full machinery: documents, transport, shipping, camping, tools, equipment, and people willing to spend their summer moving a non-running car through a European competition. It was an achievement, but it also showed the cost of keeping the programme alive while the core promise remained unmet.",
      "After Croatia, a large part of the team left. Some graduated. Some did not continue in school. Some had simply spent too much of themselves on a project that did not give enough back. Most of the people who remained were tired. By January, it was fairly clear to me that we had to think longer term. There was still an outside chance the electrical system would suddenly click, because at the time I did not know better, but I was no longer counting on it.",
      "I was also starting to understand that the electrical problem was not something I could learn and fix by brute force. What the team needed there was experience — preferably an electrician studying electrical engineering, someone used to debugging physical systems instead of hoping the next PCB or cable would be the one that made everything work. My contribution had to be somewhere else.",
      "What I could do was prepare the ground. I could help create leaders for the systems that were within our scope as a student team: drivetrain, aero, chassis, suspension. I could make sure the electrical system had more than one person around it. I could push the battery pack into someone's direct responsibility. I could try to hold on to enough older members to cover the administrative overhead, so the group leaders were not dragged away from their systems every time the team needed a responsible person for an event, a course, a quiz, a document, or a logistics problem.",
      "I did not count on bringing Kristján back. What I did try to do was create a team he could step into without having to carry the whole programme on his back. If he returned, he should be able to focus on the electrical system. That still only became enough because Róbert joined later — an electrician with debugging experience — and from Christmas break onward poured his time into the electrical system. But by then the rest of the car was no longer waiting for electrical to become a reason to organise. Drivetrain, aero, chassis, suspension, and the battery pack all had people around them. Once the electrical system came online, the rest of the team was ready to go."
    ]
  },
  {
    "num": "03",
    "label": "Rebuilding depth",
    "heading": "When the team stopped depending on one person at a time.",
    "paragraphs": [
      "In the fall of 2024 I became head of drivetrain, and the team brought in a strong class of new recruits. I put time into them partly because the technical work needed people, and partly because the programme needed a future. We held extra Sunday sessions where anyone could come work through calculation examples from the Formula Student tests. We got people comfortable with the engineering. We funded sporting sessions, had barbecues, and tried to make the team a place people might stay even when there was no obvious reward waiting at the end of the semester.",
      "That is a structural reality of Team Spark: the university awards credit for your first year of participation, and after that, nothing. You are volunteering. The team runs on people who choose to keep showing up when there is no grade, no pay, and no guarantee the car will ever drive.",
      "Lárus was one of the only recruits who came to the problem-solving sessions more than once. Those sessions were where we aligned our thinking about what the team needed to become. He is now head of suspension. Todor was in my drivetrain group and showed enough energy and initiative to take over as head of drivetrain when I moved on. Árni was maybe the most enthusiastic recruit of the season and became head of aero.",
      "Late that fall, the head of electrical quit. The electrical team was orphaned again. Rather than forcing a leadership role onto someone who was not ready, the approach was to adopt individual members and their projects into other groups. Ás, one of my drivetrain recruits, had a friend named Alex in the electrical group. Alex came over through Ás, using the social connections that already existed.",
      "The project for them was to get the motor turning from bare necessities: a power supply, a motor controller, a motor. We had a test setup, and it seemed like a way to build understanding from the ground up. It turned out to be far more ambitious than I had understood. Isolating the motor from the car's existing electrical system does not only simplify things; it creates new problems. When the ultimate goal is to drive the car, it makes more sense to focus on getting the car's system right than to build a separate island beside it. The motor project did not achieve what I thought it would.",
      "What it did do, unintentionally, was bring Kristján Örn back.",
      "Kristján had been part of the 2019 team, one of the last people connected to a car that actually drove. He had stayed loosely connected after graduating, but by around 2023 he had stepped back. Watching the team stagnate was frustrating. Still, he never fully disconnected. Team members would send him questions on Discord, and he would answer them. He knew the answers, and he could not watch people struggle with problems he could solve in five minutes.",
      "Ás and Alex, stuck on the motor project, started asking him questions. That interaction pulled him back in. Over the spring and early summer of 2025 he started looking more closely at what the team was doing. What he saw was different from what had driven him away. By summer he was fully committed, took a part-time role with the school to support the project, and has been putting serious time into it since.",
      "By summer 2025, the car was grounded. No competition that year. The focus shifted to getting each subsystem done correctly, without spending the summer on the logistics of shipping an unfinished car overseas. In Iceland, competition logistics can take roughly three weeks out of the season. That summer, the time was better spent making the car real.",
      "The next year tested whether the team actually had depth. Todor and Árni both left earlier this year. Life pulled them in different directions, for reasons that had nothing to do with the team. It was a sharp reminder of what the electrical system should already have taught us: you cannot build around individuals alone. Someone always leaves. The system has to survive it.",
      "When Árni left, Sólveig stepped up to lead aero. She had been in his group during the 2024–2025 season, learning and contributing. In the environment the team had built — where a subsystem lead could focus on one system while the rest of the team moved forward independently — she thrived. Eighteen months earlier, that would have been difficult to imagine. Under the old structure, any capable new member was pulled toward whatever crisis the team had that week. Specialisation requires stability.",
      "For the 2025–2026 season, the team recruited a record number of new members. More hands, more energy, and visible proof that the programme was alive. It also created tension. Some people held an image of Team Spark as an elite group, a small team of the best engineers. A large intake meant a lot of members who were, honestly, contributing very little. That clashed with the identity some wanted the team to project.",
      "The tension was real but manageable. A team that has not finished a car in five years does not get to be elite. It needs people, visibility, and proof of life. The question was whether the quantity approach would produce quality — whether somewhere in that intake were the people who would make the difference. By this point I was deep in the battery pack and no longer the one getting to know every new face. The culture and the structure had to do that work on their own. And they did."
    ]
  },
  {
    "num": "04",
    "label": "The battery pack",
    "heading": "The subsystem that carried the whole story.",
    "paragraphs": [
      "The battery pack story picks up here. Kristján, now fully back, made it clear that someone reliable needed to own it. Me and Ás took it on.",
      "Some background on what we were working with. In 2020 the team had purchased a set of battery cells. Some of those cells had gone into partial production, assembled into blocks of twelve on HC-PCBs. I was there for the tail end of that effort during the 2024 push to get the car ready for Croatia. A few weeks before the container was supposed to ship, the team tried to rush the batteries through production. It was halted because the gluing quality was not good enough. The partially assembled blocks sat around after that. Later, when it became clear the team needed more cells, a rebuy was ordered from China. The plan assumed some of the old blocks were salvageable and the new cells would fill the gaps. Both assumptions turned out to be shaky.",
      "The scope was large. Solve the mechanical constraint problem so the pack could survive the 20g requirement without re-manufacturing the battery box. Test every cell, old and new, for voltage and internal resistance. Electrically connect twelve cells into each block on an HC-PCB, verify voltage readings from the board, run charge-discharge cycles on every block to confirm capacity, develop a gluing process to bond pairs of blocks into segments, and attach heat sensors.",
      "The electrical connections were the first real challenge. We used an old micro TIG welding machine the team had gotten from a dental technician, because apparently nobody else in Iceland uses these machines at this scale. Nobody on the team knew how to operate it. I taught myself, practised on scrap, and got results that were decent but never as consistent as I wanted. I kept suspecting the 1mm copper on the HC-PCB was the problem — too thick, pulling heat away too fast — but I did not know the previous design had used thinner copper. Nobody had documented the change. Without that confirmation, I kept chasing the wrong variables and adjusting the machine when the material underneath was probably the real issue.",
      "Production started with the legacy blocks from the 2020 cells. When we tested them, we found dead cells. Voltages under 3.4V in blocks that were supposed to be fine. That triggered a much larger testing phase, and the results were bad. A significant number of the legacy blocks were unusable. The rebuy plan, which had counted on those blocks supplementing the new cells, was undermined.",
      "Then the new Chinese cells arrived with shorter tabs than the originals. The 3D-printed spacer that was supposed to sit between the HC-PCB and the block did not fit; the tabs did not reach through. These cells had travelled from China to Iceland, through weeks of shipping and customs, and they did not match the existing design. Another inherited assumption, wrong.",
      "I tried to bring some of the new recruits into the testing process. My instructions were not clear enough, and every test they ran had to be redone. That was on me. I underestimated how much guidance was needed and how much could go wrong in a process that seemed straightforward once you knew it. Around the same time, plastic debris from our cells got into the air compressor in the storage room where we had been working. The room was never really ours; it was a storage area outside the main garage that we had been using by default. The supervisor, understandably, wanted us out. We moved battery assembly into the shipping container the team uses to transport the car to competitions. Building a battery pack in a shipping container. In Iceland.",
      "By Christmas, nothing was working cleanly. The TIG machine was inconsistent. The legacy blocks were unreliable. The new cells did not fit. We were losing our workspace. The testing ahead was massive.",
      "After Christmas, things started to move. We found a way to ditch the spacer altogether, which opened a path for both old and new cells. I made adjustments to the micro TIG setup that improved consistency. The next round of testing ran cleanly and quickly. Mási stepped in to help me and Ás, and the three of us found a working rhythm. Kristján helped get the charge-discharge test setup running, which had been a significant hurdle on its own.",
      "Róbert had joined the team that fall, one of the key recruits of the 2025–2026 season. He matched Kristján's work ethic and brought the kind of base knowledge needed to trace through years of accumulated mistakes in the electrical system and fix them one by one. Having Kristján, who knew what the system was supposed to look like, and Róbert, who had the skill and stamina to untangle what it had become, was the combination that finally resolved the team's longest-standing problem.",
      "We developed a gluing process for bonding blocks into segments and produced the first segment from new cells in late February. Then we turned to the older blocks. The mechanical solution — an aluminium frame that the blocks were glued to, fitting tightly into the segment compartments — did something we had not expected: it protected the vulnerable cells within the poorly made legacy blocks, making them usable where they would not have been before. These blocks needed rebalancing, another setup challenge that Kristján solved.",
      "Over Easter we did it. Seven days straight. Charging, balancing, discharging, charging again, gluing into segments. Block after block. No breakthrough, no genius moment. Just repetition with a process that finally worked and people who trusted each other enough to keep going. By the end we had reached 500V, which the electrical team was confident running the car on.",
      "The battery pack took months of dead ends, inherited mistakes, undocumented design changes, equipment nobody understood, disappearing workspaces, and my own errors. Then it came together in a concentrated burst once the right process and the right people were in place. That is the story of the whole team compressed into one subsystem."
    ]
  },
  {
    "num": "05",
    "label": "Spain 2026",
    "heading": "A running car, not a victory lap.",
    "paragraphs": [
      "The car drives. It is an electric car with a carbon-fibre monocoque, rear-wheel-drive single-motor chain drive, a retrofitted suspension, liquid cooling on the motor and controller, fans blowing on the batteries because there is nothing better, and practically no aerodynamics. A real character.",
      "This summer it goes to Spain. It will not be the fastest car there. But it will be there, and after six years, that is the statement.",
      "I am not writing this to take a victory lap. There is too much still broken for that. The relationships with the university and our sponsors have been worn down by years of promises that did not materialise. Trust does not rebuild itself. The school needs to engage differently going forward, and we need to earn our sponsors' attention back.",
      "What I want people reading this to understand is what the programme actually is. Team Spark is the only project in Iceland that gives engineering students firsthand experience building a complete engineered system from scratch. It is a real challenge for promising engineers who will not develop a fraction as much by only scoring tens on exams. It is also an opportunity for sponsors to meet future engineers before they enter the job market, not as names on a CV, but as people who have been tested by real work.",
      "We are not asking for a rescue. The hard internal work has been done. The team is built, the culture is built, the car is built. What the programme needs now is attention and energy. Come to the garage. Talk to the students. Engage with the work while it is alive.",
      "Daníel, Ás, Mási, Lárus, Sólveig, Kristján, Róbert, Alex, Elín, Beta, Todor, Árni — and others I have not named here — put something of themselves into this project that they will not get back. This summer in Spain, a car pieced together from salvaged cells, dental equipment, a shipping container, and stubbornness will line up alongside teams with bigger budgets, shorter supply lines, and generations of institutional memory. It will not be the fastest. But it will be there."
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
            {t({ is: '— verkefnasafn 2026', en: '— portfolio · 2026' }, lang)}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <nav className="bloom-nav" style={{ display: 'flex', gap: 28, fontFamily: fontText, fontSize: 13,
            letterSpacing: '0.04em' }}>
            {[
              { l: { is: 'Verkefni',      en: 'Work'    }, h: '../index.html#work' },
              { l: { is: 'Í vinnslu',     en: 'Now'     }, h: '../index.html#now' },
              { l: { is: 'Ferilskrá',     en: 'Résumé'  }, h: '../index.html#resume' },
              { l: { is: 'Hafa samband',  en: 'Say hi'  }, h: '../index.html#contact' },
            ].map((n) => (
              <a key={n.h} href={n.h} style={{ color: p.mute, textDecoration: 'none' }}>{t(n.l, lang)}</a>
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
        <a href="../index.html#work" style={{ color: p.mute, textDecoration: 'none' }}>{t({ is: '← Verkefni', en: '← Work' }, lang)}</a>
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
              {t({ is: 'Formula Student · 2023—26', en: 'Formula Student · 2023—26' }, lang)}
            </span>
          </div>
          <h1 style={{
            fontFamily: fontDisplay, fontWeight: 600, fontSize: 88, lineHeight: 1.0,
            letterSpacing: '-0.018em', margin: '0 0 18px', color: p.ink,
          }}>
            {t({ is: 'Hvernig er bíll smíðaður á sex árum', en: 'How to Build a Car in Six Years' }, lang)}
          </h1>
          <p style={{
            fontFamily: fontDisplay, fontStyle: 'italic', fontSize: 24, fontWeight: 400,
            lineHeight: 1.4, color: p.clay, maxWidth: 620, margin: 0,
          }}>
            {t({ is: 'A long-form account of Team Spark, the University of Iceland\'s Formula Student team, and the work it took to bring a car back to competition.', en: 'A long-form account of Team Spark, the University of Iceland\'s Formula Student team, and the work it took to bring a car back to competition.' }, lang)}
          </p>
        </div>

        <div style={{
          background: p.cream, border: `1.5px solid ${p.line}`, borderRadius: 12,
          padding: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
        }}>
          {[
            [{ is: 'Hlutverk',      en: 'Role'            }, { is: 'Framleiðslustjóri', en: 'Production Lead' }],
            [{ is: 'Tímalína',      en: 'Timeline'        }, { is: '2023—26',            en: '2023—26'          }],
            [{ is: 'Lið',           en: 'Team'            }, { is: 'Team Spark',          en: 'Team Spark'       }],
            [{ is: 'Staða',         en: 'Status'          }, { is: 'Spánn 2026',          en: 'Spain 2026'       }],
          ].map(([k, v], i) => (
            <div key={i}>
              <div style={{ fontFamily: fontText, fontSize: 10, color: p.mute,
                textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600, marginBottom: 6 }}>{t(k, lang)}</div>
              <div style={{ fontFamily: fontDisplay, fontWeight: 500,
                fontSize: 17, color: p.ink, letterSpacing: '-0.01em', lineHeight: 1.35 }}>{t(v, lang)}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ position: 'relative', padding: '64px 80px', borderBottom: `2px solid ${p.line}` }}>
        <SparkHero palette={p} fontMono={fontMono}/>
      </section>

      <ArticleSection num="00" label="Opening" heading="Why write this now." paragraphs={SPARK_INTRO} palette={p} SectionLabel={SectionLabel} lang={lang}/>

      {SPARK_SECTIONS.map((section, i) => (
        <ArticleSection key={section.num} num={section.num} label={section.label} heading={section.heading}
          paragraphs={section.paragraphs} palette={p} SectionLabel={SectionLabel} shaded={i % 2 === 1} lang={lang}/>
      ))}

      <section style={{ position: 'relative', padding: '120px 80px 96px' }}>
        <div style={{ maxWidth: 760 }}>
          <SectionLabel num="—">{t({ is: 'Til baka í verkefnasafnið', en: 'Back to the portfolio' }, lang)}</SectionLabel>
          <h2 style={{
            fontFamily: fontDisplay, fontWeight: 600, fontSize: 64, lineHeight: 1.0,
            letterSpacing: '-0.018em', margin: '0 0 32px', color: p.ink,
          }}>
            {t({ is: 'Team Spark fer til Spánar.', en: 'Team Spark goes to Spain.' }, lang)}
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: p.mute, maxWidth: 620, margin: '0 0 36px' }}>
            {t({ is: 'This page is a review draft adapted from the long-form Team Spark text. The copy is intentionally kept close to the source so it can be reviewed locally before tightening for the final portfolio version.', en: 'This page is a review draft adapted from the long-form Team Spark text. The copy is intentionally kept close to the source so it can be reviewed locally before tightening for the final portfolio version.' }, lang)}
          </p>
          <HLButton palette={p} fontBody={fontText} href="../index.html#work">{t({ is: '← Fleiri verkefni', en: '← More work' }, lang)}</HLButton>
        </div>
        <Footer palette={p} fontText={fontText} lang={lang}/>
      </section>
    </div>
  );
}

function ArticleSection({ num, label, heading, paragraphs, palette: p, SectionLabel, shaded, lang }) {
  const fontDisplay = `'Source Serif 4', Georgia, serif`;
  return (
    <section style={{ position: 'relative', padding: '88px 80px',
      background: shaded ? p.cream : p.paper, borderBottom: `2px solid ${p.line}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80 }}>
        <div>
          <SectionLabel num={num}>{typeof label === 'string' ? t({ is: label, en: label }, lang) : t(label, lang)}</SectionLabel>
          <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 44,
            lineHeight: 1.05, letterSpacing: '-0.018em', margin: 0, color: p.ink }}>
            {typeof heading === 'string' ? t({ is: heading, en: heading }, lang) : t(heading, lang)}
          </h2>
        </div>
        <ArticleBody paragraphs={paragraphs} palette={p} lang={lang}/>
      </div>
    </section>
  );
}

function ArticleBody({ paragraphs, palette: p, lang }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20,
      fontSize: 18, lineHeight: 1.7, color: p.mute, maxWidth: 720 }}>
      {paragraphs.map((paragraph, i) => (
        <p key={i} style={{ margin: 0 }}>{typeof paragraph === 'string' ? t({ is: paragraph, en: paragraph }, lang) : t(paragraph, lang)}</p>
      ))}
    </div>
  );
}

function Footer({ palette: p, fontText, lang }) {
  return (
    <div style={{ marginTop: 96, paddingTop: 24, borderTop: `2px solid ${p.line}`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      fontFamily: fontText, fontSize: 11, color: p.mute,
      letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
      <span>© 2026 — Sindri Már Hilmarsson</span>
      <a href="../index.html#work" style={{ color: p.ink, textDecoration: 'none' }}>{t({ is: '← Fleiri verkefni', en: '← More work' }, lang)}</a>
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
