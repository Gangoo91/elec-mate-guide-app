
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const BasicElectronicsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles');
  };

  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics/${sectionId}`);
  };

  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics/assessment');
  };

  // Section data structured like Level units
  const sectionGroups = [
    {
      number: "1",
      title: "Semiconductor Fundamentals",
      sections: [
        {
          id: "1.1",
          title: "Basic Semiconductor Theory",
          description: "Understanding semiconductor materials and properties"
        },
        {
          id: "1.2",
          title: "P-N Junctions",
          description: "Formation and characteristics of P-N junctions"
        },
        {
          id: "1.3",
          title: "Semiconductor Doping",
          description: "N-type and P-type semiconductor materials"
        }
      ]
    },
    {
      number: "2",
      title: "Electronic Components",
      sections: [
        {
          id: "2.1",
          title: "Passive Components",
          description: "Resistors, capacitors, and inductors"
        },
        {
          id: "2.2",
          title: "Active Components",
          description: "Diodes, transistors, and integrated circuits"
        },
        {
          id: "2.3",
          title: "Sensors and Transducers",
          description: "Electronic sensing and measurement devices"
        }
      ]
    },
    {
      number: "3",
      title: "Electronic Circuits",
      sections: [
        {
          id: "3.1",
          title: "Amplifier Circuits",
          description: "Transistor and operational amplifier configurations"
        },
        {
          id: "3.2",
          title: "Power Supply Circuits",
          description: "Rectification, filtering, and voltage regulation"
        },
        {
          id: "3.3",
          title: "Digital Logic Circuits",
          description: "Basic gates, combinational and sequential logic"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Basic Electronics"
          description="Understanding electronic components, semiconductors, and circuits"
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

export default BasicElectronicsPage;
