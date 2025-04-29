
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { unit305 } from "@/data/units/unit305";

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
          title: "Client Requirements Analysis",
          description: "Understanding client needs and translating them into design specifications"
        },
        {
          id: "1.2",
          title: "Regulatory Constraints",
          description: "Applying regulations and standards to electrical installation designs"
        },
        {
          id: "1.3",
          title: "Safety and Energy Efficiency",
          description: "Incorporating safety features and energy efficiency in design"
        }
      ]
    },
    {
      number: "2",
      title: "Load Calculations",
      sections: [
        {
          id: "2.1",
          title: "Diversity Factors and Maximum Demand",
          description: "Calculating electrical loads with appropriate diversity factors"
        },
        {
          id: "2.2",
          title: "Cable Sizing Calculations",
          description: "Determining appropriate cable sizes based on load and installation conditions"
        },
        {
          id: "2.3",
          title: "Voltage Drop Considerations",
          description: "Calculating and mitigating voltage drop in electrical installations"
        }
      ]
    },
    {
      number: "3",
      title: "Circuit Planning",
      sections: [
        {
          id: "3.1",
          title: "Consumer Unit Arrangements",
          description: "Designing effective distribution board and consumer unit layouts"
        },
        {
          id: "3.2",
          title: "Circuit Segregation",
          description: "Separating circuits for safety, reliability and electromagnetic compatibility"
        },
        {
          id: "3.3",
          title: "Protection Device Selection",
          description: "Selecting appropriate circuit breakers, RCDs, and other protection devices"
        }
      ]
    },
    {
      number: "4",
      title: "Discrimination and Coordination",
      sections: [
        {
          id: "4.1",
          title: "Protection Device Coordination",
          description: "Ensuring proper discrimination between series-connected protective devices"
        },
        {
          id: "4.2",
          title: "Fault Current Analysis",
          description: "Calculating fault currents and ensuring protection operates correctly"
        }
      ]
    },
    {
      number: "5",
      title: "Earthing and Bonding Design",
      sections: [
        {
          id: "5.1",
          title: "Earthing Systems",
          description: "Designing appropriate earthing arrangements (TN-S, TN-C-S, TT systems)"
        },
        {
          id: "5.2",
          title: "Main and Supplementary Bonding",
          description: "Calculating conductor sizes for main and supplementary equipotential bonding"
        }
      ]
    },
    {
      number: "6",
      title: "Health, Safety and Building Regulations",
      sections: [
        {
          id: "6.1",
          title: "BS 7671 Requirements",
          description: "Applying wiring regulations requirements to electrical installation designs"
        },
        {
          id: "6.2",
          title: "Building Regulations",
          description: "Compliance with building regulations for electrical installations"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={unit305.title} 
          description={unit305.description}
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
