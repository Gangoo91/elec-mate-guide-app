
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ListCheck, List, FileText } from "lucide-react";

const MOETPage = () => {
  const navigate = useNavigate();
  
  const handleBackToCityGuilds = () => {
    navigate('/apprentices/study-materials/city-guilds');
  };

  const sections = [
    {
      title: "Core Knowledge",
      description: "Essential knowledge covering electrical principles, maintenance practices, and engineering operations.",
      icon: <BookOpen className="h-6 w-6 text-[#FFC900]" />,
      path: '/apprentices/study-materials/city-guilds/moet/core-knowledge'
    },
    {
      title: "Core Skills",
      description: "Practical skills in electrical maintenance, fault finding, and equipment installation.",
      icon: <ListCheck className="h-6 w-6 text-[#FFC900]" />,
      path: '/apprentices/study-materials/city-guilds/moet/core-skills'
    },
    {
      title: "Behaviours Expected",
      description: "Professional conduct, safety awareness, and teamwork expectations in the workplace.",
      icon: <List className="h-6 w-6 text-[#FFC900]" />,
      path: '/apprentices/study-materials/city-guilds/moet/behaviours'
    },
    {
      title: "End Point Assessment",
      description: "Final assessment requirements including practical observations and technical interviews.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />,
      path: '/apprentices/study-materials/city-guilds/moet/assessment'
    }
  ];

  const handleCardClick = (path: string) => {
    console.log("MOETPage - Navigating to:", path);
    navigate(path);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="MOET Level 3"
          description="Maintenance and Operations Engineering Technician (Electrical) qualification materials"
          customBackAction={handleBackToCityGuilds}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {sections.map((section, index) => (
            <Card 
              key={index} 
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
              onClick={() => handleCardClick(section.path)}
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

export default MOETPage;
