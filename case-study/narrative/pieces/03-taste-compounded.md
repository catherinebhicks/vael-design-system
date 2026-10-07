# How do you keep a growing component library consistent?

The component count changed quite a bit. The original production work had 27 components. The first public Vael rebuild expanded that to 44, and the later case-study inventory recorded 103.

Adding components with Claude was relatively fast. Deciding whether another component or variant belonged in the system took more thought. I could ask for another heading style or another grid and get one, but that didn't mean the system needed it.

I wanted the library to have a consistent visual language, especially across the dense enterprise interfaces I was building. I called that language **Blueprint**.

## The decisions I kept coming back to

**Typography.** I used IBM Plex Sans for most interface text and Plex Mono where data or instrumentation needed a different treatment. I wanted a recognizable family across the system rather than a different font for every surface.

**Grid and spacing.** Components use shared layout and spacing conventions. I kept the spacing scale constrained because it is much easier to maintain a few intentional choices than to explain forty slightly different ones.

**Tokens.** I used semantic roles so a component could refer to what a value means in context. That also made light and dark themes easier to reason about.

**Real screens.** When a component didn't work well in an actual page, I went back to the component. I didn't want to force a working interface to accommodate an assumption I'd made in the library.

I had to catch myself here. It is tempting to protect the system you've already spent time building, especially when the alternative is revising several components and their documentation. But the real page is useful evidence. If it exposes a gap, I want to understand that gap and decide whether the shared component should change.

I used AI for iterations, comparisons, and implementation work. I kept the decisions about visual consistency, exceptions, and component scope with me. The result is a system I can continue to refine, and I can explain why I made the choices I did.
