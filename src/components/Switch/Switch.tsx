import { Switch as MuiSwitch } from '@mui/material';
import type { SwitchProps } from '@mui/material';
export type { SwitchProps };

export function Switch(props: SwitchProps) {
  return <MuiSwitch {...props} />;
}

export default Switch;
