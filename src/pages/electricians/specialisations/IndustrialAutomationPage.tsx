
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const IndustrialAutomationPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/specialisations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Industrial Automation"
          description="Focus on automated manufacturing systems and industrial controls"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Areas</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• PLC Programming and Implementation</li>
                <li>• SCADA Systems</li>
                <li>• Industrial Networks and Protocols</li>
                <li>• Motion Control Systems</li>
                <li>• Industrial Sensors and Actuators</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Required Skills</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• PLC Programming (Siemens, Allen Bradley)</li>
                <li>• Industrial Network Protocols (Profibus, Modbus)</li>
                <li>• HMI Configuration</li>
                <li>• Control Panel Design</li>
                <li>• Troubleshooting Skills</li>
              </ul>
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => window.open('https://www.plcacademy.com/', '_blank')}
              >
                PLC Training Resources <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Career Paths</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Automation Engineer</li>
                <li>• Control Systems Specialist</li>
                <li>• PLC Programmer</li>
                <li>• Systems Integrator</li>
                <li>• Industrial Maintenance Technician</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default IndustrialAutomationPage;
