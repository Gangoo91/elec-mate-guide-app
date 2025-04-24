
import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

interface LearningObjectiveProps {
  title: string;
  children: React.ReactNode;
}

export const LearningObjective = ({ title, children }: LearningObjectiveProps) => {
  const [isOpen, setIsOpen] = useState(true); // Default to open for better UX
  
  return (
    <Collapsible 
      className="mb-4" 
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <CollapsibleTrigger className="flex items-center gap-2 w-full text-left p-4 rounded-t-lg bg-[#2a2d24] hover:bg-[#32362b] transition-colors">
        <ChevronDown 
          className={`h-5 w-5 text-[#FFC900] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
        <span className="text-[#FFC900] font-medium">{title}</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 bg-[#22251e]">
        <div className="text-[#FFC900]/80 space-y-3">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
