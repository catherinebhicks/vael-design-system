# Vael landing page — copy deck (locked voice)

**Voice:** first-person, wry, confident, no corporate gloss. (Approved.)
**Key facts:** 27 components · 75 doc pages · 17 Shape Up pitches · 145 tickets · a **six-week Shape Up cycle** · one designer.
**Anonymization:** "a bioscience startup," never the company; "Vael," never the internal name.
**Contact:** placeholder (TBD before deploy).

---

## 1 — HERO
**Vael**
*A design system, built with AI in the loop.*
27 components · 75 doc pages · one designer · a six-week cycle

It began as a design system for a bioscience startup. When priorities shifted and the project was shelved, I picked it back up on my own — not to ship it, but to find out how far AI could take the kind of work that usually needs a whole team.

## 2 — THE GAP  ·  "One designer, a system-sized problem"
Most design systems die in the space between "we should have one" and "someone has to actually build it."

The product had grown the way real products do — fast, and a little inconsistent. Three blues that didn't quite agree. Buttons with opinions about their own padding. The fix was obvious: tokens, a component library, real documentation, a way to keep it all honest. The catch was just as obvious — that's a team's worth of work, and there was no team. There was me.

## 3 — HOW I WORKED WITH CLAUDE  ·  "AI was my pair, not my autopilot"
So I stopped treating AI like a fancier autocomplete and started treating it like a *pair*. I brought the taste, the standards, the judgment calls. Claude brought the throughput — and a memory that never lost the thread. I'd set a standard once, and it would hold that standard across a hundred things. Here's what that actually looked like.

*[3-panel gallery: prompt → Claude generated → my edit, escalating altitude]*
- **Primitive — a token:** set the standard → generated W3C JSON + descriptions → I tightened the language and cut to 11.
- **Component — a React component:** generated with the token theme + a11y → I fixed naming, accessibility, governance.
- **Infrastructure — the docs generator:** generated `build.py` → I set the source-of-truth architecture.

Punchline: *AI didn't just write my components — it built the machine that documents them.*

## 4 — THE TOKENS *(dark)*  ·  "It starts with tokens"
A design system is only as trustworthy as its tokens, so that's where I started. The decision I cared about most wasn't *which* blue — it was the format. I wanted an open standard, not a proprietary blob, so the system could move between tools instead of getting married to one. Claude generated the structured source; I made the architecture calls. Every token earned a description, because a token nobody understands is a token nobody uses.

*[swatch grid + code card]* — **11 colors · 13 type styles · 8 spacing steps · 24 elevations.** Small numbers, chosen on purpose.

## 5 — THE PIPELINE *(dark)*  ·  "One source of truth"
Here's the part I'm proudest of: nobody ever retypes a hex code. A value changes in Figma, flows through Supernova into the token source, and regenerates the theme the product actually uses. Design and engineering can't drift, because there's only one place the truth lives.

## 6 — THE PART I DIDN'T EXPECT *(light)*  ·  "AI didn't just build components. It built my tooling."
A design system without docs is just a folder. Vael's documentation is 75 pages — and I didn't write 75 pages. Claude and I built the *machine* that writes them: a script that turns source files into every page and keeps them in lockstep with the code. The leverage was never AI writing a component. It was AI building the thing that documents every component, forever.

## 7 — WHAT AI COULDN'T DO
"Built with AI" is easy to misread as "AI made the decisions." It didn't. The decisions were the whole job.
- **Taste** — which three blues become one; what restraint means at 11 colors instead of 40.
- **Accessibility** — contrast, focus, every component's a11y status. AI can apply a rule. It can't decide the rule is right.
- **Governance** — how a component gets proposed, reviewed, versioned, retired. A system without governance rots.
- **The "why"** — I wrote the decision log myself, because the reasons are what the next person actually needs.

Claude was the fastest junior I've ever worked with — and like any junior, only as good as the standards I set. The bottleneck was never its speed. It was my judgment. Which is exactly where a designer's time should go.

## 8 — CLOSE + DISCLOSURE + FOOTER  ·  "Where it landed"
27 components. 75 pages of documentation that keep themselves current. A pipeline that holds design and engineering together. One designer, one six-week cycle.

This isn't a story about AI replacing design work. It's the opposite. AI took everything that *wasn't* design off my plate — and left me with the part only I could do.

*[disclosure]* How AI was used here: Claude generated tokens, components, and the docs tooling under standards I set and edited. The design decisions — what's correct, what ships, what's accessible — were mine.

*[footer]* Designed & built by Catherine Hicks · [contact TBD] · © 2026
