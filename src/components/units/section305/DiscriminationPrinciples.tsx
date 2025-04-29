
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const DiscriminationPrinciples = () => {
  return (
    <LessonContent title="Principles of Discrimination">
      <p className="mb-4">
        Discrimination (also known as selectivity) ensures that when a fault occurs, only the protective device closest 
        to the fault operates, minimizing disruption to the rest of the electrical installation.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">What is Discrimination?</h4>
        <p>
          Discrimination is achieved when only the protective device nearest to the fault operates, 
          while upstream devices remain closed. This limits the area affected by the fault and 
          maintains power to unaffected circuits.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Types of Discrimination</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Current Discrimination:</strong> Based on different current settings</li>
            <li><strong>Time Discrimination:</strong> Based on different operating times</li>
            <li><strong>Energy Discrimination:</strong> Based on let-through energy characteristics</li>
            <li><strong>Zone Discrimination:</strong> Based on communication between devices</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Achieving Discrimination</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Between MCBs:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Current ratio of at least 1:1.5 between upstream and downstream devices</li>
                <li>Using different trip characteristics (e.g., Type B downstream, Type C upstream)</li>
                <li>Cascading systems with tested compatibility between devices</li>
              </ul>
            </li>
            <li><strong>Between RCDs:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Using different sensitivities (e.g., 30mA downstream, 100mA upstream)</li>
                <li>Time-delayed RCDs upstream (Type S) with non-delayed downstream</li>
                <li>Minimum 3:1 ratio between tripping currents</li>
              </ul>
            </li>
            <li><strong>Between fuses:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Minimum ratio of 1:1.6 between upstream and downstream ratings</li>
                <li>Using different types of fuses with specific characteristics</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Levels of Discrimination</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Total discrimination:</strong> Complete selectivity across all fault current levels</li>
          <li><strong>Partial discrimination:</strong> Selectivity up to a specific fault current value</li>
          <li><strong>No discrimination:</strong> Both devices may operate during a fault</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Practical Example</h4>
        <p>In a commercial building:</p>
        <ol className="list-decimal pl-6 space-y-1 mt-2">
          <li>Main incoming 250A circuit breaker with time delay</li>
          <li>Sub-distribution 100A circuit breaker with medium time delay</li>
          <li>Final circuit 32A MCB with no time delay</li>
        </ol>
        <p className="mt-2">
          A fault on a 32A final circuit should trip only the 32A MCB, maintaining power to all other circuits. 
          This is achieved through both current and time discrimination.
        </p>
      </div>
    </LessonContent>
  );
};

export default DiscriminationPrinciples;
