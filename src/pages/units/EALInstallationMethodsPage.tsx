
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionContent from "@/components/units/SectionContent";

const EALInstallationMethodsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal/level-2');
  };

  const sections = [
    {
      title: "3.1 Electrical Installation Regulations",
      description: "Key requirements of BS 7671 and building regulations for electrical installations",
      path: "/apprentices/study-materials/eal/level-2/installation-methods/regulations"
    },
    {
      title: "3.2 Installation Planning and Preparation",
      description: "Planning installation work, interpreting diagrams, and preparing worksite",
      path: "/apprentices/study-materials/eal/level-2/installation-methods/planning"
    },
    {
      title: "3.3 Cable Selection and Sizing",
      description: "Methods for selecting appropriate cables based on installation requirements",
      path: "/apprentices/study-materials/eal/level-2/installation-methods/cable-selection"
    },
    {
      title: "3.4 Circuit Design Principles",
      description: "Principles for designing lighting, power, and special circuits",
      path: "/apprentices/study-materials/eal/level-2/installation-methods/circuit-design"
    },
    {
      title: "3.5 Installation Certification",
      description: "Documentation requirements and certification procedures for installations",
      path: "/apprentices/study-materials/eal/level-2/installation-methods/certification"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="ELEC2/05A – Electrical Installation Methods, Procedures and Requirements"
          description="Guided Learning Hours (GLH): 59 | Ofqual Code: R/504/3146"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          <h2 className="text-xl font-medium text-primary mb-6">Unit Overview</h2>
          <p className="text-primary/80 mb-4">
            This unit covers the procedures, methods, and regulatory requirements for electrical installations. It includes the 
            principles of planning installations, selecting appropriate materials and equipment, and ensuring compliance with 
            the relevant standards and regulations.
          </p>
          
          <h2 className="text-xl font-medium text-primary mb-4 mt-8">Learning Outcomes</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-primary/80">
            <li>Understand the regulatory requirements for electrical installations</li>
            <li>Be able to plan and prepare for installation work</li>
            <li>Know how to select appropriate cables for different applications</li>
            <li>Understand principles of circuit design for different purposes</li>
            <li>Know the requirements for certification and documentation of installations</li>
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

export default EALInstallationMethodsPage;
