
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { FileText } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";

const Level3CoreUnitsPage = () => {
  const navigate = useNavigate();
  
  const units = [
    {
      title: "Unit 301: Environmental Technology Systems",
      description: "Learn about renewable energy technologies, sustainability principles, and environmental considerations in electrical installations.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />,
      link: '/apprentices/study-materials/city-guilds/level-3/301'
    },
    {
      title: "Unit 302: Principles of Electrical Science",
      description: "Advanced electrical theory including three-phase systems, motors, transformers, and complex circuit analysis.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />,
      link: '/apprentices/study-materials/city-guilds/level-3/302'
    },
    {
      title: "Unit 303: Electrical Fault Finding and Rectification",
      description: "Systematic approaches to diagnosing and resolving electrical faults in complex installations and systems.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />,
      link: '/apprentices/study-materials/city-guilds/level-3/303'
    },
    {
      title: "Unit 304: Electrical Installation Design",
      description: "Principles and practices for designing electrical installations for various applications and environments.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />,
      link: '/apprentices/study-materials/city-guilds/level-3/304'
    },
    {
      title: "Unit 305: Electrical Systems and Components",
      description: "Advanced study of electrical distribution systems, control equipment, and specialized components.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />,
      link: '/apprentices/study-materials/city-guilds/level-3/305'
    },
    {
      title: "Unit 308: Career Awareness in Building Services Engineering",
      description: "Professional development, industry trends, and career advancement strategies in electrical engineering.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />,
      link: '/apprentices/study-materials/city-guilds/level-3/308'
    }
  ];

  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 3 Core Units"
          description="Essential study materials for the City & Guilds Level 3 Electrical Installation qualification core units."
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {units.map((unit, index) => (
            <ResourceCard
              key={index}
              title={unit.title}
              description={unit.description}
              icon={unit.icon}
              fullCardLink={unit.link}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3CoreUnitsPage;
