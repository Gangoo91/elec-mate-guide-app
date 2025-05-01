
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import SectionContent from "@/components/units/SectionContent";

const EALEVInstallationPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="EAL Electric Vehicle Installation"
          description="Courses covering installation and maintenance of EV charging equipment"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 gap-6 mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">EV Installation Modules</h2>
              
              <SectionContent 
                title="Charging Equipment Types"
                path="/apprentices/study-materials/eal/ev-installation/equipment-types"
                description="Different types of EV charging equipment and their applications"
              />
              
              <SectionContent 
                title="Installation Requirements"
                path="/apprentices/study-materials/eal/ev-installation/requirements"
                description="Electrical supply and installation requirements for EV chargers"
              />
              
              <SectionContent 
                title="Testing & Commissioning"
                path="/apprentices/study-materials/eal/ev-installation/commissioning"
                description="Procedures for testing and commissioning EV charging installations"
              />
              
              <SectionContent 
                title="Regulations & Standards"
                path="/apprentices/study-materials/eal/ev-installation/regulations"
                description="Current regulations and standards applicable to EV charging installations"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default EALEVInstallationPage;
