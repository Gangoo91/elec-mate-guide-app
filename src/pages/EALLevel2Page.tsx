
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import SectionContent from "@/components/units/SectionContent";

const EALLevel2Page = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 2 EAL Courses"
          description="Foundation learning in electrical installation covering basic principles and practices"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 gap-6 mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Available Modules</h2>
              
              <SectionContent 
                title="Health and Safety in Building Services Engineering"
                path="/apprentices/study-materials/eal/level-2/health-safety"
                description="Essential safety practices and regulations for electrical installation work"
              />
              
              <SectionContent 
                title="Principles of Electrical Science"
                path="/apprentices/study-materials/eal/level-2/electrical-science"
                description="Fundamental electrical theory including circuit principles and calculations"
              />
              
              <SectionContent 
                title="Electrical Installation Technology"
                path="/apprentices/study-materials/eal/level-2/installation-technology"
                description="Practical installation methods and techniques for electrical systems"
              />
              
              <SectionContent 
                title="Installation of Wiring Systems"
                path="/apprentices/study-materials/eal/level-2/wiring-systems"
                description="Cable installation, containment systems, and wiring practices"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default EALLevel2Page;
