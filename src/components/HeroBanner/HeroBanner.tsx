import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface HeroBannerProps {
  /** Small mono-uppercase kicker above the headline. */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Action buttons. */
  actions?: React.ReactNode;
  /** Optional media (image, ImageSlot, illustration) shown beside the copy. */
  media?: React.ReactNode;
  /** Media position when present. */
  mediaSide?: 'right' | 'left';
  /** Center the copy (no media / hero-centric layout). */
  centered?: boolean;
  sx?: SxProps<Theme>;
}

/**
 * HeroBanner — the top-of-page hero: eyebrow, headline, subhead, actions, and
 * optional side media. Mono eyebrow in the Blueprint voice, large display
 * headline, generous rhythm.
 */
export function HeroBanner({
  eyebrow,
  title,
  subtitle,
  actions,
  media,
  mediaSide = 'right',
  centered = false,
  sx,
}: HeroBannerProps) {
  const copy = (
    <Box
      sx={{
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: centered ? 'center' : 'flex-start',
        textAlign: centered ? 'center' : 'left',
      }}
    >
      {eyebrow && (
        <Typography
          sx={{
            fontFamily: (t) => t.typography.overline?.fontFamily,
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'primary.main',
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        sx={{
          fontFamily: (t) => t.typography.h1.fontFamily,
          fontWeight: 600,
          fontSize: { xs: '2.25rem', md: '3.25rem' },
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          color: 'text.primary',
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ fontSize: { xs: '1.0625rem', md: '1.1875rem' }, color: 'text.secondary', maxWidth: 560 }}>
          {subtitle}
        </Typography>
      )}
      {actions && <Box sx={{ display: 'flex', gap: 1.5, mt: 1, flexWrap: 'wrap', justifyContent: centered ? 'center' : 'flex-start' }}>{actions}</Box>}
    </Box>
  );

  return (
    <Box
      sx={[
        {
          display: 'flex',
          flexDirection: centered || !media ? 'column' : { xs: 'column', md: mediaSide === 'left' ? 'row-reverse' : 'row' },
          alignItems: 'center',
          gap: { xs: 4, md: 6 },
          py: { xs: 6, md: 9 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {copy}
      {media && !centered && <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>{media}</Box>}
    </Box>
  );
}

export default HeroBanner;
