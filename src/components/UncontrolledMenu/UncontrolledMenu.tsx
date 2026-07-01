import React, { useId, useRef, useState } from 'react';
import { IconButton, Menu } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import type { MenuProps } from '@mui/material';

export interface TriggerProvided {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  'aria-controls': string;
  'aria-haspopup': true;
  'aria-expanded': true | undefined;
}

export interface UncontrolledMenuProps extends Omit<MenuProps, 'open' | 'anchorEl' | 'onClose'> {
  button?: (provided: TriggerProvided, open: boolean) => React.ReactElement;
  closeOnClick?: boolean;
  stopOnClickPropagation?: boolean;
}

export function UncontrolledMenu({
  children,
  button,
  closeOnClick = false,
  stopOnClickPropagation = false,
  ...menuProps
}: UncontrolledMenuProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const menuId = useId();

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    if (stopOnClickPropagation) e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const provided: TriggerProvided = {
    onClick: handleOpen,
    'aria-controls': menuId,
    'aria-haspopup': true,
    'aria-expanded': open || undefined,
  };

  const trigger = button ? (
    button(provided, open)
  ) : (
    <IconButton size="small" {...provided} aria-label="actions">
      <FontAwesomeIcon icon={faEllipsisVertical} />
    </IconButton>
  );

  const wrappedChildren = closeOnClick
    ? React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        const original = child.props.onClick;
        return React.cloneElement(child as React.ReactElement<{ onClick?: React.MouseEventHandler }>, {
          onClick: (e: React.MouseEvent) => {
            original?.(e);
            handleClose();
          },
        });
      })
    : children;

  return (
    <>
      {trigger}
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        {...menuProps}
      >
        {wrappedChildren}
      </Menu>
    </>
  );
}

export default UncontrolledMenu;
