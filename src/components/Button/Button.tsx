import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import type { ButtonProps } from '@mui/material';
export type { ButtonProps };

// forwardRef so wrappers that need to anchor to the button (Tooltip, Popover,
// Menu triggers) can attach a ref. Without it MUI Tooltip warns "Function
// components cannot be given refs" and can't position against the button.
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    return <MuiButton ref={ref} {...props} />;
  },
);

export default Button;
