
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const TechnicalDocumentationPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Technical Documentation"
          description="Creating and maintaining technical documentation for electrical systems"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Purpose and Types of Technical Documentation">
            <div className="space-y-4">
              <p>
                Technical documentation serves as the formal record of an electrical system's design, installation, 
                operation, and maintenance. Comprehensive documentation is essential for regulatory compliance, 
                effective operation, troubleshooting, and future modifications.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Common Documentation Types</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>System specifications and design documents</li>
                <li>Single-line diagrams and schematics</li>
                <li>Installation and workshop drawings</li>
                <li>Operation and maintenance manuals</li>
                <li>Test reports and certificates</li>
                <li>Risk assessments and method statements</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Documentation Standards">
            <div className="space-y-4">
              <p>
                Standardized approaches to documentation ensure clarity, completeness, and consistency across 
                project documents. Following established conventions and industry standards improves communication 
                and reduces errors.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Documentation Standards</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>BS EN 61082 for electrical documentation</li>
                <li>BS EN 81346 for reference designation systems</li>
                <li>CAD standards and drawing conventions</li>
                <li>Document identification and revision control</li>
                <li>Technical writing guidelines</li>
                <li>Document approval processes</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Documentation Management">
            <div className="space-y-4">
              <p>
                Effective document management ensures that all technical information is properly created, reviewed, 
                stored, and updated throughout a system's lifecycle. Modern documentation management typically 
                employs digital systems for improved accessibility and control.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Management Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Document version control and change management</li>
                <li>Review and approval workflows</li>
                <li>Centralized document repositories</li>
                <li>Access control and security measures</li>
                <li>Regular audits and updates</li>
                <li>Document retention policies</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default TechnicalDocumentationPage;
