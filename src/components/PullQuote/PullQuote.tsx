import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { blueprint } from '../../../vael/blueprint';

export interface PullQuoteProps {
  /** The statement. Wrap the punch word in <strong> to give it the accent color. */
  children: React.ReactNode;
  /** Accent for the emphasis word + left rule. @default 'signal' */
  tone?: 'signal' | 'blue';
  /** Show the left accent rule. @default true */
  rule?: boolean;
  /** Optional smaller mono line under the quote. */
  subtext?: React.ReactNode;
  /** @default 'lg' */
  size?: 'md' | 'lg' | 'xl';
  sx?: SxProps<Theme>;
}

const MAX = { md: 40, lg: 52, xl: 56 } as const;
const VW = { md: 2.4, lg: 3, xl: 3.4 } as const;

/**
 * The large mono statement used on reframe / learnings slides. A `<strong>`
 * inside the quote picks up the accent color. Dark-mode aware.
 */
export function PullQuote({ children, tone = 'signal', rule = true, subtext, size = 'lg', sx }: PullQuoteProps) {
  const { palette } = useTheme();
  const t = blueprint[palette.mode === 'dark' ? 'dark' : 'light'];
  const accent = tone === 'signal' ? t.signal : t.blue2;
  return (
    <Box sx={[
      { borderLeft: rule ? `4px solid ${accent}` : undefined, pl: rule ? '40px' : 0 },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}>
      <Typography component="p" sx={{
        fontFamily: blueprint.font.mono, fontWeight: 500,
        fontSize: `clamp(28px, ${VW[size]}vw, ${MAX[size]}px)`,
        lineHeight: 1.2, letterSpacing: '-0.01em', color: t.ink, m: 0,
        '& strong': { color: accent, fontWeight: 500 },
      }}>
        {children}
      </Typography>
      {subtext && (
        <Typography component="p" sx={{
          fontFamily: blueprint.font.mono, fontSize: 'clamp(18px, 1.3vw, 24px)',
          color: t.dim, mt: '32px', maxWidth: '34ch', lineHeight: 1.5,
        }}>
          {subtext}
        </Typography>
      )}
    </Box>
  );
}

export default PullQuote;
