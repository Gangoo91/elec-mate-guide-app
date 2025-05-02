
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import SectionContent from "@/components/units/SectionContent";

const EALBuildingControlsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="EAL Building Controls Courses"
          description="Training on building management systems and smart building technologies"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 gap-6 mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Building Controls Modules</h2>
              
              <SectionContent 
                title="Building Management Systems"
                path="/apprentices/study-materials/eal/building-controls/bms"
                description="Introduction to BMS architecture and functions"
              />
              
              <SectionContent 
                title="HVAC Controls"
                path="/apprentices/study-materials/eal/building-controls/hvac"
                description="Electrical control systems for heating, ventilation and air conditioning"
              />
              
              <SectionContent 
                title="Lighting Controls"
                path="/apprentices/study-materials/eal/building-controls/lighting"
                description="Smart lighting control systems and energy efficiency"
              />
              
              <SectionContent 
                title="Integration & Networking"
                path="/apprentices/study-materials/eal/building-controls/integration"
                description="Connecting and integrating different building control systems"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default EALBuildingControlsPage;
