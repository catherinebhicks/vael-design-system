import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface Annotation {
  /** Position as a percentage of the image (0–100). */
  x: number;
  y: number;
  /** Callout text (shown in the legend). */
  note: React.ReactNode;
  /** Override the auto number. */
  label?: React.ReactNode;
}

export interface AnnotatedScreenProps {
  /** Screenshot URL. If omitted, a placeholder frame is shown. */
  src?: string;
  alt?: string;
  annotations: Annotation[];
  /** Show the numbered legend under the image. */
  legend?: boolean;
  ratio?: number;
  color?: string;
  sx?: SxProps<Theme>;
}

/**
 * AnnotatedScreen — numbered callout pins positioned over a screenshot, with an
 * optional matching legend. For UI walkthroughs, teardown slides, and
 * "here's what changed" case-study figures.
 */
export function AnnotatedScreen({
  src,
  alt = '',
  annotations,
  legend = true,
  ratio = 16 / 9,
  color,
  sx,
}: AnnotatedScreenProps) {
  return (
    <Box sx={[{ display: 'flex', flexDirection: 'column', gap: 1.5 }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: String(ratio),
          borderRadius: 2,
          overflow: 'hidden',
          border: (t) => `1px solid ${t.palette.divider}`,
          backgroundColor: 'action.hover',
          backgroundImage: src ? `url(${src})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {annotations.map((a, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              top: `${a.y}%`,
              left: `${a.x}%`,
              transform: 'translate(-50%, -50%)',
              width: 24,
              height: 24,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: (t) => t.typography.overline?.fontFamily,
              fontSize: '0.75rem',
              fontWeight: 700,
              color: (t) => t.palette.primary.contrastText,
              backgroundColor: (t) => color ?? t.palette.primary.main,
              boxShadow: '0 0 0 3px rgba(255,255,255,0.9), 0 1px 4px rgba(0,0,0,0.3)',
            }}
          >
            {a.label ?? i + 1}
          </Box>
        ))}
      </Box>
      {legend && (
        <Box component="ol" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
          {annotations.map((a, i) => (
            <Box key={i} component="li" sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
              <Box
                sx={{
                  flexShrink: 0,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: (t) => t.typography.overline?.fontFamily,
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  color: (t) => t.palette.primary.contrastText,
                  backgroundColor: (t) => color ?? t.palette.primary.main,
                }}
              >
                {a.label ?? i + 1}
              </Box>
              <Typography variant="body2" color="text.secondary">
                {a.note}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default AnnotatedScreen;
