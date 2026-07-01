import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { theme } from '../../src/theme';
import { SpecFrame } from './SpecFrame';

type Variant = NonNullable<TypographyProps['variant']>;

const VARIANTS: { variant: Variant; sample: string }[] = [
  { variant: 'h1', sample: 'The quick brown fox' },
  { variant: 'h2', sample: 'The quick brown fox' },
  { variant: 'h3', sample: 'The quick brown fox jumps' },
  { variant: 'h4', sample: 'The quick brown fox jumps over' },
  { variant: 'h5', sample: 'The quick brown fox jumps over the lazy dog' },
  { variant: 'h6', sample: 'The quick brown fox jumps over the lazy dog' },
  { variant: 'subtitle1', sample: 'The quick brown fox jumps over the lazy dog' },
  { variant: 'subtitle2', sample: 'The quick brown fox jumps over the lazy dog' },
  { variant: 'body1', sample: 'The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.' },
  { variant: 'body2', sample: 'The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.' },
  { variant: 'button', sample: 'Button label' },
  { variant: 'caption', sample: 'The quick brown fox jumps over the lazy dog' },
  { variant: 'overline', sample: 'Overline label' },
];

const WEIGHT_NAME: Record<number, string> = { 400: 'Regular', 500: 'Medium', 600: 'Semibold', 700: 'Bold' };

function pxFromRem(rem: string): string {
  const n = parseFloat(rem);
  if (Number.isNaN(n)) return rem;
  return `${Math.round(n * 16)}px`;
}

function meta(variant: Variant): string {
  const v = (theme.typography as Record<string, unknown>)[variant] as
    | { fontSize?: string; fontWeight?: number; lineHeight?: number; letterSpacing?: string; textTransform?: string }
    | undefined;
  if (!v) return variant;
  const size = v.fontSize ? pxFromRem(v.fontSize) : '';
  const weight = v.fontWeight ? `${WEIGHT_NAME[v.fontWeight] ?? v.fontWeight} ${v.fontWeight}` : '';
  const lh = v.lineHeight ? `lh ${v.lineHeight}` : '';
  const tt = v.textTransform && v.textTransform !== 'none' ? ` · ${v.textTransform}` : '';
  return [size, weight, lh].filter(Boolean).join(' · ') + tt;
}

/** Live type ramp — every variant rendered at its true theme size. */
export function TypeRamp() {
  return (
    <SpecFrame>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {VARIANTS.map(({ variant, sample }, i) => (
          <React.Fragment key={variant}>
            {i > 0 && <Divider sx={{ my: 1.5 }} />}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '150px 1fr' },
                gap: 2,
                alignItems: 'baseline',
              }}
            >
              <Box sx={{ pt: 0.5 }}>
                <Typography variant="subtitle2" sx={{ fontFamily: 'monospace' }}>
                  {variant}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                  {meta(variant)}
                </Typography>
              </Box>
              <Typography variant={variant} sx={{ overflow: 'hidden' }}>
                {sample}
              </Typography>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </SpecFrame>
  );
}

export default TypeRamp;
