
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Book, ClipboardCheck, FileCheck, Lightbulb, Settings, Zap } from "lucide-react";
import SectionCard from "@/components/units/SectionCard";

const Level3CoreUnitsPage = () => {
  const navigate = useNavigate();
  
  const units = [
    {
      id: "301",
      title: "Environmental Technology Systems",
      description: "Understanding renewable energy technologies and their applications in electrical installations.",
      icon: <Lightbulb className="h-6 w-6 text-[#FFC900]" />,
    },
    {
      id: "302",
      title: "Principles of Electrical Science",
      description: "Advanced electrical principles, including AC theory, electromagnetism, and three-phase systems.",
      icon: <Zap className="h-6 w-6 text-[#FFC900]" />,
    },
    {
      id: "303",
      title: "Fault Diagnosis and Rectification",
      description: "Methods for diagnosing and fixing electrical faults in complex installation systems.",
      icon: <Settings className="h-6 w-6 text-[#FFC900]" />,
    },
    {
      id: "304",
      title: "Inspection, Testing and Commissioning",
      description: "Procedures for ensuring electrical installations meet regulations and safety standards.",
      icon: <ClipboardCheck className="h-6 w-6 text-[#FFC900]" />,
    },
    {
      id: "305",
      title: "Electrical Systems Design",
      description: "Techniques for designing electrical installations for domestic, commercial and industrial purposes.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
    },
    {
      id: "308",
      title: "Career Awareness",
      description: "Understanding the electrical industry and professional development opportunities.",
      icon: <FileCheck className="h-6 w-6 text-[#FFC900]" />,
    },
  ];
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3');
  };
  
  const handleUnitClick = (unitId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/${unitId}`);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Level 3 Core Units" 
          description="Essential units for the Level 3 Electrical Installation qualification"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {units.map((unit) => (
            <Card 
              key={unit.id}
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
              onClick={() => handleUnitClick(unit.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#353a2c] p-3 rounded-full">
                    {unit.icon}
                  </div>
                  <div>
                    <h3 className="text-[#FFC900] font-medium text-xl mb-1">
                      Unit {unit.id}
                    </h3>
                    <p className="text-[#FFC900] font-bold text-lg mb-2">
                      {unit.title}
                    </p>
                    <p className="text-[#FFC900]/70 text-sm">
                      {unit.description}
                    </p>
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

export default Level3CoreUnitsPage;
