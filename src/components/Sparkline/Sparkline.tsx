import * as React from 'react';
import { useTheme } from '@mui/material/styles';

export interface SparklineProps {
  /** The series to plot. */
  data: number[];
  width?: number;
  height?: number;
  /** Stroke color (defaults to primary.main). Accepts any CSS color. */
  color?: string;
  /** Fill a soft area under the line. */
  area?: boolean;
  /** Mark the last point with a dot. */
  showLast?: boolean;
  strokeWidth?: number;
  'aria-label'?: string;
}

/**
 * Sparkline — a dependency-free inline SVG line chart for tables, cards, and
 * StatBlocks. For full analytical charts use the Standard (MUI X) or Advanced
 * (Highcharts) tiers; this is the tiny, zero-config micro-viz.
 */
export function Sparkline({
  data,
  width = 96,
  height = 28,
  color,
  area = false,
  showLast = true,
  strokeWidth = 1.5,
  ...rest
}: SparklineProps) {
  const theme = useTheme();
  const stroke = color ?? theme.palette.primary.main;
  const pad = strokeWidth + 1;

  if (data.length < 2) return <svg width={width} height={height} aria-hidden />;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const stepX = (width - pad * 2) / (data.length - 1);
  const points = data.map((d, i) => {
    const x = pad + i * stepX;
    const y = pad + (1 - (d - min) / span) * (height - pad * 2);
    return [x, y] as const;
  });
  const line = points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const [firstX] = points[0];
  const [lastX, lastY] = points[points.length - 1];
  const baseY = (height - pad).toFixed(1);
  const areaPath =
    `M ${firstX.toFixed(1)},${baseY} ` +
    points.map(([x, y]) => `L ${x.toFixed(1)},${y.toFixed(1)}`).join(' ') +
    ` L ${lastX.toFixed(1)},${baseY} Z`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={rest['aria-label'] ?? 'sparkline'}
      style={{ display: 'block', overflow: 'visible' }}
    >
      {area && <path d={areaPath} fill={stroke} opacity={0.12} />}
      <polyline
        points={line}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {showLast && <circle cx={lastX} cy={lastY} r={strokeWidth + 0.5} fill={stroke} />}
    </svg>
  );
}

export default Sparkline;
