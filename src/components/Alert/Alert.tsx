import { Alert as MuiAlert } from '@mui/material';
import type { AlertProps } from '@mui/material';
export type { AlertProps };

export function Alert(props: AlertProps) {
  return <MuiAlert {...props} />;
}

export default Alert;
