
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Ship, Zap, WrenchIcon, CheckCircle } from "lucide-react";

const CruiseShipCaseStudy = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/specialisations/marine');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Cruise Ship Electrical Retrofit"
          description="Complete electrical system upgrade for a luxury cruise liner"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20 mb-6">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Ship className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-2">Project Overview</h3>
                  <p className="text-[#FFC900]/70 mb-4">
                    Complete electrical retrofit of a 280-meter luxury cruise liner originally built in 2005, 
                    requiring modernization of all electrical systems while meeting current maritime regulations and efficiency standards.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-[#1a1d17] p-4 rounded-md">
                      <h4 className="text-[#FFC900] font-medium mb-2">Project Duration</h4>
                      <p className="text-[#FFC900]/70">6 months (during scheduled dry dock)</p>
                    </div>
                    <div className="bg-[#1a1d17] p-4 rounded-md">
                      <h4 className="text-[#FFC900] font-medium mb-2">Team Size</h4>
                      <p className="text-[#FFC900]/70">42 marine electrical specialists</p>
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
                  <h3 className="text-[#FFC900] text-xl font-medium mb-2">Systems Upgraded</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Main power generation and distribution (6 generators totaling 64MW capacity)</li>
                    <li>• Emergency power systems with redundant backups</li>
                    <li>• Cabin and public area lighting converted to LED-based systems</li>
                    <li>• Navigation and communication systems modernization</li>
                    <li>• Implementation of intelligent power management for 15% energy savings</li>
                    <li>• Entertainment and passenger service electrical systems</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#22251e] border-[#FFC900]/20 mb-6">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <WrenchIcon className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-2">Technical Challenges</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Working within confined spaces and complex existing infrastructure</li>
                    <li>• Ensuring compliance with IMO maritime regulations and class requirements</li>
                    <li>• Maintaining watertight integrity while routing new cabling</li>
                    <li>• Integrating new digital control systems with legacy equipment</li>
                    <li>• Meeting strict timelines to avoid revenue loss from extended dry dock</li>
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
                    <li>• 18% reduction in fuel consumption through improved electrical efficiency</li>
                    <li>• Enhanced passenger experience with modern lighting and electrical systems</li>
                    <li>• Compliance with all current maritime regulations and safety standards</li>
                    <li>• Extended service life of the vessel by approximately 15 years</li>
                    <li>• Completed on schedule, returning to service without operational delays</li>
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

export default CruiseShipCaseStudy;
