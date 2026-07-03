import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataGrid } from '../src/components/DataGrid';
import type { GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const meta: Meta = {
  title: 'Data Grids/DataGrid',
  tags: ['autodocs'],
  parameters: {
  },
};

export default meta;

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'status', headerName: 'Status', width: 120 },
  { field: 'value', headerName: 'Value', type: 'number', width: 110 },
];

const rows = [
  { id: 1, name: 'Project A', status: 'Running', value: 42.1 },
  { id: 2, name: 'Project B', status: 'Complete', value: 87.3 },
  { id: 3, name: 'Project C', status: 'Pending', value: 12.0 },
  { id: 4, name: 'Project D', status: 'Running', value: 63.7 },
];

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ height: 300, width: 500 }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  ),
};
