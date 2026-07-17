import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../src/components/Card';
import { CardContent, CardActions, Typography, Button } from '@mui/material';

const meta: Meta = {
  title: 'Surfaces/Card',
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=35-12' } },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Card Title</Typography>
        <Typography variant="body2" color="text.secondary">
          Card description text that explains the content of this card.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Action</Button>
        <Button size="small">Secondary</Button>
      </CardActions>
    </Card>
  ),
};

export const Outlined: StoryObj = {
  render: () => (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Outlined Card</Typography>
        <Typography variant="body2" color="text.secondary">Outlined variant.</Typography>
      </CardContent>
    </Card>
  ),
};

/**
 * Opt-in engine-room flourish: `variant="accent"` adds the landing page's glowing
 * blue accent-bar down the left edge. Use for a highlighted/featured card.
 */
export const Accent: StoryObj = {
  render: () => (
    <Card variant="accent" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Accent Card</Typography>
        <Typography variant="body2" color="text.secondary">
          A glowing blue accent-bar marks this card as featured — the same device the
          case-study page uses on its panels.
        </Typography>
      </CardContent>
    </Card>
  ),
};
