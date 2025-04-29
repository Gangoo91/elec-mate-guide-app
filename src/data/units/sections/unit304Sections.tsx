
import React from 'react';

export const sections304: Record<string, { 
  title: string; 
  description?: string; 
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}> = {
  "1.1": {
    title: "Initial Verification Requirements",
    description: "Understanding essential verification procedures before commissioning electrical installations",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Initial Verification Requirements</h2>
        
        <p>Initial verification is a crucial step in ensuring that new electrical installations comply with regulations and are safe to use.</p>
        
        <h3>Key Components of Initial Verification</h3>
        <ul>
          <li>Visual inspection of all accessible components</li>
          <li>Confirmation that equipment complies with relevant standards</li>
          <li>Verification of conductor sizes and protective device ratings</li>
          <li>Checking for fire barriers, protection against thermal effects</li>
          <li>Verification of disconnection times for protective devices</li>
        </ul>
        
        <h3>Documentation Requirements</h3>
        <ul>
          <li>Electrical Installation Certificate (EIC)</li>
          <li>Schedule of Inspections</li>
          <li>Schedule of Test Results</li>
          <li>Distribution board schedules</li>
          <li>Circuit charts and diagrams</li>
        </ul>
        
        <h3>Inspector Qualifications</h3>
        <p>Initial verification must be carried out by a skilled person with:</p>
        <ul>
          <li>Competence in inspection and testing techniques</li>
          <li>Understanding of the installation being tested</li>
          <li>Knowledge of potential hazards during testing</li>
          <li>Experience in interpreting test results</li>
          <li>Appropriate qualifications (e.g., City & Guilds 2391-50 or 2394)</li>
        </ul>
      </div>
    )
  },
  "1.2": {
    title: "Periodic Inspection Methodologies",
    description: "Systematic approaches for conducting thorough periodic inspections",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Periodic Inspection Methodologies</h2>
        
        <p>Periodic inspection determines whether an existing installation is in a satisfactory condition for continued use.</p>
        
        <h3>Sampling Techniques</h3>
        <ul>
          <li>Statistical sampling for large installations</li>
          <li>Risk-based approach focusing on high-risk areas</li>
          <li>Age-related sampling for older components</li>
          <li>Increased sample sizes where defects are found</li>
        </ul>
        
        <h3>Inspection Sequence</h3>
        <ol>
          <li>Review documentation and previous inspection reports</li>
          <li>Discuss installation use with client</li>
          <li>Visual inspection of accessible parts</li>
          <li>Testing of protective measures</li>
          <li>Assessment of risk categories for observed defects</li>
          <li>Compilation of the Electrical Installation Condition Report (EICR)</li>
        </ol>
        
        <h3>Limitations of Inspection</h3>
        <ul>
          <li>Extent and limitations must be agreed with client</li>
          <li>Areas not accessible should be clearly documented</li>
          <li>Reasons for limitations should be recorded</li>
          <li>Impact of limitations on safety assessment</li>
        </ul>
      </div>
    )
  },
  "1.3": {
    title: "Common Installation Defects",
    description: "Identifying and classifying typical defects found during inspections",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Common Installation Defects</h2>
        
        <p>Inspections frequently reveal certain types of defects that compromise safety or compliance.</p>
        
        <h3>Dangerous Defects (Code C1)</h3>
        <ul>
          <li>Exposed live parts accessible to touch</li>
          <li>Absence of earthing for metal parts</li>
          <li>Incorrect polarity</li>
          <li>Damaged insulation exposing conductors</li>
          <li>Water ingress near electrical equipment</li>
        </ul>
        
        <h3>Potentially Dangerous Defects (Code C2)</h3>
        <ul>
          <li>Inadequate IP ratings for location</li>
          <li>Broken accessories with no immediate exposure</li>
          <li>Overloaded circuits</li>
          <li>Missing identification labels</li>
          <li>Improperly secured equipment or cables</li>
          <li>Unsatisfactory earthing arrangements</li>
        </ul>
        
        <h3>Improvement Recommended (Code C3)</h3>
        <ul>
          <li>Lack of RCD protection (in some circumstances)</li>
          <li>Outdated but safe equipment</li>
          <li>Non-compliance with current regulations but acceptable under previous regulations</li>
          <li>Minor deviations from current best practice</li>
        </ul>
        
        <h3>Documentation and Reporting</h3>
        <p>Each defect must be:</p>
        <ul>
          <li>Accurately recorded on the EICR</li>
          <li>Correctly classified according to risk</li>
          <li>Located precisely for future rectification</li>
          <li>Photographed where possible for evidence</li>
        </ul>
      </div>
    )
  },
  "2.1": {
    title: "Continuity and Insulation Resistance Testing",
    description: "Techniques and procedures for testing circuit continuity and insulation integrity",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Continuity and Insulation Resistance Testing</h2>
        
        <h3>Continuity Testing</h3>
        <p>Tests to verify the integrity of protective conductors and ring final circuits.</p>
        
        <h4>Protective Conductor Continuity</h4>
        <ul>
          <li>Test between main earthing terminal and exposed conductive parts</li>
          <li>Low resistance indicates good connection (typically &lt;0.05Ω)</li>
          <li>Test current: minimum 200mA</li>
          <li>Account for test lead resistance</li>
          <li>R₁+R₂ values needed for fault protection verification</li>
        </ul>
        
        <h4>Ring Final Circuit Continuity</h4>
        <ul>
          <li>End-to-end test of each conductor (L-L, N-N, PE-PE)</li>
          <li>Cross-connection test (L-N, L-PE, N-PE)</li>
          <li>Calculations to verify uniform resistance distribution</li>
          <li>Identify any interconnections or breaks</li>
        </ul>
        
        <h3>Insulation Resistance Testing</h3>
        
        <h4>Test Procedure</h4>
        <ul>
          <li>Disconnect sensitive electronic equipment</li>
          <li>Test voltage: 250V for SELV/PELV, 500V for up to 500V installations</li>
          <li>Test between live conductors and between all live conductors and PE</li>
          <li>Minimum acceptable values: 1MΩ for circuits up to 500V</li>
          <li>Higher values expected in new installations (typically &gt;200MΩ)</li>
        </ul>
        
        <h4>Common Issues</h4>
        <ul>
          <li>Low readings due to moisture ingress</li>
          <li>Parallel paths through connected equipment</li>
          <li>Surge protection devices affecting readings</li>
          <li>Electronic components requiring disconnection</li>
          <li>Neutral linked to earth at distribution board</li>
        </ul>
      </div>
    )
  },
  "2.2": {
    title: "Earth Fault Loop Impedance Testing",
    description: "Methods for measuring and assessing earth fault loop impedance",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Earth Fault Loop Impedance Testing</h2>
        
        <p>Earth fault loop impedance testing verifies that protective devices will operate within required disconnection times.</p>
        
        <h3>Testing Methods</h3>
        
        <h4>Ze - External Earth Fault Loop Impedance</h4>
        <ul>
          <li>Measured at origin of installation (consumer unit/distribution board)</li>
          <li>Test between phase conductor and protective conductor at main earthing terminal</li>
          <li>Typical values: TN-C-S (PME) systems: around 0.35Ω, TT systems: up to 200Ω</li>
          <li>Values should be less than tabulated maximum values for protective device</li>
        </ul>
        
        <h4>Zs - Circuit Earth Fault Loop Impedance</h4>
        <ul>
          <li>Measured at furthest point of each circuit</li>
          <li>Test between phase conductor and protective conductor</li>
          <li>Values must be below maximum permitted for protective device type and rating</li>
          <li>Measured value should include R₁+R₂ (circuit resistance) plus Ze</li>
        </ul>
        
        <h3>Test Considerations</h3>
        <ul>
          <li>Safe testing methods - avoid disconnecting circuit protective conductors</li>
          <li>Temperature correction factors (measured at 20°C, operating at higher temperatures)</li>
          <li>RCD presence may require special test settings</li>
          <li>Supply voltage fluctuations affecting readings</li>
          <li>Documentation of all measured values for verification against calculated values</li>
        </ul>
        
        <h3>Verification Against Design Values</h3>
        <ul>
          <li>Comparing measured values with maximum permitted values</li>
          <li>Applying required correction factors</li>
          <li>Assessment of compliance with BS 7671 disconnection times</li>
          <li>Evaluating need for supplementary bonding if values are too high</li>
        </ul>
      </div>
    )
  },
  "2.3": {
    title: "RCD Testing and Polarity Checks",
    description: "Procedures for testing RCD operation and verifying correct polarity",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>RCD Testing and Polarity Checks</h2>
        
        <h3>RCD Testing</h3>
        
        <h4>Test Requirements</h4>
        <ul>
          <li>Test using purpose-designed RCD tester</li>
          <li>Verify that RCD trips within specified time at rated operating current</li>
          <li>Standard RCDs: must trip within 300ms at rated current (30mA, 100mA, etc.)</li>
          <li>S-type (time-delayed) RCDs: must trip between 130ms and 500ms at rated current</li>
          <li>Fast-acting RCDs for additional protection: must trip within 40ms at rated current</li>
        </ul>
        
        <h4>Test Procedure</h4>
        <ol>
          <li>Test at 50% rated current (no trip should occur)</li>
          <li>Test at 100% rated current (must trip within specified time)</li>
          <li>Test at 5× rated current (must trip within 40ms for general RCDs)</li>
          <li>Test both 0° and 180° phase angles</li>
          <li>Record worst-case trip time</li>
          <li>Verify manual test button operation</li>
        </ol>
        
        <h3>Polarity Checks</h3>
        
        <h4>Importance of Polarity Testing</h4>
        <ul>
          <li>Ensures single-pole devices interrupt the line conductor</li>
          <li>Verifies that Edison screw lampholders have line connected to center contact</li>
          <li>Confirms correct connection of switched lines</li>
          <li>Prevents neutral-earth reversal hazards</li>
        </ul>
        
        <h4>Testing Methods</h4>
        <ul>
          <li>Visual verification during installation</li>
          <li>Continuity testing to verify line connections</li>
          <li>Voltage indicator to confirm line/neutral identification</li>
          <li>Testing at every relevant point in the installation</li>
          <li>Special attention to switched connections</li>
        </ul>
        
        <h4>Common Polarity Faults</h4>
        <ul>
          <li>Reversed connections in socket outlets</li>
          <li>Incorrect connections in consumer units/distribution boards</li>
          <li>Switched neutral instead of line</li>
          <li>Two-way switching wiring errors</li>
          <li>Incorrect identification of conductors in multi-core cables</li>
        </ul>
      </div>
    )
  },
  "3.1": {
    title: "Pre-commissioning Checks",
    description: "Critical checks required before energizing electrical installations",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Pre-commissioning Checks</h2>
        
        <p>Thorough checks before energizing an electrical installation are essential to ensure safety and compliance.</p>
        
        <h3>Documentation Review</h3>
        <ul>
          <li>Verification that design documentation is complete</li>
          <li>Check that all certification for equipment is available</li>
          <li>Review risk assessments and method statements</li>
          <li>Ensure all required permissions are in place</li>
          <li>Verify that installation complies with specification</li>
        </ul>
        
        <h3>Visual Inspection</h3>
        <ul>
          <li>Confirmation that all equipment is correctly installed</li>
          <li>Check for physical damage to equipment</li>
          <li>Verification of cable types and sizes</li>
          <li>Assessment of protection against environmental factors</li>
          <li>Check that all accessories are properly fixed</li>
          <li>Verify that all connections are secure</li>
        </ul>
        
        <h3>Safety Measures</h3>
        <ul>
          <li>Ensure all required warning notices are in place</li>
          <li>Verify presence of fire barriers and seals</li>
          <li>Check provision of protective equipment</li>
          <li>Confirm emergency procedures are established</li>
          <li>Verify isolation procedures are documented</li>
        </ul>
        
        <h3>Pre-power Checks</h3>
        <ul>
          <li>Verification of correct phasing</li>
          <li>Confirmation that equipment is ready for energization</li>
          <li>Check that all temporary installations are removed</li>
          <li>Ensure all covers and safety devices are in place</li>
          <li>Final visual inspection before energization</li>
        </ul>
      </div>
    )
  },
  "3.2": {
    title: "Functional Testing Procedures",
    description: "Methods for testing the functionality of electrical systems after installation",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Functional Testing Procedures</h2>
        
        <p>Functional testing verifies that all installed systems operate correctly and as intended.</p>
        
        <h3>Sequence of Functional Tests</h3>
        <ol>
          <li>Systematic powering up of circuits in sequence</li>
          <li>Testing of each circuit under load conditions</li>
          <li>Verification of operation of all switching devices</li>
          <li>Testing of protective devices by simulation where necessary</li>
          <li>Operational testing of all equipment and systems</li>
        </ol>
        
        <h3>Testing Specific Systems</h3>
        
        <h4>Lighting Systems</h4>
        <ul>
          <li>Verification of switching arrangements</li>
          <li>Testing of dimmers and controls</li>
          <li>Check for correct lamp types and ratings</li>
          <li>Verification of emergency lighting operation</li>
          <li>Testing of automatic control systems (sensors, timers)</li>
        </ul>
        
        <h4>Power Systems</h4>
        <ul>
          <li>Load testing of socket outlets</li>
          <li>Verification of fixed equipment operation</li>
          <li>Testing of interlocks and safety systems</li>
          <li>Verification of motor rotation and operation</li>
          <li>Testing of special installations (e.g., heating systems)</li>
        </ul>
        
        <h4>Control Systems</h4>
        <ul>
          <li>Testing of control circuits and interfaces</li>
          <li>Verification of programmable controls</li>
          <li>Testing of monitoring systems</li>
          <li>Verification of alarm functions</li>
          <li>Testing of remote control capabilities</li>
        </ul>
        
        <h3>Documentation of Tests</h3>
        <ul>
          <li>Recording of all test results</li>
          <li>Documentation of any deviations from expected performance</li>
          <li>Listing of any adjustments made during testing</li>
          <li>Verification of client requirements being met</li>
          <li>Sign-off by responsible person</li>
        </ul>
      </div>
    )
  },
  "3.3": {
    title: "Documentation and Certification",
    description: "Required documentation for compliant electrical installations",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Documentation and Certification</h2>
        
        <p>Proper documentation is essential for regulatory compliance and future reference.</p>
        
        <h3>Required Documentation</h3>
        <ul>
          <li><strong>Electrical Installation Certificate (EIC)</strong> - For new installations or major alterations</li>
          <li><strong>Minor Electrical Installation Works Certificate (MEIWC)</strong> - For small additions to existing installations</li>
          <li><strong>Schedule of Test Results</strong> - Recording all measured values</li>
          <li><strong>Schedule of Inspections</strong> - Checklist of visual inspection items</li>
          <li><strong>Electrical Installation Condition Report (EICR)</strong> - For periodic inspection</li>
          <li><strong>As-built drawings</strong> - Updated schematics showing actual installation</li>
          <li><strong>Operation and maintenance manuals</strong> - For installed equipment</li>
        </ul>
        
        <h3>Certificate Contents</h3>
        <ul>
          <li>Details of client and installation address</li>
          <li>Description of work carried out</li>
          <li>Design, construction, and inspection/testing declarations</li>
          <li>Details of departures from standards (if any)</li>
          <li>Next inspection recommendation date</li>
          <li>Details of signatories (designer, constructor, inspector/tester)</li>
        </ul>
        
        <h3>Additional Documentation</h3>
        <ul>
          <li>Risk assessments</li>
          <li>Method statements</li>
          <li>Commissioning records</li>
          <li>Distribution board schedules</li>
          <li>Manufacturer's instructions and warranties</li>
          <li>Special location certificates (e.g., bathroom zones, swimming pools)</li>
        </ul>
        
        <h3>Documentation Management</h3>
        <ul>
          <li>Secure storage of original documentation</li>
          <li>Provision of copies to client/building owner</li>
          <li>Electronic backup of documentation where possible</li>
          <li>Clear organization for easy future reference</li>
          <li>Compliance with retention requirements</li>
        </ul>
      </div>
    )
  },
};
