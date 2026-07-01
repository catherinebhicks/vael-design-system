import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import type { Options, SeriesOptionsType } from 'highcharts';
import { buildVcVars, buildVcThemeOptions } from './vcDefaults';
import { chartEventColors, chartVariableColors } from '../../theme';
import type { TimeSeriesData, ChartEvent, ChartVariable } from './types';

export interface ControlChartProps {
  variable: ChartVariable;
  actual: TimeSeriesData;
  threshold?: TimeSeriesData;
  deadband?: [number, number];
  events?: ChartEvent[];
  unit?: string;
  precision?: number;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const VAR_CSS: Record<string, string> = {
  Cpu: 'cpu', Memory: 'memory', Latency: 'latency', Throughput: 'throughput', Requests: 'requests', Storage: 'storage',
};

function eventColor(e: ChartEvent): string {
  if (e.severity === 'critical') return chartEventColors.error;
  if (e.severity === 'warning' || e.type === 'override') return chartEventColors.warning;
  return chartEventColors.recovery;
}

type TCtx = { x: number; points?: Array<{ color: unknown; series: { name: string }; y?: number }> };

function makeTooltipFormatter(precision: number, unit: string) {
  return function (this: unknown): string {
    const ctx = this as TCtx;
    const date = Highcharts.dateFormat('%b %d, %Y   %H:%M', ctx.x);
    const rows = (ctx.points ?? []).map((p) =>
      `<div class="vc-tooltip__row">` +
      `<span><span class="vc-tooltip__dot" style="background:${String(p.color)}"></span>${p.series.name}</span>` +
      `<span class="vc-tooltip__val">${(p.y ?? 0).toFixed(precision)}${unit ? ' ' + unit : ''}</span>` +
      `</div>`
    ).join('');
    return `<div class="vc-tooltip"><div class="vc-tooltip__time">${date}</div>${rows}</div>`;
  };
}

export function ControlChart({
  variable,
  actual,
  threshold,
  deadband,
  events = [],
  unit = '',
  precision = 2,
  height = 280,
  className,
  style,
}: ControlChartProps) {
  const theme = useTheme();
  const vcVars = useMemo(() => buildVcVars(theme), [theme]);
  const varCssClass = VAR_CSS[variable] ?? 'cpu';
  const varColor = chartVariableColors[variable] ?? theme.palette.primary.main;

  const options = useMemo<Options>(() => {
    const series: SeriesOptionsType[] = [];

    if (threshold) {
      series.push({
        type: 'line',
        name: `${variable} threshold`,
        data: threshold,
        color: varColor,
        className: `vc-role-threshold vc-var-${varCssClass}`,
        zIndex: 1,
      } as SeriesOptionsType);
    }

    series.push({
      type: 'line',
      name: variable,
      data: actual,
      color: varColor,
      className: `vc-role-actual vc-var-${varCssClass}`,
      zIndex: 2,
    } as SeriesOptionsType);

    const plotBands = deadband
      ? [{ from: deadband[0], to: deadband[1], color: theme.palette.action.hover, className: 'vc-deadband' }]
      : [];

    const plotLines = events.map((e) => ({
      value: e.t,
      color: eventColor(e),
      width: 1.5,
      dashStyle: 'ShortDash' as const,
      zIndex: 3,
      label: { text: '●', rotation: 0, y: 6, style: { color: eventColor(e), fontSize: '10px' } },
    }));

    return {
      chart: { height, backgroundColor: theme.palette.background.paper },
      xAxis: {
        type: 'datetime',
        plotLines,
        crosshair: { color: theme.palette.text.secondary, dashStyle: 'Dash', width: 1 },
      },
      yAxis: {
        plotBands,
        labels: { format: `{value}${unit ? ' ' + unit : ''}` },
      },
      tooltip: {
        useHTML: true,
        shared: true,
        formatter: makeTooltipFormatter(precision, unit),
      },
      series,
    };
  }, [variable, actual, threshold, deadband, events, unit, precision, height, varColor, varCssClass, theme]);

  return (
    <div className={className} style={{ ...vcVars, ...style }}>
      <HighchartsReact highcharts={Highcharts} options={Highcharts.merge(buildVcThemeOptions(theme), options)} />
    </div>
  );
}

export default ControlChart;
