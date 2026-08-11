# Responsive audit & reflow map (2026-08-11)

Closes the intent of **#103 (B1 · Extract the reflow map from code)** and records the
code-side state before the Figma responsive pass (#104).

## Method
- **Convention in code:** responsive **`sx` "t-shirt" objects** (`{ xs, sm, md }`) — *not*
  `useMediaQuery` (0 uses) or `theme.breakpoints` in components. Storybook viewport switcher
  maps 1:1 to MUI breakpoints: **xs·375 · sm·700 · md·1024 · lg·1280 · xl·1600**.
- **Empirical overflow audit:** every Storybook story (227) rendered at **375px**; flag any
  where the *page* scrolls horizontally (`documentElement.scrollWidth > innerWidth`). A
  component with a proper internal scroll container does not trip this. Harness:
  `scratchpad/vp_audit.cjs`.

## Components with deliberate responsive behavior (the reflow map)
`CtaBar`, `Footer`, `HeroBanner`, `PullQuote` (marketing, since inception) +
`Descriptions` (column collapse), `LogoWall` (column drop), `NotificationCenter`,
`SidePanel` (100vw→fixed), `SpotlightTour` (clamped width) — merged from
`feat/responsiveness` 2026-08-11. Everything else is either intrinsically fixed (atoms:
Badge/Chip/Switch/Avatar/…) or fluid via MUI defaults.

## Overflow audit results
Initial run: **11 / 227** stories overflowed at 375px. After fixes: **10**, all by-design
or cosmetic.

**Fixed this pass:**
- **Table** — component was a bare MUI `Table` with no scroll container. Now wraps in a
  scrolling `TableContainer` by default (`scrollable` prop, default `true`; `false` to opt
  out when you supply your own container). Bare `<Table>` is now responsive-safe.
- **Sitemap** — had `overflowX:auto` but `display:inline-block` let it grow past the
  viewport; added `maxWidth:100%` so it scrolls within the viewport instead.

**Left as-is (by design / cosmetic — not bugs):**
- `PrintPage` (816px = Letter print width), `SectionHeading` + `BrowserFrame` (deck /
  presentation components, fixed by design), `Layout` + `DataGrid` (the *stories* use a
  fixed `width:500` demo box; the components themselves are fluid / internally scrolling),
  `DensityProvider` (18px), `Slider`/`List`/`LinearProgress`/`Tabs` (~5px from 380px demo
  wrappers).

## Correction to #99
Epic #99's premise — *"the code is responsive (286 `useMediaQuery`/breakpoint uses)"* — is
**inaccurate**: 0 `useMediaQuery` uses; ~20–24 responsive-`sx` lines across ~9 components.
The code is now genuinely responsive-clean at 375px, but the number in #99 should be
corrected and the epic reframed as "represent the (narrow) reflow set in Figma."
