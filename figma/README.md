# figma/ — editable Figma archives (`.fig`)

Point-in-time editable snapshots of the Vael Design System Figma library, so the
repo carries its own source-of-truth design file (not just the live cloud file)
and older versions are kept as we work.

- **Live file (source of truth):** Figma file `4dNRm8xuERpDNfdXYjlbIn` — "Vael Design System".
- **These `.fig` files are editable archives**, not rendered exports. Open one in
  Figma with **File → New from local copy…** to restore that snapshot.
- **Launching / handing off the package?** See the onboarding guide
  [`docs/onboarding/import-into-figma.md`](../docs/onboarding/import-into-figma.md)
  for how to import a `.fig` into Figma (web + desktop), install the fonts, publish
  it as a team library, and connect Figma to an LLM via MCP.

## Naming convention

```
vael-design-system-YYYY-MM-DD.fig
```

e.g. `vael-design-system-2026-07-17.fig`. Keep every dated archive — don't
overwrite. Newest = latest known-good snapshot; older ones are the history.

## How to export a new `.fig` (manual — must be done in the Figma desktop app)

There is **no API/plugin way to produce a `.fig`** — the format is only written by
the desktop app. To take a new snapshot:

1. Open **Vael Design System** in the **Figma desktop app**.
2. Main menu (top-left) → **File → Save local copy…** (older builds: **Export as .fig**).
   From the files browser you can also right-click the file → **Save local copy…**.
3. Figma downloads a `.fig` (usually to `~/Downloads`).
4. Rename it to `vael-design-system-YYYY-MM-DD.fig` (today's date) and move it here:
   `~/dev/vael-design-system/figma/`.
5. Add a row to the log below.

## Archive log

| Date | File | Notes |
|------|------|-------|
| 2026-07-17 | `vael-design-system-2026-07-17.fig` | First archive — post cross-surface audit: one-page-per-component, Cover, PullQuote/SlideSection promoted to components, RadarChart page added. |

## Note on size / git

`.fig` files are binary and can be large. If these archives grow past a few MB or
accumulate, consider tracking them with **Git LFS** (`git lfs track "figma/*.fig"`)
so the main repo history stays lean — say the word and I'll set that up.
