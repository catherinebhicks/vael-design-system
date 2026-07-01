import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import type { Options, YAxisOptions, SeriesLineOptions } from 'highcharts';
import { buildVcVars } from './vcDefaults';
import { chartVariableColors } from '../../theme';
import type { TimeSeriesData, ChartVariable } from './types';

export interface MultiAxisSeries {
  variable: ChartVariable | string;
  name: string;
  data: TimeSeriesData;
  unit?: string;
  precision?: number;
  yAxisIndex?: number;
}

export interface MultiAxisChartProps {
  series: MultiAxisSeries[];
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const VAR_CSS: Record<string, string> = {
  Cpu: 'cpu', Memory: 'memory', Latency: 'latency', Throughput: 'throughput', Requests: 'requests', Storage: 'storage',
};

const AXIS_CSS: Record<string, string> = {
  Cpu: 'vc-axis-cpu', Memory: 'vc-axis-memory', Latency: 'vc-axis-latency', Throughput: 'vc-axis-throughput',
};

function varColor(variable: string): string {
  return chartVariableColors[variable as ChartVariable] ?? '#999';
}

type TCtx = { x: number; points?: Array<{ color: unknown; series: { name: string }; y?: number }> };

function makeTooltipFormatter(series: MultiAxisSeries[]) {
  return function (this: unknown): string {
    const ctx = this as TCtx;
    const date = Highcharts.dateFormat('%b %d, %Y   %H:%M', ctx.x);
    const rows = (ctx.points ?? []).map((p) => {
      const s = series.find((ss) => ss.name === p.series.name);
      const prec = s?.precision ?? 2;
      const unit = s?.unit ?? '';
      return (
        `<div class="vc-tooltip__row">` +
        `<span><span class="vc-tooltip__dot" style="background:${String(p.color)}"></span>${p.series.name}</span>` +
        `<span class="vc-tooltip__val">${(p.y ?? 0).toFixed(prec)}${unit ? ' ' + unit : ''}</span>` +
        `</div>`
      );
    }).join('');
    return `<div class="vc-tooltip"><div class="vc-tooltip__time">${date}</div>${rows}</div>`;
  };
}

export function MultiAxisChart({ series, height = 340, className, style }: MultiAxisChartProps) {
  const theme = useTheme();
  const vcVars = useMemo(() => buildVcVars(theme), [theme]);

  const options = useMemo<Options>(() => {
    const axisIndexes = [...new Set(series.map((s, i) => s.yAxisIndex ?? i))];

    const yAxis: YAxisOptions[] = axisIndexes.map((idx, pos) => {
      const s = series.find((ss, i) => (ss.yAxisIndex ?? i) === idx);
      return {
        title: { text: undefined },
        opposite: pos % 2 === 1,
        gridLineWidth: pos === 0 ? 1 : 0,
        className: s ? (AXIS_CSS[s.variable] ?? '') : '',
        labels: {
          style: {
            color: varColor(s?.variable ?? ''),
            fontFamily: '"DM Mono", "Courier New", monospace',
            fontSize: '12px',
          },
        },
      };
    });

    const hcSeries: SeriesLineOptions[] = series.map((s, i) => ({
      type: 'line',
      name: s.name,
      data: s.data,
      color: varColor(s.variable),
      className: `vc-role-actual vc-var-${VAR_CSS[s.variable] ?? 'cpu'}`,
      yAxis: axisIndexes.indexOf(s.yAxisIndex ?? i),
    }));

    return {
      chart: { height, backgroundColor: theme.palette.background.paper },
      xAxis: {
        type: 'datetime',
        crosshair: { color: theme.palette.text.secondary, dashStyle: 'Dash', width: 1 },
      },
      yAxis,
      series: hcSeries,
      legend: { enabled: true },
      tooltip: {
        useHTML: true,
        shared: true,
        formatter: makeTooltipFormatter(series),
      },
    };
  }, [series, height, theme]);

  return (
    <div className={className} style={{ ...vcVars, ...style }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default MultiAxisChart;
