import React from 'react';
import { Box, Typography, Button, Stack, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLifeRing, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ExampleFrame } from './ExampleFrame';

const RECOVERY: { icon: IconDefinition; label: string }[] = [
  { icon: faHouse, label: 'Back to dashboard' },
  { icon: faLifeRing, label: 'Help Center' },
  { icon: faEnvelope, label: 'Email support' },
];

function ErrorPageMock({ code, message, action }: { code: string; message: string; action: string }) {
  return (
    <Box sx={{ textAlign: 'center', py: 5, px: 2 }}>
      <Typography variant="h1" sx={{ fontSize: 64, color: 'text.secondary' }}>
        {code}
      </Typography>
      <Typography variant="h6" sx={{ mt: 1, mb: 3 }}>
        {message}
      </Typography>
      <Button variant="contained" sx={{ mb: 4 }}>
        {action}
      </Button>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
        {RECOVERY.map((r) => (
          <Paper
            key={r.label}
            variant="outlined"
            sx={{ px: 3, py: 2, minWidth: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}
          >
            <FontAwesomeIcon icon={r.icon} style={{ fontSize: 20, opacity: 0.6 }} />
            <Typography variant="body2">{r.label}</Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

export function NotFoundExample() {
  return (
    <ExampleFrame>
      <ErrorPageMock code="404" message="Page not found" action="Go to home" />
    </ExampleFrame>
  );
}

export function ServerErrorExample() {
  return (
    <ExampleFrame>
      <ErrorPageMock code="500" message="Something went wrong" action="Try again" />
    </ExampleFrame>
  );
}
