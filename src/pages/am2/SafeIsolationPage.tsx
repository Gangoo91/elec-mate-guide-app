
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";
import { LearningObjective } from "@/components/units/LearningObjective";
import SectionContent from "@/components/units/SectionContent";

const SafeIsolationPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/am2');
  };

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
          
          <LearningObjective title="Safe Isolation Procedure">
            <ol className="list-decimal list-inside space-y-2">
              <li>Identify the circuit or equipment to be isolated</li>
              <li>Inform all affected persons before isolation</li>
              <li>Switch off the circuit and lock off the isolation device</li>
              <li>Verify that proving device is working on a known live source</li>
              <li>Test that the isolated circuit is dead using the proving device</li>
              <li>Re-verify proving device on known live source after use</li>
              <li>Apply circuit warning notices and barriers as necessary</li>
            </ol>
          </LearningObjective>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6">
                <h3 className="text-[#FFC900] font-medium text-xl mb-2">
                  Proving Tools
                </h3>
                <p className="text-[#FFC900]/70">
                  Using and verifying voltage indicators and proving units is essential for safe work practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6">
                <h3 className="text-[#FFC900] font-medium text-xl mb-2">
                  Locking Off
                </h3>
                <p className="text-[#FFC900]/70">
                  Methods for securing isolated circuits prevent accidental reconnection during work.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6">
                <h3 className="text-[#FFC900] font-medium text-xl mb-2">
                  Safety Documentation
                </h3>
                <p className="text-[#FFC900]/70">
                  Required permits and documentation ensure proper procedures are followed.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6">
                <h3 className="text-[#FFC900] font-medium text-xl mb-2">
                  Essential Equipment
                </h3>
                <p className="text-[#FFC900]/70">
                  Voltage indicators, proving units, and warning notices are required for safe isolation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <LearningObjective title="Safe Isolation Equipment">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            <div>
              <h4 className="text-[#FFC900] font-medium mb-2">Voltage Indicator</h4>
              <ul className="list-disc list-inside text-[#FFC900]/70">
                <li>Must comply with GS38</li>
                <li>Adequate category rating</li>
                <li>Suitable voltage rating</li>
                <li>Clear indication</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#FFC900] font-medium mb-2">Proving Unit</h4>
              <ul className="list-disc list-inside text-[#FFC900]/70">
                <li>Battery powered</li>
                <li>Known voltage output</li>
                <li>Clear indication</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-[#FFC900] font-medium mb-2">Lock-Off Devices</h4>
              <ul className="list-disc list-inside text-[#FFC900]/70">
                <li>MCB locks</li>
                <li>Fuse carriers</li>
                <li>Padlocks</li>
                <li>Multi-lock hasps</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-[#FFC900] font-medium mb-2">Warning Notices</h4>
              <ul className="list-disc list-inside text-[#FFC900]/70">
                <li>"Danger - Do Not Switch On"</li>
                <li>"Danger - Men Working"</li>
                <li>Circuit identification labels</li>
              </ul>
            </div>
          </div>
        </LearningObjective>
        
        <div className="mt-8">
          <SectionContent
            title="Practice Safe Isolation Assessment"
            path="/apprentices/study-materials/city-guilds/am2/safe-isolation/practice"
            description="Test your knowledge with our interactive safe isolation assessment"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default SafeIsolationPage;
