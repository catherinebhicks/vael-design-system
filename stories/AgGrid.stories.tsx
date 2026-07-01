import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from '@mui/material';
import { AgGrid } from '../src/components/AgGrid';

// ag-grid-enterprise and ag-grid-react are peer dependencies.
// Install them in your app: npm install ag-grid-community ag-grid-enterprise ag-grid-react
// These stories render a placeholder when the packages are not installed.

const meta: Meta<typeof AgGrid> = {
  title: 'Components/AgGrid',
  component: AgGrid,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof AgGrid>;

const columnDefs = [
  { field: 'job', headerName: 'Job', width: 140 },
  { field: 'server', headerName: 'Server', width: 120 },
  { field: 'status', headerName: 'Status', width: 120 },
  { field: 'cpu', headerName: 'CPU %', width: 100, type: 'numericColumn' },
  { field: 'memory', headerName: 'Memory %', width: 110, type: 'numericColumn' },
  { field: 'latency', headerName: 'Latency ms', width: 90, type: 'numericColumn' },
  { field: 'throughput', headerName: 'Throughput req/s', width: 140, type: 'numericColumn' },
];

const rowData = Array.from({ length: 20 }, (_, i) => ({
  id: `job-${1200 + i}`,
  job: `Job-${1200 + i}`,
  server: `Server ${String.fromCharCode(65 + (i % 4))}${(i % 3) + 1}`,
  status: i % 5 === 0 ? 'Complete' : 'Running',
  cpu: +(88 + Math.random() * 10).toFixed(1),
  memory: +(36.8 + Math.random() * 0.4).toFixed(2),
  latency: +(7.0 + Math.random() * 0.2).toFixed(2),
  throughput: Math.round(200 + Math.random() * 100),
}));

const PeerDepNotice = () => (
  <Alert severity="info" sx={{ mb: 2 }}>
    AgGrid requires <code>ag-grid-community</code>, <code>ag-grid-enterprise</code>, and{' '}
    <code>ag-grid-react</code> as peer dependencies. Install them in your app and provide a
    valid Enterprise license key via the <code>licenseKey</code> prop.
  </Alert>
);

export const Default: Story = {
  render: () => (
    <>
      <PeerDepNotice />
      <AgGrid
        rowData={rowData}
        columnDefs={columnDefs}
        getRowId={(p) => p.data.id as string}
        height={400}
      />
    </>
  ),
};

export const WithRowSelection: Story = {
  name: 'Row selection',
  render: () => (
    <>
      <PeerDepNotice />
      <AgGrid
        rowData={rowData}
        columnDefs={columnDefs}
        getRowId={(p) => p.data.id as string}
        rowSelection="multiple"
        height={400}
      />
    </>
  ),
};

export const ServerSide: Story = {
  name: 'Server-side row model (stub)',
  render: () => (
    <>
      <PeerDepNotice />
      <Alert severity="warning" sx={{ mb: 2 }}>
        Server-side row model requires AG Grid Enterprise. Wire <code>datasource</code> to your
        API and set <code>rowModelType="serverSide"</code>.
      </Alert>
      <AgGrid
        rowData={rowData}
        columnDefs={columnDefs}
        getRowId={(p) => p.data.id as string}
        height={400}
      />
    </>
  ),
};
