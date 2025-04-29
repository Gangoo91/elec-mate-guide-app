
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface AssessmentButtonProps {
  onClick: () => void;
}

const AssessmentButton = ({ onClick }: AssessmentButtonProps) => {
  return (
    <Button 
      className="w-full py-6 bg-[#FFC900] hover:bg-[#e5b700] text-[#22251e] font-semibold text-lg"
      onClick={onClick}
    >
      <CheckCircle className="h-5 w-5 mr-2" />
      Take Unit 305 Assessment
    </Button>
  );
};

export default AssessmentButton;
