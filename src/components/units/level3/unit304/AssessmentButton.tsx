
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AssessmentButtonProps {
  onClick: () => void;
}

const AssessmentButton: React.FC<AssessmentButtonProps> = ({ onClick }) => {
  return (
    <div className="mt-8 flex justify-center">
      <Button
        variant="outline"
        className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c] px-6 py-3"
        onClick={onClick}
      >
        Take Assessment
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default AssessmentButton;
