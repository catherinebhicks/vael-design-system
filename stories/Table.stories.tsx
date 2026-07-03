import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '../src/components/Table';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const meta: Meta = {
  title: 'Data Display/Table',
  tags: ['autodocs'],
  parameters: {
  },
};

export default meta;

const rows = [
  { name: 'Project A', status: 'Running', pH: 42, do: 45 },
  { name: 'Project B', status: 'Complete', pH: 18, do: 80 },
  { name: 'Project C', status: 'Pending', pH: '-', do: '-' },
];

export const Default: StoryObj = {
  render: () => (
    <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">CPU (%)</TableCell>
            <TableCell align="right">Memory (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">{row.pH}</TableCell>
              <TableCell align="right">{row.do}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
};
