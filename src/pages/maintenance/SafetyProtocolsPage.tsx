
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const SafetyProtocolsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Safety Protocols"
          description="Essential safety procedures and regulations for electrical maintenance"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Electrical Safety Fundamentals">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">The Five Safety Rules</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Disconnect completely:</strong> Isolate equipment from all power sources</li>
                <li><strong>Secure against re-connection:</strong> Use lockout/tagout procedures</li>
                <li><strong>Verify absence of voltage:</strong> Test all circuits and components</li>
                <li><strong>Ground and short-circuit:</strong> Install temporary grounds where needed</li>
                <li><strong>Cover or barrier adjacent live parts:</strong> Protect against accidental contact</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Personal Protective Equipment (PPE)">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Required PPE for Electrical Work</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Head Protection:</strong> Safety helmets with electrical rating</li>
                <li><strong>Eye Protection:</strong> Safety glasses or face shields</li>
                <li><strong>Hand Protection:</strong> Insulated gloves with appropriate voltage rating</li>
                <li><strong>Foot Protection:</strong> Safety boots with electrical hazard protection</li>
                <li><strong>Arc Flash Protection:</strong> FR clothing and face shields when required</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Risk Assessment">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Conducting Risk Assessments</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Identify potential hazards</li>
                <li>Assess probability and severity</li>
                <li>Implement control measures</li>
                <li>Document assessment findings</li>
                <li>Review and update regularly</li>
              </ul>

              <h3 className="text-lg font-semibold text-[#FFC900] mt-4">Emergency Procedures</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Emergency shutdown procedures</li>
                <li>First aid for electrical injuries</li>
                <li>Fire safety and evacuation</li>
                <li>Incident reporting requirements</li>
                <li>Emergency contact information</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default SafetyProtocolsPage;
