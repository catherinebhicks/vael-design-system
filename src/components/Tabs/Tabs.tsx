import { Tabs as MuiTabs } from '@mui/material';
import type { TabsProps } from '@mui/material';
export type { TabsProps };

export function Tabs(props: TabsProps) {
  return <MuiTabs {...props} />;
}

export default Tabs;
