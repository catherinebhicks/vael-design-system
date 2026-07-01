import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import type { Options } from 'highcharts';
import { buildVcVars } from './vcDefaults';

// Categorical bar/column chart. Vertical columns by default; set `horizontal`
// for bars. Series colors default to the Vael categorical palette.

export interface BarSeries {
  name: string;
  data: number[];
  color?: string;
}

export interface BarChartProps {
  categories: string[];
  series: BarSeries[];
  /** Render horizontal bars instead of vertical columns. */
  horizontal?: boolean;
  /** Stack series on top of each other. */
  stacked?: boolean;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function BarChart({
  categories,
  series,
  horizontal = false,
  stacked = false,
  height = 320,
  className,
  style,
}: BarChartProps) {
  const theme = useTheme();
  const vcVars = useMemo(() => buildVcVars(theme), [theme]);

  const options = useMemo<Options>(() => ({
    chart: { type: horizontal ? 'bar' : 'column', height, backgroundColor: 'transparent' },
    xAxis: { type: 'category', categories, gridLineWidth: 0 },
    yAxis: { title: { text: null as unknown as undefined } },
    legend: { enabled: series.length > 1 },
    plotOptions: {
      series: { stacking: stacked ? 'normal' : undefined, borderRadius: 4, borderWidth: 0 },
    },
    series: series.map((s) => ({ type: horizontal ? 'bar' : 'column', ...s })),
  }), [categories, series, horizontal, stacked, height]);

  return (
    <div className={className} style={{ ...vcVars, ...style }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default BarChart;
