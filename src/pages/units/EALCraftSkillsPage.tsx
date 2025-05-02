
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionContent from "@/components/units/SectionContent";

const EALCraftSkillsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal/level-2');
  };

  const sections = [
    {
      title: "5.1 Cable Installation Techniques",
      description: "Proper methods for installing and fixing different types of cables",
      path: "/apprentices/study-materials/eal/level-2/craft-skills/cable-installation"
    },
    {
      title: "5.2 Conduit and Trunking Systems",
      description: "Installation techniques for metallic and non-metallic conduit and trunking",
      path: "/apprentices/study-materials/eal/level-2/craft-skills/conduit-trunking"
    },
    {
      title: "5.3 Electrical Equipment Installation",
      description: "Mounting and connecting various electrical equipment and accessories",
      path: "/apprentices/study-materials/eal/level-2/craft-skills/equipment-installation"
    },
    {
      title: "5.4 Circuit Testing and Commissioning",
      description: "Testing installed circuits prior to energizing and commissioning procedures",
      path: "/apprentices/study-materials/eal/level-2/craft-skills/testing"
    },
    {
      title: "5.5 Fault Finding Techniques",
      description: "Basic methods for identifying and locating faults in electrical installations",
      path: "/apprentices/study-materials/eal/level-2/craft-skills/fault-finding"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="ELEC2/05B – Electrical Installation Craft Skills"
          description="Guided Learning Hours (GLH): 140 | Ofqual Code: L/504/3145"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          <h2 className="text-xl font-medium text-primary mb-6">Unit Overview</h2>
          <p className="text-primary/80 mb-4">
            This unit focuses on the practical skills required for electrical installation work. It covers techniques for installing 
            various wiring systems, mounting electrical equipment, and testing completed installations to ensure they are safe and 
            functional.
          </p>
          
          <h2 className="text-xl font-medium text-primary mb-4 mt-8">Learning Outcomes</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-primary/80">
            <li>Be able to install and terminate cables using appropriate methods</li>
            <li>Be able to install conduit and trunking systems to required standards</li>
            <li>Be able to mount and connect electrical equipment and accessories</li>
            <li>Be able to test electrical installations before energizing</li>
            <li>Understand basic fault-finding techniques for electrical installations</li>
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

export default EALCraftSkillsPage;
