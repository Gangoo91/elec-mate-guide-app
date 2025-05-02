
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Book, Lightbulb, Cable, Wrench, FileText } from "lucide-react";
import EALContentSection from "@/components/units/EALContentSection";

const ElectricalInstallationUnitPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/eal/level-2');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-16">
        <PageHeader 
          title="Electrical Installation Technology"
          description="Core principles and methods for electrical installations"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 space-y-6">
            <EALContentSection 
              title="Learning Overview" 
              icon={<Book className="h-5 w-5" />}
            >
              <div className="prose prose-amber max-w-none text-[#FFC900]/80">
                <p className="mb-4">
                  This unit covers the essential knowledge and skills required for electrical installation work. 
                  You'll learn about installation methods, circuit principles, and safety requirements.
                </p>
                <p>
                  The content is organized into focused sections to make learning easier and more effective.
                </p>
              </div>
            </EALContentSection>
            
            <EALContentSection 
              title="Key Topics" 
              icon={<Lightbulb className="h-5 w-5" />}
            >
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-[#FFC900]/10 p-2 rounded-md mr-3">
                    <Cable className="h-5 w-5 text-[#FFC900]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#FFC900]">Wiring Systems</h4>
                    <p className="text-sm text-[#FFC900]/70">Different cable types, containment methods, and connection techniques</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#FFC900]/10 p-2 rounded-md mr-3">
                    <Wrench className="h-5 w-5 text-[#FFC900]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#FFC900]">Installation Methods</h4>
                    <p className="text-sm text-[#FFC900]/70">Procedures for installing circuits in domestic and commercial settings</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#FFC900]/10 p-2 rounded-md mr-3">
                    <FileText className="h-5 w-5 text-[#FFC900]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#FFC900]">Regulations</h4>
                    <p className="text-sm text-[#FFC900]/70">Key regulations and standards applicable to installation work</p>
                  </div>
                </li>
              </ul>
            </EALContentSection>
          </div>
          
          <div className="lg:col-span-1">
            <EALContentSection title="Learning Resources">
              <div className="space-y-3">
                <div className="p-3 bg-[#FFC900]/5 rounded-md border border-[#FFC900]/10 hover:border-[#FFC900]/20 transition-colors cursor-pointer">
                  <h4 className="font-medium text-[#FFC900]">Study Guide</h4>
                  <p className="text-sm text-[#FFC900]/70 mt-1">Comprehensive notes and explanations</p>
                </div>
                
                <div className="p-3 bg-[#FFC900]/5 rounded-md border border-[#FFC900]/10 hover:border-[#FFC900]/20 transition-colors cursor-pointer">
                  <h4 className="font-medium text-[#FFC900]">Practice Questions</h4>
                  <p className="text-sm text-[#FFC900]/70 mt-1">Test your understanding with interactive quizzes</p>
                </div>
                
                <div className="p-3 bg-[#FFC900]/5 rounded-md border border-[#FFC900]/10 hover:border-[#FFC900]/20 transition-colors cursor-pointer">
                  <h4 className="font-medium text-[#FFC900]">Video Tutorials</h4>
                  <p className="text-sm text-[#FFC900]/70 mt-1">Visual demonstrations of installation techniques</p>
                </div>
              </div>
            </EALContentSection>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ElectricalInstallationUnitPage;
