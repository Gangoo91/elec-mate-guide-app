
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const sections304: Record<string, SectionData> = {
  "1.1": {
    title: "Initial Verification Requirements",
    description: "Understanding the requirements and procedures for initial verification of electrical installations",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Purpose of Initial Verification</h2>
        <p>
          Initial verification is performed on new installations, additions, or alterations to existing installations before they are put into service. The purpose is to confirm that the installation is:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Safe for use</li>
          <li>Compliant with BS 7671 (IET Wiring Regulations)</li>
          <li>Free from defects and damage</li>
          <li>Correctly designed to meet client requirements</li>
          <li>Built according to the design specifications</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Legal Requirements</h3>
        <p>
          Initial verification is mandated by several regulations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Electricity at Work Regulations 1989</li>
          <li>Building Regulations Part P (for domestic installations)</li>
          <li>BS 7671 Requirements for Electrical Installations</li>
          <li>Health and Safety at Work Act 1974</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Documentation Required</h2>
        <p>
          Before starting the verification process, the following documentation should be available:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Design specifications and calculations</li>
          <li>Circuit diagrams, charts, or tables</li>
          <li>Distribution board schedules</li>
          <li>Cable specifications and route plans</li>
          <li>Risk assessments for the installation</li>
          <li>Manufacturer's equipment instructions</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Stages of Initial Verification</h2>
        
        <h3 className="text-lg font-medium mt-4">1. Visual Inspection</h3>
        <p>
          A thorough visual inspection must be completed before testing begins, checking:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Connection of conductors and protective devices</li>
          <li>Correct selection of conductors for current-carrying capacity</li>
          <li>Presence and correct location of protective devices</li>
          <li>Presence of fire barriers, seals, and protection against thermal effects</li>
          <li>Selection of equipment and protective measures appropriate for external influences</li>
          <li>Identification of conductors (particularly neutral and protective conductors)</li>
          <li>Presence of diagrams, warning notices, and other information</li>
          <li>Accessibility for operation, inspection, and maintenance</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">2. Testing Sequence</h3>
        <p>
          Tests must be carried out in the correct sequence:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mt-2">
          <li>Continuity of protective conductors</li>
          <li>Continuity of ring final circuit conductors</li>
          <li>Insulation resistance</li>
          <li>Polarity</li>
          <li>Earth electrode resistance (where applicable)</li>
          <li>Earth fault loop impedance</li>
          <li>RCD operation</li>
          <li>Phase sequence (for three-phase installations)</li>
          <li>Functional testing</li>
        </ol>
        
        <h2 className="text-xl font-semibold mt-6">Certification</h2>
        <p>
          Upon successful completion of verification, the following documentation must be provided:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Electrical Installation Certificate (EIC)</li>
          <li>Schedule(s) of Inspections</li>
          <li>Schedule(s) of Test Results</li>
          <li>Any departures from the regulations (if applicable)</li>
          <li>As-installed drawings and documentation</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Certification Requirements</h3>
        <p>
          The EIC must include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Details of the client</li>
          <li>Installation address</li>
          <li>Description and extent of the installation covered</li>
          <li>Declaration that the installation meets BS 7671</li>
          <li>Details of any departures from BS 7671</li>
          <li>Designer's, constructor's, and inspector's details and signatures</li>
          <li>Next inspection recommendation date</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Safety Precautions</h2>
        <p>
          When carrying out initial verification, safety precautions must be observed:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Use appropriate PPE (personal protective equipment)</li>
          <li>Ensure test equipment is suitable and properly calibrated</li>
          <li>Take precautions against inadvertent contact with live parts</li>
          <li>Inform all relevant persons before testing begins</li>
          <li>Use safe isolation procedures when necessary</li>
          <li>Follow the correct sequence of tests</li>
        </ul>
      </div>
    ),
  },
  "1.2": {
    title: "Periodic Inspection Methodologies",
    description: "Understanding the approaches and procedures for periodic inspection of electrical installations",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Purpose of Periodic Inspection</h2>
        <p>
          Periodic inspection and testing is performed on existing electrical installations to ensure they remain in a satisfactory condition for continued use. The main objectives are:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Identify deterioration that may lead to dangerous conditions</li>
          <li>Confirm compliance with current regulations or highlight deviations</li>
          <li>Identify any defects or non-compliances that need remedial action</li>
          <li>Provide documentation of the installation's condition</li>
          <li>Determine suitability for continued use or changed circumstances</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Legal and Regulatory Requirements</h3>
        <p>
          Periodic inspection is mandated by various regulations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Electricity at Work Regulations 1989, Regulation 4(2)</li>
          <li>Management of Health and Safety at Work Regulations 1999</li>
          <li>BS 7671 Requirements for Electrical Installations</li>
          <li>Specific industry or sector requirements (e.g., IET Guidance Notes)</li>
          <li>Insurance requirements</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Recommended Inspection Frequencies</h2>
        <p>
          The frequency of periodic inspection depends on the type of installation and environment:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Domestic premises: 10 years (5 years for rented properties)</li>
          <li>Commercial premises: 5 years</li>
          <li>Industrial premises: 3 years</li>
          <li>Educational establishments: 5 years</li>
          <li>Hospitals: 5 years</li>
          <li>Construction sites: 3 months</li>
          <li>Fire alarm and emergency lighting systems: 1 year</li>
          <li>Swimming pools: 1 year</li>
          <li>Caravan parks: 1 year</li>
        </ul>
        <p className="mt-2">
          These frequencies may be adjusted based on risk assessment, equipment condition, usage patterns, and environmental factors.
        </p>
        
        <h2 className="text-xl font-semibold mt-6">Planning the Inspection</h2>
        
        <h3 className="text-lg font-medium mt-4">Pre-inspection Activities</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Review previous inspection records and documentation</li>
          <li>Consult with the client about known issues or changes</li>
          <li>Determine the extent and limitations of the inspection</li>
          <li>Access arrangements for restricted areas</li>
          <li>Risk assessment for the inspection process</li>
          <li>Determine need for outages or isolations</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Required Documentation</h3>
        <p>
          The following documentation should be requested and reviewed:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Previous Electrical Installation Condition Report (EICR)</li>
          <li>Distribution board schedules</li>
          <li>Circuit diagrams or descriptions</li>
          <li>Specifications or as-built drawings</li>
          <li>Operation and maintenance manuals</li>
          <li>Records of alterations or additions</li>
          <li>Records of known issues or problems</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Inspection Methodology</h2>
        
        <h3 className="text-lg font-medium mt-4">Sampling Approach</h3>
        <p>
          Unlike initial verification, periodic inspection often uses a sampling approach:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>100% inspection of distribution equipment, protective devices, and critical areas</li>
          <li>Representative sample of accessories (sockets, switches, lighting points)</li>
          <li>Representative sample of similar circuits</li>
          <li>Focus on high-risk areas (damp locations, mechanical damage exposure)</li>
          <li>Increased sample size if defects are found</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Visual Inspection Sequence</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>External condition of the installation (weathering, physical damage)</li>
          <li>Main intake position and condition</li>
          <li>Consumer unit/distribution boards</li>
          <li>Circuit protective devices and their ratings</li>
          <li>Adequacy of earthing and bonding arrangements</li>
          <li>Cable types and condition</li>
          <li>Accessible accessories and their condition</li>
          <li>Signs of overheating, damage, or deterioration</li>
          <li>Presence of adequate identification and warning notices</li>
          <li>Changes to the building structure affecting the installation</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Testing Procedures</h2>
        <p>
          Testing during periodic inspection follows a specific sequence:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mt-2">
          <li>Dead tests (with supply disconnected):
            <ul className="list-disc pl-6 mt-1">
              <li>Continuity of protective conductors</li>
              <li>Continuity of ring final circuit conductors (where applicable)</li>
              <li>Insulation resistance</li>
              <li>Site-applied insulation (where applicable)</li>
              <li>Protection by electrical separation (where applicable)</li>
            </ul>
          </li>
          <li>Live tests (with supply connected):
            <ul className="list-disc pl-6 mt-1">
              <li>Polarity</li>
              <li>Earth fault loop impedance</li>
              <li>RCD operation</li>
              <li>Prospective fault current</li>
              <li>Phase sequence (for three-phase installations)</li>
              <li>Functional testing</li>
            </ul>
          </li>
        </ol>
        
        <h3 className="text-lg font-medium mt-4">Testing Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Customer requirements to maintain supply</li>
          <li>Inaccessible parts of the installation</li>
          <li>Operational constraints</li>
          <li>Potential damage to sensitive electronic equipment</li>
          <li>Health and safety considerations</li>
        </ul>
        <p className="mt-2">
          All limitations must be clearly documented in the inspection report.
        </p>
        
        <h2 className="text-xl font-semibold mt-6">Classification of Inspection Findings</h2>
        <p>
          Defects identified during inspection are classified according to their severity:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>C1 - Danger Present:</strong> Risk of injury. Immediate remedial action required</li>
          <li><strong>C2 - Potentially Dangerous:</strong> Urgent remedial action required</li>
          <li><strong>C3 - Improvement Recommended:</strong> Not dangerous but improvement would enhance safety</li>
          <li><strong>FI - Further Investigation:</strong> Further investigation required without delay</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Reporting and Documentation</h2>
        
        <h3 className="text-lg font-medium mt-4">Electrical Installation Condition Report (EICR)</h3>
        <p>
          The EICR must include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Details and location of the installation</li>
          <li>Extent and limitations of the inspection</li>
          <li>Schedule of inspection findings</li>
          <li>Schedule of test results</li>
          <li>Summary of defects and classification</li>
          <li>Overall assessment of the installation's condition</li>
          <li>Recommendation for next inspection</li>
          <li>Declaration signed by the inspector</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Follow-up Actions</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Clear communication of findings to the client</li>
          <li>Immediate notification of dangerous conditions (C1)</li>
          <li>Written quotation for remedial work if requested</li>
          <li>Scheduling of further investigations where required</li>
          <li>Documentation of any remedial work carried out</li>
          <li>Re-inspection after significant remedial work</li>
        </ul>
      </div>
    ),
  },
  "1.3": {
    title: "Common Installation Defects",
    description: "Identifying and understanding common defects found during electrical inspections",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Categories of Common Electrical Defects</h2>
        <p>
          Electrical installations can develop various defects over time due to wear, damage, improper installation, or changes in regulations. Recognizing these defects is essential for ensuring safety and compliance.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Earthing and Bonding Defects</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Undersized main earthing conductor</li>
          <li>Missing or inadequate main equipotential bonding</li>
          <li>Loose connections at earthing terminal or clamps</li>
          <li>Painted, corroded, or damaged earthing connections</li>
          <li>Non-compliant earth electrode arrangements</li>
          <li>Missing supplementary bonding in special locations</li>
          <li>High earth loop impedance values</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Consumer Unit/Distribution Board Issues</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Wooden backing panels (fire risk)</li>
          <li>Non-compliant metal consumer units (pre-Amendment 3)</li>
          <li>Inadequate IP rating for the environment</li>
          <li>Incorrect protective device ratings</li>
          <li>Missing or damaged blanking pieces</li>
          <li>Loose connections causing heat damage</li>
          <li>Inadequate working space in front of boards</li>
          <li>Incorrectly identified circuits</li>
          <li>Absence of RCD protection where required</li>
          <li>Mixed neutral/earth connections in the neutral bar</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Wiring System Defects</h2>
        
        <h3 className="text-lg font-medium mt-4">Cable Issues</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Damaged cable insulation or sheathing</li>
          <li>Exposed conductors</li>
          <li>Undersized conductors for current carrying capacity</li>
          <li>Excessive voltage drop</li>
          <li>Cables not adequately supported</li>
          <li>Non-compliant cable colors (old/mixed color codes)</li>
          <li>Cables run in notches in joists without mechanical protection</li>
          <li>Excessive bending radii causing damage</li>
          <li>Use of non-compliant cables (e.g., unsuitable for location)</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Containment System Problems</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Damaged trunking or conduit</li>
          <li>Inadequate support for containment systems</li>
          <li>Missing glands or bushes at entries to enclosures</li>
          <li>Non-continuous protective conductor in metallic containment</li>
          <li>Inadequate fire barriers at penetrations</li>
          <li>Overfilled containment systems</li>
          <li>Incompatible materials causing corrosion</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Accessory and Equipment Defects</h2>
        
        <h3 className="text-lg font-medium mt-4">Socket Outlet and Switch Issues</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Cracked or damaged faceplates</li>
          <li>Loose mounting causing movement</li>
          <li>Overheating due to loose connections</li>
          <li>Incorrect IP rating for the location</li>
          <li>Missing or damaged operational parts</li>
          <li>Non-compliant locations (e.g., too close to water)</li>
          <li>Inadequate RCD protection for outdoor sockets</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Lighting Installation Problems</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Inadequate clearance from combustible materials</li>
          <li>Missing lamp covers or diffusers</li>
          <li>Incorrect lamp types or wattages</li>
          <li>Damaged pendant sets or lampholders</li>
          <li>Recessed downlights without appropriate fire rating</li>
          <li>Missing covers on junction boxes</li>
          <li>Inadequate support for luminaires</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Protection Device Defects</h2>
        
        <h3 className="text-lg font-medium mt-4">Circuit Breaker and Fuse Issues</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Incorrect type for the application</li>
          <li>Wrong rating for the conductor size or load</li>
          <li>Damaged or modified devices</li>
          <li>Evidence of overheating</li>
          <li>Non-approved/counterfeit devices</li>
          <li>Inadequate breaking capacity for prospective fault current</li>
          <li>Mixed types within the same consumer unit</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">RCD and RCBO Defects</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Failure to trip within required time</li>
          <li>Incorrect sensitivity for the application</li>
          <li>Missing RCD protection where required by regulations</li>
          <li>Nuisance tripping due to leakage currents</li>
          <li>RCDs affected by neutral-earth faults</li>
          <li>Inappropriate RCD type for the load characteristics</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Special Installation Defects</h2>
        
        <h3 className="text-lg font-medium mt-4">Bathroom Installation Issues</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Electrical equipment within incorrect zones</li>
          <li>Missing supplementary bonding (if required)</li>
          <li>Inadequate IP ratings for accessories</li>
          <li>Non-compliant electric heating installations</li>
          <li>Lack of required RCD protection</li>
          <li>Inappropriate isolating switches</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Outdoor Installation Problems</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Inadequate IP ratings for external equipment</li>
          <li>Missing RCD protection</li>
          <li>Cable installation depth insufficient</li>
          <li>Missing or damaged cable warning tape/tiles</li>
          <li>Degradation of equipment due to UV exposure</li>
          <li>Inadequate protection against corrosion</li>
          <li>Incorrect cable types for external use</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Documentation and Labelling Defects</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Missing or incomplete circuit charts</li>
          <li>Absence of required warning notices</li>
          <li>No RCD periodic test notice</li>
          <li>Missing next test due labels</li>
          <li>No isolation procedure information</li>
          <li>Absence of voltage warning labels</li>
          <li>No identification of dual supply sources</li>
          <li>Missing earthing/bonding labels</li>
          <li>Absence of certification for previous work</li>
        </ul>
      </div>
    ),
  },
};
