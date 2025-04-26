
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const GridInfrastructurePage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/transmission');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Grid Infrastructure"
          description="Understanding power transmission grid infrastructure"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Grid Components">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Infrastructure</h3>
              <p className="text-[#FFC900]/80">Essential grid components:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Transmission towers and poles</li>
                <li>Insulators and hardware</li>
                <li>Grid interconnection points</li>
                <li>SCADA systems</li>
                <li>Communication infrastructure</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Grid Stability">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">System Stability</h3>
              <p className="text-[#FFC900]/80">Maintaining grid stability:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Voltage stability measures</li>
                <li>Frequency control systems</li>
                <li>Power flow management</li>
                <li>Load balancing techniques</li>
                <li>Reactive power compensation</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Emergency Systems">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Backup and Emergency</h3>
              <p className="text-[#FFC900]/80">Emergency response systems:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Backup power systems</li>
                <li>Emergency isolation procedures</li>
                <li>Black start capabilities</li>
                <li>Fault recovery systems</li>
                <li>Emergency communication protocols</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default GridInfrastructurePage;
