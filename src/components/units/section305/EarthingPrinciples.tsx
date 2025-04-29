
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const EarthingPrinciples = () => {
  return (
    <LessonContent title="Earthing Principles">
      <p className="mb-4">
        Earthing is a fundamental safety measure in electrical installations that provides a path for fault currents 
        to flow to earth, facilitating the operation of protective devices and minimizing the risk of electric shock.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Purpose of Earthing</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Enable protective devices to operate during earth faults</li>
          <li>Prevent exposed-conductive-parts from maintaining a dangerous voltage</li>
          <li>Provide a reference point for the electrical system</li>
          <li>Dissipate lightning strikes and static charges</li>
          <li>Maintain equipotential conditions within the installation</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Earthing Arrangements</h4>
          <p className="mb-2">BS 7671 defines several types of earthing arrangements:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>TN-S System:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Separate neutral and protective conductors throughout</li>
                <li>Supply earth provided by distributor</li>
                <li>Good EMC performance</li>
                <li>Commonly used in commercial and industrial installations</li>
              </ul>
            </li>
            <li><strong>TN-C-S System (PME):</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Combined PEN conductor from supply transformer</li>
                <li>Separate N and PE within the installation</li>
                <li>Most common system in UK domestic properties</li>
                <li>Restricted use in some special locations</li>
              </ul>
            </li>
            <li><strong>TT System:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Earth connection provided by local electrode</li>
                <li>No connection to supply earth</li>
                <li>Requires RCD protection</li>
                <li>Common in rural areas or where PME is prohibited</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Earth Fault Loop Impedance</h4>
          <p className="mb-2">
            The earth fault loop impedance (Z<sub>s</sub>) must be low enough to ensure protective devices operate within the required disconnection time:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>For final circuits up to 32A: 0.4 seconds maximum disconnection time</li>
            <li>For distribution circuits and circuits over 32A: 5 seconds maximum disconnection time</li>
            <li>The maximum Z<sub>s</sub> value depends on the protective device characteristics</li>
            <li>Lower values of Z<sub>s</sub> provide faster disconnection and enhanced safety</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Earth Electrode Types</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Earth rods:</strong> Copper-bonded steel rods driven into the ground</li>
          <li><strong>Earth tapes:</strong> Buried copper tape providing horizontal earthing</li>
          <li><strong>Earth plates:</strong> Buried metal plates providing contact area with soil</li>
          <li><strong>Earth mats:</strong> Grid of conductors creating large contact area</li>
          <li><strong>Foundation earthing:</strong> Conductors embedded in concrete foundations</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Key Design Considerations</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Soil resistivity affects electrode performance (lower resistivity is better)</li>
          <li>Electrode depth and configuration impact resistance to earth</li>
          <li>Seasonal variations affect earth electrode resistance</li>
          <li>Earth electrodes should be inspected and tested periodically</li>
          <li>Target value for earth electrode resistance:
            <ul className="list-disc pl-6 mt-1">
              <li>TT systems: Typically below 20Ω for effective RCD operation</li>
              <li>Lightning protection: Often below 10Ω</li>
            </ul>
          </li>
        </ul>
      </div>
    </LessonContent>
  );
};

export default EarthingPrinciples;
