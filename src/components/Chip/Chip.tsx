import { Chip as MuiChip } from '@mui/material';
import type { ChipProps } from '@mui/material';
export type { ChipProps };

export function Chip(props: ChipProps) {
  return <MuiChip {...props} />;
}

export default Chip;
