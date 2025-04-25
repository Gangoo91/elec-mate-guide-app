
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";

interface ExamCardProps {
  title: string;
  description: string;
  unitCode?: string;
  unitTitle?: string;
  numQuestions: number;
  timeLimit: number;
  onStart: () => void;
}

const ExamCard = ({ 
  title, 
  description, 
  unitCode, 
  unitTitle,
  numQuestions, 
  timeLimit, 
  onStart 
}: ExamCardProps) => {
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900] flex items-center gap-2">
          <Book className="h-5 w-5" />
          {title}
        </CardTitle>
        {unitTitle && (
          <p className="text-[#FFC900]/90 text-sm">
            Unit {unitCode}: {unitTitle}
          </p>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-[#FFC900]/70 mb-4">{description}</p>
        <div className="space-y-1 text-[#FFC900]/70">
          <p>Questions: {numQuestions}</p>
          <p>Time Limit: {timeLimit} minutes</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onStart}
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
        >
          Start Exam
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExamCard;
