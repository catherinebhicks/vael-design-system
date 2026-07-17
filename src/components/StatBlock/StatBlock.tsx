import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface StatBlockProps {
  /** Small mono-uppercase label. */
  label: React.ReactNode;
  /** The headline figure. */
  value: React.ReactNode;
  /** Optional unit/suffix shown next to the value. */
  unit?: React.ReactNode;
  /** Optional delta indicator. */
  delta?: { value: React.ReactNode; direction: 'up' | 'down'; good?: boolean };
  /** Optional leading icon. */
  icon?: IconDefinition;
  /** Optional trailing visual (e.g. a <Sparkline/>). */
  visual?: React.ReactNode;
  bordered?: boolean;
  sx?: SxProps<Theme>;
}

/**
 * StatBlock — an infographic stat tile: mono-uppercase label, a large value,
 * an optional delta, and an optional trailing visual (drop a Sparkline in).
 * The building block for dashboards and case-study metric strips.
 */
export function StatBlock({
  label,
  value,
  unit,
  delta,
  icon,
  visual,
  bordered = false,
  sx,
}: StatBlockProps) {
  const deltaGood = delta ? (delta.good ?? delta.direction === 'up') : false;
  return (
    <Box
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          gap: 0.75,
          p: bordered ? 2 : 0,
          ...(bordered && {
            border: (t) => `1px solid ${t.palette.divider}`,
            borderRadius: 2,
            bgcolor: 'background.paper',
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {icon && (
          <Box sx={{ color: 'text.secondary', fontSize: 12 }}>
            <FontAwesomeIcon icon={icon} />
          </Box>
        )}
        <Typography
          sx={{
            fontFamily: (t) => t.typography.overline?.fontFamily,
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'text.secondary',
          }}
        >
          {label}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.75 }}>
          <Typography
            sx={{
              fontFamily: (t) => t.typography.h4.fontFamily,
              fontWeight: 600,
              fontSize: '1.75rem',
              lineHeight: 1,
              color: 'text.primary',
            }}
          >
            {value}
          </Typography>
          {unit && (
            <Typography variant="body2" color="text.secondary">
              {unit}
            </Typography>
          )}
        </Box>
        {visual}
      </Box>
      {delta && (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            fontSize: '0.75rem',
            color: (t) => (deltaGood ? t.palette.success.main : t.palette.error.main),
          }}
        >
          <FontAwesomeIcon icon={delta.direction === 'up' ? faArrowUp : faArrowDown} style={{ fontSize: '0.7em' }} />
          <span>{delta.value}</span>
        </Box>
      )}
    </Box>
  );
}

export default StatBlock;
