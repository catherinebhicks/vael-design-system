import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface TourStep {
  title: React.ReactNode;
  body: React.ReactNode;
}

export interface SpotlightTourProps {
  steps: TourStep[];
  /** Controlled active step index. */
  index?: number;
  /** Default step when uncontrolled. */
  defaultIndex?: number;
  onChange?: (index: number) => void;
  onFinish?: () => void;
  onSkip?: () => void;
  sx?: SxProps<Theme>;
}

/**
 * SpotlightTour — the coach-mark card for an onboarding spotlight: step title +
 * body, progress dots, Back / Next / Done, and Skip. Anchor it to a target
 * with a Popover (or drop it into a spotlight overlay); this component owns the
 * step content and navigation.
 */
export function SpotlightTour({
  steps,
  index: controlled,
  defaultIndex = 0,
  onChange,
  onFinish,
  onSkip,
  sx,
}: SpotlightTourProps) {
  const [internal, setInternal] = React.useState(defaultIndex);
  const index = controlled ?? internal;
  const count = steps.length;
  const step = steps[index];
  const last = index === count - 1;

  const set = (n: number) => {
    if (controlled == null) setInternal(n);
    onChange?.(n);
  };

  return (
    <Box
      sx={[
        {
          width: 300,
          p: 2.5,
          borderRadius: 2,
          bgcolor: 'background.paper',
          boxShadow: (t) => t.shadows[8],
          border: (t) => `1px solid ${t.palette.divider}`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Typography
        sx={{ fontFamily: (t) => t.typography.h6.fontFamily, fontWeight: 600, fontSize: '0.9375rem', mb: 0.75 }}
      >
        {step?.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {step?.body}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 0.75 }}>
          {steps.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: (t) => (i === index ? t.palette.primary.main : t.palette.action.disabled),
              }}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
          {index === 0 ? (
            <Button size="small" color="inherit" onClick={onSkip} sx={{ color: 'text.secondary' }}>
              Skip
            </Button>
          ) : (
            <Button size="small" color="inherit" onClick={() => set(index - 1)}>
              Back
            </Button>
          )}
          <Button
            size="small"
            variant="contained"
            onClick={() => (last ? onFinish?.() : set(index + 1))}
          >
            {last ? 'Done' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SpotlightTour;
