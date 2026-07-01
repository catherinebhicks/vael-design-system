import { Tooltip as MuiTooltip } from '@mui/material';
import type { TooltipProps } from '@mui/material';
export type { TooltipProps };

export function Tooltip(props: TooltipProps) {
  return <MuiTooltip {...props} />;
}

export default Tooltip;
