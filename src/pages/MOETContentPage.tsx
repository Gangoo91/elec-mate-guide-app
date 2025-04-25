import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Book, ListCheck, List, FileText, FolderOpen } from "lucide-react";

const MOETContentPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet');
  };

  const sections = [
    {
      title: "Core Knowledge",
      description: "Essential knowledge covering electrical principles, maintenance practices, and engineering operations.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge')
    },
    {
      title: "Core Skills",
      description: "Practical skills in electrical maintenance, fault finding, and equipment installation.",
      icon: <ListCheck className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Core Behaviours",
      description: "Professional conduct, safety awareness, and teamwork expectations in the workplace.",
      icon: <List className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Portfolio and Evidence",
      description: "Building and maintaining your portfolio with evidence of competence and achievements.",
      icon: <FolderOpen className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "End Point Assessment",
      description: "Final assessment requirements including practical observations and technical interviews.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="MOET Level 3 Content"
          description="Complete curriculum and learning materials for MOET Level 3 qualification"
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

export default MOETContentPage;
