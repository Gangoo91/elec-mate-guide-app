
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import SectionContent from "@/components/units/SectionContent";

const EALHazardousAreasPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="EAL Hazardous Areas Courses"
          description="Specialized training for electrical installations in potentially explosive atmospheres"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 gap-6 mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Hazardous Areas Modules</h2>
              
              <SectionContent 
                title="Classification of Hazardous Areas"
                path="/apprentices/study-materials/eal/hazardous-areas/classification"
                description="Understanding zones, gas groups, and temperature classifications"
              />
              
              <SectionContent 
                title="Equipment Selection"
                path="/apprentices/study-materials/eal/hazardous-areas/equipment"
                description="Selecting appropriate equipment for different hazardous area classifications"
              />
              
              <SectionContent 
                title="Installation Standards"
                path="/apprentices/study-materials/eal/hazardous-areas/standards"
                description="Standards and practices for hazardous area installations"
              />
              
              <SectionContent 
                title="Inspection & Maintenance"
                path="/apprentices/study-materials/eal/hazardous-areas/maintenance"
                description="Ongoing inspection and maintenance requirements for hazardous area equipment"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default EALHazardousAreasPage;
