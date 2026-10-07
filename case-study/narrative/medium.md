# Vael: a design system I rebuilt in public

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

I expanded the Figma library and Storybook documentation so people could review the design and implementation side by side. I also documented accessibility targets, semantic tokens, component status, and rules for extending the system. I use AI tooling to help make changes between Figma and code, and I still check the results myself.

The visual language uses IBM Plex, shared spacing conventions, and a Blueprint treatment across the library. I wrote onboarding guides because I wanted another designer or engineer to be able to understand the system without asking me to explain it.

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
