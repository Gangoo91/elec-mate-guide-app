
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import SectionGroup from "@/components/units/level3/SectionGroup";

const Level3Unit305Page = () => {
  const navigate = useNavigate();
  
  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  // Study function
  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/305/${sectionId}`);
  };

  // Take quiz function
  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/305/assessment');
  };

  // Section data
  const sectionGroups = [
    {
      number: "1",
      title: "Design Principles",
      sections: [
        {
          id: "1.1",
          title: "Electrical Installation Design Principles",
          description: "Understanding how to plan circuits and choose supply arrangements for various building types"
        }
      ]
    },
    {
      number: "2",
      title: "Selection of Electrical Equipment",
      sections: [
        {
          id: "2.1",
          title: "Selection of Electrical Equipment",
          description: "Guidelines for selecting appropriate protective devices, cables, and accessories"
        }
      ]
    },
    {
      number: "3",
      title: "Cable Sizing and Protection",
      sections: [
        {
          id: "3.1",
          title: "Cable Sizing and Protection",
          description: "Methods for calculating current-carrying capacity, voltage drop, and protection"
        }
      ]
    },
    {
      number: "4",
      title: "Discrimination and Coordination",
      sections: [
        {
          id: "4.1",
          title: "Discrimination and Coordination",
          description: "Principles of protective device coordination and nuisance tripping prevention"
        }
      ]
    },
    {
      number: "5",
      title: "Earthing and Bonding",
      sections: [
        {
          id: "5.1",
          title: "Earthing and Bonding",
          description: "Requirements for main protective bonding and supplementary bonding"
        }
      ]
    },
    {
      number: "6",
      title: "Health and Safety and Building Regulations",
      sections: [
        {
          id: "6.1",
          title: "Health and Safety and Building Regulations",
          description: "Regulatory requirements for electrical installations"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 305: Electrical Systems Design"
          description="Design electrical installations for buildings and structures, including load calculations and circuit planning."
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
              Take Unit 305 Assessment
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit305Page;
