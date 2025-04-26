
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const PowerTransmissionPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Power Transmission"
          description="High voltage power transmission systems and infrastructure"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="High Voltage Transmission">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Transmission Systems</h3>
              <p className="text-[#FFC900]/80">High voltage transmission systems transport electricity over long distances:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>AC vs DC transmission considerations</li>
                <li>Voltage levels and their selection</li>
                <li>Conductor types and configurations</li>
                <li>Tower designs and right-of-way requirements</li>
                <li>Insulation and clearance requirements</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Transformers and Substations">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Components</h3>
              <p className="text-[#FFC900]/80">Essential elements of power transmission infrastructure:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Step-up and step-down transformers</li>
                <li>Substation equipment and layout</li>
                <li>Switchgear and protection systems</li>
                <li>Voltage regulation equipment</li>
                <li>Maintenance and monitoring systems</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Grid Infrastructure">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Grid Components</h3>
              <p className="text-[#FFC900]/80">Complex network of interconnected systems:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Transmission corridors and routes</li>
                <li>Interconnection points</li>
                <li>Grid stability and control</li>
                <li>Emergency backup systems</li>
                <li>Smart grid technologies</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Loss Prevention">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Efficiency Measures</h3>
              <p className="text-[#FFC900]/80">Techniques to minimize transmission losses:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Corona loss reduction</li>
                <li>Conductor selection and sizing</li>
                <li>Reactive power compensation</li>
                <li>Maintenance and monitoring</li>
                <li>Modern loss prevention technologies</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default PowerTransmissionPage;
