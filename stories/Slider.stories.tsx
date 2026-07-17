import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '@mui/material';
import { Slider } from '../src/components/Slider';

const meta: Meta<typeof Slider> = {
  title: 'Inputs/Slider',
  component: Slider,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 300, padding: '16px 24px' }}><Story /></div>],
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
  },
  parameters: {
    a11y: { test: 'todo' },
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=40-24' } },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = { args: { defaultValue: 30 } };
export const Range: Story = { args: { defaultValue: [20, 60] } };
export const Disabled: Story = { args: { defaultValue: 30, disabled: true } };
export const WithMarks: Story = { args: { defaultValue: 30, marks: true, step: 10 } };

// A bare Slider in isolation has no accessible name — axe flags `label`. It's an
// isolated-demo artifact. In real use, give it a name: a visible label wired via
// `aria-labelledby` (below), or `aria-label` when there's no visible text. Range
// sliders also need `getAriaLabel` to name each thumb.
export const AccessibleUsage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Wire a visible label to the slider with `aria-labelledby` (or pass `aria-label` when there is no visible text). For range sliders, add `getAriaLabel={(i) => (i === 0 ? \'Minimum\' : \'Maximum\')}`.',
      },
    },
  },
  render: () => (
    <>
      <Typography id="volume-label" gutterBottom>
        Volume
      </Typography>
      <Slider aria-labelledby="volume-label" defaultValue={30} />
      <Typography id="price-label" gutterBottom sx={{ mt: 3 }}>
        Price range
      </Typography>
      <Slider
        aria-labelledby="price-label"
        getAriaLabel={(i) => (i === 0 ? 'Minimum price' : 'Maximum price')}
        defaultValue={[20, 60]}
      />
    </>
  ),
};
