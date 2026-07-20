# Figma ↔ Code Parity Rebuild — Status & Re-entry

**✅ COMPLETE (2026-07-20).** All 16 components rebuilt (atomic, parameterized,
dark-safe, WCAG-AA, 1:1 with Storybook) and all 7 patterns composed from real
component instances on the Patterns page. Details below.

**Goal:** rebuild the ~15 "specimen" components in the Vael **Figma** library as
atomic, parameterized, dark-safe, WCAG-AA components whose properties are derived
from each component's **code** API — so Figma matches Storybook **1:1**. Replace each
showcase in place (delete old). Then build the 7 pattern examples on the Patterns page.

## Naming convention (atoms vs patterns)
- **Components/atoms** → plain names (`Stepper`, `Table`, `AccordionItem`) on their
  component pages.
- **Patterns** → `Pattern / <Name>` prefix, all on the **Patterns** page (296:4).
  Anything titled `Pattern / …` is a composed pattern; everything else is a component.

## Token foundation fixes this session (Figma-only — code already correct)
- Color collection **dark-mode** raw values were stale MUI generics; repointed to
  `theme.ts`: `primary/main` #42a5f5, `primary/dark` #1976d2, `primary/light` #90caf9,
  `primary/contrast` #08131f, `background/paper` #111925, `background/default`
  #e9eff7/#0a0e14. Added `appbar/bg` (#1976d2/#111925), `appbar/on` (#fff/#dce6f2),
  `table/row-line` (#fafbfd/#090d12).

**Why:** the Figma library had visual/naming parity but NOT component-API parity —
every component was a baked showcase frame with no override properties, so patterns
couldn't be composed from them. See memory `project_vael_design_system`.

---

## Key locations
- **Figma file:** `4dNRm8xuERpDNfdXYjlbIn` ("Vael-Design-System"), published library.
- **Patterns page (new):** node `296:4` — where the 7 pattern examples will be built.
- **Color variable collection:** `VariableCollectionId:1:14`, modes **Light `1:1`** / **Dark `9:0`**.
- **Blueprint collection (the real solids):** `VariableCollectionId:9:42`, Light `9:2` / Dark `9:3`.
- **Storybook (source of truth for 1:1):** `npm run storybook` → http://localhost:6006.
- **Progress tracker:** harness tasks **#63–82**.

## The build convention (follow exactly)
1. Read the component's **code** API (`src/components/<Name>/`) → derive props.
2. Read the **real computed styles from Storybook** (don't guess) — e.g.
   `page.evaluate(() => getComputedStyle(el))` on the story iframe. This caught the
   Tooltip/Snackbar + neutral-token bugs.
3. Build atomic component with **component properties** (TEXT / BOOLEAN / VARIANT).
4. **Colors bound to variables — never hardcoded hex.** IBM Plex **Mono** for labels
   (mono-dominant reskin), Sans for body copy.
5. **Tinted fills** use the tint tokens below (variable-bound paint *opacity does NOT
   render on instances* — must use solid tokens).
6. **a11y:** every text pair must clear **4.5:1 in BOTH modes** — use `{color}/on-tint`
   for text on tints; verify light+dark before placing.
7. Verify with a light + dark screenshot, then place on the component's page and
   **delete** the old showcase component.

## Token foundation (all created/fixed this session, Light+Dark)
- `{color}/tint`, `{color}/tint-line` — tinted fill + border (primary/success/warning/error/info)
- `{color}/on-tint` — AA-compliant text on the tint
- `text/muted-aa` — AA muted grey (`#737373`/`#808080`)
- `surface/inverse` (`#141C28`/`#E9EFF7`) + `text/inverse` — inverting surfaces (tooltip/snackbar/dialog scrim)
- **Neutral fix:** `Color` collection `text/primary` `#141c28`/`#dce6f2`, `text/secondary`
  `#54637a`/`#8a9bb2`, `text/disabled` `#586780`/`#7688a0`, `divider` `#dbe4f0`/`#1e2a3a`
  (repointed from stale MUI-alpha to Blueprint solids — corrected all built components).

## Gotchas learned
- Variable-bound paint **opacity is ignored on instances** → use solid tint tokens, not opacity.
- **Never bind a surface to `text/primary`** — it's translucent (alpha). Use `surface/inverse`.
- `combineAsVariants`: add component properties to the SET **after** combining, then bind
  each variant's layer via `layer.componentPropertyReferences`.
- Set the wrong-page reads with `getNodeByIdAsync` (works file-wide); switch pages with
  `await figma.setCurrentPageAsync(page)` — at most once per `use_figma` call.
- Font-load before any text edit. Skill: always pass `figma-use,figma-generate-library`.

---

## Component status (16)
| # | Component | Status | Page node |
|---|---|---|---|
| Tag | ✅ done (6 Color, tinted, AA) | 179:11 |
| Infotext | ✅ done (5 Tone) | 179:10 |
| StatusBadge | ✅ done (4 Status) | 179:4 |
| Tooltip | ✅ done (inverse surface) | 176:12 |
| Popover | ✅ done (Title/Body) | 176:15 |
| SegmentedControl | ✅ done (Segment) | 179:40 |
| Callout | ✅ done (5 Tone) | 176:17 |
| Snackbar | ✅ done (inverse surface, r=10) | 176:11 |
| Checkbox | ✅ already compliant (no rebuild) | 30:2 |
| TextField | ✅ done (4 State, notch label) | 33:2 |
| Stepper | ✅ done (Step set + assembly, checkmark completed) | 179:17 |
| Accordion | ✅ done (AccordionItem Expanded/Collapsed + assembly) | 179:69 |
| Descriptions | ✅ done (DescriptionRow atom + 2-col assembly) | 179:12 |
| List | ✅ done (icon comps + ListItem atom + assembly) | 179:5 |
| Table | ✅ done (TableCell set + Paper assembly) | 179:6 |
| Dialog | ✅ done (Title/Body + Cancel/Confirm buttons) | 179:72 |
| SidePanel | ✅ done (reuses DescriptionRow atom in body) | 179:74 |
| AppBar | ✅ done (appbar/bg + appbar/on, flips blue→surface) | 182:2 |

## Patterns (Patterns page 296:4) — ✅ all 7 built from real component instances
| Pattern | Composed from |
|---|---|
| Pattern / Filter Bar | TextField + Chip pills + Button + Segments + Infotext |
| Pattern / Bulk Action | tint action bar + Buttons + Table + Snackbar |
| Pattern / Chart Annotation | chart illustration (signal reference line + marker) + Callout |
| Pattern / Inline Confirmation | Button swap + Popover + Buttons |
| Pattern / Master-Detail | ListItem instances (one selected) + SidePanel |
| Pattern / Wizard with Branching | Stepper + Segments + TextField + Infotext + Buttons |
| Pattern / Keyboard Shortcut Disclosure | kbd caps sheet + Tooltip + Infotext + Menu |

### Remaining composite component keys (old specimens to replace)
- Stepper `d069121388be742e62af01bfc3b5490613218f8d`
- Accordion `27ca511987d4b5f46a33d2b6acedd04a4cd30e84`
- Descriptions `edc517ee77993f637f391071ea236f8a136ee964`
- List `3a12369c3d68d06d1cd156c0f6e7719c53b20744`
- Table `fbdc9fd840cfd18d33e354b930593703400248f9`
- Dialog `239cf31d72bf3dddeb6243dff4c7aa7a87b0f30a`
- SidePanel `0bc92135f68b819867cf49c35903266c4235cd8b`
- AppBar (Nav / Header) `9a647ebeaad8db3f8ac92f6495438354e52daebf`

---

## Group B parity (2026-07-20) — ✅ 8 code-only components now real Figma components
Rebuilt (were static demo frames): InputNumber, PasswordField, AdvancedSelect (field family),
BrowserFrame, Footer (ink), FileUpload, Navigation (BottomNav), Drawer. New tokens: `neutral/chip`,
`line2`, `footer/ink`. All 1:1 + dark-verified, old demo frames removed.

## Chart tier (Option B, 2026-07-20) — ✅ chrome built, plots labeled
Built as real components: **Legend** (dot+label series), **TrendBadge** (Up/Down/Flat tinted pills),
**ChartCard** (header + plot-area + Legend instance). ChartCard's plot area is explicitly captioned
"chart illustration · rendered by Highcharts in code". The actual plots (Bar/Area/Donut/Radar/Sparkline/
Waffle/Gauge) remain static illustrations — optionally add the same caption to each standalone chart page.

## Parity status
Code 104 components · Figma now ~101 real components. Remaining code-only = the ~7 Highcharts *plots*
(illustrations by design) + WorkCards/SpotlightTour (edge cases). No non-chart drift remains.

## Immediate next steps
All 16 composites + 7 patterns + 8 Group-B + 3 chart-chrome are DONE. Remaining optional/open items:
1. Re-point the story `parameters.design` node-ids to the new component nodes (optional).
2. Re-publish the Figma library so the new components/patterns get stable keys.
3. Decide whether to keep the Patterns page or fold it in (title convention already
   distinguishes patterns from atoms, so location is flexible).
4. Push the 3 local code branches when ready (currently held — see below). No code was
   changed this session; the token fixes were Figma-only (code already renders correctly).

## Local code branches (NOT pushed — holding all pushes per Catherine)
- `chore/token-linting` — stylelint token-enforcement rule + `.github/workflows/lint.yml`.
- `a11y/tag-infotext-contrast` — Tag/Infotext AA text-contrast fix in code (mirrors Figma `on-tint`).
- `feat/pattern-live-examples` — the 7 runnable pattern example components under
  `stories/Patterns/examples/` + neutralized copy (built earlier this effort).

## Notes
- Storybook dev server may still be running on :6006 (used for 1:1 comparison).
- All Figma edits are in the published library; old showcases are **deleted** on replace
  (Catherine approved). Reversible via Figma version history.
