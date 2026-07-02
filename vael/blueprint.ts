/**
 * Vael — Blueprint / Engine-Room tokens
 *
 * The single source of truth for the "Blueprint" visual language shared by the
 * design system's MUI theme (`vael/theme.ts`) and the Storybook chrome + docs
 * (`.storybook/*`). Values mirror the Vael case-study landing page exactly so a
 * visitor clicking "Open the Storybook →" feels no seam.
 *
 * Brand primary (#1976d2 / #1565c0 / #42a5f5) is common to both looks.
 */

export interface BlueprintMode {
  bg: string;
  grid: string;
  panel: string;
  panel2: string;
  line: string;
  line2: string;
  ink: string;
  dim: string;
  faint: string;
  blue: string;
  blue2: string;
  blueSoft: string;
  glow: string;
  signal: string;
  codebg: string;
  codeink: string;
  shadow: string;
}

export const blueprint: {
  light: BlueprintMode;
  dark: BlueprintMode;
  font: { sans: string; mono: string };
  code: { key: string; str: string; cm: string };
  gridSize: string;
} = {
  light: {
    bg: '#e9eff7',
    grid: '#d2ddec',
    panel: '#ffffff',
    panel2: '#f4f8ff',
    line: '#dbe4f0',
    line2: '#c4d3e6',
    ink: '#141c28',
    dim: '#54637a',
    faint: '#586780',
    blue: '#1565c0',
    blue2: '#1976d2',
    blueSoft: '#42a5f5',
    glow: 'rgba(21, 101, 192, 0.16)',
    signal: '#b8401b',
    codebg: '#0e141c',
    codeink: '#dce6f2',
    shadow: '0 18px 40px -24px rgba(20, 28, 40, 0.35)',
  },
  dark: {
    bg: '#0a0e14',
    grid: '#1b2637',
    panel: '#111925',
    panel2: '#0e141c',
    line: '#1e2a3a',
    line2: '#26364a',
    ink: '#dce6f2',
    dim: '#8a9bb2',
    faint: '#7688a0',
    blue: '#42a5f5',
    blue2: '#1976d2',
    blueSoft: '#42a5f5',
    glow: 'rgba(66, 165, 245, 0.35)',
    signal: '#ff8a5b',
    codebg: '#0b1119',
    codeink: '#dce6f2',
    shadow: '0 24px 50px -28px rgba(0, 0, 0, 0.7)',
  },
  // IBM Plex — self-hosted via @fontsource in Storybook; apps load it themselves.
  font: {
    sans: '"IBM Plex Sans", "Helvetica", "Arial", sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
  },
  // Code-block syntax colors (match the site's .codeblk .key/.str/.cm).
  code: { key: '#8fb6e8', str: '#7ee7b0', cm: '#6b7891' },
  // Blueprint grid cell size (two 1px linear-gradients).
  gridSize: 'clamp(28px, 3.4vw, 44px)',
};

/**
 * CSS text for the blueprint grid background at a given mode's grid color.
 * Usage: `backgroundImage: gridBackground(blueprint.light.grid)`.
 */
export const gridBackground = (gridColor: string): string =>
  `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`;

/**
 * The site's CSS custom properties for a given mode, keyed exactly as the
 * landing page (`--bg`, `--ink`, `--blue`, …) so the Storybook docs CSS can
 * reuse the site's stylesheet conventions verbatim and toggle with the theme.
 */
export function blueprintCssVars(mode: 'light' | 'dark'): Record<string, string> {
  const t = blueprint[mode];
  return {
    '--bg': t.bg,
    '--grid': t.grid,
    '--panel': t.panel,
    '--panel-2': t.panel2,
    '--line': t.line,
    '--line-2': t.line2,
    '--ink': t.ink,
    '--dim': t.dim,
    '--faint': t.faint,
    '--blue': t.blue,
    '--blue-2': t.blue2,
    '--blue-soft': t.blueSoft,
    '--glow': t.glow,
    '--signal': t.signal,
    '--codebg': t.codebg,
    '--codeink': t.codeink,
    '--shadow': t.shadow,
    '--sans': blueprint.font.sans,
    '--mono': blueprint.font.mono,
    '--grid-size': blueprint.gridSize,
    '--code-key': blueprint.code.key,
    '--code-str': blueprint.code.str,
    '--code-cm': blueprint.code.cm,
  };
}

export default blueprint;
