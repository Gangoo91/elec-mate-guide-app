
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionContent from "@/components/units/SectionContent";

const EALHealthSafetyPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal/level-2');
  };

  const sections = [
    {
      title: "1.1 Health and Safety Legislation",
      description: "Understanding key legislation and regulations that apply to electrical work environments",
      path: "/apprentices/study-materials/eal/level-2/health-safety/legislation"
    },
    {
      title: "1.2 Risk Assessment",
      description: "Identifying hazards and implementing control measures to work safely",
      path: "/apprentices/study-materials/eal/level-2/health-safety/risk-assessment"
    },
    {
      title: "1.3 Safe Working Practices",
      description: "Procedures to follow to ensure safety during electrical installation work",
      path: "/apprentices/study-materials/eal/level-2/health-safety/safe-practices"
    },
    {
      title: "1.4 Personal Protective Equipment",
      description: "Selection and correct use of PPE for electrical installation tasks",
      path: "/apprentices/study-materials/eal/level-2/health-safety/ppe"
    },
    {
      title: "1.5 Emergency Procedures",
      description: "Actions to take in the event of accidents, fire and other emergencies",
      path: "/apprentices/study-materials/eal/level-2/health-safety/emergency"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="ELEC2/01 – Health and Safety in Electrical Installation"
          description="Guided Learning Hours (GLH): 48 | Ofqual Code: J/504/3144"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          <h2 className="text-xl font-medium text-primary mb-6">Unit Overview</h2>
          <p className="text-primary/80 mb-4">
            This unit provides learners with an understanding of health and safety legislation, regulations, and standards applicable 
            to the electrical installation industry. It covers the importance of risk assessment, safe working practices, and 
            emergency procedures to ensure a safe working environment.
          </p>
          
          <h2 className="text-xl font-medium text-primary mb-4 mt-8">Learning Outcomes</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-primary/80">
            <li>Understand relevant health and safety legislation and how it applies to the electrical industry</li>
            <li>Be able to complete a risk assessment for electrical installation operations</li>
            <li>Understand safe working practices for electrical installation operations</li>
            <li>Know how to select and use appropriate personal protective equipment</li>
            <li>Know the requirements for accident and emergency procedures</li>
          </ul>
          
          <h2 className="text-xl font-medium text-primary mb-6">Unit Sections</h2>
          <div className="grid grid-cols-1 gap-4">
            {sections.map((section, index) => (
              <SectionContent
                key={index}
                title={section.title}
                path={section.path}
                description={section.description}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EALHealthSafetyPage;
