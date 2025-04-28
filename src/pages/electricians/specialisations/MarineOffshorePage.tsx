import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Systems</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Marine Power Generation</li>
                <li>• Navigation Systems</li>
                <li>• Emergency Power Systems</li>
                <li>• Communication Equipment</li>
                <li>• Lighting Systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
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
                onClick={() => window.open('https://www.maritimeuk.org/careers/careers-maritime/', '_blank')}
              >
                Maritime Careers Info <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Work Environments</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Commercial Ships</li>
                <li>• Oil Rigs</li>
                <li>• Offshore Wind Farms</li>
                <li>• Port Facilities</li>
                <li>• Naval Vessels</li>
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
                  onClick={() => window.open('https://www.oilandgasjobsearch.com/jobs/marine-electrician', '_blank')}
                >
                  Oil & Gas Job Search <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.maritimejobs.com/jobs/marine-electrical', '_blank')}
                >
                  Maritime Jobs <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.indeed.co.uk/Marine-Electrician-jobs', '_blank')}
                >
                  Indeed UK <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default MarineOffshorePage;
