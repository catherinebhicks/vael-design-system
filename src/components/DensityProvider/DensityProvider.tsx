import * as React from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

export type Density = 'compact' | 'regular' | 'comfortable';

export interface DensityTokens {
  /** Base spacing unit (px) for this density. */
  space: number;
  /** Default MUI control size. */
  size: 'small' | 'medium';
  /** Row min-height (px) for lists/tables. */
  rowHeight: number;
}

export const densityScale: Record<Density, DensityTokens> = {
  compact: { space: 6, size: 'small', rowHeight: 32 },
  regular: { space: 8, size: 'medium', rowHeight: 40 },
  comfortable: { space: 12, size: 'medium', rowHeight: 52 },
};

const DensityContext = React.createContext<{ density: Density; tokens: DensityTokens }>({
  density: 'regular',
  tokens: densityScale.regular,
});

/** Read the current density (and its tokens) from context. */
export function useDensity() {
  return React.useContext(DensityContext);
}

export interface DensityProviderProps {
  density?: Density;
  children: React.ReactNode;
  /** Also expose the density as CSS vars (`--vael-density-space`, `--vael-density-row`). */
  cssVars?: boolean;
  sx?: SxProps<Theme>;
}

/**
 * DensityProvider — sets a compact / regular / comfortable density for its
 * subtree. Consumers read `useDensity()` to size controls, rows, and spacing
 * consistently; CSS vars are exposed for non-MUI surfaces. Density is a
 * foundation choice (like a theme), not a per-component prop.
 */
export function DensityProvider({ density = 'regular', children, cssVars = true, sx }: DensityProviderProps) {
  const tokens = densityScale[density];
  const ctx = React.useMemo(() => ({ density, tokens }), [density, tokens]);
  return (
    <DensityContext.Provider value={ctx}>
      <Box
        data-density={density}
        sx={[
          cssVars
            ? {
                ['--vael-density-space' as string]: `${tokens.space}px`,
                ['--vael-density-row' as string]: `${tokens.rowHeight}px`,
              }
            : {},
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        {children}
      </Box>
    </DensityContext.Provider>
  );
}

export default DensityProvider;
