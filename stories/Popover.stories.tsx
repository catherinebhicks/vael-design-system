import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography } from '@mui/material';
import { Button } from '../src/components/Button';
import { Popover } from '../src/components/Popover';

const meta: Meta<typeof Popover> = {
  title: 'Utils/Popover',
  component: Popover,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=86-26' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    return (
      <Box>
        <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Open popover
        </Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Typography sx={{ p: 2, maxWidth: 260 }}>
            A Popover floats content above the UI, anchored to an element.
          </Typography>
        </Popover>
      </Box>
    );
  },
};
