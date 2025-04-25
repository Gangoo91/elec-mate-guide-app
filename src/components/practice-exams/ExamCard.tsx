
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, FileText } from "lucide-react";

interface ExamCardProps {
  title: string;
  description: string;
  numQuestions: number;
  timeLimit: number;
  onStart: () => void;
}

const ExamCard: React.FC<ExamCardProps> = ({ 
  title, 
  description, 
  numQuestions, 
  timeLimit, 
  onStart 
}) => {
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="flex flex-col space-y-2 w-full">
            <h3 className="text-[#FFC900] font-medium text-lg mb-2">{title}</h3>
            <p className="text-[#FFC900]/70 text-sm mb-4">{description}</p>
            
            <div className="flex items-center space-x-4 text-[#FFC900]/80 text-sm">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-[#FFC900]" />
                <span>{numQuestions} Questions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#FFC900]" />
                <span>{timeLimit} Minutes</span>
              </div>
            </div>

            <Button 
              onClick={onStart} 
              className="mt-4 w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
            >
              Start Exam
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExamCard;
