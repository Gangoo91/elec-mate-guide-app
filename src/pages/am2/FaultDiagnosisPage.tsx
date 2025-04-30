
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

const FaultDiagnosisPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/am2');
  };

  const sections = [
    {
      title: "Systematic Fault Finding",
      description: "Methodical approaches to identifying electrical faults"
    },
    {
      title: "Common Faults",
      description: "Recognition and diagnosis of common electrical installation faults"
    },
    {
      title: "Fault Rectification", 
      description: "Procedures for safely correcting identified faults"
    },
    {
      title: "Testing After Repair",
      description: "Verification procedures following fault rectification"
    }
  ];

  const commonFaultTypes = [
    { type: "Open Circuit", description: "Break in the circuit preventing current flow" },
    { type: "Short Circuit", description: "Unintended path with low resistance causing excessive current" },
    { type: "Earth Fault", description: "Unintended connection between live conductor and earth" },
    { type: "High Resistance", description: "Poor connections causing voltage drop and heating" }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="AM2 Fault Diagnosis"
          description="Techniques and procedures for identifying and rectifying faults"
          customBackAction={handleBackClick}
        />
        
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Activity className="h-10 w-10 text-[#FFC900]" />
            <div>
              <h2 className="text-2xl font-bold text-[#FFC900]">Fault Diagnosis Component</h2>
              <p className="text-[#FFC900]/70">
                This unit focuses on developing systematic approaches to fault finding and rectification in electrical installations.
                You'll need to demonstrate logical troubleshooting and safe repair procedures.
              </p>
            </div>
          </div>
          
          <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6 mb-8">
            <h3 className="text-[#FFC900] font-medium text-lg mb-4">Common Types of Faults</h3>
            <div className="space-y-4">
              {commonFaultTypes.map((fault, idx) => (
                <div key={idx} className="bg-[#1a1c16] p-3 rounded-md">
                  <h4 className="text-[#FFC900] font-medium mb-1">{fault.type}</h4>
                  <p className="text-[#FFC900]/70 text-sm">{fault.description}</p>
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
          <h3 className="text-[#FFC900] font-medium text-lg mb-4">Fault Finding Methodology</h3>
          <ol className="list-decimal list-inside text-[#FFC900]/70 space-y-3">
            <li>Gather information about the fault</li>
            <li>Identify possible causes</li>
            <li>Perform safe isolation before investigation</li>
            <li>Test and examine circuits systematically</li>
            <li>Identify the cause of the fault</li>
            <li>Plan the repair procedure</li>
            <li>Carry out the repair</li>
            <li>Test the installation after repair</li>
            <li>Record actions taken and outcomes</li>
          </ol>
        </div>
      </div>
    </MainLayout>
  );
};

export default FaultDiagnosisPage;
