
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
        },
        {
          id: "1.2",
          title: "Supply Arrangements",
          description: "Types of supply systems including TN-S, TN-C-S, and TT systems"
        },
        {
          id: "1.3",
          title: "Circuit Design",
          description: "Designing lighting, socket outlets, and special circuits"
        }
      ]
    },
    {
      number: "2",
      title: "Selection of Electrical Equipment",
      sections: [
        {
          id: "2.1",
          title: "Protective Devices",
          description: "Selection of MCBs, RCDs, RCBOs"
        },
        {
          id: "2.2",
          title: "Cables and Cable Types",
          description: "Selection of T&E, SWA, MICC and other cable types"
        },
        {
          id: "2.3",
          title: "Accessories and Distribution Boards",
          description: "Selection of switches, sockets, junction boxes, and distribution boards"
        },
        {
          id: "2.4",
          title: "Ingress Protection Ratings",
          description: "Understanding and applying IP ratings in different environments"
        }
      ]
    },
    {
      number: "3",
      title: "Cable Sizing and Protection",
      sections: [
        {
          id: "3.1",
          title: "Current-Carrying Capacity",
          description: "Calculating current-carrying capacity (Iz) for cables"
        },
        {
          id: "3.2",
          title: "Voltage Drop Calculations",
          description: "Calculating voltage drop and ensuring compliance with regulations"
        },
        {
          id: "3.3",
          title: "Correction Factors",
          description: "Applying correction factors for ambient temperature, grouping, and insulation"
        },
        {
          id: "3.4",
          title: "Adiabatic Equation",
          description: "Using the adiabatic equation for earth fault protection"
        }
      ]
    },
    {
      number: "4",
      title: "Discrimination and Coordination",
      sections: [
        {
          id: "4.1",
          title: "Principles of Discrimination",
          description: "Understanding how protective devices should coordinate during faults"
        },
        {
          id: "4.2",
          title: "Nuisance Tripping Prevention",
          description: "Strategies for preventing nuisance tripping in electrical installations"
        }
      ]
    },
    {
      number: "5",
      title: "Earthing and Bonding",
      sections: [
        {
          id: "5.1",
          title: "Main Protective Bonding",
          description: "Requirements and design for main protective bonding"
        },
        {
          id: "5.2",
          title: "Supplementary Bonding",
          description: "When and how to implement supplementary bonding"
        },
        {
          id: "5.3",
          title: "Earthing Conductors Sizing",
          description: "Calculations and requirements for sizing earthing conductors"
        }
      ]
    },
    {
      number: "6",
      title: "Health and Safety and Building Regulations",
      sections: [
        {
          id: "6.1",
          title: "BS 7671 Wiring Regulations",
          description: "Compliance with the current edition of wiring regulations"
        },
        {
          id: "6.2",
          title: "Building Regulations",
          description: "Meeting requirements of Part P, Part L and other regulations"
        },
        {
          id: "6.3",
          title: "Energy Efficiency and Fire Safety",
          description: "Energy efficiency standards and fire safety regulations"
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
