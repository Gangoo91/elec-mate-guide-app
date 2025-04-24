
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Book, FileText, Box } from "lucide-react";

const Level2ElectricalPage = () => {
  const navigate = useNavigate();
  
  const sections = [
    {
      title: "Core Units",
      description: "Access all essential Level 2 units covering health and safety, electrical science, installations, and more.",
      icon: <Box className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/city-guilds/level-2/core-units')
    },
    {
      title: "Simplified Learning",
      description: "Break down of complex topics into easy-to-understand modules with practical examples and step-by-step guides.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Mock Exams",
      description: "Practice assessments to help you prepare for your Level 2 qualification examinations.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 2 Electrical Installation (2365-02)"
          description="Essential study materials for your Level 2 electrical qualification, presented in an easy-to-understand way."
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {sections.map((section, index) => (
            <Card 
              key={index} 
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
              onClick={section.onClick}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  {section.icon}
                  <div>
                    <h3 className="text-[#FFC900] font-medium text-lg mb-2">{section.title}</h3>
                    <p className="text-[#FFC900]/70 text-sm">{section.description}</p>
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
