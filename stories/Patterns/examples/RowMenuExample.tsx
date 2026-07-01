import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem,
  Chip,
  Divider,
} from '@mui/material';
import { UncontrolledMenu } from '../../../src/components/UncontrolledMenu';
import { ExampleFrame } from './ExampleFrame';

const ROWS = [
  { name: 'Acme Rollout', owner: 'J. Rivera', status: 'Active' },
  { name: 'Q3 Migration', owner: 'S. Chen', status: 'Paused' },
  { name: 'Billing Revamp', owner: 'A. Novak', status: 'Active' },
];

/** A data table with a kebab row-action menu (UncontrolledMenu) per row. */
export function RowMenuExample() {
  return (
    <ExampleFrame padded={false}>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow key={row.name} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.owner}</TableCell>
                <TableCell>
                  <Chip
                    size="small"
                    label={row.status}
                    color={row.status === 'Active' ? 'success' : 'default'}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell align="right">
                  <UncontrolledMenu>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Duplicate</MenuItem>
                    <MenuItem>Archive</MenuItem>
                    <Divider />
                    <MenuItem sx={{ color: 'error.main' }}>Delete</MenuItem>
                  </UncontrolledMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ExampleFrame>
  );
}

export default RowMenuExample;
