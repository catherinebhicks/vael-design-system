import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { RadarChart } from '../src/components/Charts';

const meta: Meta<typeof RadarChart> = {
  title: 'Data Viz/Charts (Advanced · Highcharts)/RadarChart',
  component: RadarChart,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=133-2' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RadarChart>;

export const Proficiency: Story = {
  render: () => (
    <Box sx={{ maxWidth: 480 }}>
      <RadarChart
        categories={['Research', 'IA', 'Visual', 'Prototyping', 'Systems', 'Facilitation']}
        max={5}
        series={[
          { name: 'Now', data: [5, 4, 5, 4, 5, 3] },
          { name: 'Target', data: [5, 5, 5, 5, 5, 5] },
        ]}
      />
    </Box>
  ),
};
