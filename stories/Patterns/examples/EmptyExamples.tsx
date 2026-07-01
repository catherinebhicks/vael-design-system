import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faMagnifyingGlass, faTriangleExclamation, faLock } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ExampleFrame } from './ExampleFrame';

function EmptyState({
  icon,
  title,
  body,
  cta,
  role,
}: {
  icon: IconDefinition;
  title: string;
  body: string;
  cta?: string;
  role?: string;
}) {
  return (
    <Box sx={{ textAlign: 'center', px: 3, py: 4, maxWidth: 360, mx: 'auto' }} role={role}>
      <FontAwesomeIcon icon={icon} style={{ fontSize: 48, opacity: 0.35 }} />
      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: cta ? 2.5 : 0 }}>
        {body}
      </Typography>
      {cta && (
        <Button variant="contained" size="small">
          {cta}
        </Button>
      )}
    </Box>
  );
}

/** The four empty-state variants, rendered. */
export function EmptyStateExamples() {
  return (
    <ExampleFrame>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
        <EmptyState
          icon={faFolderOpen}
          title="No projects yet"
          body="Create your first project to start tracking work and results."
          cta="Create project"
        />
        <EmptyState
          icon={faMagnifyingGlass}
          title='No results for "acme-42"'
          body="Try a different search term or clear your filters."
          cta="Clear filters"
        />
        <EmptyState
          icon={faTriangleExclamation}
          title="Something went wrong"
          body="This may be temporary. Try again or contact support."
          cta="Try again"
          role="alert"
        />
        <EmptyState
          icon={faLock}
          title="Access restricted"
          body="You don't have permission to view this section. Contact your administrator for access."
        />
      </Box>
    </ExampleFrame>
  );
}

export default EmptyStateExamples;
