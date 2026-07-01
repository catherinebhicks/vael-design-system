import { Avatar as MuiAvatar } from '@mui/material';
import type { AvatarProps } from '@mui/material';
export type { AvatarProps };

export function Avatar(props: AvatarProps) {
  return <MuiAvatar {...props} />;
}

export default Avatar;
