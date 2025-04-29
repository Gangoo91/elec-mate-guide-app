
import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface SectionProps {
  id: string;
  title: string;
  description: string;
  onStudy: (id: string) => void;
}

const SectionItem: React.FC<SectionProps> = ({ id, title, description, onStudy }) => {
  return (
    <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-medium text-[#FFC900]">
            <span className="mr-2">{id}</span>
            {title}
          </h3>
          <p className="text-[#FFC900]/70 mt-2">
            {description}
          </p>
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
          onClick={() => onStudy(id)}
        >
          <BookOpen className="h-4 w-4" />
          Study
        </Button>
      </div>
    </div>
  );
};

export default SectionItem;
