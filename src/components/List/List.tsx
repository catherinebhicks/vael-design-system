import { List as MuiList } from '@mui/material';
import type { ListProps } from '@mui/material';
export type { ListProps };

export function List(props: ListProps) {
  return <MuiList {...props} />;
}

export default List;
