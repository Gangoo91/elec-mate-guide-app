import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const DataCenterPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/specialisations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Data Center Power"
          description="Specialise in power distribution and backup systems for data centers"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Systems</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• UPS Systems</li>
                <li>• Power Distribution Units</li>
                <li>• Generator Systems</li>
                <li>• Cooling Infrastructure</li>
                <li>• Monitoring Systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Technical Skills</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Power System Design</li>
                <li>• Energy Efficiency</li>
                <li>• Backup Systems</li>
                <li>• Monitoring & Control</li>
                <li>• Emergency Response</li>
              </ul>
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => window.open('https://www.datacenterdynamics.com/en/training/', '_blank')}
              >
                Data Center Training <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Career Paths</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Data Center Technician</li>
                <li>• Critical Systems Engineer</li>
                <li>• Infrastructure Manager</li>
                <li>• Operations Specialist</li>
                <li>• Facilities Engineer</li>
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
                  onClick={() => window.open('https://www.indeed.co.uk/Data-Center-Electrician-jobs', '_blank')}
                >
                  Indeed UK <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.linkedin.com/jobs/data-center-technician-jobs', '_blank')}
                >
                  LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.technojobs.co.uk/jobs/data-center', '_blank')}
                >
                  TechnoJobs <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default DataCenterPage;
