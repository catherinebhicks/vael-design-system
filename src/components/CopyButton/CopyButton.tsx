import * as React from 'react';
import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

export interface CopyButtonProps extends Omit<ButtonProps, 'onClick' | 'children'> {
  /** Text copied to the clipboard on click. */
  value: string;
  /** Idle label (default "Copy"). */
  label?: string;
  /** Label shown briefly after copying (default "Copied"). */
  copiedLabel?: string;
}

export function CopyButton({
  value,
  label = 'Copy',
  copiedLabel = 'Copied',
  variant = 'outlined',
  size = 'small',
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>();

  React.useEffect(() => () => clearTimeout(timer.current), []);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      /* clipboard unavailable — no-op */
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant={variant}
      size={size}
      startIcon={<FontAwesomeIcon icon={copied ? faCheck : faCopy} style={{ fontSize: 14 }} />}
      onClick={handleClick}
      {...props}
    >
      {copied ? copiedLabel : label}
    </Button>
  );
}

export default CopyButton;
