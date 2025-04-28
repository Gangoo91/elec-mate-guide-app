import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const HighVoltagePage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/specialisations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="High Voltage"
          description="Work with high voltage installations and power distribution networks"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Areas</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• HV Switchgear</li>
                <li>• Protection Systems</li>
                <li>• Transformers</li>
                <li>• Cable Systems</li>
                <li>• Network Design</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Required Skills</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• HV Safety Management</li>
                <li>• Protection Coordination</li>
                <li>• System Design</li>
                <li>• Fault Analysis</li>
                <li>• Testing & Commissioning</li>
              </ul>
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => window.open('https://www.citb.co.uk/courses-and-qualifications/', '_blank')}
              >
                HV Training Courses <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Work Settings</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Power Stations</li>
                <li>• Substations</li>
                <li>• Industrial Plants</li>
                <li>• Transmission Networks</li>
                <li>• Renewable Energy Facilities</li>
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
                  onClick={() => window.open('https://www.indeed.co.uk/High-Voltage-Electrician-jobs', '_blank')}
                >
                  Indeed UK <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.totaljobs.com/jobs/hv-electrician', '_blank')}
                >
                  Total Jobs <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.reed.co.uk/jobs/high-voltage-engineer', '_blank')}
                >
                  Reed UK <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default HighVoltagePage;
