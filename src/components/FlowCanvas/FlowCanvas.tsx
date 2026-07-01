import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import type { Node, Edge, OnNodesChange, OnEdgesChange, NodeTypes } from 'reactflow';
import 'reactflow/dist/style.css';

// Maps MUI palette → React Flow CSS variables so the canvas stays in sync
// with the active theme (including future dark mode support).
// Rule: never import ReactFlow directly in feature code — always use FlowCanvas.
// Rule: never render FlowCanvas inside a MUI Dialog, Drawer, or focus-trapping component.
function buildRfVars(t: Theme): React.CSSProperties {
  return {
    '--xy-background-color-default': t.palette.background.default,
    '--xy-background-pattern-color-default': t.palette.divider,
    '--xy-node-background-color-default': t.palette.background.paper,
    '--xy-node-border-color-default': t.palette.divider,
    '--xy-node-color-default': t.palette.text.primary,
    '--xy-edge-label-color-default': t.palette.text.secondary,
    '--xy-handle-background-color-default': t.palette.primary.main,
    '--xy-handle-border-color-default': t.palette.primary.dark,
    '--xy-selection-background-color-default': `${t.palette.primary.main}22`,
    '--xy-selection-border-color-default': t.palette.primary.main,
    '--xy-controls-button-background-color-default': t.palette.background.paper,
    '--xy-controls-button-background-color-hover-default': t.palette.action.hover,
    '--xy-controls-button-color-default': t.palette.text.primary,
    '--xy-controls-button-border-color-default': t.palette.divider,
    // Font propagation to SVG edge labels
    fontFamily: t.typography.fontFamily,
    fontSize: t.typography.body2.fontSize,
  } as React.CSSProperties;
}

export interface FlowCanvasProps {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  nodeTypes?: NodeTypes;
  fitView?: boolean;
  /** Container height. Defaults to 600px. */
  height?: number | string;
  /** Set below MUI Drawer level if the canvas must overlap other content. */
  zIndex?: number;
  style?: React.CSSProperties;
  className?: string;
}

export function FlowCanvas({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  nodeTypes,
  fitView = false,
  height = 600,
  zIndex,
  style,
  className,
}: FlowCanvasProps) {
  const theme = useTheme();
  const rfVars = useMemo(() => buildRfVars(theme), [theme]);

  return (
    <div
      className={className}
      style={{
        height,
        width: '100%',
        position: 'relative',
        zIndex,
        ...rfVars,
        ...style,
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView={fitView}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default FlowCanvas;
