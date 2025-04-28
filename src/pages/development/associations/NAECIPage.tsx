
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const NAECIPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/associations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="NAECI"
          description="National Agreement for the Engineering Construction Industry"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">About NAECI</h3>
              <p className="text-[#FFC900]/70 mb-4">
                The National Agreement for the Engineering Construction Industry (NAECI) is a collective agreement 
                that sets the terms and conditions of employment for workers in the engineering construction industry.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Industry-wide pay rates and conditions
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Working hours and overtime provisions
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Holiday entitlement
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Travel and accommodation allowances
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Benefits</h3>
              <ul className="space-y-2">
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Clear framework for employment terms
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Industry-standard pay rates
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Protected working conditions
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Dispute resolution procedures
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Contact Information</h3>
              <div className="space-y-2">
                <p className="text-[#FFC900]/70">Phone: 020 7799 7000</p>
                <p className="text-[#FFC900]/70">Email: info@ecia.co.uk</p>
                <Button
                  className="mt-4"
                  variant="outline"
                  onClick={() => window.open('https://www.njceci.org.uk', '_blank')}
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

export default NAECIPage;
