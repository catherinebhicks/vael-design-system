# Vael Dark-Mode Audit — Report

**File:** Figma `4dNRm8xuERpDNfdXYjlbIn` · Color collection, Light/Dark modes.
**Scope:** every component page audited. **Method:** flip page → Dark, inspect + screenshot each variant/state, bind stragglers role-aware, verify, revert to Light.
**Your decisions applied:** elevated surfaces = `#1e1e1e` paper **+ hairline `divider` border**; buttons deep-audited; full-autonomy fixes with everything documented here.

---

## Headline
- **~60 of ~100 component pages were already clean** — properly bound, flip perfectly. No work needed.
- **~30 pages had genuine stragglers** — all fixed (details below).
- **Everything is reverted to Light** — only the new **🌙 Dark Preview** page stays pinned Dark (your always-on place to see dark mode). It now shows Buttons (all states) + Dialog, Drawer, Accordion, Card.

## Your Button concern — resolved
Every Button variant binding was already correct (contained→primary/main + primary/contrast label; hover→primary/dark; outlined→primary/main border+label; disabled→divider/text-disabled). The "colors/contrast off" was **the light specimen backdrop not flipping** — light-blue outlined/text buttons looked broken against a light panel. Bound the backdrop → `background/subtle`; on dark, all nine states read correctly.

## Card concern — resolved
Cards were bound to `background/default` (#121212) — the **same** color as the page — so they couldn't separate. Re-bound to `background/paper` (#1e1e1e) + they already had borders. Now they lift cleanly off the background (verified on the Dark Preview page).

## Fixes by group
**Surfaces (mock compositions that stayed white):** Dialog, Drawer, Accordion, Popover, CtaBar, FlowCanvas, NotificationCenter — surfaces→`background/paper` (+ hairline `divider` border on elevated ones), titles→`text/primary`, body→`text/secondary`, borders→`divider`. Scrims left dark (correct in both modes).

**Severity / status colors:** Alert icons, StatusBadge dots, AlarmBadge → `{severity}/main` (flip lighter in dark). StatusBadge labels → `text/secondary`.

**Tinted backgrounds (were solid light tints, invisible text in dark):** Callout, Tag, IconListItem, PersonaCard, ProcessDiagram, Sitemap, Comparison, AdvancedSelect, SlideSection, NotificationCenter unread → bound to their tone color at low opacity (8–16%) so they become dark translucent tints that flip.

**Selection controls:** checkmarks / indeterminate dashes → `primary/contrast` (dark ink on the light-blue checkbox in dark). SegmentedControl selected label → `primary/contrast`, others → `text/primary`.

**Charts:** plot surfaces → `background/paper`; gridlines → `divider`; axis labels + data vertices → `text/secondary` (so nothing is invisible black-on-dark); Legend/TrendBadge text → semantic. **Data-series colors left as-is** (blue/green line & segment colors read fine on dark).

**Misc:** Link/Divider/Stepper titles & marks → `text/primary`; Testimonial avatar → `primary/main`; BrowserFrame toolbar → `background/subtle`.

## Intentionally left unbound (correct as-is)
- Switch thumbs (white in both modes), CodeBlock (intentionally dark), Footer ink band (dark variant), Dialog/Drawer scrims (dark overlay in both modes).
- Chart **data-series** colors, DonutChart segments, Legend swatches (data colors, fine on dark).
- BrowserFrame traffic-light dots (macOS colors), Mark highlighter (yellow, fine on dark), ImageList 🖼 emoji, icon-backing white frames (hidden behind glyphs), Rating empty-star gray.

## ⚠️ Flag for your eye (judgment calls I made — reversible)
1. **Chart data vertices → `text/secondary`.** On the radar/advanced charts, some data shapes were solid black (invisible on dark). I bound them to a visible gray so they're not lost — but if those are meant to be **colored data areas**, you'll want to re-point them to chart data colors. (Data Viz / Standard & Advanced, Data Viz / RadarChart.)
2. **Callout tip vs note** both blue — I used `primary/main` for tip, `info/main` for note. If tip should match a different tone, easy swap.
3. **Elevated-surface borders** now show subtly in **light** mode too (your accepted divergence from code). If any card/menu looks over-bordered in light, say which.

## Technique notes (for future dark work)
- **`setBoundVariableForPaint` resets a paint's opacity to the variable's alpha.** For any translucent tint, set `.opacity` in a **separate** step on a plain-cloned fill, or it renders solid.
- **On-canvas specimens render on the light Figma editor canvas**, so tints/colors look oversaturated in dark screenshots even when correct. Verify via node inspection or the Dark Preview page (true dark surface), not bare-canvas screenshots.
- Instances capture overrides at creation — fix the master *before* instancing, or re-apply on the instance.

## How to see it
Open the **🌙 Dark Preview** page (top of the page list). To spot-check any component: select its frame → right-click → **Apply variable mode → Color → Dark** (or the mode dropdown in the right panel).
