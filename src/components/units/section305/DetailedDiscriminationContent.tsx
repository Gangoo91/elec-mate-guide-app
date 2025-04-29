
import React from 'react';

const DetailedDiscriminationContent = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-[#FFC900]">Advanced Discrimination Techniques</h4>
      <p className="text-[#FFC900]/80">
        Achieving effective discrimination in complex electrical systems requires advanced techniques:
      </p>
      
      <div className="bg-[#1a1d17] p-4 rounded-md">
        <p className="text-[#FFC900]/80">
          <strong>Cascading Systems:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Uses energy-limiting circuit breakers to achieve discrimination</li>
          <li>Allows downstream devices with lower breaking capacities</li>
          <li>Manufacturer-specific tested combinations</li>
          <li>Cost-effective for installations with high fault levels</li>
          <li>Requires careful selection of compatible devices</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Zone Selective Interlocking (ZSI):</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Active communication between protective devices</li>
          <li>When fault is detected, device closest to fault signals upstream devices to delay</li>
          <li>Provides fast operation for high fault currents while maintaining discrimination</li>
          <li>Particularly useful in critical installations where both speed and selectivity are essential</li>
          <li>Requires compatible electronic trip units in circuit breakers</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Current and Time-Based Discrimination:</strong>
        </p>
        <p className="text-[#FFC900]/80 mt-2">
          For a properly coordinated protection scheme using both current and time-based methods:
        </p>
        <ol className="list-decimal pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Main incomer: Rated at 400A with 500ms time delay</li>
          <li>Sub-distribution: Rated at 160A with 250ms time delay</li>
          <li>Local distribution: Rated at 63A with 100ms time delay</li>
          <li>Final circuits: Rated at 32A or less with instantaneous operation</li>
        </ol>
        <p className="text-[#FFC900]/80 mt-2">
          This arrangement ensures that:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>For small faults: Current discrimination operates effectively</li>
          <li>For large faults: Time discrimination ensures correct device operates</li>
        </ul>
      </div>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Discrimination in Special Installations</h4>
      
      <div className="bg-[#1a1d17] p-4 rounded-md">
        <p className="text-[#FFC900]/80">
          <strong>Medical Locations:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Critical for maintaining power to life support systems</li>
          <li>Often uses multi-level discrimination with backup systems</li>
          <li>Time-delayed RCDs for critical areas</li>
          <li>Isolation transformers with insulation monitoring</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Data Centers:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Multi-path power supplies require careful coordination</li>
          <li>Discrimination across UPS systems</li>
          <li>Electronic circuit breakers for rapid response</li>
          <li>Discrimination between normal and backup power sources</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Industrial Systems:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>High fault levels requiring robust discrimination</li>
          <li>Motor protection coordination</li>
          <li>Process-critical circuits with specialized protection</li>
          <li>Integration with SCADA systems for monitoring and control</li>
        </ul>
      </div>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Documentation and Testing</h4>
      <p className="text-[#FFC900]/80">
        Proper discrimination requires thorough documentation and testing:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
        <li><strong>Discrimination Study:</strong>
          <ul className="list-disc pl-6 mt-1">
            <li>Manufacturer's discrimination tables</li>
            <li>Time/current curve analysis</li>
            <li>Software simulation of protection schemes</li>
            <li>Verification of discrimination limits</li>
          </ul>
        </li>
        <li><strong>Testing Requirements:</strong>
          <ul className="list-disc pl-6 mt-1">
            <li>Primary injection testing for critical systems</li>
            <li>Secondary injection testing for device settings</li>
            <li>Verification of tripping times</li>
            <li>Functional testing of interlocks and coordination</li>
          </ul>
        </li>
        <li><strong>Documentation:</strong>
          <ul className="list-disc pl-6 mt-1">
            <li>Protection coordination study report</li>
            <li>Time/current curves for all devices</li>
            <li>Discrimination tables showing limits</li>
            <li>Settings record for all adjustable devices</li>
            <li>Testing and commissioning records</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default DetailedDiscriminationContent;
