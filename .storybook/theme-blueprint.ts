import { create } from 'storybook/theming';
import { blueprint } from '../vael/blueprint';

/**
 * Storybook manager (chrome) themes — Blueprint / Engine-Room.
 * Two variants so the sidebar/toolbar flip with the preview via storybook-dark-mode.
 * Values mirror the case-study landing page so the frame reads as the same product.
 */

const L = blueprint.light;
const D = blueprint.dark;
const fontBase = blueprint.font.sans;
const fontCode = blueprint.font.mono;

// node-dot + mono wordmark (Storybook renders brandTitle as HTML).
const brandTitle = (muted: string) =>
  `<span style="display:inline-flex;align-items:center;gap:9px;font-family:${fontCode.replace(/"/g, "'")};font-weight:600;font-size:13px">` +
  `<span style="width:8px;height:8px;border:1.5px solid ${L.blue};border-radius:50%;display:inline-block;box-shadow:0 0 8px ${L.glow}"></span>` +
  `Vael <span style="color:${muted};font-weight:400;letter-spacing:0.02em">design system</span></span>`;

const brand = {
  brandUrl: 'https://vael-case-study.vercel.app',
  brandTarget: '_blank',
};

export const blueprintLight = create({
  base: 'light',
  colorPrimary: L.blue,
  colorSecondary: L.blue2,
  appBg: L.bg,
  appContentBg: L.panel,
  appPreviewBg: L.bg,
  appBorderColor: L.line2,
  appBorderRadius: 8,
  textColor: L.ink,
  textInverseColor: '#ffffff',
  textMutedColor: L.faint,
  barBg: L.panel,
  barTextColor: L.dim,
  barSelectedColor: L.blue,
  barHoverColor: L.blue,
  inputBg: L.panel,
  inputBorder: L.line2,
  inputTextColor: L.ink,
  inputBorderRadius: 8,
  fontBase,
  fontCode,
  brandTitle: brandTitle(L.faint),
  ...brand,
});

export const blueprintDark = create({
  base: 'dark',
  colorPrimary: D.blue,
  colorSecondary: D.blue2,
  appBg: D.bg,
  appContentBg: D.panel,
  appPreviewBg: D.bg,
  appBorderColor: D.line2,
  appBorderRadius: 8,
  textColor: D.ink,
  textInverseColor: D.bg,
  textMutedColor: D.faint,
  barBg: D.panel,
  barTextColor: D.dim,
  barSelectedColor: D.blue,
  barHoverColor: D.blue,
  inputBg: D.panel2,
  inputBorder: D.line2,
  inputTextColor: D.ink,
  inputBorderRadius: 8,
  fontBase,
  fontCode,
  brandTitle: brandTitle(D.dim),
  ...brand,
});
