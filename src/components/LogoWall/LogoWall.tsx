import * as React from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface LogoItem {
  /** Logo image URL. If omitted, the `name` is rendered as a wordmark. */
  src?: string;
  name: string;
  href?: string;
}

export interface LogoWallProps {
  logos: LogoItem[];
  /** Columns (grid) — omit for a single flowing strip. */
  columns?: number;
  /** Render logos in muted monochrome until hover (classic "trusted by" look). */
  monochrome?: boolean;
  /** Cell height in px. */
  height?: number;
  sx?: SxProps<Theme>;
}

/**
 * LogoWall / LogoStrip — a "trusted by / worked with" grid or strip of logos.
 * Monochrome-until-hover by default so a row of mixed brand colors reads as a
 * calm set. Falls back to a wordmark when no image is provided.
 */
export function LogoWall({ logos, columns, monochrome = true, height = 40, sx }: LogoWallProps) {
  return (
    <Box
      sx={[
        columns
          ? {
              display: 'grid',
              // Drop to fewer columns on small screens so each cell stays wide
              // enough for its wordmark (a 5-up grid overlaps on a phone).
              gridTemplateColumns: {
                xs: `repeat(${Math.min(columns, 2)}, minmax(0, 1fr))`,
                sm: `repeat(${Math.min(columns, 3)}, minmax(0, 1fr))`,
                md: `repeat(${columns}, minmax(0, 1fr))`,
              },
              gap: 3,
              alignItems: 'center',
            }
          : { display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {logos.map((logo, i) => {
        const content = logo.src ? (
          <Box
            component="img"
            src={logo.src}
            alt={logo.name}
            sx={{ maxHeight: height, maxWidth: '100%', objectFit: 'contain' }}
          />
        ) : (
          <Box
            sx={{
              fontFamily: (t) => t.typography.h6.fontFamily,
              fontWeight: 600,
              fontSize: '1.0625rem',
              color: 'text.secondary',
              letterSpacing: '-0.01em',
            }}
          >
            {logo.name}
          </Box>
        );
        return (
          <Box
            key={i}
            component={logo.href ? 'a' : 'div'}
            href={logo.href}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height,
              textDecoration: 'none',
              filter: monochrome ? 'grayscale(1)' : 'none',
              opacity: monochrome ? 0.6 : 1,
              transition: 'opacity .15s, filter .15s',
              '&:hover': monochrome ? { filter: 'grayscale(0)', opacity: 1 } : undefined,
            }}
          >
            {content}
          </Box>
        );
      })}
    </Box>
  );
}

export default LogoWall;
