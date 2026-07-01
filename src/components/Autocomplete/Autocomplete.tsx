import { Autocomplete as MuiAutocomplete } from '@mui/material';
import type { AutocompleteProps } from '@mui/material';
export type { AutocompleteProps };

export function Autocomplete<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  return <MuiAutocomplete {...props} />;
}

export default Autocomplete;
