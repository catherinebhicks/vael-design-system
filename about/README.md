# about/ — the Vael story site

This is the **About / landing section of the Vael package**: a Next.js site that tells the story of building Vael with AI (the "AI-as-build-method" walkthrough) and links out to the Storybook, Chromatic, and Figma.

It was folded in from the standalone **`catherinebhicks/vael-case-study`** repo (now **archived**) so the whole Vael package lives in one repo. Its old deploy at `vael-case-study.vercel.app` is frozen; when the package gets its own deployment, this deploys from here (Vercel Root Directory = `about`).

The prose it renders comes from the sibling [`../case-study/`](../case-study/) narrative (deep-dive / medium / short).

## Run it

```bash
cd about
npm install      # about/ ships without node_modules
npm run dev      # → http://localhost:3000
```

## Structure
- `app/` — the App Router pages (the Vael story + sub-pages).
- `components/` — shared UI.
- `public/` — images/assets.
