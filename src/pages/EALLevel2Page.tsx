
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import UnitCard from "@/components/level2/UnitCard";
import GlassCard from "@/components/shared/GlassCard";
import { useDashboardController } from "@/hooks/useDashboardController";

const EALLevel2Page = () => {
  const navigate = useNavigate();
  const { isReady } = useDashboardController();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal');
  };

  return (
    <MainLayout>
      {isReady && (
        <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
          <PageHeader 
            title="EAL Level 2 Diploma in Electrical Installation"
            description="Qualification Number: 600/6724/X"
            customBackAction={handleBackClick}
          />
          
          <GlassCard className="mt-8">
            <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Mandatory Units</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UnitCard
                unitNumber="ELEC2/01"
                title="Health and Safety in Electrical Installation"
                description="Covers essential health and safety practices within the electrical installation environment. (48 GLH)"
                path="/apprentices/study-materials/eal/level-2/health-safety"
              />
              
              <UnitCard
                unitNumber="ELEC2/04"
                title="Electrical Installation Theory and Technology"
                description="Introduces the principles and technologies underpinning electrical installation work. (146 GLH)"
                path="/apprentices/study-materials/eal/level-2/electrical-science"
              />
              
              <UnitCard
                unitNumber="ELEC2/05A"
                title="Electrical Installation Methods, Procedures and Requirements"
                description="Focuses on standard methods and procedures for electrical installations, ensuring compliance with regulations. (59 GLH)"
                path="/apprentices/study-materials/eal/level-2/installation-technology"
              />
              
              <UnitCard
                unitNumber="ELEC2/05B"
                title="Electrical Installation Craft Skills"
                description="Provides hands-on experience in practical electrical installation tasks, developing essential craft skills. (140 GLH)"
                path="/apprentices/study-materials/eal/level-2/wiring-systems"
              />
              
              <UnitCard
                unitNumber="ELEC2/08"
                title="Electrical Science and Principles"
                description="Explores the fundamental scientific principles that form the basis of electrical theory and practice. (93 GLH)"
                path="/apprentices/study-materials/eal/level-2/electrical-systems"
              />
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-primary/80 text-sm">
                This qualification has a minimum of 486 guided learning hours (GLH) and a Total Qualification Time (TQT) of 502 hours.
              </p>
            </div>
          </GlassCard>
        </div>
      )}
    </MainLayout>
  );
};

export default EALLevel2Page;
