
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionCard from "@/components/units/SectionCard";
import AssessmentButton from "@/components/units/level3/unit304/AssessmentButton";
import { unit305 } from "@/data/units/unit305";

const Level3Unit305Page = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  const handleAssessmentClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/305/assessment');
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
          <ul className="text-[#FFC900]/80 space-y-2 list-disc list-inside">
            <li>To learn how to design electrical installations for domestic, commercial, and industrial settings.</li>
            <li>To understand load calculations, cable sizing, and circuit planning.</li>
            <li>To apply regulatory requirements in electrical design processes.</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl text-[#FFC900] mb-4">Key Sections</h3>
          
          {unit305.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg text-[#FFC900] mb-3">{section.title}</h4>
              {section.content}
            </div>
          ))}
        </div>
        
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
                <tr>
                  <td className="py-2 px-4 text-[#FFC900]/80">Circuit Planning</td>
                  <td className="py-2 px-4 text-[#FFC900]/80">Separate circuits logically and ensure proper protection is selected</td>
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
