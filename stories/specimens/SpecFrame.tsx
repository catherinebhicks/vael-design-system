import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box, useTheme } from '@mui/material';
import { theme } from '../../src/theme';
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
 * from the MUI theme must provide its own `ThemeProvider`. This keeps every
 * specimen self-contained and correct whether it's rendered in the docs tab
 * or a standalone story.
 */
export function SpecFrame({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CssVarInjector />
      <Box sx={{ my: 2 }}>{children}</Box>
    </ThemeProvider>
  );
}

export default SpecFrame;
