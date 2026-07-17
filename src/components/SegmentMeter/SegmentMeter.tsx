import * as React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material';

export interface SegmentMeterProps {
  /** Number of filled segments (or a 0–1 fraction of `segments`). */
  value: number;
  /** Total number of segments. */
  segments?: number;
  /** Fill color (defaults to primary.main). */
  color?: string;
  /** Segment height in px. */
  height?: number;
  /** Round the segment ends. */
  rounded?: boolean;
  'aria-label'?: string;
  sx?: SxProps<Theme>;
}

/**
 * SegmentMeter — a discrete unit meter: N segments, the first `value` filled.
 * Good for ratings, capacity, signal strength, or step progress where a
 * continuous bar would over-imply precision.
 */
export function SegmentMeter({
  value,
  segments = 5,
  color,
  height = 8,
  rounded = false,
  sx,
  ...rest
}: SegmentMeterProps) {
  const theme = useTheme();
  const fill = color ?? theme.palette.primary.main;
  const filled = value <= 1 && !Number.isInteger(value) ? Math.round(value * segments) : Math.round(value);
  const clamped = Math.max(0, Math.min(segments, filled));

  return (
    <Box
      role="meter"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={segments}
      aria-label={rest['aria-label'] ?? 'segment meter'}
      sx={[{ display: 'inline-flex', gap: 0.5, alignItems: 'center' }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {Array.from({ length: segments }).map((_, i) => (
        <Box
          key={i}
          sx={{
            flex: 1,
            minWidth: height,
            height,
            borderRadius: rounded ? height / 2 : 0.5,
            backgroundColor: i < clamped ? fill : theme.palette.action.disabledBackground,
          }}
        />
      ))}
    </Box>
  );
}

export default SegmentMeter;
