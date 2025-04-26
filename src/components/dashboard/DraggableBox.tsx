
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, FolderGit2, Settings } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface DraggableBoxProps {
  id: string;
  title: string;
  type: 'schedule' | 'projects' | 'admin';
  description: string;
}

const DraggableBox = ({ id, title, type, description }: DraggableBoxProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const getIcon = () => {
    switch (type) {
      case 'schedule':
        return <Calendar className="h-5 w-5 text-[#FFC900]" />;
      case 'projects':
        return <FolderGit2 className="h-5 w-5 text-[#FFC900]" />;
      case 'admin':
        return <Settings className="h-5 w-5 text-[#FFC900]" />;
      default:
        return null;
    }
  };

  return (
    <Card 
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-[#22251e] border-[#FFC900]/20 cursor-move"
    >
      <CardHeader>
        <CardTitle className="text-[#FFC900] flex items-center gap-2">
          {getIcon()}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[#FFC900]/70">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default DraggableBox;
