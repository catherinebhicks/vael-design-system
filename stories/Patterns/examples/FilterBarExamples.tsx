import React, { useMemo, useState } from 'react';
import { Box, Stack, Menu, MenuItem, InputAdornment } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Chip } from '../../../src/components/Chip';
import { TextField } from '../../../src/components/TextField';
import { Button } from '../../../src/components/Button';
import { Infotext } from '../../../src/components/Infotext';
import { ExampleFrame } from './ExampleFrame';

/** Facets offered by the "Add filter" menu, with the values each can add. */
const FACETS = [
  { key: 'status', label: 'Status', value: 'Active' },
  { key: 'owner', label: 'Owner', value: 'Owner A' },
  { key: 'region', label: 'Region', value: 'North' },
];

const ROWS = [
  { name: 'Item A', owner: 'Owner A', status: 'Active', region: 'North' },
  { name: 'Item B', owner: 'Owner B', status: 'Paused', region: 'South' },
  { name: 'Item C', owner: 'Owner A', status: 'Active', region: 'South' },
  { name: 'Item D', owner: 'Owner C', status: 'Archived', region: 'North' },
  { name: 'Item E', owner: 'Owner B', status: 'Active', region: 'North' },
];

type Filter = { key: string; label: string; value: string };

/** Filter bar — deletable pills, an add-filter menu, live search + result count. */
export function FilterBarExample() {
  const [filters, setFilters] = useState<Filter[]>([
    { key: 'status', label: 'Status', value: 'Active' },
  ]);
  const [search, setSearch] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const addFilter = (facet: Filter) => {
    setFilters((prev) =>
      prev.some((f) => f.key === facet.key) ? prev : [...prev, facet]
    );
    setAnchorEl(null);
  };
  const removeFilter = (key: string) =>
    setFilters((prev) => prev.filter((f) => f.key !== key));

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return ROWS.filter((row) => {
      const matchesFilters = filters.every(
        (f) => row[f.key as keyof typeof row] === f.value
      );
      const matchesSearch =
        q === '' || row.name.toLowerCase().includes(q) || row.owner.toLowerCase().includes(q);
      return matchesFilters && matchesSearch;
    });
  }, [filters, search]);

  return (
    <ExampleFrame>
      <Stack spacing={2}>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
          {filters.map((f) => (
            <Chip
              key={f.key}
              label={`${f.label}: ${f.value}`}
              onDelete={() => removeFilter(f.key)}
              variant="outlined"
              size="small"
            />
          ))}
          <Button
            variant="outlined"
            size="small"
            startIcon={<FontAwesomeIcon icon={faPlus} />}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            Add filter
          </Button>
          {filters.length >= 2 && (
            <Button variant="text" size="small" onClick={() => setFilters([])}>
              Clear all
            </Button>
          )}
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
            {FACETS.map((facet) => (
              <MenuItem
                key={facet.key}
                disabled={filters.some((f) => f.key === facet.key)}
                onClick={() => addFilter(facet)}
              >
                {facet.label}: {facet.value}
              </MenuItem>
            ))}
          </Menu>
        </Stack>

        <TextField
          placeholder="Search items or owners…"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ maxWidth: 320 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputAdornment>
            ),
          }}
        />

        <Box aria-live="polite">
          <Infotext icon={false}>
            {rows.length} {rows.length === 1 ? 'result' : 'results'}
          </Infotext>
        </Box>

        <Box sx={{ border: 1, borderColor: 'divider', borderRadius: 1, overflow: 'hidden' }}>
          {rows.length === 0 ? (
            <Box sx={{ p: 2 }}>
              <Infotext tone="muted">No items match the current filters.</Infotext>
            </Box>
          ) : (
            rows.map((row, i) => (
              <Stack
                key={row.name}
                direction="row"
                spacing={2}
                sx={{
                  px: 2,
                  py: 1.25,
                  borderTop: i === 0 ? 0 : 1,
                  borderColor: 'divider',
                  fontFamily: 'monospace',
                  fontSize: '0.8125rem',
                }}
              >
                <Box sx={{ flex: 1 }}>{row.name}</Box>
                <Box sx={{ flex: 1, color: 'text.secondary' }}>{row.owner}</Box>
                <Box sx={{ flex: 1, color: 'text.secondary' }}>{row.status}</Box>
                <Box sx={{ flex: 1, color: 'text.secondary' }}>{row.region}</Box>
              </Stack>
            ))
          )}
        </Box>
      </Stack>
    </ExampleFrame>
  );
}
