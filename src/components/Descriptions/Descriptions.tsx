import * as React from 'react';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export interface DescriptionItem {
  label: React.ReactNode;
  value: React.ReactNode;
  /** Span the full width (value drops below the label). */
  full?: boolean;
}

export interface DescriptionsProps {
  items: DescriptionItem[];
  /** Number of columns (label+value pairs per row). */
  columns?: 1 | 2 | 3;
  /** Draw hairline row separators. */
  divided?: boolean;
  sx?: SxProps<Theme>;
}

/**
 * Descriptions — an aligned key/value detail list (a semantic <dl>), for
 * read-only record summaries (order details, profile fields, metadata).
 * Mono-uppercase labels in the Blueprint voice; values in body type.
 */
export function Descriptions({ items, columns = 1, divided = false, sx }: DescriptionsProps) {
  return (
    <Box
      component="dl"
      sx={[
        {
          display: 'grid',
          // Collapse to a single column on phones so 2–3 column layouts don't
          // squeeze; the requested column count applies from `sm` up.
          gridTemplateColumns: { xs: '1fr', sm: `repeat(${columns}, minmax(0, 1fr))` },
          rowGap: divided ? 0 : 1.5,
          columnGap: 3,
          m: 0,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {items.map((it, i) => (
        <Box
          key={i}
          sx={{
            gridColumn: it.full ? '1 / -1' : 'auto',
            py: divided ? 1.25 : 0,
            borderBottom: divided ? (t) => `1px solid ${t.palette.divider}` : 'none',
          }}
        >
          <Typography
            component="dt"
            sx={{
              fontFamily: (t) => t.typography.overline?.fontFamily,
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'text.secondary',
              mb: 0.25,
            }}
          >
            {it.label}
          </Typography>
          <Typography component="dd" variant="body2" sx={{ m: 0, color: 'text.primary' }}>
            {it.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Descriptions;
