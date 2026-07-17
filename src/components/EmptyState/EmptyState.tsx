import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface EmptyStateProps {
  /** Leading icon (defaults to an inbox). Pass false to hide. */
  icon?: IconDefinition | false;
  /** Short headline — what's empty. */
  title: React.ReactNode;
  /** Optional supporting sentence — why, or what to do next. */
  description?: React.ReactNode;
  /** Optional primary action (usually a Button). */
  action?: React.ReactNode;
  /** Render inside a dashed placeholder frame. */
  bordered?: boolean;
  sx?: SxProps<Theme>;
}

/**
 * EmptyState — the zero-data placeholder for a list, table, or panel: an icon,
 * a title, optional description, and an optional call to action. Mono title in
 * the Blueprint voice.
 */
export function EmptyState({
  icon = faInbox,
  title,
  description,
  action,
  bordered = false,
  sx,
}: EmptyStateProps) {
  return (
    <Box
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 1,
          px: 3,
          py: 5,
          ...(bordered && {
            border: (theme) => `1.5px dashed ${theme.palette.divider}`,
            borderRadius: 2,
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {icon && (
        <Box sx={{ color: 'text.disabled', fontSize: 32, mb: 0.5 }}>
          <FontAwesomeIcon icon={icon} />
        </Box>
      )}
      <Typography
        variant="subtitle1"
        sx={{ fontFamily: (t) => t.typography.h6.fontFamily, fontWeight: 600 }}
      >
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 360 }}>
          {description}
        </Typography>
      )}
      {action && <Box sx={{ mt: 1.5 }}>{action}</Box>}
    </Box>
  );
}

export default EmptyState;
