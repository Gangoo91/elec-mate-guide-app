
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import UnitCard from "@/components/level2/UnitCard";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Level3ElectricalPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const units = [
    {
      unitNumber: "301",
      title: "Environmental Technology Systems",
      description: "Learn about renewable energy technologies, sustainable electrical installations, and environmental considerations.",
      path: "/apprentices/study-materials/city-guilds/level-3/301"
    },
    {
      unitNumber: "302",
      title: "Principles of Electrical Science",
      description: "Advanced electrical theory, including three-phase systems, motors, and complex circuit analysis.",
      path: "/apprentices/study-materials/city-guilds/level-3/302"
    },
    {
      unitNumber: "303",
      title: "Electrical Installations: Fault Diagnosis and Rectification",
      description: "Develop skills in finding and fixing electrical faults using advanced testing equipment and procedures.",
      path: "/apprentices/study-materials/city-guilds/level-3/303"
    },
    {
      unitNumber: "304",
      title: "Electrical Installations: Inspection, Testing and Commissioning",
      description: "Learn how to test, inspect, and certify electrical installations according to regulations.",
      path: "/apprentices/study-materials/city-guilds/level-3/304"
    },
    {
      unitNumber: "305",
      title: "Electrical Systems Design",
      description: "Design electrical installations for buildings and structures, including load calculations and circuit planning.",
      path: "/apprentices/study-materials/city-guilds/level-3/305"
    },
    {
      unitNumber: "308",
      title: "Career Awareness in Building Services Engineering",
      description: "Explore career opportunities and professional development in electrical engineering.",
      path: "/apprentices/study-materials/city-guilds/level-3/308"
    }
  ];
  
  const handleBackToCityGuilds = () => {
    navigate('/apprentices/study-materials/city-guilds');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Level 3 Electrical Installation (2365-05)"
          description="Advanced study materials for your Level 3 electrical qualification, designed to build on your Level 2 knowledge."
          customBackAction={handleBackToCityGuilds}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {units.map((unit) => (
            <Card 
              key={unit.unitNumber}
              className="h-full"
            >
              <UnitCard
                unitNumber={unit.unitNumber}
                title={unit.title}
                description={unit.description}
                path={unit.path}
              />
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3ElectricalPage;
