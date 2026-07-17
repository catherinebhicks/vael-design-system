import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '@mui/material';
import { PrintPage, KeepTogether } from '../src/components/PrintPage';
import { Descriptions } from '../src/components/Descriptions';

const meta: Meta<typeof PrintPage> = {
  title: 'Layout/PrintPage',
  component: PrintPage,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PrintPage>;

export const Report: Story = {
  render: () => (
    <PrintPage size="Letter">
      <Typography variant="h4" gutterBottom>Project report</Typography>
      <KeepTogether>
        <Descriptions
          columns={2}
          divided
          items={[
            { label: 'Project', value: 'Routable' },
            { label: 'Owner', value: 'Catherine B. Hicks' },
            { label: 'Status', value: 'In spec' },
            { label: 'Updated', value: '2026-07-16' },
          ]}
        />
      </KeepTogether>
    </PrintPage>
  ),
};
