import { Popover as MuiPopover } from '@mui/material';
import type { PopoverProps } from '@mui/material';
export type { PopoverProps };

export function Popover(props: PopoverProps) {
  return <MuiPopover {...props} />;
}

export default Popover;
