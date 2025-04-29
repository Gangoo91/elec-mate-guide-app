
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

// Section group component (e.g., "1. Three-Phase Systems")
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

const Level3Unit302Page = () => {
  const navigate = useNavigate();
  
  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  // Study function
  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/302/${sectionId}`);
  };

  // Take quiz function
  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/302/assessment');
  };

  // Section data
  const sectionGroups = [
    {
      number: "1",
      title: "Three-Phase Systems",
      sections: [
        {
          id: "1.1",
          title: "Three-Phase Generation and Distribution",
          description: "Understanding the principles of three-phase power generation and distribution systems"
        },
        {
          id: "1.2",
          title: "Star and Delta Connections",
          description: "Learning the different connection methods for three-phase systems and their applications"
        },
        {
          id: "1.3",
          title: "Phase Relationships and Power Calculations",
          description: "Understanding phase relationships and performing power calculations in three-phase systems"
        }
      ]
    },
    {
      number: "2",
      title: "Motors and Drives",
      sections: [
        {
          id: "2.1",
          title: "Motor Types and Characteristics",
          description: "Exploring different types of electric motors and their operational characteristics"
        },
        {
          id: "2.2",
          title: "Starting Methods and Speed Control",
          description: "Understanding various motor starting techniques and speed control methods"
        },
        {
          id: "2.3",
          title: "Motor Protection Requirements",
          description: "Understanding protection devices and strategies for electrical motors"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 302: Principles of Electrical Science"
          description="Advanced electrical theory, including three-phase systems, motors, and complex circuit analysis."
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
              Take Unit 302 Assessment
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit302Page;
