import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box, useTheme } from '@mui/material';
import type { Preview } from '@storybook/react-vite';
import { theme, darkTheme } from '../src/theme';
import { buildVcVars } from '../src/components/Charts/vcDefaults';
import '../src/components/Charts/vc-chart.css';

// Self-hosted fonts — works in Chromatic's isolated sandbox (no external network)
import '@fontsource-variable/inter'; // primary UI typeface (Preline-influenced)
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
  globalTypes: {
    theme: {
      description: 'Global theme (light / dark)',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'contrast',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const activeTheme = context.globals.theme === 'dark' ? darkTheme : theme;
      return (
        <ThemeProvider theme={activeTheme}>
          <CssBaseline />
          <CssVarInjector />
          <Box
            sx={{
              bgcolor: 'background.default',
              color: 'text.primary',
              minHeight: context.viewMode === 'story' ? '100vh' : 'auto',
              p: context.viewMode === 'story' ? 0 : 1.5,
              borderRadius: context.viewMode === 'story' ? 0 : 1,
            }}
          >
            <Story />
          </Box>
        </ThemeProvider>
      );
    },
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
