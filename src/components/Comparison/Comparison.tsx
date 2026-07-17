import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface ComparisonPanel {
  label: React.ReactNode;
  content: React.ReactNode;
  /** Tone for the label chip. */
  tone?: 'neutral' | 'before' | 'after';
}

export interface ComparisonProps {
  before: ComparisonPanel;
  after: ComparisonPanel;
  /** Stack vertically instead of side-by-side. */
  vertical?: boolean;
  sx?: SxProps<Theme>;
}

function Panel({ panel, defaultTone }: { panel: ComparisonPanel; defaultTone: 'before' | 'after' }) {
  const tone = panel.tone ?? defaultTone;
  return (
    <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box
        sx={{
          alignSelf: 'flex-start',
          px: 1,
          py: 0.25,
          borderRadius: 1,
          fontFamily: (t) => t.typography.overline?.fontFamily,
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: (t) =>
            tone === 'after' ? t.palette.success.dark : tone === 'before' ? t.palette.text.secondary : t.palette.text.primary,
          bgcolor: (t) =>
            tone === 'after'
              ? t.palette.success.light + '33'
              : tone === 'before'
              ? t.palette.action.hover
              : t.palette.action.selected,
        }}
      >
        {panel.label}
      </Box>
      <Box
        sx={{
          flex: 1,
          p: 2,
          borderRadius: 2,
          border: (t) => `1px solid ${t.palette.divider}`,
          bgcolor: 'background.paper',
        }}
      >
        {typeof panel.content === 'string' ? (
          <Typography variant="body2" color="text.secondary">
            {panel.content}
          </Typography>
        ) : (
          panel.content
        )}
      </Box>
    </Box>
  );
}

/**
 * Comparison / BeforeAfter — two labeled panels side by side (or stacked) for
 * before/after, old/new, us/them framing. Content can be text, an ImageSlot,
 * or any node.
 */
export function Comparison({ before, after, vertical = false, sx }: ComparisonProps) {
  return (
    <Box
      sx={[
        { display: 'flex', flexDirection: vertical ? 'column' : 'row', gap: 2, alignItems: 'stretch' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Panel panel={before} defaultTone="before" />
      <Panel panel={after} defaultTone="after" />
    </Box>
  );
}

export default Comparison;
