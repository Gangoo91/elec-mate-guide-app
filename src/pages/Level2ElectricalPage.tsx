
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import UnitCard from "@/components/level2/UnitCard";

const Level2ElectricalPage = () => {
  const navigate = useNavigate();
  
  const units = [
    {
      unitNumber: "201",
      title: "Health and Safety in Building Services Engineering",
      description: "Learn about staying safe at work, spotting dangers, and following important safety rules when working with electricity.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-201"
    },
    {
      unitNumber: "202",
      title: "Principles of Electrical Science",
      description: "Get to know the basics of electricity - how it works, what voltage and current mean, and how to measure them.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-202"
    },
    {
      unitNumber: "203",
      title: "Electrical Installations Technology",
      description: "Learn about the different parts used in electrical installations, like switches and sockets, and how to put them together safely.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-203"
    },
    {
      unitNumber: "204",
      title: "Installation of Wiring Systems and Enclosures",
      description: "Get hands-on experience with installing electrical wiring, setting up electrical boxes, and connecting everything properly.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-204"
    },
    {
      unitNumber: "210",
      title: "Understand How to Communicate with Others",
      description: "Learn how to talk to customers and work well with your team to become a better professional.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-210"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 2 Electrical Installation (2365-02)"
          description="Essential study materials for your Level 2 electrical qualification, presented in an easy-to-understand way."
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

export default Level2ElectricalPage;
