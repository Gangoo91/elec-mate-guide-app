
import React from 'react';
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

interface LearningObjectiveProps {
  title: string;
  children: React.ReactNode;
}

export const LearningObjective = ({ title, children }: LearningObjectiveProps) => (
  <Collapsible className="mb-4">
    <CollapsibleTrigger className="flex items-center gap-2 w-full text-left p-4 rounded-lg bg-[#2a2d24] hover:bg-[#32362b] transition-colors">
      <ChevronDown className="h-5 w-5 text-[#FFC900] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      <span className="text-[#FFC900]">{title}</span>
    </CollapsibleTrigger>
    <CollapsibleContent className="p-4">
      <div className="text-[#FFC900]/80 space-y-2">
        {children}
      </div>
    </CollapsibleContent>
  </Collapsible>
);
