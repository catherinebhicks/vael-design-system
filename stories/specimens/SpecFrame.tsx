import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from '../../src/theme';

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
      <Box sx={{ my: 2 }}>{children}</Box>
    </ThemeProvider>
  );
}

export default SpecFrame;
