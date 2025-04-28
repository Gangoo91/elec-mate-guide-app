
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const GrowingBusinessPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/business');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Growing Your Business"
          description="Strategies and guidance for expanding your electrical contracting business"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Marketing Strategies</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Build a professional website</li>
                <li>• Utilize social media marketing</li>
                <li>• Get listed on trade directories</li>
                <li>• Implement customer referral programs</li>
                <li>• Network with other contractors and builders</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Pricing Strategies</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Develop competitive pricing models</li>
                <li>• Calculate proper job costing</li>
                <li>• Create service packages</li>
                <li>• Implement dynamic pricing for peak periods</li>
                <li>• Regular market rate analysis</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Team Management</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Recruit qualified electricians</li>
                <li>• Provide ongoing training</li>
                <li>• Implement safety protocols</li>
                <li>• Create employee handbooks</li>
                <li>• Develop career progression paths</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Project Management</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Use project management software</li>
                <li>• Create efficient workflows</li>
                <li>• Implement quality control measures</li>
                <li>• Manage multiple projects effectively</li>
                <li>• Track project profitability</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default GrowingBusinessPage;
