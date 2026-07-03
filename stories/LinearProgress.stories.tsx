import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinearProgress } from '../src/components/LinearProgress';
import { Box } from '@mui/material';

const meta: Meta<typeof LinearProgress> = {
  title: 'Feedback/Progress/Linear',
  component: LinearProgress,
  tags: ['autodocs'],
  decorators: [(Story) => <Box sx={{ width: 300 }}><Story /></Box>],
  argTypes: {
    variant: { control: 'select', options: ['determinate', 'indeterminate', 'buffer', 'query'] },
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'] },
  },
};

export default meta;
type Story = StoryObj<typeof LinearProgress>;

export const Indeterminate: Story = { args: { variant: 'indeterminate' } };
export const Determinate: Story = { args: { variant: 'determinate', value: 60 } };
export const Success: Story = { args: { variant: 'determinate', value: 100, color: 'success' } };
