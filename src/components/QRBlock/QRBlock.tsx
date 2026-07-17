import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface QRBlockProps {
  /** The value the QR encodes (also used to seed the placeholder pattern). */
  value: string;
  /** Caption shown under the code. */
  caption?: React.ReactNode;
  /** Module size in px. */
  size?: number;
  /** Foreground color (defaults to text.primary). */
  color?: string;
  /**
   * Pass a rendered QR (e.g. from a `qrcode` lib) to show a real scannable code.
   * When omitted, a deterministic placeholder pattern is drawn from `value`.
   */
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

// Tiny deterministic PRNG so the placeholder is stable for a given value.
function seeded(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * QRBlock — a QR code presentation block with caption, for print/deck handoffs
 * ("scan for the live prototype"). Provide a real code via `children`; without
 * one it renders a deterministic placeholder pattern so layouts read correctly.
 */
export function QRBlock({ value, caption, size = 132, color, children, sx }: QRBlockProps) {
  const grid = 21; // QR v1 module count
  const cells = React.useMemo(() => {
    const rand = seeded(value);
    const isFinder = (r: number, c: number) => {
      const inBox = (br: number, bc: number) => r >= br && r < br + 7 && c >= bc && c < bc + 7;
      return inBox(0, 0) || inBox(0, grid - 7) || inBox(grid - 7, 0);
    };
    return Array.from({ length: grid * grid }, (_, i) => {
      const r = Math.floor(i / grid);
      const c = i % grid;
      if (isFinder(r, c)) {
        const br = r >= grid - 7 ? grid - 7 : 0;
        const bc = c >= grid - 7 ? grid - 7 : 0;
        const rr = r - br;
        const cc = c - bc;
        const ring = rr === 0 || rr === 6 || cc === 0 || cc === 6;
        const core = rr >= 2 && rr <= 4 && cc >= 2 && cc <= 4;
        return ring || core;
      }
      return rand() > 0.5;
    });
  }, [value]);

  return (
    <Box sx={[{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 1 }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Box
        sx={{
          width: size,
          height: size,
          p: 1,
          borderRadius: 1.5,
          bgcolor: 'background.paper',
          border: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        {children ?? (
          <Box
            aria-label={`QR code for ${value}`}
            role="img"
            sx={{
              width: '100%',
              height: '100%',
              display: 'grid',
              gridTemplateColumns: `repeat(${grid}, 1fr)`,
              gridTemplateRows: `repeat(${grid}, 1fr)`,
            }}
          >
            {cells.map((on, i) => (
              <Box key={i} sx={{ backgroundColor: on ? (color ?? 'text.primary') : 'transparent' }} />
            ))}
          </Box>
        )}
      </Box>
      {caption && (
        <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center' }}>
          {caption}
        </Typography>
      )}
    </Box>
  );
}

export default QRBlock;
