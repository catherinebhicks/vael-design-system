import * as React from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface FooterLink {
  label: React.ReactNode;
  href?: string;
}

export interface FooterColumn {
  /** Column heading (mono, Blueprint voice). */
  heading: React.ReactNode;
  links: FooterLink[];
}

export interface FooterProps {
  /** Brand mark or name shown top-left. */
  brand?: React.ReactNode;
  /** Short supporting line under the brand. */
  description?: React.ReactNode;
  /** Link columns — usually 2–4. */
  columns?: FooterColumn[];
  /** Bottom-bar left content, usually a copyright line. */
  copyright?: React.ReactNode;
  /** Bottom-bar right content, usually legal/utility links. */
  legal?: React.ReactNode;
  /** Surface treatment: `ink` is a dark band, `subtle` a bordered light surface. */
  variant?: 'ink' | 'subtle';
  sx?: SxProps<Theme>;
}

/**
 * Footer — the site footer band: brand + description, columns of navigation
 * links, and a bottom bar with copyright and legal/utility links. A thin,
 * themed composition; pass real links so it stays navigable and accessible.
 */
export function Footer({
  brand,
  description,
  columns = [],
  copyright,
  legal,
  variant = 'ink',
  sx,
}: FooterProps) {
  const onDark = variant === 'ink';
  const linkColor = onDark ? 'rgba(255,255,255,0.72)' : 'text.secondary';
  const linkHover = onDark ? 'common.white' : 'text.primary';
  const headingColor = onDark ? 'rgba(255,255,255,0.5)' : 'text.disabled';

  return (
    <Box
      component="footer"
      sx={[
        {
          px: { xs: 3, md: 5 },
          pt: { xs: 5, md: 6 },
          pb: { xs: 3, md: 4 },
          borderRadius: 3,
          bgcolor: (t) =>
            onDark
              ? t.palette.background.default === '#ffffff'
                ? '#141c28'
                : t.palette.text.primary
              : t.palette.background.default,
          border: (t) => (onDark ? 'none' : `1px solid ${t.palette.divider}`),
          color: onDark ? 'common.white' : 'text.primary',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: { xs: 4, md: 6 },
        }}
      >
        {(brand || description) && (
          <Box sx={{ maxWidth: 320 }}>
            {brand && (
              <Typography
                sx={{
                  fontFamily: (t) => t.typography.h4.fontFamily,
                  fontWeight: 600,
                  fontSize: '1.25rem',
                  lineHeight: 1.2,
                }}
              >
                {brand}
              </Typography>
            )}
            {description && (
              <Typography
                sx={{
                  mt: 1.25,
                  fontSize: '0.9375rem',
                  lineHeight: 1.55,
                  color: onDark ? 'rgba(255,255,255,0.72)' : 'text.secondary',
                }}
              >
                {description}
              </Typography>
            )}
          </Box>
        )}

        {columns.length > 0 && (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, minmax(0, 1fr))',
                md: `repeat(${Math.min(columns.length, 4)}, minmax(0, auto))`,
              },
              gap: { xs: 3, md: 6 },
            }}
          >
            {columns.map((col, i) => (
              <Stack key={i} spacing={1.25} component="nav">
                <Typography
                  sx={{
                    fontFamily: (t) => t.typography.overline?.fontFamily ?? 'monospace',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: headingColor,
                  }}
                >
                  {col.heading}
                </Typography>
                {col.links.map((l, j) => (
                  <Link
                    key={j}
                    href={l.href}
                    underline="none"
                    sx={{
                      fontSize: '0.9375rem',
                      color: linkColor,
                      width: 'fit-content',
                      '&:hover': { color: linkHover },
                    }}
                  >
                    {l.label}
                  </Link>
                ))}
              </Stack>
            ))}
          </Box>
        )}
      </Box>

      {(copyright || legal) && (
        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            pt: 2.5,
            borderTop: (t) =>
              `1px solid ${onDark ? 'rgba(255,255,255,0.12)' : t.palette.divider}`,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1.5,
          }}
        >
          {copyright && (
            <Typography
              sx={{ fontSize: '0.8125rem', color: onDark ? 'rgba(255,255,255,0.5)' : 'text.secondary' }}
            >
              {copyright}
            </Typography>
          )}
          {legal && (
            <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap' }}>{legal}</Box>
          )}
        </Box>
      )}
    </Box>
  );
}

export default Footer;
