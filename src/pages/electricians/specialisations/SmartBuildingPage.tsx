
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const SmartBuildingPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/specialisations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Smart Building Technologies"
          description="Work with building automation and smart home systems"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Systems</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Building Management Systems (BMS)</li>
                <li>• Smart Lighting Control</li>
                <li>• HVAC Integration</li>
                <li>• Access Control Systems</li>
                <li>• Energy Management Systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Technical Skills</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• BMS Programming</li>
                <li>• IoT Device Integration</li>
                <li>• Network Configuration</li>
                <li>• System Commissioning</li>
                <li>• Cyber Security Awareness</li>
              </ul>
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => window.open('https://www.knx.org/knx-en/for-professionals/training/', '_blank')}
              >
                KNX Training Info <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Career Opportunities</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Smart Building Technician</li>
                <li>• BMS Engineer</li>
                <li>• Systems Integration Specialist</li>
                <li>• Smart Home Installer</li>
                <li>• IoT Solutions Architect</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default SmartBuildingPage;
