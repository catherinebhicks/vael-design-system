import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes, alpha } from '@mui/material/styles';

export type StatusKind = 'online' | 'busy' | 'away' | 'offline';

const STATUS_LABEL: Record<StatusKind, string> = {
  online: 'Online',
  busy: 'Busy',
  away: 'Away',
  offline: 'Offline',
};

const dotColor = (theme: import('@mui/material/styles').Theme, status: StatusKind) => {
  switch (status) {
    case 'online': return theme.palette.success.main;
    case 'busy': return theme.palette.error.main;
    case 'away': return theme.palette.warning.main;
    default: return theme.palette.text.disabled;
  }
};

const pulse = keyframes`
  0%   { box-shadow: 0 0 0 0 var(--sb-ring); }
  70%  { box-shadow: 0 0 0 5px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
`;

const Dot = styled('span', {
  shouldForwardProp: (p) => p !== 'status' && p !== 'pulse',
})<{ status: StatusKind; pulse?: boolean }>(({ theme, status, pulse: doPulse }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  flexShrink: 0,
  backgroundColor: dotColor(theme, status),
  ['--sb-ring' as string]: alpha(dotColor(theme, status), 0.5),
  ...(doPulse && status === 'online'
    ? { animation: `${pulse} 1.8s ease-out infinite` }
    : {}),
}));

export interface StatusBadgeProps {
  status: StatusKind;
  /** Override the default label ("Online" / "Busy" / …). */
  label?: string;
  /** Animate the dot (only meaningful for `online`). */
  pulse?: boolean;
}

/** StatusBadge — presence pill: a colored dot + label. */
export function StatusBadge({ status, label, pulse: doPulse = false }: StatusBadgeProps) {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
      <Dot status={status} pulse={doPulse} />
      <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1 }}>
        {label ?? STATUS_LABEL[status]}
      </Typography>
    </Box>
  );
}

export default StatusBadge;
