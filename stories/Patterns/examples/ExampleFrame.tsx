import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { useDarkMode } from 'storybook-dark-mode';
import { theme, darkTheme } from '../../../src/theme';

/**
 * Shared wrapper for Pattern examples embedded directly in MDX.
 *
 * Like the Foundations SpecFrame, MDX doc content is not wrapped by the
 * Storybook preview decorator, so pattern examples must provide their own
 * ThemeProvider. Follows the unified light/dark toggle via `useDarkMode()`.
 * Renders the example on a subtle inset surface so it reads as a live
 * specimen rather than page chrome.
 */
export function ExampleFrame({
  children,
  padded = true,
}: {
  children: React.ReactNode;
  padded?: boolean;
}) {
  const activeTheme = useDarkMode() ? darkTheme : theme;
  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <Box
        sx={{
          my: 2,
          p: padded ? 3 : 0,
          border: 1,
          borderColor: 'divider',
          borderRadius: 2,
          bgcolor: 'background.default',
          overflow: 'hidden',
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}

export default ExampleFrame;
