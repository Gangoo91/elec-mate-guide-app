
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Book } from "lucide-react";

const Level3CoreUnitsPage = () => {
  const navigate = useNavigate();

  const units = [
    {
      id: "301",
      title: "Environmental Technology Systems",
      description: "Learn about renewable energy technologies, sustainable electrical installations, and environmental considerations."
    },
    {
      id: "302",
      title: "Principles of Electrical Science",
      description: "Advanced electrical theory, including three-phase systems, motors, and complex circuit analysis."
    },
    {
      id: "303",
      title: "Electrical Fault Diagnosis and Rectification",
      description: "Techniques for diagnosing and rectifying faults in electrical systems and equipment."
    },
    {
      id: "304",
      title: "Electrical Installations Design",
      description: "Principles of electrical installation design, calculations, and compliance with regulations."
    },
    {
      id: "305",
      title: "Electrical Systems Quality and Safety",
      description: "Quality assurance and safety considerations in electrical systems and installations."
    },
    {
      id: "308",
      title: "Career Awareness in Building Services",
      description: "Understanding career paths, professional development, and workplace requirements in building services."
    }
  ];

  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3');
  };

  const handleUnitClick = (unitId: string) => {
    if (unitId === "301" || unitId === "302") {
      navigate(`/apprentices/study-materials/city-guilds/level-3/${unitId}`);
    } else {
      navigate(`/apprentices/study-materials/city-guilds/level-3/core-units/${unitId}`);
    }
  };

  return (
    <MainLayout>
      <div className="container px-4 py-6 pt-16 md:py-8 md:pt-16">
        <PageHeader 
          title="Level 3 Core Units" 
          description="Study materials for City & Guilds Level 3 Electrotechnical qualification core units."
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
                <div className="flex items-start gap-4">
                  <Book className="h-8 w-8 text-[#FFC900] mt-1" />
                  <div>
                    <h3 className="text-[#FFC900] font-medium text-xl mb-2">
                      Unit {unit.id} - {unit.title}
                    </h3>
                    <p className="text-[#FFC900]/70">
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
