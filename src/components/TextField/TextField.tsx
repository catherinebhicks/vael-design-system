import { TextField as MuiTextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
export type { TextFieldProps };

export function TextField(props: TextFieldProps) {
  return <MuiTextField {...props} />;
}

export default TextField;
