
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Battery, GraduationCap, Settings, Zap } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";

const EVInfrastructurePage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/specialisations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="EV Infrastructure"
          description="Design and install electric vehicle charging systems and infrastructure"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Battery className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Systems</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Charging Stations</li>
                    <li>• Power Distribution Units</li>
                    <li>• Smart Load Management</li>
                    <li>• Monitoring Systems</li>
                    <li>• Grid Integration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Settings className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Technical Skills</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• EV Charging Standards</li>
                    <li>• Power Requirements</li>
                    <li>• Network Integration</li>
                    <li>• Safety Regulations</li>
                    <li>• Load Balancing</li>
                  </ul>
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
                      <p className="text-[#FFC900]/70">£32,000 - £38,000</p>
                    </div>
                    <div>
                      <h4 className="text-[#FFC900] font-medium">Mid-Level (3-5 years)</h4>
                      <p className="text-[#FFC900]/70">£40,000 - £55,000</p>
                    </div>
                    <div>
                      <h4 className="text-[#FFC900] font-medium">Senior/Specialist</h4>
                      <p className="text-[#FFC900]/70">£55,000 - £70,000+</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Work Environments</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Commercial Sites</li>
                    <li>• Residential Properties</li>
                    <li>• Public Charging Stations</li>
                    <li>• Fleet Depots</li>
                    <li>• Service Stations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-[#FFC900] text-2xl font-medium mt-8 mb-4">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResourceCard
            title="Commercial Fleet Charging"
            description="Installation of a smart charging system for a 50-vehicle commercial fleet, including load management and monitoring systems."
            icon={<Battery className="h-6 w-6 text-[#FFC900]" />}
            onClick={() => navigate('/electricians/specialisations/ev/case-studies/fleet-charging')}
          />
          
          <ResourceCard
            title="Public Charging Hub"
            description="Development of a multi-point rapid charging hub with integrated renewable energy and battery storage."
            icon={<Zap className="h-6 w-6 text-[#FFC900]" />}
            onClick={() => navigate('/electricians/specialisations/ev/case-studies/charging-hub')}
          />
        </div>

        <h2 className="text-[#FFC900] text-2xl font-medium mt-8 mb-4">Find Jobs</h2>
        <Card className="bg-[#22251e] border-[#FFC900]/20">
          <CardContent className="pt-6">
            <h3 className="text-[#FFC900] text-xl font-medium mb-4">Job Boards</h3>
            <div className="space-y-4 md:space-y-0 md:flex md:gap-4">
              <Button
                className="w-full md:w-auto"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://www.totaljobs.com/jobs/ev-charging-installer', '_blank');
                }}
              >
                Total Jobs <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="w-full md:w-auto"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://www.indeed.co.uk/EV-Charging-Installation-jobs', '_blank');
                }}
              >
                Indeed UK <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="w-full md:w-auto"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://www.reed.co.uk/jobs/ev-charging-installer', '_blank');
                }}
              >
                Reed <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default EVInfrastructurePage;
