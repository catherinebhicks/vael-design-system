import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
// Highcharts 12: the polar module self-registers on import.
import 'highcharts/highcharts-more';
import type { Options } from 'highcharts';
import { buildVcVars, buildVcThemeOptions } from './vcDefaults';

// Radar / spider chart (Highcharts polar) for multi-axis comparison —
// proficiency profiles, capability coverage, before/after scorecards.
// Advanced tier: use the Standard (MUI X) RadarChart for simpler needs.

export interface RadarSeries {
  name: string;
  data: number[];
  color?: string;
}

export interface RadarChartProps {
  /** Axis category labels (one per data point). */
  categories: string[];
  /** One or more overlaid series. */
  series: RadarSeries[];
  height?: number;
  /** Max value for the radial axis. Defaults to auto. */
  max?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function RadarChart({ categories, series, height = 320, max, className, style }: RadarChartProps) {
  const theme = useTheme();
  const vcVars = useMemo(() => buildVcVars(theme), [theme]);

  const options = useMemo<Options>(() => ({
    chart: { polar: true, type: 'line', height, backgroundColor: 'transparent' },
    xAxis: {
      categories,
      tickmarkPlacement: 'on',
      lineWidth: 0,
      labels: { style: { color: theme.palette.text.secondary, fontSize: '11px' } },
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
      ...(max != null ? { max } : {}),
      gridLineColor: theme.palette.divider,
      labels: { style: { color: theme.palette.text.disabled, fontSize: '10px' } },
    },
    tooltip: { shared: true, pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}</b><br/>' },
    series: series.map((s) => ({
      type: 'line',
      name: s.name,
      data: s.data,
      color: s.color,
      pointPlacement: 'on',
      marker: { enabled: true, radius: 3 },
    })),
  }), [categories, series, height, max, theme]);

  return (
    <div className={className} style={{ ...vcVars, ...style }}>
      <HighchartsReact highcharts={Highcharts} options={Highcharts.merge(buildVcThemeOptions(theme), options)} />
    </div>
  );
}

export default RadarChart;
