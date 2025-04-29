
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const AdiabaticEquation = () => {
  return (
    <LessonContent title="Adiabatic Equation for Short-Circuit Protection">
      <p className="mb-4">
        The adiabatic equation is used to verify that cables are protected against thermal effects of fault currents:
      </p>
      
      <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-lg my-4">
        S² = I² × t ÷ k²
      </div>
      
      <p className="mt-4">
        Where:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>S = Conductor cross-sectional area (mm²)</li>
        <li>I = Fault current (A)</li>
        <li>t = Disconnection time of protective device (s)</li>
        <li>k = Conductor constant (depends on conductor material and insulation)</li>
      </ul>
      
      <div className="mt-4">
        <p className="font-medium mb-2">k values for common cable types:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Copper conductor with PVC insulation: 115</li>
          <li>Copper conductor with XLPE insulation: 143</li>
          <li>Aluminum conductor with PVC insulation: 76</li>
          <li>Aluminum conductor with XLPE insulation: 94</li>
        </ul>
      </div>
      
      <p className="mt-4">
        The equation can be rearranged to determine the minimum conductor size required:
      </p>
      
      <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-lg my-4">
        S = (I × √t) ÷ k
      </div>
    </LessonContent>
  );
};

export default AdiabaticEquation;
