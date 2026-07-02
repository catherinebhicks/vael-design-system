import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box, useTheme } from '@mui/material';
import type { Preview } from '@storybook/react-vite';
import { useDarkMode } from 'storybook-dark-mode';
import { theme, darkTheme } from '../src/theme';
import { buildVcVars } from '../src/components/Charts/vcDefaults';
import { blueprint, blueprintCssVars, gridBackground } from '../vael/blueprint';
import { blueprintLight, blueprintDark } from './theme-blueprint';
import { DocsContainer } from './DocsContainer';
import '../src/components/Charts/vc-chart.css';
import './vael-docs.css';

// Self-hosted fonts — works in Chromatic's isolated sandbox (no external network).
// IBM Plex Sans (UI/body) + IBM Plex Mono (labels/data/code) — the Blueprint set.
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/600.css';

// Injects the Highcharts --vc-* vars (so the outside:true tooltip portal can read
// them) AND the site's blueprint --bg/--ink/--blue/… vars for the given mode, so
// the docs stylesheet reuses the landing page's conventions and toggles with the theme.
function CssVarInjector() {
  const t = useTheme();
  useEffect(() => {
    const root = document.documentElement;
    const mode = t.palette.mode === 'dark' ? 'dark' : 'light';
    root.setAttribute('data-theme', mode);
    const vars = { ...buildVcVars(t), ...blueprintCssVars(mode) };
    Object.entries(vars).forEach(([key, val]) => {
      if (key.startsWith('--')) root.style.setProperty(key, String(val));
    });
  }, [t]);
  return null;
}

const preview: Preview = {
  decorators: [
    (Story, context) => {
      // storybook-dark-mode is the single source of truth — one toggle drives
      // the chrome (manager theme) AND the components + docs here.
      const isDark = useDarkMode();
      const activeTheme = isDark ? darkTheme : theme;
      const isStory = context.viewMode === 'story';
      const grid = blueprint[isDark ? 'dark' : 'light'].grid;
      return (
        <ThemeProvider theme={activeTheme}>
          <CssBaseline />
          <CssVarInjector />
          <Box
            sx={{
              bgcolor: 'background.default',
              color: 'text.primary',
              minHeight: isStory ? '100vh' : 'auto',
              p: isStory ? 3 : 1.5,
              borderRadius: isStory ? 0 : 1,
              // Blueprint "paper" — the fine grid the specimens sit on (story canvas only).
              ...(isStory && {
                backgroundImage: gridBackground(grid),
                backgroundSize: blueprint.gridSize,
                backgroundPosition: 'center',
              }),
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

    // Blueprint chrome themes for the light/dark toggle (storybook-dark-mode).
    darkMode: {
      current: 'light',
      light: blueprintLight,
      dark: blueprintDark,
      stylePreview: false,
    },

    // Blueprint docs skin (grid page, mono headings, hairline tables, dark code).
    docs: { container: DocsContainer },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
