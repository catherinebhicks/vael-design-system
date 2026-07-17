import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
import { injectAxe, configureAxe, checkA11y } from 'axe-playwright';

/**
 * Storybook test-runner: run axe-core accessibility checks on every story in CI
 * (see .github/workflows/a11y.yml). Honors each story's `parameters.a11y`:
 *
 *   a11y: { test: 'off' }   -> skip a11y for this story entirely
 *   a11y: { test: 'todo' }  -> run + report violations, but DON'T fail the build
 *                              (used for intentionally-isolated demos and
 *                               library-internal chart a11y — the violation is
 *                               still visible in the addon panel + `npm run
 *                               a11y:audit`, just not a CI gate)
 *   a11y: { config: { rules: [...] } } -> per-story axe rule config
 *
 * Everything else fails the build on any violation, so real regressions are caught.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context);
    const a11y = storyContext.parameters?.a11y as
      | { test?: 'off' | 'todo' | 'error'; disable?: boolean; config?: unknown }
      | undefined;

    if (a11y?.disable || a11y?.test === 'off') return;

    if (a11y?.config) {
      await configureAxe(page, a11y.config as Parameters<typeof configureAxe>[1]);
    }

    try {
      await checkA11y(page, '#storybook-root', {
        detailedReport: true,
        detailedReportOptions: { html: true },
      });
    } catch (err) {
      // 'todo' downgrades a failure to a warning so documented isolation /
      // library-internal cases don't red the CI. Everything else still throws.
      if (a11y?.test === 'todo') {
        // eslint-disable-next-line no-console
        console.warn(`[a11y: todo] ${storyContext.title} — ${storyContext.name}: reported, not gated.`);
        return;
      }
      throw err;
    }
  },
};

export default config;
