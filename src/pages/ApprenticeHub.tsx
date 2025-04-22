
import React from "react";
import { BookOpen, FileText, Video, Lightbulb, Notebook, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LearningHub from "@/components/apprentices/LearningHub";

const ApprenticeHub = () => {
  const learningResources = [
    {
      title: "Basic Electrical Theory",
      description: "Understand the fundamentals of electrical current, voltage, and resistance",
      icon: <Lightbulb className="h-8 w-8 text-[#FFC900]" />,
      type: "Reading",
      typeIcon: <FileText className="h-4 w-4" />,
      progress: 0,
    },
    {
      title: "Safety Procedures",
      description: "Essential safety protocols every apprentice should know",
      icon: <Notebook className="h-8 w-8 text-[#FFC900]" />,
      type: "Course",
      typeIcon: <Video className="h-4 w-4" />,
      progress: 0,
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#FFC900] mb-2">Apprentice Hub</h1>
            <p className="text-[#FFC900]/80">Your personal learning and development center</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]">
              Track Progress
            </Button>
          </div>
        </div>

        {/* Main content area */}
        <LearningHub />
      </div>
    </MainLayout>
  );
};

export default ApprenticeHub;
