import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, IconButton } from '@mui/material';
import { ChartCard } from '../src/components/ChartCard';
import { Legend } from '../src/components/Legend';
import { AreaChart } from '../src/components/Charts/AreaChart';
import { palette } from '../src/theme';

const meta: Meta = { title: 'Data Viz/ChartCard', parameters: { layout: 'padded' } };
export default meta;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ maxWidth: 560 }}>
      <ChartCard
        title="Traffic"
        subtitle="Last 6 months"
        action={<IconButton size="small" aria-label="More">⋯</IconButton>}
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
    </Box>
  ),
};

export const InteractiveLegend: StoryObj = {
  render: () => {
    const [active, setActive] = React.useState([true, true]);
    return (
      <Box sx={{ maxWidth: 560 }}>
        <ChartCard title="Toggle series">
          <AreaChart
            height={240}
            categories={months}
            series={[
              active[0] && { name: 'Sessions', data: [820, 932, 901, 1034, 1290, 1330], color: palette.primary[600] },
              active[1] && { name: 'Conversions', data: [120, 145, 132, 190, 240, 262], color: palette.teal[600] },
            ].filter(Boolean) as any}
          />
          <Box sx={{ mt: 1.5 }}>
            <Legend
              items={[
                { label: 'Sessions', color: palette.primary[600], active: active[0] },
                { label: 'Conversions', color: palette.teal[600], active: active[1] },
              ]}
              onToggle={(i) => setActive((a) => a.map((v, idx) => (idx === i ? !v : v)))}
            />
          </Box>
        </ChartCard>
      </Box>
    );
  },
};
