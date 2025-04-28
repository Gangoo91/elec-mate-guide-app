
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Robot, Network, GraduationCap, Factory } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";

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
          description="Specialize in PLC programming, SCADA systems, and robotics integration"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Robot className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Systems</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• PLC Systems</li>
                    <li>• SCADA Integration</li>
                    <li>• Robotics Control</li>
                    <li>• Motion Control</li>
                    <li>• Industrial Networks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Network className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Technical Skills</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• PLC Programming</li>
                    <li>• HMI Development</li>
                    <li>• Network Configuration</li>
                    <li>• Robot Programming</li>
                    <li>• System Integration</li>
                  </ul>
                  <Button
                    className="mt-4"
                    variant="outline"
                    onClick={() => window.open('https://www.siemens.com/global/en/products/automation/training.html', '_blank')}
                  >
                    Siemens Training Info <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Salary Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[#FFC900] font-medium">Entry Level</h4>
                      <p className="text-[#FFC900]/70">£30,000 - £35,000</p>
                    </div>
                    <div>
                      <h4 className="text-[#FFC900] font-medium">Mid-Level (3-5 years)</h4>
                      <p className="text-[#FFC900]/70">£40,000 - £55,000</p>
                    </div>
                    <div>
                      <h4 className="text-[#FFC900] font-medium">Senior/Specialist</h4>
                      <p className="text-[#FFC900]/70">£55,000 - £75,000+</p>
                    </div>
                    <Button
                      className="w-full mt-2"
                      variant="outline"
                      onClick={() => window.open('https://www.checkasalary.co.uk/salary/automation-engineer', '_blank')}
                    >
                      Latest Salary Data <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Factory className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Career Opportunities</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Automation Engineer</li>
                    <li>• PLC Programmer</li>
                    <li>• SCADA Developer</li>
                    <li>• Systems Integrator</li>
                    <li>• Robotics Specialist</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-[#FFC900] text-2xl font-medium mt-8 mb-4">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResourceCard
            title="Manufacturing Process Automation"
            description="Complete automation retrofit of a food processing facility resulting in 35% increased efficiency and improved safety standards."
            icon={<Factory className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/electricians/specialisations/automation/case-studies/manufacturing"
          />
          
          <ResourceCard
            title="Warehouse Automation Project"
            description="Implementation of AGV systems and robotic picking stations in a distribution center, achieving 45% reduction in processing time."
            icon={<Robot className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/electricians/specialisations/automation/case-studies/warehouse"
          />
        </div>

        <h2 className="text-[#FFC900] text-2xl font-medium mt-8 mb-4">Find Jobs</h2>
        <Card className="bg-[#22251e] border-[#FFC900]/20">
          <CardContent className="pt-6">
            <h3 className="text-[#FFC900] text-xl font-medium mb-4">Job Boards</h3>
            <div className="space-y-4">
              <Button
                className="w-full md:w-auto"
                variant="outline"
                onClick={() => window.open('https://www.totaljobs.com/jobs/automation-engineer', '_blank')}
              >
                Total Jobs <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="w-full md:w-auto ml-0 md:ml-2"
                variant="outline"
                onClick={() => window.open('https://www.indeed.co.uk/Industrial-Automation-Engineer-jobs', '_blank')}
              >
                Indeed UK <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="w-full md:w-auto ml-0 md:ml-2"
                variant="outline"
                onClick={() => window.open('https://uk.linkedin.com/jobs/automation-engineer-jobs', '_blank')}
              >
                LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default IndustrialAutomationPage;
