
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import SectionContent from "@/components/units/SectionContent";

const EALLevel3Page = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="EAL Level 3 Advanced Diploma in Electrical Installation"
          description="Advanced units and resources for the EAL Level 3 qualification"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 gap-6 mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Core Units</h2>
              
              <SectionContent 
                title="ELEC3/01 – Advanced Electrical Science and Principles"
                path="/apprentices/study-materials/eal/level-3/advanced-science"
                description="Complex electrical theory and calculations for advanced installations"
              />
              
              <SectionContent 
                title="ELEC3/02 – Installation Design and Planning"
                path="/apprentices/study-materials/eal/level-3/design-planning"
                description="Designing and planning complex electrical installations"
              />
              
              <SectionContent 
                title="ELEC3/03 – Inspection, Testing and Commissioning"
                path="/apprentices/study-materials/eal/level-3/inspection-testing"
                description="Advanced testing techniques for electrical installations"
              />
              
              <SectionContent 
                title="ELEC3/04 – Fault Diagnosis and Rectification"
                path="/apprentices/study-materials/eal/level-3/fault-diagnosis"
                description="Locating and repairing faults in complex electrical systems"
              />
              
              <SectionContent 
                title="ELEC3/05 – Electrical Systems and Building Services"
                path="/apprentices/study-materials/eal/level-3/building-services"
                description="Integration of electrical systems with building services"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default EALLevel3Page;
