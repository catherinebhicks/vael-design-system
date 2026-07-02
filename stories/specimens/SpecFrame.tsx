import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box, useTheme } from '@mui/material';
import { useDarkMode } from 'storybook-dark-mode';
import { theme, darkTheme } from '../../src/theme';
import { buildVcVars } from '../../src/components/Charts/vcDefaults';

/**
 * Injects the --vc-* chart vars on :root. The Storybook preview does this for
 * stories, but MDX doc-block content renders outside that decorator, so chart
 * specimens embedded in Foundations docs need it here too (the Highcharts
 * tooltip portal reads these vars from :root).
 */
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

/**
 * Shared wrapper for Foundations specimens embedded directly in MDX.
 *
 * MDX doc-block content is NOT wrapped by the Storybook preview decorator
 * (that only wraps `<Story>`/`<Canvas>` content), so any specimen that reads
 * from the MUI theme must provide its own `ThemeProvider`. It follows the
 * unified light/dark toggle via `useDarkMode()`, so specimens flip with the
 * rest of the docs.
 */
export function SpecFrame({ children }: { children: React.ReactNode }) {
  const activeTheme = useDarkMode() ? darkTheme : theme;
  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <CssVarInjector />
      <Box sx={{ my: 2 }}>{children}</Box>
    </ThemeProvider>
  );
}

export default SpecFrame;
