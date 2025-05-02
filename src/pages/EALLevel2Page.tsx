
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
          title="EAL Level 2 Diploma in Electrical Installation"
          description="Essential units and resources for the EAL Level 2 qualification"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 gap-6 mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Core Units</h2>
              
              <SectionContent 
                title="ELEC2/01 – Health and Safety in Electrical Installation"
                path="/apprentices/study-materials/eal/level-2/health-safety"
                description="Understanding safety principles and practices for electrical work"
              />
              
              <SectionContent 
                title="ELEC2/04 – Electrical Installation Theory and Technology"
                path="/apprentices/study-materials/eal/level-2/electrical-theory"
                description="Theoretical concepts and principles of electrical installations"
              />
              
              <SectionContent 
                title="ELEC2/05B – Electrical Installation Craft Skills"
                path="/apprentices/study-materials/eal/level-2/craft-skills"
                description="Practical skills for cable installation, containment systems, and equipment"
              />
              
              <SectionContent 
                title="ELEC2/08 – Electrical Science and Principles"
                path="/apprentices/study-materials/eal/level-2/electrical-science"
                description="Scientific principles that underpin electrical work"
              />
              
              <SectionContent 
                title="ELEC2/06A – Installation Methods, Procedures and Requirements"
                path="/apprentices/study-materials/eal/level-2/installation-methods"
                description="Methods and procedures for installing electrical systems"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default EALLevel2Page;
