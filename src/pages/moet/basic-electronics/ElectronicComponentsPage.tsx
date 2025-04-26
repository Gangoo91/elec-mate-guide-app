
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const ElectronicComponentsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Electronic Components"
          description="Understanding active and passive electronic components"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Active Components">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Transistors and ICs</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Transistor configurations and applications</li>
                <li>Operational amplifiers and their uses</li>
                <li>Digital logic ICs and gates</li>
                <li>Voltage regulators and power management ICs</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Passive Components">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Basic Elements</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Resistors
                  <ul className="list-disc pl-6 mt-2">
                    <li>Fixed, variable, and special types</li>
                    <li>Power ratings and tolerances</li>
                  </ul>
                </li>
                <li>Capacitors
                  <ul className="list-disc pl-6 mt-2">
                    <li>Electrolytic, ceramic, and film types</li>
                    <li>Voltage ratings and applications</li>
                  </ul>
                </li>
                <li>Inductors and Transformers
                  <ul className="list-disc pl-6 mt-2">
                    <li>Core materials and characteristics</li>
                    <li>Common applications in circuits</li>
                  </ul>
                </li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Sensors and Transducers">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Types and Applications</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Temperature sensors</li>
                <li>Light sensors and photodetectors</li>
                <li>Pressure and force sensors</li>
                <li>Position and motion sensors</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default ElectronicComponentsPage;
