
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Book, GraduationCap } from "lucide-react";

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
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#FFC900] text-xl font-medium">Certifications & Training</h3>
                <Link to="/certifications">
                  <Button variant="outline" size="sm">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    View All Certifications
                  </Button>
                </Link>
              </div>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• MCS (Microgeneration Certification Scheme) Certification</li>
                <li>• Solar PV Design & Installation (EAL/City & Guilds)</li>
                <li>• Energy Storage Systems Qualification</li>
                <li>• Smart Grid Integration Training</li>
                <li>• EV Charging Infrastructure Certification</li>
              </ul>
              <div className="mt-4 p-4 bg-[#FFC900]/10 rounded-lg">
                <p className="text-[#FFC900]">
                  Visit our Certifications page for detailed information about requirements, study materials, and preparation resources.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Industry Trends</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Grid-Scale Energy Storage Integration</li>
                <li>• Hybrid Solar-Wind Systems</li>
                <li>• Smart Inverter Technologies</li>
                <li>• Building-Integrated PV (BIPV)</li>
                <li>• Microgrid Development</li>
                <li>• Green Hydrogen Integration</li>
                <li>• AI in Renewable Energy Systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Free Learning Resources</h3>
              <div className="space-y-4">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.solar-training.org/free-resources/', '_blank')}
                >
                  Solar Training Resources <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.mcscertified.com/learning-resources/', '_blank')}
                >
                  MCS Learning Hub <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => window.open('https://www.renewableenergyhub.co.uk/', '_blank')}
                >
                  Renewable Energy Hub <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Case Studies</h3>
              <div className="space-y-4">
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Commercial Solar Installation</h4>
                  <p className="text-[#FFC900]/70 mb-2">Large-scale solar PV installation for a retail complex.</p>
                  <ul className="text-[#FFC900]/70 list-disc pl-4">
                    <li>250kW system capacity</li>
                    <li>30% reduction in energy costs</li>
                    <li>Battery storage integration</li>
                  </ul>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Community Energy Project</h4>
                  <p className="text-[#FFC900]/70 mb-2">Mixed renewable energy system for a housing development.</p>
                  <ul className="text-[#FFC900]/70 list-disc pl-4">
                    <li>Solar + wind hybrid system</li>
                    <li>Microgrid implementation</li>
                    <li>Smart energy management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Career Paths & Salary Information</h3>
              <div className="space-y-4">
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Solar PV Installer</h4>
                  <p className="text-[#FFC900]/70">£25,000 - £35,000</p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Renewable Energy Systems Designer</h4>
                  <p className="text-[#FFC900]/70">£35,000 - £50,000</p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Project Manager (Renewables)</h4>
                  <p className="text-[#FFC900]/70">£45,000 - £65,000</p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Technical Director</h4>
                  <p className="text-[#FFC900]/70">£60,000 - £80,000+</p>
                </div>
              </div>
              <small className="block mt-4 text-[#FFC900]/50">*Salaries vary by location, experience, and specific industry</small>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default RenewableEnergyPage;
