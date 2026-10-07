# How I work between Figma and code

When I was maintaining the first version of the system, I had to check the Figma component, check the code, and make sure the two still agreed. A spacing change or a new variant could leave the other side out of date. That was manageable with 27 components. As the public Vael library expanded, I needed a more repeatable way to review those changes.

I built out the [Figma library](https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System) with component documentation alongside the designs. The goal was for someone to open Figma and [Storybook](https://catherinebhicks.github.io/vael-design-system/) and find the same intended behavior, states, and usage guidance.

## What does a change look like?

I use Figma's MCP connection to read a component or variable in context, then work with an AI coding agent on the corresponding React component, token, or Storybook story. I still review the mapping and the resulting changes. Figma and the codebase have different responsibilities, and keeping them aligned takes actual checking.

The workflow I documented is straightforward:

1. Read the design and the variables it uses.
2. Identify the matching implementation in `src/components/` and the relevant tokens in `vael/`.
3. Make the proposed change and update its Storybook story or documentation.
4. Run the available checks, inspect the rendered component, and review the diff before committing.

TypeScript checks, Storybook, Chromatic, and accessibility review each catch different problems. I use them as review tools, and I don't assume that passing one proves the design and implementation match everywhere. A complete component-by-component parity audit is separate work.

I wrote [Designing with an LLM](../../docs/onboarding/designing-with-an-llm.md) to explain the approach to someone else. It covers using the existing system as context, designing with its components and tokens, and moving changes between Figma and code.

I like being able to work this way because I can spend more time on the actual component decision. I still need to check whether the implementation is right.
