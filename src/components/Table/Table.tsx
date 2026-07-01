import { Table as MuiTable } from '@mui/material';
import type { TableProps } from '@mui/material';
export type { TableProps };

export function Table(props: TableProps) {
  return <MuiTable {...props} />;
}

export default Table;
