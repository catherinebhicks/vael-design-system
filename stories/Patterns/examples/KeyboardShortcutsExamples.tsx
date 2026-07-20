import React, { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faMagnifyingGlass, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '../../../src/components/Tooltip';
import { Dialog } from '../../../src/components/Dialog';
import { Infotext } from '../../../src/components/Infotext';
import { Button } from '../../../src/components/Button';
import { ExampleFrame } from './ExampleFrame';

/** macOS shows ⌘/⌥; everything else uses Ctrl/Alt. Detect, don't assume. */
const IS_MAC =
  typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || '');
const MOD = IS_MAC ? '⌘' : 'Ctrl';

/** Renders an array of key strings as individual bordered <kbd> caps. */
function Keys({ keys }: { keys: string[] }) {
  return (
    <Box component="span" sx={{ display: 'inline-flex', gap: 0.5, alignItems: 'center' }}>
      {keys.map((k) => (
        <Box
          key={k}
          component="kbd"
          sx={{
            fontFamily: 'monospace',
            fontSize: '0.72rem',
            lineHeight: 1,
            minWidth: 20,
            px: 0.75,
            py: 0.4,
            textAlign: 'center',
            border: 1,
            borderColor: 'divider',
            borderBottomWidth: 2,
            borderRadius: 1,
            bgcolor: 'background.paper',
            color: 'text.secondary',
          }}
        >
          {k}
        </Box>
      ))}
    </Box>
  );
}

const SHEET: { section: string; items: { label: string; keys: string[] }[] }[] = [
  {
    section: 'General',
    items: [
      { label: 'Menu', keys: [MOD, 'K'] },
      { label: 'Search', keys: ['/'] },
      { label: 'Show shortcuts', keys: ['?'] },
    ],
  },
  {
    section: 'Editing',
    items: [
      { label: 'New', keys: [MOD, 'N'] },
      { label: 'Save', keys: [MOD, 'S'] },
      { label: 'Undo', keys: [MOD, 'Z'] },
    ],
  },
];

/**
 * Keyboard-shortcut disclosure — all four layers in one specimen:
 * (1) Menu items with trailing shortcuts, (2) an icon Button whose Tooltip
 * appends its shortcut, (3) a grouped shortcuts sheet (Dialog) opened by "?"
 * (button or key), and (4) an inline Infotext hint.
 */
export function KeyboardShortcutsExample() {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  // Layer 3: press "?" anywhere (outside inputs) to open the sheet.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (el && /INPUT|TEXTAREA/.test(el.tagName)) return;
      if (e.key === '?') {
        e.preventDefault();
        setSheetOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <ExampleFrame>
      <Stack spacing={2.5} sx={{ maxWidth: 480 }}>
        {/* Layer 1 + 2: a mini toolbar */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Button variant="outlined" onClick={(e) => setMenuAnchor(e.currentTarget)}>
            Menu
            <FontAwesomeIcon icon={faEllipsisVertical} style={{ marginLeft: 8 }} />
          </Button>

          <Tooltip
            title={
              <Box sx={{ display: 'inline-flex', gap: 1, alignItems: 'center' }}>
                Search <Keys keys={['/']} />
              </Box>
            }
          >
            <IconButton aria-label="Search" size="small">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </IconButton>
          </Tooltip>

          <Box sx={{ flex: 1 }} />

          <Tooltip
            title={
              <Box sx={{ display: 'inline-flex', gap: 1, alignItems: 'center' }}>
                Keyboard shortcuts <Keys keys={['?']} />
              </Box>
            }
          >
            <IconButton aria-label="Keyboard shortcuts" size="small" onClick={() => setSheetOpen(true)}>
              <FontAwesomeIcon icon={faKeyboard} />
            </IconButton>
          </Tooltip>
        </Stack>

        {/* Layer 1: Menu items with right-aligned shortcut caps */}
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={() => setMenuAnchor(null)}
        >
          <MenuItem onClick={() => setMenuAnchor(null)}>
            <ListItemText>New</ListItemText>
            <Box sx={{ ml: 4 }}>
              <Keys keys={[MOD, 'N']} />
            </Box>
          </MenuItem>
          <MenuItem onClick={() => setMenuAnchor(null)}>
            <ListItemText>Search</ListItemText>
            <Box sx={{ ml: 4 }}>
              <Keys keys={['/']} />
            </Box>
          </MenuItem>
          <MenuItem onClick={() => setMenuAnchor(null)}>
            <ListItemText>Save</ListItemText>
            <Box sx={{ ml: 4 }}>
              <Keys keys={[MOD, 'S']} />
            </Box>
          </MenuItem>
        </Menu>

        {/* Layer 4: inline hint */}
        <Infotext>
          Press <Box component="span" sx={{ mx: 0.5, display: 'inline-flex' }}><Keys keys={['/']} /></Box> to search,
          or <Box component="span" sx={{ mx: 0.5, display: 'inline-flex' }}><Keys keys={['?']} /></Box> for all shortcuts.
        </Infotext>

        {/* Layer 3: the shortcuts sheet */}
        <Dialog
          open={sheetOpen}
          onClose={() => setSheetOpen(false)}
          aria-labelledby="shortcut-sheet-title"
          maxWidth="xs"
          fullWidth
        >
          <DialogTitle id="shortcut-sheet-title">Keyboard shortcuts</DialogTitle>
          <DialogContent dividers>
            <Stack spacing={2}>
              {SHEET.map((group) => (
                <Box key={group.section}>
                  <Typography variant="overline" color="text.secondary">
                    {group.section}
                  </Typography>
                  <Stack spacing={1} sx={{ mt: 0.5 }}>
                    {group.items.map((item) => (
                      <Stack
                        key={item.label}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography variant="body2">{item.label}</Typography>
                        <Keys keys={item.keys} />
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setSheetOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </ExampleFrame>
  );
}

export default KeyboardShortcutsExample;
