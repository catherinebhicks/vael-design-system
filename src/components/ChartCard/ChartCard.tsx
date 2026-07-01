import React from 'react';
import { Card, CardHeader, CardContent, Box } from '@mui/material';
import { Legend, type LegendItem } from '../Legend';

// A card wrapper for any chart: header (title/subtitle + toolbar `action` slot),
// the chart itself (children), and an optional footer Legend. Turns a raw chart
// into a product-ready dashboard tile.

export interface ChartCardProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Toolbar slot on the right of the header (menu, filter, date range, etc.). */
  action?: React.ReactNode;
  /** Optional footer legend. */
  legend?: LegendItem[];
  onLegendToggle?: (index: number, item: LegendItem) => void;
  children: React.ReactNode;
  className?: string;
}

export function ChartCard({
  title,
  subtitle,
  action,
  legend,
  onLegendToggle,
  children,
  className,
}: ChartCardProps) {
  return (
    <Card className={className}>
      {(title || subtitle || action) && (
        <CardHeader
          title={title}
          subheader={subtitle}
          action={action}
          titleTypographyProps={{ variant: 'h6', fontWeight: 600 }}
          subheaderTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
          sx={{ pb: 1 }}
        />
      )}
      <CardContent sx={{ pt: title || action ? 0 : 2 }}>
        {children}
        {legend && legend.length > 0 && (
          <Box sx={{ mt: 1.5 }}>
            <Legend items={legend} onToggle={onLegendToggle} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default ChartCard;
