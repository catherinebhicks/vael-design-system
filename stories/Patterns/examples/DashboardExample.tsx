import React from 'react';
import { Box, Typography } from '@mui/material';
import { StatCard } from '../../../src/components/StatCard';
import { ChartCard } from '../../../src/components/ChartCard';
import { AreaChart } from '../../../src/components/Charts/AreaChart';
import { BarChart } from '../../../src/components/Charts/BarChart';
import { DonutChart } from '../../../src/components/Charts/DonutChart';
import { palette } from '../../../src/theme';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const spark = [12, 14, 13, 18, 16, 22, 20, 26, 24, 30];

/**
 * The flagship dashboard composition — KPI grid of StatCards over the
 * reskinned Highcharts layer. Shared by the Patterns/Dashboard story and
 * the Patterns/Dashboard docs page so they never drift.
 */
export function DashboardOverview() {
  return (
    <Box sx={{ p: 3, bgcolor: 'background.default' }}>
      <Typography variant="h4" sx={{ mb: 0.5 }}>
        Overview
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        A dashboard assembled entirely from Vael components on the reskinned Highcharts layer.
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 2, mb: 2 }}>
        <StatCard label="Active users" value="12,480" delta={12.5} caption="vs last week" sparkline={spark} />
        <StatCard label="Revenue" value="$48.2k" delta={8.1} caption="vs last month" sparkline={spark} sparklineColor={palette.teal[600]} />
        <StatCard label="Error rate" value="0.42%" delta={-3.2} positiveIsGood={false} caption="down is good" />
        <StatCard label="Latency p95" value="128ms" delta={-1.1} positiveIsGood={false} caption="vs last week" />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 2, mb: 2 }}>
        <ChartCard
          title="Traffic"
          subtitle="Sessions vs conversions"
          legend={[
            { label: 'Sessions', color: palette.primary[600] },
            { label: 'Conversions', color: palette.teal[600] },
          ]}
        >
          <AreaChart
            height={260}
            categories={months}
            series={[
              { name: 'Sessions', data: [820, 932, 901, 1034, 1290, 1330], color: palette.primary[600] },
              { name: 'Conversions', data: [120, 145, 132, 190, 240, 262], color: palette.teal[600] },
            ]}
          />
        </ChartCard>

        <ChartCard title="Traffic sources">
          <DonutChart
            height={260}
            centerLabel={{ value: '2,480', label: 'Total' }}
            data={[
              { name: 'Direct', y: 1040 },
              { name: 'Referral', y: 620 },
              { name: 'Organic', y: 480 },
              { name: 'Social', y: 340 },
            ]}
          />
        </ChartCard>
      </Box>

      <ChartCard title="Requests by day" subtitle="This week">
        <BarChart
          height={280}
          categories={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          series={[
            { name: 'Requests', data: [120, 180, 150, 210, 240, 90, 70], color: palette.primary[600] },
            { name: 'Errors', data: [8, 12, 6, 14, 10, 3, 2], color: palette.rose[600] },
          ]}
        />
      </ChartCard>
    </Box>
  );
}

export default DashboardOverview;
