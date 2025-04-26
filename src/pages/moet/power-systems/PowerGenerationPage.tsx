
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const PowerGenerationPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Power Generation"
          description="Understanding different methods of electrical power generation"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Thermal Power Plants">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Operating Principles</h3>
              <p className="text-[#FFC900]/80">Thermal power plants convert heat energy into electrical energy through a series of processes:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Fuel combustion (coal, gas, oil) heats water to create steam</li>
                <li>High-pressure steam drives turbine blades</li>
                <li>Turbine rotation drives electrical generator</li>
                <li>Generator converts mechanical energy to electrical energy</li>
                <li>Cooling systems condense steam back to water</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Hydroelectric Power">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Generation Process</h3>
              <p className="text-[#FFC900]/80">Hydroelectric power harnesses the energy of flowing water:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Water stored in reservoirs contains potential energy</li>
                <li>Falling water drives turbine generators</li>
                <li>Flow rate and height difference determine power output</li>
                <li>Pumped storage systems for peak demand management</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Nuclear Power">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Nuclear Fission Process</h3>
              <p className="text-[#FFC900]/80">Nuclear power plants generate electricity through controlled nuclear fission:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Nuclear fuel (uranium) undergoes fission</li>
                <li>Heat from reaction creates steam</li>
                <li>Steam drives turbine-generator system</li>
                <li>Cooling towers manage excess heat</li>
                <li>Safety systems prevent radiation release</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Renewable Energy Sources">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Solar and Wind Power</h3>
              <p className="text-[#FFC900]/80">Modern renewable energy technologies:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Solar PV panels convert light to electricity</li>
                <li>Wind turbines harness kinetic energy</li>
                <li>Energy storage systems for reliability</li>
                <li>Grid integration challenges and solutions</li>
                <li>Environmental benefits and considerations</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default PowerGenerationPage;
