
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Wind, Zap, ShieldAlert, CheckCircle } from "lucide-react";

const WindPlatformCaseStudy = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/specialisations/marine');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Offshore Wind Platform"
          description="Electrical systems for a North Sea wind farm maintenance platform"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20 mb-6">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Wind className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-2">Project Overview</h3>
                  <p className="text-[#FFC900]/70 mb-4">
                    Complete electrical installation for a new offshore platform designed to support maintenance 
                    operations for a 120-turbine wind farm in the North Sea, located 48km from shore.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-[#1a1d17] p-4 rounded-md">
                      <h4 className="text-[#FFC900] font-medium mb-2">Project Duration</h4>
                      <p className="text-[#FFC900]/70">14 months (including 6 months offshore)</p>
                    </div>
                    <div className="bg-[#1a1d17] p-4 rounded-md">
                      <h4 className="text-[#FFC900] font-medium mb-2">Platform Capacity</h4>
                      <p className="text-[#FFC900]/70">Accommodation for 32 maintenance personnel</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#22251e] border-[#FFC900]/20 mb-6">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-2">Electrical Systems Installed</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Primary power generation (2.4MW diesel generators with 850kW wind turbines)</li>
                    <li>• Marine-grade distribution systems with redundant transformers</li>
                    <li>• Helideck lighting systems meeting aviation requirements</li>
                    <li>• Advanced monitoring and control systems for remote diagnostics</li>
                    <li>• Marine communication systems including satellite uplink</li>
                    <li>• Cathodic protection systems to prevent saltwater corrosion</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#22251e] border-[#FFC900]/20 mb-6">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <ShieldAlert className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-2">Technical Challenges</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Harsh North Sea environmental conditions (salt spray, high winds)</li>
                    <li>• Installation logistics requiring specialized vessels</li>
                    <li>• Designing for extreme reliability with minimal maintenance</li>
                    <li>• Integration with wind farm SCADA systems</li>
                    <li>• Meeting offshore safety and explosion-proof requirements</li>
                    <li>• Weather-dependent work windows requiring flexible scheduling</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-2">Results</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Platform operational with 99.8% electrical system uptime over first year</li>
                    <li>• 40% reduction in maintenance visits due to remote monitoring capabilities</li>
                    <li>• Support infrastructure allowing 25% increase in wind farm operational hours</li>
                    <li>• Zero safety incidents during installation and first operational period</li>
                    <li>• Effective integration with wind farm control and monitoring systems</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default WindPlatformCaseStudy;
