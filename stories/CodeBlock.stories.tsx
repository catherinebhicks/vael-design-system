import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { CodeBlock } from '../src/components/CodeBlock';

const meta: Meta<typeof CodeBlock> = {
  title: 'Display/CodeBlock',
  component: CodeBlock,
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=143-3' }, layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CodeBlock>;

const sample = `import { Button, StatBlock } from 'vael-design-system';

export function Kpi() {
  return <StatBlock label="Active" value="12.4k" />;
}`;

export const Basic: Story = {
  render: () => (
    <Box sx={{ maxWidth: 520 }}>
      <CodeBlock language="tsx" code={sample} lineNumbers highlightLines={[3, 4]} />
    </Box>
  ),
};
