
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
      <div className="container px-4 py-8">
        <PageHeader 
          title="Safety Protocols"
          description="Essential safety procedures and regulations in maintenance"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Electrical Safety Fundamentals">
            <p className="mb-4 text-[#FFC900]/80">
              Electrical maintenance requires strict adherence to safety protocols to protect personnel from hazards such
              as electric shock, arc flash, and other injuries. These protocols are based on industry standards, regulations,
              and best practices.
            </p>
            
            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Core Safety Principles</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>De-energize when possible:</strong> Always work on de-energized equipment when feasible</li>
              <li><strong>Lock-Out/Tag-Out (LOTO):</strong> Secure power sources to prevent unexpected energization</li>
              <li><strong>Verify absence of voltage:</strong> Test circuits before beginning work</li>
              <li><strong>Use proper PPE:</strong> Wear appropriate personal protective equipment</li>
              <li><strong>Maintain safe distances:</strong> Observe minimum approach distances for energized equipment</li>
              <li><strong>Use insulated tools:</strong> Work with properly rated tools for electrical tasks</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Key Safety Standards</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>BS 7671 - Requirements for Electrical Installations (IET Wiring Regulations)</li>
              <li>Health and Safety at Work Act 1974</li>
              <li>Electricity at Work Regulations 1989</li>
              <li>The Provision and Use of Work Equipment Regulations (PUWER) 1998</li>
              <li>Reporting of Injuries, Diseases and Dangerous Occurrences Regulations (RIDDOR)</li>
            </ul>
          </LessonContent>
          
          <LessonContent title="Safe Work Procedures">
            <p className="mb-4 text-[#FFC900]/80">
              Specific procedures must be followed when performing electrical maintenance to ensure safety.
              These procedures cover preparation, execution, and completion of maintenance tasks.
            </p>
            
            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Before Maintenance</h3>
            <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
              <li>Conduct a risk assessment specific to the task</li>
              <li>Obtain necessary work permits and authorizations</li>
              <li>Review circuit diagrams and maintenance procedures</li>
              <li>Inspect and verify proper functioning of test equipment</li>
              <li>Ensure all required PPE is available and in good condition</li>
              <li>Brief all team members on the work scope and safety measures</li>
              <li>Plan and communicate emergency procedures</li>
            </ol>

            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">During Maintenance</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Follow approved isolation procedures</li>
              <li>Apply LOTO to all potential energy sources</li>
              <li>Verify absence of voltage using properly rated test instruments</li>
              <li>Use appropriate PPE for the specific hazard category</li>
              <li>Maintain clear communication between team members</li>
              <li>Use only approved tools and equipment</li>
              <li>Continuously monitor for changing conditions</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">After Maintenance</h3>
            <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
              <li>Clean the work area and account for all tools</li>
              <li>Conduct post-maintenance testing when appropriate</li>
              <li>Return systems to service methodically</li>
              <li>Document all maintenance work performed</li>
              <li>Report any safety concerns or incidents</li>
              <li>Remove LOTO devices in the correct sequence</li>
              <li>Conduct a post-work briefing to review the maintenance activity</li>
            </ol>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default SafetyProtocolsPage;
