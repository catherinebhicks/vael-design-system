# Vael: A design system built with AI — and the judgment it couldn't replace

*One designer, a bioscience startup, and Claude in the loop. What AI was genuinely good at, where my judgment was the bottleneck, and why I refused to let the whole thing die in a backlog.*

---

Most design systems die in the gap between "we should have one" and "someone has to actually build it."

I joined a bioscience startup with a product that had grown the way real products grow: fast, with good intentions and inconsistent results. Three slightly different blues. Buttons that disagreed about their own padding. Tables built four ways. It needed a real design system — tokens, a themed component library, living documentation, a governance process. The kind of thing a platform team builds over a couple of quarters.

What it had was me. One designer, a backlog, and no five-person pod coming to help. The honest math said a system this size wasn't going to happen in the time I had — one six-week Shape Up cycle. That gap is where this stopped being a normal design project and became a question I couldn't stop poking at: how much of a team's worth of work can one designer actually own, if the production cost falls away?

## The reframe: a pair, not an autopilot

The hard part of a design system isn't writing the code — it's *coherence.* Color tokens that agree with each other. Components that share one API philosophy. Documentation that doesn't contradict itself sixty pages in. That's a working-memory problem, and it's exactly what a capable AI partner is good at holding — as long as someone supplies the thread.

So I stopped treating Claude as a fancier autocomplete and started treating it as a **design-engineering pair.** I brought the taste, the standards, and the "why." It brought the throughput and a memory that never lost the thread: I'd set a standard once, and it would hold that standard across a hundred decisions without drifting. That division of labor is the whole story — and the surprising part wasn't how much it could make. It was *where* the leverage actually lived.

## Where the leverage actually lived

It wasn't in generating a button. Anyone can get an AI to make a button. The leverage compounded as I aimed it higher — at the infrastructure that keeps a system honest.

**It started with tokens.** A design system is only as trustworthy as its tokens, so that's where I began. The decision I cared about most wasn't *which* blue — it was the format. I wanted the open [W3C design-tokens standard](https://tr.designtokens.org/format/), not a proprietary blob, so the system could move between tools instead of getting married to one. Claude generated the structured source; I made the architecture calls and set the voice for the descriptions — because a token nobody understands is a token nobody uses. The restraint was mine: eight spacing steps, not forty. The bookkeeping was ours.

**Then the theme generated itself.** In the production build, those tokens didn't get hand-copied into a theme — they *compiled* into one. A value changed in Figma, flowed through Supernova into the token source, and regenerated the MUI theme the product actually used. No one ever retyped a hex code; design and engineering couldn't drift, because there was only one place the truth lived. Designing that pipeline was the most senior work in the project, and having a partner that could reason about the whole chain at once — then write the connective tissue — is what made it feasible for one person.

**Then the docs wrote themselves.** A design system without documentation is just a folder, and the docs ran to dozens of pages that all had to stay consistent with each other *and* the code. Maintaining that by hand is a losing battle. So instead of writing pages, Claude and I built the **machine that generated them** — a build script (`build.py`, around 485 lines) that turned source files into every section page, rewrote navigation per depth, and never touched the source of truth. One designer hand-maintaining that many pages fails. One designer maintaining a *generator,* with an AI pair holding the whole build graph in context, ships.

That's the moment "AI as build method" clicked. Each rung of the ladder — tokens, then the generated theme, then the generated docs — pulled me further out of production and left me with more room for the only thing that actually needed me. And it ran upstream of code, too: I restructured the entire scope into **17 [Shape Up](https://basecamp.com/shapeup) pitches and 145 tickets,** ready for an engineering cycle. I made every scoping call and wrote the reasoning behind each one; Claude drafted each pitch in a consistent structure and flagged the overlaps. "Vision in my head" to "a roadmap an engineer can pick up Monday" went from days to an afternoon.

## The part only I could do

"AI built my design system" is easy to misread as "AI made the decisions." It didn't. Everything above was throughput. The decisions were the job, and they got *more* visible the less time I spent typing:

- **Taste** — which three blues become one; what restraint means when you stop adding tokens.
- **Accessibility** — I audited each component by hand against WCAG, then ran the Storybook a11y addon as a second pass. It caught smaller things I'd missed, and I fixed them. AI can apply a rule consistently. It can't decide the rule is right, or notice when it's quietly wrong.
- **Governance** — how a component gets proposed, reviewed, versioned, deprecated. A system without governance rots.
- **The "why"** — I wrote the decision record myself, into the pitches, because the reasons are what the next team needs most.

The honest model: Claude was the most capable junior collaborator I've worked with — fast, tireless, with perfect recall of the conventions I set. And like any junior, only as good as my specs. The bottleneck was never its throughput. It was my judgment — which is exactly where a designer's time should go.

## And then it was shelved

I took it all the way to a handoff. The system was built. The rollout was scoped — 17 pitches, 145 tickets, the reasoning written down, everything an engineering team needed to implement it into the product.

Then priorities shifted, and the project was shelved before that cycle ever ran.

This is where most of these stories quietly end — good work, killed by timing, left to rot in a backlog. I couldn't quite accept that. The system was real, the thinking was sound, and it had answered my original question better than I expected. So I did the un-tidy thing: I took it home and carried it forward on my own.

## Rebuilt in the open

Off the clock, with no one to hand it to, I rebuilt it clean — this time to be *shown,* not shipped into one product.

I took it from **27 components to 44:** a Highcharts-powered charting layer, a dashboard and data-visualization set, and the form and completeness pieces a real system needs. I re-authored a fresh theme by hand and, this time, deliberately traded the internal static-site generator for **Storybook** — so every component is live, interactive, and documented in one place instead of behind a private build. Same token foundation, same standards, now on MUI v7 and MUI X, and now something anyone can open.

That last part matters more than any claim I could make in prose: the system isn't a screenshot in a case study. It's a live library with a running Storybook you can click through. The rescue is the proof.

## The method became how I run it

The rescue proved the *system* was real. What came next proved the *method* was. The same human-in-the-loop pairing that built the components turned out to run the entire practice around them — the design tool I drew in, the craft I held to, the upkeep that keeps a system from rotting, and the door I left open for whoever picks it up next. Somewhere in the second life it stopped being *"how I built a design system with AI"* and became *"how I run one."*

**Design and code stopped being two jobs.** The oldest tax in this work is the handoff: a designer draws a screen, an engineer rebuilds it in code, and the two drift the moment either one moves. With an AI pair that can hold Figma *and* the codebase at once, that gap closes. I brought Vael into Figma — 105 pages of it, real components with per-component doc panels mirroring Storybook, not screenshots — and wired a round-trip over the Figma MCP: read a node, edit the component and tokens and story, verify, commit. I stopped maintaining two representations of the same truth and started maintaining one. *That loop — and how it actually stays honest — is [its own piece](pieces/01-design-and-code.md).*

**Governance I could actually hold.** "Solo" is usually an excuse for a thin rulebook, and I refused to let it be one here. Vael has a real governance discipline — a WCAG 2.1 AA conformance statement, token rules with a single source of truth, an extend-don't-fork contribution model, per-component guidelines, maturity labels, decision records. Designing those rules is senior work; the hard part alone was never *writing* them, it was *enforcing* them across 103 components without drift — and that enforcement is exactly what the pair is for, gate by gate, audit by audit. *How I designed the rulebook and made it stick is [the second piece](pieces/02-the-rulebook.md).*

**The taste compounded.** The library went from 44 components to 103, but growth was never the achievement — when AI makes iteration nearly free, the scarce thing isn't production, it's restraint. The real move was discipline: one coherent Blueprint language, a single typeface held everywhere, a rule that the page is canonical and the system conforms to it. Cheap iteration is what let me spend the surplus on judgment about *what's right* instead of on typing. *Where that discipline shows up, and why taste is the bottleneck now, is [the third piece](pieces/03-taste-compounded.md).*

**Built to be picked up.** Shown wasn't the finish line — I wanted it *portable.* So the fonts are bundled and licensed, the Figma file is archived in the repo, three onboarding guides in `docs/onboarding/` walk a non-developer in, and the way I design *in* an LLM is written down as a handbook, not folklore. A system anyone can run, and a method anyone can learn. *How I made it portable and teachable is [the last piece](pieces/04-built-to-be-picked-up.md).*

## What I learned

- **Judgment is the scarce resource now, not production.** AI collapses the cost of making the artifact, not the cost of deciding what's correct. Less time typing, far more time deciding — a better use of a designer.
- **Aim leverage at infrastructure, not artifacts.** Anyone can get AI to make a component. The compounding win is the generator and the pipeline that keep everything honest over time.
- **Specs are leverage.** A vague prompt gets a mediocre component; a sharp standard gets a system. Writing the standard *is* the skill.
- **Stay in the loop, or it drifts.** Every place I let consistency slide, it slid. "AI as pair" is load-bearing on the word *pair.*
- **Good work shouldn't need permission to survive.** The most senior thing I did wasn't the pipeline. It was refusing to let a shelved system die when I still believed in it.
- **Designing the rules is senior work, not overhead.** A governance model — accessibility conformance, token discipline, an extension policy, decision records — is a design artifact in its own right. The rulebook is where a solo system either holds or quietly rots, and writing it well is the job, not a chore around the edges of it.
- **The method isn't a project trick — it's an operating model.** The same human-in-the-loop pairing scaled from *making* the system to *running* it: the design tooling, the craft, the upkeep, the handoff. It didn't stop being useful when the components were done; that's when it started earning its keep.
- **Verification is how you keep an AI pair honest.** Speed without a gate is just faster drift. Typecheck, Storybook, Chromatic, the a11y pass, the audits — the discipline that lets me trust a tireless collaborator is the same discipline that lets me move fast with it.

## Where it landed

Vael started as a production design system for a bioscience startup — built with AI in a single six-week cycle, taken all the way to a scoped, ready-to-build handoff. When it was shelved, it got a second life: carried forward solo, expanded from 44 components to 103, rebuilt in the open as a live, documented library — and then something more than a library. The human-in-the-loop method that built it became the method that *runs* it: the Figma round-trip, the governance, the craft, the door left open for the next person. Not "how I built a design system with AI" anymore. How I run one.

This page is one of the proofs. It — along with my slide library and my portfolio — is built *with* Vael; the system documents itself by being the thing you're reading. And it isn't a demo: it's load-bearing, the design system under my studio's site and my courses, extended in production through the same logged-extension rule it asks of anyone else. A method has to survive contact with real work to be worth teaching, and this one does.

This was never a story about AI replacing design work. It's the opposite. Every decision that mattered was *more* mine, and more visible, than on any project I'd done the slow way. AI didn't take the design work off my plate. It took everything that *wasn't* design work off my plate — and left me with the part only I could do.

---

*Vael was built for a bioscience startup and is presented here anonymized. The architecture, tokens, and tooling are real; client-identifying details have been removed. Claude generated tokens, components, and tooling under standards I set and edited — first for the production system, then again as I rebuilt it into Vael. The design decisions were mine.*
