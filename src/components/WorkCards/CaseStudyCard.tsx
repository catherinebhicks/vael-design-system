import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface CaseStudyCardProps {
  /** Required. Project / case-study title (mono, Blueprint voice). */
  title: React.ReactNode;
  /** Small uppercase mono kicker above the title (e.g. client or category). */
  eyebrow?: React.ReactNode;
  /** Supporting line under the title. */
  description?: React.ReactNode;
  /** Media URL for the top image. Omitted renders a placeholder tile. */
  image?: string;
  /** Media aspect ratio (width / height). */
  ratio?: number;
  /** Makes the whole card a link, with a hover lift. */
  href?: string;
  sx?: SxProps<Theme>;
}

/**
 * CaseStudyCard — a portfolio case-study tile: media on top, an uppercase
 * eyebrow, a mono title, and a short outcome line. Pass `href` to make the
 * whole card a single click target.
 */
export function CaseStudyCard({ title, eyebrow, description, image, ratio = 16 / 10, href, sx }: CaseStudyCardProps) {
  const inner = (
    <Box
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          overflow: 'hidden',
          border: (t) => `1px solid ${t.palette.divider}`,
          bgcolor: 'background.paper',
          textDecoration: 'none',
          color: 'inherit',
          transition: 'box-shadow .15s, border-color .15s, transform .15s',
          ...(href && {
            '&:hover': { boxShadow: (t) => t.shadows[3], transform: 'translateY(-2px)' },
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio: String(ratio),
          bgcolor: 'action.hover',
          ...(image && { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }),
        }}
      />
      <Box sx={{ p: 2.5 }}>
        {eyebrow && (
          <Typography
            sx={{
              fontFamily: (t) => t.typography.overline?.fontFamily ?? 'monospace',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'primary.main',
              mb: 0.75,
            }}
          >
            {eyebrow}
          </Typography>
        )}
        <Typography sx={{ fontFamily: (t) => t.typography.h6.fontFamily, fontWeight: 600, fontSize: '1.0625rem', lineHeight: 1.3 }}>
          {title}
        </Typography>
        {description && (
          <Typography sx={{ mt: 0.75, fontSize: '0.9375rem', lineHeight: 1.5, color: 'text.secondary' }}>{description}</Typography>
        )}
      </Box>
    </Box>
  );
  return href ? (
    <Box component="a" href={href} sx={{ textDecoration: 'none', display: 'block' }}>
      {inner}
    </Box>
  ) : (
    inner
  );
}

export default CaseStudyCard;
