
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import UnitCard from "@/components/level2/UnitCard";

const Level2CourseContent = () => {
  const units = [
    {
      unitNumber: "202",
      title: "Principles of Electrical Science",
      description: "Learn about electrical principles including current, voltage, resistance, power, and energy in DC circuits. Study electrical safety and circuit protection.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-202"
    },
    {
      unitNumber: "204",
      title: "Installation of Wiring Systems and Enclosures",
      description: "Master the installation of wiring systems, including containment systems, cables, and terminations following industry regulations.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-204"
    },
    {
      unitNumber: "206",
      title: "Health & Safety in Building Services Engineering",
      description: "Understanding workplace safety, risk assessment, PPE requirements, and safe working practices in electrical installations.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-206"
    },
    {
      unitNumber: "207",
      title: "Electrical Installation Craft",
      description: "Practical skills development in electrical installation work, including tool usage, measuring, and basic installation techniques.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-207"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 2 Course Content"
          description="Detailed breakdown of Level 2 electrical installation units and their learning outcomes."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {units.map((unit) => (
            <UnitCard key={unit.unitNumber} {...unit} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2CourseContent;
