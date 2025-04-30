
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { unit204 } from '@/data/units/unit204';

const Level2Unit204Page = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
  };

  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-2/core-units/204/${sectionId}`);
  };

  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units/204/assessment');
  };

  // Section data structured like Level 3 units
  const sectionGroups = [
    {
      number: "1",
      title: "Conduit Installation",
      sections: [
        {
          id: "1.1",
          title: "Working with Metal Conduit",
          description: "Installation techniques for metal conduit systems"
        },
        {
          id: "1.2",
          title: "PVC Conduit Installation",
          description: "Methods for installing and working with PVC conduit"
        },
        {
          id: "1.3",
          title: "Flexible Conduit Applications",
          description: "Using flexible conduit for specific installations"
        }
      ]
    },
    {
      number: "2",
      title: "Cable Management Systems",
      sections: [
        {
          id: "2.1",
          title: "Cable Tray Installation",
          description: "Techniques for installing and supporting cable tray systems"
        },
        {
          id: "2.2",
          title: "Trunking Systems",
          description: "Installation methods for trunking systems including corners and joints"
        },
        {
          id: "2.3",
          title: "Ladder Rack Systems",
          description: "Overhead cable support systems for industrial applications"
        }
      ]
    },
    {
      number: "3",
      title: "Cable Installation",
      sections: [
        {
          id: "3.1",
          title: "Cable Types and Selection",
          description: "Understanding different cable types and their applications"
        },
        {
          id: "3.2",
          title: "Cable Installation Techniques",
          description: "Proper methods for pulling and securing cables"
        },
        {
          id: "3.3",
          title: "Cable Support and Protection",
          description: "Supporting and protecting cables according to regulations"
        }
      ]
    },
    {
      number: "4",
      title: "Termination and Testing",
      sections: [
        {
          id: "4.1",
          title: "Cable Termination Methods",
          description: "Techniques for properly terminating various cable types"
        },
        {
          id: "4.2",
          title: "Testing Installed Systems",
          description: "Testing procedures to verify proper installation"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={unit204.title} 
          description={unit204.description} 
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
              Take Unit 204 Assessment
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2Unit204Page;
