
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { Network, PowerCircle, ShieldAlert } from "lucide-react";

const DistributionNetworksPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/distribution');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Distribution Networks"
          description="Understanding electrical power distribution networks and their components"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Primary Distribution Networks">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">High Voltage Distribution</h3>
              <p className="text-[#FFC900]/80">Primary distribution networks typically operate at voltages between 11kV and 33kV:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Supplies power to large industrial consumers</li>
                <li>Connects to primary substations</li>
                <li>Uses three-phase distribution systems</li>
                <li>Employs overhead lines and underground cables</li>
                <li>Implements primary switching and protection schemes</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Secondary Distribution Networks">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Low Voltage Distribution</h3>
              <p className="text-[#FFC900]/80">Secondary networks operate at 400V/230V for final distribution:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Delivers power to residential and small commercial customers</li>
                <li>Uses pole-mounted or ground-mounted transformers</li>
                <li>Implements single-phase and three-phase systems</li>
                <li>Features extensive protection mechanisms</li>
                <li>Includes service drops to individual premises</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Network Configurations">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Common Distribution Layouts</h3>
              <p className="text-[#FFC900]/80">Different network configurations offer various levels of reliability:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Radial distribution systems</li>
                <li>Ring main configurations</li>
                <li>Mesh networks</li>
                <li>Interconnected systems</li>
                <li>Emergency backup connections</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Protection Systems">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Network Protection</h3>
              <p className="text-[#FFC900]/80">Essential protection equipment and systems:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Circuit breakers and fuses</li>
                <li>Relays and protection schemes</li>
                <li>Earthing systems</li>
                <li>Lightning protection</li>
                <li>Fault detection and isolation</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default DistributionNetworksPage;
