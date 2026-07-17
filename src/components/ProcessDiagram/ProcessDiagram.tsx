import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ProcessStep {
  label: React.ReactNode;
  caption?: React.ReactNode;
  icon?: IconDefinition;
  /** Emphasise this step (current/active). */
  active?: boolean;
}

export interface ProcessDiagramProps {
  steps: ProcessStep[];
  /** Lay out vertically (arrows point down). */
  vertical?: boolean;
  color?: string;
  sx?: SxProps<Theme>;
}

/**
 * ProcessDiagram / FlowStep — labeled step boxes connected by arrows. For
 * "how it works", pipelines, and journey overviews. Horizontal by default,
 * wraps; set `vertical` for a top-down flow.
 */
export function ProcessDiagram({ steps, vertical = false, color, sx }: ProcessDiagramProps) {
  return (
    <Box
      sx={[
        {
          display: 'flex',
          flexDirection: vertical ? 'column' : 'row',
          flexWrap: vertical ? 'nowrap' : 'wrap',
          alignItems: vertical ? 'stretch' : 'stretch',
          gap: 1,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {steps.map((step, i) => {
        const accent = color;
        const last = i === steps.length - 1;
        return (
          <React.Fragment key={i}>
            <Box
              sx={{
                flex: vertical ? '0 0 auto' : '1 1 140px',
                minWidth: 140,
                display: 'flex',
                flexDirection: 'column',
                gap: 0.75,
                p: 1.75,
                borderRadius: 2,
                border: (t) => `1px solid ${step.active ? accent ?? t.palette.primary.main : t.palette.divider}`,
                bgcolor: (t) => (step.active ? alpha(accent ?? t.palette.primary.main, 0.06) : t.palette.background.paper),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {step.icon && (
                  <Box sx={{ color: (t) => accent ?? t.palette.primary.main, fontSize: 13 }}>
                    <FontAwesomeIcon icon={step.icon} />
                  </Box>
                )}
                <Typography
                  sx={{ fontFamily: (t) => t.typography.h6.fontFamily, fontWeight: 600, fontSize: '0.875rem' }}
                >
                  {step.label}
                </Typography>
              </Box>
              {step.caption && (
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8125rem' }}>
                  {step.caption}
                </Typography>
              )}
            </Box>
            {!last && (
              <Box
                aria-hidden
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'text.disabled',
                  transform: vertical ? 'rotate(90deg)' : 'none',
                  px: vertical ? 0 : 0.25,
                  py: vertical ? 0.25 : 0,
                }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Box>
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
}

export default ProcessDiagram;
