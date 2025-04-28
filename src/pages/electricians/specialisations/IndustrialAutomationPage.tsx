import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const IndustrialAutomationPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/specialisations');
  };

  const navigateToCase = (caseStudy: string) => {
    navigate(`/electricians/specialisations/automation/case-studies/${caseStudy}`);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Industrial Automation"
          description="Specialize in PLC programming, SCADA systems, and robotics integration"
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
                    View All Certifications
                  </Button>
                </Link>
              </div>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• PLC Programming Certification (Siemens, Allen Bradley)</li>
                <li>• SCADA Systems Design & Implementation</li>
                <li>• Industrial Network Communications</li>
                <li>• Robotics Integration Specialist</li>
                <li>• Industrial Safety Systems Certification</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Industry Trends</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Industry 4.0 Integration</li>
                <li>• IIoT (Industrial Internet of Things)</li>
                <li>• Collaborative Robotics</li>
                <li>• Predictive Maintenance Systems</li>
                <li>• Digital Twin Technology</li>
                <li>• Edge Computing in Industrial Control</li>
                <li>• AI in Process Optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Case Studies</h3>
              <div className="space-y-4">
                <div 
                  className="border border-[#FFC900]/20 rounded-lg p-4 hover:bg-[#FFC900]/5 cursor-pointer transition-all"
                  onClick={() => navigateToCase("manufacturing")}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-[#FFC900] mb-2">Manufacturing Process Automation</h4>
                    <ChevronRight className="h-5 w-5 text-[#FFC900]/70" />
                  </div>
                  <p className="text-[#FFC900]/70 mb-2">Complete automation retrofit of a food processing facility.</p>
                  <ul className="text-[#FFC900]/70 list-disc pl-4">
                    <li>35% increase in production efficiency</li>
                    <li>50% reduction in quality control issues</li>
                    <li>Real-time monitoring implementation</li>
                  </ul>
                </div>
                <div 
                  className="border border-[#FFC900]/20 rounded-lg p-4 hover:bg-[#FFC900]/5 cursor-pointer transition-all"
                  onClick={() => navigateToCase("warehouse")}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-[#FFC900] mb-2">Warehouse Automation Project</h4>
                    <ChevronRight className="h-5 w-5 text-[#FFC900]/70" />
                  </div>
                  <p className="text-[#FFC900]/70 mb-2">AGV and robotics implementation for a distribution center.</p>
                  <ul className="text-[#FFC900]/70 list-disc pl-4">
                    <li>Fleet of 12 AGVs with dynamic routing</li>
                    <li>6 robotic picking stations</li>
                    <li>Automated storage and retrieval</li>
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
