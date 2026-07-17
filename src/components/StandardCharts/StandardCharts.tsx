// Charts — Standard tier, backed by @mui/x-charts (community/free).
// Lightweight, SVG, theme-native. The default product-charting layer:
// reach for the Advanced (Highcharts) tier only for SPC/multi-axis/solid-gauge
// /large-dataset/export needs, and the Micro tier for inline stat viz.
//
// Re-exported under the `StandardCharts` namespace in the package root to
// avoid colliding with the flat Highcharts exports (e.g. BarChart).
export {
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  SparkLineChart,
  Gauge,
  RadarChart,
} from '@mui/x-charts';
export type {
  LineChartProps,
  BarChartProps,
  PieChartProps,
  ScatterChartProps,
  SparkLineChartProps,
  GaugeProps,
} from '@mui/x-charts';
export type { RadarChartProps } from '@mui/x-charts/RadarChart';
