
import React from 'react';

const DetailedDesignContent = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-[#FFC900]">Design Process Workflow</h4>
      <p className="text-[#FFC900]/80">
        The electrical design process follows a structured approach:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
        <li><strong>Client Requirements Analysis:</strong> Gather information about intended use, special requirements, and future expansion needs</li>
        <li><strong>Building Assessment:</strong> Evaluate construction type, dimensions, layout, and access points</li>
        <li><strong>Load Calculation:</strong> Determine connected load and maximum demand with appropriate diversity factors</li>
        <li><strong>Circuit Planning:</strong> Design individual circuits based on function and load requirements</li>
        <li><strong>Supply Arrangement Selection:</strong> Choose appropriate earthing system and supply configuration</li>
        <li><strong>Equipment Selection:</strong> Specify appropriate devices, cables, and accessories</li>
        <li><strong>Protection Coordination:</strong> Ensure proper discrimination between protective devices</li>
        <li><strong>Documentation:</strong> Create detailed drawings, schedules, and specifications</li>
      </ol>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Special Considerations for Different Building Types</h4>
      <div className="bg-[#1a1d17] p-4 rounded-md">
        <p className="text-[#FFC900]/80">
          <strong>Domestic Installations:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Typically single-phase 230V supplies</li>
          <li>Consumer unit with RCBO or MCB/RCD protection</li>
          <li>Standard circuit types for lighting, sockets, cooking, and heating</li>
          <li>Special considerations for extensions and outbuildings</li>
          <li>Part P Building Regulations compliance required</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Commercial Installations:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Three-phase supplies common for larger premises</li>
          <li>Higher load densities requiring careful distribution planning</li>
          <li>Emergency lighting and fire alarm systems integration</li>
          <li>Power factor correction considerations</li>
          <li>Energy monitoring systems</li>
          <li>Specialized circuits for HVAC, IT equipment, etc.</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Industrial Installations:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Heavy power requirements for machinery and equipment</li>
          <li>Motor starting and control systems</li>
          <li>Power quality and harmonics management</li>
          <li>Specialized protection schemes</li>
          <li>Hazardous area classification where applicable</li>
          <li>Standby power systems</li>
        </ul>
      </div>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Design Documentation Requirements</h4>
      <p className="text-[#FFC900]/80">
        Comprehensive design documentation should include:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
        <li>Single-line diagrams showing power distribution</li>
        <li>Circuit schedules detailing protective devices and cable specifications</li>
        <li>Layout drawings showing equipment positions</li>
        <li>Earthing schematic diagrams</li>
        <li>Load calculations and diversity assessment</li>
        <li>Cable sizing calculations</li>
        <li>Voltage drop calculations</li>
        <li>Fault level calculations</li>
        <li>Design risk assessments</li>
      </ul>
    </div>
  );
};

export default DetailedDesignContent;
