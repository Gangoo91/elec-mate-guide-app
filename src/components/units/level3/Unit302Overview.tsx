
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const Unit302Overview: React.FC = () => {
  return (
    <LessonContent title="What You Learn in Unit 302">
      <p className="font-medium">
        This unit is heavy on theory — it builds on the basic electrical science you learned at Level 2 but goes much deeper.
      </p>
      
      <div className="mt-4 space-y-4">
        <h3 className="text-lg font-medium text-[#FFC900]">Summary of What Unit 302 Covers:</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>The science behind electricity</li>
          <li>How electricity behaves in different types of circuits</li>
          <li>How electrical machines (like motors and transformers) work</li>
          <li>Mathematical calculations to solve real-world electrical problems</li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-4">Typical Exam Questions Could Include:</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>"State Ohm's Law and calculate the resistance when voltage = 240V and current = 2A."</li>
          <li>"Describe what happens when a conductor cuts through magnetic lines of force."</li>
          <li>"Explain the difference between true power and apparent power in an AC circuit."</li>
          <li>"Sketch a sine wave and label the peak voltage and time period."</li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-4">Important Formulas You MUST Know:</h3>
        <div className="bg-[#1a1d17] p-4 rounded-md mt-2">
          <table className="w-full text-[#FFC900]/90">
            <thead>
              <tr>
                <th className="text-left pb-2 border-b border-[#FFC900]/30">Formula</th>
                <th className="text-left pb-2 border-b border-[#FFC900]/30">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 border-b border-[#FFC900]/10">V = IR</td>
                <td className="py-2 border-b border-[#FFC900]/10">Ohm's Law</td>
              </tr>
              <tr>
                <td className="py-2 border-b border-[#FFC900]/10">P = VI</td>
                <td className="py-2 border-b border-[#FFC900]/10">Power</td>
              </tr>
              <tr>
                <td className="py-2 border-b border-[#FFC900]/10">Energy = P × t</td>
                <td className="py-2 border-b border-[#FFC900]/10">Energy consumption (in kWh)</td>
              </tr>
              <tr>
                <td className="py-2 border-b border-[#FFC900]/10">Vrms = 0.707 × Vpeak</td>
                <td className="py-2 border-b border-[#FFC900]/10">RMS Voltage</td>
              </tr>
              <tr>
                <td className="py-2 border-b border-[#FFC900]/10">Apparent Power (VA) = Voltage × Current</td>
                <td className="py-2 border-b border-[#FFC900]/10"></td>
              </tr>
              <tr>
                <td className="py-2">Power Factor = True Power / Apparent Power</td>
                <td className="py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </LessonContent>
  );
};

export default Unit302Overview;
