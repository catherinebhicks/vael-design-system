import React from 'react';
import { Box } from '@mui/material';

// A compact delta pill: ▲ +12% (good) / ▼ −3% (bad). Tinted from the palette.
// `positiveIsGood=false` flips the coloring for metrics where down is better
// (e.g. error rate, latency).

export interface TrendBadgeProps {
  /** The delta value, e.g. 12.5 or -3.2. Sign drives the arrow direction. */
  value: number;
  /** Unit shown after the value. Defaults to '%'. */
  suffix?: string;
  /** Whether an increase is a good thing. Defaults to true. */
  positiveIsGood?: boolean;
  size?: 'small' | 'medium';
  className?: string;
}

export function TrendBadge({
  value,
  suffix = '%',
  positiveIsGood = true,
  size = 'small',
  className,
}: TrendBadgeProps) {
  const up = value > 0;
  const flat = value === 0;
  const good = flat ? null : up === positiveIsGood;
  const arrow = flat ? '→' : up ? '▲' : '▼';
  const paletteKey = good === null ? 'grey' : good ? 'success' : 'error';
  const direction = flat ? 'no change' : up ? 'increase' : 'decrease';
  const label = flat ? 'No change' : `${Math.abs(value)}${suffix} ${direction}`;

  return (
    <Box
      component="span"
      className={className}
      role="img"
      aria-label={label}
      sx={(theme) => {
        const tint =
          paletteKey === 'grey'
            ? { bg: theme.palette.action.hover, fg: theme.palette.text.secondary }
            : {
                bg: (theme.palette[paletteKey] as { main: string }).main + '1f',
                fg: (theme.palette[paletteKey] as { dark: string }).dark,
              };
        return {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.5,
          borderRadius: 999,
          fontWeight: 600,
          lineHeight: 1,
          whiteSpace: 'nowrap',
          fontSize: size === 'small' ? '0.75rem' : '0.8125rem',
          padding: size === 'small' ? '3px 8px' : '4px 10px',
          backgroundColor: tint.bg,
          color: tint.fg,
        };
      }}
    >
      <Box component="span" aria-hidden sx={{ fontSize: '0.7em' }}>
        {arrow}
      </Box>
      {up ? '+' : ''}
      {value}
      {suffix}
    </Box>
  );
}

export default TrendBadge;
