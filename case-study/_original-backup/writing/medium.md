# Vael: How I Built a Production Design System With AI as My Pair

*One designer, a bioscience startup, and Claude in the loop — a walkthrough of what AI was genuinely good at, and where my judgment was the bottleneck.*

---

Most design systems die in the gap between "we should have one" and "someone has to actually build it."

I joined a bioscience startup with a product that had grown the way real products grow: fast, with good intentions and inconsistent results. Three slightly different blues. Buttons that disagreed about their own padding. Tables built four ways. It needed a real design system — tokens, a themed component library, living docs, a governance process. The kind of thing a platform team builds over a couple of quarters.

What it had was me. One designer, a backlog, and no five-person pod coming to help. The honest math said a system this size wasn't going to happen. That gap is exactly where this turned into an AI story.

I called it **Vael** — precise, principled, built to scale. Here's how it actually got built.

## Why this was an AI problem

The hard part of a design system isn't writing the code — it's *coherence.* Eleven color tokens that agree with each other. Twenty-seven components that share one API philosophy. Seventy-five documentation pages that don't contradict each other on page 60. That's a working-memory problem, and it's exactly what a capable AI partner is good at absorbing.

So I stopped treating Claude as a code generator and started treating it as a **design-engineering pair**: a fast, tireless collaborator who never lost the thread, as long as I supplied the thread. I brought the taste, the standards, and the "why." It brought the throughput and the consistency. That division of labor is the whole story.

## The foundation: standards-correct tokens

A design system is only as trustworthy as its tokens. The decision I cared about most wasn't *which* blue — it was the **format.** I wanted the W3C [Design Tokens](https://tr.designtokens.org/format/) standard, not a proprietary blob, so the system would be portable instead of married to one tool.

```json
{
  "color": {
    "text": {
      "primary": {
        "$value": "#000000de",
        "$type": "color",
        "$description": "Primary text color. High-emphasis content."
      }
    }
  }
}
```

Every token carries a `$description` — the difference between a system a team adopts and one they quietly route around. Writing 60-odd clear, consistent descriptions is exactly where an AI pair earns its keep: I set the voice on the first three, Claude held it for the rest, I edited the ones that drifted. The foundation landed at 11 color tokens, 13 typography, 8 spacing, 24 elevation, plus motion and a full icon set — small numbers, ruthlessly chosen. The restraint was mine; the bookkeeping was ours.

Those tokens compile into a generated MUI theme through a real pipeline: **Figma variables → Supernova → token JSON → generated theme → product.** Change a value in Figma, and a PR regenerates the theme automatically. No human retypes a hex code; no drift between what the designer sees and what the engineer ships. Designing *that pipeline* was the most senior work in the project — and having a partner who could reason about the whole chain at once, then write the connective tissue, is what made it feasible for one person.

## The part that clicked: AI built my infrastructure

A design system without documentation is just a folder. Vael's docs are a 75-page static site — foundations, all 27 components, 13 patterns, a decision log, and a full guides section.

Seventy-five pages that have to stay consistent with each other *and* the code is a maintenance nightmare. So instead of hand-maintaining pages, Claude and I built the **tooling that generates them** — a build script that turns source files into every section page, rewrites navigation per depth level, and never deletes the source:

```python
# build.py — source files live in demo/_src/ (never deleted).
# Generated pages are written to demo/ subdirectories.
```

This is when "AI as build method" clicked. The leverage wasn't Claude writing a component — it was Claude writing the **machine that writes the docs.** One designer maintaining 75 pages by hand is a losing battle. One designer maintaining a *generator,* with an AI pair holding the whole build graph in context, is a system that maintains itself. That's the difference between a design system that ships and one that's perpetually 80% done.

And it extended upstream of code, too: I restructured the whole scope into **17 [Shape Up](https://basecamp.com/shapeup) pitches and 145 tickets** ready for an engineering cycle. I made every scoping call; Claude drafted each pitch in a consistent structure and flagged overlaps. "Vision in my head" to "a roadmap an engineer can pick up Monday" went from days to an afternoon.

## Where I stayed in control

"AI built my design system" is easy to misread as "AI made the decisions." It didn't. The decisions are the job, and they stayed mine:

- **Taste** — which three blues become one; what restraint means at 11 color tokens instead of 40.
- **Accessibility** — contrast, focus behavior, the a11y status of every component. AI can apply a rule consistently; it can't decide what the rule should be or notice when it's quietly wrong.
- **Governance** — how a component gets proposed, reviewed, versioned, deprecated. A system without governance rots.
- **The "why"** — I wrote the decision log, because the reasons are what a future team needs most.

The honest model: Claude was the most capable junior collaborator I've worked with — fast, consistent, never bored, with perfect recall of the conventions I set. And like any junior, it was only as good as my specs. The bottleneck was never its throughput; it was my judgment — which is exactly where a designer's time *should* go.

## What I learned

- **Judgment is the scarce resource now, not production.** AI collapses the cost of making the artifact, not the cost of deciding what's correct. Less time typing, far more time deciding — a better use of a designer.
- **Specs are leverage.** A vague prompt gets a mediocre component; a sharp standard gets a system. Writing the standard *is* the skill.
- **Aim leverage at infrastructure, not artifacts.** Anyone can get AI to make a button. The compounding win is the generator and the pipeline that keep everything honest over time.
- **Stay in the loop, or it drifts.** Every place I let consistency slide, it slid. "AI as pair" is load-bearing on the word *pair.*

## Where it landed

Vael shipped at **v0.75**: 27 themed components on a token foundation, a 75-page self-generating documentation site, a Figma-to-code pipeline that keeps design and engineering in sync, and a 17-pitch roadmap. One designer, a few weeks, a system that would normally need a team and a couple of quarters.

That's not a story about AI replacing design work — it's the opposite. Every decision that mattered was *more* mine, and more visible, than on any project I'd done the slow way. AI didn't take the design work off my plate. It took everything that *wasn't* design work off my plate, and left me with the part only I could do.

---

*Vael was built for a bioscience startup and is presented here anonymized. The architecture, tokens, and tooling are real; client-identifying details have been removed.*
