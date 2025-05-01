
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import UnitCard from "@/components/level2/UnitCard";
import GlassCard from "@/components/shared/GlassCard";

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
          description="Foundation learning in electrical installation covering basic principles and practices"
          customBackAction={handleBackClick}
        />
        
        <GlassCard className="mt-8">
          <h2 className="text-2xl font-semibold text-[#FFC900] mb-6 text-center">EAL Level 2 Units</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UnitCard
              unitNumber="ELEC2/01"
              title="Health and Safety in Electrical Installation"
              description="Essential safety practices, regulations and procedures for electrical work"
              path="/apprentices/study-materials/eal/level-2/health-safety"
            />
            
            <UnitCard
              unitNumber="ELEC2/02"
              title="Principles of Electrical Science"
              description="Fundamental electrical theory including circuit principles and calculations"
              path="/apprentices/study-materials/eal/level-2/electrical-science"
            />
            
            <UnitCard
              unitNumber="ELEC2/03"
              title="Electrical Installation Technology"
              description="Installation methods and techniques for electrical systems and equipment"
              path="/apprentices/study-materials/eal/level-2/installation-technology"
            />
            
            <UnitCard
              unitNumber="ELEC2/04"
              title="Installation of Wiring Systems"
              description="Cable installation techniques, containment systems, and wiring practices"
              path="/apprentices/study-materials/eal/level-2/wiring-systems"
            />
            
            <UnitCard
              unitNumber="ELEC2/05"
              title="Understanding Electrical Systems and Equipment"
              description="Components, function and installation of common electrical systems"
              path="/apprentices/study-materials/eal/level-2/electrical-systems"
            />
          </div>
        </GlassCard>
      </div>
    </MainLayout>
  );
};

export default EALLevel2Page;
