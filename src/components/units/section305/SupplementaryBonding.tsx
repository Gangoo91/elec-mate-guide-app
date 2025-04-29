
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const SupplementaryBonding = () => {
  return (
    <LessonContent title="Supplementary Bonding">
      <p className="mb-4">
        Supplementary bonding provides additional protection against electric shock in locations 
        where there is increased risk, typically by connecting together exposed and extraneous 
        conductive parts within a specific area or zone.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">When Supplementary Bonding is Required</h4>
        <p>
          Supplementary bonding is required in situations where:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>The disconnection time for ADS (Automatic Disconnection of Supply) cannot be achieved</li>
          <li>In special locations with increased risk, such as:
            <ul className="list-disc pl-6 mt-1">
              <li>Bathrooms and shower rooms</li>
              <li>Swimming pools</li>
              <li>Saunas</li>
              <li>Construction sites</li>
              <li>Agricultural and horticultural premises</li>
              <li>Medical locations</li>
              <li>Conducting locations with restricted movement</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Supplementary Bonding Conductor Sizing</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Between two exposed-conductive-parts: minimum 2.5mm² copper if mechanically protected or 4mm² if not protected</li>
            <li>Between exposed-conductive-parts and extraneous-conductive-parts: minimum 2.5mm² copper if mechanically protected or 4mm² if not protected</li>
            <li>Between extraneous-conductive-parts only: minimum 2.5mm² copper if mechanically protected or 4mm² if not protected</li>
            <li>For specialist locations, additional requirements may apply</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Bathrooms and Shower Rooms</h4>
          <p className="mb-2">
            In these locations, supplementary bonding is required to connect together:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Accessible metallic pipes (water, gas, waste, etc.)</li>
            <li>Metallic structural parts (radiators, shower trays, etc.)</li>
            <li>Metal baths and shower trays</li>
            <li>Any exposed-conductive-parts of electrical equipment</li>
          </ul>
          <p className="mt-2">
            <strong>Exception:</strong> Supplementary bonding may be omitted if all of the following conditions are met:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li>All circuits are protected by RCDs with a sensitivity of 30mA or less</li>
            <li>All extraneous-conductive-parts are effectively connected to the protective equipotential bonding</li>
            <li>All final circuits in the location comply with the requirements for automatic disconnection according to BS 7671</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Installation Requirements</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Connections must be accessible for inspection and testing (unless in permanent joints)</li>
          <li>Connections must be mechanically and electrically sound</li>
          <li>Appropriate bonding clamps or connectors must be used</li>
          <li>Insulation should be green-and-yellow</li>
          <li>The routing should be as direct as practicable</li>
          <li>Connections should be protected against mechanical damage and corrosion</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Testing Requirements</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Visual inspection of all bonding connections</li>
          <li>Continuity testing between bonded parts</li>
          <li>Maximum resistance between simultaneously accessible exposed and extraneous-conductive-parts: 0.05Ω</li>
          <li>Documentation of test results</li>
        </ul>
        <p className="mt-2">
          <strong>Note:</strong> The 0.05Ω limit is not a regulatory requirement but is considered good practice. 
          BS 7671 does not specify a maximum resistance value for supplementary bonding.
        </p>
      </div>
    </LessonContent>
  );
};

export default SupplementaryBonding;
