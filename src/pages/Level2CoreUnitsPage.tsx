
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import UnitCard from "@/components/level2/UnitCard";

const Level2CoreUnitsPage = () => {
  const navigate = useNavigate();
  
  const units = [
    {
      unitNumber: "201",
      title: "Health and Safety in Building Services Engineering",
      description: "Learn essential safety practices for electrical work including:\n• Understanding workplace hazards and risks\n• Using personal protective equipment (PPE)\n• Following safety regulations and procedures\n• Emergency response and first aid basics\n• Safe handling of electrical equipment",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-201"
    },
    {
      unitNumber: "202",
      title: "Principles of Electrical Science",
      description: "Master the fundamentals of electricity through:\n• Understanding voltage, current, and resistance\n• Learning Ohm's Law and power calculations\n• Exploring AC and DC circuits\n• Using multimeters and test equipment\n• Practical applications of electrical theory",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-202"
    },
    {
      unitNumber: "203",
      title: "Electrical Installations Technology",
      description: "Discover installation techniques including:\n• Types of wiring systems and circuits\n• Installing switches, sockets, and lighting\n• Understanding circuit protection devices\n• Cable selection and installation methods\n• Testing and certification procedures",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-203"
    },
    {
      unitNumber: "204",
      title: "Installation of Wiring Systems and Enclosures",
      description: "Learn practical wiring skills through:\n• Cable installation techniques\n• Working with different conduit types\n• Installing trunking and cable trays\n• Proper cable termination methods\n• Following building regulations",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-204"
    },
    {
      unitNumber: "210",
      title: "Understand How to Communicate with Others",
      description: "Develop essential communication skills including:\n• Professional customer service techniques\n• Effective team collaboration\n• Writing clear technical reports\n• Managing client expectations\n• Handling challenging situations",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-210"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {units.map((unit) => (
            <UnitCard key={unit.unitNumber} {...unit} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2CoreUnitsPage;
