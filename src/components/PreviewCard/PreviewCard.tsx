import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface PreviewCardProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Small source line (domain, author, date). */
  meta?: React.ReactNode;
  /** Image URL for the media area. If omitted, a placeholder is shown. */
  image?: string;
  /** Make the whole card a link. */
  href?: string;
  /** Media aspect ratio (width / height). */
  ratio?: number;
  sx?: SxProps<Theme>;
}

/**
 * PreviewCard — a link/content preview: media on top, title + description +
 * source meta below. For "featured work", related links, and social-style
 * cards. Pass `href` to make the whole card clickable.
 */
export function PreviewCard({ title, description, meta, image, href, ratio = 16 / 9, sx }: PreviewCardProps) {
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
          transition: 'box-shadow .15s, border-color .15s',
          ...(href && {
            '&:hover': {
              boxShadow: (t) => t.shadows[2],
              borderColor: (t) => t.palette.text.disabled,
            },
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          aspectRatio: String(ratio),
          backgroundColor: 'action.hover',
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'text.disabled',
          fontSize: 28,
        }}
      >
        {!image && '🖼'}
      </Box>
      <Box sx={{ p: 2 }}>
        {meta && (
          <Typography
            sx={{
              fontFamily: (t) => t.typography.overline?.fontFamily,
              fontSize: '0.6875rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'text.secondary',
              mb: 0.5,
            }}
          >
            {meta}
          </Typography>
        )}
        <Typography sx={{ fontFamily: (t) => t.typography.h6.fontFamily, fontWeight: 600, fontSize: '1rem', lineHeight: 1.3 }}>
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
            {description}
          </Typography>
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

export default PreviewCard;
