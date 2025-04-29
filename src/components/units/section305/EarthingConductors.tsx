
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const EarthingConductors = () => {
  return (
    <LessonContent title="Earthing Conductors Sizing">
      <p className="mb-4">
        Earthing conductors are the conductors that provide the connection between the main earthing terminal 
        and the earth electrode or other means of earthing. Proper sizing of these conductors is essential for 
        safety and effective fault protection.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Earthing Conductor Types</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Main Earthing Conductor:</strong> Connects the main earthing terminal to the means of earthing</li>
          <li><strong>Protective Conductors:</strong> Connect exposed-conductive-parts to the main earthing terminal</li>
          <li><strong>Circuit Protective Conductors (CPC):</strong> Protective conductors within circuits</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Sizing of Earthing Conductors</h4>
          <p className="mb-2">
            The cross-sectional area of earthing conductors (E) can be determined using the following methods:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-[#FFC900]/20">
                  <th className="py-2 px-3 text-left text-[#FFC900]">Cross-Sectional Area of Line Conductor (S) mm²</th>
                  <th className="py-2 px-3 text-left text-[#FFC900]">Minimum Cross-Sectional Area of Earthing Conductor (E) mm²</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">S ≤ 16</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">S</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">16 < S ≤ 35</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">16</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-[#FFC900]/80">S > 35</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">S/2</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-2">
            Alternatively, the cross-sectional area can be calculated based on fault current using the adiabatic equation:
          </p>
          <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-lg my-4">
            S = (I × √t) ÷ k
          </div>
          <p>Where:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>S = Minimum cross-sectional area (mm²)</li>
            <li>I = Value of fault current (A)</li>
            <li>t = Operating time of protective device (s)</li>
            <li>k = Constant depending on conductor material and insulation</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Circuit Protective Conductors (CPCs)</h4>
          <p className="mb-2">
            The minimum size of circuit protective conductors can be determined using:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-[#FFC900]/20">
                  <th className="py-2 px-3 text-left text-[#FFC900]">Cross-Sectional Area of Phase Conductor (S) mm²</th>
                  <th className="py-2 px-3 text-left text-[#FFC900]">Minimum Cross-Sectional Area of CPC mm²</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">S ≤ 16</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">S</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">16 < S ≤ 35</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">16</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-[#FFC900]/80">S > 35</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">S/2</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-2">
            Common CPC sizes in standard cable types:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>1.0mm² twin and earth cable: 1.0mm² CPC</li>
            <li>1.5mm² twin and earth cable: 1.0mm² CPC</li>
            <li>2.5mm² twin and earth cable: 1.5mm² CPC</li>
            <li>4.0mm² twin and earth cable: 1.5mm² CPC</li>
            <li>6.0mm² twin and earth cable: 2.5mm² CPC</li>
            <li>10.0mm² twin and earth cable: 4.0mm² CPC</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Special Considerations</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Minimum sizes:</strong> Earthing conductors should be at least 6mm² copper if not mechanically protected, or 2.5mm² copper if mechanically protected</li>
          <li><strong>Buried earthing conductors:</strong> Should be suitably protected against corrosion and mechanical damage</li>
          <li><strong>Earthing connection points:</strong> Must be accessible for inspection and testing</li>
          <li><strong>Joints:</strong> Should be mechanically and electrically sound with appropriate connectors</li>
          <li><strong>Metal conduit and trunking:</strong> When used as a CPC, continuity must be ensured at all joints</li>
          <li><strong>Protective Multiple Earthing (PME):</strong> Special requirements apply for the earthing conductor</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Example Calculation</h4>
        <p>For a 100A three-phase supply with potential fault current of 3kA and circuit breaker operating time of 0.4s:</p>
        <ol className="list-decimal pl-6 space-y-1 mt-2">
          <li>Using the adiabatic equation for copper with PVC insulation (k = 115):</li>
          <li>S = (3000 × √0.4) ÷ 115</li>
          <li>S = (3000 × 0.632) ÷ 115</li>
          <li>S = 1897 ÷ 115</li>
          <li>S = 16.5mm²</li>
          <li>Therefore, use a 16mm² copper earthing conductor</li>
        </ol>
      </div>
    </LessonContent>
  );
};

export default EarthingConductors;
