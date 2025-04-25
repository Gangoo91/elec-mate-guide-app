
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/card";
import UnitCard from "@/components/level2/UnitCard";

const Level2CoreUnitsPage = () => {
  const navigate = useNavigate();
  
  const units = [
    {
      unitNumber: "201",
      title: "Health and Safety in Building Services Engineering",
      description: "Learn essential safety practices for electrical work",
      path: "/apprentices/study-materials/city-guilds/level-2/core-units/201"
    },
    {
      unitNumber: "202",
      title: "Principles of Electrical Science",
      description: "Master the fundamentals of electricity",
      path: "/apprentices/study-materials/city-guilds/level-2/core-units/202"
    },
    {
      unitNumber: "203",
      title: "Electrical Installations Technology",
      description: "Discover installation techniques and practices",
      path: "/apprentices/study-materials/city-guilds/level-2/core-units/203"
    },
    {
      unitNumber: "204",
      title: "Installation of Wiring Systems and Enclosures",
      description: "Learn practical wiring skills and techniques",
      path: "/apprentices/study-materials/city-guilds/level-2/core-units/204"
    },
    {
      unitNumber: "210",
      title: "Understand How to Communicate with Others",
      description: "Develop essential communication skills",
      path: "/apprentices/study-materials/city-guilds/level-2/core-units/210"
    }
  ];

  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 2 Core Units"
          description="Essential core units for your Level 2 electrical qualification. Click on each unit to access detailed learning materials and guides."
          customBackAction={handleBackClick}
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

export default Level2CoreUnitsPage;
