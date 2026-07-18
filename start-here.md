# Start Here — Vael Design System

## What This Is
A real, buildable **MUI v7 component library + Storybook** in the Blueprint / IBM Plex Mono aesthetic, used as Catherine's portfolio + case-study design system (public-facing reference, **not** published to npm — `package.json` is `private: true`; consumed from source). Anonymized from an earlier product system; now general-purpose.

## Where Things Live
- **Repo:** `catherinebhicks/vael-design-system` (private). Local: `~/dev/vael-design-system`.
- **Components:** `src/components/<Name>/`. **Tokens/theme:** `vael/` (`theme.ts`, `blueprint.ts`, `components.ts`, `palette.ts`).
- **Storybook stories:** `stories/*.stories.tsx`; **Guidelines docs:** `stories/Components/*.mdx`.
- **Docs home:** `docs/` — start at `docs/README.md` (Fermie→Vael history · consuming-vael · downstream).
- **About / story site:** `about/` (from the archived `vael-case-study`; `cd about && npm run dev`).
- **Slide library:** `slide-library/` — templates + `deck/Vael-Slide-Library.pptx` (92 slides).
- **Case study:** `case-study/` — split into `narrative/` (the story: deep-dive / medium / short, now with a **third movement** + **four standalone deep-dive pieces** in `narrative/pieces/`) and `landing/` (the future site build: `SPEC.md` / `DESIGN.md` / `copy-deck.md`).
- **Onboarding guides:** `docs/onboarding/` — `using-storybook.md` (+ why a non-dev would), `import-into-figma.md` (web+desktop, fonts, publish), `designing-with-an-llm.md` (MCP: ingest / design-in / round-trip-to-code).
- **Figma archives:** `figma/` — dated editable `.fig` snapshots (LFS-tracked); first = `vael-design-system-2026-07-17.fig`. Naming + how-to-export in `figma/README.md`.
- **Fonts:** `fonts/` — bundled IBM Plex Sans/Mono (OFL) + FA7 **Free** (bundle-legal); FA **Pro** must NOT be redistributed. Licensing note in `fonts/README.md`.
- **Changelog:** `CHANGELOG.md` — dated development milestones (seed → today).
- **Live Storybook (GitHub Pages):** https://catherinebhicks.github.io/vael-design-system/
- **Chromatic:** appId `6a46b2b4b5af28117f0804b1` (build history at chromatic.com).
- **Figma library:** file `4dNRm8xuERpDNfdXYjlbIn` (Vael Design System). See below.

## Current Status (2026-07-17)
- Storybook builds clean; **103 components / 226 Chromatic stories**; Pages live (200).
- **Figma ↔ code parity is complete:** every documented component has a Storybook Guidelines doc AND a one-per-page Figma home (`Category / Component`) with a co-located doc panel (props, do/don't, a11y, Storybook link) + Dev-Mode description.
- **Shipped code:** **Footer** + **CaseStudyCard / PostCard / ServiceCard** (`src/components/WorkCards/`) — **4 new components**, each with story + Guidelines MDX.
- **Repo consolidated (2026-07-17):** folded in `about/` (from archived `vael-case-study`), `slide-library/` (+ 92-slide deck), and a `docs/` home; folder renamed `vael-ref`→`vael-design-system`. Figma file got a **Cover** (title-slide layout).
- **Figma restructured** to one-page-per-component; built Figma pages for the 14 components that had docs but no Figma presence (AdvancedSelect, FileUpload, InputNumber, PasswordField, TrendBadge, Legend, ChartCard, BarChart, AreaChart, DonutChart, BrowserFrame, PullQuote, SlideSection, Mark); Filter Pill folded into Chip.
- **Cross-surface audit (2026-07-17):** GitHub / Pages / Storybook / Chromatic / Figma all verified green + aligned. Cleanups applied: renamed 4 straggler Figma pages into `Category / Component` (`Inputs / Button`, `Inputs / Selection Controls`, `Inputs / Text Field`, `Foundations / Icons`); **promoted `PullQuote` + `SlideSection` from frame reps to real `COMPONENT` nodes**; added a `Data Viz / RadarChart` page (glyph + docs panel) so RadarChart now has a Figma home. Parity is now genuinely 1:1 — no orphan components, no remaining frame-reps.
- **Case-study narrative extension shipped (2026-07-17):** the AI-as-build-method narrative gained a **third movement** ("the method became how I run it") + **four standalone deep-dive pieces**; `case-study/` split into `narrative/` + `landing/`. Facts refreshed to 27→44→103 components, 226 stories / 251 docs.
- **Distribution/onboarding layer added + pushed (2026-07-17, commit `55eaa65`):** `docs/onboarding/` (3 guides), `figma/` LFS archive folder + first `.fig`, `CHANGELOG.md` rewrite, `fonts/` licensing note. Git LFS is enabled (`.gitattributes` tracks `figma/*.fig`); the first snapshot is on the remote via LFS. **Local == origin/main.**

## Commands (verify cadence)
```
npm run typecheck          # tsc --noEmit
npm run build-storybook    # what GitHub Pages builds — must be green before push
npm run a11y:audit         # axe over all stories
```
Push to `main` → auto-deploys Pages + Chromatic + a11y CI. **Always ask before pushing.**

## Immediate Next Steps / Open Work
- **Vael gap backlog = ~67 tickets** across GitHub (#14→#96), Linear (FOC project), Todoist ("Vael") — parity + presentation + ops + foundation-token + pattern + tooling components. Many are now partially addressed; reconcile which the recent build closed.
- **Issue #10 (Figma library)** — the Figma file is now substantially built + documented; consider closing / narrowing.
- **Intent (Catherine):** make this repo the single home — code + tokens + fonts + eventually a `design/` folder pointing at the published Figma library.

## Where Tasks Are Tracked
GitHub Issues on the repo (mirrored to Linear team **FOC** / project "Vael Design System" and Todoist project "Vael"). Full history + gotchas: memory `project_vael_design_system`.
