
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MarketProjections = () => {
  const marketVariables = {
    totalMarketSize: 300000,
    segments: {
      apprentices: {
        percentage: 0.20,
        count: 60000,
        monthlyPrice: 2.99,
        yearlyPrice: 29.99,
      },
      electricians: {
        percentage: 0.70,
        count: 210000,
        monthlyPrice: 6.99,
        yearlyPrice: 69.99,
      },
      employers: {
        percentage: 0.10,
        count: 30000,
        monthlyPrice: 49.99,
        yearlyPrice: 499.99,
      }
    },
    projections: {
      yearOne: {
        penetration: 0.01,
        monthlyVsYearlyRatio: 0.7, // 70% choose monthly
        churnRate: 0.15, // 15% annual churn
        acquisitionCostPerUser: 25, // £25 per user
      },
      yearThree: {
        penetration: 0.05,
        monthlyVsYearlyRatio: 0.5, // 50% choose monthly as product matures
        churnRate: 0.10, // 10% annual churn
        acquisitionCostPerUser: 20, // £20 per user as acquisition efficiency improves
      }
    }
  };

  const calculateRevenue = (users: number, segment: any, monthlyRatio: number) => {
    const monthlyUsers = users * monthlyRatio;
    const yearlyUsers = users * (1 - monthlyRatio);
    return (monthlyUsers * segment.monthlyPrice * 12) + (yearlyUsers * segment.yearlyPrice);
  };

  const yearOneUsers = marketVariables.totalMarketSize * marketVariables.projections.yearOne.penetration;
  const yearThreeUsers = marketVariables.totalMarketSize * marketVariables.projections.yearThree.penetration;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 px-4">
      <Card className="bg-[#151812]/60 border-[#FFC900]/20">
        <CardHeader>
          <CardTitle className="text-[#FFC900]">Market Variables</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-[#FFC900] font-semibold mb-2">Total Market Size: {marketVariables.totalMarketSize.toLocaleString()} professionals</h3>
            <ul className="space-y-2 text-[#FFC900]/70">
              <li>Apprentices: {(marketVariables.segments.apprentices.percentage * 100)}% ({marketVariables.segments.apprentices.count.toLocaleString()})</li>
              <li>Electricians: {(marketVariables.segments.electricians.percentage * 100)}% ({marketVariables.segments.electricians.count.toLocaleString()})</li>
              <li>Employers: {(marketVariables.segments.employers.percentage * 100)}% ({marketVariables.segments.employers.count.toLocaleString()})</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#151812]/60 border-[#FFC900]/20">
        <CardHeader>
          <CardTitle className="text-[#FFC900]">Key Performance Indicators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-[#FFC900] font-semibold mb-2">Year 1 Projections</h3>
            <ul className="space-y-2 text-[#FFC900]/70">
              <li>Market Penetration: {(marketVariables.projections.yearOne.penetration * 100)}%</li>
              <li>Expected Users: {yearOneUsers.toLocaleString()}</li>
              <li>Monthly vs Yearly Split: {(marketVariables.projections.yearOne.monthlyVsYearlyRatio * 100)}%/{((1 - marketVariables.projections.yearOne.monthlyVsYearlyRatio) * 100)}%</li>
              <li>Annual Churn Rate: {(marketVariables.projections.yearOne.churnRate * 100)}%</li>
              <li>Acquisition Cost: £{marketVariables.projections.yearOne.acquisitionCostPerUser}/user</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFC900] font-semibold mb-2">Year 3 Projections</h3>
            <ul className="space-y-2 text-[#FFC900]/70">
              <li>Market Penetration: {(marketVariables.projections.yearThree.penetration * 100)}%</li>
              <li>Expected Users: {yearThreeUsers.toLocaleString()}</li>
              <li>Monthly vs Yearly Split: {(marketVariables.projections.yearThree.monthlyVsYearlyRatio * 100)}%/{((1 - marketVariables.projections.yearThree.monthlyVsYearlyRatio) * 100)}%</li>
              <li>Annual Churn Rate: {(marketVariables.projections.yearThree.churnRate * 100)}%</li>
              <li>Acquisition Cost: £{marketVariables.projections.yearThree.acquisitionCostPerUser}/user</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketProjections;
