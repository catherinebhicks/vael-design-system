import * as React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material';

export interface WaffleChartProps {
  /** Proportion to fill: a 0–1 fraction, or a percentage 0–100. */
  value: number;
  rows?: number;
  cols?: number;
  /** Cell size in px. */
  cell?: number;
  gap?: number;
  color?: string;
  rounded?: boolean;
  'aria-label'?: string;
  sx?: SxProps<Theme>;
}

/**
 * WaffleChart — a dot-array / pictograph grid (rows × cols cells) filled to
 * represent a proportion. Reads a percentage as "N of 100 squares", which is
 * easier to eyeball than a bar for part-to-whole framing.
 */
export function WaffleChart({
  value,
  rows = 10,
  cols = 10,
  cell = 12,
  gap = 3,
  color,
  rounded = true,
  sx,
  ...rest
}: WaffleChartProps) {
  const theme = useTheme();
  const fill = color ?? theme.palette.primary.main;
  const total = rows * cols;
  const fraction = value > 1 ? value / 100 : value;
  const filled = Math.round(Math.max(0, Math.min(1, fraction)) * total);

  return (
    <Box
      role="img"
      aria-label={rest['aria-label'] ?? `${Math.round((filled / total) * 100)}%`}
      sx={[
        {
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, ${cell}px)`,
          gridAutoRows: `${cell}px`,
          gap: `${gap}px`,
          width: 'fit-content',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {Array.from({ length: total }).map((_, i) => {
        // fill column-major from bottom-left for a "stacking" read
        const col = i % cols;
        const row = rows - 1 - Math.floor(i / cols);
        const order = col * rows + row;
        return (
          <Box
            key={i}
            sx={{
              width: cell,
              height: cell,
              borderRadius: rounded ? '2px' : 0,
              backgroundColor: order < filled ? fill : theme.palette.action.disabledBackground,
            }}
          />
        );
      })}
    </Box>
  );
}

export default WaffleChart;
