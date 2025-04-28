
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Ship, Wrench, GraduationCap, Anchor } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";

const MarineOffshorePage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/specialisations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Marine & Offshore"
          description="Work on electrical systems for ships, oil rigs, and offshore installations"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Ship className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Systems</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Marine Power Generation</li>
                    <li>• Navigation Systems</li>
                    <li>• Emergency Power Systems</li>
                    <li>• Communication Equipment</li>
                    <li>• Lighting Systems</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Wrench className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Required Skills</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Marine Electrical Certification</li>
                    <li>• Maritime Regulations</li>
                    <li>• Corrosion Protection</li>
                    <li>• Power Distribution</li>
                    <li>• Safety Systems</li>
                  </ul>
                  <Button
                    className="mt-4"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open('https://www.maritimeuk.org/careers/careers-maritime/', '_blank');
                    }}
                  >
                    Maritime Careers Info <ExternalLink className="ml-2 h-4 w-4" />
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
                      <p className="text-[#FFC900]/70">£35,000 - £40,000</p>
                    </div>
                    <div>
                      <h4 className="text-[#FFC900] font-medium">Mid-Level (3-5 years)</h4>
                      <p className="text-[#FFC900]/70">£45,000 - £65,000</p>
                    </div>
                    <div>
                      <h4 className="text-[#FFC900] font-medium">Senior/Specialist</h4>
                      <p className="text-[#FFC900]/70">£65,000 - £85,000+</p>
                    </div>
                    <Button
                      className="w-full mt-2"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://www.checkasalary.co.uk/salary/marine-electrician', '_blank');
                      }}
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
                <Anchor className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Work Environments</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Commercial Ships</li>
                    <li>• Oil Rigs</li>
                    <li>• Offshore Wind Farms</li>
                    <li>• Port Facilities</li>
                    <li>• Naval Vessels</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-[#FFC900] text-2xl font-medium mt-8 mb-4">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResourceCard
            title="Cruise Ship Retrofit"
            description="Complete electrical system upgrade for a luxury cruise liner, including power distribution and smart systems integration."
            icon={<Ship className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/electricians/specialisations/marine/case-studies/cruise-ship"
          />
          
          <ResourceCard
            title="Offshore Wind Platform"
            description="Installation and commissioning of electrical systems for an offshore wind farm maintenance platform."
            icon={<Anchor className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/electricians/specialisations/marine/case-studies/wind-platform"
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
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://www.oilandgasjobsearch.com/jobs/marine-electrician', '_blank');
                }}
              >
                Oil & Gas Job Search <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="w-full md:w-auto ml-0 md:ml-2"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://www.maritimejobs.com/jobs/marine-electrical', '_blank');
                }}
              >
                Maritime Jobs <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="w-full md:w-auto ml-0 md:ml-2"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://www.indeed.co.uk/Marine-Electrician-jobs', '_blank');
                }}
              >
                Indeed UK <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default MarineOffshorePage;
