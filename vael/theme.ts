/**
 * Vael Design System — MUI theme (hand-authored)
 *
 * A polished, Preline-influenced aesthetic layered on MUI v7:
 * refined gray neutrals, Inter typography, rounded (8px) geometry, soft layered
 * shadows, and component styling — while keeping Vael's own brand palette.
 *
 * Light and dark modes share one set of typography / shape / shadows / component
 * overrides; only the palette differs.
 *
 * Usage:
 *   import { theme } from 'vael-design-system';
 *   <ThemeProvider theme={theme}>...</ThemeProvider>
 *
 * The Inter font must be loaded by the app (e.g. `import '@fontsource-variable/inter'`).
 */

import { createTheme } from '@mui/material/styles';
import type { Shadows, ThemeOptions } from '@mui/material/styles';

// ─── Neutrals (Tailwind "gray") ───────────────────────────────────────────────
const gray = {
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280',
  600: '#4b5563',
  700: '#374151',
  800: '#1f2937',
  900: '#111827',
};

// ─── Soft, layered elevation (Tailwind-style) ─────────────────────────────────
const s = {
  xs: '0 1px 2px 0 rgba(16,24,40,0.04)',
  sm: '0 2px 4px -1px rgba(16,24,40,0.07), 0 1px 3px -1px rgba(16,24,40,0.05)',
  md: '0 6px 14px -3px rgba(16,24,40,0.08), 0 3px 6px -3px rgba(16,24,40,0.05)',
  lg: '0 14px 24px -6px rgba(16,24,40,0.09), 0 6px 10px -5px rgba(16,24,40,0.05)',
  xl: '0 26px 40px -10px rgba(16,24,40,0.10), 0 10px 14px -8px rgba(16,24,40,0.06)',
  '2xl': '0 36px 64px -16px rgba(16,24,40,0.16)',
};
const shadows = [
  'none', s.xs, s.sm, s.sm, s.md, s.md, s.md, s.lg, s.lg, s.lg,
  s.lg, s.xl, s.xl, s.xl, s.xl, s.xl, s['2xl'], s['2xl'], s['2xl'], s['2xl'],
  s['2xl'], s['2xl'], s['2xl'], s['2xl'], s['2xl'],
] as Shadows;

// ─── Typography (Inter, modern scale) ─────────────────────────────────────────
const typography: ThemeOptions['typography'] = {
  fontFamily: '"Inter Variable", "Inter", "Helvetica", "Arial", sans-serif',
  fontWeightLight: 400,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: { fontSize: '3rem',     fontWeight: 700, lineHeight: 1.2,  letterSpacing: '-0.02em' }, // 48
  h2: { fontSize: '2.25rem',  fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em' }, // 36
  h3: { fontSize: '1.875rem', fontWeight: 600, lineHeight: 1.3,  letterSpacing: '-0.01em' }, // 30
  h4: { fontSize: '1.5rem',   fontWeight: 600, lineHeight: 1.35, letterSpacing: '-0.01em' }, // 24
  h5: { fontSize: '1.25rem',  fontWeight: 600, lineHeight: 1.4 },                            // 20
  h6: { fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.45 },                           // 18
  subtitle1: { fontSize: '1rem',     fontWeight: 500, lineHeight: 1.5 },
  subtitle2: { fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.5 },
  body1: { fontSize: '1rem',     fontWeight: 400, lineHeight: 1.6 },
  body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.55 },
  button: { fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.5, letterSpacing: 0, textTransform: 'none' as const },
  caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.5 },
  overline: { fontSize: '0.75rem', fontWeight: 600, lineHeight: 1.5, letterSpacing: '0.08em', textTransform: 'uppercase' as const },
};

// ─── Component overrides (the "polish") — palette-aware, shared light/dark ─────
const components: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: { borderRadius: 10, textTransform: 'none', fontWeight: 600, paddingInline: 16, boxShadow: 'none' },
      sizeSmall: { paddingBlock: 5, paddingInline: 12, borderRadius: 8 },
      sizeLarge: { paddingBlock: 10, paddingInline: 20 },
      containedPrimary: ({ theme }) => ({
        boxShadow: theme.shadows[1],
        '&:hover': { boxShadow: theme.shadows[2] },
      }),
      outlined: ({ theme }) => ({ borderColor: theme.palette.divider }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 10,
        '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.divider },
        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: gray[300] },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderWidth: 1, borderColor: theme.palette.primary.main },
        '&.Mui-focused': { boxShadow: `0 0 0 3px ${theme.palette.primary.main}29` },
      }),
    },
  },
  MuiPaper: {
    styleOverrides: { root: { backgroundImage: 'none' }, rounded: { borderRadius: 16 } },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 16,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[2],
      }),
    },
  },
  MuiChip: { styleOverrides: { root: { borderRadius: 10, fontWeight: 500 } } },
  MuiAlert: { styleOverrides: { root: { borderRadius: 12 } } },
  MuiTooltip: {
    styleOverrides: {
      tooltip: { borderRadius: 8, backgroundColor: gray[900], fontSize: '0.75rem', padding: '6px 10px' },
      arrow: { color: gray[900] },
    },
  },
  MuiTableHead: {
    styleOverrides: { root: ({ theme }) => ({ '& .MuiTableCell-root': { backgroundColor: theme.palette.background.default, fontWeight: 600 } }) },
  },
};

const shape = { borderRadius: 10 };
const spacing = 8;
const breakpoints = { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } };
const transitions: ThemeOptions['transitions'] = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  duration: { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 },
};

// ─── Light theme ──────────────────────────────────────────────────────────────
export const theme = createTheme({
  palette: {
    mode: 'light',
    // Brand + semantic colors — Vael's own palette, unchanged.
    primary:   { main: '#1976d2', dark: '#1565c0', light: '#42a5f5', contrastText: '#ffffff' },
    secondary: { main: '#9c27b0', dark: '#7b1fa2', light: '#ba68c8', contrastText: '#ffffff' },
    error:     { main: '#d32f2f', dark: '#c62828', light: '#ef5350', contrastText: '#ffffff' },
    warning:   { main: '#ef6c00', dark: '#e65100', light: '#ff9800', contrastText: '#ffffff' },
    info:      { main: '#0288d1', dark: '#01579b', light: '#03a9f4', contrastText: '#ffffff' },
    success:   { main: '#2e7d32', dark: '#1b5e20', light: '#4caf50', contrastText: '#ffffff' },
    // Refined neutrals (Preline / Tailwind gray).
    grey: gray,
    text: { primary: gray[900], secondary: gray[500], disabled: gray[400] },
    background: { default: gray[50], paper: '#ffffff' },
    divider: gray[200],
    action: {
      active: gray[500],
      hover: 'rgba(17,24,39,0.04)',
      selected: 'rgba(17,24,39,0.08)',
      disabled: 'rgba(17,24,39,0.26)',
      disabledBackground: 'rgba(17,24,39,0.12)',
      focus: 'rgba(17,24,39,0.12)',
    },
  },
  typography,
  shape,
  shadows,
  components,
  spacing,
  breakpoints,
  transitions,
});

export default theme;

// ─── Dark theme ───────────────────────────────────────────────────────────────
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:   { main: '#90caf9', dark: '#42a5f5', light: '#e3f2fd', contrastText: 'rgba(0,0,0,0.87)' },
    secondary: { main: '#ce93d8', dark: '#ab47bc', light: '#f3e5f5', contrastText: 'rgba(0,0,0,0.87)' },
    error:     { main: '#f44336', dark: '#d32f2f', light: '#e57373', contrastText: '#ffffff' },
    warning:   { main: '#ffa726', dark: '#f57c00', light: '#ffb74d', contrastText: 'rgba(0,0,0,0.87)' },
    info:      { main: '#29b6f6', dark: '#0288d1', light: '#4fc3f7', contrastText: 'rgba(0,0,0,0.87)' },
    success:   { main: '#66bb6a', dark: '#388e3c', light: '#81c784', contrastText: 'rgba(0,0,0,0.87)' },
    grey: gray,
    text: { primary: '#f9fafb', secondary: '#9ca3af', disabled: '#6b7280' },
    background: { default: '#111827', paper: '#1f2937' },
    divider: 'rgba(255,255,255,0.10)',
    action: {
      active: 'rgba(255,255,255,0.56)',
      hover: 'rgba(255,255,255,0.06)',
      selected: 'rgba(255,255,255,0.12)',
      disabled: 'rgba(255,255,255,0.30)',
      disabledBackground: 'rgba(255,255,255,0.12)',
      focus: 'rgba(255,255,255,0.12)',
    },
  },
  typography,
  shape,
  shadows,
  components,
  spacing,
  breakpoints,
  transitions,
});

// ─── Chart Variable Color Map ─────────────────────────────────────────────────
//
// Deterministic color assignments for server metrics in the Highcharts chart system.
// These reference the MUI theme palette — both must stay in sync.
//
// Usage: import { chartVariableColors } from './theme';
//        const color = chartVariableColors['Cpu'];
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
