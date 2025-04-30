
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const CircuitTheoryPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles');
  };

  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/circuit-theory/${sectionId}`);
  };

  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/circuit-theory/assessment');
  };

  // Section data structured like Level units
  const sectionGroups = [
    {
      number: "1",
      title: "Basic Circuit Concepts",
      sections: [
        {
          id: "1.1",
          title: "Electrical Circuit Fundamentals",
          description: "Understanding components of electrical circuits and their functions"
        },
        {
          id: "1.2",
          title: "Types of Circuits",
          description: "Series, parallel, and series-parallel circuit configurations"
        }
      ]
    },
    {
      number: "2",
      title: "Circuit Components and Their Functions",
      sections: [
        {
          id: "2.1",
          title: "Passive Components",
          description: "Resistors, capacitors, and inductors in electrical circuits"
        },
        {
          id: "2.2",
          title: "Active Components",
          description: "Diodes, transistors, and their applications in circuits"
        }
      ]
    },
    {
      number: "3",
      title: "Circuit Laws and Analysis",
      sections: [
        {
          id: "3.1",
          title: "Ohm's Law",
          description: "Relationship between voltage, current, and resistance"
        },
        {
          id: "3.2",
          title: "Kirchhoff's Laws",
          description: "Understanding current and voltage laws in complex circuits"
        },
        {
          id: "3.3",
          title: "Power in Circuits",
          description: "Calculating and measuring electrical power"
        }
      ]
    },
    {
      number: "4",
      title: "Circuit Analysis Techniques",
      sections: [
        {
          id: "4.1",
          title: "Series Circuits Analysis",
          description: "Methods for analyzing series circuit configurations"
        },
        {
          id: "4.2",
          title: "Parallel Circuits Analysis",
          description: "Techniques for analyzing parallel circuit configurations"
        },
        {
          id: "4.3",
          title: "Troubleshooting",
          description: "Identifying and resolving common circuit issues"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Circuit Theory"
          description="Understanding electrical circuits, components, and their interactions"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          {/* Map through section groups */}
          {sectionGroups.map((group) => (
            <SectionGroup
              key={group.number}
              number={group.number}
              title={group.title}
              sections={group.sections}
              onStudy={handleStudy}
            />
          ))}
          
          {/* Unit Quiz Button */}
          <div className="mt-12">
            <Button 
              className="w-full py-6 bg-[#FFC900] hover:bg-[#e5b700] text-[#22251e] font-semibold text-lg"
              onClick={handleTakeQuiz}
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Test Your Knowledge
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CircuitTheoryPage;
