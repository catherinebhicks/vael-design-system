import React from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export interface InputNumberProps {
  /** Current value. Use '' to represent an empty field (controlled). */
  value: number | '';
  /** Called with the clamped numeric value on step or valid input. */
  onChange: (value: number) => void;
  /** Minimum allowed value. */
  min?: number;
  /** Maximum allowed value. */
  max?: number;
  /** Increment/decrement amount. Defaults to 1. */
  step?: number;
  /** Field label. */
  label?: string;
  /** Disables the field and both steppers. */
  disabled?: boolean;
  /** MUI size. */
  size?: 'small' | 'medium';
  /** Stretch to fill the container width. */
  fullWidth?: boolean;
  /** Helper text below the field. */
  helperText?: React.ReactNode;
  /** Renders the field in an error state. */
  error?: boolean;
}

function clamp(n: number, min?: number, max?: number): number {
  let out = n;
  if (min !== undefined && out < min) out = min;
  if (max !== undefined && out > max) out = max;
  return out;
}

export function InputNumber(props: InputNumberProps) {
  const {
    value,
    onChange,
    min,
    max,
    step = 1,
    label,
    disabled = false,
    size = 'medium',
    fullWidth = false,
    helperText,
    error = false,
  } = props;

  const numeric = value === '' ? undefined : value;

  const atMin = min !== undefined && numeric !== undefined && numeric <= min;
  const atMax = max !== undefined && numeric !== undefined && numeric >= max;

  const stepBy = (dir: 1 | -1) => {
    const base = numeric ?? min ?? 0;
    onChange(clamp(base + dir * step, min, max));
  };

  const handleInput: TextFieldProps['onChange'] = (event) => {
    const raw = event.target.value;
    if (raw === '') return; // leave empty state to the parent; nothing to clamp
    const parsed = Number(raw);
    if (Number.isNaN(parsed)) return;
    onChange(clamp(parsed, min, max));
  };

  return (
    <TextField
      type="number"
      value={value}
      onChange={handleInput}
      label={label}
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      helperText={helperText}
      error={error}
      slotProps={{
        htmlInput: {
          inputMode: 'numeric',
          min,
          max,
          step,
          style: { textAlign: 'center' },
          'aria-label': label ? undefined : 'Number',
        },
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <IconButton
                aria-label="Decrease value"
                onClick={() => stepBy(-1)}
                disabled={disabled || atMin}
                edge="start"
                size={size === 'small' ? 'small' : 'medium'}
              >
                <FontAwesomeIcon icon={faMinus} style={{ fontSize: '0.85em' }} />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Increase value"
                onClick={() => stepBy(1)}
                disabled={disabled || atMax}
                edge="end"
                size={size === 'small' ? 'small' : 'medium'}
              >
                <FontAwesomeIcon icon={faPlus} style={{ fontSize: '0.85em' }} />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}

export default InputNumber;
