
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const SystemOperationsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations');
  };

  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/system-operations/${sectionId}`);
  };

  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/system-operations/assessment');
  };

  // Section data structured like other course pages
  const sectionGroups = [
    {
      number: "1",
      title: "Introduction to System Operations",
      sections: [
        {
          id: "1.1",
          title: "System Operations Overview",
          description: "Basic concepts and principles of electrical system operations"
        },
        {
          id: "1.2",
          title: "Operational Standards",
          description: "Industry standards and regulatory requirements"
        },
        {
          id: "1.3",
          title: "System Components",
          description: "Key components of electrical operational systems"
        }
      ]
    },
    {
      number: "2",
      title: "Control Systems",
      sections: [
        {
          id: "2.1",
          title: "SCADA Systems",
          description: "Supervisory Control and Data Acquisition fundamentals"
        },
        {
          id: "2.2",
          title: "Building Management Systems",
          description: "BMS integration and operation"
        },
        {
          id: "2.3",
          title: "Programmable Logic Controllers",
          description: "PLC programming and implementation"
        }
      ]
    },
    {
      number: "3",
      title: "Operational Procedures",
      sections: [
        {
          id: "3.1",
          title: "Standard Operating Procedures",
          description: "Documentation and implementation of SOPs"
        },
        {
          id: "3.2",
          title: "Emergency Response Planning",
          description: "Protocols for system failures and emergencies"
        },
        {
          id: "3.3",
          title: "Maintenance Integration",
          description: "Integrating maintenance with system operations"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="System Operations"
          description="Understanding and managing electrical system operations"
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

export default SystemOperationsPage;
