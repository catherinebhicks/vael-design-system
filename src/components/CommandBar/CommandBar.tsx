import * as React from 'react';
import { Dialog, InputBase, Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Command {
  id: string;
  label: string;
  icon?: IconDefinition;
  shortcut?: string;
  group?: string;
  keywords?: string;
  run: () => void;
}

export interface CommandBarProps {
  open: boolean;
  onClose: () => void;
  commands: Command[];
  placeholder?: string;
  sx?: SxProps<Theme>;
}

/**
 * CommandBar — a ⌘K command palette: a search field over a keyboard-navigable
 * list of commands (icon, label, shortcut), grouped. Arrow keys move, Enter runs,
 * Escape closes. Wire the open state to a global ⌘K / Ctrl-K handler.
 */
export function CommandBar({ open, onClose, commands, placeholder = 'Type a command or search…', sx }: CommandBarProps) {
  const [query, setQuery] = React.useState('');
  const [active, setActive] = React.useState(0);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.keywords ?? ''} ${c.group ?? ''}`.toLowerCase().includes(q));
  }, [commands, query]);

  React.useEffect(() => setActive(0), [query, open]);

  const runActive = () => {
    const cmd = filtered[active];
    if (cmd) {
      cmd.run();
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      slotProps={{ paper: { sx: { position: 'fixed', top: 88, m: 0, borderRadius: 2, overflow: 'hidden' } } }}
      sx={sx}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2, py: 1.5, borderBottom: (t) => `1px solid ${t.palette.divider}` }}>
        <Box sx={{ color: 'text.secondary' }}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Box>
        <InputBase
          autoFocus
          fullWidth
          value={query}
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
            if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
            if (e.key === 'Enter') { e.preventDefault(); runActive(); }
          }}
          sx={{ fontSize: '0.95rem' }}
        />
      </Box>
      <Box sx={{ maxHeight: 360, overflowY: 'auto', py: 0.5 }}>
        {filtered.length === 0 ? (
          <Typography sx={{ px: 2, py: 3, color: 'text.secondary', textAlign: 'center' }}>No matches</Typography>
        ) : (
          filtered.map((cmd, i) => (
            <Box
              key={cmd.id}
              onMouseEnter={() => setActive(i)}
              onClick={() => { cmd.run(); onClose(); }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 2,
                py: 1.25,
                cursor: 'pointer',
                backgroundColor: i === active ? 'action.hover' : 'transparent',
              }}
            >
              {cmd.icon && <Box sx={{ color: 'text.secondary', width: 16 }}><FontAwesomeIcon icon={cmd.icon} /></Box>}
              <Typography sx={{ flex: 1, fontFamily: (t) => t.typography.body2.fontFamily, fontSize: '0.875rem' }}>
                {cmd.label}
              </Typography>
              {cmd.group && (
                <Typography sx={{ fontSize: '0.6875rem', color: 'text.disabled', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {cmd.group}
                </Typography>
              )}
              {cmd.shortcut && (
                <Box sx={{ fontFamily: (t) => t.typography.overline?.fontFamily, fontSize: '0.6875rem', color: 'text.secondary' }}>
                  {cmd.shortcut}
                </Box>
              )}
            </Box>
          ))
        )}
      </Box>
    </Dialog>
  );
}

export default CommandBar;
