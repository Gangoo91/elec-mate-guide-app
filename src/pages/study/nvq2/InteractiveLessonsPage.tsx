
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Play } from "lucide-react";

const InteractiveLessonsPage = () => {
  const lessons = [
    {
      title: "Basic Circuit Theory",
      description: "Interactive simulation of basic electrical circuits",
      duration: "45 minutes",
      progress: 75,
    },
    {
      title: "Cable Installation",
      description: "Step-by-step guide to proper cable installation techniques",
      duration: "60 minutes",
      progress: 30,
    },
    {
      title: "Testing and Inspection",
      description: "Interactive guide to testing electrical installations",
      duration: "90 minutes",
      progress: 0,
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <PageHeader 
          title="Interactive Lessons - NVQ Level 2"
          description="Learn through hands-on exercises and interactive simulations"
          hideBackButton={true}
        />

        <div className="grid gap-6">
          {lessons.map((lesson, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 cursor-pointer hover:border-[#FFC900]/50 transition-all">
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
    </MainLayout>
  );
};

export default InteractiveLessonsPage;
