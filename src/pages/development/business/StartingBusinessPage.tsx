
import React from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StartingBusinessPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/business');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Starting Your Electrical Business"
          description="Everything you need to know to start your electrical contracting business"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Business Planning</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Create a detailed business plan outlining your services, target market, and financial projections</li>
                <li>• Define your unique selling proposition and competitive advantage</li>
                <li>• Set clear short-term and long-term business goals</li>
                <li>• Research your local market and competition</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Legal Requirements</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Register your business with Companies House</li>
                <li>• Obtain necessary electrical contractor licenses</li>
                <li>• Register for VAT if applicable</li>
                <li>• Understand building regulations and compliance requirements</li>
              </ul>
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => window.open('https://www.gov.uk/set-up-business', '_blank')}
              >
                Visit Gov.UK Business Guide <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Insurance</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Public liability insurance (minimum £2 million recommended)</li>
                <li>• Professional indemnity insurance</li>
                <li>• Employers' liability insurance (if hiring staff)</li>
                <li>• Tools and equipment insurance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Setting Up Business Accounts</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Open a business bank account</li>
                <li>• Set up accounting software for invoicing and expenses</li>
                <li>• Establish relationships with suppliers</li>
                <li>• Create payment terms and policies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default StartingBusinessPage;
