
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Video, MessageSquare, FileCheck, Play } from "lucide-react";

interface StudyUnit {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}

interface StudyUnitContentProps {
  title?: string;
  description?: string;
  units?: StudyUnit[];
  basePath: string;
}

const StudyUnitContent = ({ title, description, units = [], basePath }: StudyUnitContentProps) => {
  // Define additional learning resources for NVQ Level 2
  const additionalResources = [
    {
      id: "interactive-lessons",
      title: "Interactive Lessons",
      description: "Learn through hands-on exercises and interactive simulations",
      icon: <Play className="h-6 w-6 text-[#FFC900]" />,
      href: `${basePath}/interactive-lessons`
    },
    {
      id: "video-tutorials",
      title: "Video Tutorials",
      description: "Watch step-by-step instructional videos on key electrical topics",
      icon: <Video className="h-6 w-6 text-[#FFC900]" />,
      href: `${basePath}/video-content`
    },
    {
      id: "practice-quizzes",
      title: "Practice Quizzes",
      description: "Test your knowledge with interactive quizzes on each topic",
      icon: <MessageSquare className="h-6 w-6 text-[#FFC900]" />,
      href: `${basePath}/quizzes-progress`
    },
  ];

  return (
    <div className="mt-8 animate-fade-in">
      {title && (
        <div className="mb-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#FFC900]">{title}</h2>
          {description && <p className="text-[#FFC900]/80 mt-2">{description}</p>}
        </div>
      )}

      {/* Main units grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {units.map((unit) => (
          <Link to={`${unit.href || basePath + '/' + unit.id}`} key={unit.id}>
            <Card className="h-full bg-[#22251e] border-[#FFC900]/20 hover:scale-105 transition-all hover:border-[#FFC900]/50 cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {unit.icon || <Book className="text-[#FFC900] h-5 w-5" />}
                  <CardTitle className="text-[#FFC900] text-lg">{unit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#FFC900]/70 text-sm">{unit.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Additional resources section */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-[#FFC900] mb-4">Additional Learning Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {additionalResources.map((resource) => (
            <Link to={resource.href} key={resource.id}>
              <Card className="h-full bg-[#22251e] border-[#FFC900]/20 hover:scale-105 transition-all hover:border-[#FFC900]/50 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {resource.icon}
                    <CardTitle className="text-[#FFC900] text-lg">{resource.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#FFC900]/70 text-sm">{resource.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyUnitContent;
