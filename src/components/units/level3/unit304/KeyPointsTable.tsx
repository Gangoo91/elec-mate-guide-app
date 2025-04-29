
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const KeyPointsTable: React.FC = () => {
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 mt-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">
          Key Points You Must Remember for Unit 304
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-3 px-4 text-left text-[#FFC900] font-semibold">Topic</th>
                <th className="py-3 px-4 text-left text-[#FFC900] font-semibold">Critical Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Dead Testing Order</td>
                <td className="py-3 px-4 text-[#FFC900]/80">CPC continuity ➔ Ring Continuity ➔ Insulation Resistance ➔ Polarity</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Live Testing Order</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Earth Fault Loop ➔ PFC ➔ RCD Trip Testing</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Isolation</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Always use approved procedures: test your tester, isolate, test the circuit is dead, re-test your tester</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Test Instruments</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Know how to set up, use, and interpret results from Multifunction Tester (MFT)</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Legal Compliance</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Must meet BS 7671 Part 6 standards and record accurately</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-[#FFC900]/80">Sequence</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Visual inspection ➔ Dead testing ➔ Live testing ➔ Functional tests</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default KeyPointsTable;
