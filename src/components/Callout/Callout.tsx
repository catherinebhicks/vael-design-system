import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faLightbulb,
  faTriangleExclamation,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type CalloutTone = 'note' | 'tip' | 'warning' | 'success' | 'neutral';

const toneMap: Record<CalloutTone, { icon: IconDefinition; color: (t: Theme) => string }> = {
  note: { icon: faCircleInfo, color: (t) => t.palette.info.main },
  tip: { icon: faLightbulb, color: (t) => t.palette.primary.main },
  warning: { icon: faTriangleExclamation, color: (t) => t.palette.warning.main },
  success: { icon: faCircleCheck, color: (t) => t.palette.success.main },
  neutral: { icon: faCircleInfo, color: (t) => t.palette.text.secondary },
};

export interface CalloutProps {
  tone?: CalloutTone;
  /** Optional bold lead-in (mono, in the Blueprint voice). */
  title?: React.ReactNode;
  children: React.ReactNode;
  /** Override the tone's default icon, or false to hide. */
  icon?: IconDefinition | false;
  sx?: SxProps<Theme>;
}

/**
 * Callout — an inline emphasis panel for asides, tips, and non-blocking notes
 * inside body content (docs, forms, long pages). Unlike Alert it isn't a
 * status message tied to an action; it's editorial. Left accent bar + tinted
 * surface keyed to the tone.
 */
export function Callout({ tone = 'note', title, children, icon, sx }: CalloutProps) {
  const t = toneMap[tone];
  const glyph = icon === undefined ? t.icon : icon;
  return (
    <Box
      sx={[
        {
          display: 'flex',
          gap: 1.25,
          p: 1.5,
          pl: 1.75,
          borderRadius: 1,
          borderLeft: (theme) => `3px solid ${t.color(theme)}`,
          backgroundColor: (theme) => alpha(t.color(theme), 0.07),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {glyph && (
        <Box sx={{ color: t.color, mt: '2px', flexShrink: 0 }}>
          <FontAwesomeIcon icon={glyph} />
        </Box>
      )}
      <Box>
        {title && (
          <Typography
            sx={{
              fontFamily: (theme) => theme.typography.overline?.fontFamily,
              fontWeight: 600,
              fontSize: '0.6875rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: t.color,
              mb: 0.5,
            }}
          >
            {title}
          </Typography>
        )}
        <Typography variant="body2" color="text.primary">
          {children}
        </Typography>
      </Box>
    </Box>
  );
}

export default Callout;
