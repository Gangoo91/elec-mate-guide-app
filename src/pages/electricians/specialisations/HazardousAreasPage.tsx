
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Areas</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Explosion Protection Methods</li>
                <li>• Area Classification</li>
                <li>• Intrinsic Safety Systems</li>
                <li>• Equipment Selection</li>
                <li>• Risk Assessment</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Required Skills</h3>
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
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Industries</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Oil and Gas</li>
                <li>• Chemical Processing</li>
                <li>• Pharmaceutical</li>
                <li>• Mining</li>
                <li>• Paint and Coating Facilities</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default HazardousAreasPage;
