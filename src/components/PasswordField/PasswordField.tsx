import { useMemo, useState } from 'react';
import type { ChangeEvent } from 'react';
import {
  Box,
  IconButton,
  InputAdornment,
  LinearProgress,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import type { SvgIconProps } from '@mui/material';

function VisibilityIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </SvgIcon>
  );
}

function VisibilityOffIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 7a5 5 0 0 1 5 5c0 .65-.13 1.26-.36 1.83l2.92 2.92A11.8 11.8 0 0 0 23 12c-1.73-4.39-6-7.5-11-7.5-1.27 0-2.49.2-3.64.57l2.16 2.16C11.1 7.09 11.54 7 12 7zM2.71 3.16 1.29 4.58l2.1 2.1A11.85 11.85 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l2.9 2.9 1.42-1.42L2.71 3.16zM7.53 8l1.55 1.55A2.98 2.98 0 0 0 9 12a3 3 0 0 0 3 3c.31 0 .61-.05.9-.14l.86.86c-.55.18-1.14.28-1.76.28a5 5 0 0 1-5-5c0-.62.1-1.21.28-1.76L7.53 8z" />
    </SvgIcon>
  );
}

export type PasswordStrengthLabel = 'Weak' | 'Fair' | 'Good' | 'Strong';

type StrengthColor = 'error' | 'warning' | 'info' | 'success';

interface StrengthResult {
  /** 0 = empty, 1 = Weak, 2 = Fair, 3 = Good, 4 = Strong */
  score: 0 | 1 | 2 | 3 | 4;
  label: PasswordStrengthLabel;
  color: StrengthColor;
}

/**
 * Lightweight, dependency-free password strength heuristic.
 * Scores on length plus the number of character classes present
 * (lowercase, uppercase, digit, symbol).
 */
function estimateStrength(value: string): StrengthResult {
  if (!value) {
    return { score: 0, label: 'Weak', color: 'error' };
  }

  let classes = 0;
  if (/[a-z]/.test(value)) classes += 1;
  if (/[A-Z]/.test(value)) classes += 1;
  if (/[0-9]/.test(value)) classes += 1;
  if (/[^A-Za-z0-9]/.test(value)) classes += 1;

  let points = 0;
  if (value.length >= 8) points += 1;
  if (value.length >= 12) points += 1;
  points += classes;

  let score: StrengthResult['score'];
  if (points <= 2) score = 1;
  else if (points <= 3) score = 2;
  else if (points <= 4) score = 3;
  else score = 4;

  const meta: Record<Exclude<StrengthResult['score'], 0>, Omit<StrengthResult, 'score'>> = {
    1: { label: 'Weak', color: 'error' },
    2: { label: 'Fair', color: 'warning' },
    3: { label: 'Good', color: 'info' },
    4: { label: 'Strong', color: 'success' },
  };

  return { score, ...meta[score] };
}

export interface PasswordFieldProps {
  /** Current password value (controlled). */
  value: string;
  /** Change handler; receives the standard input change event. */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Field label. */
  label?: string;
  /** When true, render a strength meter below the field. */
  showStrength?: boolean;
  /** Expand the field to fill its container width. */
  fullWidth?: boolean;
  /** MUI TextField size. */
  size?: 'small' | 'medium';
  /** Error state. */
  error?: boolean;
  /** Helper text shown beneath the field. */
  helperText?: string;
  /** Autocomplete hint (e.g. 'current-password', 'new-password'). */
  autoComplete?: string;
}

export function PasswordField(props: PasswordFieldProps) {
  const {
    value,
    onChange,
    label = 'Password',
    showStrength = false,
    fullWidth,
    size,
    error,
    helperText,
    autoComplete,
  } = props;

  const [visible, setVisible] = useState(false);
  const strength = useMemo(() => estimateStrength(value), [value]);

  return (
    <Box sx={{ width: fullWidth ? '100%' : 'auto' }}>
      <TextField
        type={visible ? 'text' : 'password'}
        label={label}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        size={size}
        error={error}
        helperText={helperText}
        autoComplete={autoComplete}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={visible ? 'Hide password' : 'Show password'}
                  onClick={() => setVisible((prev) => !prev)}
                  edge="end"
                  size={size === 'small' ? 'small' : 'medium'}
                >
                  {visible ? (
                    <VisibilityOffIcon fontSize="small" />
                  ) : (
                    <VisibilityIcon fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      {showStrength && (
        <Box sx={{ mt: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value ? (strength.score / 4) * 100 : 0}
            color={strength.color}
            aria-label="Password strength"
            sx={{ height: 6, borderRadius: 1 }}
          />
          <Typography
            variant="caption"
            color={value ? `${strength.color}.main` : 'text.secondary'}
            sx={{ mt: 0.5, display: 'block' }}
          >
            {value ? strength.label : 'Enter a password'}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default PasswordField;
