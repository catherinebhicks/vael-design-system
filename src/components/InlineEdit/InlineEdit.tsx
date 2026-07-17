import * as React from 'react';
import { Box, IconButton, InputBase, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faPen } from '@fortawesome/free-solid-svg-icons';

export interface InlineEditProps {
  value: string;
  onSave: (next: string) => void;
  /** Shown when the value is empty. */
  placeholder?: string;
  /** Start in edit mode. */
  editingByDefault?: boolean;
  /** Render the display value with this typography variant. */
  variant?: 'body1' | 'body2' | 'h6' | 'subtitle1';
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

/**
 * InlineEdit — click-to-edit a value in place. Displays as text with a pencil on
 * hover; clicking swaps to an input with save (✓) / cancel (✕). Enter saves,
 * Escape cancels. For editable table cells, titles, and detail fields.
 */
export function InlineEdit({
  value,
  onSave,
  placeholder = 'Empty',
  editingByDefault = false,
  variant = 'body1',
  disabled = false,
  sx,
}: InlineEditProps) {
  const [editing, setEditing] = React.useState(editingByDefault);
  const [draft, setDraft] = React.useState(value);
  React.useEffect(() => setDraft(value), [value]);

  const commit = () => {
    onSave(draft.trim());
    setEditing(false);
  };
  const cancel = () => {
    setDraft(value);
    setEditing(false);
  };

  if (editing) {
    return (
      <Box sx={[{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }, ...(Array.isArray(sx) ? sx : [sx])]}>
        <InputBase
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') commit();
            if (e.key === 'Escape') cancel();
          }}
          sx={{
            px: 1,
            py: 0.25,
            borderRadius: 1,
            border: (t) => `1px solid ${t.palette.primary.main}`,
            fontFamily: (t) => t.typography[variant]?.fontFamily,
            fontSize: (t) => t.typography[variant]?.fontSize,
          }}
        />
        <IconButton size="small" color="primary" aria-label="Save" onClick={commit}>
          <FontAwesomeIcon icon={faCheck} />
        </IconButton>
        <IconButton size="small" aria-label="Cancel" onClick={cancel}>
          <FontAwesomeIcon icon={faXmark} />
        </IconButton>
      </Box>
    );
  }

  return (
    <Box
      onClick={() => !disabled && setEditing(true)}
      sx={[
        {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.75,
          px: 1,
          py: 0.25,
          mx: -1,
          borderRadius: 1,
          cursor: disabled ? 'default' : 'text',
          '&:hover .edit-affordance': { opacity: disabled ? 0 : 0.6 },
          '&:hover': disabled ? {} : { backgroundColor: 'action.hover' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Typography variant={variant} color={value ? 'text.primary' : 'text.disabled'}>
        {value || placeholder}
      </Typography>
      <Box className="edit-affordance" sx={{ opacity: 0, transition: 'opacity .15s', fontSize: 12, color: 'text.secondary' }}>
        <FontAwesomeIcon icon={faPen} />
      </Box>
    </Box>
  );
}

export default InlineEdit;
