
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { PoundSterling, TrendingUp, Package, BarChart } from 'lucide-react';
import BackButton from "@/components/navigation/BackButton";

const PricingPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/electricians/toolbox-talk');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-6">
        <BackButton customAction={handleBackClick} />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFC900] mb-4">
            Live Material Pricing
          </h1>
          <p className="text-[#FFC900]/80 max-w-2xl mx-auto">
            Stay updated with current market prices, trends, and cost analysis tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <PoundSterling className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Cable Pricing</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Twin and Earth Cable Rates</li>
                <li>• SWA Cable Pricing</li>
                <li>• Data Cable Costs</li>
                <li>• Specialist Cable Pricing</li>
                <li>• Bulk Purchase Discounts</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Market Trends</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Price Fluctuations</li>
                <li>• Supply Chain Updates</li>
                <li>• Future Price Predictions</li>
                <li>• Regional Variations</li>
                <li>• Market Analysis</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Package className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Equipment Costs</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Consumer Units</li>
                <li>• Circuit Protection Devices</li>
                <li>• Testing Equipment</li>
                <li>• Installation Tools</li>
                <li>• Lighting Systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BarChart className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Cost Analysis</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Project Cost Calculators</li>
                <li>• Material Cost Comparisons</li>
                <li>• Labor Rate Guidelines</li>
                <li>• Overhead Calculations</li>
                <li>• Profit Margin Tools</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Supplier Information</h2>
              <div className="space-y-4 text-[#FFC900]/80">
                <p>Key considerations for material sourcing:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Compare supplier prices and terms</li>
                  <li>Check stock availability</li>
                  <li>Review delivery options and costs</li>
                  <li>Understand warranty terms</li>
                  <li>Consider supplier reliability</li>
                  <li>Look for trade account benefits</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default PricingPage;
