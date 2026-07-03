import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeading } from '../src/components/SectionHeading';
import { SlideSection } from '../src/components/SlideSection';

const meta: Meta<typeof SectionHeading> = {
  title: 'Presentation/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryObj<typeof SectionHeading> = {
  args: {
    index: '05',
    eyebrow: 'The design · home',
    title: 'The most urgent question, one click away.',
    description: 'The header carried search and a can’t-miss “Do I qualify?” CTA on every page.',
    titleMaxCh: 18,
  },
};

export const SignalTone: StoryObj<typeof SectionHeading> = {
  args: {
    index: '07',
    eyebrow: 'The practical heart',
    tone: 'signal',
    title: 'Turning a legal obligation into a real number.',
    titleMaxCh: 18,
  },
};

export const OnASlide: StoryObj = {
  render: () => (
    <SlideSection label="Demo" sx={{ height: 540 }}>
      <SectionHeading index="02" eyebrow="The goal & the hypothesis" title="One job: fully informed, immediately." titleMaxCh={24} />
    </SlideSection>
  ),
};
