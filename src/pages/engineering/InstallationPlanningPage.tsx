
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const InstallationPlanningPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations');
  };

  const sections = [
    {
      title: "Project Planning Fundamentals",
      description: "Site survey and assessment, resource planning, scheduling, and risk management",
      path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/installation-planning/project-planning"
    },
    {
      title: "Technical Design Considerations",
      description: "Circuit design, cable sizing, equipment selection, protection schemes, and control system integration",
      path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/installation-planning/technical-design"
    },
    {
      title: "Implementation and Quality Control",
      description: "Installation management, quality assurance, testing, commissioning, and documentation",
      path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/installation-planning/implementation"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Installation Planning"
          description="Planning and executing electrical installation projects"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-6">
          {sections.map((section, index) => (
            <Card 
              key={index}
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(section.path)}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-[#FFC900] mt-1" />
                  <div>
                    <h3 className="text-[#FFC900] font-medium text-xl mb-2">{section.title}</h3>
                    <p className="text-[#FFC900]/70">{section.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default InstallationPlanningPage;
