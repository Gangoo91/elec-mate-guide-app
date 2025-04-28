
import React, { ReactNode, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, BookOpen, CheckCircle } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

interface EnhancedLearningSectionProps {
  title: string;
  description?: string;
  content: ReactNode;
  examples?: ReactNode;
  practice?: ReactNode;
  illustration?: string;
}

export const EnhancedLearningSection = ({ 
  title, 
  description, 
  content, 
  examples,
  practice,
  illustration
}: EnhancedLearningSectionProps) => {
  const [isContentOpen, setIsContentOpen] = useState(true);
  const [isExamplesOpen, setIsExamplesOpen] = useState(false);
  const [isPracticeOpen, setIsPracticeOpen] = useState(false);
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const toggleCompleted = (section: string) => {
    if (completedSections.includes(section)) {
      setCompletedSections(completedSections.filter(s => s !== section));
    } else {
      setCompletedSections([...completedSections, section]);
    }
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 mb-6 overflow-hidden">
      <div className="p-6 pb-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-[#FFC900] font-medium text-xl mb-2">{title}</h3>
            {description && (
              <p className="text-[#FFC900]/80 text-sm mb-4">{description}</p>
            )}
          </div>
          {illustration && (
            <div className="hidden md:block ml-4">
              <img 
                src={illustration} 
                alt={`Illustration for ${title}`}
                className="w-32 h-32 object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <Collapsible 
        open={isContentOpen} 
        onOpenChange={setIsContentOpen}
      >
        <CollapsibleTrigger className="flex items-center gap-2 w-full text-left p-4 hover:bg-[#2a2d24] transition-colors border-t border-[#FFC900]/10">
          <ChevronDown 
            className={`h-5 w-5 text-[#FFC900] shrink-0 transition-transform duration-200 ${isContentOpen ? 'rotate-180' : ''}`} 
          />
          <span className="text-[#FFC900] font-medium">Core Concepts</span>
          {completedSections.includes('content') && (
            <CheckCircle className="h-4 w-4 text-green-400 ml-2" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 pb-6 pt-2 bg-[#22251e]">
          <div className="text-[#FFC900]/80 space-y-4">
            {content}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="mt-4 border-[#FFC900]/30 text-[#FFC900]"
            onClick={() => toggleCompleted('content')}
          >
            {completedSections.includes('content') ? 'Mark as Incomplete' : 'Mark as Complete'}
          </Button>
        </CollapsibleContent>
      </Collapsible>

      {/* Examples Section */}
      {examples && (
        <Collapsible 
          open={isExamplesOpen} 
          onOpenChange={setIsExamplesOpen}
        >
          <CollapsibleTrigger className="flex items-center gap-2 w-full text-left p-4 hover:bg-[#2a2d24] transition-colors border-t border-[#FFC900]/10">
            <ChevronDown 
              className={`h-5 w-5 text-[#FFC900] shrink-0 transition-transform duration-200 ${isExamplesOpen ? 'rotate-180' : ''}`} 
            />
            <span className="text-[#FFC900] font-medium">Examples & Applications</span>
            {completedSections.includes('examples') && (
              <CheckCircle className="h-4 w-4 text-green-400 ml-2" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="px-6 pb-6 pt-2 bg-[#22251e]">
            <div className="text-[#FFC900]/80 space-y-4">
              {examples}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 border-[#FFC900]/30 text-[#FFC900]"
              onClick={() => toggleCompleted('examples')}
            >
              {completedSections.includes('examples') ? 'Mark as Incomplete' : 'Mark as Complete'}
            </Button>
          </CollapsibleContent>
        </Collapsible>
      )}

      {/* Practice Section */}
      {practice && (
        <Collapsible 
          open={isPracticeOpen} 
          onOpenChange={setIsPracticeOpen}
        >
          <CollapsibleTrigger className="flex items-center gap-2 w-full text-left p-4 hover:bg-[#2a2d24] transition-colors border-t border-[#FFC900]/10">
            <ChevronDown 
              className={`h-5 w-5 text-[#FFC900] shrink-0 transition-transform duration-200 ${isPracticeOpen ? 'rotate-180' : ''}`} 
            />
            <span className="text-[#FFC900] font-medium">Practice Exercises</span>
            {completedSections.includes('practice') && (
              <CheckCircle className="h-4 w-4 text-green-400 ml-2" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="px-6 pb-6 pt-2 bg-[#22251e]">
            <div className="text-[#FFC900]/80 space-y-4">
              {practice}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 border-[#FFC900]/30 text-[#FFC900]"
              onClick={() => toggleCompleted('practice')}
            >
              {completedSections.includes('practice') ? 'Mark as Incomplete' : 'Mark as Complete'}
            </Button>
          </CollapsibleContent>
        </Collapsible>
      )}

      <div className="p-4 border-t border-[#FFC900]/10 flex justify-between items-center">
        <div className="text-xs text-[#FFC900]/60">
          <BookOpen className="h-4 w-4 inline mr-1" />
          Unit 202: Principles of Electrical Science
        </div>
        <div className="text-xs text-[#FFC900]/60">
          {completedSections.length} of {1 + (examples ? 1 : 0) + (practice ? 1 : 0)} sections completed
        </div>
      </div>
    </Card>
  );
};
