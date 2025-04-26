import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import DraggableBox from './DraggableBox';
import { useToast } from "@/hooks/use-toast";

const defaultBoxes = [
  {
    id: 'schedule',
    title: 'Job Scheduling',
    type: 'schedule' as const,
    description: 'Manage your appointments, tasks, and job timelines.',
  },
  {
    id: 'projects',
    title: 'Project Management',
    type: 'projects' as const,
    description: 'Integration with project tracking and collaboration tools.',
  },
  {
    id: 'admin',
    title: 'Templates & Documents',
    type: 'admin' as const,
    description: 'Access and manage your estimates, invoices, and certificates.',
  },
];

const DraggableDashboard = () => {
  const [items, setItems] = useState(defaultBoxes);
  const { toast } = useToast();
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        
        const newOrder = arrayMove(items, oldIndex, newIndex);
        
        toast({
          title: "Dashboard Updated",
          description: "Your dashboard layout has been saved.",
        });
        
        return newOrder;
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items.map(item => item.id)} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {items.map((box) => (
            <DraggableBox key={box.id} {...box} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default DraggableDashboard;
