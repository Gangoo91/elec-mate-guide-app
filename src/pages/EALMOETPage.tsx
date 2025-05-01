
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import SectionContent from "@/components/units/SectionContent";

const EALMOETPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="EAL MOET Courses"
          description="Maintenance and Operations Engineering Technician electrical qualifications"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 gap-6 mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">MOET Modules</h2>
              
              <SectionContent 
                title="Electrical Maintenance"
                path="/apprentices/study-materials/eal/moet/electrical-maintenance"
                description="Core maintenance principles for electrical systems and equipment"
              />
              
              <SectionContent 
                title="Fault Finding Techniques"
                path="/apprentices/study-materials/eal/moet/fault-finding"
                description="Systematic approaches to identifying and resolving electrical faults"
              />
              
              <SectionContent 
                title="Control Systems"
                path="/apprentices/study-materials/eal/moet/control-systems"
                description="Installation and maintenance of electrical control systems"
              />
              
              <SectionContent 
                title="Health & Safety"
                path="/apprentices/study-materials/eal/moet/health-safety"
                description="Safety procedures and practices for electrical maintenance operations"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default EALMOETPage;
