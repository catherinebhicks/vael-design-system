# Importing the Vael Design System into Figma

**Last updated: 2026-07-17.** Figma's import flow is stable, but the **MCP section
below is time-sensitive** — Figma's MCP server is evolving quickly. Re-verify that
section against Figma's current docs when you revisit, and bump this date whenever
you update the file.

How to load the Vael `.fig` archive (in [`figma/`](../../figma/)) into your own Figma
workspace — from the **web** or the **desktop app** — turn it into a usable,
publishable design library, and (optionally) connect it to an LLM via MCP. Written
for someone receiving the Vael package fresh.

> **`.fig` vs. import.** The file in this folder (`vael-design-system-YYYY-MM-DD.fig`)
> is a complete, editable Figma archive. *Importing* it uploads it as a new cloud
> file you can edit, share, and publish. (Restoring locally instead — desktop
> **File → New from local copy…** — just opens the archive without uploading it.)

---

## Before you start: install the fonts

Vael uses **IBM Plex Sans**, **IBM Plex Mono**, and **FontAwesome 7** for icon
glyphs. If they aren't available, Figma will flag missing fonts and substitute
faces, so the file won't look right. All font files ship in the repo at
[`fonts/`](../../fonts/) (with licenses).

- **Web (figma.com):** install the free **Figma Font Installer / desktop agent**
  (figma.com → Settings, or the "Can't find a font?" prompt) so the browser can
  see locally-installed fonts. Then install the Plex + FontAwesome faces from
  `fonts/` into your OS (macOS Font Book / Windows "Install").
- **Desktop app:** just install the faces from `fonts/` into your OS — the desktop
  app reads system fonts directly.

IBM Plex Sans & Mono are also on **Google Fonts**, so Figma may resolve them
automatically; FontAwesome is the one you'll most likely need to install by hand.

---

## Option A — Import from the web (figma.com)

1. Go to **figma.com** and sign in.
2. Open the **Drafts** view, or a **team → project** where you want the file to live.
3. Click the **Import** button (top-right of the file grid) — *or* just **drag the
   `.fig` file** from Finder/Explorer onto the file grid.
4. Choose `vael-design-system-YYYY-MM-DD.fig` and let it upload. Figma converts it
   into a normal editable file and opens it.
5. (Optional) Rename it to **"Vael Design System"** and move it into the team/project
   where your other design files live.

## Option B — Import from the desktop app

1. Open the **Figma desktop app** and sign in.
2. From the **home / files** view, click **Import** — *or* **drag the `.fig`** onto
   the app window.
3. Pick `vael-design-system-YYYY-MM-DD.fig`; it uploads and opens as a cloud file,
   same as the web flow.

*(Alternatively, **File → New from local copy…** opens the `.fig` locally without
uploading — handy for a quick look or restoring an old archive. To actually use and
share it, import/upload it as above so it lives in your Figma cloud.)*

---

## After import: publish it as a library

To reuse Vael's components, variables (tokens), and styles across *other* Figma
files, publish this file as a **team library**:

1. Open the imported file.
2. Open the **Assets** panel (left sidebar) → click the **library / book icon**
   (or main menu → **Libraries**).
3. Click **Publish** on this file, review the components/styles/variables, and
   confirm.
4. In any other file, open **Libraries** and toggle **Vael Design System** on — its
   components and tokens are now available to drag in and stay linked for updates.

> **Plan note:** publishing **team libraries** (and using variables across files)
> requires a paid Figma plan (Professional/Org/Enterprise). On a free Starter plan
> you can still open, edit, and use everything *within* this one file — you just
> can't publish it as a shared library.

---

## Using this with an AI agent (MCP)

You can connect the live Vael Figma file to an LLM — to feed the system in as
context, to *design* new screens on Vael's components, and to push Figma changes
back into the design-system code. That whole workflow (MCP setup + the three modes)
has its own guide: **[designing-with-an-llm.md](designing-with-an-llm.md)**.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| "Missing fonts" banner | Install IBM Plex Sans/Mono + FontAwesome from [`fonts/`](../../fonts/); on web, also run the Figma Font Installer. |
| Import button greyed out / nothing happens | Make sure you're inside a Drafts or team/project view (not the recents/search view); try drag-and-drop instead. |
| Icons show as boxes/□ | FontAwesome isn't installed — install the FA7 faces from `fonts/font-awesome/`. |
| Can't publish as a library | That needs a paid plan (see the plan note above); the file still works standalone. |
| Which archive is current? | Newest date in the [archive log](../../figma/README.md#archive-log) is the latest known-good snapshot. |
