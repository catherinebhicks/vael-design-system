# Vael landing page — copy deck (locked voice)

**Voice:** first-person, wry, confident, no corporate gloss. (Approved.)
**Spine:** AI collapses production → judgment & ownership become the whole job → the rescue proves it.
Two chapters: *built for a startup* (production) → *carried forward on my own* (rebuilt in the open).
Every beat serves the spine and hands off to the next — a story told in movements, not a parts tour.
**Key facts:** 27 → 44 components · 80+ doc pages · 17 Shape Up pitches · 145 tickets · a **six-week Shape Up cycle**, then expanded · one designer.
**Anonymization:** "a bioscience startup," never the company; "Vael," never the internal name.
**Contact:** placeholder (TBD before deploy).

---

## 1 — HERO
**Vael**
*A design system, built with AI in the loop.*
27 → 44 components · 80+ doc pages · one designer · a six-week cycle, then carried forward

It began as a design system for a bioscience startup — built with AI as my pair, to production standards, in a six-week Shape Up cycle. When priorities shifted and it was shelved, I didn't want good work to die in a backlog. So I carried it forward on my own: rebuilt it clean, in the open, and took it further.

## 2 — THE GAP  ·  "One designer, a system-sized problem"
Most design systems die in the space between "we should have one" and "someone has to actually build it."

The product had grown the way real products do — fast, and a little inconsistent. Three blues that didn't quite agree. Buttons with opinions about their own padding. Tables built four ways. The fix was obvious: tokens, a component library, real documentation, a way to keep it all honest. The catch was just as obvious — that's a team's worth of work, and there was no team. There was me, and a six-week cycle. So the project turned into a question: *how much of a team's job can one designer actually own, if the cost of production falls away?*

## 3 — HOW I WORKED WITH CLAUDE  ·  "A pair, not an autopilot"
The answer started with a reframe. I stopped treating AI like a fancier autocomplete and started treating it like a *pair*. I brought the taste, the standards, the judgment calls. Claude brought the throughput — and a memory that never lost the thread. I'd set a standard once, and it would hold that standard across a hundred things.

But the surprise wasn't how much it could make. It was *where the leverage actually lived.*

## 4 — WHERE THE LEVERAGE LIVED  ·  "Not in making a button"
Anyone can get an AI to make a button. The leverage compounded as I aimed it higher — at the infrastructure that keeps a system honest. It came in three rungs, each one pulling me further out of production.

**First, the tokens.** *(dark)* A system is only as trustworthy as its tokens, so that's where I started. The decision I cared about most wasn't *which* blue — it was the format: an open standard (W3C), not a proprietary blob, so the system could move between tools instead of getting married to one. Claude generated the structured source; I made the architecture calls, and every token earned a description. *[swatch grid + code card]* — one traceable source for color, type, spacing, elevation, motion. **Eight spacing steps, not forty.** Restraint on purpose.

**Then the theme generated itself.** *(dark, the production build)* Those tokens weren't hand-copied into a theme — they *compiled* into one. A value changed in Figma, flowed through Supernova into the token source, and regenerated the theme the product actually used. Nobody ever retyped a hex code; design and engineering couldn't drift, because there was only one place the truth lived.

**Then the docs wrote themselves.** A design system without docs is just a folder. So instead of writing pages, Claude and I built the *machine* that wrote them — a build script (`build.py`, ~485 lines) that turned source files into every page and kept them in lockstep with the code. The leverage was never AI writing a component. It was AI building the thing that documents every component, forever.

## 5 — THE PART ONLY I COULD DO  ·  "What AI couldn't do"
All that throughput only mattered because the decisions stayed mine — and the less time I spent typing, the more visible they got. "Built with AI" is easy to misread as "AI decided." It didn't. The decisions were the whole job.
- **Taste** — which three blues become one; what restraint means when you stop adding tokens.
- **Accessibility** — I audited each component by hand against WCAG, then ran the Storybook a11y addon as a second pass. It caught smaller things I'd missed, and I fixed them. AI can apply a rule. It can't decide the rule is right.
- **Governance** — how a component gets proposed, reviewed, versioned, retired. A system without governance rots.
- **The "why"** — I wrote the decision record myself, into the pitches, because the reasons are what the next person actually needs.

Claude was fast and tireless — and only as good as the standards I set. The bottleneck was never its speed. It was my judgment. Which is exactly where a designer's time should go.

## 6 — AND THEN IT WAS SHELVED  ·  "Ready to build, then gone"
I took it all the way to a handoff: the system built, plus **17 Shape Up pitches and 145 tickets** scoping the rollout for the engineering team. Everything ready for the cycle that would put it into the product.

Then priorities shifted, and it was shelved before that cycle ever ran.

This is where most of these stories quietly end. I couldn't accept that.

## 7 — REBUILT IN THE OPEN  ·  "I wasn't going to let it die in a backlog"
So I carried it forward on my own — off the clock, with no one to hand it to — and rebuilt it clean, this time to be *shown*. I took it from **27 components to 44**: a Highcharts-powered charting layer, a dashboard and data-viz set, and the form and completeness pieces a real system needs. I re-authored a fresh theme and deliberately traded the internal generator for **Storybook**, so every component is live, interactive, and documented in one place.

The system isn't a screenshot in a case study. It's a live library you can open right now.

*[live component demos + Storybook link/embed]* — **44 components · MUI v7 + MUI X · Highcharts · a live Storybook.**

## 8 — CLOSE + DISCLOSURE + FOOTER  ·  "Where it landed"
A production design system, built with AI in a six-week cycle, taken all the way to a ready-to-build handoff. Then a second life: carried forward solo, expanded to 44 components, rebuilt in the open. One designer, start to finish.

This isn't a story about AI replacing design work. It's the opposite. AI took everything that *wasn't* design off my plate — and left me with the part only I could do.

*[disclosure]* How AI was used here: Claude generated tokens, components, and tooling under standards I set and edited — first for the production system, then again as I rebuilt it into Vael. The design decisions — what's correct, what ships, what's accessible — were mine.

*[footer]* Designed & built by Catherine Hicks · [contact TBD] · © 2026
