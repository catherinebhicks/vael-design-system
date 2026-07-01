import { LinearProgress as MuiLinearProgress } from '@mui/material';
import type { LinearProgressProps } from '@mui/material';
export type { LinearProgressProps };

export function LinearProgress(props: LinearProgressProps) {
  return <MuiLinearProgress {...props} />;
}

export default LinearProgress;
