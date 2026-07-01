import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { DragOverlay as DndDragOverlay } from '@dnd-kit/core';
import type { DragOverlayProps as DndDragOverlayProps } from '@dnd-kit/core';
import { theme as vaelTheme } from '../../theme';

// Drop-in replacement for @dnd-kit/core's DragOverlay that fixes two MUI
// compatibility problems when DragOverlay portals content outside the React tree:
// (1) MUI components inside the portal lose useTheme() / palette / sx resolution.
// (2) The overlay can appear at an unpredictable z-index relative to MUI Drawers.

export interface DragOverlayProps extends DndDragOverlayProps {
  children?: React.ReactNode;
  /** Merged with auto z-index (1250). Caller value wins on conflict. */
  style?: React.CSSProperties;
}

export function DragOverlay({ children, style, ...props }: DragOverlayProps) {
  return (
    <DndDragOverlay style={{ zIndex: 1250, ...style }} {...props}>
      <ThemeProvider theme={vaelTheme}>
        {children}
      </ThemeProvider>
    </DndDragOverlay>
  );
}

export default DragOverlay;
