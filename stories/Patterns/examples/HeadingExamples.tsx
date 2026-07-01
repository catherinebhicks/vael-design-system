import React from 'react';
import { Box, Typography, Button, Stack, Divider, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumbs } from '../../../src/components/Breadcrumbs';
import { ExampleFrame } from './ExampleFrame';

/** Page heading — complex: breadcrumbs + title + primary/secondary actions. */
export function PageHeadingComplex() {
  return (
    <ExampleFrame>
      <Breadcrumbs
        items={[
          { label: 'Projects', href: '#' },
          { label: 'Acme Rollout', href: '#' },
          { label: 'Overview' },
        ]}
      />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ sm: 'center' }}
        justifyContent="space-between"
        spacing={2}
        sx={{ mt: 1 }}
      >
        <Typography variant="h4">Overview</Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="text">Export</Button>
          <Button variant="contained">New report</Button>
        </Stack>
      </Stack>
    </ExampleFrame>
  );
}

/** Page heading — simple: title + single primary action. */
export function PageHeadingSimple() {
  return (
    <ExampleFrame>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
        <Typography variant="h4">Team settings</Typography>
        <Button variant="contained">Save changes</Button>
      </Stack>
    </ExampleFrame>
  );
}

/** Section heading: title + optional action, divider below. */
export function SectionHeading() {
  return (
    <ExampleFrame>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Members</Typography>
        <IconButton size="small" aria-label="Section settings">
          <FontAwesomeIcon icon={faGear} style={{ fontSize: 16 }} />
        </IconButton>
      </Stack>
      <Divider sx={{ mt: 1 }} />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Section content sits below the divider.
      </Typography>
    </ExampleFrame>
  );
}
