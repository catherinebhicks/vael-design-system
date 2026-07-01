import { Checkbox as MuiCheckbox } from '@mui/material';
import type { CheckboxProps } from '@mui/material';
export type { CheckboxProps };

export function Checkbox(props: CheckboxProps) {
  return <MuiCheckbox {...props} />;
}

export default Checkbox;
