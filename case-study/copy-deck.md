# Vael landing page — copy deck (locked voice)

**Voice:** first-person, wry, confident, no corporate gloss. (Approved.)
**Structure:** two phases — *built for a startup* (production) → *carried forward on my own* (Vael).
**Key facts:** 27 → 44 components · 80+ doc pages · 17 Shape Up pitches · 145 tickets · a **six-week Shape Up cycle**, then expanded over additional time · one designer.
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

The product had grown the way real products do — fast, and a little inconsistent. Three blues that didn't quite agree. Buttons with opinions about their own padding. Tables built four ways. The fix was obvious: tokens, a component library, real documentation, a way to keep it all honest. The catch was just as obvious — that's a team's worth of work, and there was no team. There was me, and a six-week cycle.

## 3 — HOW I WORKED WITH CLAUDE  ·  "AI was my pair, not my autopilot"
So I stopped treating AI like a fancier autocomplete and started treating it like a *pair*. I brought the taste, the standards, the judgment calls. Claude brought the throughput — and a memory that never lost the thread. I'd set a standard once, and it would hold that standard across a hundred things. Here's what that actually looked like.

*[3-panel gallery: prompt → Claude generated → my edit, escalating altitude]*
- **Primitive — a token:** set the standard → generated W3C JSON + descriptions → I tightened the language and cut it to what mattered.
- **Component — a React component:** generated on the token theme, with accessibility baked in → I fixed naming, a11y, and how it fit the system.
- **Infrastructure — the docs generator:** generated `build.py` → I set the source-of-truth architecture.

Punchline: *AI didn't just write my components — it built the machine that documented them.*

## 4 — THE TOKENS *(dark)*  ·  "It starts with tokens"
A design system is only as trustworthy as its tokens, so that's where I started. The decision I cared about most wasn't *which* blue — it was the format. I wanted an open standard, not a proprietary blob, so the system could move between tools instead of getting married to one. Claude generated the structured source in the **W3C design-tokens format**; I made the architecture calls. Every token earned a description, because a token nobody understands is a token nobody uses.

*[swatch grid + code card]* — one traceable token source covering **color, type, spacing, elevation, and motion.** Eight spacing steps, not forty. Restraint on purpose.

## 5 — THE PIPELINE *(dark)*  ·  "One source of truth"  *(the production build)*
Here's the part I was proudest of in the production system: nobody ever retyped a hex code. A value changed in Figma, flowed through Supernova into the token source, and *regenerated* the theme the product actually used — the theme file was generated, not hand-kept. Design and engineering couldn't drift, because there was only one place the truth lived.

## 6 — THE PART I DIDN'T EXPECT *(light)*  ·  "AI didn't just build components. It built my tooling."
A design system without docs is just a folder. The production documentation ran to dozens of pages — and I didn't write them by hand. Claude and I built the *machine* that wrote them: a build script (`build.py`, ~485 lines) that turned source files into every page and kept them in lockstep with the code. The leverage was never AI writing a component. It was AI building the thing that documents every component, forever.

## 7 — WHAT AI COULDN'T DO
"Built with AI" is easy to misread as "AI made the decisions." It didn't. The decisions were the whole job.
- **Taste** — which three blues become one; what restraint means when you stop adding tokens.
- **Accessibility** — I audited each component by hand against WCAG, then ran the Storybook a11y addon as a second pass — which caught smaller things I'd missed, and I fixed them. AI can apply a rule. It can't decide the rule is right, or notice when it's quietly wrong.
- **Governance** — how a component gets proposed, reviewed, versioned, retired. A system without governance rots.
- **The "why"** — I wrote the decision record myself, because the reasons are what the next person actually needs.

Claude was the fastest junior I've ever worked with — and like any junior, only as good as the standards I set. The bottleneck was never its speed. It was my judgment. Which is exactly where a designer's time should go.

## 8 — CARRYING IT FORWARD *(light)*  ·  "Then I rebuilt it in the open"
I'd taken it all the way to a handoff — the system built, plus 17 Shape Up pitches and 145 tickets scoping the rollout for the engineering team. Then priorities shifted, and it was shelved before that cycle ever ran. So I carried it forward myself — and that's the version you can open right now.

I took it from **27 components to 44**: a Highcharts-powered charting layer, a dashboard and data-viz set, and the form and completeness pieces a real system needs. I rebuilt it clean for public sharing — re-authoring a fresh theme by hand, and deliberately trading the old static-site generator for **Storybook**, so every component is live, interactive, and documented in one place. Same token foundation, same standards, now something anyone can pick up and use.

*[live component demos + Storybook link/embed]* — **44 components · MUI v7 + MUI X · Highcharts · a live Storybook.**

## 9 — CLOSE + DISCLOSURE + FOOTER  ·  "Where it landed"
A production design system, built with AI in a six-week cycle. Then a second life: carried forward solo, expanded to 44 components, and rebuilt in the open. One designer, start to finish.

This isn't a story about AI replacing design work. It's the opposite. AI took everything that *wasn't* design off my plate — and left me with the part only I could do.

*[disclosure]* How AI was used here: Claude generated tokens, components, and tooling under standards I set and edited — first for the production system, then again as I rebuilt it into Vael. The design decisions — what's correct, what ships, what's accessible — were mine.

*[footer]* Designed & built by Catherine Hicks · [contact TBD] · © 2026
