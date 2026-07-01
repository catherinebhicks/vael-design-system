export type ChartEventType = 'override' | 'alarm' | 'milestone' | 'system';
export type ChartEventSeverity = 'info' | 'warning' | 'critical';

export interface ChartEvent {
  t: number;           // unix ms timestamp
  type: ChartEventType;
  severity: ChartEventSeverity;
  label: string;
}

export type TimeSeriesPoint = [number, number];  // [timestamp ms, value]
export type TimeSeriesData = TimeSeriesPoint[];

export type CssVariable = string; // e.g. 'var(--vc-var-cpu)'

export type ChartVariable = 'Cpu' | 'Memory' | 'Latency' | 'Throughput' | 'Requests' | 'Storage';
