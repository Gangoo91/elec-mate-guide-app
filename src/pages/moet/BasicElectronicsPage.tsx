
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const BasicElectronicsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Basic Electronics"
          description="Electronic components, semiconductors, and basic electronic circuits"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Semiconductor Basics">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Semiconductor Theory</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>P-N Junctions</li>
                <li>Diodes and Their Applications</li>
                <li>Transistor Types</li>
                <li>Basic Semiconductor Materials</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Electronic Components">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Common Components</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Active Components (Transistors, ICs)</li>
                <li>Passive Components (Resistors, Capacitors)</li>
                <li>Sensors and Transducers</li>
                <li>Display Devices</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Basic Circuits">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Circuit Applications</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Amplifier Circuits</li>
                <li>Power Supply Circuits</li>
                <li>Digital Logic Circuits</li>
                <li>Timer Circuits</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default BasicElectronicsPage;
