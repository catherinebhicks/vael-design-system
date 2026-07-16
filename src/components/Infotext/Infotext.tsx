import * as React from 'react';
import { Box, Typography } from '@mui/material';
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

const toneColor: Record<NonNullable<InfotextProps['tone']>, string> = {
  default: 'text.secondary',
  muted: 'text.disabled',
  error: 'error.main',
  success: 'success.main',
  warning: 'warning.main',
};

/**
 * Infotext — inline helper text (below a field, beside a label, under a control).
 * Mono, muted by default, with an optional leading info glyph. For form-field
 * helper text bound to a field's aria-describedby, prefer MUI FormHelperText.
 */
export function Infotext({ children, icon = faCircleInfo, tone = 'default', sx, ...rest }: InfotextProps) {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, color: toneColor[tone] }}>
      {icon && <FontAwesomeIcon icon={icon} style={{ fontSize: '0.8em', opacity: 0.85 }} />}
      <Typography variant="caption" component="span" color="inherit" sx={sx} {...rest}>
        {children}
      </Typography>
    </Box>
  );
}

export default Infotext;
