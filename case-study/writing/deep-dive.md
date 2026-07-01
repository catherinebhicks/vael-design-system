# Vael: How I Built a Production Design System With AI as My Pair

*A walkthrough of designing, building, and documenting a 27-component design system for a bioscience startup — with Claude in the loop the whole way. What AI was genuinely good at, where my judgment was the bottleneck, and what I'd tell any designer thinking about working this way.*

---

## The gap

Most design systems die in the gap between "we should have one" and "someone has to actually build it."

I joined a bioscience startup with a product that had grown the way real products grow: fast, in a hurry, with good intentions and inconsistent results. There were three slightly different blues. Buttons that disagreed about their own padding. Tables built four ways. None of it was anyone's fault — it's just what happens when a team ships faster than it documents.

What it needed was obvious: a real design system. Tokens, a themed component library, living documentation, a governance process so it wouldn't rot six months later. The kind of thing a platform team of designers and engineers builds over a couple of quarters.

What it had was me.

Not "me and a design-systems pod." Me — one designer, with a backlog, and no illusion that a five-person team was about to materialize. The honest math said a system this size wasn't going to happen. That's the gap. And that gap is exactly where this turned into an AI story.

I called it **Vael** — precise, principled, built to scale. (Internally it had a different name; I've renamed it here and kept the client anonymous.) This is the walkthrough of how it actually got built.

## Why this was an AI problem, not a tooling problem

When people say "AI helped me build X," they usually mean autocomplete. That's not what this was.

The interesting question a design system asks isn't *can you write the code* — it's *can one person hold the whole thing in their head long enough to make it coherent.* Coherence is the entire value of a design system. Eleven color tokens that agree with each other. Twenty-seven components that share one API philosophy. Seventy-five documentation pages that don't contradict each other on page 60.

That's a working-memory problem, and it's precisely the problem a capable AI partner is good at absorbing. Not "write me a button" — but "here is the token architecture, here is the naming convention, here is the accessibility standard, now hold all of it while we generate the next twenty things and keep them consistent."

So I stopped thinking of Claude as a code generator and started treating it as a **design-engineering pair**: a fast, tireless collaborator who never lost the thread, as long as I supplied the thread. I brought the taste, the judgment, the standards, and the "why." It brought the throughput and the consistency. That division of labor is the whole story.

Here's how it played out across four build moments.

---

## Build moment 1 — Tokens: getting the foundation standards-correct

A design system is only as trustworthy as its tokens, so that's where we started. The decision I cared about most wasn't *which* blue — it was the **format**. I wanted tokens in the W3C [Design Tokens Community Group](https://tr.designtokens.org/format/) standard, not a proprietary blob, so the system would be portable across tools instead of married to one.

Claude generated the structured token source. I made the architecture calls. The result looked like this:

```json
{
  "$schema": "https://tr.designtokens.org/format/",
  "color": {
    "text": {
      "primary": {
        "$value": "#000000de",
        "$type": "color",
        "$description": "Primary text color. High-emphasis content."
      },
      "secondary": {
        "$value": "#00000099",
        "$type": "color",
        "$description": "Secondary text color. Medium-emphasis content."
      }
    }
  }
}
```

Two things in there matter more than they look.

First, every token carries a `$description`. That's not decoration — it's the difference between a token system a team adopts and one they quietly route around because they can't tell `text/secondary` from `text/disabled`. Writing 60-odd clear, consistent descriptions is exactly the kind of high-volume, judgment-light-but-not-judgment-free work where an AI pair earns its keep. I set the voice on the first three; Claude held it for the rest; I edited the ones that drifted.

Second, the source was split deliberately — a `base.json` of primitives plus per-theme files (`light.json`, `dark.json`) — so it could feed [Supernova](https://www.supernova.io/) in split-mode and stay in sync with design. The final foundations came out to 11 color tokens, 13 typography, 8 spacing, 24 elevation, plus motion and a full icon set. Small numbers, ruthlessly chosen. The restraint was mine. The bookkeeping was ours.

## Build moment 2 — The theme layer and the pipeline that keeps it honest

Vael isn't a from-scratch component library — and it shouldn't be. The smart move for a startup is to stand on [MUI](https://mui.com/) (plus MUI X, AG Grid, and React Flow for the heavy data components) and own the *theme*, not reinvent the primitives. The design system's job is to make all of that speak with one voice.

So the tokens compile down into a generated MUI theme. The header of that generated file tells the most important part of the whole story:

```ts
/**
 * GENERATED FILE — DO NOT EDIT MANUALLY
 * Source: Figma variables → Supernova → tokens/design-tokens.json
 * To update: change values in Figma, merge the design-system branch,
 *            Supernova auto-opens a PR that regenerates this file.
 * Version: Vael v.75.0
 */

export const theme = createTheme({
  palette: {
    text: {
      primary: '#000000de',   // token: text/primary
      secondary: '#00000099', // token: text/secondary
    },
    primary: {
      main: '#1976d2',         // token: primary/main
      dark: '#1565c0',         // token: primary/dark
    },
  },
});
```

The flow is: **Figma variables → Supernova → token JSON → generated theme → product.** Change a value in Figma, and a PR regenerates the theme automatically. No human retypes a hex code. No drift between what the designer sees and what the engineer ships.

Designing *that pipeline* — deciding where the source of truth lives, how it propagates, what's generated versus hand-authored — was the most senior design-systems work in the project. It's also where having a partner who could reason about the whole chain at once, and then write the connective tissue, changed what was feasible for one person. I'd describe the topology; Claude would draft the wiring; I'd pressure-test the edge cases ("what happens when a token is removed, not just changed?").

## Build moment 3 — The docs site, where AI built my infrastructure

Here's the part I didn't expect to matter most.

A design system without documentation is just a folder. The docs are the product. Vael's documentation is a 75-page static site — foundations, all 27 components, 13 patterns, a decision log, and a full guides section (contributing, voice & tone, a component decision guide, testing, performance, i18n, a design-QA checklist, Supernova token sync, versioning & migration).

Seventy-five pages that have to stay consistent with each other and with the code is a maintenance nightmare. So instead of hand-maintaining pages, Claude and I built the **tooling that generates them**. A Python build script takes source files and produces every section page, rewriting the navigation for each depth level, and — critically — never deleting the source:

```python
# build.py
# Source files live in demo/_src/ (never deleted).
# Generated pages are written to demo/ subdirectories.

LINK_MAP = {
    "#overview":      ("getting-started/overview.html", "overview.html"),
    "#governance":    ("getting-started/governance.html", "governance.html"),
    "#accessibility": ("getting-started/accessibility.html", "accessibility.html"),
    # ...
}
```

A companion script injects component documentation into the site so the reference stays in lockstep with the components themselves.

This is the moment the "AI as build method" idea clicked for me. The leverage wasn't Claude writing a component — it was Claude writing the **machine that writes the docs**. One designer maintaining 75 pages by hand is a losing battle. One designer maintaining a *generator*, with an AI pair who can hold the whole build graph in context, is a system that maintains itself. That's the difference between a design system that ships and one that's perpetually 80% done.

## Build moment 4 — Planning: turning intent into a roadmap engineering can run

The last surprise was how much of the value was upstream of any code.

A design system has to be handed off. The original plan lived in three sprawling spec documents — the kind of thing that's complete but unschedulable. To make it real, I restructured the whole scope into **17 [Shape Up](https://basecamp.com/shapeup) pitches** — UI cleanup, token architecture, Storybook setup, third-party theming, the Supernova import pipeline, dark mode, new components, new patterns, documentation gaps — and broke those into **145 tickets** ready to drop into a cycle.

Claude was a genuine thinking partner here, not a stenographer. I'd argue the appetite and boundaries of a pitch out loud; it would draft the pitch in a consistent structure, flag where two pitches overlapped, and help me consolidate (five separate "new component" pitches became one). I made every scoping call. But going from "vision in my head" to "17 well-formed pitches and 145 tickets an engineer can pick up Monday" — that's days of structured writing, and the partnership turned it into an afternoon.

---

## Where I stayed firmly in control

I want to be precise about this, because "AI built my design system" is easy to misread as "AI made the decisions." It didn't. The decisions are the job, and they stayed mine:

- **Taste.** Which three blues become one. What "restraint" means when you're choosing 11 color tokens instead of 40. The visual judgment isn't delegable, and I didn't try.
- **Accessibility.** Contrast ratios, focus behavior, the a11y status of every component, the QA checklist — I owned the standard and verified against it. AI can apply a rule consistently; it can't decide what the rule should be or notice when it's quietly wrong.
- **Governance.** How a component gets proposed, reviewed, versioned, and deprecated. A design system without governance rots; that process is a design artifact in its own right, and it came from experience, not generation.
- **Naming and the "why."** Tokens and components live or die by their names and their rationale. I wrote the decision log because the *reasons* are what a future team needs most.

The honest model: Claude was the most capable junior collaborator I've ever worked with — fast, consistent, never bored, with perfect recall of the conventions I set. And like any junior, it was only as good as the specs and standards I gave it. The bottleneck was never its throughput. The bottleneck was my judgment — which is exactly where a designer's time *should* go.

## What I learned

A few things I'd tell any designer considering this way of working:

**1. Judgment is the scarce resource now, not production.** AI collapses the cost of producing the artifact. It does not collapse the cost of *deciding what's correct.* That inverts where your hours go — less time typing, far more time deciding — and it's a better use of a designer.

**2. Specs are leverage.** The quality of what comes back is a direct function of the clarity going in. A vague prompt gets you a mediocre component. A sharp standard ("W3C token format, primitive/semantic split, every token gets a description in this voice") gets you a system. Learning to write the standard *is* the skill.

**3. The underrated win is infrastructure, not artifacts.** Anyone can get AI to generate a button. The compounding value is getting it to build the **generator, the pipeline, the build script** — the machinery that keeps 75 pages and a token set honest over time. Aim the leverage at the system, not the single output.

**4. Stay in the loop, or it drifts.** Every place I let consistency slide, it slid. The partnership works because I reviewed continuously, not because I handed off and walked away. "AI as pair" is load-bearing on the word *pair.*

## Where it landed

Vael shipped at **v0.75**: 27 themed components on a token foundation, a 75-page self-generating documentation site, a Figma-to-code pipeline that keeps design and engineering in sync, and a 17-pitch roadmap ready for an engineering cycle. One designer, a few weeks, a system that would normally need a team and a couple of quarters.

I don't think that's a story about AI replacing design work. It's the opposite. Every decision that mattered — the taste, the standards, the accessibility, the governance, the *why* — was more mine, and more visible, than on any project I'd done the slow way. AI didn't take the design work off my plate. It took everything that *wasn't* design work off my plate, and left me with the part only I could do.

That's the version of "building with AI" I find worth writing about.

---

*Vael was built for a bioscience startup and is presented here anonymized. The architecture, tokens, and tooling shown are real; client-identifying details have been removed.*
