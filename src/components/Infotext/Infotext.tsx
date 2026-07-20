import * as React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface InfotextProps extends Omit<TypographyProps, 'children'> {
  /** The helper text to show. */
  children: React.ReactNode;
  /** Show a leading info glyph. Pass an IconDefinition to override, or false to hide. */
  icon?: IconDefinition | false;
  /** Tone of the text — maps to a theme text/severity color. */
  tone?: 'default' | 'muted' | 'error' | 'success' | 'warning';
}

/**
 * AA-compliant tone colors. `muted` and `warning` are tuned to clear WCAG AA
 * (≥4.5:1) for small text in both modes — the raw `text.disabled` and
 * `warning.main` fail on light backgrounds (2.68:1 and 3.08:1). Kept in sync
 * 1:1 with the Vael Figma tokens `text/muted-aa` and `warning/on-tint`.
 */
const AA = {
  muted: { light: '#737373', dark: '#808080' },
  warning: { light: '#b15000', dark: '#ffa726' },
} as const;

function toneColor(tone: NonNullable<InfotextProps['tone']>, mode: 'light' | 'dark'): string {
  switch (tone) {
    case 'muted':
      return AA.muted[mode];
    case 'warning':
      return AA.warning[mode];
    case 'error':
      return 'error.main';
    case 'success':
      return 'success.main';
    default:
      return 'text.secondary';
  }
}

/**
 * Infotext — inline helper text (below a field, beside a label, under a control).
 * Mono, muted by default, with an optional leading info glyph. For form-field
 * helper text bound to a field's aria-describedby, prefer MUI FormHelperText.
 */
export function Infotext({ children, icon = faCircleInfo, tone = 'default', sx, ...rest }: InfotextProps) {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, color: toneColor(tone, theme.palette.mode) }}>
      {icon && <FontAwesomeIcon icon={icon} style={{ fontSize: '0.8em', opacity: 0.85 }} />}
      <Typography variant="caption" component="span" color="inherit" sx={sx} {...rest}>
        {children}
      </Typography>
    </Box>
  );
}

export default Infotext;
