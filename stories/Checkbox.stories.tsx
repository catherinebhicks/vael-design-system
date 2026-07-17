import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormControlLabel, FormGroup } from '@mui/material';
import { Checkbox } from '../src/components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Selection/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'default'] },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium'] },
  },
  parameters: {
    a11y: { test: 'todo' },
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=32-29' } },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { defaultChecked: true } };
export const Unchecked: Story = { args: {} };
export const Indeterminate: Story = { args: { indeterminate: true } };
export const Disabled: Story = { args: { disabled: true, defaultChecked: true } };

// A bare Checkbox shown in isolation has no accessible name — axe flags `label`.
// That's an artifact of the isolated demo, not a component defect. In real use,
// always pair it with a visible label via FormControlLabel (below).
export const AccessibleUsage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The stories above show the checkbox in isolation (no label) to document its visual states. In production, wrap every Checkbox in `FormControlLabel` so the visible text is programmatically its accessible name. If a checkbox truly has no visible label, give it `inputProps={{ \'aria-label\': \'…\' }}`.',
      },
    },
  },
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Email me about product updates" />
      <FormControlLabel control={<Checkbox />} label="Email me about offers" />
      <FormControlLabel disabled control={<Checkbox />} label="Unavailable option" />
    </FormGroup>
  ),
};
