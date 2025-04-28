
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Book, GraduationCap } from "lucide-react";
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
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#FFC900] text-xl font-medium">Certifications & Training</h3>
                <Link to="/certifications">
                  <Button variant="outline" size="sm">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    View Certification Paths
                  </Button>
                </Link>
              </div>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• PLC Programming (Siemens SIMATIC, Allen Bradley)</li>
                <li>• SCADA Systems Certification</li>
                <li>• Industrial Network Protocols (Profibus, Modbus)</li>
                <li>• Automation Safety Standards</li>
                <li>• CompEx for Hazardous Areas</li>
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
                <li>• Edge Computing in Manufacturing</li>
                <li>• Predictive Maintenance Systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Free Learning Resources</h3>
              <div className="space-y-4">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.plcacademy.com/plc-training-for-beginners/', '_blank')}
                >
                  PLC Academy - Free PLC Training <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://automation.isa.org/free-resources/', '_blank')}
                >
                  ISA Free Resources <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.myopenplc.com/', '_blank')}
                >
                  OpenPLC Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Case Studies</h3>
              <div className="space-y-4">
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Automotive Manufacturing</h4>
                  <p className="text-[#FFC900]/70 mb-2">Implementation of robotic assembly line with PLC control and SCADA monitoring.</p>
                  <ul className="text-[#FFC900]/70 list-disc pl-4">
                    <li>50% increase in production efficiency</li>
                    <li>90% reduction in quality defects</li>
                    <li>Real-time monitoring and control</li>
                  </ul>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Food & Beverage</h4>
                  <p className="text-[#FFC900]/70 mb-2">Modernization of batch processing system with Industry 4.0 integration.</p>
                  <ul className="text-[#FFC900]/70 list-disc pl-4">
                    <li>30% reduction in downtime</li>
                    <li>Improved product consistency</li>
                    <li>Enhanced traceability</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Career Paths & Salary Information</h3>
              <div className="space-y-4">
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Entry Level Automation Technician</h4>
                  <p className="text-[#FFC900]/70">£25,000 - £32,000</p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">PLC Programmer</h4>
                  <p className="text-[#FFC900]/70">£35,000 - £45,000</p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Senior Automation Engineer</h4>
                  <p className="text-[#FFC900]/70">£45,000 - £65,000</p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Lead Systems Integrator</h4>
                  <p className="text-[#FFC900]/70">£60,000 - £80,000+</p>
                </div>
              </div>
              <small className="block mt-4 text-[#FFC900]/50">*Salaries vary by location, experience, and specific industry</small>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default IndustrialAutomationPage;
