
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const TransformersSubstationsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/transmission');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Transformers and Substations"
          description="Essential components of power transmission infrastructure"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Power Transformers">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Transformer Types</h3>
              <p className="text-[#FFC900]/80">Key transformer components:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Step-up transformers for transmission</li>
                <li>Step-down transformers for distribution</li>
                <li>Auto-transformers applications</li>
                <li>Cooling systems and methods</li>
                <li>Protection systems</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Substation Equipment">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Essential Equipment</h3>
              <p className="text-[#FFC900]/80">Major substation components:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Circuit breakers and isolators</li>
                <li>Busbars and bus sections</li>
                <li>Instrument transformers</li>
                <li>Lightning arresters</li>
                <li>Control and protection panels</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Substation Layout">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Design Considerations</h3>
              <p className="text-[#FFC900]/80">Layout and planning aspects:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Single line diagrams</li>
                <li>Equipment spacing requirements</li>
                <li>Safety clearances</li>
                <li>Bus configurations</li>
                <li>Control building layout</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default TransformersSubstationsPage;
