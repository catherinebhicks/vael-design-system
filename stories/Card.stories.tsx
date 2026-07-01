import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../src/components/Card';
import { CardContent, CardActions, Typography, Button } from '@mui/material';

const meta: Meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
  parameters: {
  },
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
