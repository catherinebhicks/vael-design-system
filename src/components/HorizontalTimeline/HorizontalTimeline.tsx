import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface RoadmapStep {
  label: React.ReactNode;
  /** Caption under the connector (date, phase, owner). */
  caption?: React.ReactNode;
  /** Visual state of the node. */
  state?: 'done' | 'active' | 'todo';
}

export interface HorizontalTimelineProps {
  steps: RoadmapStep[];
  sx?: SxProps<Theme>;
}

const nodeColor = (theme: Theme, state: RoadmapStep['state']) => {
  if (state === 'done') return theme.palette.primary.main;
  if (state === 'active') return theme.palette.warning.main; // "signal" accent
  return theme.palette.action.disabled;
};

/**
 * HorizontalTimeline — a left-to-right roadmap/progress track (the horizontal
 * variant of Timeline). Nodes with connectors, labels above and captions
 * below, states done/active/todo. Complements the vertical MUI Lab Timeline.
 */
export function HorizontalTimeline({ steps, sx }: HorizontalTimelineProps) {
  return (
    <Box sx={[{ display: 'flex', alignItems: 'flex-start' }, ...(Array.isArray(sx) ? sx : [sx])]}>
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <Box key={i} sx={{ flex: last ? '0 0 auto' : 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontFamily: (t) => t.typography.overline?.fontFamily,
                fontWeight: 500,
                fontSize: '0.75rem',
                color: (t) => (step.state === 'todo' ? t.palette.text.secondary : t.palette.text.primary),
                mb: 1,
                whiteSpace: 'nowrap',
              }}
            >
              {step.label}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  flexShrink: 0,
                  backgroundColor: (t) => nodeColor(t, step.state),
                  boxShadow: (t) =>
                    step.state === 'active' ? `0 0 0 4px ${t.palette.warning.main}22` : 'none',
                }}
              />
              {!last && (
                <Box
                  sx={{
                    flex: 1,
                    height: 2,
                    mx: 0.5,
                    backgroundColor: (t) =>
                      step.state === 'done' ? t.palette.primary.main : t.palette.divider,
                  }}
                />
              )}
            </Box>
            {step.caption && (
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.75 }}>
                {step.caption}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
}

export default HorizontalTimeline;
