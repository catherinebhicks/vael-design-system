# Vael: building a design system with AI, then rebuilding it in public

*The original production project, what I learned working with Claude, and why I decided to build a public version on my own.*

---

I joined a bioscience startup with a product that had grown the way real products grow: fast, with inconsistent results. Three slightly different blues. Buttons that disagreed about their own padding. Tables built four ways. It needed a real design system  -  tokens, a themed component library, living docs, a governance process. The kind of thing a platform team builds over a couple of quarters.

What it had was me. One designer, no five-person pod coming to help, and one six-week Shape Up cycle. The honest math said a system this size wasn't going to happen  -  which turned the project into a question I couldn't stop poking at: *how much of a team's work can one designer actually own, if the cost of production falls away?*

## A pair, not an autopilot

The hard part of a design system isn't writing the code  -  it's *coherence.* Tokens that agree with each other, components that share one API philosophy, docs that don't contradict themselves sixty pages in. That's a working-memory problem, and it's exactly what a capable AI partner is good at holding  -  as long as someone supplies the thread.

So I stopped treating Claude as a fancier autocomplete and started treating it as a **design-engineering pair.** I brought the taste, the standards, and the "why." It brought the throughput and a memory that never lost the thread: set a standard once, and it held that standard across a hundred decisions. But the surprise wasn't how much it could make. It was *where the leverage actually lived.*

## Where the leverage lived

Not in generating a button  -  anyone can do that. It compounded as I aimed it higher, at the infrastructure that keeps a system honest, in three rungs.

**First, the tokens.** A system is only as trustworthy as its tokens. The decision I cared about most wasn't *which* blue  -  it was the format: the open [W3C standard](https://tr.designtokens.org/format/), not a proprietary blob, so the system could move between tools instead of getting married to one. Claude generated the structured source; I made the architecture calls, and every token earned a description. The restraint was mine  -  eight spacing steps, not forty. The bookkeeping was ours.

**Then the theme generated itself.** In the production build, those tokens didn't get hand-copied into a theme  -  they *compiled* into one: a value changed in Figma, flowed through Supernova into the token source, and regenerated the MUI theme the product used. Nobody ever retyped a hex code; design and engineering couldn't drift, because there was only one place the truth lived. Designing that pipeline was the most senior work in the project  -  and a partner that could reason about the whole chain, then write the connective tissue, is what made it feasible for one person.

**Then the docs wrote themselves.** A design system without docs is just a folder, and the docs ran to dozens of pages. Instead of writing them, Claude and I built the *machine* that generated them  -  a build script (`build.py`, ~485 lines) that turned source files into every page and kept them in lockstep with the code. One designer maintaining that many pages by hand fails. One maintaining a *generator,* with an AI pair holding the whole build graph in context, ships. That's when "AI as build method" clicked: each rung pulled me further out of production. The same leverage ran upstream, too  -  I turned the whole scope into **17 Shape Up pitches and 145 tickets,** ready for an engineering cycle, in an afternoon instead of days.

## The part only I could do

"AI built my design system" is easy to misread as "AI made the decisions." It didn't. Everything above was throughput; the decisions were the job, and they got *more* visible the less time I spent typing. I owned the taste (which three blues become one). I owned accessibility  -  I audited every component by hand against WCAG, then ran the Storybook a11y addon as a second pass, which caught smaller things I'd missed and I fixed them. I owned governance (how a component gets proposed, versioned, deprecated) and the *why* (I wrote the decision record myself, into the pitches). Claude was the most capable junior I've worked with  -  and like any junior, only as good as my specs. The bottleneck was never its speed. It was my judgment, which is exactly where a designer's time should go.

## And then it was shelved

I took it all the way to a handoff: the system built, the rollout scoped, 145 tickets, everything an engineering team needed. Then priorities shifted, and it was shelved before that cycle ever ran.

This is where most of these stories quietly end  -  good work, killed by timing, left to rot in a backlog. I couldn't accept that. So I did the un-tidy thing: I carried it forward on my own.

## Rebuilt in the open

Off the clock, with no one to hand it to, I rebuilt it clean  -  this time to be *shown.* I took it from **27 components to 44:** a Highcharts-powered charting layer, a dashboard and data-viz set, and the form pieces a real system needs. I re-authored a fresh theme and deliberately traded the internal static-site generator for **Storybook,** so every component is live, interactive, and documented in one place instead of behind a private build. Same token foundation, same standards, now on MUI v7 and MUI X  -  and now something anyone can open.

That matters more than any claim I could make in prose: the system isn't a screenshot. It's a live library with a running Storybook you can click through. You can open the Storybook and see the components and documentation for yourself.

## The method became how I run it

Then the rescue proved something bigger than the system. The same human-in-the-loop pairing that built the components turned out to run the whole practice around them, on four fronts. **Design and code stopped being two jobs**  -  I brought Vael into Figma (105 pages) and wired a round-trip over the Figma MCP, so the two representations can't drift. **Governance became a real rulebook**  -  WCAG conformance, token discipline, an extend-don't-fork contribution model, decision records; designing the rules is senior work, and the pair is what enforces them across 103 components without drift. **The taste compounded**  -  the library grew from 44 to 103, but the move was discipline, not size: one Blueprint language, a single typeface, cheap iteration spent on judgment instead of typing. And I **built it to be picked up**  -  bundled fonts, an archived Figma file, onboarding guides, the way I design *in* an LLM written down as a teachable handbook. It stopped being *"how I built a design system with AI"* and became *"how I run one."*

## Where it landed

The work that informed Vael started as a production design system for a bioscience startup  -  built with AI in a single six-week cycle, taken all the way to a scoped, ready-to-build handoff. When it was shelved, it got a second life: carried forward solo, expanded from 44 components to 103, rebuilt in the open as a live, documented library  -  and then into an operating model, the method that runs the design tooling, the craft, the governance, and the handoff. This page, my slide library, and my portfolio are built *with* Vael; it's load-bearing under my studio's site and my courses, not a demo. One designer, start to finish.

The lessons I'd hand any designer thinking about working this way: **judgment is the scarce resource now, not production.** **Aim leverage at infrastructure, not artifacts**  -  the generator and the pipeline are the compounding win. **Specs are leverage**  -  writing the standard *is* the skill. **Designing the rules is senior work**  -  a governance model is a design artifact, not overhead. **Verification is how you keep an AI pair honest.** And **good work shouldn't need permission to survive**  -  the most senior thing I did wasn't the pipeline; it was refusing to let a shelved system die when I still believed in it.

Claude helped me get through production work faster. I still had to make the design decisions, review the accessibility, and check that the system stayed consistent as it grew.

---

*The original production project is described anonymously. Vael is the separate, self-directed public rebuild. Claude generated tokens, components, and tooling under standards I set and edited  -  first for the production system, then again as I rebuilt it into Vael. The design decisions were mine.*
