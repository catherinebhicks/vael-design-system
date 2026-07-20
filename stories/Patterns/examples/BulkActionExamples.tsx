import React, { useState } from 'react';
import {
  Box,
  Paper,
  Stack,
  Toolbar,
  Typography,
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from '../../../src/components/Checkbox';
import { Button } from '../../../src/components/Button';
import { Snackbar } from '../../../src/components/Snackbar';
import { Tag } from '../../../src/components/Tag';
import type { TagColor } from '../../../src/components/Tag';
import { ExampleFrame } from './ExampleFrame';

type RowStatus = 'Inactive' | 'Pending' | 'Active';

interface Row {
  id: number;
  name: string;
  status: RowStatus;
  updated: string;
}

const ROWS: Row[] = [
  { id: 1, name: 'Item 1', status: 'Inactive', updated: '2 hours ago' },
  { id: 2, name: 'Item 2', status: 'Pending', updated: 'Yesterday' },
  { id: 3, name: 'Item 3', status: 'Active', updated: '3 days ago' },
  { id: 4, name: 'Item 4', status: 'Inactive', updated: 'Last week' },
  { id: 5, name: 'Item 5', status: 'Pending', updated: 'Last week' },
  { id: 6, name: 'Item 6', status: 'Active', updated: '2 weeks ago' },
];

const STATUS_COLOR: Record<RowStatus, TagColor> = {
  Inactive: 'default',
  Pending: 'warning',
  Active: 'success',
};

/**
 * Bulk action — a selectable table with a contextual action bar.
 *
 * Tri-state select-all, a pinned action bar that appears only while a
 * selection exists, and a Snackbar confirmation that clears the selection.
 */
export function BulkActionExample() {
  const [selected, setSelected] = useState<number[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const allSelected = selected.length === ROWS.length;
  const someSelected = selected.length > 0 && !allSelected;

  const toggleAll = () => setSelected(allSelected ? [] : ROWS.map((r) => r.id));

  const toggleRow = (id: number) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const runAction = (verb: string) => {
    setToast(`${selected.length} item${selected.length === 1 ? '' : 's'} ${verb}`);
    setSelected([]);
  };

  return (
    <ExampleFrame>
      <Paper variant="outlined" sx={{ maxWidth: 560, mx: 'auto', overflow: 'hidden' }}>
        {/* Contextual action bar — pinned above the rows, shown only with a selection */}
        {selected.length > 0 && (
          <Toolbar
            variant="dense"
            sx={{
              gap: 1,
              bgcolor: 'action.selected',
              borderBottom: 1,
              borderColor: 'divider',
              minHeight: 52,
            }}
          >
            <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
              {selected.length} selected
            </Typography>
            <Button
              size="small"
              variant="outlined"
              startIcon={<FontAwesomeIcon icon={faDownload} />}
              onClick={() => runAction('exported')}
            >
              Export
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="error"
              startIcon={<FontAwesomeIcon icon={faTrash} />}
              onClick={() => runAction('deleted')}
            >
              Delete
            </Button>
            <Button
              size="small"
              color="inherit"
              startIcon={<FontAwesomeIcon icon={faXmark} />}
              onClick={() => setSelected([])}
            >
              Clear
            </Button>
          </Toolbar>
        )}

        <MuiTable size="small">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={toggleAll}
                  inputProps={{ 'aria-label': 'Select all rows' }}
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ROWS.map((row) => {
              const isSelected = selected.includes(row.id);
              return (
                <TableRow
                  key={row.id}
                  hover
                  selected={isSelected}
                  onClick={() => toggleRow(row.id)}
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      onChange={() => toggleRow(row.id)}
                      onClick={(e) => e.stopPropagation()}
                      inputProps={{ 'aria-label': `Select ${row.name}` }}
                    />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Tag color={STATUS_COLOR[row.status]} dot>
                      {row.status}
                    </Tag>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="caption" color="text.secondary">
                      {row.updated}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </MuiTable>
      </Paper>

      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={3000}
        onClose={() => setToast(null)}
        message={toast ?? ''}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </ExampleFrame>
  );
}

export default BulkActionExample;
