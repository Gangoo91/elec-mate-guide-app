
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const SafetyAwarenessPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/behaviours');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Safety Awareness"
          description="Building and maintaining a proactive safety culture in electrical work"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Safety Culture">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Risk Assessment</h3>
              <p className="text-[#FFC900]/80">Identifying and evaluating potential hazards is a critical skill for all electrical workers. Effective risk assessment can prevent accidents, injuries, and equipment damage.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Conduct a site survey before beginning work</li>
                <li>Identify all potential electrical, physical, and environmental hazards</li>
                <li>Evaluate the severity and likelihood of each risk</li>
                <li>Implement appropriate control measures based on the hierarchy of controls</li>
                <li>Document your risk assessment and control measures</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">PPE Compliance</h3>
              <p className="text-[#FFC900]/80">Personal Protective Equipment is your last line of defense against workplace hazards. Consistent and correct use of PPE is essential for personal safety in electrical work.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Select appropriate PPE for the specific task and hazards</li>
                <li>Inspect PPE before each use for damage or wear</li>
                <li>Use insulated tools when working with electrical equipment</li>
                <li>Wear appropriate eye protection, gloves, and footwear</li>
                <li>Use arc flash protection when required for high-energy systems</li>
                <li>Maintain and store PPE properly to preserve its protective qualities</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Emergency Response</h3>
              <p className="text-[#FFC900]/80">Knowing how to respond to emergencies can save lives and minimize damage. All electrical workers should be familiar with emergency procedures for common incidents.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Know the location of emergency equipment (fire extinguishers, first aid kits)</li>
                <li>Understand the procedure for electrical shock incidents</li>
                <li>Be familiar with evacuation routes and assembly points</li>
                <li>Know how to isolate power in an emergency</li>
                <li>Report all incidents, even near misses, to improve safety measures</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Safety Promotion">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Leading by Example</h3>
              <p className="text-[#FFC900]/80">Your behavior sets the standard for safety culture in your workplace. Consistently demonstrating safe practices encourages others to prioritize safety as well.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Always follow safety procedures, even when under time pressure</li>
                <li>Speak up when you observe unsafe conditions or practices</li>
                <li>Share safety knowledge and tips with colleagues</li>
                <li>Participate actively in safety meetings and training</li>
                <li>Never take shortcuts that compromise safety</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Reporting and Documentation</h3>
              <p className="text-[#FFC900]/80">Proper reporting of safety concerns, incidents, and near misses helps identify patterns and prevent future accidents. Documentation creates accountability and drives continuous improvement.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Report unsafe conditions promptly to supervisors</li>
                <li>Document all incidents thoroughly and accurately</li>
                <li>Suggest improvements to existing safety procedures</li>
                <li>Participate in incident investigations constructively</li>
                <li>Keep safety certifications and training records up to date</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Continuous Learning</h3>
              <p className="text-[#FFC900]/80">Safety standards and best practices evolve over time. Staying current with safety knowledge and regulations is an essential professional responsibility.</p>
              
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Attend regular safety training and refresher courses</li>
                <li>Stay updated on changes to safety standards and regulations</li>
                <li>Learn from industry incidents and case studies</li>
                <li>Share new safety information with your team</li>
                <li>Apply lessons learned from previous incidents</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default SafetyAwarenessPage;
