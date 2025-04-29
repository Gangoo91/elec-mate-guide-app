
import React from 'react';

const KeyPointsTable = () => {
  return (
    <div className="bg-[#22251e] border-[#FFC900]/20 border rounded-lg p-6 mb-8">
      <h3 className="text-xl text-[#FFC900] mb-4">Key Points to Remember</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#FFC900]/20">
              <th className="py-2 px-4 text-left text-[#FFC900]">Topic</th>
              <th className="py-2 px-4 text-left text-[#FFC900]">Key Point</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-4 text-[#FFC900]/80">Design Process</td>
              <td className="py-2 px-4 text-[#FFC900]/80">Always start with client requirements and regulatory constraints</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-4 text-[#FFC900]/80">Load Calculations</td>
              <td className="py-2 px-4 text-[#FFC900]/80">Consider diversity factors and apply them correctly to get accurate maximum demand</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-4 text-[#FFC900]/80">Cable Sizing</td>
              <td className="py-2 px-4 text-[#FFC900]/80">Account for current-carrying capacity, voltage drop, and fault current protection</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-4 text-[#FFC900]/80">Circuit Planning</td>
              <td className="py-2 px-4 text-[#FFC900]/80">Separate circuits logically and ensure proper protection is selected</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-4 text-[#FFC900]/80">Earthing</td>
              <td className="py-2 px-4 text-[#FFC900]/80">Choose the appropriate earthing arrangement (TN-S, TN-C-S, TT) for the installation</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-[#FFC900]/80">Compliance</td>
              <td className="py-2 px-4 text-[#FFC900]/80">Ensure designs meet BS 7671 and relevant building regulations</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KeyPointsTable;
