import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import type { Options } from 'highcharts';
import { buildVcVars } from './vcDefaults';

// Area chart for trends and part-of-whole-over-time. Accepts time-series
// ([timestamp, value]) or categorical (number[]) data. Series colors default
// to the Vael categorical palette; the subtle fill comes from the global theme.

export interface AreaSeries {
  name: string;
  data: Array<[number, number]> | number[];
  color?: string;
}

export interface AreaChartProps {
  series: AreaSeries[];
  /** Category labels for a categorical x-axis. Omit for a datetime axis. */
  categories?: string[];
  /** Stack series (e.g. part-of-whole over time). */
  stacked?: boolean;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function AreaChart({
  series,
  categories,
  stacked = false,
  height = 320,
  className,
  style,
}: AreaChartProps) {
  const theme = useTheme();
  const vcVars = useMemo(() => buildVcVars(theme), [theme]);

  const options = useMemo<Options>(() => ({
    chart: { type: 'area', height, backgroundColor: 'transparent' },
    xAxis: categories
      ? { type: 'category', categories, gridLineWidth: 0 }
      : { type: 'datetime' },
    yAxis: { title: { text: null as unknown as undefined } },
    legend: { enabled: series.length > 1 },
    plotOptions: {
      area: { stacking: stacked ? 'normal' : undefined, marker: { enabled: false } },
    },
    series: series.map((s) => ({ type: 'area', ...s })),
  }), [series, categories, stacked, height]);

  return (
    <div className={className} style={{ ...vcVars, ...style }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default AreaChart;
