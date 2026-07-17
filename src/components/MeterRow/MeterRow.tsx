import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material';

export interface MeterRowProps {
  /** Row label (mono, Blueprint voice). */
  label: React.ReactNode;
  /** Current value. */
  value: number;
  /** Maximum value (default 100). */
  max?: number;
  /** Fill color (defaults to primary.main). */
  color?: string;
  /** Text shown on the right (defaults to `value`/`max` or a percentage). */
  valueLabel?: React.ReactNode;
  /** Track/fill height. */
  height?: number;
  sx?: SxProps<Theme>;
}

/**
 * MeterRow — a labeled horizontal bar meter (a.k.a. SkillBar): label, track,
 * fill, and a value readout. Use for proficiency, budgets, quotas, coverage —
 * anything that reads as "X of a known maximum".
 */
export function MeterRow({
  label,
  value,
  max = 100,
  color,
  valueLabel,
  height = 8,
  sx,
}: MeterRowProps) {
  const theme = useTheme();
  const fill = color ?? theme.palette.primary.main;
  const pct = Math.max(0, Math.min(1, value / max));
  const readout = valueLabel ?? `${Math.round(pct * 100)}%`;
  const labelId = React.useId();

  return (
    <Box sx={[{ display: 'flex', flexDirection: 'column', gap: 0.5 }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 2 }}>
        <Typography
          id={labelId}
          sx={{
            fontFamily: (t) => t.typography.body2.fontFamily,
            fontSize: '0.8125rem',
            fontWeight: 500,
            color: 'text.primary',
          }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            fontFamily: (t) => t.typography.overline?.fontFamily,
            fontSize: '0.75rem',
            color: 'text.secondary',
          }}
        >
          {readout}
        </Typography>
      </Box>
      <Box
        role="meter"
        aria-labelledby={labelId}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuetext={typeof readout === 'string' ? readout : undefined}
        sx={{
          height,
          borderRadius: height / 2,
          backgroundColor: theme.palette.action.disabledBackground,
          overflow: 'hidden',
        }}
      >
        <Box sx={{ width: `${pct * 100}%`, height: '100%', borderRadius: height / 2, backgroundColor: fill }} />
      </Box>
    </Box>
  );
}

export default MeterRow;
