# Writing voice — Sindri Már Hilmarsson

Reference brief for an agent helping Sindri write. Based on observed
choices across a long bilingual portfolio edit (Icelandic + English),
not invented from training data. Anything here is *what he actually
did*, not what I think he'd want.

## Subject

Sindri Már Hilmarsson — mechanical engineer (BS, Háskóli Íslands)
based in Reykjavík, transitioning into applied AI. Writes for two
audiences: Icelandic employers / collaborators (primary), and an
English-speaking secondary audience (international reviewers,
documentation readers). Builds AI integrations and ships them. Day
job is currently construction work; side projects are technical.

## Languages

- **Default: Icelandic.** Write IS first when given the choice.
  English follows as a translation when needed.
- The two languages **don't have to map 1:1**. Sindri is comfortable
  with intentional asymmetry — e.g. *Frumkvöður* in IS (carries
  "initiator/founder" connotations) paired with the more neutral
  *Builder* in EN (he explicitly rejected *Entrepreneur* as an EN
  translation). Translate for *meaning and effect*, not for literal
  parallelism.
- Loanwords stay loaned when natural. *Telegram*, *Python*, *Claude*,
  *Opus*, *Pydantic*, *Whisper*, *monocoque*, *beta* — all retained
  in IS prose. Don't manufacture awkward Icelandic neologisms when
  a term is already understood in the field.
- Treat the IS as authoritative when wording differs. If his IS says
  *daglegri notkun* (daily use) while a separate EN block I drafted
  said *daily production*, his IS wins; align the EN to match.

## Voice (both languages)

- **Direct and matter-of-fact.** "It works." stands as a sentence.
  No throat-clearing.
- **First-person, not corporate.** *I built him a simple agent that
  does what I used to — and it's taken over the job.*
- **Self-positioning is honest, not boastful.** He calls his role
  on Dagskýrslutól *Samsetning* / *Integration*, not *Builder* or
  *Founder*. When a CV draft said he led a 60-person team, he
  corrected it to 30 — the actual Spain-competition crew.
- **Rhetorical questions to set up the point.** A signature move:
  *"Hvenær á að gera allar þessar litlu ómerkilegu skýrslur? Á
  skrifstofunni? Heima í fartölvunni? Ráða manneskju?"* — pose
  the question, list the unsatisfying options, then deliver the
  answer.
- **Concrete over abstract.** *the truck*, *the office*, *the
  laptop*, *the supervisor*, *Telegram* — not *workflows*,
  *stakeholders*, *the user*.
- **Lists target sectors when scoping ambition.** *Fiskiðnaður,
  álver, eftirlit* / *Fisheries, aluminium smelters, inspections*.
  Three to five concrete domains, comma-separated, no padding.
- **Closes with a deflating practical line.** After making a claim
  about something working, he often follows with *"hræódýrt,
  ótrúlega skalanlegt og einfalt að setja upp"* — *dirt cheap,
  remarkably scalable, quick to set up*. Take the wind out of the
  sails before someone else does.

## Editorial moves he reaches for

- **Pose-and-answer.** Rhetorical question → option list → preferred
  answer. See *§01 In brief*.
- **Pipeline shorthand with arrows.** *Raddskilaboð → Gervigreind →
  sérsniðin skýrsla* / *Voice messages → AI → tailored report.* The
  → symbol is part of the voice, not decorative.
- **Honest reframings.** *Daily production* → *Beta release*; *Team
  Principal* → *Production Lead*; *built around X for Icelandic
  worksites* → *built around Icelandic speech*. Each shift makes the
  claim narrower and more accurate.
- **Side-project framing as humility + ambition.** *"It's a side
  project. Simple to deploy, simple to operate — and waiting to be
  applied to more workflows like it."* Acknowledge the smallness;
  signal the appetite.
- **Replace decorative chrome with personal touches.** *No. 0007 ·
  Spring 26* → *Reykjavík 2026*. He prefers fewer abstract
  flourishes, more grounded specifics.

## Editorial moves he rejects

- **Fictional or aspirational filler.** When a draft listed projects
  he hadn't built (a "Wild Salmon Watch" salmon-camera that didn't
  exist), he asked them removed rather than dressed up.
- **Overclaiming about scale or status.** Pushed back on "60-person
  team" when reality was 30. Pushed back on calling Dagskýrslutól
  *daily production* in the meta card and asked for *Beta Útgáfa*.
- **Over-translation of brand names and proper nouns.** *GitHub*,
  *Python*, *Whisper*, *Telegram*, *Opus 4.7* stay English in IS.
  Don't invent "íslensk-pjytón."
- **Padding for length.** Trimmed résumé from 6 to 3 rows when the
  rest were one click away on the standalone CV. *Three sharp ones
  beat four padded ones* is his operating principle.
- **Translating UI conventions where the brevity wins.** *Opna* alone
  is a fine button label in IS (single-word imperative); the EN
  equivalent *Open* is too terse without context, so he accepts
  *Open full CV →* there. Asymmetry is fine when each language's
  conventions are honoured.

## Bilingual mechanics

- Content lives as `{ is, en }` objects through a `t(value, lang)`
  helper. Plain strings pass through both languages unchanged.
- Italic accent words usually appear at the end of a display line
  in EN headlines. In IS, the accent word is the rough semantic
  equivalent, even when grammar shifts position (e.g. *Hvað er í
  gangi **akkúrat** núna?* ↔ *What's going on **right** now?*).
- Display headlines break across 2–3 short lines with one italic
  accent. Keep break points at natural phrase boundaries, not
  awkward mid-clause splits.
- Capitalisation follows each language's convention: title-case
  English nav (*Work · Now · Résumé*), sentence-case Icelandic nav
  (*Verkefni · Í vinnslu · Ferilskrá*). The IS toggle button label is
  also sentence-case despite English UI buttons often being title-case.
- He occasionally capitalises a noun mid-phrase for emphasis or
  weight (*Beta Útgáfa* with capital Ú, *Verkefni* with capital V in
  back-link). Preserve his casing exactly; don't normalise.

## Punctuation and typography

- **Em-dash** is the design dash. Always use *—* (not the hyphen *-*)
  in headlines, asides, and date ranges. If he types a hyphen in a
  message, treat it as shorthand for the em-dash and silently
  promote.
- **Open-ended date ranges** use a trailing em-dash: *2026—*,
  *April 2026—*.
- **Year ranges** use a two-digit second year by convention:
  *2022—26*, *2023—26*. Not *2022—2026*.
- **Periods on display headlines** are part of the rhythm. Keep
  them. If he forgets one in a message, add it back unless he says
  otherwise.
- **The `·` middle dot** separates short label segments (*Python ·
  Claude · Whisper · Telegram*). Not a comma in this role.

## Foreground / background

Things to **foreground** when writing about Sindri or his work:

- Full-stack AI: from training through application. Hardware up.
- Self-taught path: Ben Eater → CPUs/GPUs → ML. Mechanical-engineering
  background as the grounding, not the limit.
- Iceland-first orientation. Wants to bring AI into companies here.
- Edge AI / fisheries as a research interest he hasn't proved yet.
- Agent framing over copilot framing (*erindreki* / *agent*, not
  *copilot* / *aðstoðarmaður*).
- Side projects that become production tools. *Built it for his boss,
  and it took over the job.*

Things to **background** (don't surface without explicit consent):

- Specific employer names from his work history beyond what's on the
  CV.
- Specific client names on Dagskýrslutól (Vegagerðin, named
  municipalities, named site projects).
- His coworker / supervisor's name from references unless he asks.
- Exact contract or pay arrangements.

## Confidentiality

- Default to anonymising sensitive specifics. *"A mid-size Icelandic
  earthworks contractor"* beats naming the company on a public
  page. He can promote to named when he chooses.
- For Dagskýrslutól specifically: the technical architecture and the
  *category* of customer are fine to discuss publicly. The named
  sites, the named clients, the named supervisor, and the named
  inspection firms are not.
- If naming would help the pitch but feels risky, write both
  versions and let him pick.

## Recurring patterns to mimic

A few phrasings have appeared more than once and look load-bearing:

- *"leita af"* — colloquial for *leita að* (looking for). Preserve
  his colloquial form; don't correct unless he asks.
- *"erindreki"* — his preferred IS term for *agent*. Use this over
  *aðstoðarmaður* or *vinnumaður* or any other candidate.
- *"Gervigreind"* for AI in serious / professional contexts.
  *"tölvugáfa"* (computer-intelligence) for a single playful
  variation he used once in a subhead — keep available as an
  occasional alternative.
- *"sérsniðna skýrslu"* / *tailored report* — recurring object of
  the work. *Customised report*, *bespoke report* are weaker
  equivalents.
- *"þessa litlu ómerkilegu [X]"* / *these tiny, low-importance [X]* —
  rhetorical setup for things he then claims are valuable to solve.

## When in doubt

- Honesty over polish.
- Specific over generic.
- Short over long.
- His phrasing over mine, even when mine is "more correct" in
  textbook terms.
- IS is the home language; EN is the export.
- Ask him before fabricating, fictionalising, or claiming.

## Provenance

Compiled from a portfolio rebuild session on 2026-05-25 through
2026-05-28: ~14 commits of section-by-section bilingual editing on
the landing page and Dagskýrslutól case study. Examples in this
document are drawn from real choices he made during that work.
