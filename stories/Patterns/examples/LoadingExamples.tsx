import React from 'react';
import { Box, Typography, LinearProgress, Alert, Stack } from '@mui/material';
import { Skeleton, SkeletonText } from '../../../src/components/Skeleton';
import { ExampleFrame } from './ExampleFrame';

/** LoadingContainer — section-level "Loading…" + indeterminate LinearProgress. */
export function LoadingContainerExample() {
  return (
    <ExampleFrame>
      <Box sx={{ maxWidth: 420 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Loading…
        </Typography>
        <LinearProgress />
      </Box>
    </ExampleFrame>
  );
}

/** Skeleton — for known layouts, reserve the shape while content loads. */
export function SkeletonExample() {
  return (
    <ExampleFrame>
      <Box sx={{ display: 'flex', gap: 2, maxWidth: 440 }}>
        <Skeleton variant="circular" width={48} height={48} />
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" width="45%" />
          <SkeletonText lines={3} />
        </Box>
      </Box>
    </ExampleFrame>
  );
}

/** useAlert surfaces — success/info as Snackbar, warning/error as Banner. */
export function AlertSurfacesExample() {
  return (
    <ExampleFrame>
      <Stack spacing={1.5} sx={{ maxWidth: 480 }}>
        <Alert severity="success">Changes saved.</Alert>
        <Alert severity="info">A new version is available.</Alert>
        <Alert severity="warning">Your session expires in 5 minutes.</Alert>
        <Alert severity="error">Could not save changes. Try again.</Alert>
      </Stack>
    </ExampleFrame>
  );
}
