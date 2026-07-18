# I built a design system with AI — then refused to let it die

Most design systems die in the gap between "we should have one" and "someone has to actually build it."

I joined a bioscience startup with a product that had grown fast and inconsistent — three slightly different blues, buttons that disagreed about their own padding, tables built four ways. It needed a real design system: tokens, a themed component library, living docs, a governance process. The kind of thing a platform team builds over a couple of quarters.

What it had was me. One designer, no five-person pod, one six-week cycle. So I built it with Claude as a **design-engineering pair** — and called it **Vael.**

**The reframe.** The hard part of a design system isn't writing code, it's *coherence* — keeping tokens, components, and dozens of doc pages all agreeing with each other. That's a working-memory problem, and it's exactly what an AI partner is good at holding. I brought the taste, the standards, and the "why." Claude brought the throughput. But the surprise wasn't how much it could make — it was *where the leverage lived.*

**Not in making a button.** It compounded as I aimed it higher: first the tokens held the system together, then the theme *generated itself* from them (Figma → Supernova → the theme the product used, no hex code ever retyped), then the docs wrote themselves from a build script Claude and I built. The leverage was never AI writing a component. It was AI building the machine that documents every component — and freeing me to spend my time on the only thing that needed me.

**Which was judgment.** "Built with AI" is easy to misread as "AI decided." It didn't. I owned the taste, the accessibility (I audited every component by hand, then let the Storybook a11y addon catch what I'd missed), the governance, and the *why.* Claude was the fastest junior I've worked with — and like any junior, only as good as the specs I set. The bottleneck was never its speed. It was my judgment, which is where a designer's time should go.

**Then it was shelved.** I took it all the way to a handoff — the system built, the rollout scoped into 17 Shape Up pitches and 145 tickets, ready for an engineering cycle. Then priorities shifted, and it was shelved before that cycle ran. This is where most of these stories quietly end. I couldn't accept that.

**So I rebuilt it in the open.** I carried it forward on my own, took it from 27 components to 44, re-authored it clean, and traded the internal generator for a live Storybook — so it's not a screenshot in a case study, it's a library anyone can open right now. The rescue is the proof.

**Then the method became how I run everything.** The library kept growing — 103 components now — but the real shift was that the same human-in-the-loop pairing turned out to run the whole practice: the Figma round-trip, the governance rulebook, the craft, the door left open for whoever picks it up next. It stopped being *how I built a design system with AI* and became *how I run one* — load-bearing under my studio's site and my courses, not a demo.

This isn't a story about AI replacing design work. It's the opposite. AI took everything that *wasn't* design off my plate — and left me with the part only I could do. And the most senior thing I did wasn't the pipeline. It was refusing to let good work die in a backlog.

---

*Vael was built for a bioscience startup and is presented here anonymized.*
