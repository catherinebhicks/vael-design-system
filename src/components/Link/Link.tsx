import { Link as MuiLink } from '@mui/material';
import type { LinkProps } from '@mui/material';
export type { LinkProps };

export function Link(props: LinkProps) {
  return <MuiLink {...props} />;
}

export default Link;
