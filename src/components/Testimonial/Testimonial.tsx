import * as React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface TestimonialProps {
  /** The quote body. */
  quote: React.ReactNode;
  /** Attribution name. */
  author: React.ReactNode;
  /** Role / company line. */
  role?: React.ReactNode;
  /** Headshot URL; falls back to initials. */
  avatar?: string;
  /** Layout: stacked (avatar under quote) or inline (avatar beside). */
  variant?: 'stacked' | 'inline';
  sx?: SxProps<Theme>;
}

function initials(name: React.ReactNode): string {
  if (typeof name !== 'string') return '';
  return name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
}

/**
 * Testimonial — a quote with attribution and an optional headshot. The
 * social-proof sibling of PullQuote: use PullQuote to emphasise a line of
 * body copy, Testimonial to credit a named person.
 */
export function Testimonial({ quote, author, role, avatar, variant = 'stacked', sx }: TestimonialProps) {
  const attribution = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
      <Avatar src={avatar} sx={{ width: 40, height: 40 }}>
        {initials(author)}
      </Avatar>
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', color: 'text.primary' }}>{author}</Typography>
        {role && (
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8125rem' }}>
            {role}
          </Typography>
        )}
      </Box>
    </Box>
  );

  return (
    <Box
      sx={[
        {
          display: 'flex',
          flexDirection: variant === 'inline' ? 'row' : 'column',
          gap: 2,
          p: 3,
          borderRadius: 2,
          borderLeft: (t) => `3px solid ${t.palette.primary.main}`,
          bgcolor: 'background.paper',
          border: (t) => `1px solid ${t.palette.divider}`,
          borderLeftWidth: 3,
          borderLeftColor: 'primary.main',
          maxWidth: 560,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Typography
        sx={{
          fontFamily: (t) => t.typography.h5.fontFamily,
          fontSize: '1.125rem',
          lineHeight: 1.5,
          color: 'text.primary',
          fontWeight: 400,
        }}
      >
        “{quote}”
      </Typography>
      {attribution}
    </Box>
  );
}

export default Testimonial;
