import * as React from 'react';
import {
  ButtonGroup,
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@mui/material';
import type { ButtonGroupProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export interface SplitButtonProps extends Omit<ButtonGroupProps, 'onChange' | 'onSelect'> {
  /** The options; the first (or `defaultIndex`) is the primary action. */
  options: string[];
  /** Index of the initially-selected primary option. */
  defaultIndex?: number;
  /** Fires when the primary button is clicked, with the active option + index. */
  onAction?: (option: string, index: number) => void;
  /** Fires when the selected option changes via the dropdown. */
  onSelect?: (option: string, index: number) => void;
}

/**
 * SplitButton — a primary action button paired with a dropdown of alternate
 * actions (MUI ButtonGroup + Menu). The last-selected option becomes primary.
 */
export function SplitButton({
  options,
  defaultIndex = 0,
  onAction,
  onSelect,
  variant = 'contained',
  color = 'primary',
  ...groupProps
}: SplitButtonProps) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex);

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(false);
    onSelect?.(options[index], index);
  };

  return (
    <>
      <ButtonGroup variant={variant} color={color} ref={anchorRef} {...groupProps}>
        <Button onClick={() => onAction?.(options[selectedIndex], selectedIndex)}>
          {options[selectedIndex]}
        </Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select action"
          aria-haspopup="menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faCaretDown} />
        </Button>
      </ButtonGroup>
      <Popper sx={{ zIndex: 1 }} open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={() => handleMenuItemClick(index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default SplitButton;
