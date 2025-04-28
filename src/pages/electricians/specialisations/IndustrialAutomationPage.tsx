
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Book } from "lucide-react";
import { Link } from "react-router-dom";

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
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Industry Trends</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Industry 4.0 Integration</li>
                <li>• Industrial Internet of Things (IIoT)</li>
                <li>• Digital Twin Technology</li>
                <li>• AI and Machine Learning in Automation</li>
                <li>• Cybersecurity for Industrial Systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Required Certifications</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• PLC Programming (Siemens, Allen Bradley)</li>
                <li>• Industrial Network Protocols</li>
                <li>• HMI Configuration</li>
                <li>• Control Panel Design</li>
                <li>• Troubleshooting Skills</li>
              </ul>
              <div className="mt-4 flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => window.open('https://www.plcacademy.com/', '_blank')}
                >
                  PLC Training Resources <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Link to="/certifications">
                  <Button variant="outline">
                    <Book className="mr-2 h-4 w-4" />
                    View Certification Paths
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Salary Information</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Entry Level: £28,000 - £35,000</li>
                <li>• Mid Level: £35,000 - £45,000</li>
                <li>• Senior Level: £45,000 - £65,000</li>
                <li>• Lead/Manager: £65,000+</li>
                <small className="block mt-2">*Salaries vary by location and experience</small>
              </ul>
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

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Find Jobs</h3>
              <div className="space-y-4">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.reed.co.uk/jobs/industrial-automation-engineer', '_blank')}
                >
                  Reed UK <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.indeed.co.uk/Industrial-Automation-Engineer-jobs', '_blank')}
                >
                  Indeed UK <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://uk.linkedin.com/jobs/industrial-automation-jobs', '_blank')}
                >
                  LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default IndustrialAutomationPage;
