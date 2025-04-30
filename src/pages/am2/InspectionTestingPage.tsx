
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Clipboard } from "lucide-react";

const InspectionTestingPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/am2');
  };

  const sections = [
    {
      title: "Initial Verification",
      description: "Procedures for carrying out initial verification of electrical installations"
    },
    {
      title: "Continuity Testing",
      description: "Methods for testing continuity of protective conductors and ring final circuits"
    },
    {
      title: "Insulation Resistance",
      description: "Techniques for measuring insulation resistance correctly"
    },
    {
      title: "Documentation",
      description: "Completing electrical installation certificates and documentation"
    }
  ];

  const testEquipment = [
    "Low resistance ohmmeter",
    "Insulation resistance tester",
    "Earth fault loop impedance tester",
    "RCD tester",
    "Voltage indicator"
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="AM2 Inspection & Testing"
          description="Complete guidance for the testing and inspection component"
          customBackAction={handleBackClick}
        />
        
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Clipboard className="h-10 w-10 text-[#FFC900]" />
            <div>
              <h2 className="text-2xl font-bold text-[#FFC900]">Inspection & Testing Component</h2>
              <p className="text-[#FFC900]/70">
                This unit covers the comprehensive testing procedures required to verify that an electrical 
                installation is safe and complies with BS 7671 regulations.
              </p>
            </div>
          </div>
          
          <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6 mb-8">
            <h3 className="text-[#FFC900] font-medium text-lg mb-4">Required Test Equipment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testEquipment.map((equipment, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FFC900]"></span>
                  <span className="text-[#FFC900]/70">{equipment}</span>
                </div>
              ))}
            </div>
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
          <h3 className="text-[#FFC900] font-medium text-lg mb-4">Testing Sequence</h3>
          <ol className="list-decimal list-inside text-[#FFC900]/70 space-y-3">
            <li>Visual inspection before any testing begins</li>
            <li>Verify that circuits are dead before proceeding</li>
            <li>Test continuity of protective conductors</li>
            <li>Test continuity and polarity of ring final circuits</li>
            <li>Measure insulation resistance</li>
            <li>Test polarity of circuits</li>
            <li>Measure earth fault loop impedance</li>
            <li>Test RCD operation</li>
            <li>Complete documentation</li>
          </ol>
        </div>
      </div>
    </MainLayout>
  );
};

export default InspectionTestingPage;
