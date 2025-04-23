
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Play } from "lucide-react";

const lessons = [
  {
    id: "basic-circuit-theory",
    title: "Basic Circuit Theory",
    description: "Interactive simulation of basic electrical circuits.",
    duration: "45 minutes",
    progress: 75,
  },
  {
    id: "cable-installation",
    title: "Cable Installation",
    description: "Step-by-step guide to proper cable installation techniques.",
    duration: "60 minutes",
    progress: 30,
  },
  {
    id: "testing-and-inspection",
    title: "Testing and Inspection",
    description: "Interactive guide to testing electrical installations.",
    duration: "90 minutes",
    progress: 0,
  }
];

const InteractiveLessonsPage = () => {
  const navigate = useNavigate();

  const handleLessonClick = (lessonId: string) => {
    navigate(`/apprentices/study-materials/nvq2/interactive-lessons/${lessonId}`);
  };

  return (
    <div className="mt-8">
      <PageHeader 
        title="Interactive Lessons - NVQ Level 2"
        description="Learn through hands-on exercises and interactive simulations"
        hideBackButton={true}
      />

      <div className="grid gap-6 mt-6">
        {lessons.map((lesson) => (
          <Card
            key={lesson.id}
            className="bg-[#22251e] border-[#FFC900]/20 cursor-pointer hover:scale-105 hover:border-[#FFC900]/50 transition-all"
            onClick={() => handleLessonClick(lesson.id)}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") handleLessonClick(lesson.id);
            }}
            aria-label={`Go to lesson: ${lesson.title}`}
            role="button"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Play className="text-[#FFC900] h-6 w-6" />
                  <CardTitle className="text-[#FFC900]">{lesson.title}</CardTitle>
                </div>
                <span className="text-[#FFC900]/70 text-sm">{lesson.duration}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/70 mb-4">{lesson.description}</p>
              <div className="flex items-center gap-4">
                <Progress value={lesson.progress} className="h-2" />
                <span className="text-[#FFC900]/70 text-sm">{lesson.progress}%</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InteractiveLessonsPage;
