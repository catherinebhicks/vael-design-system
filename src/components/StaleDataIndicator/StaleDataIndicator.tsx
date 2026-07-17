import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTriangleExclamation, faRotate } from '@fortawesome/free-solid-svg-icons';

export interface StaleDataIndicatorProps {
  /** Seconds since the data last updated. */
  ageSeconds: number;
  /** Age (s) past which data reads as "stale" (warning). */
  staleAfter?: number;
  /** Age (s) past which data reads as "expired" (error). */
  expiredAfter?: number;
  /** Called when the refresh affordance is clicked. */
  onRefresh?: () => void;
  /** Fresh-state label prefix. */
  label?: string;
  sx?: SxProps<Theme>;
}

function ago(s: number): string {
  if (s < 60) return `${Math.round(s)}s ago`;
  if (s < 3600) return `${Math.round(s / 60)}m ago`;
  if (s < 86400) return `${Math.round(s / 3600)}h ago`;
  return `${Math.round(s / 86400)}d ago`;
}

/**
 * StaleDataIndicator — communicates data freshness: fresh (✓), stale (⚠ warning),
 * or expired (error), with a relative timestamp and an optional refresh action.
 * For dashboards and any cached/polled view where age matters.
 */
export function StaleDataIndicator({
  ageSeconds,
  staleAfter = 60,
  expiredAfter = 300,
  onRefresh,
  label = 'Updated',
  sx,
}: StaleDataIndicatorProps) {
  const level = ageSeconds >= expiredAfter ? 'expired' : ageSeconds >= staleAfter ? 'stale' : 'fresh';
  const map = {
    fresh: { icon: faCircleCheck, color: 'success.main' as const },
    stale: { icon: faTriangleExclamation, color: 'warning.main' as const },
    expired: { icon: faTriangleExclamation, color: 'error.main' as const },
  }[level];

  return (
    <Box
      sx={[
        { display: 'inline-flex', alignItems: 'center', gap: 0.75, color: 'text.secondary' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box sx={{ color: map.color, fontSize: 12, display: 'inline-flex' }}>
        <FontAwesomeIcon icon={map.icon} />
      </Box>
      <Typography variant="caption" sx={{ color: level === 'fresh' ? 'text.secondary' : map.color }}>
        {label} {ago(ageSeconds)}
      </Typography>
      {onRefresh && (
        <Box
          component="button"
          type="button"
          aria-label="Refresh"
          onClick={onRefresh}
          sx={{
            border: 0,
            background: 'transparent',
            p: 0.25,
            cursor: 'pointer',
            color: 'text.secondary',
            display: 'inline-flex',
            '&:hover': { color: 'primary.main' },
          }}
        >
          <FontAwesomeIcon icon={faRotate} style={{ fontSize: '0.75rem' }} />
        </Box>
      )}
    </Box>
  );
}

export default StaleDataIndicator;
