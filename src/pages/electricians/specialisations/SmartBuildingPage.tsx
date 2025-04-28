
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building, Lightbulb, Network, Shield, PoundSterling, GraduationCap } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Building className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Systems</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Building Management Systems (BMS)</li>
                    <li>• Smart Lighting Control</li>
                    <li>• HVAC Integration</li>
                    <li>• Access Control Systems</li>
                    <li>• Energy Management Systems</li>
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
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <PoundSterling className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Salary Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[#FFC900] font-medium">Entry Level</h4>
                      <p className="text-[#FFC900]/70">£28,000 - £32,000</p>
                    </div>
                    <div>
                      <h4 className="text-[#FFC900] font-medium">Mid-Level (3-5 years)</h4>
                      <p className="text-[#FFC900]/70">£35,000 - £45,000</p>
                    </div>
                    <div>
                      <h4 className="text-[#FFC900] font-medium">Senior/Specialist</h4>
                      <p className="text-[#FFC900]/70">£45,000 - £65,000+</p>
                    </div>
                    <Button
                      className="w-full mt-2"
                      variant="outline"
                      onClick={() => window.open('https://www.checkasalary.co.uk/salary/smart-building-engineer', '_blank')}
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
                <GraduationCap className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Career Opportunities</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Smart Building Technician</li>
                    <li>• BMS Engineer</li>
                    <li>• Systems Integration Specialist</li>
                    <li>• Smart Home Installer</li>
                    <li>• IoT Solutions Architect</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-[#FFC900] text-2xl font-medium mt-8 mb-4">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResourceCard
            title="Smart Office Automation"
            description="A comprehensive smart building installation for a multi-floor corporate headquarters in central London, achieving 34% energy savings."
            icon={<Building className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/electricians/specialisations/smart-building/case-studies/office-automation"
          />
          
          <ResourceCard
            title="Smart Hotel Systems"
            description="Integration of room automation and energy management systems for a 240-room luxury hotel, enhancing guest experience while reducing operational costs."
            icon={<Lightbulb className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/electricians/specialisations/smart-building/case-studies/hotel-systems"
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
                onClick={() => window.open('https://www.totaljobs.com/jobs/smart-building-technician', '_blank')}
              >
                Total Jobs <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="w-full md:w-auto ml-0 md:ml-2"
                variant="outline"
                onClick={() => window.open('https://www.indeed.co.uk/Smart-Building-Technology-jobs', '_blank')}
              >
                Indeed UK <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="w-full md:w-auto ml-0 md:ml-2"
                variant="outline"
                onClick={() => window.open('https://uk.linkedin.com/jobs/smart-building-jobs', '_blank')}
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

export default SmartBuildingPage;
