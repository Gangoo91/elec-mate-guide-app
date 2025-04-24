
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import UnitCard from "@/components/level2/UnitCard";

const Level2CourseContent = () => {
  const navigate = useNavigate();
  
  const units = [
    {
      unitNumber: "201",
      title: "Health and Safety in Building Services Engineering",
      description: "Learn how to stay safe at work, spot dangers, use safety equipment, and follow the right safety rules when working with electrical equipment.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-201"
    },
    {
      unitNumber: "202",
      title: "Principles of Electrical Science",
      description: "Get to know the basics of electricity - how it works, what voltage and current mean, and how to measure them. Think of it as learning the ABC's of electrical work!",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-202"
    },
    {
      unitNumber: "203",
      title: "Electrical Installations Technology",
      description: "Learn about the different parts used in electrical installations, like switches and sockets. You'll discover how to put them together safely in homes and buildings.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-203"
    },
    {
      unitNumber: "204",
      title: "Installation of Wiring Systems and Enclosures",
      description: "Get hands-on experience with installing electrical wiring. You'll learn how to run cables, set up electrical boxes, and connect everything properly.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-204"
    },
    {
      unitNumber: "210",
      title: "Understand How to Communicate with Others",
      description: "Learn how to talk to customers and work well with your team. This helps you explain your work clearly and become a better professional.",
      path: "/apprentices/study-materials/city-guilds/level-2/course-content/unit-210"
    }
  ];

  // Handle custom back navigation
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 2 Course Content"
          description="Your guide to becoming a qualified electrician - broken down into simple, easy-to-follow units"
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

export default Level2CourseContent;
