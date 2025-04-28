
import React from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FinancialManagementPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/business');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Financial Management"
          description="Essential financial management practices for electrical contractors"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Bookkeeping and Accounting</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Track income and expenses</li>
                <li>• Maintain organized financial records</li>
                <li>• Use accounting software</li>
                <li>• Regular financial reporting</li>
                <li>• Monitor profit margins</li>
              </ul>
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => window.open('https://www.gov.uk/self-employed', '_blank')}
              >
                Self-Employment Guide <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Tax Compliance</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Self-assessment tax returns</li>
                <li>• VAT returns (if registered)</li>
                <li>• National Insurance contributions</li>
                <li>• Keep records for HMRC</li>
                <li>• Tax-deductible expenses</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Cash Flow Management</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Invoice management and tracking</li>
                <li>• Credit control procedures</li>
                <li>• Cash flow forecasting</li>
                <li>• Managing supplier payments</li>
                <li>• Emergency fund maintenance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Investment Planning</h3>
              <ul className="space-y-3 text-[#FFC900]/70">
                <li>• Equipment investment strategy</li>
                <li>• Business expansion planning</li>
                <li>• Retirement planning</li>
                <li>• Risk management</li>
                <li>• Return on investment analysis</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default FinancialManagementPage;
