
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionCard from "@/components/units/SectionCard";
import AssessmentButton from "@/components/units/level3/unit304/AssessmentButton";
import { unit305 } from "@/data/units/unit305";
import { BookOpen, Cable, Database, Plug, Shield, Switch, Calculator } from "lucide-react";
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";

const Level3Unit305Page = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  const handleAssessmentClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/305/assessment');
  };

  const handleSectionClick = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/305/${sectionId}`);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={unit305.title} 
          description={unit305.description} 
          customBackAction={handleBackClick}
        />
        
        <div className="bg-[#22251e] border-[#FFC900]/20 border rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">
            Purpose of Unit 305
          </h2>
          <p className="text-[#FFC900]/80 mb-4">
            This unit covers the knowledge and understanding needed to design safe and efficient electrical installations
            for domestic, commercial, and industrial environments in accordance with relevant regulations and standards.
          </p>
          <ul className="text-[#FFC900]/80 space-y-2 list-disc list-inside">
            <li>To learn how to design electrical installations for domestic, commercial, and industrial settings.</li>
            <li>To understand load calculations, cable sizing, and circuit planning.</li>
            <li>To apply regulatory requirements in electrical design processes.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-[#FFC900] mb-4">Study Sections</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <SectionCard 
              sectionId="1.1" 
              unitId="305" 
              title="1. Electrical Installation Design Principles" 
              description="Planning circuits, supply arrangements, and design for various applications."
              isLevel3={true}
            />
            
            <SectionCard 
              sectionId="2.1" 
              unitId="305" 
              title="2. Selection of Electrical Equipment" 
              description="Selection of protective devices, cables, accessories and distribution boards."
              isLevel3={true}
            />
            
            <SectionCard 
              sectionId="3.1" 
              unitId="305" 
              title="3. Cable Sizing and Protection" 
              description="Calculations for current-carrying capacity, voltage drop and fault protection."
              isLevel3={true}
            />
            
            <SectionCard 
              sectionId="4.1" 
              unitId="305" 
              title="4. Discrimination and Coordination" 
              description="Ensuring protective devices operate correctly during fault conditions."
              isLevel3={true}
            />
            
            <SectionCard 
              sectionId="5.1" 
              unitId="305" 
              title="5. Earthing and Bonding Design" 
              description="Main and supplementary bonding, earthing conductor sizing."
              isLevel3={true}
            />
            
            <SectionCard 
              sectionId="6.1" 
              unitId="305" 
              title="6. Health, Safety and Building Regulations" 
              description="BS 7671, Building Regulations, energy efficiency and fire safety."
              isLevel3={true}
            />
          </div>
        </div>

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
        
        <div className="bg-[#22251e] border-[#FFC900]/20 border rounded-lg p-6 mb-8">
          <h3 className="text-xl text-[#FFC900] mb-4">Key Points to Remember</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#FFC900]/20">
                  <th className="py-2 px-4 text-left text-[#FFC900]">Topic</th>
                  <th className="py-2 px-4 text-left text-[#FFC900]">Key Point</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4 text-[#FFC900]/80">Design Process</td>
                  <td className="py-2 px-4 text-[#FFC900]/80">Always start with client requirements and regulatory constraints</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4 text-[#FFC900]/80">Load Calculations</td>
                  <td className="py-2 px-4 text-[#FFC900]/80">Consider diversity factors and apply them correctly to get accurate maximum demand</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4 text-[#FFC900]/80">Cable Sizing</td>
                  <td className="py-2 px-4 text-[#FFC900]/80">Account for current-carrying capacity, voltage drop, and fault current protection</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4 text-[#FFC900]/80">Circuit Planning</td>
                  <td className="py-2 px-4 text-[#FFC900]/80">Separate circuits logically and ensure proper protection is selected</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4 text-[#FFC900]/80">Earthing</td>
                  <td className="py-2 px-4 text-[#FFC900]/80">Choose the appropriate earthing arrangement (TN-S, TN-C-S, TT) for the installation</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-[#FFC900]/80">Compliance</td>
                  <td className="py-2 px-4 text-[#FFC900]/80">Ensure designs meet BS 7671 and relevant building regulations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <AssessmentButton onClick={handleAssessmentClick} />
      </div>
    </MainLayout>
  );
};

export default Level3Unit305Page;
