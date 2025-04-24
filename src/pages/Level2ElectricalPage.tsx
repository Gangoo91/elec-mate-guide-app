
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Book, BookOpen, Video, ListOrdered } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Level2ElectricalPage = () => {
  const resources = [
    {
      title: "Course Content",
      description: "Access the full Level 2 electrical installation course syllabus and learning materials.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Simplified Learning",
      description: "Break down complex topics into easy-to-understand modules with practical examples.",
      icon: <BookOpen className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Videos",
      description: "Watch instructional videos covering key Level 2 electrical installation topics.",
      icon: <Video className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Quizzes",
      description: "Test your knowledge with interactive quizzes and assessments.",
      icon: <ListOrdered className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 2 Electrical Installation"
          description="Comprehensive learning resources for your Level 2 electrical qualification."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  {resource.icon}
                  <div>
                    <h3 className="text-[#FFC900] font-medium text-lg mb-2">{resource.title}</h3>
                    <p className="text-[#FFC900]/70 text-sm mb-4">{resource.description}</p>
                    <Button 
                      className="w-full bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
                    >
                      Access Content
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2ElectricalPage;
