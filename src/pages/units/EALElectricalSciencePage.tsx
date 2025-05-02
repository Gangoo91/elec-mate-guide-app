
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionContent from "@/components/units/SectionContent";

const EALElectricalSciencePage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal/level-2');
  };

  const sections = [
    {
      title: "4.1 Electrical Units and Quantities",
      description: "Understanding fundamental electrical units and their relationships",
      path: "/apprentices/study-materials/eal/level-2/electrical-science/units"
    },
    {
      title: "4.2 Ohm's Law and Power Calculations",
      description: "Applying Ohm's Law and calculating electrical power in circuits",
      path: "/apprentices/study-materials/eal/level-2/electrical-science/ohms-law"
    },
    {
      title: "4.3 Resistors in Series and Parallel",
      description: "Calculating equivalent resistance in different circuit configurations",
      path: "/apprentices/study-materials/eal/level-2/electrical-science/resistors"
    },
    {
      title: "4.4 Magnetism and Electromagnetism",
      description: "Principles of magnetism and their application in electrical devices",
      path: "/apprentices/study-materials/eal/level-2/electrical-science/magnetism"
    },
    {
      title: "4.5 AC Theory and Transformers",
      description: "Understanding alternating current and transformer operation",
      path: "/apprentices/study-materials/eal/level-2/electrical-science/ac-theory"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="ELEC2/08 – Electrical Science and Principles"
          description="Guided Learning Hours (GLH): 93 | Ofqual Code: D/504/3148"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          <h2 className="text-xl font-medium text-primary mb-6">Unit Overview</h2>
          <p className="text-primary/80 mb-4">
            This unit introduces learners to the scientific principles and theories that underpin electrical installation work. 
            It covers basic electrical concepts, circuit theory, electromagnetic principles, and AC theory essential for understanding 
            electrical systems and equipment.
          </p>
          
          <h2 className="text-xl font-medium text-primary mb-4 mt-8">Learning Outcomes</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-primary/80">
            <li>Understand electrical units and quantities and their application</li>
            <li>Apply Ohm's Law to solve electrical circuit problems</li>
            <li>Understand the principles of series and parallel circuits</li>
            <li>Know the principles of magnetism and electromagnetism</li>
            <li>Understand alternating current theory and applications</li>
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

export default EALElectricalSciencePage;
