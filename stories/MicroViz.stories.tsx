import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Stack, Paper } from '@mui/material';
import { faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Sparkline } from '../src/components/Sparkline';
import { StatBlock } from '../src/components/StatBlock';
import { SegmentMeter } from '../src/components/SegmentMeter';
import { MeterRow } from '../src/components/MeterRow';
import { WaffleChart } from '../src/components/WaffleChart';
import { GaugeStat } from '../src/components/GaugeStat';

const meta: Meta = {
  title: 'Data Viz/Micro',
  tags: ['autodocs'],
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=131-2' }, layout: 'padded' },
};
export default meta;

const trend = [4, 6, 5, 8, 7, 9, 8, 11, 10, 13];

export const SparklineStory: StoryObj = {
  name: 'Sparkline',
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      <Sparkline data={trend} />
      <Sparkline data={trend} area />
      <Sparkline data={[9, 7, 8, 5, 6, 4, 5, 3]} color="#c62828" />
    </Stack>
  ),
};

export const StatBlockStory: StoryObj = {
  name: 'StatBlock',
  render: () => (
    <Stack direction="row" spacing={2}>
      <Paper variant="outlined" sx={{ p: 2, minWidth: 200 }}>
        <StatBlock
          label="Monthly active"
          value="12.4k"
          delta={{ value: '+18%', direction: 'up' }}
          icon={faUsers}
          visual={<Sparkline data={trend} width={72} height={24} />}
        />
      </Paper>
      <Paper variant="outlined" sx={{ p: 2, minWidth: 200 }}>
        <StatBlock
          label="Bounce rate"
          value="32"
          unit="%"
          delta={{ value: '-4%', direction: 'down', good: true }}
          icon={faChartLine}
        />
      </Paper>
    </Stack>
  ),
};

export const SegmentMeterStory: StoryObj = {
  name: 'SegmentMeter',
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 200 }}>
      <SegmentMeter value={4} segments={5} />
      <SegmentMeter value={2} segments={5} color="#ef6c00" />
      <SegmentMeter value={0.7} segments={10} rounded />
    </Stack>
  ),
};

export const MeterRowStory: StoryObj = {
  name: 'MeterRow / SkillBar',
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 320 }}>
      <MeterRow label="Research" value={90} />
      <MeterRow label="Visual design" value={82} />
      <MeterRow label="Prototyping" value={68} color="#ef6c00" />
      <MeterRow label="Budget used" value={140} max={200} valueLabel="$140k / $200k" />
    </Stack>
  ),
};

export const WaffleChartStory: StoryObj = {
  name: 'WaffleChart',
  render: () => (
    <Stack direction="row" spacing={4}>
      <WaffleChart value={68} />
      <WaffleChart value={0.34} color="#ef6c00" />
    </Stack>
  ),
};

export const GaugeStatStory: StoryObj = {
  name: 'GaugeStat',
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <GaugeStat value={68} label="Coverage" />
      <GaugeStat value={92} color="#2e7d32" label="Uptime" />
      <GaugeStat value={45} variant="semi" label="Load" />
    </Stack>
  ),
};

/**
 * Inverted / on-dark: StatBlock (variant="ink") and GaugeStat (onDark) render
 * light-on-dark for use on an emphasis / ink band — the label, value, and gauge
 * track all re-resolve to light so the metrics stay legible on a dark surface.
 */
export const InvertedOnDark: StoryObj = {
  name: 'Stats — Inverted (on dark)',
  render: () => (
    <Box sx={{ bgcolor: '#0a0e14', p: 5, borderRadius: 2 }}>
      <Stack direction="row" spacing={6} alignItems="center" flexWrap="wrap">
        <StatBlock variant="ink" label="Hours saved" value="100K+" />
        <StatBlock variant="ink" label="Engagement lift" value="23%" delta={{ value: '+18%', direction: 'up' }} />
        <StatBlock variant="ink" label="Steps cut" value="15 → 8" />
        <GaugeStat value={92} onDark label="Uptime" />
      </Stack>
    </Box>
  ),
};
