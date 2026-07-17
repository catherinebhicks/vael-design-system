import * as React from 'react';
import { Box, Drawer, IconButton, Typography, Divider } from '@mui/material';
import type { DrawerProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export interface SidePanelProps extends Omit<DrawerProps, 'title'> {
  /** Panel heading (mono, Blueprint voice). */
  title?: React.ReactNode;
  /** Optional subheading under the title. */
  subtitle?: React.ReactNode;
  /** Fired by the header close button. */
  onClose?: () => void;
  /** Sticky footer content (usually action buttons). */
  footer?: React.ReactNode;
  /** Panel width in px. */
  width?: number;
  children?: React.ReactNode;
}

/**
 * SidePanel — a right-anchored detail panel (row detail, record inspector,
 * filters). A thin composition over MUI Drawer that standardises the
 * header (title/subtitle + close), scrolling body, and sticky footer.
 */
export function SidePanel({
  title,
  subtitle,
  onClose,
  footer,
  width = 380,
  anchor = 'right',
  children,
  ...drawerProps
}: SidePanelProps) {
  return (
    <Drawer anchor={anchor} onClose={onClose} {...drawerProps}>
      <Box sx={{ width, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {(title || onClose) && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 2,
              px: 2.5,
              py: 2,
            }}
          >
            <Box>
              {title && (
                <Typography
                  sx={{
                    fontFamily: (t) => t.typography.h6.fontFamily,
                    fontWeight: 600,
                    fontSize: '1rem',
                  }}
                >
                  {title}
                </Typography>
              )}
              {subtitle && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
                  {subtitle}
                </Typography>
              )}
            </Box>
            {onClose && (
              <IconButton size="small" edge="end" aria-label="Close panel" onClick={onClose}>
                <FontAwesomeIcon icon={faXmark} />
              </IconButton>
            )}
          </Box>
        )}
        <Divider />
        <Box sx={{ flex: 1, overflowY: 'auto', px: 2.5, py: 2 }}>{children}</Box>
        {footer && (
          <>
            <Divider />
            <Box sx={{ px: 2.5, py: 1.75, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
              {footer}
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
}

export default SidePanel;
