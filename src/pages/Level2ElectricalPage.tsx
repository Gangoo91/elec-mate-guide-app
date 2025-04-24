
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Book, BookOpen, FileText } from "lucide-react";
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

  const additionalSections = [
    {
      title: "Simplified Learning",
      description: "Break down of complex topics into easy-to-understand modules with practical examples and step-by-step guides.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Mock Exams",
      description: "Practice assessments to help you prepare for your Level 2 qualification examinations.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 2 Electrical Installation (2365-02)"
          description="Essential study materials for your Level 2 electrical qualification, presented in an easy-to-understand way."
        />
        
        <div className="space-y-8 mt-8">
          {/* Core Units Section */}
          <div>
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Core Units</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {units.map((unit) => (
                <UnitCard key={unit.unitNumber} {...unit} />
              ))}
            </div>
          </div>

          {/* Additional Sections */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalSections.map((section, index) => (
                <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      {section.icon}
                      <div>
                        <h3 className="text-[#FFC900] font-medium text-lg mb-2">{section.title}</h3>
                        <p className="text-[#FFC900]/70 text-sm">{section.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2ElectricalPage;
