
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
          title="EAL Maintenance and Operations Engineering Technician"
          description="Resources for EAL MOET qualification pathway"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 gap-6 mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">MOET Pathway Modules</h2>
              
              <SectionContent 
                title="Electrical Maintenance Principles"
                path="/apprentices/study-materials/eal/moet/electrical"
                description="Principles and practices for maintaining electrical systems"
              />
              
              <SectionContent 
                title="Electronic Control Systems"
                path="/apprentices/study-materials/eal/moet/control-systems"
                description="Electronic and digital control systems for industrial applications"
              />
              
              <SectionContent 
                title="Fault Finding Techniques"
                path="/apprentices/study-materials/eal/moet/fault-finding"
                description="Advanced diagnostic methods for complex systems"
              />
              
              <SectionContent 
                title="Maintenance Planning"
                path="/apprentices/study-materials/eal/moet/planning"
                description="Scheduling and organizing preventative and reactive maintenance"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default EALMOETPage;
