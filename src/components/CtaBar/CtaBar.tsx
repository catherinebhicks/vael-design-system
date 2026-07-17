import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface CtaBarProps {
  title: React.ReactNode;
  /** Supporting line under the title. */
  subtitle?: React.ReactNode;
  /** Action(s) — usually one or two Buttons. */
  actions?: React.ReactNode;
  /** Visual treatment. */
  variant?: 'brand' | 'ink' | 'subtle';
  /** Center everything and stack (vs. text-left, actions-right). */
  centered?: boolean;
  sx?: SxProps<Theme>;
}

/**
 * CtaBar — a call-to-action strip: headline, optional subtext, and action
 * buttons on a full-width band. The section that closes a landing page or
 * separates content blocks with a clear next step.
 */
export function CtaBar({ title, subtitle, actions, variant = 'brand', centered = false, sx }: CtaBarProps) {
  const onDark = variant === 'brand' || variant === 'ink';
  return (
    <Box
      sx={[
        {
          display: 'flex',
          flexDirection: centered ? 'column' : { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: centered ? 'center' : { xs: 'center', md: 'left' },
          gap: 2.5,
          px: { xs: 3, md: 5 },
          py: { xs: 4, md: 4 },
          borderRadius: 3,
          bgcolor: (t) =>
            variant === 'brand'
              ? t.palette.primary.main
              : variant === 'ink'
              ? t.palette.background.default === '#ffffff'
                ? '#141c28'
                : t.palette.text.primary
              : t.palette.background.default,
          border: (t) => (variant === 'subtle' ? `1px solid ${t.palette.divider}` : 'none'),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box sx={{ maxWidth: 640 }}>
        <Typography
          sx={{
            fontFamily: (t) => t.typography.h4.fontFamily,
            fontWeight: 600,
            fontSize: { xs: '1.375rem', md: '1.625rem' },
            lineHeight: 1.2,
            color: onDark ? (variant === 'brand' ? 'primary.contrastText' : 'common.white') : 'text.primary',
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            sx={{
              mt: 1,
              fontSize: '1rem',
              color: onDark ? 'rgba(255,255,255,0.82)' : 'text.secondary',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
      {actions && <Box sx={{ display: 'flex', gap: 1.5, flexShrink: 0 }}>{actions}</Box>}
    </Box>
  );
}

export default CtaBar;
