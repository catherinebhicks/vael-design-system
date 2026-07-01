import { AppBar as MuiAppBar } from '@mui/material';
import type { AppBarProps } from '@mui/material';
export type { AppBarProps };

export function AppBar(props: AppBarProps) {
  return <MuiAppBar {...props} />;
}

export default AppBar;
