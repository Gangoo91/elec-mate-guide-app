
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
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Maintenance Documentation"
          description="Essential documentation practices for electrical maintenance"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Maintenance Records">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Types of Documentation</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Equipment Records:</strong> Installation dates, specifications, manuals</li>
                <li><strong>Maintenance Logs:</strong> Service history, repairs, replacements</li>
                <li><strong>Inspection Reports:</strong> Findings, recommendations, actions taken</li>
                <li><strong>Test Certificates:</strong> Calibration records, safety certifications</li>
                <li><strong>Asset Management:</strong> Inventory, location, condition tracking</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Documentation Best Practices">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Record Keeping Guidelines</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Use standardized forms and formats</li>
                <li>Include dates, times, and personnel details</li>
                <li>Be specific and detailed in descriptions</li>
                <li>Include measurements and test results</li>
                <li>Maintain proper filing systems</li>
              </ul>

              <h3 className="text-lg font-semibold text-[#FFC900] mt-4">Digital Documentation</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Computerized Maintenance Management Systems (CMMS)</li>
                <li>Digital record keeping and backup</li>
                <li>Electronic work orders and tracking</li>
                <li>Mobile documentation tools</li>
                <li>Data analysis and reporting</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Legal Requirements">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Regulatory Compliance</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Health and Safety documentation requirements</li>
                <li>Electrical regulations compliance records</li>
                <li>Environmental compliance documentation</li>
                <li>Insurance and liability records</li>
                <li>Audit trail maintenance</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default DocumentationPage;
