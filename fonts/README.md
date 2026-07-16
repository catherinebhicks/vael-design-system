# Vael fonts

The three typefaces the Vael design system uses, bundled here so **code and fonts
ship together** — no npm resolution, CDN, or licensed download needed to install
them on a machine, hand them to a designer, or self-host the web build.

> The running code already loads these via dependencies
> (`@fontsource/ibm-plex-sans`, `@fontsource/ibm-plex-mono`, and the
> `@fortawesome/*` React packages). This folder is the **portable, install-anywhere
> copy** — desktop files for Figma/Font Book, web files for self-hosting.

## Type roles (the Blueprint voice)

| Role | Family | Weights used |
|---|---|---|
| **Headlines / titles** (Display + Heading) | **IBM Plex Mono** | SemiBold, Medium |
| **Eyebrows / labels / chart data** | **IBM Plex Mono** | Regular (often uppercased) |
| **Body / subtitle** | **IBM Plex Sans** | Regular, Medium |
| **Icons** | **FontAwesome 7** | Regular (default), Solid, Brands |

Mono for headlines + sans for body is deliberate — it's the "engine-room" voice
carried over from the slide decks. Don't swap headings to Sans.

## Layout

```
fonts/
  ibm-plex-sans/               body / subtitle
    IBMPlexSans[wght].ttf        ← desktop: ONE variable file, all weights+widths (install this)
    web/*.woff2                  ← self-host: Light/Regular/Medium/SemiBold/Bold
  ibm-plex-mono/               headlines / eyebrows / chart labels
    IBMPlexMono-*.ttf            ← desktop: static weights Light/Regular/Medium/SemiBold/Bold
    web/*.woff2                  ← self-host: same weights
  font-awesome/                icons — FREE tier (see note below)
    Font Awesome 7 Free-Regular-400.otf
    Font Awesome 7 Free-Solid-900.otf
    Font Awesome 7 Brands-Regular-400.otf
  LICENSES/
    IBM-Plex-OFL.txt             SIL Open Font License 1.1
    FontAwesome-Free-License.txt Font Awesome Free License
```

## Installing on a machine (desktop / Figma)

Double-click any `.ttf` / `.otf` → **Install Font** (or drag them into Font Book).
For Figma: install, then **restart Figma** so it re-scans the fonts folder.

- IBM Plex Sans registers as family **"IBM Plex Sans"**.
- IBM Plex Mono registers as family **"IBM Plex Mono"**.
- FontAwesome registers as **"Font Awesome 7 Free"** (Regular + Solid via its
  typographic name) and **"Font Awesome 7 Brands"**.

## Self-hosting on the web

Prefer the existing `@fontsource` imports (already a dependency) — it's the least
fuss. If you want to serve the bundled `web/*.woff2` directly instead, add
`@font-face` rules pointing at these files. Keep the family names above so they
match `vael/tokens.css` (`--ds-typography-font-family` / `-mono`).

## ⚠️ FontAwesome is on the FREE tier right now

To keep the design-system build moving we're using **FontAwesome 7 Free**
(Regular + Solid + Brands). **Light (`faL`) is Pro-only and not included.**
Catherine has a FontAwesome **Pro** plan — upgrading unlocks Light (restoring the
full 3-weight spec) plus Duotone/Sharp.

- Upgrade is tracked: Todoist **"AFD Website"** → *"Upgrade Vael icons from
  FontAwesome Free → Pro"*, and `afd-website/docs/vael-ds-build-state.json` →
  `icon_component.pro_upgrade_todo`.
- On upgrade: drop the Pro desktop OTFs into `font-awesome/` (replacing the Free
  ones), and switch the website to the `@fortawesome` **Pro** webfonts via the
  Pro npm token.

## Icons — SVG glyphs + generator

The **full FontAwesome 7 Free SVG set (2,883 icons)** lives in
`font-awesome/svgs/{solid,regular,brands}/`. The code renders icons as **SVG**
(`@fortawesome/react-fontawesome` + `free-*-svg-icons`) — no webfont — so these
SVGs match the code 1:1 (Figma `chevron-down` ↔ code `faChevronDown`).

**Figma icon library:** only a curated **top ~500** are placed in the *Vael Icons*
Figma file (Figma can only build an icon from inline SVG — no bulk import — so
placing all 2,883 is deliberately avoided). The selection is reproducible:

```
python3 font-awesome/generate-icons.py --count 500      # manifest + Figma batches
python3 font-awesome/generate-icons.py --count 800      # add more later
```

- `font-awesome/vael-icons/manifest.json` — the ordered selection (source of truth)
- `font-awesome/vael-icons/batches/batch-NN.json` — `{"weight/name": svg}` fed to Figma
- Priority: curated essential-UI core → design-relevant categories → major brands.

**Need an icon that isn't in the Figma file?** Three options, all documented on the
cover page *inside* the Vael Icons Figma file too: (1) bump `--count` and re-run to
add more; (2) grab any glyph from `svgs/` directly; (3) browse/download from
**https://fontawesome.com/icons** (filter to Free). The font-based option (type an
icon name in the FontAwesome font) is also explained there for anyone who prefers it.

## Sources & versions

- **IBM Plex Sans/Mono** — OFL 1.1. Desktop TTFs from google/fonts (`ofl/ibmplexsans`
  variable, `ofl/ibmplexmono` statics); web woff2 from `@ibm/plex-sans@1.1.0` /
  `@ibm/plex-mono@2.5.0`.
- **FontAwesome 7 Free 7.3.1** — Font Awesome Free License. Desktop OTFs from
  `use.fontawesome.com/releases/v7.3.1/fontawesome-free-7.3.1-desktop.zip`.
  (The npm `@fortawesome/fontawesome-free` package ships **woff2 only**, no desktop
  OTFs — use the desktop zip for installable files.)
