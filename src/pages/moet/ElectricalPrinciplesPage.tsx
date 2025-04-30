
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const ElectricalPrinciplesPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge');
  };

  const navigateToTopic = (topic: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/${topic}`);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Electrical Principles"
          description="Core electrical theory and principles for maintenance and operations engineering"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <div onClick={() => navigateToTopic('circuit-theory')} className="cursor-pointer hover:opacity-80 transition-opacity">
            <LessonContent title="Circuit Theory">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#FFC900]">Understanding Electrical Circuits</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ohm's Law and Circuit Analysis</li>
                  <li>Series and Parallel Circuits</li>
                  <li>Kirchhoff's Laws</li>
                  <li>Circuit Component Functions</li>
                </ul>
              </div>
            </LessonContent>
          </div>

          <div onClick={() => navigateToTopic('basic-electronics')} className="cursor-pointer hover:opacity-80 transition-opacity">
            <LessonContent title="Basic Electronics">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#FFC900]">Electronic Components and Circuits</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Semiconductor Basics</li>
                  <li>Transistors and Diodes</li>
                  <li>Integrated Circuits</li>
                  <li>Power Electronic Devices</li>
                </ul>
              </div>
            </LessonContent>
          </div>

          <div onClick={() => navigateToTopic('power-systems')} className="cursor-pointer hover:opacity-80 transition-opacity">
            <LessonContent title="Power Systems">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#FFC900]">Electrical Power Fundamentals</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Three-Phase Systems</li>
                  <li>Transformers</li>
                  <li>Power Factor</li>
                  <li>Distribution Systems</li>
                </ul>
              </div>
            </LessonContent>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ElectricalPrinciplesPage;
