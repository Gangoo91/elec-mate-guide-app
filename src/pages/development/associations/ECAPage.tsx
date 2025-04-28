
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ECAPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/associations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="ECA"
          description="Electrical Contractors' Association"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">About ECA</h3>
              <p className="text-[#FFC900]/70 mb-4">
                The ECA is the UK's leading trade association representing electrical, electrotechnical and other engineering contractors.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Membership Requirements</h3>
              <ul className="space-y-2">
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Technical competence assessment
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Business assessment
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Insurance requirements
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Compliance with industry standards
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Member Benefits</h3>
              <ul className="space-y-2">
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Technical advice service
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Business support services
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Training programs and resources
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Industry representation
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Contact Information</h3>
              <div className="space-y-2">
                <p className="text-[#FFC900]/70">Phone: 020 7313 4800</p>
                <p className="text-[#FFC900]/70">Email: info@eca.co.uk</p>
                <Button
                  className="mt-4"
                  variant="outline"
                  onClick={() => window.open('https://www.eca.co.uk', '_blank')}
                >
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ECAPage;
