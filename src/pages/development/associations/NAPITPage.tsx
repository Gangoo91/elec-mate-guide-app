
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const NAPITPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/associations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="NAPIT"
          description="National Association of Professional Inspectors and Testers"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">About NAPIT</h3>
              <p className="text-[#FFC900]/70 mb-4">
                NAPIT is a government-approved membership scheme operator that sets industry standards
                for electrical and other building services installers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Membership Requirements</h3>
              <ul className="space-y-2">
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Relevant qualifications and experience
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Public liability insurance
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Regular assessment of work quality
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Compliance with NAPIT's code of practice
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
                  Technical support helpline
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Professional certification and credentials
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Insurance schemes and discounts
                </li>
                <li className="text-[#FFC900]/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                  Regular industry updates and newsletters
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Contact Information</h3>
              <div className="space-y-2">
                <p className="text-[#FFC900]/70">Phone: 0345 543 0330</p>
                <p className="text-[#FFC900]/70">Email: info@napit.org.uk</p>
                <p className="text-[#FFC900]/70">Website: www.napit.org.uk</p>
                <Button
                  className="mt-4"
                  variant="outline"
                  onClick={() => window.open('https://www.napit.org.uk', '_blank')}
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

export default NAPITPage;
