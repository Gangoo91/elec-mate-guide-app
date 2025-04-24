
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import UnitCard from "@/components/level2/UnitCard";

const Level2CourseContent = () => {
  const units = [
    {
      unitNumber: "201",
      title: "Health and Safety in Building Services Engineering",
      description: "Understanding workplace safety, risk assessment, PPE requirements, and safe working practices in electrical installations.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-201"
    },
    {
      unitNumber: "202",
      title: "Principles of Electrical Science",
      description: "Learn about electrical principles including current, voltage, resistance, power, and energy in DC circuits.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-202"
    },
    {
      unitNumber: "203",
      title: "Electrical Installations Technology",
      description: "Study fundamental electrical installation principles, components, and systems used in domestic and commercial settings.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-203"
    },
    {
      unitNumber: "204",
      title: "Installation of Wiring Systems and Enclosures",
      description: "Master the installation of wiring systems, including containment systems, cables, and terminations.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-204"
    },
    {
      unitNumber: "210",
      title: "Understand How to Communicate with Others within Building Services Engineering",
      description: "Develop effective communication skills and learn to work professionally with colleagues and customers.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-210"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 2 Course Content"
          description="City & Guilds 2365-02 Diploma in Electrical Installation"
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
