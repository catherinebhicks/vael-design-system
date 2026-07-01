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

## What I learned

- **Judgment is the scarce resource now, not production.** AI collapses the cost of making the artifact, not the cost of deciding what's correct. Less time typing, far more time deciding — a better use of a designer.
- **Aim leverage at infrastructure, not artifacts.** Anyone can get AI to make a component. The compounding win is the generator and the pipeline that keep everything honest over time.
- **Specs are leverage.** A vague prompt gets a mediocre component; a sharp standard gets a system. Writing the standard *is* the skill.
- **Stay in the loop, or it drifts.** Every place I let consistency slide, it slid. "AI as pair" is load-bearing on the word *pair.*
- **Good work shouldn't need permission to survive.** The most senior thing I did wasn't the pipeline. It was refusing to let a shelved system die when I still believed in it.

## Where it landed

Vael started as a production design system for a bioscience startup — built with AI in a single six-week cycle, taken all the way to a scoped, ready-to-build handoff. When it was shelved, it got a second life: carried forward solo, expanded to 44 components, and rebuilt in the open as a live, documented library. One designer, start to finish.

This was never a story about AI replacing design work. It's the opposite. Every decision that mattered was *more* mine, and more visible, than on any project I'd done the slow way. AI didn't take the design work off my plate. It took everything that *wasn't* design work off my plate — and left me with the part only I could do.

---

*Vael was built for a bioscience startup and is presented here anonymized. The architecture, tokens, and tooling are real; client-identifying details have been removed. Claude generated tokens, components, and tooling under standards I set and edited — first for the production system, then again as I rebuilt it into Vael. The design decisions were mine.*
