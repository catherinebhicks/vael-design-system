import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SlideSection } from '../src/components/SlideSection';
import { SectionHeading } from '../src/components/SectionHeading';

const meta: Meta<typeof SlideSection> = {
  title: 'Presentation/SlideSection',
  component: SlideSection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Base: StoryObj<typeof SlideSection> = {
  render: () => (
    <SlideSection label="Base" sx={{ height: 540 }}>
      <SectionHeading index="01" eyebrow="The problem" title="A legal obligation, not a brand play." titleMaxCh={16} />
    </SlideSection>
  ),
};

export const Accent: StoryObj<typeof SlideSection> = {
  render: () => (
    <SlideSection variant="accent" label="Accent" sx={{ height: 540 }}>
      <SectionHeading index="03" eyebrow="The real constraint" title="Designing under legal oversight." titleMaxCh={22} />
    </SlideSection>
  ),
};
