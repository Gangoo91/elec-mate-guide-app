
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { unitContent } from '@/data/unitContent';

const Level3Unit303Page = () => {
  const navigate = useNavigate();
  const unitData = unitContent["303"];
  
  const handleStudySection = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/303/${sectionId}`);
  };
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3');
  };
  
  // Group sections by their main category (based on section number)
  const sectionGroups = {
    "1": {
      title: "Fault Diagnosis Techniques",
      sections: [
        { id: "1.1", title: "Systematic Troubleshooting Methods", description: "Learning structured approaches to electrical fault diagnosis" },
        { id: "1.2", title: "Using Test Equipment Effectively", description: "Learning to select and use appropriate test equipment for fault diagnosis" },
        { id: "1.3", title: "Interpreting Test Results", description: "Understanding how to analyze and interpret electrical test results" },
      ]
    },
    "2": {
      title: "Common Electrical Faults",
      sections: [
        { id: "2.1", title: "Open Circuit Conditions", description: "Understanding causes and diagnosis of open circuit faults" },
        { id: "2.2", title: "Short Circuits and Earth Faults", description: "Identifying and resolving short circuits and earth faults safely" },
        { id: "2.3", title: "High Resistance Connections", description: "Diagnosing and fixing problematic high resistance connections" },
      ]
    },
    "3": {
      title: "Fault Rectification Procedures",
      sections: [
        { id: "3.1", title: "Isolation and Lock-off Procedures", description: "Safety procedures for isolating electrical systems before working on them" },
        { id: "3.2", title: "Component Replacement Techniques", description: "Best practices for replacing faulty electrical components" },
        { id: "3.3", title: "System Restoration and Post-repair Testing", description: "Procedures for safely restoring power and verifying repairs" },
      ]
    }
  };
  
  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 303: Electrical Installations: Fault Diagnosis and Rectification"
          description="Develop skills in finding and fixing electrical faults using advanced testing equipment and procedures."
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-10">
          {Object.entries(sectionGroups).map(([groupNumber, group]) => (
            <SectionGroup 
              key={groupNumber}
              number={groupNumber}
              title={group.title}
              sections={group.sections}
              onStudy={handleStudySection}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit303Page;
