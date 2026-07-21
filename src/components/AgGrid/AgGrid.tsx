import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

// ag-grid-react is a peer dependency. ag-grid-enterprise is OPTIONAL:
// the grid runs in AG Grid Community mode by default. Pass a licenseKey only
// if you have installed ag-grid-enterprise and want enterprise features.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AgGridReactProps = Record<string, any>;

// Map the MUI theme palette to AG Grid CSS custom properties.
// AG Grid reads these at runtime, keeping the grid visually in sync
// with the active MUI theme (including future dark mode support).
function buildAgVars(t: Theme): React.CSSProperties {
  return {
    '--ag-background-color': t.palette.background.paper,
    '--ag-foreground-color': t.palette.text.primary,
    '--ag-border-color': t.palette.divider,
    '--ag-row-border-color': t.palette.divider,
    '--ag-header-background-color': t.palette.background.default,
    '--ag-header-foreground-color': t.palette.text.secondary,
    '--ag-row-hover-color': t.palette.action.hover,
    '--ag-selected-row-background-color': t.palette.action.selected,
    '--ag-odd-row-background-color': 'transparent',
    '--ag-font-family': t.typography.fontFamily,
    '--ag-font-size': t.typography.body2.fontSize,
    '--ag-cell-horizontal-padding': `${t.spacing(2)}`,
    '--ag-header-height': '56px',
    '--ag-row-height': '52px',
    '--ag-input-focus-border-color': t.palette.primary.main,
    '--ag-range-selection-border-color': t.palette.primary.main,
    '--ag-checkbox-checked-color': t.palette.primary.main,
    '--ag-alpine-active-color': t.palette.primary.main,
  } as React.CSSProperties;
}

// Module registration is process-wide in AG Grid; guard so we only do it once.
let agModulesRegistered = false;

export interface AgGridProps extends AgGridReactProps {
  /** AG Grid Enterprise license key. Must be set before enterprise features are used. */
  licenseKey?: string;
  /** Required — provides stable row identity; prevents flicker on updates. */
  getRowId: (params: { data: Record<string, unknown> }) => string;
  className?: string;
  style?: React.CSSProperties;
  /** Container height. Defaults to 600px. */
  height?: number | string;
}

export function AgGrid({ licenseKey, className, style, height = 600, ...gridProps }: AgGridProps) {
  const theme = useTheme();
  const agVars = useMemo(() => buildAgVars(theme), [theme]);

  // Register license key if provided. Runs once per key change.
  React.useEffect(() => {
    if (!licenseKey) return;
    try {
      // Dynamic import keeps ag-grid-enterprise out of the bundle when unused.
      import('ag-grid-enterprise').then(({ LicenseManager }) => {
        LicenseManager.setLicenseKey(licenseKey!);
      });
    } catch {
      // ag-grid-enterprise not installed — enterprise features unavailable.
    }
  }, [licenseKey]);

  // Lazily resolve AgGridReact so this file compiles even without ag-grid-react installed.
  const [AgGridReact, setAgGridReact] = React.useState<React.ComponentType<AgGridReactProps> | null>(null);
  React.useEffect(() => {
    // AG Grid v33+ requires modules to be registered before any grid renders,
    // else it throws error #272 and renders nothing. Register all Community
    // features once (guarded), alongside the lazy react import so ag-grid stays
    // out of the bundle until the grid is actually used.
    Promise.all([import('ag-grid-react'), import('ag-grid-community')])
      .then(([reactMod, communityMod]) => {
        const { ModuleRegistry, AllCommunityModule } = communityMod as unknown as {
          ModuleRegistry: { registerModules: (m: unknown[]) => void };
          AllCommunityModule: unknown;
        };
        if (!agModulesRegistered) {
          ModuleRegistry.registerModules([AllCommunityModule]);
          agModulesRegistered = true;
        }
        setAgGridReact(() => reactMod.AgGridReact);
      })
      .catch(() => null);
  }, []);

  // Reserve the themed container while the grid module resolves, so the grid
  // fills in on load without a flash of empty space / layout jump on first render.
  if (!AgGridReact) {
    return (
      <div
        className={`ag-theme-alpine${className ? ` ${className}` : ''}`}
        style={{ height, width: '100%', ...agVars, ...style }}
        aria-busy="true"
      />
    );
  }

  return (
    <div
      className={`ag-theme-alpine${className ? ` ${className}` : ''}`}
      style={{ height, width: '100%', ...agVars, ...style }}
    >
      <AgGridReact
        defaultColDef={{
          sortable: true,
          filter: true,
          resizable: true,
          minWidth: 80,
        }}
        animateRows
        {...gridProps}
      />
    </div>
  );
}

export default AgGrid;
