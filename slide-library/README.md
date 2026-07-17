# Vael Slide Library

A presentation template kit in the Vael **Blueprint** look (IBM Plex Sans/Mono, grid-paper background, blue/rust accents) — finished 16:9 layouts for building case-study and portfolio decks without doing layout work.

## Download the deck

- **[`deck/Vael-Slide-Library.pptx`](deck/Vael-Slide-Library.pptx)** — the **full 92-slide deck** (all pages), exported from Claude Design with universal/web-safe fonts so it opens correctly anywhere. This is the one to hand people.
- **`Vael-Slide-Library-EDITABLE.pptx`** — a lighter kit of the **14 reusable layout templates** as native editable PowerPoint slides (duplicate a slide, type over the placeholders). Requires IBM Plex Sans + Mono installed for the exact look.

## What's in here

- `*.html` — the slide layout sources (cover, agenda, before/after, data-chart, gallery, feature, divider, full-bleed, closing, appendix, etc.).
- `build_editable_pptx.py` — generates the 14-template editable PPTX from the layouts (python-pptx; maps the 1280×720 HTML layout to EMU).
- `build_pptx.py`, `embed_fonts.py`, `fonts*.css`, `render/` — supporting build + font-embedding assets.

## Source

The canonical deck is the Claude Design project **"Vael Slide Library"** (`Vael Slide Library.dc.html`). To re-export: open it → Share → Export → PowerPoint → **Universal fonts**, then replace `deck/Vael-Slide-Library.pptx`.
