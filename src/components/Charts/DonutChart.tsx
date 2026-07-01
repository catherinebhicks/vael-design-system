import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import type { Options } from 'highcharts';
import { buildVcVars } from './vcDefaults';

// Donut chart for part-of-whole data, with an optional center label.
// Series colors default to the Vael categorical palette (set globally in vcDefaults).

export interface DonutSlice {
  name: string;
  y: number;
  color?: string;
}

export interface DonutChartProps {
  data: DonutSlice[];
  height?: number;
  /** Inner radius of the donut hole. Defaults to '70%'. Set '0%' for a full pie. */
  innerSize?: string;
  /** Big number + caption rendered in the center of the donut. */
  centerLabel?: { value: string; label?: string };
  /** Show slice labels (name + %). Defaults to false (rely on legend/tooltip). */
  showDataLabels?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function DonutChart({
  data,
  height = 280,
  innerSize = '70%',
  centerLabel,
  showDataLabels = false,
  className,
  style,
}: DonutChartProps) {
  const theme = useTheme();
  const vcVars = useMemo(() => buildVcVars(theme), [theme]);

  const options = useMemo<Options>(() => ({
    chart: { type: 'pie', height, backgroundColor: 'transparent' },
    tooltip: { pointFormat: '<b>{point.y}</b> ({point.percentage:.0f}%)' },
    plotOptions: {
      pie: {
        innerSize,
        borderWidth: 0,
        dataLabels: {
          enabled: showDataLabels,
          format: '{point.name}',
          style: { fontWeight: '500', textOutline: 'none', color: theme.palette.text.secondary },
        },
      },
    },
    series: [{ type: 'pie', name: 'Value', data }],
  }), [data, height, innerSize, showDataLabels, theme]);

  return (
    <div className={className} style={{ position: 'relative', ...vcVars, ...style }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
      {centerLabel && (
        <div
          aria-hidden
          style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', pointerEvents: 'none',
          }}
        >
          <span style={{ fontSize: 26, fontWeight: 700, color: theme.palette.text.primary, lineHeight: 1.1 }}>
            {centerLabel.value}
          </span>
          {centerLabel.label && (
            <span style={{ fontSize: 12, color: theme.palette.text.secondary }}>{centerLabel.label}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default DonutChart;
