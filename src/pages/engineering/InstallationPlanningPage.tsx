
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { Card } from "@/components/ui/card";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";

const InstallationPlanningPage = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations');
  };

  const handleStudy = (sectionId: string) => {
    setSelectedSection(sectionId);
    // Scroll to the content section
    setTimeout(() => {
      const element = document.getElementById('content-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const section1 = [
    { id: '1.1', title: 'Project Planning Fundamentals', description: 'Key elements of effective project planning for electrical installations' },
    { id: '1.2', title: 'Resource Allocation', description: 'Planning labor, materials, and equipment for installation projects' },
    { id: '1.3', title: 'Risk Assessment', description: 'Identifying and mitigating potential risks in electrical installations' }
  ];

  const section2 = [
    { id: '2.1', title: 'Technical Design Considerations', description: 'System design requirements and specifications' },
    { id: '2.2', title: 'Compliance Standards', description: 'Regulatory compliance and industry standards for electrical installations' },
    { id: '2.3', title: 'Documentation Requirements', description: 'Essential documentation for installation projects' }
  ];

  const section3 = [
    { id: '3.1', title: 'Implementation Methodology', description: 'Strategies for effective installation implementation' },
    { id: '3.2', title: 'Quality Control Measures', description: 'Ensuring installation quality through verification and testing' },
    { id: '3.3', title: 'Commissioning Procedures', description: 'Steps for successful system commissioning and handover' }
  ];

  const getSelectedSectionContent = () => {
    switch (selectedSection) {
      case '1.1':
        return {
          title: 'Project Planning Fundamentals',
          content: (
            <div className="space-y-4">
              <p>
                Effective installation planning is crucial for successful electrical projects, ensuring that 
                work is completed safely, efficiently, and according to specifications. A comprehensive plan 
                addresses design requirements, resource allocation, scheduling, and regulatory compliance.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Planning Elements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Site survey and assessment</li>
                <li>Load calculations and system sizing</li>
                <li>Material and resource planning</li>
                <li>Risk assessment and safety planning</li>
                <li>Project scheduling and milestones</li>
                <li>Budget development and cost control</li>
              </ul>
            </div>
          )
        };
      case '1.2':
        return {
          title: 'Resource Allocation',
          content: (
            <div className="space-y-4">
              <p>
                Proper resource allocation ensures that the right personnel, materials, and equipment are available 
                when needed, minimizing delays and optimizing cost efficiency throughout the installation process.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Resource Management Strategies</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personnel skill mapping and assignment</li>
                <li>Materials procurement scheduling</li>
                <li>Equipment utilization planning</li>
                <li>Just-in-time delivery coordination</li>
                <li>Subcontractor management</li>
                <li>Contingency resource planning</li>
              </ul>
            </div>
          )
        };
      case '1.3':
        return {
          title: 'Risk Assessment',
          content: (
            <div className="space-y-4">
              <p>
                Risk assessment in electrical installations identifies potential hazards and establishes 
                control measures to prevent safety incidents, project delays, and quality issues.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Risk Assessment Process</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hazard identification and analysis</li>
                <li>Risk evaluation and prioritization</li>
                <li>Control measure development</li>
                <li>Emergency response planning</li>
                <li>Risk monitoring and reassessment</li>
              </ul>
            </div>
          )
        };
      case '2.1':
        return {
          title: 'Technical Design Considerations',
          content: (
            <div className="space-y-4">
              <p>
                The technical design phase translates client requirements into detailed specifications and drawings, 
                forming the foundation for the installation work. This phase requires careful consideration of electrical 
                principles, system requirements, and compliance standards.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Design Elements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Circuit design and load distribution</li>
                <li>Cable sizing and routing</li>
                <li>Equipment selection and specification</li>
                <li>Protection schemes and coordination</li>
                <li>Control system integration</li>
                <li>Compliance with regulations and standards</li>
              </ul>
            </div>
          )
        };
      case '2.2':
        return {
          title: 'Compliance Standards',
          content: (
            <div className="space-y-4">
              <p>
                Electrical installations must comply with various regulatory requirements and industry standards 
                to ensure safety, reliability, and performance. Understanding and implementing these standards is 
                a critical aspect of installation planning.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Compliance Areas</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>BS 7671 Wiring Regulations (18th Edition)</li>
                <li>Building Regulations Part P</li>
                <li>Health and Safety at Work Act</li>
                <li>Electricity at Work Regulations</li>
                <li>Construction Design and Management (CDM) Regulations</li>
                <li>Industry standards and codes of practice</li>
              </ul>
            </div>
          )
        };
      case '2.3':
        return {
          title: 'Documentation Requirements',
          content: (
            <div className="space-y-4">
              <p>
                Comprehensive documentation is essential for electrical installation projects, providing clarity, 
                ensuring compliance, and facilitating future maintenance and modifications.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Essential Documentation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Technical specifications and drawings</li>
                <li>Method statements and risk assessments</li>
                <li>Inspection and testing schedules</li>
                <li>Material and equipment certifications</li>
                <li>Electrical installation certificates</li>
                <li>Operation and maintenance manuals</li>
                <li>As-built drawings and records</li>
              </ul>
            </div>
          )
        };
      case '3.1':
        return {
          title: 'Implementation Methodology',
          content: (
            <div className="space-y-4">
              <p>
                A systematic implementation methodology ensures that installation work proceeds efficiently, 
                safely, and in accordance with the design specifications and project plan.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Implementation Phases</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pre-installation preparation and site setup</li>
                <li>First fix installation (containment systems, cables)</li>
                <li>Second fix installation (accessories, equipment)</li>
                <li>System integration and connections</li>
                <li>Initial testing and verification</li>
                <li>Commissioning and final adjustments</li>
                <li>Handover and documentation completion</li>
              </ul>
            </div>
          )
        };
      case '3.2':
        return {
          title: 'Quality Control Measures',
          content: (
            <div className="space-y-4">
              <p>
                The implementation phase transforms plans into reality through structured installation work and 
                rigorous quality control. Effective management ensures adherence to designs, schedules, and quality standards.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Quality Control Measures</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Inspection and test plans</li>
                <li>Milestone verification and sign-off</li>
                <li>Compliance testing and certification</li>
                <li>Documentation and as-built records</li>
                <li>Non-conformance management</li>
                <li>Continuous improvement processes</li>
              </ul>
            </div>
          )
        };
      case '3.3':
        return {
          title: 'Commissioning Procedures',
          content: (
            <div className="space-y-4">
              <p>
                Commissioning is the final phase of an installation project, ensuring that all systems function 
                as intended and meet the specified requirements before handover to the client.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Commissioning Elements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pre-commissioning checks and preparation</li>
                <li>Systematic component testing</li>
                <li>Integrated system testing</li>
                <li>Performance verification</li>
                <li>Client training and familiarization</li>
                <li>Documentation handover</li>
                <li>Post-commissioning support and monitoring</li>
              </ul>
            </div>
          )
        };
      default:
        return null;
    }
  };

  const selectedContent = getSelectedSectionContent();

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Installation Planning"
          description="Planning and executing electrical installation projects"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-10">
          <SectionGroup 
            number="1" 
            title="Project Planning" 
            sections={section1}
            onStudy={handleStudy}
          />
          
          <SectionGroup 
            number="2" 
            title="Design and Compliance" 
            sections={section2}
            onStudy={handleStudy}
          />
          
          <SectionGroup 
            number="3" 
            title="Implementation and Quality Control" 
            sections={section3}
            onStudy={handleStudy}
          />
          
          {selectedSection && selectedContent && (
            <div id="content-section" className="pt-4">
              <LessonContent title={selectedContent.title}>
                {selectedContent.content}
              </LessonContent>
            </div>
          )}
          
          <Card className="bg-[#22251e] border-[#FFC900]/20 p-6">
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Knowledge Assessment</h2>
            <p className="text-[#FFC900]/80 mb-6">
              Test your understanding of installation planning principles with this assessment. 
              The quiz covers key aspects of project planning, technical design, compliance requirements, 
              and quality control in electrical installations.
            </p>
            <SafetyQuiz 
              unitId="201"
              questionsToShow={5}
              timeLimit={300}
            />
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default InstallationPlanningPage;
