# Installing & using Storybook

**Last updated: 2026-07-17.**

Storybook is the **live, browsable catalog** of every Vael component — each one
rendered for real, with controls to change its options and docs explaining when to
use it. You don't need to write any code to *look* at it; you just need to start it
up once. This guide is written for someone comfortable opening a terminal but who
isn't a full-time developer.

> **Just want to look, not install?** The catalog is already published online:
> **https://catherinebhicks.github.io/vael-design-system/** — open it in any browser.
> Follow the steps below only if you want to run it on your own machine (to edit,
> work offline, or preview changes).

---

## Why would a non-developer run this?

Storybook isn't just a developer tool — it's the clearest window into what the design
system actually *is*. Running it (or opening the live URL above) lets you:

- **See every component for real** — rendered and interactive, not a flat screenshot.
  It's the fastest way to evaluate the system before using or buying it.
- **Try the options yourself** — the Controls panel lets you flip a button to
  "disabled," change a card's text, or switch variants and watch it update live, so
  you understand what each piece can do without reading any code.
- **Read the usage guidance** — each component's Docs tab has the do's/don'ts,
  accessibility notes, and when-to-use-what, so you can make good design calls.
- **Check light/dark and responsive behavior** — toggle the theme and resize to see
  how things hold up, useful for design review and QA.
- **Get exact names to hand off** — copy the real component and property names to give
  a developer (or an AI agent) so requests are precise instead of "make it like that."
- **Do a design review or sign-off** — verify a change looks right across the system
  before it ships, without needing a developer to set anything up for you.

In short: designers, PMs, founders, and reviewers use Storybook to *understand,
evaluate, and QA* the system — the coding is optional.

---

## What you'll need (one-time setup)

1. **Node.js** — the engine that runs Storybook. Install the **LTS** version (20 or
   newer) from **https://nodejs.org**. This also installs **npm** (Node's package
   manager), which the commands below use.
   - To check it worked, open a terminal and run:
     ```bash
     node -v
     npm -v
     ```
     Both should print a version number (e.g. `v20.x.x`). If you get
     "command not found," close and reopen the terminal, or restart after installing.

2. **The Vael code** on your machine. Either:
   - Clone it with git: `git clone <repo-url> vael-design-system`, **or**
   - Download the repo as a ZIP from GitHub and unzip it.

---

## Start Storybook (the everyday flow)

Open a terminal and move into the project folder:

```bash
cd path/to/vael-design-system
```

**First time only** — install the dependencies. This downloads everything Storybook
needs into a `node_modules/` folder. It can take a few minutes and prints a lot of
text; that's normal.

```bash
npm install
```

**Every time** — start the Storybook dev server:

```bash
npm run storybook
```

After a few seconds it opens **http://localhost:6006** in your browser automatically
(if not, open that address yourself). You now have the full component catalog running
locally.

**To stop it:** click in the terminal and press **Ctrl + C**. To start it again later,
just re-run `npm run storybook` (you don't need `npm install` again unless the code's
dependencies changed).

---

## Finding your way around

- **Left sidebar** — every component, grouped by category (Inputs, Navigation, Data
  Display, Marketing, Data Viz, …). Click one to open it. There's a **search box** at
  the top of the sidebar.
- **Canvas vs. Docs tabs** (top of the main panel):
  - **Canvas** — the component on its own, interactive.
  - **Docs** — the written guidance: what it's for, do/don't, accessibility notes,
    props, and its status.
- **Controls panel** (bottom of the Canvas) — the knobs. Change a component's text,
  size, variant, disabled state, etc. and watch it update **live**. Nothing you do
  here is saved; it's a sandbox.
- **Toolbar** (top of the Canvas) — resize to different screen widths, toggle the
  background, and switch **light / dark theme** to see Vael's Blueprint palette in
  both modes.

---

## Optional: build a shareable static copy

To hand someone a self-contained copy of the catalog (no Node required to view it):

```bash
npm run build-storybook
```

This produces a `storybook-static/` folder — a plain website you can open, zip, or
host anywhere. (This is exactly what gets published to the live GitHub Pages URL at
the top of this doc, so you rarely need to do this by hand.)

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| `node` / `npm`: command not found | Node isn't installed or the terminal predates the install — (re)install from nodejs.org and open a fresh terminal. |
| `npm install` fails with permission or network errors | Re-run it; if it persists, delete `node_modules/` and `package-lock.json` is **not** needed to delete — just retry `npm install`. Check your internet/proxy. |
| "Port 6006 is already in use" | Storybook is already running in another terminal, or something else took the port. Stop the other process, or run `npm run storybook -- -p 6007` to use a different port. |
| Browser didn't open | Open **http://localhost:6006** manually. |
| `build-storybook` runs out of memory | The script already raises Node's memory to 4 GB; if it still fails, close other heavy apps and retry. |
| Fonts look wrong | Storybook loads Vael's fonts automatically via its dependencies — a hard refresh (Cmd/Ctrl + Shift + R) usually fixes a half-loaded first render. |

---

## Where this fits

- **Storybook** (this doc) = browse and interact with the components in code.
- **[Import into Figma](import-into-figma.md)** = load the design file for design work,
  and optionally connect it to an LLM via MCP.
- **[docs/](../README.md)** = the history, downstream usage, and governance behind it all.
