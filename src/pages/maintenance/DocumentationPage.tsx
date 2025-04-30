
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const DocumentationPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Documentation"
          description="Maintenance records, reports, and documentation procedures"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Importance of Documentation">
            <p className="mb-4 text-[#FFC900]/80">
              Proper documentation is an essential part of any maintenance program. It provides a historical record of
              maintenance activities, supports compliance with regulations, and forms the basis for future
              maintenance planning and improvement.
            </p>
            
            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Benefits of Maintenance Documentation</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li><strong>Regulatory compliance:</strong> Meeting legal requirements for record-keeping</li>
              <li><strong>Historical record:</strong> Tracking equipment performance and maintenance history</li>
              <li><strong>Knowledge transfer:</strong> Preserving information for future maintenance personnel</li>
              <li><strong>Trend analysis:</strong> Identifying recurring issues and patterns</li>
              <li><strong>Warranty validation:</strong> Providing evidence of proper maintenance for warranty claims</li>
              <li><strong>Efficiency improvement:</strong> Analyzing maintenance activities to optimize procedures</li>
              <li><strong>Asset management:</strong> Supporting lifecycle planning and replacement decisions</li>
            </ul>
          </LessonContent>
          
          <LessonContent title="Types of Maintenance Documentation">
            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Essential Documentation Types</h3>
            <ul className="list-disc pl-6 space-y-4 text-[#FFC900]/80">
              <li>
                <strong>Maintenance logs</strong>
                <p>Records of all maintenance activities performed, including date, technician, work performed, parts used, and time spent.</p>
              </li>
              <li>
                <strong>Equipment inventory</strong>
                <p>Detailed listing of all equipment including model numbers, serial numbers, installation dates, and locations.</p>
              </li>
              <li>
                <strong>Maintenance procedures</strong>
                <p>Step-by-step instructions for performing maintenance tasks, including safety precautions and required tools.</p>
              </li>
              <li>
                <strong>Inspection reports</strong>
                <p>Documentation of regular equipment inspections, noting conditions, measurements, and any observations.</p>
              </li>
              <li>
                <strong>Test results</strong>
                <p>Records of electrical tests performed, including insulation resistance, continuity, and functional tests.</p>
              </li>
              <li>
                <strong>Failure reports</strong>
                <p>Details of equipment failures, including symptoms, causes, corrective actions, and preventive measures.</p>
              </li>
              <li>
                <strong>Work orders</strong>
                <p>Formal instructions for maintenance tasks, including scope, priorities, resources, and completion requirements.</p>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Documentation Best Practices</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Use standardized forms and templates for consistent information capture</li>
              <li>Include photographs or diagrams when appropriate</li>
              <li>Ensure documentation is legible, accurate, and complete</li>
              <li>Store records in a secure, accessible system (paper or digital)</li>
              <li>Implement a document retention policy that meets regulatory requirements</li>
              <li>Regularly review and audit documentation for quality and completeness</li>
              <li>Train maintenance personnel on proper documentation practices</li>
            </ul>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default DocumentationPage;
