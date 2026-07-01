import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { theme } from '../../src/theme';
import { SpecFrame } from './SpecFrame';

const LEVELS: { level: number; label: string }[] = [
  { level: 0, label: 'Flat — background, outlined' },
  { level: 1, label: 'Card (resting), Chip, Tooltip' },
  { level: 2, label: 'Button (contained)' },
  { level: 4, label: 'AppBar (scrolled)' },
  { level: 8, label: 'Card (hover), Menu, Popover' },
  { level: 16, label: 'Drawer (side)' },
  { level: 24, label: 'Dialog' },
];

/** Live elevation scale — cards rendered at each mapped shadow level. */
export function ShadowScale() {
  return (
    <SpecFrame>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: 4,
          p: 2,
        }}
      >
        {LEVELS.map(({ level, label }) => (
          <Box key={level} sx={{ textAlign: 'center' }}>
            <Paper
              elevation={level}
              sx={{
                height: 72,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1.5,
              }}
            >
              <Typography variant="subtitle2" sx={{ fontFamily: 'monospace' }}>
                {level}
              </Typography>
            </Paper>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.3 }}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </SpecFrame>
  );
}

export default ShadowScale;
