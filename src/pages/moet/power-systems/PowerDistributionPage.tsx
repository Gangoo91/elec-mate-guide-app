
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const PowerDistributionPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Power Distribution"
          description="Electrical power distribution systems and networks"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Distribution Networks">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Network Architecture</h3>
              <p className="text-[#FFC900]/80">Power distribution network components and design:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Primary distribution networks</li>
                <li>Secondary distribution networks</li>
                <li>Network topologies and configurations</li>
                <li>Voltage levels and standards</li>
                <li>Protection and control systems</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Distribution Transformers">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Transformer Types and Applications</h3>
              <p className="text-[#FFC900]/80">Key distribution transformer concepts:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Pole-mounted transformers</li>
                <li>Pad-mounted transformers</li>
                <li>Underground transformers</li>
                <li>Maintenance and testing</li>
                <li>Efficiency considerations</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Smart Grid Technology">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Modern Grid Solutions</h3>
              <p className="text-[#FFC900]/80">Advanced distribution technologies:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Smart meters and monitoring</li>
                <li>Distribution automation</li>
                <li>Fault detection and isolation</li>
                <li>Demand response systems</li>
                <li>Integration of renewable sources</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Load Balancing">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">System Optimization</h3>
              <p className="text-[#FFC900]/80">Techniques for efficient power distribution:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Phase load balancing</li>
                <li>Power factor correction</li>
                <li>Peak load management</li>
                <li>Voltage regulation</li>
                <li>Emergency load shedding</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default PowerDistributionPage;
