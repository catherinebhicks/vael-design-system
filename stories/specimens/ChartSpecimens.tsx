import React from 'react';
import { Box, Typography } from '@mui/material';
import type { Options } from 'highcharts';
import { HighchartsChart } from '../../src/components/Charts/HighchartsChart';
import { DonutChart } from '../../src/components/Charts/DonutChart';
import { BarChart } from '../../src/components/Charts/BarChart';
import { AreaChart } from '../../src/components/Charts/AreaChart';
import { palette } from '../../src/theme';
import { SpecFrame } from './SpecFrame';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

/** Line-style variants — how the system differentiates measured vs target vs forecast. */
export function LineStyleSpecimen() {
  const options: Options = {
    chart: { type: 'line', height: 260, backgroundColor: 'transparent' },
    title: { text: undefined },
    xAxis: { type: 'category', categories: MONTHS, gridLineWidth: 0 },
    yAxis: { title: { text: null as unknown as undefined } },
    legend: { enabled: true },
    plotOptions: { series: { marker: { enabled: false } } },
    series: [
      { type: 'line', name: 'Actual', data: [820, 932, 901, 1004, 1090, 1130], color: palette.primary[600], dashStyle: 'Solid', lineWidth: 2 },
      { type: 'line', name: 'Target', data: [900, 900, 950, 950, 1000, 1000], color: palette.neutral[500], dashStyle: 'Dash', lineWidth: 2 },
      { type: 'line', name: 'Forecast', data: [null, null, null, 1004, 1120, 1240] as number[], color: palette.teal[600], dashStyle: 'Dot', lineWidth: 1 },
    ],
  };
  return (
    <SpecFrame>
      <HighchartsChart options={options} height={260} />
    </SpecFrame>
  );
}

/** Guardrail example — the ceiling: 4 series, 2 y-axes, and no more. */
export function GuardrailSpecimen() {
  const options: Options = {
    chart: { type: 'line', height: 280, backgroundColor: 'transparent' },
    title: { text: undefined },
    xAxis: { type: 'category', categories: MONTHS, gridLineWidth: 0 },
    yAxis: [
      { title: { text: 'Percent' }, max: 100, labels: { format: '{value}%' } },
      { title: { text: 'Requests/s' }, opposite: true },
    ],
    legend: { enabled: true },
    plotOptions: { series: { marker: { enabled: false } } },
    series: [
      { type: 'line', name: 'CPU', data: [42, 55, 48, 61, 58, 66], color: palette.primary[600], yAxis: 0 },
      { type: 'line', name: 'Memory', data: [61, 63, 60, 68, 71, 69], color: palette.teal[600], yAxis: 0 },
      { type: 'line', name: 'Requests', data: [120, 180, 150, 210, 240, 260], color: palette.amber[600], yAxis: 1 },
      { type: 'line', name: 'Errors', data: [8, 12, 6, 14, 10, 9], color: palette.rose[600], yAxis: 1 },
    ],
  };
  return (
    <SpecFrame>
      <HighchartsChart options={options} height={280} />
    </SpecFrame>
  );
}

/** The three added chart types, on the reskinned Highcharts layer. */
export function ChartTypeSpecimens() {
  return (
    <SpecFrame>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>Area</Typography>
          <AreaChart
            height={220}
            categories={MONTHS}
            series={[
              { name: 'Sessions', data: [820, 932, 901, 1034, 1290, 1330], color: palette.primary[600] },
              { name: 'Conversions', data: [120, 145, 132, 190, 240, 262], color: palette.teal[600] },
            ]}
          />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>Donut</Typography>
          <DonutChart
            height={220}
            centerLabel={{ value: '2,480', label: 'Total' }}
            data={[
              { name: 'Direct', y: 1040 },
              { name: 'Referral', y: 620 },
              { name: 'Organic', y: 480 },
              { name: 'Social', y: 340 },
            ]}
          />
        </Box>
        <Box sx={{ gridColumn: { md: '1 / -1' } }}>
          <Typography variant="subtitle2" gutterBottom>Bar</Typography>
          <BarChart
            height={240}
            categories={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
            series={[
              { name: 'Requests', data: [120, 180, 150, 210, 240, 90, 70], color: palette.primary[600] },
              { name: 'Errors', data: [8, 12, 6, 14, 10, 3, 2], color: palette.rose[600] },
            ]}
          />
        </Box>
      </Box>
    </SpecFrame>
  );
}
