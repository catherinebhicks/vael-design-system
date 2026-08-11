import { Table as MuiTable, TableContainer } from '@mui/material';
import type { TableProps as MuiTableProps, TableContainerProps } from '@mui/material';

export interface TableProps extends MuiTableProps {
  /**
   * Wrap the table in a horizontally-scrollable `TableContainer` so a wide table
   * scrolls instead of overflowing a narrow viewport. Set `false` when you supply
   * your own `TableContainer` (e.g. for a `Paper` surface or `stickyHeader`).
   * @default true
   */
  scrollable?: boolean;
  /** Props forwarded to the wrapping `TableContainer` when `scrollable` is true. */
  containerProps?: TableContainerProps;
}

export function Table({ scrollable = true, containerProps, ...props }: TableProps) {
  const table = <MuiTable {...props} />;
  if (!scrollable) return table;
  const { sx, ...rest } = containerProps ?? {};
  return (
    <TableContainer sx={{ maxWidth: '100%', overflowX: 'auto', ...sx }} {...rest}>
      {table}
    </TableContainer>
  );
}

export default Table;
