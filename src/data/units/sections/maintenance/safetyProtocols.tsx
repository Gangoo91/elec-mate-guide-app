
import React from 'react';
import { SectionData } from '../unit201/interfaces';

export const safetySection1_1: SectionData = {
  title: "General Safety Principles",
  description: "Understanding the fundamental principles of electrical safety",
  content: (
    <div className="space-y-4">
      <p>
        Safety in electrical maintenance is paramount and requires a comprehensive understanding 
        of key principles that protect both workers and equipment. These fundamental safety 
        principles form the foundation of all electrical work practices.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6">Core Safety Principles</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>De-energization:</strong> Always work on de-energized circuits unless absolutely necessary 
          to work live. This is the single most important principle in electrical safety.
        </li>
        <li>
          <strong>Verification:</strong> Never assume a circuit is de-energized; always test using appropriate 
          test equipment before beginning work.
        </li>
        <li>
          <strong>Authorization:</strong> Only qualified and authorized personnel should perform electrical maintenance.
        </li>
        <li>
          <strong>Proper equipment:</strong> Use tools and personal protective equipment (PPE) suitable for the voltage 
          level and type of work being performed.
        </li>
        <li>
          <strong>Planning:</strong> All electrical work should be preceded by thorough risk assessment and planning.
        </li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">The Hierarchy of Risk Control</h4>
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>Elimination:</strong> Remove the hazard completely</li>
          <li><strong>Substitution:</strong> Replace the hazard with something less hazardous</li>
          <li><strong>Engineering controls:</strong> Isolate people from the hazard</li>
          <li><strong>Administrative controls:</strong> Change the way people work</li>
          <li><strong>Personal protective equipment:</strong> Protect the worker with PPE</li>
        </ol>
        <p className="mt-2 text-sm italic">
          Note: This hierarchy should be applied in order, with PPE being the last line of defense, 
          not the first consideration.
        </p>
      </div>
    </div>
  )
};

export const safetySection1_2: SectionData = {
  title: "Risk Assessment Process",
  description: "Systematic approach to identifying and mitigating electrical hazards",
  content: (
    <div className="space-y-4">
      <p>
        Risk assessment is a structured process for identifying hazards, evaluating risks, 
        and implementing controls to ensure that electrical maintenance can be performed safely.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-4">Five Steps of Risk Assessment</h3>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>Identify the hazards:</strong> Recognize potential sources of harm associated with 
          electrical equipment and maintenance activities.
        </li>
        <li>
          <strong>Determine who might be harmed and how:</strong> Consider all personnel who may be exposed 
          to the identified hazards and the potential consequences.
        </li>
        <li>
          <strong>Evaluate the risks and decide on precautions:</strong> Assess the likelihood and severity 
          of potential harm and determine appropriate control measures.
        </li>
        <li>
          <strong>Record findings and implement controls:</strong> Document the assessment and put necessary 
          safeguards in place.
        </li>
        <li>
          <strong>Review and update:</strong> Regularly revisit the assessment to ensure it remains relevant, 
          especially when conditions or work practices change.
        </li>
      </ol>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Common Electrical Hazards to Assess</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Electric shock and burns</li>
          <li>Arc flash and blast</li>
          <li>Fire and explosion</li>
          <li>Falls resulting from shock</li>
          <li>Environmental factors (water, confined spaces)</li>
          <li>Secondary hazards (falling objects, moving machinery)</li>
        </ul>
      </div>
      
      <p className="mt-4">
        Every risk assessment should be specific to the task at hand and should consider the specific 
        electrical system, environment, and personnel involved. Generic assessments may overlook 
        critical site-specific hazards.
      </p>
    </div>
  )
};

export const safetySection1_3: SectionData = {
  title: "Regulatory Framework",
  description: "Understanding the legal requirements for electrical safety",
  content: (
    <div className="space-y-4">
      <p>
        Electrical safety is governed by a comprehensive regulatory framework that includes legislation, 
        regulations, standards, and best practice guidance. These provide the legal foundation for ensuring 
        safe working practices.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-4">Key Legislation</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Health and Safety at Work Act 1974:</strong> Establishes the general duty of care for 
          employers to ensure, so far as is reasonably practicable, the health, safety and welfare of 
          employees and others affected by work activities.
        </li>
        <li>
          <strong>Electricity at Work Regulations 1989:</strong> Specifically addresses electrical safety, 
          requiring precautions to be taken against the risk of death or personal injury from electricity 
          in work activities.
        </li>
        <li>
          <strong>The Management of Health and Safety at Work Regulations 1999:</strong> Requires employers 
          to assess risks and implement appropriate preventive and protective measures.
        </li>
        <li>
          <strong>The Provision and Use of Work Equipment Regulations 1998 (PUWER):</strong> Sets requirements 
          for the safety of work equipment, including electrical tools and machinery.
        </li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Key Standards and Guidance</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>BS 7671:</strong> Requirements for Electrical Installations (IET Wiring Regulations)
          </li>
          <li>
            <strong>HSG85:</strong> Electricity at work: Safe working practices
          </li>
          <li>
            <strong>GS38:</strong> Electrical test equipment for use by electricians
          </li>
          <li>
            <strong>HSR25:</strong> Memorandum of guidance on the Electricity at Work Regulations 1989
          </li>
        </ul>
      </div>
      
      <p className="mt-4">
        Compliance with these regulations is not optional; it is a legal requirement. Failure to comply 
        can result in prosecution, fines, imprisonment, and most importantly, puts workers at risk of 
        injury or death.
      </p>
    </div>
  )
};

export const safetySection2_1: SectionData = {
  title: "Safe Isolation Procedures",
  description: "Ensuring electrical equipment is safely disconnected before work begins",
  content: (
    <div className="space-y-4">
      <p>
        Safe isolation is the process of disconnecting electrical equipment from all sources of supply 
        and securing it in an isolated state to prevent inadvertent re-energization during maintenance 
        activities.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-4">The Five-Step Safe Isolation Procedure</h3>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>Identify:</strong> Correctly identify the circuit or equipment to be worked on and all 
          possible sources of supply.
        </li>
        <li>
          <strong>Isolate:</strong> Disconnect the supply using appropriate isolation devices such as 
          circuit breakers, switches, or fuses.
        </li>
        <li>
          <strong>Secure:</strong> Lock and tag the isolation points with appropriate devices to prevent 
          reconnection by others.
        </li>
        <li>
          <strong>Verify:</strong> Test the isolation using approved voltage testing devices to confirm 
          the absence of voltage.
        </li>
        <li>
          <strong>Re-test:</strong> Check the testing device on a known live source before and after 
          testing the isolated circuit to confirm the tester is functioning correctly.
        </li>
      </ol>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Essential Equipment for Safe Isolation</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Approved voltage detector</li>
          <li>Proving unit to verify tester operation</li>
          <li>Padlocks, multi-hasp devices</li>
          <li>Warning tags/signs</li>
          <li>Isolation devices for specific equipment types</li>
        </ul>
      </div>
      
      <p className="mt-4 font-medium text-[#FFC900]">Important Safety Principles:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Never rely on removal of a fuse as the sole means of isolation</li>
        <li>Never assume a circuit is dead – always prove it</li>
        <li>Each person working on the equipment should apply their own lock</li>
        <li>Only the person who applied a lock should remove it</li>
        <li>Consider all circuits as live until proven otherwise</li>
      </ul>
    </div>
  )
};

export const safetySection2_2: SectionData = {
  title: "Lock-Out/Tag-Out (LOTO) Systems",
  description: "Preventing accidental energization of equipment during maintenance",
  content: (
    <div className="space-y-4">
      <p>
        Lock-Out/Tag-Out (LOTO) is a safety procedure used to ensure that dangerous machinery and 
        electrical systems are properly shut off and not restarted during maintenance or servicing work.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-4">Elements of an Effective LOTO System</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Locks:</strong> Physical devices that secure isolation points in the off position. 
          Each technician should have their own uniquely keyed padlock.
        </li>
        <li>
          <strong>Tags:</strong> Visible warnings that equipment is locked out, who has locked it, 
          and the reason for lockout. Tags should never be used without locks.
        </li>
        <li>
          <strong>Multi-hasps:</strong> Allow multiple locks to be applied to a single isolation point 
          when several people are working on the same equipment.
        </li>
        <li>
          <strong>Written procedures:</strong> Documented step-by-step instructions for isolating 
          specific equipment or systems, including identification of all energy sources.
        </li>
        <li>
          <strong>Authorization system:</strong> Process for ensuring only qualified personnel 
          implement LOTO procedures.
        </li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Types of Isolation Devices</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Miniature circuit breaker (MCB) lock-off devices</li>
          <li>Molded case circuit breaker (MCCB) locking mechanisms</li>
          <li>Switch disconnector locks</li>
          <li>Fuse removal locking devices</li>
          <li>Valve lockouts</li>
          <li>Plug and socket lockouts</li>
          <li>Universal lockout devices for non-standard equipment</li>
        </ul>
      </div>
      
      <p className="mt-4">
        The LOTO system is only effective when properly implemented and followed by all personnel. 
        Regular audits and inspections should be conducted to ensure compliance with established procedures.
      </p>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-4">
        <h4 className="font-medium text-[#FFC900] mb-1">Special Considerations:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Remote start capabilities must be disabled</li>
          <li>Stored energy must be dissipated (capacitors, springs, etc.)</li>
          <li>Multiple energy sources must all be controlled</li>
          <li>Temporary energization for testing must follow specific protocols</li>
          <li>Group lockout procedures for complex systems</li>
          <li>Emergency lock removal procedures should be documented</li>
        </ul>
      </div>
    </div>
  )
};

export const safetySection2_3: SectionData = {
  title: "Working Near Live Equipment",
  description: "Safety measures when complete isolation is not possible",
  content: (
    <div className="space-y-4">
      <p>
        While working on de-energized equipment is always preferable, there are situations where 
        working near live equipment is unavoidable. This requires additional precautions to ensure safety.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-4">Justification for Working Near Live Equipment</h3>
      <p>Working near live parts is only justified when:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>It is unreasonable to turn off the electricity (e.g., life support equipment)</li>
        <li>It is unsafe to turn off the electricity (e.g., certain testing procedures)</li>
        <li>Work is being conducted on or near live low voltage conductors that have been proven to be touch safe</li>
        <li>A specific risk assessment has been completed and approved</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-4">Safety Measures for Live Working</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Barriers and screens:</strong> Use insulated barriers to prevent accidental contact 
          with live parts and restrict the work area.
        </li>
        <li>
          <strong>Insulated tools:</strong> Ensure all tools are properly insulated for the voltage level 
          being worked with.
        </li>
        <li>
          <strong>PPE:</strong> Use appropriate personal protective equipment including insulating gloves, 
          eye protection, and arc flash protective clothing as required.
        </li>
        <li>
          <strong>Safe working distance:</strong> Maintain appropriate clearance distances based on voltage levels.
        </li>
        <li>
          <strong>Competent supervision:</strong> Work near live parts should be supervised by someone with 
          appropriate technical knowledge.
        </li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Arc Flash Protection</h4>
        <p>Arc flash is a dangerous release of energy that can occur during electrical faults or when working on live equipment:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Arc flash can generate temperatures up to 20,000°C</li>
          <li>Causes severe burns, blindness, hearing damage, and potentially fatal injuries</li>
          <li>Requires specific PPE rated according to calculated incident energy levels</li>
          <li>Arc flash risk assessment should be conducted for all work near live parts</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-4">
        <h4 className="font-medium text-[#FFC900] mb-1">Permit to Work Systems</h4>
        <p>For live work or work near live parts:</p>
        <ul className="list-disc pl-5">
          <li>A formal permit to work must be issued</li>
          <li>Clear definition of the work scope and boundaries</li>
          <li>Identification of qualified personnel authorized to conduct the work</li>
          <li>Detailed risk assessment and control measures</li>
          <li>Time limitations and handover procedures</li>
          <li>Emergency response procedures</li>
        </ul>
      </div>
    </div>
  )
};

export const safetySection3_1: SectionData = {
  title: "Personal Protective Equipment (PPE)",
  description: "Essential protective gear for electrical maintenance",
  content: (
    <div className="space-y-4">
      <p>
        Personal Protective Equipment (PPE) is the last line of defense against electrical hazards 
        and must be properly selected, maintained, and used correctly to provide effective protection.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-4">Types of Electrical PPE</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Eye and Face Protection:</strong> Safety glasses, face shields, or arc-rated hoods 
          protect against arc flash, flying particles, and UV radiation.
        </li>
        <li>
          <strong>Insulating Gloves:</strong> Rated by class (00, 0, 1, 2, 3, 4) according to maximum 
          use voltage. Must be tested and certified regularly.
        </li>
        <li>
          <strong>Arc Flash Protection:</strong> FR (flame-resistant) or AR (arc-rated) clothing designed 
          to resist ignition and provide thermal insulation during an arc flash.
        </li>
        <li>
          <strong>Head Protection:</strong> Non-conductive hard hats for protection against impact and 
          electrical contact.
        </li>
        <li>
          <strong>Foot Protection:</strong> Electrical hazard (EH) rated footwear with insulating properties 
          and no exposed metal parts.
        </li>
        <li>
          <strong>Insulating Mats:</strong> Provide electrical isolation from ground when working on 
          electrical equipment.
        </li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">PPE Categories for Arc Flash Protection</h4>
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left">Category</th>
              <th className="text-left">Cal/cm²</th>
              <th className="text-left">Required PPE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>4</td>
              <td>FR shirt and pants, face shield, hard hat, safety glasses, hearing protection</td>
            </tr>
            <tr>
              <td>2</td>
              <td>8</td>
              <td>Category 1 plus FR coverall, arc-rated face shield with balaclava</td>
            </tr>
            <tr>
              <td>3</td>
              <td>25</td>
              <td>Category 2 plus arc flash suit, arc-rated hood, gloves</td>
            </tr>
            <tr>
              <td>4</td>
              <td>40</td>
              <td>Category 3 with higher rated protective equipment</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-4">PPE Inspection and Maintenance</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Inspect all PPE before each use</li>
        <li>Look for holes, tears, contamination, or damage</li>
        <li>Insulating gloves must be air tested before each use</li>
        <li>Follow manufacturer's guidelines for cleaning and storage</li>
        <li>Adhere to recertification schedules (especially for insulating gloves)</li>
        <li>Replace damaged or compromised PPE immediately</li>
        <li>Document all inspections and testing</li>
      </ul>
    </div>
  )
};

export const safetySection3_2: SectionData = {
  title: "Electrical Test Equipment",
  description: "Proper use and maintenance of testing tools",
  content: (
    <div className="space-y-4">
      <p>
        Electrical test equipment is essential for verifying the safe condition of electrical 
        installations and equipment. Using the correct test equipment properly is critical for 
        both accurate results and personal safety.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-4">Types of Test Equipment</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Voltage indicators/testers:</strong> Used to verify the presence or absence of voltage 
          in circuits and equipment.
        </li>
        <li>
          <strong>Multimeters:</strong> Measure multiple electrical parameters including voltage, current, 
          and resistance.
        </li>
        <li>
          <strong>Insulation resistance testers:</strong> Measure the resistance between conductors or 
          between conductors and earth.
        </li>
        <li>
          <strong>Earth loop impedance testers:</strong> Measure the impedance of the earth fault path.
        </li>
        <li>
          <strong>RCD testers:</strong> Verify correct operation of residual current devices.
        </li>
        <li>
          <strong>Phase rotation meters:</strong> Determine the sequence of phases in three-phase systems.
        </li>
        <li>
          <strong>Proving units:</strong> Provide a known voltage source to verify test equipment operation.
        </li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Test Equipment Safety Requirements (GS38)</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Adequate insulation of probes and leads</li>
          <li>Minimum exposed metal at probe tips</li>
          <li>Finger guards to prevent contact with live parts</li>
          <li>Fused leads for protection against high fault currents</li>
          <li>Category rating appropriate for the installation being tested</li>
          <li>Regular inspection and maintenance</li>
        </ul>
      </div>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-4">Measurement Categories</h3>
      <p>
        Test equipment is classified by measurement category (CAT) ratings, which indicate the level 
        of transient overvoltage protection:
      </p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li><strong>CAT I:</strong> Electronic equipment, protected electronic circuits</li>
        <li><strong>CAT II:</strong> Single-phase, plug-connected equipment</li>
        <li><strong>CAT III:</strong> Three-phase distribution, fixed installation equipment</li>
        <li><strong>CAT IV:</strong> Origin of installation, service entrance, supply level</li>
      </ul>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-4">
        <h4 className="font-medium text-[#FFC900] mb-1">Safe Testing Procedure</h4>
        <ol className="list-decimal pl-5">
          <li>Select appropriate test equipment for the task</li>
          <li>Inspect test equipment before use (leads, probes, casing)</li>
          <li>Verify test equipment operation using a proving unit</li>
          <li>Test on known live source when possible</li>
          <li>Follow correct test procedures</li>
          <li>Re-verify test equipment operation after testing</li>
          <li>Document results accurately</li>
        </ol>
        <p className="mt-2 font-medium">
          Remember: Always "Test before touch" - never rely on indicators alone to confirm 
          the absence of voltage.
        </p>
      </div>
    </div>
  )
};

export const safetySection3_3: SectionData = {
  title: "Emergency Response",
  description: "Procedures for electrical accidents and incidents",
  content: (
    <div className="space-y-4">
      <p>
        Despite preventive measures, electrical incidents can still occur. Being prepared with 
        appropriate emergency response procedures is essential for minimizing injuries and damage.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-4">Electric Shock Response</h3>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>Do not touch the casualty</strong> if they're still in contact with the electrical source.
        </li>
        <li>
          <strong>Switch off the power</strong> at the mains or isolator if safe to do so.
        </li>
        <li>
          <strong>If power cannot be turned off</strong>, use non-conductive material (e.g., dry wood, plastic, rubber) 
          to separate the casualty from the source.
        </li>
        <li>
          <strong>Call emergency services (999/112)</strong> immediately.
        </li>
        <li>
          <strong>Begin first aid</strong> once the casualty is separated from the electrical source:
          <ul className="list-disc pl-5 mt-1">
            <li>Check for consciousness and normal breathing</li>
            <li>If unresponsive and not breathing normally, begin CPR</li>
            <li>If breathing, place in the recovery position and monitor</li>
            <li>Treat any burns with cool running water</li>
          </ul>
        </li>
      </ol>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Electrical Fire Response</h4>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Raise the alarm and call emergency services</li>
          <li>Disconnect the power supply if safe to do so</li>
          <li>Only attempt to fight the fire if:
            <ul className="list-disc pl-5 mt-1">
              <li>You are trained to do so</li>
              <li>You have the correct fire extinguisher (CO₂ or dry powder)</li>
              <li>The fire is small and contained</li>
              <li>Your escape route is clear</li>
            </ul>
          </li>
          <li>Never use water or foam extinguishers on electrical fires</li>
          <li>Evacuate if the fire cannot be controlled</li>
        </ol>
      </div>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-4">Incident Reporting</h3>
      <p>
        All electrical incidents, including near misses, must be reported according to organizational 
        procedures and regulatory requirements:
      </p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Document the incident details as soon as possible</li>
        <li>Report to supervisor/manager immediately</li>
        <li>For serious incidents, report under RIDDOR (Reporting of Injuries, Diseases and Dangerous Occurrences Regulations)</li>
        <li>Preserve the scene for investigation if serious</li>
        <li>Participate in incident investigation</li>
        <li>Implement corrective actions to prevent recurrence</li>
      </ul>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-4">
        <h4 className="font-medium text-[#FFC900] mb-1">Emergency Preparedness</h4>
        <ul className="list-disc pl-5">
          <li>Ensure emergency contact information is readily available</li>
          <li>Know the location of emergency equipment (first aid kits, AEDs, fire extinguishers)</li>
          <li>Establish emergency meeting points</li>
          <li>Conduct regular emergency response drills</li>
          <li>Maintain up-to-date emergency procedures</li>
          <li>Ensure sufficient staff are trained in first aid</li>
        </ul>
      </div>
    </div>
  )
};

export const safetyQuestions = [
  {
    question: "What is the first step in the five-step safe isolation procedure?",
    options: [
      "Secure the isolation point with a lock",
      "Identify the circuit or equipment to be worked on",
      "Verify the absence of voltage",
      "Disconnect the supply"
    ],
    correctAnswer: "Identify the circuit or equipment to be worked on",
    explanation: "The first step in safe isolation is to correctly identify the circuit or equipment to be worked on and all possible sources of supply. This is crucial to ensure the right circuit is isolated."
  },
  {
    question: "According to the hierarchy of risk control, what should be considered first when managing electrical hazards?",
    options: [
      "Personal protective equipment",
      "Administrative controls",
      "Elimination of the hazard",
      "Engineering controls"
    ],
    correctAnswer: "Elimination of the hazard",
    explanation: "The hierarchy of risk control prioritizes measures in this order: 1. Elimination, 2. Substitution, 3. Engineering controls, 4. Administrative controls, and 5. Personal protective equipment. Elimination of the hazard is always the first option to consider."
  },
  {
    question: "When is it justified to work near live electrical equipment?",
    options: [
      "When it's more convenient than shutting down power",
      "When the work can be completed quickly",
      "When it is unreasonable or unsafe to turn off the electricity",
      "When sufficient personnel are present"
    ],
    correctAnswer: "When it is unreasonable or unsafe to turn off the electricity",
    explanation: "Working near live equipment is only justified when it is unreasonable to turn off the electricity (e.g., life support equipment), when it's unsafe to turn off the electricity (e.g., certain testing procedures), or when working on proven touch-safe low voltage conductors after risk assessment."
  },
  {
    question: "What must be done to verify a voltage tester is working correctly during safe isolation?",
    options: [
      "Check the battery level indicator",
      "Test it on a known live source before and after testing the isolated circuit",
      "Visually inspect for damage",
      "Perform a function test button check"
    ],
    correctAnswer: "Test it on a known live source before and after testing the isolated circuit",
    explanation: "To verify a voltage tester is working correctly, it must be tested on a known live source both before and after testing the isolated circuit. This confirms the tester was functioning correctly at the time of testing."
  },
  {
    question: "What does the CAT III rating on test equipment indicate?",
    options: [
      "It's suitable for electronic equipment and protected circuits only",
      "It's suitable for single-phase, plug-connected equipment",
      "It's suitable for three-phase distribution and fixed installation equipment",
      "It's suitable for service entrance and supply level testing"
    ],
    correctAnswer: "It's suitable for three-phase distribution and fixed installation equipment",
    explanation: "CAT III rated test equipment provides protection for use on three-phase distribution systems and fixed installation equipment, where there's a medium level of available fault current."
  },
  {
    question: "What is the primary purpose of a Lock-Out/Tag-Out (LOTO) system?",
    options: [
      "To indicate equipment ownership",
      "To prevent theft of tools and equipment",
      "To prevent accidental energization of equipment during maintenance",
      "To track maintenance history"
    ],
    correctAnswer: "To prevent accidental energization of equipment during maintenance",
    explanation: "The primary purpose of Lock-Out/Tag-Out (LOTO) systems is to prevent accidental energization of equipment during maintenance or servicing work, protecting workers from unexpected startup or release of stored energy."
  },
  {
    question: "What should you do first if you find someone suffering from electric shock and still in contact with the electrical source?",
    options: [
      "Pull them away from the source immediately",
      "Throw water on them to break the electrical contact",
      "Switch off the power if safe to do so",
      "Begin CPR immediately"
    ],
    correctAnswer: "Switch off the power if safe to do so",
    explanation: "The first action should be to switch off the power at the mains or isolator if safe to do so. Never touch the casualty while they're still in contact with the electrical source as you may also receive a shock."
  },
  {
    question: "Which type of fire extinguisher is suitable for electrical fires?",
    options: [
      "Water",
      "Foam",
      "Carbon dioxide (CO₂)",
      "Wet chemical"
    ],
    correctAnswer: "Carbon dioxide (CO₂)",
    explanation: "Carbon dioxide (CO₂) extinguishers are suitable for electrical fires as they don't conduct electricity and don't leave residue. Dry powder extinguishers are also suitable. Water and foam extinguishers should never be used on electrical fires due to the risk of electrocution."
  },
  {
    question: "Under the Electricity at Work Regulations 1989, who is responsible for ensuring electrical safety in the workplace?",
    options: [
      "Only qualified electricians",
      "Safety representatives",
      "All employees and employers",
      "The Health and Safety Executive"
    ],
    correctAnswer: "All employees and employers",
    explanation: "Under the Electricity at Work Regulations 1989, both employers and employees have responsibilities. Employers must ensure systems are safe and maintained, while employees must cooperate with employers and not put themselves or others at risk."
  },
  {
    question: "What is the main purpose of carrying out a risk assessment before electrical work?",
    options: [
      "To comply with paperwork requirements",
      "To identify hazards and implement appropriate control measures",
      "To determine how quickly the work can be completed",
      "To assign blame if accidents occur"
    ],
    correctAnswer: "To identify hazards and implement appropriate control measures",
    explanation: "The main purpose of risk assessment is to identify potential hazards associated with the work, evaluate the risks, and implement appropriate control measures to ensure the work can be carried out safely."
  }
];

