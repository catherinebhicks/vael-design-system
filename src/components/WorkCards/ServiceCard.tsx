import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface ServiceCardProps {
  /** Required. Service name (mono, Blueprint voice). */
  title: React.ReactNode;
  /** Small mono index shown above the title, e.g. "01". */
  index?: React.ReactNode;
  /** Supporting line under the title. */
  description?: React.ReactNode;
  /** Small mono meta line at the foot, e.g. "Project · Embedded team". */
  meta?: React.ReactNode;
  /** Makes the whole card a link, with a hover lift. */
  href?: string;
  sx?: SxProps<Theme>;
}

/**
 * ServiceCard — a numbered offering tile: a mono index, a mono title, a short
 * description, and a meta line. No media; sits on a faint tinted surface. Used
 * in "services" and "what I do" sections.
 */
export function ServiceCard({ title, index, description, meta, href, sx }: ServiceCardProps) {
  const inner = (
    <Box
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          p: 3,
          border: (t) => `1px solid ${t.palette.divider}`,
          bgcolor: (t) => (t.palette.mode === 'dark' ? t.palette.background.paper : 'rgba(25,118,210,0.04)'),
          textDecoration: 'none',
          color: 'inherit',
          transition: 'box-shadow .15s, border-color .15s, transform .15s',
          ...(href && {
            '&:hover': { boxShadow: (t) => t.shadows[2], transform: 'translateY(-2px)' },
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {index != null && (
        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.8125rem', fontWeight: 600, color: 'primary.main', mb: 1 }}>
          {index}
        </Typography>
      )}
      <Typography sx={{ fontFamily: (t) => t.typography.h6.fontFamily, fontWeight: 600, fontSize: '1.125rem', lineHeight: 1.3 }}>
        {title}
      </Typography>
      {description && (
        <Typography sx={{ mt: 1, fontSize: '0.9375rem', lineHeight: 1.5, color: 'text.secondary' }}>{description}</Typography>
      )}
      {meta && (
        <Typography sx={{ mt: 2, fontFamily: 'monospace', fontSize: '0.75rem', color: 'text.secondary' }}>{meta}</Typography>
      )}
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

export default ServiceCard;
