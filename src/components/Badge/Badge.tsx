import { Badge as MuiBadge } from '@mui/material';
import type { BadgeProps } from '@mui/material';
export type { BadgeProps };

export function Badge(props: BadgeProps) {
  return <MuiBadge {...props} />;
}

export default Badge;
