
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Shield, GraduationCap, Factory } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";

const HazardousAreasPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/specialisations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Hazardous Areas"
          description="Specialise in electrical installations for explosive and hazardous environments"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Areas</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Explosion Protection Methods</li>
                    <li>• Area Classification</li>
                    <li>• Intrinsic Safety Systems</li>
                    <li>• Equipment Selection</li>
                    <li>• Risk Assessment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-[#FFC900] flex-shrink-0" />
                <div>
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Technical Skills</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• CompEx Certification</li>
                    <li>• ATEX/IECEx Standards</li>
                    <li>• Hazardous Area Documentation</li>
                    <li>• Ex Equipment Maintenance</li>
                    <li>• Safety Management Systems</li>
                  </ul>
                  <Button
                    className="mt-4"
                    variant="outline"
                    onClick={() => window.open('https://www.compex.org.uk/', '_blank')}
                  >
                    CompEx Training Info <ExternalLink className="ml-2 h-4 w-4" />
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
                      <p className="text-[#FFC900]/70">£32,000 - £38,000</p>
                    </div>
                    <div>
                      <h4 className="text-[#FFC900] font-medium">Mid-Level (3-5 years)</h4>
                      <p className="text-[#FFC900]/70">£45,000 - £60,000</p>
                    </div>
                    <div>
                      <h4 className="text-[#FFC900] font-medium">Senior/Specialist</h4>
                      <p className="text-[#FFC900]/70">£60,000 - £80,000+</p>
                    </div>
                    <Button
                      className="w-full mt-2"
                      variant="outline"
                      onClick={() => window.open('https://www.checkasalary.co.uk/salary/hazardous-area-electrician', '_blank')}
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
                  <h3 className="text-[#FFC900] text-xl font-medium mb-4">Industries</h3>
                  <ul className="space-y-3 text-[#FFC900]/70">
                    <li>• Oil and Gas</li>
                    <li>• Chemical Processing</li>
                    <li>• Pharmaceutical</li>
                    <li>• Mining</li>
                    <li>• Paint and Coating Facilities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-[#FFC900] text-2xl font-medium mt-8 mb-4">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResourceCard
            title="Chemical Plant Safety Systems"
            description="Implementation of explosion-proof electrical systems in a chemical processing facility, ensuring compliance with ATEX directives."
            icon={<Shield className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/electricians/specialisations/hazardous/case-studies/chemical-plant"
          />
          
          <ResourceCard
            title="Offshore Platform Installation"
            description="Design and installation of intrinsically safe systems for an offshore oil platform, meeting IECEx standards."
            icon={<Zap className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/electricians/specialisations/hazardous/case-studies/offshore-platform"
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
                onClick={() => window.open('https://www.oilandgasjobsearch.com/jobs/hazardous-area-electrician', '_blank')}
              >
                Oil & Gas Job Search <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="w-full md:w-auto ml-0 md:ml-2"
                variant="outline"
                onClick={() => window.open('https://www.indeed.co.uk/Hazardous-Area-Electrician-jobs', '_blank')}
              >
                Indeed UK <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                className="w-full md:w-auto ml-0 md:ml-2"
                variant="outline"
                onClick={() => window.open('https://www.totaljobs.com/jobs/hazardous-area-electrician', '_blank')}
              >
                Total Jobs <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default HazardousAreasPage;

