import { Drawer as MuiDrawer } from '@mui/material';
import type { DrawerProps } from '@mui/material';
export type { DrawerProps };

export function Drawer(props: DrawerProps) {
  return <MuiDrawer {...props} />;
}

export default Drawer;
