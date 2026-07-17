// Codebase accessibility audit: runs axe-core over every Storybook story and
// aggregates violations by rule, severity, and affected component.
// Usage: serve storybook-static on $BASE, then `node scripts/a11y-audit.mjs`.
import { chromium } from 'playwright';
import { injectAxe, getViolations } from 'axe-playwright';
import fs from 'fs';

const BASE = process.env.SB_URL || 'http://127.0.0.1:6007';
const idx = JSON.parse(fs.readFileSync('storybook-static/index.json', 'utf8'));
const stories = Object.values(idx.entries).filter((e) => e.type === 'story');

const browser = await chromium.launch();
const page = await browser.newPage();
const byRule = {};
let audited = 0, withViol = 0, errored = 0;

for (const s of stories) {
  const url = `${BASE}/iframe.html?id=${encodeURIComponent(s.id)}&viewMode=story`;
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 20000 });
    await page.waitForTimeout(250);
    await injectAxe(page);
    const violations = await getViolations(page, '#storybook-root', {});
    audited++;
    if (violations.length) withViol++;
    for (const v of violations) {
      const r = (byRule[v.id] ||= { impact: v.impact, nodes: 0, stories: new Set(), help: v.help, examples: [] });
      r.nodes += v.nodes.length;
      r.stories.add(s.title);
      for (const n of v.nodes.slice(0, 2)) {
        if (r.examples.length < 8)
          r.examples.push({ story: s.title, target: n.target?.join(' '), summary: (n.failureSummary || '').replace(/\s+/g, ' ').slice(0, 200) });
      }
    }
  } catch (e) {
    errored++;
  }
}
await browser.close();

const order = { critical: 0, serious: 1, moderate: 2, minor: 3 };
const rows = Object.entries(byRule).sort(
  (a, b) => (order[a[1].impact] ?? 9) - (order[b[1].impact] ?? 9) || b[1].nodes - a[1].nodes
);

let out = `\n=== Vael accessibility audit (axe-core) ===\n`;
out += `Audited ${audited}/${stories.length} stories (${errored} render errors skipped). ${withViol} stories had >=1 violation.\n`;
out += `Distinct rules violated: ${rows.length}\n`;
for (const [id, r] of rows) {
  out += `\n[${(r.impact || 'n/a').toUpperCase()}] ${id} — ${r.nodes} nodes across ${r.stories.size} stories\n`;
  out += `  ${r.help}\n`;
  out += `  e.g. ${[...r.stories].slice(0, 8).join(' · ')}\n`;
}
console.log(out);
fs.writeFileSync(
  '/tmp/a11y-report.json',
  JSON.stringify(rows.map(([id, r]) => ({ id, impact: r.impact, nodes: r.nodes, stories: [...r.stories], help: r.help, examples: r.examples })), null, 2)
);
