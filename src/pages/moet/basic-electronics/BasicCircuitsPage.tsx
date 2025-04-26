
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const BasicCircuitsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Basic Circuits"
          description="Understanding fundamental electronic circuit applications"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Amplifier Circuits">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Common Configurations</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Single-stage amplifiers</li>
                <li>Push-pull amplifiers</li>
                <li>Differential amplifiers</li>
                <li>Operational amplifier applications</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Power Supply Circuits">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Components and Stages</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Rectification
                  <ul className="list-disc pl-6 mt-2">
                    <li>Half-wave and full-wave rectifiers</li>
                    <li>Bridge rectifier configurations</li>
                  </ul>
                </li>
                <li>Filtering
                  <ul className="list-disc pl-6 mt-2">
                    <li>Capacitor input filters</li>
                    <li>LC filter networks</li>
                  </ul>
                </li>
                <li>Voltage Regulation
                  <ul className="list-disc pl-6 mt-2">
                    <li>Linear regulators</li>
                    <li>Switching regulators</li>
                  </ul>
                </li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Digital Logic Circuits">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Basic Gates and Combinations</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Basic logic gates (AND, OR, NOT)</li>
                <li>Combination logic circuits</li>
                <li>Flip-flops and latches</li>
                <li>Counter and timer circuits</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default BasicCircuitsPage;
