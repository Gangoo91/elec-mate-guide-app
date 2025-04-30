
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const InstallationPlanningPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations');
  };

  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/installation-planning/${sectionId}`);
  };

  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/installation-planning/assessment');
  };

  // Section data structured like other course pages
  const sectionGroups = [
    {
      number: "1",
      title: "Project Planning Fundamentals",
      sections: [
        {
          id: "project-planning",
          title: "Project Planning Methodology",
          description: "Understanding project lifecycle and planning principles"
        },
        {
          id: "resource-allocation",
          title: "Resource Allocation",
          description: "Techniques for effective allocation of materials and personnel"
        },
        {
          id: "scheduling",
          title: "Project Scheduling",
          description: "Creating timelines and managing project milestones"
        }
      ]
    },
    {
      number: "2",
      title: "Technical Design",
      sections: [
        {
          id: "technical-design",
          title: "Technical Design Principles",
          description: "Fundamentals of electrical system design and documentation"
        },
        {
          id: "system-architecture",
          title: "System Architecture",
          description: "Developing effective electrical system architectures"
        },
        {
          id: "design-tools",
          title: "Design Tools and Software",
          description: "CAD and other tools for electrical installation design"
        }
      ]
    },
    {
      number: "3",
      title: "Implementation",
      sections: [
        {
          id: "implementation",
          title: "Implementation Procedures",
          description: "Best practices for executing electrical installation projects"
        },
        {
          id: "quality-control",
          title: "Quality Control",
          description: "Inspection and testing during the implementation phase"
        },
        {
          id: "handover-procedures",
          title: "Handover Procedures",
          description: "Final testing, documentation and client handover processes"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Installation Planning"
          description="Planning, designing and implementing electrical installation projects"
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

export default InstallationPlanningPage;
