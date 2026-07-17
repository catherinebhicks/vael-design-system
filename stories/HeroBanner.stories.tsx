import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@mui/material';
import { HeroBanner } from '../src/components/HeroBanner';
import { ImageSlot } from '../src/components/ImageSlot';

const meta: Meta<typeof HeroBanner> = {
  title: 'Marketing/HeroBanner',
  component: HeroBanner,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=138-3' }, layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof HeroBanner>;

export const WithMedia: Story = {
  render: () => (
    <div style={{ padding: '0 32px', maxWidth: 1120, margin: '0 auto' }}>
      <HeroBanner
        eyebrow="A Focused Design"
        title="Design systems that ship."
        subtitle="25 years turning research and product strategy into interfaces teams can build on."
        actions={
          <>
            <Button variant="contained" size="large">View work</Button>
            <Button variant="outlined" size="large">About</Button>
          </>
        }
        media={<ImageSlot ratio={4 / 3} label="Hero media" />}
      />
    </div>
  ),
};

export const Centered: Story = {
  render: () => (
    <div style={{ padding: '0 32px', maxWidth: 820, margin: '0 auto' }}>
      <HeroBanner
        centered
        eyebrow="The Whiteboard"
        title="A case-study engine for designers."
        subtitle="Turn your work into stories that get you hired."
        actions={<Button variant="contained" size="large">Subscribe</Button>}
      />
    </div>
  ),
};
