import * as React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import type { ToggleButtonGroupProps } from '@mui/material';

export interface SegmentedControlOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps
  extends Omit<ToggleButtonGroupProps, 'children' | 'exclusive' | 'value' | 'onChange'> {
  options: SegmentedControlOption[];
  value: string;
  onChange: (value: string) => void;
}

/**
 * SegmentedControl — single-select pill group (one option always active).
 * Wraps MUI `ToggleButtonGroup exclusive`, guarding against the null
 * deselect so a segment is always chosen.
 */
export function SegmentedControl({
  options,
  value,
  onChange,
  size = 'small',
  color = 'primary',
  ...props
}: SegmentedControlProps) {
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      size={size}
      color={color}
      onChange={(_, v) => {
        if (v !== null) onChange(v as string);
      }}
      {...props}
    >
      {options.map((o) => (
        <ToggleButton key={o.value} value={o.value} disabled={o.disabled}>
          {o.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default SegmentedControl;
