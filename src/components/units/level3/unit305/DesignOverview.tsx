
import React from 'react';
import LessonContent from "@/components/units/LessonContent";
import { ContentSection } from "@/components/units/ContentSection";
import { BookOpen, Shield, Cable, Database, Plug, Calculator } from "lucide-react";

const DesignOverview = () => {
  return (
    <>
      <LessonContent title="Electrical Systems Design Overview">
        <div className="space-y-4">
          <p>
            Electrical systems design is a critical discipline that involves planning, calculating, and specifying electrical systems 
            for buildings and structures. This unit covers the essential knowledge and skills required to design electrical installations 
            that are safe, efficient, and compliant with relevant regulations.
          </p>
          
          <div className="flex items-center gap-3 bg-[#FFC900]/10 p-3 rounded-md">
            <BookOpen className="text-[#FFC900] shrink-0" />
            <p className="text-[#FFC900]/90 text-sm">
              This unit covers the knowledge needed for the City & Guilds Level 3 qualification and is essential for electricians 
              progressing to design roles.
            </p>
          </div>
        </div>
      </LessonContent>
      
      <ContentSection
        title="Key Components of Electrical Design"
        content={
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <Shield className="text-[#FFC900] mt-1 shrink-0" />
              <div>
                <h4 className="font-medium text-[#FFC900]">Protection Systems</h4>
                <p>Designing correct protection against electric shock, overcurrent, and fault conditions.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <Cable className="text-[#FFC900] mt-1 shrink-0" />
              <div>
                <h4 className="font-medium text-[#FFC900]">Cabling Systems</h4>
                <p>Selection and sizing of cables based on load requirements and environmental factors.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <Database className="text-[#FFC900] mt-1 shrink-0" />
              <div>
                <h4 className="font-medium text-[#FFC900]">Distribution Systems</h4>
                <p>Planning distribution boards and consumer units for efficient power distribution.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <Plug className="text-[#FFC900] mt-1 shrink-0" />
              <div>
                <h4 className="font-medium text-[#FFC900]">Circuit Design</h4>
                <p>Creating lighting, power, and special installation circuits to meet customer requirements.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <Calculator className="text-[#FFC900] mt-1 shrink-0" />
              <div>
                <h4 className="font-medium text-[#FFC900]">Load Calculations</h4>
                <p>Determining maximum demand, applying diversity factors, and calculating design currents.</p>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default DesignOverview;
