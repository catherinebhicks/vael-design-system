import React, { useRef, useState } from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../src/components/Button';
import { Popover } from '../../../src/components/Popover';
import { Snackbar } from '../../../src/components/Snackbar';
import { ExampleFrame } from './ExampleFrame';

/**
 * Inline confirmation — the escalation ladder in one frame.
 *
 * 1. In-place swap for a low-stakes, reversible action ("this draft"): the
 *    Delete button becomes a Confirm/Cancel pair in place, auto-reverting on
 *    blur or Escape so the user is never trapped.
 * 2. Popover confirm for a medium-stakes action ("3 items") where a sentence
 *    of context helps; the destructive verb is styled `error` and default
 *    focus lands on Cancel.
 * 3. Success feedback via a Snackbar that names the result and offers Undo.
 */
export function InlineConfirmationExample() {
  // 1. In-place swap
  const [confirmingDraft, setConfirmingDraft] = useState(false);

  // 2. Popover confirm
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  // 3. Success feedback
  const [toast, setToast] = useState<string | null>(null);

  const showResult = (message: string) => setToast(message);

  return (
    <ExampleFrame>
      <Stack spacing={4} sx={{ maxWidth: 520, mx: 'auto' }}>
        {/* 1. In-place swap — low stakes, reversible */}
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            In-place swap
          </Typography>
          {confirmingDraft ? (
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              onBlur={(e) => {
                // Auto-revert when focus leaves the confirm/cancel group.
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setConfirmingDraft(false);
                }
              }}
            >
              <Button
                size="small"
                color="error"
                variant="contained"
                autoFocus
                onClick={() => {
                  setConfirmingDraft(false);
                  showResult('Draft deleted');
                }}
              >
                Confirm delete
              </Button>
              <Button
                size="small"
                color="inherit"
                onClick={() => setConfirmingDraft(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setConfirmingDraft(false);
                }}
              >
                Cancel
              </Button>
              <Typography variant="caption" color="text.secondary">
                Delete this draft?
              </Typography>
            </Stack>
          ) : (
            <Button
              size="small"
              color="error"
              startIcon={<FontAwesomeIcon icon={faTrash} />}
              onClick={() => setConfirmingDraft(true)}
            >
              Delete draft
            </Button>
          )}
        </Box>

        {/* 2. Popover confirm — medium stakes, a sentence of context */}
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Popover confirm
          </Typography>
          <Button
            ref={anchorRef}
            size="small"
            color="error"
            variant="outlined"
            startIcon={<FontAwesomeIcon icon={faTrash} />}
            onClick={() => setPopoverOpen(true)}
          >
            Delete 3 items
          </Button>
          <Popover
            open={popoverOpen}
            anchorEl={anchorRef.current}
            onClose={() => setPopoverOpen(false)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <Stack spacing={2} sx={{ p: 2, maxWidth: 260 }}>
              <Typography variant="body2">
                Delete 3 items? This can't be undone from here.
              </Typography>
              <Stack direction="row" spacing={1} justifyContent="flex-end">
                {/* Default focus goes to Cancel for the destructive path. */}
                <Button
                  size="small"
                  color="inherit"
                  autoFocus
                  onClick={() => setPopoverOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  size="small"
                  color="error"
                  variant="contained"
                  onClick={() => {
                    setPopoverOpen(false);
                    showResult('3 items deleted');
                  }}
                >
                  Delete
                </Button>
              </Stack>
            </Stack>
          </Popover>
        </Box>
      </Stack>

      {/* 3. Success feedback — names the result, offers Undo */}
      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={5000}
        onClose={() => setToast(null)}
        message={toast ?? ''}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        action={
          <>
            <Button color="primary" size="small" onClick={() => setToast(null)}>
              Undo
            </Button>
            <IconButton
              size="small"
              color="inherit"
              aria-label="Dismiss"
              onClick={() => setToast(null)}
            >
              <FontAwesomeIcon icon={faXmark} fontSize={16} />
            </IconButton>
          </>
        }
      />
    </ExampleFrame>
  );
}

export default InlineConfirmationExample;
