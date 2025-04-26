
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { Network } from "lucide-react";

const SmartGridPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/distribution');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Smart Grid Technology"
          description="Modern smart grid systems and their implementation"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Smart Grid Components">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Technologies</h3>
              <p className="text-[#FFC900]/80">Essential components of smart grid systems:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Advanced metering infrastructure (AMI)</li>
                <li>Distribution automation systems</li>
                <li>Supervisory control and data acquisition (SCADA)</li>
                <li>Communication networks</li>
                <li>Energy management systems</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Grid Monitoring">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Real-time Monitoring</h3>
              <p className="text-[#FFC900]/80">Advanced monitoring capabilities:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Power quality monitoring</li>
                <li>Load forecasting</li>
                <li>Fault detection and location</li>
                <li>Asset health monitoring</li>
                <li>Environmental monitoring</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Grid Integration">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Renewable Integration</h3>
              <p className="text-[#FFC900]/80">Integration of renewable energy sources:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Solar PV integration</li>
                <li>Wind power integration</li>
                <li>Energy storage systems</li>
                <li>Microgrid implementation</li>
                <li>Demand response programs</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Cybersecurity">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Grid Security</h3>
              <p className="text-[#FFC900]/80">Security measures for smart grids:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Encryption protocols</li>
                <li>Access control systems</li>
                <li>Network segmentation</li>
                <li>Security monitoring</li>
                <li>Incident response plans</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default SmartGridPage;
