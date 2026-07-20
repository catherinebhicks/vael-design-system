import React, { useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { SidePanel } from '../../../src/components/SidePanel';
import { Descriptions } from '../../../src/components/Descriptions';
import { StatusBadge, type StatusKind } from '../../../src/components/StatusBadge';
import { Accordion } from '../../../src/components/Accordion';
import { Button } from '../../../src/components/Button';
import { ExampleFrame } from './ExampleFrame';

interface Record {
  id: string;
  name: string;
  status: StatusKind;
  statusLabel: string;
  owner: string;
  updated: string;
  region: string;
  items: number;
  notes: string;
}

const RECORDS: Record[] = [
  {
    id: 'REC-01',
    name: 'Record 01',
    status: 'online',
    statusLabel: 'Active',
    owner: 'A. Morgan',
    updated: '2 hours ago',
    region: 'North',
    items: 128,
    notes: 'Steady throughput; no anomalies flagged this cycle.',
  },
  {
    id: 'REC-02',
    name: 'Record 02',
    status: 'away',
    statusLabel: 'Draft',
    owner: 'J. Rivera',
    updated: 'Yesterday',
    region: 'East',
    items: 42,
    notes: 'Awaiting a second review before promotion.',
  },
  {
    id: 'REC-03',
    name: 'Record 03',
    status: 'busy',
    statusLabel: 'Blocked',
    owner: 'S. Okafor',
    updated: '3 days ago',
    region: 'West',
    items: 87,
    notes: 'Upstream dependency is unresolved.',
  },
  {
    id: 'REC-04',
    name: 'Record 04',
    status: 'online',
    statusLabel: 'Active',
    owner: 'L. Chen',
    updated: 'Last week',
    region: 'South',
    items: 213,
    notes: 'Highest volume in the set; watch capacity.',
  },
  {
    id: 'REC-05',
    name: 'Record 05',
    status: 'offline',
    statusLabel: 'Archived',
    owner: 'M. Dubois',
    updated: 'Last month',
    region: 'Central',
    items: 9,
    notes: 'Retained for reference only.',
  },
];

function detailItems(record: Record) {
  return [
    { label: 'Status', value: <StatusBadge status={record.status} label={record.statusLabel} /> },
    { label: 'Owner', value: record.owner },
    { label: 'Region', value: record.region },
    { label: 'Items', value: String(record.items) },
    { label: 'Updated', value: record.updated },
    { label: 'Notes', value: record.notes, full: true },
  ];
}

/**
 * Master-detail (side panel) — a table of records; selecting a row opens its
 * detail in a right-anchored SidePanel while the list stays visible and the
 * selected row stays highlighted. Dismiss via the header close button or Escape
 * (both routed through the Drawer's onClose).
 */
export function MasterDetailExample() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = RECORDS.find((r) => r.id === selectedId) ?? null;

  return (
    <ExampleFrame>
      <TableContainer>
        <Table size="small" aria-label="Records">
          <TableHead>
            <TableRow>
              <TableCell>Record</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {RECORDS.map((record) => (
              <TableRow
                key={record.id}
                hover
                selected={record.id === selectedId}
                onClick={() => setSelectedId(record.id)}
                sx={{ cursor: 'pointer' }}
                aria-selected={record.id === selectedId}
              >
                <TableCell>{record.name}</TableCell>
                <TableCell>
                  <StatusBadge status={record.status} label={record.statusLabel} />
                </TableCell>
                <TableCell>{record.owner}</TableCell>
                <TableCell>{record.updated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <SidePanel
        open={selected != null}
        onClose={() => setSelectedId(null)}
        title={selected?.name}
        subtitle={selected ? `${selected.id} · ${selected.region}` : undefined}
        footer={
          <Button variant="text" onClick={() => setSelectedId(null)}>
            Close
          </Button>
        }
      >
        {selected && <Descriptions items={detailItems(selected)} divided />}
      </SidePanel>
    </ExampleFrame>
  );
}

/**
 * Master-detail (inline expansion) — the same records, but the detail expands
 * in place beneath the selected row via Accordion. Only one row is open at a
 * time; the open row stays highlighted.
 */
export function MasterDetailInlineExample() {
  const [expandedId, setExpandedId] = useState<string | null>(RECORDS[0].id);

  return (
    <ExampleFrame>
      <Stack spacing={0.5} sx={{ maxWidth: 560 }}>
        {RECORDS.map((record) => {
          const isOpen = record.id === expandedId;
          return (
            <Accordion
              key={record.id}
              disableGutters
              expanded={isOpen}
              onChange={(_, open) => setExpandedId(open ? record.id : null)}
            >
              <AccordionSummary
                expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
                aria-controls={`${record.id}-detail`}
                id={`${record.id}-summary`}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    width: '100%',
                    pr: 1,
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {record.name}
                  </Typography>
                  <StatusBadge status={record.status} label={record.statusLabel} />
                </Box>
              </AccordionSummary>
              <AccordionDetails id={`${record.id}-detail`}>
                <Descriptions items={detailItems(record)} columns={2} />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Stack>
    </ExampleFrame>
  );
}
