import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormControlLabel, FormGroup } from '@mui/material';
import { Switch } from '../src/components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Inputs/Selection/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=30-15' },
  },
  // aria-label makes the standalone demo accessible; production uses a visible
  // label via FormControlLabel (see AccessibleUsage).
  args: { slotProps: { input: { 'aria-label': 'Demo switch' } } },
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'default'] },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium'] },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = { args: { defaultChecked: true } };
export const Unchecked: Story = { args: {} };
export const Disabled: Story = { args: { disabled: true, defaultChecked: true } };
export const Small: Story = { args: { size: 'small', defaultChecked: true } };

// A bare Switch in isolation has no accessible name — axe flags `label`. That's
// an isolated-demo artifact, not a component defect. In real use, label it with
// FormControlLabel (below).
export const AccessibleUsage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The stories above show the switch alone to document its states. In production, wrap every Switch in `FormControlLabel` so the visible text is its accessible name; for an icon-only toggle, pass `inputProps={{ \'aria-label\': \'…\' }}`.',
      },
    },
  },
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Email notifications" />
      <FormControlLabel control={<Switch />} label="SMS notifications" />
    </FormGroup>
  ),
};
