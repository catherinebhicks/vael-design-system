/**
 * GENERATED FILE — DO NOT EDIT MANUALLY
 * Source: Figma variables → Supernova → tokens/design-tokens.json
 * To update: change values in Figma, merge the design-system branch,
 *            Supernova auto-opens a PR that regenerates this file.
 * Version: Vael v.75.0
 */

/**
 * Vael Design System — MUI Theme
 *
 * This file exports the MUI theme configuration derived from the design system token set.
 * Import and pass to ThemeProvider in your app root.
 *
 * Usage:
 *   import { theme } from './tokens/theme';
 *   <ThemeProvider theme={theme}>...</ThemeProvider>
 *
 * Token reference: foundations/color.md, foundations/typography.md,
 *                  foundations/elevation.md, foundations/spacing.md
 */

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',

    text: {
      primary: '#000000de',   // token: text/primary
      secondary: '#00000099', // token: text/secondary
      disabled: '#00000061',  // token: text/disabled
    },

    primary: {
      main: '#1976d2',         // token: primary/main
      dark: '#1565c0',         // token: primary/dark
      light: '#42a5f5',        // token: primary/light
      contrastText: '#ffffff', // token: primary/contrast
    },

    secondary: {
      main: '#9c27b0',         // token: secondary/main
      dark: '#7b1fa2',         // token: secondary/dark
      light: '#ba68c8',        // token: secondary/light
      contrastText: '#ffffff', // token: secondary/contrast
    },

    error: {
      main: '#d32f2f',         // token: error/main
      dark: '#c62828',         // token: error/dark
      light: '#ef5350',        // token: error/light
      contrastText: '#ffffff', // token: error/contrast
    },

    warning: {
      main: '#ef6c00',         // token: warning/main
      dark: '#e65100',         // token: warning/dark
      light: '#ff9800',        // token: warning/light
      contrastText: '#ffffff', // token: warning/contrast
    },

    info: {
      main: '#0288d1',         // token: info/main
      dark: '#01579b',         // token: info/dark
      light: '#03a9f4',        // token: info/light
      contrastText: '#ffffff', // token: info/contrast
    },

    success: {
      main: '#2e7d32',         // token: success/main
      dark: '#1b5e20',         // token: success/dark
      light: '#4caf50',        // token: success/light
      contrastText: '#ffffff', // token: success/contrast
    },

    background: {
      default: '#ffffff', // token: background/default
      paper: '#ffffff',   // token: background/paper
    },

    action: {
      active: 'rgba(0,0,0,0.54)',            // token: action/active
      hover: 'rgba(0,0,0,0.04)',             // token: action/hover
      selected: 'rgba(0,0,0,0.08)',          // token: action/selected
      disabled: 'rgba(0,0,0,0.26)',          // token: action/disabled
      disabledBackground: 'rgba(0,0,0,0.12)', // token: action/disabledBackground
      focus: 'rgba(0,0,0,0.12)',             // token: action/focus
    },

    divider: 'rgba(0,0,0,0.12)', // token: divider
  },

  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    fontWeightLight: 300,   // token: typography/fontWeightLight
    fontWeightRegular: 400, // token: typography/fontWeightRegular
    fontWeightMedium: 500,  // token: typography/fontWeightMedium
    fontWeightBold: 700,    // token: typography/fontWeightBold

    // token group: typography/h1
    h1: {
      fontSize: '6rem',          // 96px
      fontWeight: 300,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em', // -1.5px
    },

    // token group: typography/h2
    h2: {
      fontSize: '3.75rem',       // 60px
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: '-0.00833em', // -0.5px
    },

    // token group: typography/h3
    h3: {
      fontSize: '3rem',          // 48px
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: '0em',      // 0px
    },

    // token group: typography/h4
    h4: {
      fontSize: '2.125rem',      // 34px
      fontWeight: 400,
      lineHeight: 1.235,
      letterSpacing: '0.00735em', // 0.25px
    },

    // token group: typography/h5
    h5: {
      fontSize: '1.5rem',        // 24px
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: '0em',      // 0px
    },

    // token group: typography/h6
    h6: {
      fontSize: '1.25rem',       // 20px
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.0075em', // 0.15px
    },

    // token group: typography/subtitle1
    subtitle1: {
      fontSize: '1rem',           // 16px
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: '0.00938em', // 0.15px
    },

    // token group: typography/subtitle2
    subtitle2: {
      fontSize: '0.875rem',       // 14px
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: '0.00714em', // 0.1px
    },

    // token group: typography/body1
    body1: {
      fontSize: '1rem',           // 16px
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em', // 0.15px
    },

    // token group: typography/body2
    body2: {
      fontSize: '0.875rem',       // 14px
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.01071em', // 0.17px
    },

    // token group: typography/button
    button: {
      fontSize: '0.875rem',       // 14px
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: '0.02857em', // 0.4px
      textTransform: 'uppercase',
    },

    // token group: typography/caption
    caption: {
      fontSize: '0.75rem',        // 12px
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: '0.03333em', // 0.4px
    },

    // token group: typography/overline
    overline: {
      fontSize: '0.75rem',        // 12px
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: '0.08333em', // 1px
      textTransform: 'uppercase',
    },
  },

  // token: spacing base — spacing(1) = 8px, spacing(2) = 16px, etc.
  spacing: 8,

  shape: {
    borderRadius: 4, // token: shape/borderRadius
  },

  breakpoints: {
    values: {
      xs: 0,    // token: breakpoints/xs
      sm: 600,  // token: breakpoints/sm
      md: 900,  // token: breakpoints/md
      lg: 1200, // token: breakpoints/lg
      xl: 1536, // token: breakpoints/xl
    },
  },

  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)', // token: motion/easing/easeInOut
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',    // token: motion/easing/easeOut
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',        // token: motion/easing/easeIn
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',       // token: motion/easing/sharp
    },
    duration: {
      shortest: 150,        // token: motion/duration/shortest
      shorter: 200,         // token: motion/duration/shorter
      short: 250,           // token: motion/duration/short
      standard: 300,        // token: motion/duration/standard
      complex: 375,         // token: motion/duration/complex
      enteringScreen: 225,  // token: motion/duration/enteringScreen
      leavingScreen: 195,   // token: motion/duration/leavingScreen
    },
  },
});

export default theme;

/**
 * Dark theme — Draft, pending Figma design finalization
 * See foundations/dark-mode.md for full token documentation.
 *
 * Usage:
 *   import { darkTheme } from './tokens/theme';
 *   // Toggle based on user preference:
 *   const activeTheme = prefersDark ? darkTheme : theme;
 */
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',   // token: color-dark/text/primary
      secondary: 'rgba(255, 255, 255, 0.60)', // token: color-dark/text/secondary
      disabled: 'rgba(255, 255, 255, 0.38)',  // token: color-dark/text/disabled
    },
    primary: {
      main: '#90caf9',                         // token: color-dark/primary/main
      dark: '#42a5f5',                         // token: color-dark/primary/dark
      light: '#e3f2fd',                        // token: color-dark/primary/light
      contrastText: 'rgba(0, 0, 0, 0.87)',    // token: color-dark/primary/contrast
    },
    secondary: {
      main: '#ce93d8',                         // token: color-dark/secondary/main
      dark: '#ab47bc',                         // token: color-dark/secondary/dark
      light: '#f3e5f5',                        // token: color-dark/secondary/light
      contrastText: 'rgba(0, 0, 0, 0.87)',    // token: color-dark/secondary/contrast
    },
    error: {
      main: '#f44336',                         // token: color-dark/error/main
      dark: '#d32f2f',                         // token: color-dark/error/dark
      light: '#e57373',                        // token: color-dark/error/light
      contrastText: '#ffffff',                 // token: color-dark/error/contrast
    },
    warning: {
      main: '#ffa726',                         // token: color-dark/warning/main
      dark: '#f57c00',                         // token: color-dark/warning/dark
      light: '#ffb74d',                        // token: color-dark/warning/light
      contrastText: 'rgba(0, 0, 0, 0.87)',    // token: color-dark/warning/contrast
    },
    info: {
      main: '#29b6f6',                         // token: color-dark/info/main
      dark: '#0288d1',                         // token: color-dark/info/dark
      light: '#4fc3f7',                        // token: color-dark/info/light
      contrastText: 'rgba(0, 0, 0, 0.87)',    // token: color-dark/info/contrast
    },
    success: {
      main: '#66bb6a',                         // token: color-dark/success/main
      dark: '#388e3c',                         // token: color-dark/success/dark
      light: '#81c784',                        // token: color-dark/success/light
      contrastText: 'rgba(0, 0, 0, 0.87)',    // token: color-dark/success/contrast
    },
    background: {
      default: '#121212',                      // token: color-dark/background/default
      paper: '#1e1e1e',                        // token: color-dark/background/paper
    },
    action: {
      active: 'rgba(255, 255, 255, 0.56)',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.30)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      focus: 'rgba(255, 255, 255, 0.12)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',     // token: color-dark/divider
  },
  typography: {
    // Identical to light theme — typography doesn't change between modes
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: { fontSize: '6rem', fontWeight: 300, lineHeight: 1.167, letterSpacing: '-0.01562em' },
    h2: { fontSize: '3.75rem', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.00833em' },
    h3: { fontSize: '3rem', fontWeight: 400, lineHeight: 1.167, letterSpacing: '0em' },
    h4: { fontSize: '2.125rem', fontWeight: 400, lineHeight: 1.235, letterSpacing: '0.00735em' },
    h5: { fontSize: '1.5rem', fontWeight: 400, lineHeight: 1.334, letterSpacing: '0em' },
    h6: { fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.6, letterSpacing: '0.0075em' },
    subtitle1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.75, letterSpacing: '0.00938em' },
    subtitle2: { fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.57, letterSpacing: '0.00714em' },
    body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.00938em' },
    body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.43, letterSpacing: '0.01071em' },
    button: { fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.75, letterSpacing: '0.02857em', textTransform: 'uppercase' as const },
    caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.66, letterSpacing: '0.03333em' },
    overline: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 2.66, letterSpacing: '0.08333em', textTransform: 'uppercase' as const },
  },
  spacing: 8,
  shape: { borderRadius: 4 },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
});

// ─── Chart Variable Color Map ─────────────────────────────────────────────────
//
// Deterministic color assignments for server metrics in the Highcharts chart system.
// These reference the MUI theme palette — both must stay in sync.
//
// Usage: import { chartVariableColors } from './theme';
//        const color = chartVariableColors['Cpu'];
//
// Reference: foundations/data-visualization.md, components/charts.md
// ─────────────────────────────────────────────────────────────────────────────

export const chartVariableColors: Record<string, string> = {
  /** CPU utilization — primary.main — blue */
  Cpu:        theme.palette.primary.main,   // #1976d2
  /** Memory usage — error.main — red */
  Memory:     theme.palette.error.main,     // #d32f2f
  /** Latency — success.main — green */
  Latency:    theme.palette.success.main,   // #2e7d32
  /** Throughput — secondary.main — purple */
  Throughput: theme.palette.secondary.main, // #9c27b0
  /** Requests — warning.main — orange */
  Requests:   theme.palette.warning.main,   // #ef6c00
  /** Storage — info.main — light blue */
  Storage:    theme.palette.info.main,      // #0288d1
};

export const chartEventColors = {
  /** Warning / override event marker — diamond shape */
  warning:  theme.palette.warning.main,  // #ef6c00
  /** Error / alarm event marker — diamond shape */
  error:    theme.palette.error.main,    // #d32f2f
  /** Recovery / resolved event marker — diamond shape */
  recovery: theme.palette.success.main,  // #2e7d32
  /** Debug event marker — circle shape */
  debug:    theme.palette.error.main,    // #d32f2f
} as const;

export const chartOpacities = {
  /** Deadband area range fill. Must not exceed 0.15. */
  deadband:    0.09,
  /** DebugChart disturbance plot band fill. */
  disturbance: 0.06,
} as const;
