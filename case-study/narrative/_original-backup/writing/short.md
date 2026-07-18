# I Built a 27-Component Design System With AI as My Pair

Most design systems die in the gap between "we should have one" and "someone has to actually build it."

I joined a bioscience startup with a product that had grown fast and inconsistent — three slightly different blues, buttons that disagreed about their own padding, tables built four ways. It needed a real design system: tokens, a themed component library, living docs, a governance process. The kind of thing a platform team builds over a couple of quarters.

What it had was me. One designer, no five-person pod coming to help. So I built it with Claude as a **design-engineering pair** — and called it **Vael.**

**The reframe that made it work.** The hard part of a design system isn't writing code, it's *coherence* — keeping 11 color tokens, 27 components, and 75 doc pages all agreeing with each other. That's a working-memory problem, and it's exactly what an AI partner is good at holding. I brought the taste, the standards, and the "why." Claude brought throughput and consistency. I supplied the thread; it never lost it.

**The moment it clicked.** A design system without docs is just a folder, and Vael's docs are a 75-page site. Maintaining that by hand is a losing battle. So instead of writing pages, Claude and I built the **machine that generates them** — a build script that turns source files into every page and keeps them in lockstep with the code. The leverage wasn't AI writing a component. It was AI writing the *generator.* One designer maintaining 75 pages fails; one designer maintaining a generator ships. Same energy carried upstream, too: I turned the whole scope into 17 Shape Up pitches and 145 tickets ready for an engineering cycle — days of structured writing compressed into an afternoon.

**Where I stayed in control.** "AI built my design system" is easy to misread as "AI made the decisions." It didn't. I owned the taste (which three blues become one), the accessibility (contrast, focus, every component's a11y status), the governance (how a component gets proposed, versioned, deprecated), and the *why* (I wrote the decision log myself). Claude was the most capable junior I've worked with — and like any junior, only as good as the specs I gave it. The bottleneck was never its speed. It was my judgment — which is exactly where a designer's time should go.

**Where it landed.** Vael shipped at v0.75: 27 themed components on a W3C-standard token foundation, a 75-page self-generating docs site, a Figma-to-code pipeline that keeps design and engineering in sync, and a roadmap ready to build. One designer, a few weeks, a system that would normally need a team and two quarters.

This isn't a story about AI replacing design work. It's the opposite. AI took everything that *wasn't* design work off my plate and left me with the part only I could do.

---

*Vael was built for a bioscience startup and is presented here anonymized.*
