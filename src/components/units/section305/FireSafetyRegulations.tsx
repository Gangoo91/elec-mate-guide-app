
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const FireSafetyRegulations = () => {
  return (
    <LessonContent title="Fire Safety Regulations">
      <p className="mb-4">
        Electrical installations must comply with various fire safety regulations and standards to minimize 
        the risk of fire and to ensure appropriate protection in the event of a fire. These considerations 
        are integral to electrical design.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Building Regulations Part B (Fire Safety)</h4>
        <p>
          Key requirements affecting electrical installations include:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Fire compartmentation:</strong> Maintaining the integrity of fire-resistant barriers</li>
          <li><strong>Fire detection and alarm systems:</strong> Requirements for different building types</li>
          <li><strong>Emergency lighting:</strong> For escape routes and open areas</li>
          <li><strong>Fire-resistant cable supports:</strong> Preventing premature failure of critical circuits</li>
          <li><strong>Escape route protection:</strong> Special requirements for cables in escape routes</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">BS 7671 Fire Safety Requirements</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Protection against thermal effects:</strong> Prevention of ignition, fire, and burns</li>
            <li><strong>Protection against fire spread:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Appropriate selection of wiring systems</li>
                <li>Fire barriers and sealing systems</li>
                <li>Fire-rated enclosures and supports</li>
              </ul>
            </li>
            <li><strong>RCD protection:</strong> 300mA RCDs for fire protection in specific circumstances</li>
            <li><strong>Arc Fault Detection Devices (AFDDs):</strong> Recommended for circuits in:
              <ul className="list-disc pl-6 mt-1">
                <li>Locations with sleeping accommodation</li>
                <li>Locations with fire risks (e.g., wooden buildings)</li>
                <li>Locations with irreplaceable assets</li>
                <li>Locations with combustible construction materials</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Fire Detection and Alarm Systems</h4>
          <p className="mb-2">
            Designed and installed to comply with BS 5839:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Categories:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Category L: Life protection systems (L1-L5)</li>
                <li>Category P: Property protection systems (P1-P2)</li>
                <li>Category M: Manual systems</li>
              </ul>
            </li>
            <li><strong>Power supplies:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Primary supply from mains</li>
                <li>Secondary supply (battery backup)</li>
                <li>Separate circuit from main distribution board</li>
                <li>Protection clearly identified and secured against unauthorized operation</li>
              </ul>
            </li>
            <li><strong>Cabling:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Standard fire-resistant cable (30 minutes minimum)</li>
                <li>Enhanced fire-resistant cable (120 minutes) for specific applications</li>
                <li>Appropriate cable support systems</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Emergency Lighting</h4>
        <p className="mb-2">
          Designed and installed to comply with BS 5266:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Types:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Escape route lighting</li>
              <li>Open area (anti-panic) lighting</li>
              <li>High-risk task area lighting</li>
            </ul>
          </li>
          <li><strong>Duration:</strong> Typically 3 hours for most applications</li>
          <li><strong>Power supplies:</strong> Self-contained battery units or central battery systems</li>
          <li><strong>Testing facilities:</strong> Required for regular testing</li>
          <li><strong>Circuit protection:</strong> Dedicated circuits protected against fire</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Cable Selection and Installation for Fire Safety</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Cable classification under CPR (Construction Products Regulation):</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Reaction to fire performance (Aca, B1ca, B2ca, Cca, Dca, Eca, Fca)</li>
              <li>Additional classifications: s (smoke), d (droplets), a (acidity)</li>
            </ul>
          </li>
          <li><strong>Fire-resistant cables:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>BS 8519 for firefighting and evacuation systems</li>
              <li>Appropriate fire survival time based on building height and complexity</li>
            </ul>
          </li>
          <li><strong>Fire stopping:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Appropriate sealing of penetrations through fire compartment walls and floors</li>
              <li>Use of approved fire stopping systems with appropriate fire ratings</li>
              <li>Documentation of all fire stopping installations</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Consumer Unit Requirements</h4>
        <p className="mb-2">
          To reduce the risk of fire spread from consumer units:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Consumer units and similar switchgear in domestic premises must be manufactured from non-combustible material (typically metal)</li>
          <li>Comply with BS EN 61439-3 with regards to resistance to heat and fire</li>
          <li>Appropriate location away from combustible materials</li>
          <li>Proper accessibility for operation and maintenance</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export default FireSafetyRegulations;
