import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { Chip, Paper, Typography, Box } from '@mui/material';
import { DragOverlay } from '../src/components/DragOverlay';

const meta: Meta<typeof DragOverlay> = {
  title: 'Interaction/DragOverlay',
  component: DragOverlay,
  tags: ['autodocs'],
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=109-2' }, layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof DragOverlay>;

function DraggableChip({ id, label }: { id: string; label: string }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id });
  return (
    <Chip
      ref={setNodeRef}
      label={label}
      color="primary"
      {...listeners}
      {...attributes}
      sx={{ opacity: isDragging ? 0.4 : 1, cursor: 'grab', m: 0.5 }}
    />
  );
}

function DropZone({ id }: { id: string }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <Paper
      ref={setNodeRef}
      variant="outlined"
      sx={{
        width: 200,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: isOver ? 'primary.main' : 'divider',
        bgcolor: isOver ? 'action.hover' : 'background.paper',
        transition: 'all 0.15s',
      }}
    >
      <Typography variant="caption" color="text.secondary">Drop here</Typography>
    </Paper>
  );
}

function DragDemo() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [dropped, setDropped] = useState<string[]>([]);

  const items = ['Research', 'Design', 'Build', 'Ship'];

  return (
    <DndContext
      onDragStart={({ active }: DragStartEvent) => setActiveId(String(active.id))}
      onDragEnd={({ over }: DragEndEvent) => {
        if (over) setDropped((d) => [...d, activeId!]);
        setActiveId(null);
      }}
    >
      <Box display="flex" flexDirection="column" gap={2} alignItems="center">
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {items.filter((i) => !dropped.includes(i)).map((item) => (
            <DraggableChip key={item} id={item} label={item} />
          ))}
        </Box>
        <DropZone id="drop-zone" />
        {dropped.length > 0 && (
          <Box display="flex" gap={1} flexWrap="wrap">
            {dropped.map((item) => (
              <Chip key={item} label={item} color="success" size="small" />
            ))}
          </Box>
        )}
      </Box>
      <DragOverlay>
        {activeId ? <Chip label={activeId} color="primary" sx={{ opacity: 0.9, cursor: 'grabbing' }} /> : null}
      </DragOverlay>
    </DndContext>
  );
}

export const Default: Story = {
  render: () => <DragDemo />,
};
