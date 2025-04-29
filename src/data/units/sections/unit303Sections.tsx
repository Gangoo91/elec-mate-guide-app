
import React from 'react';
import SystematicTroubleshooting from '@/components/sections/unit303/SystematicTroubleshooting';
import TestEquipment from '@/components/sections/unit303/TestEquipment';
import TestResults from '@/components/sections/unit303/TestResults';
import OpenCircuits from '@/components/sections/unit303/fault-diagnosis/OpenCircuits';
import ShortCircuits from '@/components/sections/unit303/fault-diagnosis/ShortCircuits';
import HighResistance from '@/components/sections/unit303/fault-diagnosis/HighResistance';
import IsolationProcedures from '@/components/sections/unit303/rectification/IsolationProcedures';
import ComponentReplacement from '@/components/sections/unit303/rectification/ComponentReplacement';
import SystemRestoration from '@/components/sections/unit303/rectification/SystemRestoration';

export const sections303: Record<string, { 
  title: string; 
  description?: string; 
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}> = {
  "1.1": {
    title: "Short Circuits",
    description: "Understanding the causes, effects, and diagnosis of different types of short circuit faults.",
    content: (
      <div className="prose prose-invert max-w-none">
        <ShortCircuits />
      </div>
    )
  },
  "1.2": {
    title: "Open Circuits",
    description: "Identifying and diagnosing breaks in electrical paths that prevent current flow.",
    content: (
      <div className="prose prose-invert max-w-none">
        <OpenCircuits />
      </div>
    )
  },
  "1.3": {
    title: "Earth Faults",
    description: "Recognizing unintentional connections between live conductors and earth.",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Earth Faults</h2>
        <p>Earth faults occur when there is an unintentional connection between a live conductor and earth.</p>
        
        <h3>Characteristics of Earth Faults</h3>
        <ul>
          <li>Often caused by insulation breakdown</li>
          <li>Can create dangerous touch voltages on equipment</li>
          <li>Protected by RCDs (Residual Current Devices)</li>
          <li>May develop gradually over time due to deterioration</li>
        </ul>
        
        <h3>Detection Methods</h3>
        <ul>
          <li>Insulation resistance testing between live conductors and earth</li>
          <li>RCD testing to verify protection is functioning</li>
          <li>Earth fault loop impedance measurements</li>
        </ul>
        
        <h3>Common Causes</h3>
        <ul>
          <li>Moisture ingress</li>
          <li>Physical damage to cables</li>
          <li>Aging insulation</li>
          <li>Poor terminations allowing conductor exposure</li>
        </ul>
      </div>
    )
  },
  "1.4": {
    title: "Overloads and Equipment Failures",
    description: "Understanding excessive current flow and internal component failures.",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Overloads and Equipment Failures</h2>
        
        <section>
          <h3>Overloads</h3>
          <p>Excessive current flow through circuits without short circuits:</p>
          <ul>
            <li>Too many devices connected to one circuit</li>
            <li>Equipment drawing more current than design specifications</li>
            <li>Causes overheating of conductors and components</li>
            <li>May trigger thermal protection in MCBs</li>
            <li>Usually develops over time rather than instantaneously</li>
          </ul>
          
          <h4>Detecting Overloads</h4>
          <ul>
            <li>Current measurement shows higher than expected values</li>
            <li>Thermal imaging reveals hotspots</li>
            <li>Frequent tripping of thermal-magnetic circuit breakers</li>
            <li>Cables or equipment warm to touch</li>
          </ul>
        </section>
        
        <section>
          <h3>Equipment Failures</h3>
          <p>Internal component failures within electrical equipment:</p>
          <ul>
            <li>Failed motors, transformers, or electronic components</li>
            <li>Worn mechanical parts causing electrical issues</li>
            <li>Thermal damage to equipment</li>
            <li>Manufacturing defects manifesting over time</li>
          </ul>
          
          <h4>Common Equipment Failures</h4>
          <ul>
            <li>Motor winding failure due to overheating or moisture</li>
            <li>Switch contact wear or welding</li>
            <li>Capacitor failure in power factor correction or motor start circuits</li>
            <li>Electronic control board component failures</li>
            <li>Transformer insulation breakdown</li>
          </ul>
        </section>
      </div>
    )
  },
  "1.5": {
    title: "High Resistance Connections",
    description: "Identifying and resolving connections with excessive resistance causing localized heating.",
    content: (
      <div className="prose prose-invert max-w-none">
        <HighResistance />
      </div>
    )
  },
  "2.1": {
    title: "Systematic Troubleshooting Methods",
    description: "Applying logical step-by-step fault finding processes for electrical systems.",
    content: (
      <div className="prose prose-invert max-w-none">
        <SystematicTroubleshooting />
      </div>
    )
  },
  "2.2": {
    title: "Using Test Equipment Effectively",
    description: "Proper selection and application of testing instruments for fault diagnosis.",
    content: (
      <div className="prose prose-invert max-w-none">
        <TestEquipment />
      </div>
    )
  },
  "2.3": {
    title: "Interpreting Test Results",
    description: "Understanding and analyzing readings from various electrical testing equipment.",
    content: (
      <div className="prose prose-invert max-w-none">
        <TestResults />
      </div>
    )
  },
  "3.1": {
    title: "Safe Isolation Process",
    description: "Following mandatory procedures for working safely on electrical systems.",
    content: (
      <div className="prose prose-invert max-w-none">
        <IsolationProcedures />
      </div>
    )
  },
  "3.2": {
    title: "Risk Assessment",
    description: "Evaluating potential hazards before beginning electrical fault-finding work.",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Risk Assessment for Fault Diagnosis</h2>
        
        <p>Evaluating potential hazards before beginning work is essential for ensuring safety during electrical fault diagnosis and repair.</p>
        
        <h3>Key Elements of Risk Assessment</h3>
        <ul>
          <li><strong>Hazard Identification:</strong> Identify all potential hazards in the work area</li>
          <li><strong>Risk Evaluation:</strong> Assess risks to yourself and others</li>
          <li><strong>Control Measures:</strong> Determine appropriate control measures</li>
          <li><strong>Documentation:</strong> Document the assessment process and findings</li>
          <li><strong>Communication:</strong> Communicate risks and controls to all affected parties</li>
        </ul>
        
        <h3>Common Hazards in Electrical Fault Finding</h3>
        <ul>
          <li>Electric shock</li>
          <li>Arc flash/blast</li>
          <li>Fire risk from fault currents</li>
          <li>Working at height (for lighting circuits, etc.)</li>
          <li>Restricted access areas (lofts, basements)</li>
          <li>Hot surfaces</li>
          <li>Presence of water/moisture</li>
        </ul>
        
        <h3>Assessing Risk Levels</h3>
        <p>For each identified hazard, consider:</p>
        <ul>
          <li>Likelihood of occurrence (high, medium, low)</li>
          <li>Severity of potential harm (major, serious, minor)</li>
          <li>Persons at risk (yourself, other workers, building occupants)</li>
          <li>Existing control measures and their effectiveness</li>
        </ul>
        
        <h3>Implementing Control Measures</h3>
        <p>Follow the hierarchy of controls:</p>
        <ol>
          <li><strong>Elimination:</strong> Can the hazard be completely removed?</li>
          <li><strong>Substitution:</strong> Can a safer alternative be used?</li>
          <li><strong>Engineering controls:</strong> Can the hazard be isolated or guarded?</li>
          <li><strong>Administrative controls:</strong> Safe working procedures, training</li>
          <li><strong>Personal Protective Equipment (PPE):</strong> Last line of defense</li>
        </ol>
      </div>
    )
  },
  "3.3": {
    title: "Circuit Identification and Isolation",
    description: "Ensuring correct circuit identification and safe isolation methods.",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Circuit Identification and Isolation</h2>
        
        <p>Correctly identifying and isolating circuits is crucial for safe fault diagnosis and rectification.</p>
        
        <h3>Circuit Identification Methods</h3>
        <ul>
          <li><strong>Distribution board schedules:</strong> Verify accuracy and update if necessary</li>
          <li><strong>Circuit tracing:</strong> Using specialized tools or systematically switching circuits</li>
          <li><strong>Continuity testing:</strong> Between the supply point and the circuit components</li>
          <li><strong>Visual inspection:</strong> Following cable routes where visible</li>
          <li><strong>Consumer feedback:</strong> Information from customers about what stopped working</li>
        </ul>
        
        <h3>Verifying Circuit Identity</h3>
        <p>Before isolation, always verify the circuit identity to avoid:</p>
        <ul>
          <li>Disconnecting critical circuits (life support, security systems, etc.)</li>
          <li>Affecting areas beyond the intended work zone</li>
          <li>Isolating the wrong circuit, leaving your work area live</li>
        </ul>
        
        <h3>Isolation Points</h3>
        <p>Consider all possible isolation points:</p>
        <ul>
          <li>Main switches</li>
          <li>Individual MCBs or fuses</li>
          <li>Isolator switches</li>
          <li>Fused connection units</li>
          <li>Multiple feed points (ensure all are identified)</li>
        </ul>
        
        <h3>Isolation Impact Assessment</h3>
        <p>Before isolating, consider:</p>
        <ul>
          <li>What other systems will be affected?</li>
          <li>Are there any critical systems that need temporary supply?</li>
          <li>Have all relevant people been notified?</li>
          <li>Is the timing appropriate for the isolation?</li>
        </ul>
        
        <h3>Special Considerations</h3>
        <ul>
          <li>IT systems and servers may require controlled shutdown</li>
          <li>Alarm systems may have battery backup and remain live</li>
          <li>Some systems may have UPS (Uninterruptible Power Supply)</li>
          <li>Industrial equipment may require specific shutdown procedures</li>
          <li>Medical facilities may have special requirements</li>
        </ul>
      </div>
    )
  },
  "3.4": {
    title: "Lock-off Devices and Warning Signs",
    description: "Preventing accidental re-energization of circuits during work.",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Lock-off Devices and Warning Signs</h2>
        
        <p>Securing isolated circuits is essential to prevent accidental re-energization during work.</p>
        
        <h3>Types of Lock-off Devices</h3>
        <ul>
          <li><strong>MCB lock-offs:</strong> Devices that physically prevent MCBs from being switched on</li>
          <li><strong>Fuse lockouts:</strong> Devices that prevent fuses from being reinstalled</li>
          <li><strong>Switch lockouts:</strong> Devices that secure isolator switches in the off position</li>
          <li><strong>Circuit breaker lockouts:</strong> For larger industrial circuit breakers</li>
          <li><strong>Panel lockouts:</strong> Securing entire panels or consumer units</li>
          <li><strong>Padlocks:</strong> Used with the above devices for personal security</li>
          <li><strong>Multi-lock hasps:</strong> Allow multiple padlocks for team working environments</li>
        </ul>
        
        <h3>Proper Application of Locks</h3>
        <ul>
          <li>Each person working on the circuit should apply their own lock</li>
          <li>Only the person who applied a lock should remove it</li>
          <li>Use uniquely keyed padlocks (no master keys or duplicate keys)</li>
          <li>Keep keys in your possession at all times during work</li>
          <li>Apply locks immediately after isolation and verification</li>
        </ul>
        
        <h3>Warning Signs and Tags</h3>
        <ul>
          <li><strong>Danger tags:</strong> Attached to lockout devices indicating work in progress</li>
          <li><strong>Information tags:</strong> Providing details about who is working on the system</li>
          <li><strong>Contact details:</strong> Who to contact before attempting to restore power</li>
          <li><strong>Warning notices:</strong> Placed at work areas and access points</li>
          <li><strong>Barriers:</strong> Physical barriers around exposed live parts if complete isolation is not possible</li>
        </ul>
        
        <h3>Permit-to-Work Systems</h3>
        <p>For complex or high-risk situations:</p>
        <ul>
          <li>Formal documentation of isolation status</li>
          <li>Clear definition of isolated areas and work to be done</li>
          <li>Signatures of authorizing person and worker</li>
          <li>Time limits for work completion</li>
          <li>Handback procedure when work is complete</li>
        </ul>
        
        <h3>Communicating Isolation Status</h3>
        <ul>
          <li>Inform all affected personnel about the isolation</li>
          <li>Brief team members on which circuits are isolated</li>
          <li>Clearly mark areas where power is off</li>
          <li>Establish communication procedures for reporting when work is complete</li>
        </ul>
      </div>
    )
  },
  "4.1": {
    title: "Recording Fault Diagnosis Findings",
    description: "Maintaining accurate records of diagnostic processes and results.",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Recording Fault Diagnosis Findings</h2>
        
        <p>Maintaining accurate records of diagnostic processes is essential for effective fault management and regulatory compliance.</p>
        
        <h3>Essential Documentation</h3>
        <ul>
          <li><strong>Test results:</strong> Document all test values and testing conditions</li>
          <li><strong>Diagnostic sequence:</strong> Record the step-by-step process followed</li>
          <li><strong>Equipment condition:</strong> Note observations about the state of components</li>
          <li><strong>Visual evidence:</strong> Photograph faults where appropriate</li>
          <li><strong>Time records:</strong> Maintain time-stamped records of when tests were performed</li>
        </ul>
        
        <h3>Documentation Format</h3>
        <p>Records should be:</p>
        <ul>
          <li>Clear and legible</li>
          <li>Sufficiently detailed to be understood by other qualified persons</li>
          <li>Stored securely for the required retention period</li>
          <li>Easily accessible for future reference</li>
          <li>Protected from damage or loss</li>
        </ul>
        
        <h3>Test Result Recording</h3>
        <p>For each test carried out, record:</p>
        <ul>
          <li>The specific test performed</li>
          <li>The equipment used (including serial numbers and calibration dates)</li>
          <li>The measured values obtained</li>
          <li>The acceptable range for the test</li>
          <li>Pass/fail status</li>
        </ul>
        
        <h3>Digital Documentation</h3>
        <ul>
          <li>Electronic test instruments with data recording capabilities</li>
          <li>Digital photographs of installations before and after repair</li>
          <li>Mobile apps for test result recording</li>
          <li>Cloud storage for secure backup of records</li>
        </ul>
      </div>
    )
  },
  "4.2": {
    title: "Completing Required Paperwork",
    description: "Understanding necessary documentation for compliance and record-keeping.",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Completing Required Paperwork</h2>
        
        <p>Proper documentation is essential for compliance with regulations and for maintaining accurate records of work carried out.</p>
        
        <h3>Types of Certification Required</h3>
        <ul>
          <li><strong>Minor Electrical Installation Works Certificate (MEIWC):</strong> For small repairs or alterations to a single circuit</li>
          <li><strong>Electrical Installation Certificate (EIC):</strong> For more extensive work or additions</li>
          <li><strong>Electrical Installation Condition Report (EICR):</strong> When condition reporting includes fault finding</li>
          <li><strong>Building Regulation notification:</strong> Where Building Control notification is required</li>
        </ul>
        
        <h3>Minor Electrical Installation Works Certificate</h3>
        <p>Required for:</p>
        <ul>
          <li>The replacement of damaged accessories with like-for-like</li>
          <li>Addition of sockets or lighting points to an existing circuit</li>
          <li>Repair of faulty circuit components</li>
          <li>Replacement of cable sections</li>
        </ul>
        <p>Must include:</p>
        <ul>
          <li>Details of the work carried out</li>
          <li>Results of testing after completion</li>
          <li>Declaration that the work complies with BS 7671</li>
        </ul>
        
        <h3>Electrical Installation Certificate</h3>
        <p>Required for:</p>
        <ul>
          <li>Replacement of consumer units</li>
          <li>Installation of new circuits</li>
          <li>Major alterations to existing installations</li>
        </ul>
        <p>Must include:</p>
        <ul>
          <li>Design, construction, and verification sections</li>
          <li>Schedule of inspections</li>
          <li>Schedule of test results</li>
          <li>Details of departures from BS 7671 (if any)</li>
        </ul>
        
        <h3>Fault Reports</h3>
        <p>Good practice documentation should include:</p>
        <ul>
          <li>Initial fault symptoms reported</li>
          <li>Tests carried out and results</li>
          <li>Identified cause of the fault</li>
          <li>Work done to rectify the fault</li>
          <li>Post-rectification testing results</li>
          <li>Recommendations for preventing future issues</li>
        </ul>
        
        <h3>Supporting Documentation</h3>
        <ul>
          <li>Risk assessment records</li>
          <li>Method statements for complex procedures</li>
          <li>Updates to distribution board schedules</li>
          <li>Updates to installation logbooks</li>
          <li>Maintenance records</li>
          <li>User instructions for new equipment</li>
        </ul>
      </div>
    )
  },
  "4.3": {
    title: "Communication with Clients and Managers",
    description: "Effectively conveying technical information to non-technical individuals.",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>Communication with Clients and Managers</h2>
        
        <p>Effectively conveying technical information to non-technical individuals is a vital skill for electricians.</p>
        
        <h3>Explaining Fault Causes</h3>
        <ul>
          <li>Use clear, non-technical language</li>
          <li>Avoid excessive jargon or industry acronyms</li>
          <li>Use analogies to explain complex electrical concepts</li>
          <li>Show visual evidence where appropriate (photos of damaged components)</li>
          <li>Relate the fault to everyday experiences where possible</li>
        </ul>
        
        <h3>Communicating Repair Options</h3>
        <ul>
          <li>Present all viable options clearly</li>
          <li>Explain pros and cons of each approach</li>
          <li>Provide clear cost estimates for different solutions</li>
          <li>Explain timescales for repairs</li>
          <li>Highlight safety implications of different options</li>
          <li>Make recommendations based on safety, reliability, and cost-effectiveness</li>
        </ul>
        
        <h3>Preventing Future Issues</h3>
        <ul>
          <li>Explain root causes of problems</li>
          <li>Recommend preventive maintenance</li>
          <li>Discuss warning signs to watch for</li>
          <li>Suggest improvements to the installation if appropriate</li>
          <li>Provide written guides for proper use of equipment</li>
        </ul>
        
        <h3>Documentation of Conversations</h3>
        <ul>
          <li>Record key points discussed</li>
          <li>Note client decisions and authorizations</li>
          <li>Confirm understandings in writing where appropriate</li>
          <li>Maintain records of advice given</li>
          <li>Record any recommendations declined by the client</li>
        </ul>
        
        <h3>Follow-up Communication</h3>
        <ul>
          <li>Check that repairs are still functioning correctly</li>
          <li>Address any questions that arise after work completion</li>
          <li>Provide additional information requested</li>
          <li>Ensure client satisfaction with the work</li>
        </ul>
      </div>
    )
  },
  "5.1": {
    title: "Repair Methods for Different Faults",
    description: "Appropriate techniques for repairing various electrical fault types.",
    content: (
      <div className="prose prose-invert max-w-none">
        <ComponentReplacement />
      </div>
    )
  },
  "5.2": {
    title: "Post-Rectification Testing",
    description: "Ensuring repairs meet regulatory requirements through proper testing.",
    content: (
      <div className="prose prose-invert max-w-none">
        <SystemRestoration />
      </div>
    )
  },
};
