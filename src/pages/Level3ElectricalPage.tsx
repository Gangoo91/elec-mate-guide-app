
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import UnitCard from "@/components/level2/UnitCard";

const Level3ElectricalPage = () => {
  const navigate = useNavigate();
  
  const units = [
    {
      unitNumber: "201",
      title: "Health and Safety in Building Services Engineering",
      description: "Advanced health and safety practices, risk assessment, and safe working procedures in electrical installations.",
      path: "/apprentices/study-materials/city-guilds/level-3/course-content/unit-201"
    },
    {
      unitNumber: "301",
      title: "Environmental Technology Systems",
      description: "Learn about renewable energy technologies, sustainable electrical installations, and environmental considerations.",
      path: "/apprentices/study-materials/city-guilds/level-3/course-content/unit-301"
    },
    {
      unitNumber: "302",
      title: "Principles of Electrical Science",
      description: "Advanced electrical theory, including three-phase systems, motors, and complex circuit analysis.",
      path: "/apprentices/study-materials/city-guilds/level-3/course-content/unit-302"
    },
    {
      unitNumber: "303",
      title: "Electrical Installations: Fault Diagnosis and Rectification",
      description: "Develop skills in finding and fixing electrical faults using advanced testing equipment and procedures.",
      path: "/apprentices/study-materials/city-guilds/level-3/course-content/unit-303"
    },
    {
      unitNumber: "304",
      title: "Electrical Installations: Inspection, Testing and Commissioning",
      description: "Learn how to test, inspect, and certify electrical installations according to regulations.",
      path: "/apprentices/study-materials/city-guilds/level-3/course-content/unit-304"
    },
    {
      unitNumber: "305",
      title: "Electrical Systems Design",
      description: "Design electrical installations for buildings and structures, including load calculations and circuit planning.",
      path: "/apprentices/study-materials/city-guilds/level-3/course-content/unit-305"
    },
    {
      unitNumber: "308",
      title: "Career Awareness in Building Services Engineering",
      description: "Explore career opportunities and professional development in electrical engineering.",
      path: "/apprentices/study-materials/city-guilds/level-3/course-content/unit-308"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 3 Electrical Installation (2365-05)"
          description="Advanced study materials for your Level 3 electrical qualification, designed to build on your Level 2 knowledge."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {units.map((unit) => (
            <UnitCard
              key={unit.unitNumber}
              unitNumber={unit.unitNumber}
              title={unit.title}
              description={unit.description}
              path={unit.path}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3ElectricalPage;
