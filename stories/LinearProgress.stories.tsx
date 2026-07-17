import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinearProgress } from '../src/components/LinearProgress';
import { Box, Typography } from '@mui/material';

const meta: Meta<typeof LinearProgress> = {
  title: 'Feedback/Progress/Linear',
  component: LinearProgress,
  tags: ['autodocs'],
  parameters: {
    a11y: { test: 'todo' },
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=38-8' } },
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

// A bare progress bar in isolation has no accessible name — axe flags
// `aria-progressbar-name`. It's an isolated-demo artifact. In real use, name it
// with `aria-labelledby` (to visible text) or `aria-label`.
export const AccessibleUsage: Story = {
  render: () => (
    <>
      <Typography id="upload-label" variant="body2" sx={{ mb: 0.5 }}>
        Uploading files…
      </Typography>
      <LinearProgress aria-labelledby="upload-label" variant="determinate" value={60} />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Give every progress bar an accessible name so it is announced with a purpose — `aria-labelledby` pointing at visible status text (below), or `aria-label`.',
      },
    },
  },
};
