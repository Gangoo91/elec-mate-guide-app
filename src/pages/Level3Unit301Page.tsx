
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen } from "lucide-react";

// Section interface for type safety and consistency
interface SectionProps {
  id: string;
  title: string;
  description: string;
  onStudy: (id: string) => void;
}

// Component for each section item (1.1, 1.2, etc.)
const SectionItem: React.FC<SectionProps> = ({ id, title, description, onStudy }) => {
  return (
    <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-medium text-[#FFC900]">
            <span className="mr-2">{id}</span>
            {title}
          </h3>
          <p className="text-[#FFC900]/70 mt-2">
            {description}
          </p>
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
          onClick={() => onStudy(id)}
        >
          <BookOpen className="h-4 w-4" />
          Study
        </Button>
      </div>
    </div>
  );
};

// Section group component (e.g., "1. Introduction to Environmental Technology")
interface SectionGroupProps {
  number: string;
  title: string;
  sections: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  onStudy: (id: string) => void;
}

const SectionGroup: React.FC<SectionGroupProps> = ({ number, title, sections, onStudy }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">{number}. {title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {sections.map((section) => (
          <SectionItem
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            onStudy={onStudy}
          />
        ))}
      </div>
    </div>
  );
};

const Level3Unit301Page = () => {
  const navigate = useNavigate();
  
  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  // Study function
  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/301/${sectionId}`);
  };

  // Take quiz function - FIXED: now this correctly navigates to the assessment page
  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/301/assessment');
  };

  // Section data
  const sectionGroups = [
    {
      number: "1",
      title: "Introduction to Environmental Technology",
      sections: [
        {
          id: "1.1",
          title: "Renewable Energy Systems",
          description: "Understanding various renewable energy technologies and their applications in electrical installations"
        },
        {
          id: "1.2",
          title: "Energy Efficiency Measures",
          description: "Understanding and implementing energy efficiency measures in electrical installations"
        },
        {
          id: "1.3",
          title: "Sustainability in Electrical Installations",
          description: "Implementing sustainable practices in the design and installation of electrical systems"
        }
      ]
    },
    {
      number: "2",
      title: "Solar Photovoltaic Installation",
      sections: [
        {
          id: "2.1",
          title: "System Components Overview",
          description: "Understanding the key components of solar photovoltaic systems"
        },
        {
          id: "2.2",
          title: "Installation Requirements",
          description: "Guidelines and requirements for installing solar PV systems"
        },
        {
          id: "2.3",
          title: "Maintenance and Troubleshooting",
          description: "Common issues and maintenance procedures for solar PV systems"
        }
      ]
    },
    {
      number: "3",
      title: "Heat Pump Technologies",
      sections: [
        {
          id: "3.1",
          title: "Air Source Heat Pumps (ASHP)",
          description: "Understanding the principles, components, and applications of air source heat pump systems"
        },
        {
          id: "3.2",
          title: "Ground Source Heat Pumps (GSHP)",
          description: "Understanding the principles, components, and applications of ground source heat pump systems"
        },
        {
          id: "3.3",
          title: "Electrical Requirements for Heat Pumps",
          description: "Understanding the electrical installation and integration requirements for heat pump systems"
        }
      ]
    },
    {
      number: "4",
      title: "Wind Energy Systems",
      sections: [
        {
          id: "4.1",
          title: "Small-Scale Wind Turbine Technologies",
          description: "Understanding the principles, components, and applications of small-scale wind turbine systems"
        },
        {
          id: "4.2",
          title: "Electrical Integration of Wind Systems",
          description: "Understanding the electrical requirements and grid integration of small wind turbine systems"
        }
      ]
    },
    {
      number: "5",
      title: "Energy Storage Systems",
      sections: [
        {
          id: "5.1",
          title: "Battery Storage Technologies",
          description: "Understanding different battery technologies and their applications in electrical energy storage"
        },
        {
          id: "5.2",
          title: "Integration with Renewable Sources",
          description: "Understanding how energy storage systems integrate with renewable energy sources"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 301: Environmental Technology Systems"
          description="Learn about renewable energy technologies, sustainable electrical installations, and environmental considerations."
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
              Take Unit 301 Assessment
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit301Page;
