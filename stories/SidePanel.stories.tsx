import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mui/material';
import { SidePanel } from '../src/components/SidePanel';
import { Descriptions } from '../src/components/Descriptions';

const meta: Meta<typeof SidePanel> = {
  title: 'Navigation/SidePanel',
  component: SidePanel,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SidePanel>;

export const RowDetail: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open detail panel
        </Button>
        <SidePanel
          open={open}
          onClose={() => setOpen(false)}
          title="Routable"
          subtitle="Accessibility nav app"
          footer={
            <>
              <Button onClick={() => setOpen(false)}>Close</Button>
              <Button variant="contained">Edit</Button>
            </>
          }
        >
          <Descriptions
            items={[
              { label: 'Status', value: 'In spec' },
              { label: 'Owner', value: 'Catherine B. Hicks' },
              { label: 'Stack', value: 'Supabase + MapTiler' },
              { label: 'Next', value: 'Wire the map + rating store', full: true },
            ]}
            divided
          />
        </SidePanel>
      </>
    );
  },
};
