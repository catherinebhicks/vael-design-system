# Vael

**Vael** is a self-directed design-system project by Catherine Hicks: a production-minded component library, token architecture, Figma library, and living documentation system for complex, data-heavy products.

It grew out of lessons from an earlier production design-system build and was rebuilt in the open as a way to explore a harder question: **what does a design system look like when design, code, accessibility, documentation, and governance are treated as one system rather than separate deliverables?**

Built on [MUI](https://mui.com/) v7, Vael extends MUI and MUI X with enterprise patterns, data visualization, operational components, and a semantic token layer. The implementation uses React + TypeScript and is documented in Storybook.

> **Portfolio context:** Vael is a self-directed public project. It is separate from Catherine's proprietary design-system work for employers and clients; it exists so the system thinking, craft, documentation, accessibility, and design-engineering workflow can be inspected directly.

## Explore the system

- **[Full portfolio — hireyourselfadesigner.com](https://hireyourselfadesigner.com/)** — Catherine Hicks's broader product design work and case studies
- **[Figma — Vael Design System](https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System)** — foundations, variables, components, patterns, and design documentation
- **[Storybook](https://catherinebhicks.github.io/vael-design-system/)** — live component catalog, usage guidance, accessibility notes, and implementation documentation
- **[Case study](case-study/README.md)** — why Vael exists, how the system evolved, and the design decisions behind it
- **[Documentation home](docs/README.md)** — architecture, governance, onboarding, history, and downstream use

## What this demonstrates

Vael is intended to make the less-visible parts of design-systems work inspectable:

- **System architecture** — semantic tokens, foundations, light/dark modes, responsive behavior, motion, focus, state, and elevation
- **Design ↔ code parity** — a Figma library paired with React components and Storybook, with component-level links between design and implementation
- **Complex product patterns** — dense data display, data visualization, operational states, navigation, forms, overlays, canvas/data-grid patterns, and enterprise workflows
- **Accessibility as a system constraint** — component guidance, hand-auditing, Storybook a11y tooling, keyboard/focus behavior, and WCAG-oriented acceptance criteria
- **Governance** — component status, extend-don't-fork guidance, token usage rules, documentation conventions, and a change history
- **Design-engineering fluency** — React, TypeScript, MUI/MUI X, Highcharts, AG Grid, React Flow, Storybook, Chromatic, and Figma
- **Documentation as product** — usage guidance, do/don't guidance, patterns, onboarding, error/content guidance, and implementation references live alongside the system

## What's in here

| Directory | Contents |
|-----------|----------|
| `src/components/` | React component wrappers and Vael-specific components |
| `stories/` | Storybook stories + MDX documentation for foundations, components, patterns, and guides |
| `vael/` | Design tokens, MUI theme, CSS variables, and light/dark theme files |
| `.storybook/` | Storybook configuration |
| `docs/` | Architecture, history, governance, onboarding, and downstream-use documentation |
| `case-study/` | Portfolio narrative and supporting design/build documentation |
| `about/` | Vael story site / long-form project presentation |
| `slide-library/` | Blueprint presentation-template system + downloadable slide deck |
| [`CHANGELOG.md`](CHANGELOG.md) | Dated development milestones and system evolution |

## System foundations

Tokens are defined in `vael/design-tokens.json` using the W3C Design Tokens format and applied through `vael/theme.ts`. Light and dark theme variants live in `vael/themes/`, with CSS custom properties exported in `vael/tokens.css`.

The component system spans foundations; inputs; data display; feedback; surfaces; navigation; layout; overlays; data grids and canvas interactions; data visualization; operational patterns; and presentation/marketing surfaces. Component documentation covers intended usage, states, accessibility, and implementation context.

## Running Storybook

```bash
npm install
npm run storybook       # dev server at http://localhost:6006
npm run build-storybook # static build → storybook-static/
```

For a guided setup, see **[Using Storybook](docs/onboarding/using-storybook.md)**. The live catalog is available in **[Storybook](https://catherinebhicks.github.io/vael-design-system/)**.

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run storybook` | Local Storybook dev server |
| `npm run build-storybook` | Static Storybook build |
| `npm run build` | Library build (`tsc` + Vite) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run a11y:audit` | Accessibility audit |
| `npm run lint:css` | CSS linting |
