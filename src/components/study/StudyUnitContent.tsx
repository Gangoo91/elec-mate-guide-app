
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, FileVideo, Award, Play } from "lucide-react";

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

  const studyOptions = [
    {
      title: "Core Units",
      description: "Explore core units with interactive lessons, quizzes, and video content",
      icon: <BookText className="text-[#FFC900] h-6 w-6" />,
      path: 'core-units'
    },
    {
      title: "Interactive Lessons",
      description: "Learn through engaging interactive content and practical exercises",
      icon: <Play className="text-[#FFC900] h-6 w-6" />,
      path: 'interactive-lessons'
    },
    {
      title: "Quizzes & Progress",
      description: "Test your knowledge and track your learning progress",
      icon: <Award className="text-[#FFC900] h-6 w-6" />,
      path: 'quizzes'
    },
    {
      title: "Video Content",
      description: "Watch detailed video explanations and demonstrations",
      icon: <FileVideo className="text-[#FFC900] h-6 w-6" />,
      path: 'videos'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {studyOptions.map((option, index) => (
        <Card 
          key={index}
          onClick={() => navigate(option.path)}
          className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              {option.icon}
              <CardTitle className="text-[#FFC900]">{option.title}</CardTitle>
            </div>
            <CardDescription className="text-[#FFC900]/70">
              {option.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-[#FFC900]/70">
              Click to explore {option.title.toLowerCase()}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StudyUnitContent;
