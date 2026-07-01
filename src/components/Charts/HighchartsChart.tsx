import React, { useMemo, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { buildVcVars, applyVcDefaults } from './vcDefaults';
import type { Options } from 'highcharts';

// Base Highcharts wrapper — applies VC global defaults and injects MUI theme
// tokens as CSS custom properties. Use this when none of the typed chart
// variants (ControlChart, MultiAxisChart, GaugeChart, SparklineChart) fit.
//
// Peer deps: highcharts >= 11, highcharts-react-official >= 3

export interface HighchartsChartProps {
  options: Options;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export function HighchartsChart({ options, height = 300, className, style }: HighchartsChartProps) {
  const theme = useTheme();
  const vcVars = useMemo(() => buildVcVars(theme), [theme]);

  useEffect(() => { applyVcDefaults(); }, []);

  const mergedOptions = useMemo<Options>(() => ({
    chart: {
      height,
      backgroundColor: 'var(--vc-surface)',
      style: { fontFamily: 'var(--vc-font-family, inherit)' },
    },
    ...options,
  }), [options, height]);

  return (
    <div className={className} style={{ ...vcVars, ...style }}>
      <HighchartsReact highcharts={Highcharts} options={mergedOptions} />
    </div>
  );
}

export default HighchartsChart;
