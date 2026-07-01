import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
// Highcharts 12: modules self-register on import — no factory call needed
import 'highcharts/highcharts-more';
import 'highcharts/modules/solid-gauge';
import type { Options } from 'highcharts';
import { buildVcVars, buildVcThemeOptions } from './vcDefaults';
import { chartVariableColors } from '../../theme';
import type { ChartVariable } from './types';

export interface GaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  threshold?: number;
  deadband?: [number, number];
  unit?: string;
  variable?: ChartVariable;
  precision?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

function varColor(variable?: ChartVariable): string {
  return variable ? chartVariableColors[variable] ?? '#999' : '#999';
}

export function GaugeChart({
  value,
  min = 0,
  max = 100,
  threshold,
  deadband,
  unit = '',
  variable,
  precision = 1,
  height = 220,
  className,
  style,
}: GaugeChartProps) {
  const theme = useTheme();
  const vcVars = useMemo(() => buildVcVars(theme), [theme]);
  const color = varColor(variable);

  const options = useMemo<Options>(() => {
    const plotBands = [];
    if (deadband) {
      plotBands.push({
        from: min, to: deadband[0],
        color: theme.palette.error.light, thickness: 8,
      });
      plotBands.push({
        from: deadband[0], to: deadband[1],
        color: theme.palette.success.light, thickness: 8,
      });
      plotBands.push({
        from: deadband[1], to: max,
        color: theme.palette.error.light, thickness: 8,
      });
    }

    return {
      chart: {
        type: 'gauge',
        height,
        backgroundColor: theme.palette.background.paper,
        plotBackgroundColor: undefined,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
          backgroundColor: theme.palette.background.default,
          borderWidth: 0,
          outerRadius: '109%',
          innerRadius: '106%',
        }],
      },
      yAxis: {
        min, max,
        stops: [[1, color]],
        lineColor: theme.palette.divider,
        tickColor: theme.palette.divider,
        minorTickColor: theme.palette.divider,
        tickLength: 8,
        minorTickLength: 4,
        labels: {
          step: 2,
          style: { color: theme.palette.text.secondary, fontSize: '11px' },
          format: `{value}${unit ? ' ' + unit : ''}`,
        },
        plotBands,
        plotLines: threshold
          ? [{ value: threshold, color: color, width: 2, dashStyle: 'ShortDash' }]
          : [],
        title: { text: unit, style: { color: theme.palette.text.secondary } },
      },
      series: [{
        type: 'gauge',
        name: variable ?? 'Value',
        data: [value],
        dial: { backgroundColor: color, borderColor: color, radius: '80%' },
        pivot: { backgroundColor: color },
        tooltip: { valueSuffix: unit ? ' ' + unit : '', valueDecimals: precision },
      }],
    } as Options;
  }, [value, min, max, threshold, deadband, unit, variable, precision, height, color, theme]);

  return (
    <div className={className} style={{ ...vcVars, ...style }}>
      <HighchartsReact highcharts={Highcharts} options={Highcharts.merge(buildVcThemeOptions(theme), options)} />
    </div>
  );
}

export default GaugeChart;
