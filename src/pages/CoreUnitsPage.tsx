import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookText, Video, Progress as ProgressIcon } from "lucide-react";

interface CoreUnitProps {
  title: string;
  content: string[];
  learningOutcomes?: string[];
  progress: number;
}

const CoreUnitsPage = () => {
  const units: CoreUnitProps[] = [
    {
      title: "Unit 201: Health & Safety Basics",
      content: [
        "Your safety comes first! Learn about protective equipment (PPE)",
        "Understanding hazards - what could hurt you and how to stay safe",
        "Simple guide to risk assessments",
        "Basic first aid knowledge",
        "Fire safety made easy"
      ],
      progress: 65,
    },
    {
      title: "Unit 202: Electrical Science Made Simple",
      content: [
        "Voltage explained simply",
        "Current - how electricity flows",
        "Resistance - what slows electricity down",
        "Basic calculations made easy",
        "Simple circuit diagrams"
      ],
      progress: 80,
    },
    {
      title: "Unit 203: Installation Basics",
      content: [
        "Step-by-step guide to basic wiring",
        "Tools of the trade",
        "Cable types made simple",
        "Common mistakes and how to avoid them",
        "Real-world examples"
      ],
      progress: 40,
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <PageHeader 
          title="NVQ Level 2 Core Units"
          description="Master the fundamentals with interactive lessons, quizzes, and video content"
          hideBackButton={true}
        />

        <div className="grid gap-6">
          {units.map((unit, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20">
              <CardHeader>
                <CardTitle className="text-[#FFC900]">{unit.title}</CardTitle>
                <div className="flex items-center gap-4 mt-2">
                  <Progress value={unit.progress} className="h-2" />
                  <span className="text-[#FFC900]/70 text-sm">{unit.progress}%</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <Card className="bg-[#22251e]/50 border-[#FFC900]/10 cursor-pointer hover:border-[#FFC900]/50 transition-all">
                    <CardContent className="flex items-center gap-2 p-4">
                      <BookText className="text-[#FFC900]" />
                      <span className="text-[#FFC900]">Study Materials</span>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#22251e]/50 border-[#FFC900]/10 cursor-pointer hover:border-[#FFC900]/50 transition-all">
                    <CardContent className="flex items-center gap-2 p-4">
                      <Video className="text-[#FFC900]" />
                      <span className="text-[#FFC900]">Video Lessons</span>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#22251e]/50 border-[#FFC900]/10 cursor-pointer hover:border-[#FFC900]/50 transition-all">
                    <CardContent className="flex items-center gap-2 p-4">
                      <ProgressIcon className="text-[#FFC900]" />
                      <span className="text-[#FFC900]">Practice Quiz</span>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CoreUnitsPage;
