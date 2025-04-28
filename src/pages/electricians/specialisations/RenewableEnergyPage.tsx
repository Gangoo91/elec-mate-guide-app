import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const RenewableEnergyPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/specialisations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Renewable Energy Systems"
          description="Specialise in solar PV, wind energy, and other renewable technologies"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Areas</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Solar PV system design and installation</li>
                <li>• Wind turbine electrical systems</li>
                <li>• Battery storage solutions</li>
                <li>• Grid connection and integration</li>
                <li>• Energy management systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Required Qualifications</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Level 3 Electrical Qualification</li>
                <li>• MCS Certification</li>
                <li>• Solar PV Installation Course</li>
                <li>• Energy Storage Systems Training</li>
              </ul>
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => window.open('https://mcscertified.com/become-certified/', '_blank')}
              >
                MCS Certification Info <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Career Opportunities</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Renewable Energy Installer</li>
                <li>• Solar PV Designer</li>
                <li>• Energy Systems Consultant</li>
                <li>• Project Manager for Renewable Projects</li>
                <li>• Technical Support Specialist</li>
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
                  onClick={() => window.open('https://www.renewableenergyjobs.com/', '_blank')}
                >
                  Renewable Energy Jobs <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.indeed.co.uk/Renewable-Energy-Electrician-jobs', '_blank')}
                >
                  Indeed UK <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.totaljobs.com/jobs/renewable-energy-electrician', '_blank')}
                >
                  Total Jobs <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default RenewableEnergyPage;
