import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline, useTheme } from '@mui/material';
import type { Preview } from '@storybook/react-vite';
import { theme } from '../src/theme';
import { buildVcVars } from '../src/components/Charts/vcDefaults';
import '../src/components/Charts/vc-chart.css';

// Self-hosted fonts — works in Chromatic's isolated sandbox (no external network)
import '@fontsource/dm-sans/300.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/dm-sans/400-italic.css';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';

// Injects --vc-* vars on :root so the Highcharts tooltip portal (outside: true)
// can access them even though it's detached from the chart container.
function CssVarInjector() {
  const t = useTheme();
  useEffect(() => {
    const root = document.documentElement;
    const vars = buildVcVars(t);
    Object.entries(vars).forEach(([key, val]) => {
      if (key.startsWith('--')) root.style.setProperty(key, String(val));
    });
  }, [t]);
  return null;
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CssVarInjector />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
