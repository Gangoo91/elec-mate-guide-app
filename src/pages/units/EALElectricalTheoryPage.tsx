
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionContent from "@/components/units/SectionContent";

const EALElectricalTheoryPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal/level-2');
  };

  const sections = [
    {
      title: "2.1 Electrical Supply Systems",
      description: "Structure and operation of electrical supply and distribution systems",
      path: "/apprentices/study-materials/eal/level-2/electrical-theory/supply-systems"
    },
    {
      title: "2.2 Circuit Protection Devices",
      description: "Types, operation and selection of overcurrent and fault protection devices",
      path: "/apprentices/study-materials/eal/level-2/electrical-theory/protection"
    },
    {
      title: "2.3 Earthing and Bonding",
      description: "Principles and requirements for earthing and protective bonding",
      path: "/apprentices/study-materials/eal/level-2/electrical-theory/earthing"
    },
    {
      title: "2.4 Wiring Systems and Enclosures",
      description: "Types of wiring systems, cables, and enclosures for different environments",
      path: "/apprentices/study-materials/eal/level-2/electrical-theory/wiring-systems"
    },
    {
      title: "2.5 Electrical Equipment and Components",
      description: "Selection and application of electrical equipment and accessories",
      path: "/apprentices/study-materials/eal/level-2/electrical-theory/equipment"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="ELEC2/04 – Electrical Installation Theory and Technology"
          description="Guided Learning Hours (GLH): 146 | Ofqual Code: Y/504/3147"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          <h2 className="text-xl font-medium text-primary mb-6">Unit Overview</h2>
          <p className="text-primary/80 mb-4">
            This unit covers the principles and technologies that underpin electrical installation work. It includes electrical 
            supply systems, circuit protection, earthing arrangements, and selection of appropriate equipment for different 
            installation contexts.
          </p>
          
          <h2 className="text-xl font-medium text-primary mb-4 mt-8">Learning Outcomes</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-primary/80">
            <li>Understand the structure and operation of electrical supply systems</li>
            <li>Know the principles of overcurrent and fault protection in electrical circuits</li>
            <li>Understand requirements for earthing and bonding in electrical installations</li>
            <li>Know different types of wiring systems and their applications</li>
            <li>Understand the selection and use of electrical equipment and accessories</li>
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

export default EALElectricalTheoryPage;
