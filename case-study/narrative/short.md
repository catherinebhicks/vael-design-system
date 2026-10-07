# I built a design system with AI, and then rebuilt it on my own

I joined a bioscience startup where the product had grown quickly and the UI showed it. We had three slightly different blues, buttons with different padding, and tables implemented four different ways. I wanted to bring some consistency to the product, and that meant building tokens, a component library, documentation, and rules for how the system would be maintained.

I was the only designer working on it, and I had one six-week Shape Up cycle. I wanted to see how much of that work I could get done with Claude helping on the design-engineering side.

## How I approached it

I started with tokens because I wanted a foundation we could use across tools. I chose the W3C design-tokens format and kept the spacing scale to eight steps. Claude helped generate the structured files, while I decided how the tokens were organized and what each one was for.

In the original production project, we connected Figma to Supernova so token changes could feed the MUI theme. We also built a documentation generator instead of maintaining dozens of pages by hand. I used Claude to help write the generator and keep the output consistent.

I was still responsible for the design decisions, component behavior, accessibility review, and governance. I checked the components myself and used Storybook's accessibility tooling to catch issues I had missed.

I also broke the rollout into **17 Shape Up pitches and 145 tickets** so engineering had a plan for bringing the system into the product.

## What happened to the original project?

Priorities changed before the rollout cycle happened, and the work was shelved.

I liked what we'd built, and I wanted to keep working on the problems it raised. So I started a separate, self-directed project called **Vael**. I rebuilt the system for public use, moved the documentation to Storybook, and expanded the component library from **27 to 44 components** in that first pass.

The public project kept growing. The case-study work documents an expansion to **103 components**, along with a Figma library, governance guidance, and documentation for more complex product patterns.

## What I wanted people to be able to see

I wanted someone reviewing my work to be able to open the design library and the actual implementation, rather than rely on screenshots and a description of what I said I built.

That is why Vael has both a [Figma library](https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System) and a [live Storybook](https://catherinebhicks.github.io/vael-design-system/). I also wrote down the component rules, onboarding guidance, and design decisions so another designer or engineer could understand how the system is intended to work.

AI helped me get through more of the production work, but I still had to decide what belonged in the system, how it should behave, and whether the result met the standards I'd set. I learned a lot about where that collaboration was useful, and where I needed to slow down and check the work myself.

*The original production work is described without identifying the employer or exposing proprietary material. Vael is the separate, self-directed public rebuild.*
