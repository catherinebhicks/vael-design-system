import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Button, Stack } from '@mui/material';
import { CtaBar } from '../src/components/CtaBar';

const meta: Meta<typeof CtaBar> = {
  title: 'Marketing/CtaBar',
  component: CtaBar,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=136-38' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CtaBar>;

export const Variants: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 860 }}>
      <CtaBar
        title="Ready to see the work?"
        subtitle="Browse 50+ case studies across product, systems, and research."
        actions={<Button variant="contained" color="inherit" sx={{ color: 'primary.main', bgcolor: 'common.white' }}>View work</Button>}
      />
      <CtaBar
        variant="subtle"
        title="Have a project in mind?"
        subtitle="Let's talk about how a system-first approach fits your team."
        actions={<Button variant="contained">Get in touch</Button>}
      />
    </Stack>
  ),
};
