import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import type { Options } from 'highcharts';
import { buildVcVars, buildVcThemeOptions } from './vcDefaults';
import { chartVariableColors } from '../../theme';
import type { TimeSeriesData, ChartVariable } from './types';

// Minimal inline chart — no axes, no tooltip, no chrome.
// Use alongside a metric label to show trend at a glance.

export interface SparklineChartProps {
  data: TimeSeriesData;
  variable?: ChartVariable;
  color?: string;
  height?: number;
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function SparklineChart({
  data,
  variable,
  color,
  height = 48,
  width = 120,
  className,
  style,
}: SparklineChartProps) {
  const theme = useTheme();
  const vcVars = useMemo(() => buildVcVars(theme), [theme]);
  const lineColor = color ?? (variable ? chartVariableColors[variable] : theme.palette.primary.main);

  const options = useMemo<Options>(() => ({
    chart: {
      type: 'line',
      height,
      width,
      margin: [2, 0, 2, 0],
      backgroundColor: 'transparent',
      style: { overflow: 'hidden' },
    },
    xAxis: { visible: false },
    yAxis: { visible: false },
    legend: { enabled: false },
    tooltip: { enabled: false },
    plotOptions: {
      series: {
        animation: false,
        lineWidth: 1.5,
        marker: { enabled: false },
        states: { hover: { enabled: false } },
      },
    },
    series: [{
      type: 'line',
      data,
      color: lineColor,
    }],
  }), [data, height, width, lineColor]);

  return (
    <div
      className={['vc-chart--spark', className].filter(Boolean).join(' ')}
      style={{ display: 'inline-block', ...vcVars, ...style }}
    >
      <HighchartsReact highcharts={Highcharts} options={Highcharts.merge(buildVcThemeOptions(theme), options)} />
    </div>
  );
}

export default SparklineChart;
