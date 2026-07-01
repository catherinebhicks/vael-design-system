import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import type { ToggleButtonGroupProps } from '@mui/material';
export type { ToggleButtonGroupProps };

export function Toggle(props: ToggleButtonGroupProps) {
  return <ToggleButtonGroup {...props} />;
}

export { ToggleButton };
export default Toggle;
