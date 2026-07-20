import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import type { Options, SeriesOptionsType, PointOptionsObject } from 'highcharts';
import { HighchartsChart } from '../../../src/components/Charts/HighchartsChart';
import { Callout } from '../../../src/components/Callout';
import { ExampleFrame } from './ExampleFrame';

// Neutral, anonymized mock series — daily latency (ms) over two weeks, with a
// single spike on day 11 that crosses the SLA target and lands in the shaded
// "out of range" region.
const DAY = 24 * 60 * 60 * 1000;
const START = Date.UTC(2026, 4, 1);
const LATENCY = [128, 134, 121, 140, 132, 145, 138, 151, 143, 149, 262, 168, 141, 133];
const SLA = 200; // ms — the target/threshold
const OUT_OF_RANGE_TO = 320; // top of the shaded danger band
const SPIKE_INDEX = 10; // the notable event

/**
 * Chart annotation — a time-series chart carrying three layers of context on
 * top of the data: a labeled SLA reference line (amber signal accent), a shaded
 * "out of range" band, and a point marker on the notable spike. A Callout beside
 * the chart carries the prose. Annotations are muted so the data reads first.
 *
 * Built on the base `HighchartsChart` (raw `options`) because the reference line
 * and band need the signal accent and custom labels — `ControlChart.threshold`
 * draws a variable-colored series, not an amber horizontal rule.
 */
export function ChartAnnotationExample() {
  const theme = useTheme();
  const signal = theme.palette.warning.main; // amber — thresholds/alerts, not brand blue
  const dataColor = theme.palette.primary.main;
  const muted = theme.palette.text.secondary;

  const options = useMemo<Options>(() => {
    const data: PointOptionsObject[] = LATENCY.map((y, i) => {
      const point: PointOptionsObject = { x: START + i * DAY, y };
      if (i === SPIKE_INDEX) {
        // Point marker + label for the notable event.
        point.marker = { enabled: true, radius: 5, fillColor: signal, lineColor: signal, lineWidth: 2 };
        point.dataLabels = {
          enabled: true,
          format: 'Deploy v2.4',
          y: -12,
          style: { color: muted, fontWeight: '600', fontSize: '10px', textOutline: 'none' },
        };
      }
      return point;
    });

    return {
      chart: { type: 'line', height: 320 },
      title: { text: undefined },
      legend: { enabled: false },
      xAxis: { type: 'datetime', labels: { format: '{value:%b %e}' } },
      yAxis: {
        title: { text: 'Latency (ms)' },
        // Shaded "out of range" region — muted danger band above the SLA.
        plotBands: [
          {
            from: SLA,
            to: OUT_OF_RANGE_TO,
            color: alpha(signal, 0.08),
            label: {
              text: 'Out of range',
              align: 'left',
              x: 8,
              style: { color: muted, fontSize: '10px' },
            },
          },
        ],
        // Labeled horizontal reference line — the SLA target, in the signal accent.
        plotLines: [
          {
            value: SLA,
            color: signal,
            width: 1.5,
            dashStyle: 'Dash',
            zIndex: 4,
            label: {
              text: `SLA target · ${SLA} ms`,
              align: 'right',
              x: -8,
              y: -6,
              style: { color: signal, fontSize: '11px', fontWeight: '600' },
            },
          },
        ],
      },
      tooltip: { valueSuffix: ' ms' },
      series: [
        {
          type: 'line',
          name: 'Latency',
          data,
          color: dataColor,
          marker: { enabled: false, symbol: 'circle' },
        } as SeriesOptionsType,
      ],
    };
  }, [signal, dataColor, muted]);

  return (
    <ExampleFrame padded>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3, alignItems: 'center' }}>
        <HighchartsChart options={options} />
        <Callout tone="warning" title="Reading the chart">
          The dashed amber line is the 200&nbsp;ms SLA target; the shaded band above it is the
          out-of-range region. Latency held well under target all fortnight except for a single
          spike to 262&nbsp;ms on the <strong>Deploy v2.4</strong> day — one bad point, not a trend.
          Annotations stay muted so the data line reads first.
        </Callout>
      </Box>
    </ExampleFrame>
  );
}

export default ChartAnnotationExample;
