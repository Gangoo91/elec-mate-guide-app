
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SectionNavigationProps {
  prevSection: string | null;
  nextSection: string | null;
  navigateToSection: (sectionId: string) => void;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({
  prevSection,
  nextSection,
  navigateToSection
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        {prevSection && (
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
            onClick={() => navigateToSection(prevSection)}
          >
            <ArrowLeft className="h-4 w-4" />
            Previous Section
          </Button>
        )}
      </div>
      <div>
        {nextSection && (
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
            onClick={() => navigateToSection(nextSection)}
          >
            Next Section
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SectionNavigation;
