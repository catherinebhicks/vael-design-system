import * as React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { blueprint, gridBackground } from '../../../vael/blueprint';

export interface SlideSectionProps {
  /** 'base' = app bg + grid; 'accent' = lighter panel bg + fainter grid. @default 'base' */
  variant?: 'base' | 'accent';
  /** Vertical alignment of content. @default 'center' */
  justify?: React.CSSProperties['justifyContent'];
  /** CSS padding. @default '96px 120px' */
  padding?: string | number;
  /** Authoring/presenter metadata, passed to the DOM (used by deck tooling). */
  label?: string;
  screenLabel?: string;
  speakerNotes?: string;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

/**
 * The grid-paper slide frame: full-height flex column on the Blueprint canvas
 * with the standard slide padding rhythm. Dark-mode aware.
 */
export function SlideSection({
  variant = 'base', justify = 'center', padding = '96px 120px',
  label, screenLabel, speakerNotes, children, sx,
}: SlideSectionProps) {
  const { palette } = useTheme();
  const t = blueprint[palette.mode === 'dark' ? 'dark' : 'light'];
  const bg = variant === 'accent' ? t.panel2 : t.bg;
  const grid = variant === 'accent' ? t.line : t.grid;
  return (
    <Box
      component="section"
      data-label={label}
      data-screen-label={screenLabel}
      data-speaker-notes={speakerNotes}
      sx={[
        {
          height: '100%', boxSizing: 'border-box', p: padding,
          display: 'flex', flexDirection: 'column', justifyContent: justify,
          color: t.ink, fontFamily: blueprint.font.sans,
          backgroundColor: bg,
          backgroundImage: gridBackground(grid),
          backgroundSize: `${blueprint.gridSize} ${blueprint.gridSize}`,
          backgroundPosition: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}

export default SlideSection;
