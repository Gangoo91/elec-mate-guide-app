
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Book, Box, ClipboardCheck } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";

const Level3ElectricalPage = () => {
  const navigate = useNavigate();
  
  const sections = [
    {
      title: "Core Units",
      description: "Access all essential Level 3 units covering environmental technology systems, electrical science, fault diagnosis, and more.",
      icon: <Box className="h-6 w-6 text-[#FFC900]" />,
      link: '/apprentices/study-materials/city-guilds/level-3/core-units'
    },
    {
      title: "Simplified Learning",
      description: "Break down complex Level 3 topics into easy-to-understand modules with practical examples and step-by-step guides.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
      link: '/apprentices/study-materials/city-guilds/level-3/simplified'
    },
    {
      title: "Mock Exams",
      description: "Practice assessments to help you prepare for your Level 3 qualification examinations.",
      icon: <ClipboardCheck className="h-6 w-6 text-[#FFC900]" />,
      link: '/apprentices/study-materials/city-guilds/level-3/exams'
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
          title="Level 3 Electrical Installation (2365-05)"
          description="Advanced study materials for your Level 3 electrical qualification, designed to build on your Level 2 knowledge."
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {sections.map((section, index) => (
            <ResourceCard
              key={index}
              title={section.title}
              description={section.description}
              icon={section.icon}
              fullCardLink={section.link}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3ElectricalPage;
