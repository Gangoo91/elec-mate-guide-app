
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import SectionContent from "@/components/units/SectionContent";

const EALInspectionTestingPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="EAL Inspection & Testing Courses"
          description="Specialized electrical inspection, testing and verification qualifications"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 gap-6 mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Course Modules</h2>
              
              <SectionContent 
                title="Initial Verification"
                path="/apprentices/study-materials/eal/inspection-testing/initial-verification"
                description="Testing and certification of new electrical installations"
              />
              
              <SectionContent 
                title="Periodic Inspection"
                path="/apprentices/study-materials/eal/inspection-testing/periodic-inspection"
                description="Testing and reporting on existing electrical installations"
              />
              
              <SectionContent 
                title="Test Equipment Usage"
                path="/apprentices/study-materials/eal/inspection-testing/equipment"
                description="Proper use of electrical test instruments and interpretation of results"
              />
              
              <SectionContent 
                title="Certification & Documentation"
                path="/apprentices/study-materials/eal/inspection-testing/certification"
                description="Completing required documentation for electrical installation certification"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default EALInspectionTestingPage;
