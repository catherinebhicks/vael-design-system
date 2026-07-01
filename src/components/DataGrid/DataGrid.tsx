import { DataGrid as MuiDataGrid } from '@mui/x-data-grid';
import type { DataGridProps } from '@mui/x-data-grid';
export type { DataGridProps };

// MUI X DataGrid wrapper — for lightweight grids < 100 rows with no grouping/server-side needs.
// For high-performance, enterprise-feature grids use AgGrid instead.
export function DataGrid(props: DataGridProps) {
  return <MuiDataGrid {...props} />;
}

export default DataGrid;
