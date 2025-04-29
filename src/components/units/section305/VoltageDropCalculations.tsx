
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const VoltageDropCalculations = () => {
  return (
    <LessonContent title="Voltage Drop Calculations">
      <p className="mb-4">
        BS 7671 specifies maximum voltage drop limits:
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>3% for lighting circuits (6.9V in a 230V system)</li>
        <li>5% for other circuits (11.5V in a 230V system)</li>
      </ul>
      
      <p className="mb-4">
        Voltage drop is calculated using:
      </p>
      
      <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-lg my-4">
        Voltage drop (V) = Design current (A) × Conductor resistance (mV/A/m) × Length (m) ÷ 1000
      </div>
      
      <p className="mb-4">
        Where:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Conductor resistance values are found in tables</li>
        <li>Length is the one-way length of the circuit</li>
      </ul>
    </LessonContent>
  );
};

export default VoltageDropCalculations;
