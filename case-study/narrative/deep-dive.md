# Vael: building a design system with AI and rebuilding it in public

I joined a bioscience startup where the product had grown quickly and the UI showed it. There were three slightly different blues, buttons with inconsistent padding, and tables implemented four different ways. I wanted a shared set of tokens, components, and usage rules so designers and engineers could make changes without having to solve the same problems again.

I was the only designer on the system and had one six-week Shape Up cycle. I wanted to see how much of the design-engineering work I could get through with Claude helping me build it.

## How I started

I started with the tokens. I chose the [W3C design-tokens format](https://tr.designtokens.org/format/) because I wanted the source to be portable between tools. I also kept the spacing scale to eight steps. Claude helped produce the structured files, while I decided what the values meant, how they were organized, and how they should be documented.

In that original production project, changes in Figma went through Supernova and into the MUI theme. I wanted a token change to have a defined route into implementation rather than relying on someone copying values from a design file.

Documentation was another big piece of the work. Claude and I developed a roughly 485-line `build.py` script that generated documentation pages from source files. It handled page generation and navigation, which made the documentation easier to maintain during the build.

I also scoped the rollout into **17 [Shape Up](https://basecamp.com/shapeup) pitches and 145 tickets**. I made the scoping decisions and documented the reasoning. Claude helped draft the pitches and identify overlaps.

## What did I still need to do myself?

I made the design decisions. I chose which components belonged in the library, reviewed the interaction states, and decided when a proposed variant was unnecessary.

I also reviewed accessibility. I checked components manually and used Storybook accessibility tooling to identify additional issues. Those checks were useful, but I still needed to inspect the behavior and decide what to change.

Governance mattered for the same reason. I wanted rules for how components were proposed, documented, updated, and deprecated so the system could be maintained by someone besides me.

Claude was useful for the repetitive production work and for keeping related files in view. It still needed clear specifications and review. When I was vague about a requirement, the result usually needed more work.

## Why did I rebuild it?

The production system reached a handoff, but priorities changed and the planned engineering rollout was shelved.

I liked the work and wanted to continue exploring it. I started **Vael** as a separate, self-directed public project, using the lessons from the original build without publishing the employer's proprietary materials.

I rebuilt the theme for MUI v7 and MUI X and moved the component documentation into Storybook. The first public expansion took the library from **27 to 44 components**, including charting, dashboard, and form patterns. Later case-study work recorded **103 components** across the broader system.

The move to Storybook was intentional. I wanted people to be able to open the components, inspect their states, and read the usage guidance. I also wanted the system to be useful as an actual design and engineering resource.

## What changed as Vael grew?

I brought the public system into [Figma](https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System) and documented the components there as well as in [Storybook](https://catherinebhicks.github.io/vael-design-system/). I use Figma's MCP connection and AI coding tools to help carry proposed changes between the design and implementation. I still review the component mapping, code diff, and rendered behavior. A complete parity audit remains separate work.

I also spent more time on the rules around the components. Vael documents semantic tokens, accessibility targets, component maturity, usage guidance, and an extend-don't-fork approach for downstream products. Some checks remain manual, and I have tried to make those gaps visible.

The visual language became more deliberate as the library grew. I used IBM Plex, shared spacing and layout conventions, and a consistent Blueprint treatment across components. Adding another variant is easy with AI. Deciding whether the system actually needs it takes more thought.

Finally, I wrote onboarding material for people who want to inspect or work with the system. The goal was to make the decisions understandable without needing me to explain every one of them in person.

The four supporting essays go into more detail:

- [How I work between Figma and code](pieces/01-design-and-code.md)
- [What rules a solo design system needs](pieces/02-the-rulebook.md)
- [Keeping a growing library consistent](pieces/03-taste-compounded.md)
- [Making Vael usable by someone else](pieces/04-built-to-be-picked-up.md)

## What I learned

The biggest change in my workflow was how much production work I could move through while still reviewing the decisions myself. Claude helped generate components, tooling, and documentation. I had to be specific about the standards, check the implementation, and decide when something needed to be revised.

I also learned to put more effort into the infrastructure around the components. A token structure, documentation generator, clear governance rules, and repeatable review steps save time every time the system changes.

There are still things I want to improve. Figma/code parity needs continued auditing, and some accessibility and token checks could be more automated. I can point to the existing documentation and the live library, and I can also say where the work is unfinished.

I enjoyed building Vael because it gave me room to work through those decisions in detail and make the results public.

## Explore the work

- [Figma library](https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System)
- [Live Storybook](https://catherinebhicks.github.io/vael-design-system/)
- [Vael repository](https://github.com/catherinebhicks/vael-design-system)
- [Full portfolio](https://hireyourselfadesigner.com/)

*The original production work is described anonymously. Vael is a separate, self-directed public project informed by that experience.*
