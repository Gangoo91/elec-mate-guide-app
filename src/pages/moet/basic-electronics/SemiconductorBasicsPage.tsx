
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const SemiconductorBasicsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Semiconductor Basics"
          description="Understanding semiconductor theory and applications"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="P-N Junction Theory">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Fundamental Concepts</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Structure of P-type and N-type semiconductors</li>
                <li>Formation of depletion region</li>
                <li>Forward and reverse bias characteristics</li>
                <li>Junction capacitance and temperature effects</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Diode Applications">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Common Uses</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Rectification in power supplies</li>
                <li>Signal detection and demodulation</li>
                <li>Protection against reverse polarity</li>
                <li>LED applications in displays and indicators</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Transistor Types">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Major Categories</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Bipolar Junction Transistors (BJTs)
                  <ul className="list-disc pl-6 mt-2">
                    <li>NPN and PNP configurations</li>
                    <li>Common base, emitter, and collector circuits</li>
                  </ul>
                </li>
                <li>Field Effect Transistors (FETs)
                  <ul className="list-disc pl-6 mt-2">
                    <li>JFET and MOSFET types</li>
                    <li>Enhancement and depletion modes</li>
                  </ul>
                </li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default SemiconductorBasicsPage;
