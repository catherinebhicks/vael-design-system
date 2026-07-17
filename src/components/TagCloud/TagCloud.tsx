import * as React from 'react';
import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material';

export interface TagCloudItem {
  label: string;
  /** Relative weight (frequency, proficiency). Scaled across the set. */
  weight: number;
  href?: string;
}

export interface TagCloudProps {
  items: TagCloudItem[];
  /** Smallest / largest font size in px. */
  minSize?: number;
  maxSize?: number;
  /** Tint heavier tags toward the accent color. */
  color?: string;
  sx?: SxProps<Theme>;
}

/**
 * TagCloud — a frequency-weighted skill/keyword cloud. Font size (and color
 * intensity) scale with each item's weight, so the dominant themes read first.
 */
export function TagCloud({ items, minSize = 13, maxSize = 30, color, sx }: TagCloudProps) {
  const weights = items.map((i) => i.weight);
  const min = Math.min(...weights);
  const max = Math.max(...weights);
  const span = max - min || 1;
  const scale = (w: number) => (w - min) / span; // 0..1

  return (
    <Box
      sx={[
        { display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 1.5, rowGap: 1 },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {items.map((item, i) => {
        const s = scale(item.weight);
        return (
          <Box
            key={i}
            component={item.href ? 'a' : 'span'}
            href={item.href}
            sx={{
              fontFamily: (t) => t.typography.h6.fontFamily,
              fontWeight: 400 + Math.round(s * 3) * 100,
              fontSize: minSize + s * (maxSize - minSize),
              lineHeight: 1.1,
              textDecoration: 'none',
              color: (t) => {
                const base = color ?? t.palette.primary.main;
                // interpolate muted → accent by weight
                return s < 0.34 ? t.palette.text.secondary : s < 0.67 ? alpha(base, 0.85) : base;
              },
              cursor: item.href ? 'pointer' : 'default',
            }}
          >
            {item.label}
          </Box>
        );
      })}
    </Box>
  );
}

export default TagCloud;
