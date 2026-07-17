/**
 * Foundation tokens — the low-level scales that sit beneath the theme:
 * border, focus-ring, mono/code type, z-index, state-layer opacities,
 * semantic surfaces, shape, and a reduced-motion flag.
 *
 * These are exported as typed constants and mirrored into `design-tokens.json`
 * (W3C format) + `tokens.css` (CSS custom properties). The MUI-native groups
 * (zIndex, shape, transitions) are also applied in `theme.ts`.
 */

/** #67 — border / stroke widths (px). Border colors come from palette.divider + action. */
export const borderWidths = {
  none: 0,
  hairline: 1,
  thin: 1,
  thick: 2,
  heavy: 4,
} as const;

/** #68 — focus ring. A 2px brand-blue ring, offset 2px, drawn on :focus-visible. */
export const focusRing = {
  /** Ring color — brand blue at full strength. */
  color: '#1976d2',
  /** Ring thickness in px. */
  width: 2,
  /** Gap between the element and the ring in px. */
  offset: 2,
  /** Ready-to-use box-shadow value for a focus glow. */
  shadow: '0 0 0 2px #ffffff, 0 0 0 4px #1976d2',
} as const;

/** #69 — mono / code typography. IBM Plex Mono is the Blueprint engine-room voice. */
export const monoType = {
  fontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  /** Inline code. */
  code: { fontSize: '0.8125rem', lineHeight: 1.5, letterSpacing: 0 },
  /** Block code / pre. */
  block: { fontSize: '0.8125rem', lineHeight: 1.6 },
  /** Mono label / eyebrow (uppercase). */
  label: { fontSize: '0.6875rem', lineHeight: 1.4, letterSpacing: '0.06em', textTransform: 'uppercase' as const },
} as const;

/** #70 — z-index / layer scale. Matches MUI's defaults so overlays compose predictably. */
export const zIndex = {
  hide: -1,
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1300,
  popover: 1400,
  skipLink: 1500,
  toast: 1500,
  tooltip: 1600,
  // MUI-aligned aliases
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  snackbar: 1400,
} as const;

/** #71 — reduced-motion flag + the multiplier to apply when it's on (durations → 0). */
export const reducedMotion = {
  /** The media query to gate motion on. */
  query: '(prefers-reduced-motion: reduce)',
  /** Multiply every duration by this when reduce is requested. */
  durationScale: 0,
  /** A safe non-zero floor for essential motion (ms). */
  essentialDuration: 0.01,
} as const;

/** #72 — interactive state-layer opacity ramp (MUI `action.*` values, named). */
export const stateLayer = {
  hover: 0.04,
  hoverOpacity: 0.04,
  selected: 0.08,
  focus: 0.12,
  pressed: 0.12,
  dragged: 0.16,
  disabled: 0.38,
  disabledBackground: 0.12,
} as const;

/** #73 — semantic surface tokens. Named elevation surfaces above the page. */
export const surfaces = {
  /** The app canvas. */
  base: 'background.default',
  /** Cards, panels — one step up. */
  raised: 'background.paper',
  /** A subtly recessed area (wells, code blocks). */
  sunken: 'background.subtle',
  /** Menus, popovers, dialogs — floats above content. */
  overlay: 'background.paper',
  /** The darkest ink surface (inverse sections, footers). */
  ink: 'background.ink',
} as const;

/** #74 — shape / radius scale (px). Mirrors the Figma `Radius` collection. */
export const shapeScale = {
  none: 0,
  xs: 4,
  sm: 6,
  base: 8,
  md: 10,
  lg: 14,
  xl: 20,
  pill: 9999,
} as const;

export const foundationTokens = {
  borderWidths,
  focusRing,
  monoType,
  zIndex,
  reducedMotion,
  stateLayer,
  surfaces,
  shapeScale,
} as const;

export type FoundationTokens = typeof foundationTokens;
export default foundationTokens;
