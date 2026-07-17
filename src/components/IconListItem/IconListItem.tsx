import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IconListItemProps {
  icon: IconDefinition;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Accent color for the icon chip (defaults to primary.main). */
  color?: string;
  /** Icon chip shape. */
  shape?: 'rounded' | 'circle' | 'square';
  sx?: SxProps<Theme>;
}

/**
 * IconListItem — a feature/benefit row: a tinted icon chip beside a title and
 * supporting line. The unit for feature lists, "how it works" steps, and
 * value-prop grids.
 */
export function IconListItem({ icon, title, description, color, shape = 'rounded', sx }: IconListItemProps) {
  const radius = shape === 'circle' ? '50%' : shape === 'square' ? '4px' : '10px';
  return (
    <Box sx={[{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Box
        sx={{
          width: 40,
          height: 40,
          flexShrink: 0,
          borderRadius: radius,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: (t) => color ?? t.palette.primary.main,
          backgroundColor: (t) => alpha(color ?? t.palette.primary.main, 0.1),
        }}
      >
        <FontAwesomeIcon icon={icon} />
      </Box>
      <Box sx={{ pt: 0.25 }}>
        <Typography
          sx={{ fontFamily: (t) => t.typography.h6.fontFamily, fontWeight: 600, fontSize: '0.9375rem', lineHeight: 1.3 }}
        >
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
            {description}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default IconListItem;
