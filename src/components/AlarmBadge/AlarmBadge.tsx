import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { alpha, keyframes } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTriangleExclamation, faBell, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

export type AlarmLevel = 'ok' | 'warning' | 'critical';

export interface AlarmThreshold {
  /** Value at or above which this level applies. */
  at: number;
  level: AlarmLevel;
}

export interface AlarmBadgeProps {
  /** The measured value. */
  value: number;
  /** Ascending thresholds; the highest matched wins. Defaults derive from `warnAt`/`critAt`. */
  thresholds?: AlarmThreshold[];
  warnAt?: number;
  critAt?: number;
  /** Unit suffix shown after the value. */
  unit?: React.ReactNode;
  /** Label before the value. */
  label?: React.ReactNode;
  /** Pulse when critical. */
  pulse?: boolean;
  sx?: SxProps<Theme>;
}

const levelMeta: Record<AlarmLevel, { icon: typeof faBell; color: (t: Theme) => string }> = {
  ok: { icon: faCircleCheck, color: (t) => t.palette.success.main },
  warning: { icon: faTriangleExclamation, color: (t) => t.palette.warning.main },
  critical: { icon: faCircleExclamation, color: (t) => t.palette.error.main },
};

const pulseKf = keyframes`
  0% { box-shadow: 0 0 0 0 var(--alarm-ring); }
  70% { box-shadow: 0 0 0 6px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
`;

/**
 * AlarmBadge — a threshold-escalating status badge: the value's color and icon
 * escalate ok → warning → critical as it crosses thresholds, with an optional
 * pulse at critical. For monitoring, SLAs, and alerting surfaces.
 */
export function AlarmBadge({
  value,
  thresholds,
  warnAt,
  critAt,
  unit,
  label,
  pulse = true,
  sx,
}: AlarmBadgeProps) {
  const derived: AlarmThreshold[] =
    thresholds ??
    [
      { at: -Infinity, level: 'ok' as const },
      ...(warnAt != null ? [{ at: warnAt, level: 'warning' as const }] : []),
      ...(critAt != null ? [{ at: critAt, level: 'critical' as const }] : []),
    ];
  const level = derived
    .filter((t) => value >= t.at)
    .sort((a, b) => a.at - b.at)
    .pop()?.level ?? 'ok';
  const meta = levelMeta[level];

  return (
    <Box
      sx={[
        (t) => ({
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.75,
          px: 1,
          py: 0.5,
          borderRadius: 1,
          fontFamily: t.typography.overline?.fontFamily,
          fontVariantNumeric: 'tabular-nums',
          color: meta.color(t),
          backgroundColor: alpha(meta.color(t), 0.1),
          border: `1px solid ${alpha(meta.color(t), 0.3)}`,
          ['--alarm-ring' as string]: alpha(meta.color(t), 0.5),
          ...(pulse && level === 'critical' ? { animation: `${pulseKf} 1.6s ease-out infinite` } : {}),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <FontAwesomeIcon icon={meta.icon} />
      {label && (
        <Typography component="span" sx={{ fontSize: '0.6875rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'inherit' }}>
          {label}
        </Typography>
      )}
      <Box component="span" sx={{ fontWeight: 600, fontSize: '0.8125rem' }}>
        {value}
        {unit}
      </Box>
    </Box>
  );
}

export default AlarmBadge;
