
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const PortfolioReviewPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/assessment');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Portfolio Review"
          description="Guidelines for preparing and presenting your portfolio of evidence"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Portfolio Purpose">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Evidence Collection</h3>
              <p className="text-[#FFC900]/80">
                Your portfolio demonstrates your competence across the MOET standards through documented evidence of your work. It shows your journey and development throughout your apprenticeship, providing tangible proof of your skills and knowledge.
              </p>
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Assessment Process</h3>
              <p className="text-[#FFC900]/80">
                Assessors will review your portfolio prior to your practical observation and technical interview. They'll use it to identify areas to focus on during these assessments and to verify your overall competence.
              </p>
            </div>
          </LessonContent>

          <LessonContent title="Required Contents">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Essential Documentation</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Maintenance records and reports from workplace projects</li>
                <li>Risk assessments and method statements you've produced</li>
                <li>Photographs or videos of work completed (with appropriate permissions)</li>
                <li>Witness testimonies from supervisors and colleagues</li>
                <li>Training certificates and qualifications</li>
                <li>Personal reflections on learning and development</li>
                <li>Examples of problem-solving and troubleshooting</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Coverage Requirements</h3>
              <p className="text-[#FFC900]/80">
                Your portfolio should demonstrate competence across all knowledge, skills, and behavioral aspects of the MOET standard. Ensure you have evidence that covers each element of the apprenticeship framework.
              </p>
            </div>
          </LessonContent>

          <LessonContent title="Organization Guidelines">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Structure and Presentation</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Organize evidence logically by knowledge areas or competency units</li>
                <li>Include a clear index and navigation system</li>
                <li>Ensure all documents are legible and professionally presented</li>
                <li>Add brief explanations to contextualize each piece of evidence</li>
                <li>Cross-reference evidence that demonstrates multiple competencies</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Quality Over Quantity</h3>
              <p className="text-[#FFC900]/80">
                Focus on providing high-quality evidence that clearly demonstrates your competence rather than submitting excessive documentation. Each piece should serve a specific purpose in showcasing your skills and knowledge.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Final Checklist</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Ensure all evidence is authentic and attributable to you</li>
                <li>Check for completeness against the MOET standard requirements</li>
                <li>Verify that all confidential information is appropriately redacted</li>
                <li>Include reflective statements about your professional growth</li>
                <li>Have your portfolio reviewed by a mentor before submission</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default PortfolioReviewPage;
