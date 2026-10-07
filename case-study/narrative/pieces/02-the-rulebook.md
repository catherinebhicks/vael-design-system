# What rules does a solo design system need?

I was building Vael on my own, but I still wanted the decisions to be understandable to another designer or engineer. Otherwise every new component would depend on me remembering what I'd done last time.

I wrote down the standards I wanted to use and put them close to the work.

## Accessibility

Vael's documentation targets WCAG 2.1 AA and covers contrast, keyboard behavior, visible focus, labels, states, and motion. I reviewed components manually and used Storybook accessibility tooling to help identify issues. Automated checks are useful, especially for things that are easy to overlook, but they don't cover every interaction or prove that an entire library conforms.

The accessibility guidance is in `stories/Docs/Accessibility.mdx`. It describes the target and review approach. I would still want an independently verified audit before making a blanket conformance claim.

## Tokens and extensions

The tokens use the [W3C design-tokens format](https://tr.designtokens.org/format/). The working rule is to use the system's semantic tokens instead of adding raw color values whenever a product needs something different.

I also documented an extend-don't-fork approach in [Consuming Vael](../../docs/consuming-vael.md). If a downstream product needs a new pattern, I want that gap recorded and evaluated in the system first. That makes the change visible to the next person who needs it.

One example was a proposed violet accent and alternate display typeface for the A Focused Design site. I reconsidered that override because it would have introduced another visual language outside the system. The proposal was reversed rather than carried forward as a product-specific exception.

## Component guidance

I added usage guidance alongside components, including Do/Don't examples and maturity categories such as Stable, Beta, Experimental, and Deprecated. Those categories are described in `stories/Docs/ComponentStatus.mdx`. They help distinguish a component appearing in the catalog from a component being ready for every use case.

I also keep decision records for choices such as MUI, token structure, and accessibility targets. If someone disagrees with a decision later, I want them to be able to see why I made it.

## What still needs work?

Some enforcement remains manual. CI accessibility checks and CSS rules to flag raw hex values were identified as follow-up work in the original gap analysis. I don't want to describe those as completed automation without verifying the current implementation.

I use AI to help compare documentation, draft implementation tasks, and find inconsistencies. I decide which rules belong in the system and review whether the changes actually follow them. That is the part I expect to keep doing, even as the tooling improves.
