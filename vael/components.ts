/**
 * Vael — MUI component overrides (the "polish"), palette-aware and shared across
 * light + dark. This is where each component is styled to match the Vael
 * case-study landing page's engine-room treatment: mono titles/labels, hairline
 * frames, a blue focus glow, and per-component state colors. All values derive
 * from `theme.palette` / `theme.shadows` / the blueprint `mono` font so both
 * modes follow automatically. The landing page (`site/app/globals.css` `.d-*`)
 * is the reference.
 */

import type { ThemeOptions } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation'; // adds MuiTimeline* slots to Components
import { blueprint } from './blueprint';

const mono = blueprint.font.mono;

/** Blueprint blue focus glow, ~16% alpha (hex 29) — mirrors the site's :focus. */
const glow = (main: string) => `0 0 0 3px ${main}29`;

export const components: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: { borderRadius: 8, textTransform: 'none', fontWeight: 600, paddingInline: 16, boxShadow: 'none' },
      sizeSmall: { paddingBlock: 5, paddingInline: 12, borderRadius: 7 },
      sizeLarge: { paddingBlock: 10, paddingInline: 20 },
      containedPrimary: ({ theme }) => ({
        boxShadow: theme.shadows[1],
        '&:hover': { boxShadow: theme.shadows[2] },
      }),
      outlined: ({ theme }) => ({ borderColor: theme.palette.divider }),
    },
  },
  // Blueprint blue focus glow on all focusable surfaces (mirrors site :focus).
  MuiButtonBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-focusVisible': { boxShadow: glow(theme.palette.primary.main) },
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.divider },
        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.text.disabled },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderWidth: 1, borderColor: theme.palette.primary.main },
        '&.Mui-focused': { boxShadow: glow(theme.palette.primary.main) },
      }),
    },
  },
  MuiPaper: {
    styleOverrides: { root: { backgroundImage: 'none' }, rounded: { borderRadius: 14 } },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 14,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[2],
      }),
    },
  },
  // Card headers read as blueprint "window-chrome" labels: mono, on a hairline.
  MuiCardHeader: {
    styleOverrides: {
      title: { fontFamily: mono, fontSize: '0.9375rem', fontWeight: 500, letterSpacing: '-0.005em' },
      subheader: ({ theme }) => ({ fontFamily: mono, fontSize: '0.75rem', color: theme.palette.text.secondary }),
    },
  },
  MuiChip: { styleOverrides: { root: { borderRadius: 8, fontWeight: 500 } } },
  MuiAlert: { styleOverrides: { root: { borderRadius: 10 } } },
  // Inverted tooltip (ink surface, bg-colored text), mono — matches site .d-tooltip.
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }) => ({
        borderRadius: 6,
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
        fontFamily: mono,
        fontSize: '0.6875rem',
        padding: '6px 10px',
      }),
      arrow: ({ theme }) => ({ color: theme.palette.text.primary }),
    },
  },
  // Table headers → mono, uppercase, muted (matches site .d-table th).
  MuiTableHead: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiTableCell-root': {
          backgroundColor: theme.palette.background.default,
          fontFamily: mono,
          fontWeight: 500,
          fontSize: '0.6875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: theme.palette.text.secondary,
        },
      }),
    },
  },

  // ─── Batch 1: mono titles/labels (the engine-room voice on every title slot) ──
  // Accordion summary = a panel title → mono (covers a bare <Typography> child too).
  MuiAccordionSummary: {
    styleOverrides: {
      content: {
        fontFamily: mono,
        '& .MuiTypography-root': { fontFamily: mono, fontWeight: 500, letterSpacing: '-0.005em' },
      },
    },
  },
  // Tab labels → mono, sentence-case; selected color handled by MUI textColor.
  MuiTab: {
    styleOverrides: {
      root: { fontFamily: mono, textTransform: 'none', fontWeight: 500, letterSpacing: 0, minHeight: 44 },
    },
  },
  // Stepper step labels → mono.
  MuiStepLabel: {
    styleOverrides: {
      label: { fontFamily: mono, fontSize: '0.8125rem', fontWeight: 500 },
    },
  },
  // Form + floating input labels → mono (site .d-field label).
  MuiFormLabel: {
    styleOverrides: { root: { fontFamily: mono, fontSize: '0.8125rem' } },
  },
  // List section headers → mono uppercase label.
  MuiListSubheader: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: mono,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        fontSize: '0.6875rem',
        fontWeight: 500,
        color: theme.palette.text.secondary,
      }),
    },
  },
  // Alert title → mono uppercase severity label (site .d-alert b).
  MuiAlertTitle: {
    styleOverrides: {
      root: { fontFamily: mono, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.6875rem', fontWeight: 600 },
    },
  },
  // Menu / autocomplete rows → mono (site .d-aclist li, .d-drawerrow).
  MuiMenuItem: {
    styleOverrides: { root: { fontFamily: mono, fontSize: '0.8125rem' } },
  },
  // Timeline labels + times → mono (site .d-tlrow b + time).
  MuiTimelineContent: {
    styleOverrides: {
      root: { fontFamily: mono, fontSize: '0.8125rem', '& .MuiTypography-root': { fontFamily: mono } },
    },
  },
  MuiTimelineOppositeContent: {
    styleOverrides: {
      root: ({ theme }) => ({ fontFamily: mono, fontSize: '0.75rem', color: theme.palette.text.secondary }),
    },
  },
  // Breadcrumb trail reads as a path → mono (links inherit; current-page Typography via descendant).
  MuiBreadcrumbs: {
    styleOverrides: {
      root: { fontFamily: mono, fontSize: '0.8125rem', '& .MuiTypography-root': { fontFamily: mono } },
    },
  },

  // ─── Batch 2: hairline frames on surfaces (site .d-dialog/.d-drawer/.d-aclist) ─
  MuiDialog: {
    styleOverrides: {
      paper: ({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        backgroundImage: 'none',
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundImage: 'none',
        borderColor: theme.palette.divider,
      }),
    },
  },
  // Menu / Select / Popover surfaces → hairline card, radius 10 (site .d-aclist).
  MuiMenu: {
    styleOverrides: {
      paper: ({ theme }) => ({ border: `1px solid ${theme.palette.divider}`, borderRadius: 10 }),
    },
  },
  MuiPopover: {
    styleOverrides: {
      paper: ({ theme }) => ({ border: `1px solid ${theme.palette.divider}`, borderRadius: 10 }),
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      paper: ({ theme }) => ({ border: `1px solid ${theme.palette.divider}`, borderRadius: 10 }),
    },
  },
  // Snackbar → inverted ink surface, mono (site .d-snack).
  MuiSnackbarContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
        fontFamily: mono,
        fontSize: '0.8125rem',
        borderRadius: 10,
      }),
    },
  },
  // AppBar → flat with a hairline bottom rule (site .topbar); no colored elevation.
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        backgroundImage: 'none',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
    },
  },

  // ─── Batch 3: selection controls (blue fills; glow inherited from MuiButtonBase) ─
  // Switch → solid blue track when on, clean thumb (site .d-switch).
  MuiSwitch: {
    styleOverrides: {
      switchBase: ({ theme }) => ({
        '&.Mui-checked + .MuiSwitch-track': { opacity: 1, backgroundColor: theme.palette.primary.main },
      }),
      thumb: { boxShadow: '0 1px 3px rgba(0,0,0,0.35)' },
    },
  },
  // Slider → blue accent (default) with a blueprint glow on the thumb (site .d-slider).
  MuiSlider: {
    styleOverrides: {
      thumb: ({ theme }) => ({
        '&:hover, &.Mui-focusVisible': { boxShadow: `0 0 0 6px ${theme.palette.primary.main}29` },
      }),
    },
  },

  // ─── Batch 4: data / nav component states ────────────────────────────────────
  // Pagination → mono, hairline-bordered, blue-filled when selected (site .d-pag).
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: mono,
        fontSize: '0.8125rem',
        borderRadius: 8,
        border: `1px solid ${theme.palette.divider}`,
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          borderColor: theme.palette.primary.main,
        },
        '&.Mui-selected:hover': { backgroundColor: theme.palette.primary.dark },
      }),
    },
  },
  // Badge count → mono (site .d-badge i).
  MuiBadge: {
    styleOverrides: { badge: { fontFamily: mono, fontWeight: 500 } },
  },
  // Avatar initials → mono (site .d-avatar).
  MuiAvatar: {
    styleOverrides: { root: { fontFamily: mono, fontWeight: 500 } },
  },
  // Progress bar → rounded blue (site aesthetic).
  MuiLinearProgress: {
    styleOverrides: { root: { borderRadius: 4 }, bar: { borderRadius: 4 } },
  },
  // Stepper connector → hairline (site .d-step separator).
  MuiStepConnector: {
    styleOverrides: { line: ({ theme }) => ({ borderColor: theme.palette.divider }) },
  },
};

export default components;
