# Vael — AI-as-build-method walkthrough

A portfolio + Medium case study about building a production design system ("Vael") with AI as a design-engineering pair. One narrative, three cuts, plus visuals. Everything is **anonymized** — the bioscience startup it was built for is never named, and the internal system name is replaced with **Vael** throughout.

## Files

| File | Length | Use it for |
|------|--------|-----------|
| `deep-dive.md` | ~2,150 words / 8–9 min | The master. Portfolio case-study page, or a long-form Medium post. Everything else is a cut of this. |
| `medium.md` | ~1,250 words / 5–6 min | The default Medium post. Same story, tightened. |
| `short.md` | ~500 words / 2 min | LinkedIn post, portfolio teaser/intro, newsletter blurb, or a "read the full version →" lead-in. |
| `visuals/01-build-loop.{svg,png}` | — | The designer ↔ Claude build loop. |
| `visuals/02-token-pipeline.{svg,png}` | — | Figma → Supernova → tokens → theme, plus the docs generator. |

**SVG vs PNG:** use the **SVG** when embedding on the web (portfolio) — it's crisp at any size. Use the **PNG** (2400×1120) for Medium, which only accepts raster uploads — drag it straight in.

## Suggested placement of visuals in the post
- `01-build-loop.png` — right after the "Why this was an AI problem" section (it visualizes the division of labor).
- `02-token-pipeline.png` — inside "The theme layer and the pipeline that keeps it honest."

## Voice & facts (so all three stay consistent)
- First person, candid, build-in-public. Not marketing copy.
- Real numbers used throughout: **27 components, 75 doc pages, 17 Shape Up pitches, 145 tickets, v0.75**; foundation tokens **11 color / 13 typography / 8 spacing / 24 elevation**; stack is **MUI + MUI X + AG Grid + React Flow**; tokens in **W3C design-tokens format**; pipeline is **Figma → Supernova → token JSON → generated MUI theme**.
- The thesis: AI didn't replace the design work — it removed everything that *wasn't* design work, leaving the judgment (taste, accessibility, governance, the "why") more visible and more yours.

## Anonymization checklist (verify before publishing)
- [ ] No company name anywhere.
- [ ] No internal project name — always "Vael."
- [ ] Code snippets scrubbed (the real `theme.ts` header named the company; the version here says "Vael").
- [ ] Screenshots, if you add any docs-site shots later, have client data/branding stripped.

## Code snippets on Medium
The drafts include fenced code blocks (token JSON, the generated `theme.ts` header, `build.py`). On Medium, paste them as **GitHub Gists** for syntax highlighting, or use Medium's built-in code block (triple-backtick). The fenced blocks here are already anonymized and copy-paste ready.

## Possible follow-ups (not done yet — ask if you want them)
- Wire `deep-dive.md` into the portfolio site repo (`catherinebhicks/2026`) as a case-study page.
- Capture a few sanitized docs-site screenshots to add visual texture.
- Draft the Medium title/subtitle A/B options and tags before publishing.
