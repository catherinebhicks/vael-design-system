import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ImageSlotProps {
  /** Image URL. When absent, a drop-here placeholder is shown. */
  src?: string;
  alt?: string;
  /** Aspect ratio (width / height). */
  ratio?: number;
  /** Placeholder prompt text. */
  label?: React.ReactNode;
  /** Placeholder icon. */
  icon?: IconDefinition;
  /** Rounded corners. */
  rounded?: boolean;
  /** Dashed placeholder border (vs. solid fill). */
  dashed?: boolean;
  sx?: SxProps<Theme>;
}

/**
 * ImageSlot / MediaFrame — a fixed-ratio media container that shows a
 * drop-here placeholder until an image is provided. The canonical spot for
 * screenshots and case-study imagery in decks and templates.
 */
export function ImageSlot({
  src,
  alt = '',
  ratio = 16 / 9,
  label = 'Drop image',
  icon = faImage,
  rounded = true,
  dashed = true,
  sx,
}: ImageSlotProps) {
  return (
    <Box
      sx={[
        {
          position: 'relative',
          width: '100%',
          aspectRatio: String(ratio),
          borderRadius: rounded ? 2 : 0,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...(src
            ? { backgroundColor: 'action.hover' }
            : {
                backgroundColor: 'background.default',
                border: (t) => (dashed ? `1.5px dashed ${t.palette.divider}` : `1px solid ${t.palette.divider}`),
                color: 'text.disabled',
              }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {src ? (
        <Box component="img" src={src} alt={alt} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.75 }}>
          <Box sx={{ fontSize: 24 }}>
            <FontAwesomeIcon icon={icon} />
          </Box>
          <Typography
            sx={{
              fontFamily: (t) => t.typography.overline?.fontFamily,
              fontSize: '0.6875rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {label}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ImageSlot;
