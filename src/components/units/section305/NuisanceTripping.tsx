
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const NuisanceTripping = () => {
  return (
    <LessonContent title="Avoiding Nuisance Tripping">
      <p className="mb-4">
        Nuisance tripping occurs when protective devices operate unnecessarily, causing inconvenience and disruption.
        Effective design minimizes these occurrences while maintaining safety.
      </p>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Common Causes of Nuisance Tripping</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>MCB Nuisance Tripping:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>High inrush currents (motor starting, discharge lighting)</li>
                <li>Harmonics from electronic equipment</li>
                <li>Transient surges from lightning or switching operations</li>
                <li>Incorrect MCB type for the load characteristics</li>
              </ul>
            </li>
            <li><strong>RCD Nuisance Tripping:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>High protective conductor currents from electronic equipment</li>
                <li>Moisture ingress causing leakage currents</li>
                <li>Long cable runs with natural capacitance</li>
                <li>Multiple items of equipment with collective leakage</li>
                <li>Incorrect RCD type for the load (e.g., Type AC with equipment producing DC components)</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Prevention Strategies</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>For MCBs:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Select appropriate MCB type:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Type B: Resistive and slightly inductive loads</li>
                    <li>Type C: Moderately inductive loads, small motors</li>
                    <li>Type D: Highly inductive loads, transformers, motors</li>
                  </ul>
                </li>
                <li>Consider derating for harmonic-rich environments</li>
                <li>Install surge protection devices for transient protection</li>
                <li>Use soft starters for large motors</li>
              </ul>
            </li>
            <li><strong>For RCDs:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Select appropriate RCD type:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Type AC: Standard AC circuits</li>
                    <li>Type A: Circuits with electronic equipment (pulsating DC components)</li>
                    <li>Type B: Three-phase electronic equipment (smooth DC components)</li>
                    <li>Type F: Circuits with frequency-controlled equipment</li>
                  </ul>
                </li>
                <li>Distribute electronic equipment across multiple RCD-protected circuits</li>
                <li>Use 100mA or 300mA RCDs instead of 30mA where appropriate</li>
                <li>Consider time-delayed RCDs (Type S) for discrimination</li>
                <li>Separate circuits with high leakage equipment</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Circuit Balancing and Distribution</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Distribute electronic loads evenly across different circuits</li>
          <li>Consider dedicated circuits for equipment with high leakage or inrush currents</li>
          <li>Use individual RCBOs for critical circuits instead of RCD protection for groups of circuits</li>
          <li>Balance three-phase loads to minimize neutral currents</li>
          <li>Separate sensitive equipment from high-interference equipment</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Special Considerations</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>IT Equipment:</strong> Consider clean earth systems or dedicated circuits</li>
          <li><strong>Data Centers:</strong> Use properly coordinated cascading protection</li>
          <li><strong>Medical Locations:</strong> Follow specific requirements of IEC 60364-7-710</li>
          <li><strong>Lighting Systems:</strong> Consider high inrush currents of discharge lighting</li>
          <li><strong>Renewable Energy Systems:</strong> Consider DC leakage from inverters</li>
        </ul>
      </div>
      
      <div className="mt-4">
        <p className="italic text-[#FFC900]/70">
          Note: While preventing nuisance tripping is important, safety should never be compromised. 
          All protective measures must comply with BS 7671 requirements for fault and shock protection.
        </p>
      </div>
    </LessonContent>
  );
};

export default NuisanceTripping;
