
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const PowerSystemsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Power Systems"
          description="Power generation, distribution, and transmission fundamentals"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Power Generation">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Generation Methods</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Thermal Power Plants</li>
                <li>Hydroelectric Power</li>
                <li>Nuclear Power</li>
                <li>Renewable Energy Sources (Solar, Wind)</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Power Transmission">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Transmission Systems</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>High Voltage Transmission Lines</li>
                <li>Transformers and Substations</li>
                <li>Grid Infrastructure</li>
                <li>Loss Prevention</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Power Distribution">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Distribution Networks</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Distribution Transformers</li>
                <li>Local Power Lines</li>
                <li>Smart Grid Technology</li>
                <li>Load Balancing</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default PowerSystemsPage;
