
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const TransmissionSystemsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/transmission');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="High Voltage Transmission Systems"
          description="Comprehensive guide to power transmission systems"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="AC vs DC Transmission">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Transmission Methods</h3>
              <p className="text-[#FFC900]/80">Key differences between AC and DC transmission:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>AC transmission advantages and applications</li>
                <li>DC transmission benefits for long distances</li>
                <li>HVDC transmission systems</li>
                <li>Conversion stations and equipment</li>
                <li>Economic considerations</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Voltage Levels">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Standard Voltage Levels</h3>
              <p className="text-[#FFC900]/80">Understanding transmission voltage standards:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Extra high voltage (EHV) transmission</li>
                <li>High voltage (HV) transmission</li>
                <li>Voltage selection criteria</li>
                <li>International voltage standards</li>
                <li>Voltage level optimization</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Power Lines">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Transmission Lines</h3>
              <p className="text-[#FFC900]/80">Types and characteristics of power lines:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Overhead transmission lines</li>
                <li>Underground cables</li>
                <li>Conductor materials and sizes</li>
                <li>Line parameters and calculations</li>
                <li>Thermal ratings and limits</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default TransmissionSystemsPage;
