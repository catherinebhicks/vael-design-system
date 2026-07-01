import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline } from '../src/components/Timeline';
import { TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Typography } from '@mui/material';

const meta: Meta = {
  title: 'Components/Timeline',
  tags: ['autodocs'],
  parameters: {
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">09:00</TimelineOppositeContent>
        <TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator>
        <TimelineContent><Typography>Job started</Typography></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">12:00</TimelineOppositeContent>
        <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
        <TimelineContent><Typography>Health check</Typography></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">18:00</TimelineOppositeContent>
        <TimelineSeparator><TimelineDot color="success" /></TimelineSeparator>
        <TimelineContent><Typography>Job completed</Typography></TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};
