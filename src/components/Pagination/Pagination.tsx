import { Pagination as MuiPagination } from '@mui/material';
import type { PaginationProps as MuiPaginationProps } from '@mui/material';

export interface PaginationProps extends MuiPaginationProps {}

/**
 * Vael Pagination — a thin, theme-driven wrapper over MUI Pagination.
 * Defaults to `shape="rounded"` to match the Preline-styled reskin.
 */
export function Pagination({ shape = 'rounded', ...props }: PaginationProps) {
  return <MuiPagination shape={shape} {...props} />;
}

export default Pagination;
