import { CircularProgress as MuiCircularProgress } from '@mui/material';
import type { CircularProgressProps } from '@mui/material';
export type { CircularProgressProps };

export function CircularProgress(props: CircularProgressProps) {
  return <MuiCircularProgress {...props} />;
}

export default CircularProgress;
