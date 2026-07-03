import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { blueprint } from '../../../vael/blueprint';

export interface SectionHeadingProps {
  /** Small mono index before the eyebrow, e.g. "05". */
  index?: string;
  /** Uppercase mono kicker above the title, e.g. "The design · home". */
  eyebrow?: string;
  /** The heading. */
  title: React.ReactNode;
  /** Optional supporting paragraph under the title. */
  description?: React.ReactNode;
  /** Accent for index + eyebrow. @default 'blue' */
  tone?: 'blue' | 'signal';
  /** Max title width, in `ch`. */
  titleMaxCh?: number;
  sx?: SxProps<Theme>;
}

/**
 * The mono index + uppercase eyebrow + Plex-Mono heading that opens every
 * case-study slide. Pure Blueprint tokens; dark-mode aware.
 */
export function SectionHeading({
  index, eyebrow, title, description, tone = 'blue', titleMaxCh, sx,
}: SectionHeadingProps) {
  const { palette } = useTheme();
  const t = blueprint[palette.mode === 'dark' ? 'dark' : 'light'];
  const accent = tone === 'signal' ? t.signal : t.blue2;
  return (
    <Box sx={sx}>
      {(index || eyebrow) && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', mb: '20px' }}>
          {index && (
            <Box component="span" sx={{ fontFamily: blueprint.font.mono, fontSize: 26, fontWeight: 600, color: accent, lineHeight: 1 }}>
              {index}
            </Box>
          )}
          {eyebrow && (
            <Box component="span" sx={{ fontFamily: blueprint.font.mono, fontSize: 22, letterSpacing: '0.22em', textTransform: 'uppercase', color: accent, lineHeight: 1 }}>
              {eyebrow}
            </Box>
          )}
        </Box>
      )}
      <Typography component="h2" sx={{
        fontFamily: blueprint.font.mono, fontWeight: 600, fontSize: 'clamp(34px, 3vw, 58px)',
        letterSpacing: '-0.02em', lineHeight: 1.05, color: t.ink, m: 0,
        maxWidth: titleMaxCh ? `${titleMaxCh}ch` : undefined,
      }}>
        {title}
      </Typography>
      {description && (
        <Typography component="p" sx={{ fontFamily: blueprint.font.sans, fontSize: 'clamp(20px, 1.5vw, 30px)', lineHeight: 1.5, color: t.dim, maxWidth: '46ch', mt: '30px' }}>
          {description}
        </Typography>
      )}
    </Box>
  );
}

export default SectionHeading;
