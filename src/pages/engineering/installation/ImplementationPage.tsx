
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const ImplementationPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/installation-planning');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Implementation and Quality Control"
          description="Best practices for installation execution and quality assurance"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Installation Work Management">
            <div className="space-y-4">
              <p>
                Successful implementation depends on structured work management processes that ensure 
                installation activities proceed safely, efficiently, and according to plan.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Work Management Practices</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Daily work allocation and briefings</li>
                <li>Method statement implementation and compliance</li>
                <li>Permit-to-work system administration</li>
                <li>Progress monitoring against schedule</li>
                <li>Interface management with other trades and activities</li>
                <li>Site logistics coordination</li>
              </ul>
              
              <p className="mt-4">
                Effective work management minimizes disruptions, optimizes resource utilization,
                and maintains focus on quality and safety.
              </p>
            </div>
          </LessonContent>
          
          <LessonContent title="Quality Control Procedures">
            <div className="space-y-4">
              <p>
                Quality control encompasses the systematic activities implemented to verify that installation 
                work meets design requirements and applicable standards.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Quality Control Elements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Installation inspection checklists and protocols</li>
                <li>First-fix and second-fix quality verification</li>
                <li>Material quality verification procedures</li>
                <li>Non-conformance reporting and resolution</li>
                <li>Technical query management process</li>
                <li>Photographic documentation of installation quality</li>
              </ul>
              
              <p className="mt-4">
                Proactive quality control prevents the need for costly and time-consuming rework
                while ensuring compliance with project specifications.
              </p>
            </div>
          </LessonContent>
          
          <LessonContent title="Testing and Commissioning">
            <div className="space-y-4">
              <p>
                Testing and commissioning verify that the installed systems function correctly, safely, and 
                according to design requirements before handover to the client.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Testing and Commissioning Activities</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pre-commissioning checks and inspections</li>
                <li>Dead testing procedures and requirements</li>
                <li>Live testing sequence and safety procedures</li>
                <li>Functional testing protocols</li>
                <li>System integration testing</li>
                <li>Performance verification tests</li>
                <li>Documentation and certification</li>
              </ul>
              
              <p className="mt-4">
                A structured commissioning process provides assurance that systems are safe, reliable,
                and ready for operational use.
              </p>
            </div>
          </LessonContent>
          
          <LessonContent title="Handover and Documentation">
            <div className="space-y-4">
              <p>
                The handover process transfers the completed installation to the client, along with all
                necessary documentation for operation and maintenance.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Handover Components</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>As-built drawings and documentation</li>
                <li>Test certificates and verification records</li>
                <li>Operation and maintenance manuals</li>
                <li>Spare parts lists and recommendations</li>
                <li>User training sessions</li>
                <li>Warranty documentation</li>
                <li>Health and safety file completion</li>
              </ul>
              
              <p className="mt-4">
                Comprehensive handover documentation enables effective operation and maintenance of
                the installation throughout its lifecycle.
              </p>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default ImplementationPage;
