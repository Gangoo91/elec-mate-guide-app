
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Book, School, TestTube, Wrench, Zap, Building } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";

const EALPage = () => {
  const navigate = useNavigate();
  
  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials');
  };
  
  const qualifications = [
    {
      title: "Level 2",
      description: "EAL Level 2 Diploma in Electrical Installation Core Materials",
      icon: <School className="h-6 w-6 text-[#FFC900]" />,
      path: '/apprentices/study-materials/eal/level-2'
    },
    {
      title: "Level 3",
      description: "EAL Level 3 Advanced Diploma in Electrical Installation",
      icon: <School className="h-6 w-6 text-[#FFC900]" />,
      path: '/apprentices/study-materials/eal/level-3'
    },
    {
      title: "Inspection & Testing",
      description: "EAL Level 3 Award in Inspection, Testing and Certification",
      icon: <TestTube className="h-6 w-6 text-[#FFC900]" />,
      path: '/apprentices/study-materials/eal/inspection-testing'
    },
    {
      title: "EV Installation",
      description: "EAL Level 3 Award in Electric Vehicle Charging Equipment Installation",
      icon: <Zap className="h-6 w-6 text-[#FFC900]" />,
      path: '/apprentices/study-materials/eal/ev-installation'
    },
    {
      title: "Hazardous Areas",
      description: "EAL Level 3 Award in Hazardous Areas Installation and Inspection",
      icon: <Wrench className="h-6 w-6 text-[#FFC900]" />,
      path: '/apprentices/study-materials/eal/hazardous-areas'
    },
    {
      title: "Building Controls",
      description: "EAL Level 4 Award in Advanced Building Controls and Energy Management",
      icon: <Building className="h-6 w-6 text-[#FFC900]" />,
      path: '/apprentices/study-materials/eal/building-controls'
    }
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="EAL Qualifications"
          description="Excellence, Achievement & Learning (EAL) qualification materials for electrical apprentices"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {qualifications.map((qualification, index) => (
            <Card 
              key={index} 
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
              onClick={() => handleCardClick(qualification.path)}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  {qualification.icon}
                  <div>
                    <h3 className="text-[#FFC900] font-medium text-lg mb-2">{qualification.title}</h3>
                    <p className="text-[#FFC900]/70 text-sm">{qualification.description}</p>
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

export default EALPage;
