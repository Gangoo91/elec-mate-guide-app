
import React from 'react';

const DetailedRegulationsContent = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-[#FFC900]">Regulatory Framework for Electrical Installations</h4>
      <p className="text-[#FFC900]/80">
        The regulatory framework governing electrical installations in the UK is complex and involves various standards, regulations, and legislation:
      </p>
      
      <div className="bg-[#1a1d17] p-4 rounded-md">
        <p className="text-[#FFC900]/80">
          <strong>Primary Legislation:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li><strong>Health and Safety at Work etc. Act 1974:</strong> Provides the legal framework for workplace safety</li>
          <li><strong>Building Act 1984:</strong> Enables Building Regulations to be made</li>
          <li><strong>Electricity Safety, Quality and Continuity Regulations 2002:</strong> Governs the supply of electricity</li>
          <li><strong>Electricity at Work Regulations 1989:</strong> Specific requirements for electrical safety in workplaces</li>
          <li><strong>Construction (Design and Management) Regulations 2015:</strong> Safety in construction projects</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Standards and Codes of Practice:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li><strong>BS 7671:</strong> Requirements for Electrical Installations (IET Wiring Regulations)</li>
          <li><strong>Guidance Notes:</strong> Published by the IET to provide practical guidance on BS 7671</li>
          <li><strong>BS 5266:</strong> Emergency lighting</li>
          <li><strong>BS 5839:</strong> Fire detection and alarm systems</li>
          <li><strong>BS 8300:</strong> Design of buildings for disabled people</li>
          <li><strong>BS EN 60079:</strong> Explosive atmospheres</li>
          <li><strong>BS EN 50600:</strong> Data centres</li>
        </ul>
      </div>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Compliance Documentation</h4>
      <p className="text-[#FFC900]/80">
        Comprehensive documentation is essential for demonstrating compliance:
      </p>
      
      <div className="bg-[#1a1d17] p-4 rounded-md">
        <p className="text-[#FFC900]/80">
          <strong>Design Documentation:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li><strong>Design risk assessments:</strong> Identifying and mitigating design risks</li>
          <li><strong>Specifications:</strong> Detailing requirements for equipment and installation</li>
          <li><strong>Drawings:</strong> Including layouts, schematic diagrams, and elevations</li>
          <li><strong>Calculations:</strong> Load assessments, cable sizing, voltage drop, fault levels</li>
          <li><strong>Energy efficiency assessment:</strong> As required by Part 8 of BS 7671</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Installation Certification:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li><strong>Electrical Installation Certificate:</strong> For new installations or major alterations</li>
          <li><strong>Minor Electrical Installation Works Certificate:</strong> For additions to existing circuits</li>
          <li><strong>Electrical Installation Condition Report:</strong> For existing installations</li>
          <li><strong>Schedule of Inspections:</strong> Recording visual inspection results</li>
          <li><strong>Schedule of Test Results:</strong> Recording measurements and test values</li>
          <li><strong>Building Regulations compliance certificate:</strong> From Building Control or competent person scheme</li>
        </ul>
      </div>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Special Location Requirements</h4>
      <p className="text-[#FFC900]/80">
        Additional regulations apply to special locations:
      </p>
      
      <div className="bg-[#1a1d17] p-4 rounded-md">
        <p className="text-[#FFC900]/80">
          <strong>Section 7 of BS 7671 covers special locations including:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li><strong>Bathrooms and shower rooms (701):</strong> Zone-based requirements</li>
          <li><strong>Swimming pools (702):</strong> Strict requirements based on defined zones</li>
          <li><strong>Saunas (703):</strong> Special considerations for high temperature environments</li>
          <li><strong>Construction sites (704):</strong> Temporary electrical installations</li>
          <li><strong>Agricultural premises (705):</strong> Protection in high-risk environments</li>
          <li><strong>Conducting locations with restricted movement (706):</strong> Enhanced protection</li>
          <li><strong>Medical locations (710):</strong> Category-based safety measures</li>
          <li><strong>Exhibitions and shows (711):</strong> Temporary installations</li>
          <li><strong>Solar PV systems (712):</strong> Specific requirements for PV installations</li>
          <li><strong>Mobile or transportable units (717):</strong> Self-contained installations</li>
          <li><strong>Marinas (709):</strong> Installations near water</li>
        </ul>
      </div>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Future Regulatory Developments</h4>
      <p className="text-[#FFC900]/80">
        Electrical design must consider upcoming regulatory changes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
        <li><strong>Net zero carbon requirements:</strong> Increasingly stringent energy efficiency standards</li>
        <li><strong>Electric vehicle infrastructure:</strong> Expanded requirements for EV charging</li>
        <li><strong>Smart buildings:</strong> Integration of intelligent controls and monitoring</li>
        <li><strong>Renewable energy:</strong> Enhanced requirements for integration with local generation</li>
        <li><strong>Cybersecurity:</strong> Growing focus on security of building control systems</li>
        <li><strong>Future amendments to BS 7671:</strong> Regular updates to align with European standards and technological developments</li>
      </ul>
      
      <div className="mt-4">
        <p className="italic text-[#FFC900]/70">
          Designers should stay informed about regulatory changes and ensure that designs not only meet current 
          requirements but are also adaptable to foreseeable future developments.
        </p>
      </div>
    </div>
  );
};

export default DetailedRegulationsContent;
