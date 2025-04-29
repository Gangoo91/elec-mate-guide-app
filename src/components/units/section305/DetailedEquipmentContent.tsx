
import React from 'react';

const DetailedEquipmentContent = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-[#FFC900]">Manufacturer Selection and Standards Compliance</h4>
      <p className="text-[#FFC900]/80">
        When selecting electrical equipment, it's important to consider:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
        <li><strong>Standards compliance:</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>MCBs: BS EN 60898</li>
            <li>RCDs: BS EN 61008</li>
            <li>RCBOs: BS EN 61009</li>
            <li>Consumer units: BS EN 61439-3</li>
            <li>Switches: BS EN 60669</li>
            <li>Socket outlets: BS 1363</li>
            <li>Luminaires: BS EN 60598</li>
          </ul>
        </li>
        <li><strong>Manufacturer quality and reputation:</strong> Use established manufacturers with proven track records</li>
        <li><strong>Warranty and support:</strong> Consider the length and terms of warranties offered</li>
        <li><strong>Spare parts availability:</strong> Ensure components can be readily replaced</li>
        <li><strong>Compatibility between systems:</strong> Ensure all components work together effectively</li>
      </ul>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Advanced Protection Devices</h4>
      <div className="bg-[#1a1d17] p-4 rounded-md">
        <p className="text-[#FFC900]/80">
          <strong>Arc Fault Detection Devices (AFDDs):</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Detect dangerous arcing in final circuits</li>
          <li>Can prevent fires caused by poor connections or damaged cables</li>
          <li>Required in specific locations by BS 7671 18th Edition Amendment 1</li>
          <li>Particularly important for:
            <ul className="list-disc pl-6 mt-1">
              <li>Premises with sleeping accommodation</li>
              <li>Locations with fire risk (wooden buildings)</li>
              <li>Locations with irreplaceable goods (museums, national heritage)</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Surge Protection Devices (SPDs):</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Protect against transient overvoltages (lightning, switching surges)</li>
          <li>Types:
            <ul className="list-disc pl-6 mt-1">
              <li><strong>Type 1:</strong> High energy protection, typically at origin</li>
              <li><strong>Type 2:</strong> Medium energy protection, at distribution boards</li>
              <li><strong>Type 3:</strong> Low energy protection, near sensitive equipment</li>
            </ul>
          </li>
          <li>Required by BS 7671 18th Edition based on risk assessment</li>
          <li>Essential for installations with electronic equipment</li>
        </ul>
      </div>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Special Locations and Requirements</h4>
      <p className="text-[#FFC900]/80">
        Equipment selection must consider specific requirements for special locations:
      </p>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-2">
        <p className="text-[#FFC900]/80">
          <strong>Bathrooms and Swimming Pools:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Equipment with appropriate IP ratings for the zone</li>
          <li>Zone 0: Minimum IP X7 (immersion proof)</li>
          <li>Zone 1: Minimum IP X4 (splash proof)</li>
          <li>Zone 2: Minimum IP X4 (splash proof)</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Agricultural Locations:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>High IP ratings due to dust, moisture, and corrosive environments</li>
          <li>Chemical-resistant equipment</li>
          <li>Additional mechanical protection against damage by animals</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Hazardous Areas:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>ATEX certified equipment for explosive atmospheres</li>
          <li>Flameproof enclosures (Ex d)</li>
          <li>Intrinsically safe equipment (Ex i)</li>
          <li>Increased safety equipment (Ex e)</li>
        </ul>
      </div>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Future-Proofing and Smart Systems</h4>
      <p className="text-[#FFC900]/80">
        Modern installations should consider:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
        <li>Smart distribution boards with monitoring capabilities</li>
        <li>Energy monitoring systems</li>
        <li>Integration with building management systems</li>
        <li>Provision for future technologies (EV charging, renewable energy)</li>
        <li>Expandable systems allowing for additional circuits</li>
        <li>Smart switches and dimmers compatible with IoT systems</li>
      </ul>
    </div>
  );
};

export default DetailedEquipmentContent;
