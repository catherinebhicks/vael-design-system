import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import type { BottomNavigationProps } from '@mui/material';
export type { BottomNavigationProps };

export function Navigation(props: BottomNavigationProps) {
  return <BottomNavigation {...props} />;
}

export { BottomNavigationAction };
export default Navigation;
