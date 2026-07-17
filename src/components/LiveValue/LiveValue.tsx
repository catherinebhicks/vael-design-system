import * as React from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material';

const flash = keyframes`
  0%   { background-color: var(--lv-flash); }
  100% { background-color: transparent; }
`;

const Wrap = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  fontFamily: theme.typography.overline?.fontFamily,
  fontVariantNumeric: 'tabular-nums',
  borderRadius: 4,
  padding: '0 4px',
  margin: '0 -4px',
}));

const Dot = styled('span')(({ theme }) => ({
  width: 7,
  height: 7,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 0 ${theme.palette.success.main}`,
  animation: `${keyframes`
    0% { box-shadow: 0 0 0 0 rgba(46,125,50,0.5); }
    70% { box-shadow: 0 0 0 5px rgba(46,125,50,0); }
    100% { box-shadow: 0 0 0 0 rgba(46,125,50,0); }
  `} 1.8s ease-out infinite`,
}));

export interface LiveValueProps {
  /** The value to display; flashes when it changes. */
  value: React.ReactNode;
  /** Show a pulsing "live" dot. */
  live?: boolean;
  /** Flash color on change (defaults to a soft brand tint). */
  flashColor?: string;
  sx?: SxProps<Theme>;
}

/**
 * LiveValue — a real-time value that briefly flashes when it updates and can
 * show a pulsing "live" indicator. For dashboards, tickers, and streaming metrics.
 * Tabular figures keep the width stable as digits change.
 */
export function LiveValue({ value, live = true, flashColor, sx }: LiveValueProps) {
  const [flashing, setFlashing] = React.useState(false);
  const first = React.useRef(true);

  React.useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setFlashing(true);
    const t = setTimeout(() => setFlashing(false), 600);
    return () => clearTimeout(t);
  }, [value]);

  return (
    <Wrap
      sx={[
        {
          ['--lv-flash' as string]: flashColor ?? 'rgba(25,118,210,0.18)',
          animation: flashing ? `${flash} 0.6s ease-out` : 'none',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {live && <Dot />}
      <Box component="span" sx={{ color: 'text.primary', fontWeight: 500 }}>
        {value}
      </Box>
    </Wrap>
  );
}

export default LiveValue;
