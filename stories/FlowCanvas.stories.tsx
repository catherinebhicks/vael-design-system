import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { applyNodeChanges, applyEdgeChanges } from 'reactflow';
import type { Node, Edge } from 'reactflow';
import { FlowCanvas } from '../src/components/FlowCanvas';

const meta: Meta<typeof FlowCanvas> = {
  title: 'Interaction/FlowCanvas',
  component: FlowCanvas,
  tags: ['autodocs'],
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=108-2' }, layout: 'fullscreen', chromatic: { delay: 600 } },
};
export default meta;
type Story = StoryObj<typeof FlowCanvas>;

const initialNodes: Node[] = [
  { id: '1', position: { x: 80, y: 200 }, data: { label: 'Start' } },
  { id: '2', position: { x: 280, y: 100 }, data: { label: 'Build' } },
  { id: '3', position: { x: 280, y: 300 }, data: { label: 'Lint' } },
  { id: '4', position: { x: 500, y: 200 }, data: { label: 'Test' } },
  { id: '5', position: { x: 700, y: 200 }, data: { label: 'Deploy' } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5' },
];

function CanvasDemo(props: Partial<React.ComponentProps<typeof FlowCanvas>>) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: Parameters<typeof applyNodeChanges>[0]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: Parameters<typeof applyEdgeChanges>[0]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <FlowCanvas
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      {...props}
    />
  );
}

export const Default: Story = {
  render: () => <CanvasDemo height={500} />,
};

export const DarkBackground: Story = {
  name: 'Dark container',
  render: () => (
    <div style={{ background: '#121212', padding: 0 }}>
      <CanvasDemo height={500} />
    </div>
  ),
};
