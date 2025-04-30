
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";

const InstallationPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/am2');
  };

  const sections = [
    {
      title: "Consumer Unit Installation",
      description: "Step-by-step guide to installing and wiring consumer units to industry standards"
    },
    {
      title: "Cable Containment Systems",
      description: "Methods and techniques for proper cable containment installation"
    },
    {
      title: "Circuit Installation", 
      description: "Correct procedures for circuit installation and wiring"
    },
    {
      title: "Termination Techniques",
      description: "Best practices for terminating cables and connections"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="AM2 Installation Unit"
          description="Comprehensive guide to the installation component of the AM2 assessment"
          customBackAction={handleBackClick}
        />
        
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Settings className="h-10 w-10 text-[#FFC900]" />
            <div>
              <h2 className="text-2xl font-bold text-[#FFC900]">Installation Component</h2>
              <p className="text-[#FFC900]/70">
                This unit focuses on the practical installation skills required for the AM2 assessment. 
                You'll need to demonstrate your ability to install electrical components following industry 
                standards and regulations.
              </p>
            </div>
          </div>
          
          <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6 mb-8">
            <h3 className="text-[#FFC900] font-medium text-lg mb-4">Key Installation Requirements</h3>
            <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
              <li>Correctly interpret installation drawings and specifications</li>
              <li>Select appropriate tools and equipment for installation tasks</li>
              <li>Install containment systems to specifications</li>
              <li>Accurately position and fix electrical equipment</li>
              <li>Wire circuits according to BS 7671 regulations</li>
              <li>Ensure all work meets quality standards and specifications</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-[#FFC900] font-medium text-xl mb-2">
                    {section.title}
                  </h3>
                  <p className="text-[#FFC900]/70">
                    {section.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6 mt-8">
          <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Criteria</h3>
          <p className="text-[#FFC900]/70 mb-4">
            During the AM2 assessment, you'll be evaluated on your ability to:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
            <li>Follow health and safety procedures throughout installation</li>
            <li>Complete installation within the allocated time frame</li>
            <li>Install equipment in accordance with specifications</li>
            <li>Ensure all connections are mechanically and electrically sound</li>
            <li>Maintain a clean and organized work area</li>
            <li>Correctly label all circuits and components</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default InstallationPage;
