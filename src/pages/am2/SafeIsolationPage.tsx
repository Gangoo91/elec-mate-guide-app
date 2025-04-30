
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

const SafeIsolationPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/am2');
  };

  const sections = [
    {
      title: "Safe Isolation Procedure",
      description: "Step-by-step safe isolation methodology"
    },
    {
      title: "Proving Tools",
      description: "Using and verifying voltage indicators and proving units"
    },
    {
      title: "Locking Off",
      description: "Methods and equipment for securing isolated circuits"
    },
    {
      title: "Safety Documentation",
      description: "Required permits and documentation for safe isolation"
    }
  ];

  const isolationSteps = [
    "Identify the circuit or equipment to be isolated",
    "Inform all affected persons before isolation",
    "Switch off the circuit and lock off the isolation device",
    "Verify that proving device is working on a known live source",
    "Test that the isolated circuit is dead using the proving device",
    "Re-verify proving device on known live source after use",
    "Apply circuit warning notices and barriers as necessary"
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="AM2 Safe Isolation"
          description="Essential procedures for safely isolating electrical circuits"
          customBackAction={handleBackClick}
        />
        
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <ShieldAlert className="h-10 w-10 text-[#FFC900]" />
            <div>
              <h2 className="text-2xl font-bold text-[#FFC900]">Safe Isolation Component</h2>
              <p className="text-[#FFC900]/70">
                This unit focuses on the critical procedures for ensuring electrical circuits are safely isolated 
                before work begins, preventing electrical injuries and fatalities.
              </p>
            </div>
          </div>
          
          <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6 mb-8">
            <h3 className="text-[#FFC900] font-medium text-lg mb-4">Safe Isolation Procedure</h3>
            <ol className="list-decimal list-inside text-[#FFC900]/70 space-y-2">
              {isolationSteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
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
          <h3 className="text-[#FFC900] font-medium text-lg mb-4">Essential Equipment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            <div>
              <h4 className="text-[#FFC900] font-medium mb-2">Voltage Indicator</h4>
              <ul className="list-disc list-inside text-[#FFC900]/70 text-sm">
                <li>Must comply with GS38</li>
                <li>Adequate category rating</li>
                <li>Suitable voltage rating</li>
                <li>Clear indication</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#FFC900] font-medium mb-2">Proving Unit</h4>
              <ul className="list-disc list-inside text-[#FFC900]/70 text-sm">
                <li>Battery powered</li>
                <li>Known voltage output</li>
                <li>Clear indication</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-[#FFC900] font-medium mb-2">Lock-Off Devices</h4>
              <ul className="list-disc list-inside text-[#FFC900]/70 text-sm">
                <li>MCB locks</li>
                <li>Fuse carriers</li>
                <li>Padlocks</li>
                <li>Multi-lock hasps</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-[#FFC900] font-medium mb-2">Warning Notices</h4>
              <ul className="list-disc list-inside text-[#FFC900]/70 text-sm">
                <li>"Danger - Do Not Switch On"</li>
                <li>"Danger - Men Working"</li>
                <li>Circuit identification labels</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SafeIsolationPage;
