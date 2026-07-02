/**
 * Vael Design System — MUI theme (hand-authored)
 *
 * The "Blueprint / Engine-Room" aesthetic layered on MUI v7 — matching the Vael
 * case-study landing page so the two read as one product: IBM Plex Mono headings
 * + data/label roles, IBM Plex Sans body, blueprint surfaces, hairline borders,
 * tight (8px) geometry, and a blue focus glow — while keeping Vael's brand blue.
 * The landing page is the reference; this theme conforms to it.
 *
 * Light and dark modes share one set of typography / shape / shadows / component
 * overrides; only the palette differs. All surface/ink/line values come from the
 * shared `blueprint` token source (`vael/blueprint.ts`).
 *
 * Usage:
 *   import { theme } from 'vael-design-system';
 *   <ThemeProvider theme={theme}>...</ThemeProvider>
 *
 * IBM Plex must be loaded by the app (e.g. `import '@fontsource/ibm-plex-sans'`
 * and `import '@fontsource/ibm-plex-mono'`).
 */

import { createTheme } from '@mui/material/styles';
import type { Shadows, ThemeOptions } from '@mui/material/styles';
import { blueprint } from './blueprint';
import { components } from './components';

const mono = blueprint.font.mono;

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

// ─── Typography (IBM Plex Mono headings; IBM Plex Sans body) ──────────────────
// Matches the Vael landing page's engine-room voice: headings + data/label roles
// (h1–h6, overline, caption) use IBM Plex Mono; body copy and buttons use IBM
// Plex Sans. Heading tracking tightens with size (mono glyphs are wide) to echo
// the page's ramp (`.hero h1` −0.045em … `h2.big` −0.02em … `.panel h3`).
const typography: ThemeOptions['typography'] = {
  fontFamily: blueprint.font.sans,
  fontWeightLight: 400,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: { fontFamily: mono, fontSize: '3rem',     fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.04em' },  // 48
  h2: { fontFamily: mono, fontSize: '2.25rem',  fontWeight: 600, lineHeight: 1.2,  letterSpacing: '-0.03em' },  // 36
  h3: { fontFamily: mono, fontSize: '1.875rem', fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.025em' }, // 30
  h4: { fontFamily: mono, fontSize: '1.5rem',   fontWeight: 600, lineHeight: 1.3,  letterSpacing: '-0.02em' },  // 24
  h5: { fontFamily: mono, fontSize: '1.25rem',  fontWeight: 600, lineHeight: 1.35, letterSpacing: '-0.015em' }, // 20
  h6: { fontFamily: mono, fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.4,  letterSpacing: '-0.01em' },  // 18
  subtitle1: { fontSize: '1rem',     fontWeight: 500, lineHeight: 1.5 },
  subtitle2: { fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.5 },
  body1: { fontSize: '1rem',     fontWeight: 400, lineHeight: 1.6 },
  body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.55 },
  button: { fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.5, letterSpacing: 0, textTransform: 'none' as const },
  caption: { fontFamily: mono, fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.5 },
  overline: { fontFamily: mono, fontSize: '0.6875rem', fontWeight: 500, lineHeight: 1.5, letterSpacing: '0.14em', textTransform: 'uppercase' as const },
};

// ─── Component overrides (the "polish") ───────────────────────────────────────
// Each component's engine-room styling lives in ./components (palette-aware,
// shared light/dark). Matched to the landing page's `.d-*` demos.
const shape = { borderRadius: 8 };
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
    // Blueprint surfaces + ink (matches the landing page light theme).
    grey: gray,
    text: { primary: blueprint.light.ink, secondary: blueprint.light.dim, disabled: blueprint.light.faint },
    background: { default: blueprint.light.bg, paper: blueprint.light.panel },
    divider: blueprint.light.line,
    action: {
      active: blueprint.light.dim,
      hover: 'rgba(20,28,40,0.04)',
      selected: 'rgba(20,28,40,0.08)',
      disabled: 'rgba(20,28,40,0.26)',
      disabledBackground: 'rgba(20,28,40,0.12)',
      focus: 'rgba(20,28,40,0.12)',
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
    // Brighter blue accent for the near-black engine-room bg (site's dark --blue).
    primary:   { main: '#42a5f5', dark: '#1976d2', light: '#90caf9', contrastText: '#08131f' },
    secondary: { main: '#ce93d8', dark: '#ab47bc', light: '#f3e5f5', contrastText: 'rgba(0,0,0,0.87)' },
    error:     { main: '#f44336', dark: '#d32f2f', light: '#e57373', contrastText: '#ffffff' },
    warning:   { main: '#ffa726', dark: '#f57c00', light: '#ffb74d', contrastText: 'rgba(0,0,0,0.87)' },
    info:      { main: '#29b6f6', dark: '#0288d1', light: '#4fc3f7', contrastText: 'rgba(0,0,0,0.87)' },
    success:   { main: '#66bb6a', dark: '#388e3c', light: '#81c784', contrastText: 'rgba(0,0,0,0.87)' },
    grey: gray,
    text: { primary: blueprint.dark.ink, secondary: blueprint.dark.dim, disabled: blueprint.dark.faint },
    background: { default: blueprint.dark.bg, paper: blueprint.dark.panel },
    divider: blueprint.dark.line,
    action: {
      active: 'rgba(220,230,242,0.56)',
      hover: 'rgba(220,230,242,0.06)',
      selected: 'rgba(220,230,242,0.12)',
      disabled: 'rgba(220,230,242,0.30)',
      disabledBackground: 'rgba(220,230,242,0.12)',
      focus: 'rgba(220,230,242,0.12)',
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
