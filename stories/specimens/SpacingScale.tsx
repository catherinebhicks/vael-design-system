import React from 'react';
import { Box, Typography } from '@mui/material';
import { theme } from '../../src/theme';
import { SpecFrame } from './SpecFrame';

const USAGE: Record<number, string> = {
  1: 'Icon-to-label gaps, tight inline spacing',
  2: 'Default — component padding, form rows',
  3: 'Card / panel / dialog padding',
  4: 'Gaps between card groups, below headings',
  5: 'Between major page sections',
  6: 'Long-form content breaks',
  7: 'Large desktop layout gaps',
  8: 'Max standard spacing — hero sections',
};

/** Visual 8px scale — each token rendered as a bar of its true pixel width. */
export function SpacingScale() {
  const steps = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SpecFrame>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {steps.map((n) => {
          const px = theme.spacing(n); // e.g. "8px"
          return (
            <Box key={n} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 96, flexShrink: 0 }}>
                <Typography variant="subtitle2" sx={{ fontFamily: 'monospace' }}>
                  spacing/{n}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {px}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: px,
                  height: 20,
                  bgcolor: 'primary.main',
                  borderRadius: 0.5,
                  flexShrink: 0,
                }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ minWidth: 0 }}>
                {USAGE[n]}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </SpecFrame>
  );
}

export default SpacingScale;
