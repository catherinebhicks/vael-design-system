# Start Here — Vael Case Study Slide Library

## What This Is
A reusable **case-study slide library** (28 slide layouts in the Vael "Blueprint" style) so
Catherine's team can assemble their own case-study presentations from pre-designed slides
instead of building each deck from scratch. Built 2026-07-07. Placeholder content = "NetBase
Pro". Ported from the Vael design system primitives (`~/dev/vael-ref/`). Status: **complete and
delivered** across three surfaces (local HTML, PowerPoint decks, Claude Design project).

## Where Things Live
- **Source (local):** `~/dev/vael-slide-library/` — 35 `*.html` slides + `styles.css` (+ embedded `fonts.css` bundle in `push/`). `index.html` = the team-facing menu. NOT a git repo. NOT under `~/Documents`, so not in the Drive Mac-Backup (safe).
- **PowerPoint deck (Desktop):**
  - `~/Desktop/case-study-deck-v2.pptx` — **editable** (native text/shapes/chart/table, 35 slides). THIS is the deliverable.
  - (`case-study-deck-v1.pptx` = earlier 24-slide editable version, still present)
  - **No image/flat-render deck.** Catherine only wants editable PowerPoints — she deleted the pixel-perfect `*-IMAGES.pptx` on purpose. Do NOT rebuild it. `build_pptx.py` + the `render/*.png` pipeline exist only to feed the Claude Design cards, not to produce a deck.
- **Claude Design:** project **"Vael Slide Library"** (`projectId 59004ffe-cb61-4063-9532-646bbf67a849`) — a **design-system** project (shows up under Design Systems, not regular projects). Holds all 35 slides as `@dsCard` cards grouped by tier + `styles.css` + `fonts.css`. Separate from the live **Vael Design System** project (`c2ece036…`), which was NOT touched.
- **Build scripts:** `build_pptx.py` (image deck), `build_editable_pptx.py` (editable deck), `embed_fonts.py` (regenerates base64 IBM Plex).

## Credentials & Access Needed
- None for local work. Claude Design writes go through the DesignSync tool on Catherine's claude.ai login (permission-prompted).
- **Fonts installed in `~/Library/Fonts` (user-level, reversible):** IBM Plex Sans/Mono (body/headings); **Material Icons** (classic — the decks' icons are built against THIS); Material Symbols Outlined/Rounded/Sharp (newer variable fonts, installed 2026-07-08 for general use, NOT used by the decks). ⚠️ The **editable PowerPoint needs Material Icons installed on the viewer's Mac** or its icons show as boxes (accepted tradeoff). HTML/Claude Design side is self-contained (subset font inlined).

## Current Status
- **35 templates**, 5 groups: **Start & structure** — how-to-use, agenda, title-body (workhorse), two-column, full-bleed, progress, appendix · A — cover, context, divider, statement, text-image, metric, closing · B — before-after, feature, timeline, metrics-quote, screenshot-grid · C — persona, research · D — goals, principles, approach, testimonial, data-chart, competitive, user-flow, personas-grid, sitemap, learnings, hypothesis, constraint, results-honest, validation.
- The **Start & structure** group (added 2026-07-08) is general good-slide-kit connective tissue — wayfinding (agenda, progress, appendix), the everyday workhorses (title-body, two-column, full-bleed), and a how-to-use guide — not derived from the case-study doc inventory.
- The last 4 (hypothesis, constraint, results-honest, validation) were added after **diffing the library against the real Gainsight "Survey Engine Concept" case study** — they closed the coverage gaps that diff exposed.
- Claude Design fonts + framing fixed: fonts inlined as `@font-face` in styles.css (sandbox blocks external CDNs); each slide has a `/*FIT-TO-VIEWPORT*/` script so it scales to fit the card box.
- **Icons = Material Icons font (2026-07-08).** All icons in both the pptx and the HTML/Claude Design cards are Material Icons glyphs (was broken Unicode symbols that IBM Plex lacks → tofu in PowerPoint). pptx uses raw codepoints in "Material Icons" runs (PPT won't render ligature names); HTML uses a ~2 KB **subset** inlined in styles.css via `<span class="material-icons">&#xNNNN;</span>`. See the memory file for the full icon→codepoint map and the `.material-icons{...!important}` specificity fix. All 35 cards + styles.css re-pushed to Claude Design this session; `styles.css?v=6`.

## Immediate Next Steps (when picking this back up)
1. **Open `case-study-deck-v2.pptx` in PowerPoint and eyeball the icon slides** (principles, learnings, competitive matrix, constraint, feature, closing, metric/metrics-quote, validation, how-to-use). The pptx could NOT be rendered on this machine (no PowerPoint/LibreOffice) — icons were verified structurally only. If any icon sits off-center, nudge the `micon()` x/y offset for that slide in `build_editable_pptx.py`, rebuild, re-copy to Desktop.
2. **Confirm the Claude Design cards** render after a hard refresh (Material icons + fonts + full-slide framing).
3. Optional: run the same **diff against a *shipped* case study** (Scytale or NetBase) to stress-test the metric/feature/screenshot templates.

## Open Questions / Blockers
- None blocking. Two open choices: (a) native chart/table in the editable deck use PowerPoint default styling — hand-restyle or leave; (b) decks are built against **classic Material Icons** — if the team standardizes on **Material Symbols** later, remap the codepoint table in `build_editable_pptx.py` + re-subset the web font (mechanical, not a rebuild). Editable-only — no image-deck fallback.

## Where Tasks Are Tracked
- Memory: `project_vael_slide_library.md` (full build notes + gotchas). No GitHub/Linear/Todoist project — this is a local design deliverable.
```
Local preview:  cd ~/dev/vael-slide-library && python3 -m http.server 8747  → http://localhost:8747/index.html
Rebuild decks:  python3 build_pptx.py   &&   python3 build_editable_pptx.py
```
