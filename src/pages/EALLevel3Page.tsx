
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
          title="Level 3 EAL Courses"
          description="Advanced electrical installation techniques and theoretical concepts"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 gap-6 mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Available Modules</h2>
              
              <SectionContent 
                title="Electrical Systems Design"
                path="/apprentices/study-materials/eal/level-3/electrical-design"
                description="Advanced design principles for electrical installations and systems"
              />
              
              <SectionContent 
                title="Electrical Scientific Principles and Technologies"
                path="/apprentices/study-materials/eal/level-3/principles-technologies"
                description="Complex electrical theory including three-phase systems and motor control"
              />
              
              <SectionContent 
                title="Fault Diagnosis and Rectification"
                path="/apprentices/study-materials/eal/level-3/fault-diagnosis"
                description="Systematic approaches to finding and fixing electrical faults"
              />
              
              <SectionContent 
                title="Inspection, Testing and Commissioning"
                path="/apprentices/study-materials/eal/level-3/inspection-testing"
                description="Procedures for verifying electrical installations meet required standards"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default EALLevel3Page;
