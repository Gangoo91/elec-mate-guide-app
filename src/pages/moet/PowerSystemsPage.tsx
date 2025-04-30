
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PowerSystemsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles');
  };

  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/${sectionId}`);
  };

  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/assessment');
  };

  // Section data structured like Level units
  const sectionGroups = [
    {
      number: "1",
      title: "Power Generation Methods",
      sections: [
        {
          id: "1.1",
          title: "Thermal Power Generation",
          description: "Understanding thermal power plants and their operation"
        },
        {
          id: "1.2",
          title: "Hydroelectric Power",
          description: "Principles and applications of hydroelectric generation"
        },
        {
          id: "1.3",
          title: "Nuclear Power",
          description: "Nuclear fission processes and power generation"
        },
        {
          id: "1.4",
          title: "Renewable Energy Sources",
          description: "Solar, wind, and other renewable generation methods"
        }
      ]
    },
    {
      number: "2",
      title: "Power Transmission",
      sections: [
        {
          id: "2.1",
          title: "Transmission Systems",
          description: "High-voltage transmission of electrical power"
        },
        {
          id: "2.2",
          title: "Transformers and Substations",
          description: "Voltage transformation and power distribution"
        },
        {
          id: "2.3",
          title: "Grid Infrastructure",
          description: "Power grid design, operation, and management"
        }
      ]
    },
    {
      number: "3",
      title: "Power Distribution",
      sections: [
        {
          id: "3.1",
          title: "Distribution Networks",
          description: "Local power distribution systems and components"
        },
        {
          id: "3.2",
          title: "Smart Grid Technology",
          description: "Modern grid monitoring and control systems"
        },
        {
          id: "3.3",
          title: "Load Balancing",
          description: "Techniques for optimizing power distribution"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Power Systems"
          description="Power generation, distribution, and transmission fundamentals"
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

export default PowerSystemsPage;
