import { useMemo } from 'react';
import {
  Autocomplete,
  Chip,
  CircularProgress,
  TextField,
} from '@mui/material';

export interface AdvancedSelectOption {
  label: string;
  value: string;
}

export interface AdvancedSelectProps {
  /** Available options. */
  options: AdvancedSelectOption[];
  /** Selected value(s). Use a string for single select, string[] when `multiple`. */
  value: string | string[];
  /** Called with the next value(s) when the selection changes. */
  onChange: (value: string | string[]) => void;
  /** Render multiple selectable values as chips/tags. */
  multiple?: boolean;
  /** Show an async loading spinner and `loadingText`. */
  loading?: boolean;
  /** Text shown while `loading` and there are no options yet. */
  loadingText?: string;
  /** Input placeholder. */
  placeholder?: string;
  /** Field label. */
  label?: string;
  /** Stretch to fill the container width. */
  fullWidth?: boolean;
  /** Control density. */
  size?: 'small' | 'medium';
  /** Disable the control. */
  disabled?: boolean;
}

export function AdvancedSelect({
  options,
  value,
  onChange,
  multiple = false,
  loading = false,
  loadingText = 'Loading…',
  placeholder,
  label,
  fullWidth = true,
  size = 'medium',
  disabled = false,
}: AdvancedSelectProps) {
  // Map incoming string value(s) to the corresponding option object(s).
  const selected = useMemo(() => {
    const byValue = new Map(options.map((o) => [o.value, o]));
    if (multiple) {
      const values = Array.isArray(value) ? value : [];
      return values.map((v) => byValue.get(v) ?? { label: v, value: v });
    }
    const single = Array.isArray(value) ? value[0] : value;
    if (!single) return null;
    return byValue.get(single) ?? { label: single, value: single };
  }, [options, value, multiple]);

  return (
    <Autocomplete<AdvancedSelectOption, boolean, false, false>
      multiple={multiple}
      options={options}
      value={selected}
      disabled={disabled}
      loading={loading}
      loadingText={loadingText}
      fullWidth={fullWidth}
      size={size}
      isOptionEqualToValue={(option, val) => option.value === val.value}
      getOptionLabel={(option) => option.label}
      onChange={(_event, next) => {
        if (multiple) {
          const list = (next as AdvancedSelectOption[]) ?? [];
          onChange(list.map((o) => o.value));
        } else {
          onChange((next as AdvancedSelectOption | null)?.value ?? '');
        }
      }}
      renderTags={(tagValues, getTagProps) =>
        tagValues.map((option, index) => {
          const { key, ...chipProps } = getTagProps({ index });
          return (
            <Chip
              key={key}
              label={option.label}
              size={size === 'small' ? 'small' : 'medium'}
              {...chipProps}
            />
          );
        })
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={18} aria-label="Loading options" />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            },
          }}
        />
      )}
    />
  );
}

export default AdvancedSelect;
