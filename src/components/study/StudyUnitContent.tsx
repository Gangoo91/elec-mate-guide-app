import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText } from "lucide-react";

interface StudyUnitContentProps {
  title: string;
  description: string;
  units: {
    title: string;
    content: string[];
    learningOutcomes?: string[];
  }[];
}

const StudyUnitContent = ({ title, description, units }: StudyUnitContentProps) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <Card 
        onClick={() => navigate('core-units')}
        className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
      >
        <CardHeader>
          <div className="flex items-center gap-3">
            <BookText className="text-[#FFC900] h-6 w-6" />
            <CardTitle className="text-[#FFC900]">{title}</CardTitle>
          </div>
          <CardDescription className="text-[#FFC900]/70">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-[#FFC900]/70">
            Click to explore core units with interactive lessons, quizzes, and video content
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyUnitContent;
