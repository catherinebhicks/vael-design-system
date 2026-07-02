import React, { useMemo } from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import { TrendBadge } from '../TrendBadge';
import { SparklineChart } from '../Charts/SparklineChart';

// A KPI / metric tile: label + big value + optional trend delta and inline
// sparkline. The core dashboard building block. Built on the themed Card.

export interface StatCardProps {
  label: string;
  value: string | number;
  /** Delta shown as a TrendBadge (e.g. 12.5 for +12.5%). */
  delta?: number;
  deltaSuffix?: string;
  /** Whether an increase is good (flips TrendBadge coloring). Defaults to true. */
  positiveIsGood?: boolean;
  /** Small caption next to the delta, e.g. "vs last week". */
  caption?: string;
  /** Trend values for an inline sparkline. */
  sparkline?: number[];
  sparklineColor?: string;
  /** Optional leading icon/adornment. */
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  label,
  value,
  delta,
  deltaSuffix = '%',
  positiveIsGood = true,
  caption,
  sparkline,
  sparklineColor,
  icon,
  className,
}: StatCardProps) {
  const sparkData = useMemo(
    () => (sparkline ? sparkline.map((v, i) => [i, v] as [number, number]) : undefined),
    [sparkline],
  );

  return (
    <Card className={className}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Box sx={{ minWidth: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            {icon && <Box sx={{ color: 'text.secondary', display: 'inline-flex' }}>{icon}</Box>}
            <Typography variant="overline" color="text.secondary" noWrap sx={{ lineHeight: 1.5 }}>
              {label}
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
            {value}
          </Typography>
          {(delta !== undefined || caption) && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
              {delta !== undefined && (
                <TrendBadge value={delta} suffix={deltaSuffix} positiveIsGood={positiveIsGood} />
              )}
              {caption && (
                <Typography variant="caption" color="text.secondary">
                  {caption}
                </Typography>
              )}
            </Box>
          )}
        </Box>
        {sparkData && (
          <SparklineChart data={sparkData} color={sparklineColor} height={44} width={110} />
        )}
      </CardContent>
    </Card>
  );
}

export default StatCard;
