import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material';

export interface SitemapNode {
  label: React.ReactNode;
  /** Optional short annotation (route, note). */
  note?: React.ReactNode;
  children?: SitemapNode[];
  /** Highlight this node. */
  active?: boolean;
}

export interface SitemapProps {
  root: SitemapNode;
  /** 'tree' = top-down connectors; 'indent' = nested indented list. */
  variant?: 'tree' | 'indent';
  color?: string;
  sx?: SxProps<Theme>;
}

function NodeBox({ node, color }: { node: SitemapNode; color?: string }) {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 1,
        borderRadius: 1.5,
        border: (t) => `1px solid ${node.active ? color ?? t.palette.primary.main : t.palette.divider}`,
        bgcolor: (t) => (node.active ? alpha(color ?? t.palette.primary.main, 0.06) : t.palette.background.paper),
        display: 'inline-flex',
        flexDirection: 'column',
        minWidth: 96,
      }}
    >
      <Typography sx={{ fontFamily: (t) => t.typography.h6.fontFamily, fontWeight: 600, fontSize: '0.8125rem' }}>
        {node.label}
      </Typography>
      {node.note && (
        <Typography
          sx={{ fontFamily: (t) => t.typography.overline?.fontFamily, fontSize: '0.625rem', color: 'text.secondary' }}
        >
          {node.note}
        </Typography>
      )}
    </Box>
  );
}

function Tree({ node, color }: { node: SitemapNode; color?: string }) {
  const kids = node.children ?? [];
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <NodeBox node={node} color={color} />
      {kids.length > 0 && (
        <>
          <Box sx={{ width: 1, height: 16, bgcolor: 'divider' }} />
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start', position: 'relative' }}>
            {kids.length > 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: '10%',
                  height: 1,
                  bgcolor: 'divider',
                }}
              />
            )}
            {kids.map((k, i) => (
              <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ width: 1, height: 16, bgcolor: 'divider' }} />
                <Tree node={k} color={color} />
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}

function Indent({ node, color, depth = 0 }: { node: SitemapNode; color?: string; depth?: number }) {
  return (
    <Box sx={{ pl: depth ? 3 : 0, borderLeft: depth ? (t) => `1px solid ${t.palette.divider}` : 'none', ml: depth ? 1 : 0 }}>
      <Box sx={{ py: 0.5 }}>
        <NodeBox node={node} color={color} />
      </Box>
      {(node.children ?? []).map((k, i) => (
        <Indent key={i} node={k} color={color} depth={depth + 1} />
      ))}
    </Box>
  );
}

/**
 * Sitemap — an IA tree diagram of a site's page hierarchy. `tree` draws a
 * top-down org-chart with connectors; `indent` draws a nested indented list
 * for deep structures.
 */
export function Sitemap({ root, variant = 'tree', color, sx }: SitemapProps) {
  return (
    <Box sx={[{ display: 'inline-block', overflowX: 'auto' }, ...(Array.isArray(sx) ? sx : [sx])]}>
      {variant === 'tree' ? <Tree node={root} color={color} /> : <Indent node={root} color={color} />}
    </Box>
  );
}

export default Sitemap;
