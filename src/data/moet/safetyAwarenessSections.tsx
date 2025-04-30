
import React from 'react';
import { AssessmentQuestion } from '@/components/units/FormativeAssessment';

// Safety Awareness content sections
export const safetyAwarenessSections = [
  {
    id: "1.1",
    title: "Risk Assessment",
    description: "Identifying and evaluating potential hazards",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Risk Assessment Process</h3>
        <p className="text-[#FFC900]/80">
          Risk assessment is the systematic process of identifying hazards, evaluating the risks associated with these hazards, 
          and implementing control measures to reduce risks to acceptable levels. In electrical work, this process is crucial 
          due to the potentially life-threatening nature of electrical hazards.
        </p>
        
        <h4 className="text-md font-medium text-[#FFC900]">Five Steps of Risk Assessment</h4>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Identify the hazards</strong> - Look for anything that could cause harm, including electrical, physical, and environmental hazards.</li>
          <li><strong>Determine who might be harmed</strong> - Consider everyone who could be affected, including colleagues, clients, and the public.</li>
          <li><strong>Evaluate the risks and decide on precautions</strong> - Assess how likely it is that harm will occur and how severe it might be.</li>
          <li><strong>Record your findings and implement them</strong> - Document your assessment and put control measures in place.</li>
          <li><strong>Review your assessment and update if necessary</strong> - Risk assessments should be living documents that are regularly reviewed.</li>
        </ol>
        
        <h4 className="text-md font-medium text-[#FFC900]">Common Electrical Hazards</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Electric shock and burns from contact with live parts</li>
          <li>Fire caused by electrical equipment or installations</li>
          <li>Explosion triggered by electrical sparks in flammable atmospheres</li>
          <li>Mechanical injury from automated or electrically-powered equipment</li>
          <li>Electromagnetic fields from high-voltage equipment</li>
          <li>Arc flash and blast hazards from high-energy electrical systems</li>
        </ul>
        
        <p className="text-[#FFC900]/80 mt-4">
          When conducting a risk assessment for electrical work, always consider the specific context and environment. 
          Factors such as location (indoor/outdoor), presence of water or moisture, space constraints, and proximity 
          to flammable materials can significantly impact the level of risk.
        </p>
      </div>
    ),
    quiz: [
      {
        question: "What is the first step in the risk assessment process?",
        options: [
          "Implement control measures",
          "Identify the hazards",
          "Document your findings",
          "Review the assessment"
        ],
        correctAnswer: "Identify the hazards",
        explanation: "The first step in any risk assessment is to identify all potential hazards that could cause harm."
      }
    ]
  },
  {
    id: "1.2",
    title: "PPE Requirements",
    description: "Personal Protective Equipment for electrical work",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Personal Protective Equipment</h3>
        <p className="text-[#FFC900]/80">
          Personal Protective Equipment (PPE) serves as the last line of defense against workplace hazards. Proper selection, 
          use, and maintenance of PPE is essential for protecting electrical workers from injury.
        </p>
        
        <h4 className="text-md font-medium text-[#FFC900]">Essential PPE for Electrical Work</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Insulating gloves</strong> - Rubber gloves rated for the appropriate voltage level, with leather outer gloves for mechanical protection.</li>
          <li><strong>Eye and face protection</strong> - Safety glasses, face shields, or arc-rated hoods to protect from flying particles, molten metal, and arc flash.</li>
          <li><strong>Head protection</strong> - Non-conductive hard hats for protection from falling objects and electrical contact.</li>
          <li><strong>Foot protection</strong> - Electrically-rated safety boots with insulated soles and toe protection.</li>
          <li><strong>Arc-rated clothing</strong> - Flame-resistant clothing with appropriate arc rating for protection from thermal effects of arc flash.</li>
          <li><strong>Insulating mats and covers</strong> - Rubber mats and covers to prevent contact with energized parts.</li>
        </ul>
        
        <h4 className="text-md font-medium text-[#FFC900]">PPE Inspection and Maintenance</h4>
        <p className="text-[#FFC900]/80">
          PPE must be inspected before each use to ensure it remains in safe working condition:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Check insulating gloves for cuts, cracks, punctures, or signs of chemical damage</li>
          <li>Verify that gloves have been tested within the required timeframe (typically every 6 months)</li>
          <li>Inspect hard hats for cracks, dents, or signs of degradation</li>
          <li>Check arc-rated clothing for tears, contamination with flammable substances, or excessive wear</li>
          <li>Ensure safety glasses and face shields are clean and free from scratches that could impair vision</li>
        </ul>
        
        <p className="text-[#FFC900]/80 mt-4">
          Remember that PPE should be considered the last resort for protection. The hierarchy of controls places 
          elimination, substitution, engineering controls, and administrative controls as preferable methods of risk 
          reduction, with PPE being the final layer of protection.
        </p>
      </div>
    ),
    quiz: [
      {
        question: "How often should insulating rubber gloves typically be tested?",
        options: [
          "Every month",
          "Every 6 months",
          "Every year",
          "Every 2 years"
        ],
        correctAnswer: "Every 6 months",
        explanation: "Insulating rubber gloves should typically be electrically tested every 6 months to ensure they maintain their insulating properties."
      }
    ]
  },
  {
    id: "1.3",
    title: "Emergency Procedures",
    description: "Responding to electrical emergencies safely",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Emergency Response Procedures</h3>
        <p className="text-[#FFC900]/80">
          Knowing how to respond to electrical emergencies can save lives. Every electrical worker should be familiar with 
          emergency procedures for common electrical incidents.
        </p>
        
        <h4 className="text-md font-medium text-[#FFC900]">Electric Shock Response</h4>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Do not touch the victim</strong> if they are still in contact with the electrical source.</li>
          <li><strong>Shut off the power source</strong> if possible and safe to do so.</li>
          <li>If power cannot be shut off, use a non-conductive object like a dry wooden broom handle to separate the victim from the source.</li>
          <li>Once separated from the source, check for breathing and pulse.</li>
          <li>If needed, begin CPR and call emergency services immediately.</li>
          <li>If the victim is breathing, place them in the recovery position and monitor until help arrives.</li>
          <li>All electric shock incidents, even minor ones, should result in medical evaluation as internal damage may not be immediately apparent.</li>
        </ol>
        
        <h4 className="text-md font-medium text-[#FFC900]">Electrical Fire Response</h4>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li>Raise the alarm and evacuate the area.</li>
          <li>If safe to do so, disconnect the power supply to the affected equipment or area.</li>
          <li>Only attempt to extinguish the fire if it is small, you are trained to do so, and you have the appropriate fire extinguisher (Class C or CO2).</li>
          <li>Never use water on an electrical fire.</li>
          <li>If the fire cannot be controlled, evacuate the building and wait for emergency services.</li>
        </ol>
        
        <h4 className="text-md font-medium text-[#FFC900]">Arc Flash Response</h4>
        <p className="text-[#FFC900]/80">
          Arc flash incidents can cause severe burns and injuries. In the event of an arc flash:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li>Treat any injuries as burn injuries and seek immediate medical attention.</li>
          <li>Do not remove clothing that is adhered to burned skin.</li>
          <li>Cover burns with clean, dry dressings.</li>
          <li>Document the incident details while fresh in memory.</li>
        </ol>
        
        <p className="text-[#FFC900]/80 mt-4">
          Regular emergency drills and refresher training can help ensure that all team members know how to respond 
          appropriately in an emergency situation. Always ensure that emergency contact numbers and procedures are 
          clearly displayed in the workplace.
        </p>
      </div>
    ),
    quiz: [
      {
        question: "What should you do first if you find someone in contact with an electrical source?",
        options: [
          "Pull them away from the source immediately",
          "Throw water on them to prevent burns",
          "Do not touch them and try to shut off the power source",
          "Begin CPR right away"
        ],
        correctAnswer: "Do not touch them and try to shut off the power source",
        explanation: "Never touch someone who is in contact with an electrical source as the current could pass through them to you. First, try to shut off the power if it's safe to do so."
      }
    ]
  },
  {
    id: "2.1",
    title: "Safety Leadership",
    description: "Leading by example in safety practices",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Safety Leadership Principles</h3>
        <p className="text-[#FFC900]/80">
          Safety leadership involves demonstrating a commitment to safety through personal actions and decisions. When electrical 
          workers at all levels prioritize safety, it creates a culture where safe work practices are valued and maintained.
        </p>
        
        <h4 className="text-md font-medium text-[#FFC900]">Key Behaviors of Safety Leaders</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Visible commitment</strong> - Consistently following safety procedures even when under time pressure or when no one is watching.</li>
          <li><strong>Active engagement</strong> - Participating in safety meetings, training sessions, and discussions.</li>
          <li><strong>Open communication</strong> - Creating an environment where safety concerns can be raised without fear of reprisal.</li>
          <li><strong>Positive recognition</strong> - Acknowledging and rewarding safe behaviors and improvements.</li>
          <li><strong>Accountability</strong> - Taking responsibility for personal safety and the safety of others.</li>
          <li><strong>Continuous improvement</strong> - Always looking for ways to enhance safety practices.</li>
        </ul>
        
        <h4 className="text-md font-medium text-[#FFC900]">Impact of Safety Leadership</h4>
        <p className="text-[#FFC900]/80">
          Effective safety leadership has been shown to:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Reduce incident rates</li>
          <li>Improve compliance with safety procedures</li>
          <li>Enhance worker engagement and job satisfaction</li>
          <li>Lower absenteeism and staff turnover</li>
          <li>Improve overall work quality</li>
          <li>Create a positive safety culture that extends beyond the workplace</li>
        </ul>
        
        <p className="text-[#FFC900]/80 mt-4">
          Remember that safety leadership is not solely the responsibility of managers and supervisors. Every electrical 
          worker can demonstrate leadership by following safe practices, speaking up about hazards, and supporting 
          colleagues in working safely.
        </p>
      </div>
    ),
    quiz: [
      {
        question: "Which of the following is NOT a key behavior of effective safety leadership?",
        options: [
          "Following safety procedures only when supervised",
          "Creating an environment where concerns can be raised freely",
          "Participating actively in safety meetings",
          "Taking responsibility for personal safety and the safety of others"
        ],
        correctAnswer: "Following safety procedures only when supervised",
        explanation: "Effective safety leaders consistently follow safety procedures at all times, not just when supervised. True safety leadership means demonstrating safe behaviors even when no one is watching."
      }
    ]
  },
  {
    id: "2.2",
    title: "Incident Reporting",
    description: "Proper documentation and analysis of safety incidents",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Incident Reporting and Investigation</h3>
        <p className="text-[#FFC900]/80">
          Thorough reporting and investigation of safety incidents is essential for preventing future occurrences. 
          This process helps identify root causes and systemic issues that need to be addressed.
        </p>
        
        <h4 className="text-md font-medium text-[#FFC900]">Types of Incidents to Report</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Accidents</strong> - Events that result in injury, ill health, or property damage</li>
          <li><strong>Near misses</strong> - Events that could have resulted in injury or damage but didn't</li>
          <li><strong>Dangerous occurrences</strong> - Specific events defined in regulations that must be reported</li>
          <li><strong>Unsafe conditions</strong> - Workplace conditions that could lead to accidents</li>
          <li><strong>Unsafe behaviors</strong> - Actions that increase the risk of accidents</li>
        </ul>
        
        <h4 className="text-md font-medium text-[#FFC900]">Elements of an Effective Incident Report</h4>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Basic information</strong> - Date, time, location, people involved</li>
          <li><strong>Description of the incident</strong> - Clear account of what happened</li>
          <li><strong>Contributing factors</strong> - Equipment, environment, procedures, human factors</li>
          <li><strong>Immediate actions taken</strong> - Emergency response, containment measures</li>
          <li><strong>Root cause analysis</strong> - Investigation to determine underlying causes</li>
          <li><strong>Corrective actions</strong> - Measures to prevent recurrence</li>
          <li><strong>Follow-up procedures</strong> - Verification that corrective actions are effective</li>
        </ol>
        
        <h4 className="text-md font-medium text-[#FFC900]">Benefits of Near-Miss Reporting</h4>
        <p className="text-[#FFC900]/80">
          Near-miss reporting is particularly valuable because:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>It provides opportunities to identify and address hazards before they cause harm</li>
          <li>There are typically many more near-misses than actual incidents, providing more data for analysis</li>
          <li>Investigating near-misses is often less complex and emotionally charged than investigating accidents</li>
          <li>It encourages a proactive rather than reactive approach to safety</li>
        </ul>
        
        <p className="text-[#FFC900]/80 mt-4">
          Creating a culture where incident reporting is encouraged and valued is crucial. Workers should never fear 
          negative consequences for reporting incidents or near-misses. Instead, reporting should be recognized as a 
          positive contribution to workplace safety.
        </p>
      </div>
    ),
    quiz: [
      {
        question: "Why is near-miss reporting particularly valuable in safety management?",
        options: [
          "It requires less paperwork than accident reports",
          "It provides opportunities to identify hazards before they cause harm",
          "It is only required for serious incidents",
          "It only needs to be done once a month"
        ],
        correctAnswer: "It provides opportunities to identify hazards before they cause harm",
        explanation: "Near-miss reporting allows organizations to identify and address hazards before they result in injuries or accidents, making it an important proactive safety measure."
      }
    ]
  },
  {
    id: "2.3",
    title: "Safety Documentation",
    description: "Maintaining proper safety records and documentation",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Safety Documentation Systems</h3>
        <p className="text-[#FFC900]/80">
          Proper documentation is a cornerstone of effective safety management. It provides evidence of compliance, 
          facilitates communication, and serves as a reference for continuous improvement.
        </p>
        
        <h4 className="text-md font-medium text-[#FFC900]">Essential Safety Documents</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Risk assessments</strong> - Detailed evaluations of workplace hazards and control measures</li>
          <li><strong>Method statements</strong> - Step-by-step procedures for carrying out work safely</li>
          <li><strong>Safe work permits</strong> - Authorization for high-risk activities with specific precautions</li>
          <li><strong>Equipment inspection records</strong> - Documentation of regular checks on tools and equipment</li>
          <li><strong>Training records</strong> - Evidence of worker competence and qualification</li>
          <li><strong>Incident reports</strong> - Documentation of accidents, near-misses, and investigations</li>
          <li><strong>Safety meeting minutes</strong> - Records of safety discussions and actions</li>
          <li><strong>Safety audit reports</strong> - Findings from systematic evaluations of safety systems</li>
        </ul>
        
        <h4 className="text-md font-medium text-[#FFC900]">Documentation Best Practices</h4>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Accuracy</strong> - Ensure all information is correct and verified</li>
          <li><strong>Completeness</strong> - Include all relevant details without omissions</li>
          <li><strong>Clarity</strong> - Write in plain language that is easy to understand</li>
          <li><strong>Timeliness</strong> - Complete documentation promptly while information is fresh</li>
          <li><strong>Accessibility</strong> - Store documents where they can be easily retrieved when needed</li>
          <li><strong>Confidentiality</strong> - Protect sensitive personal information appropriately</li>
          <li><strong>Regular review</strong> - Update documents to reflect changes in regulations or work practices</li>
        </ol>
        
        <h4 className="text-md font-medium text-[#FFC900]">Digital Documentation Systems</h4>
        <p className="text-[#FFC900]/80">
          Modern safety management often utilizes digital systems for documentation, which can offer advantages such as:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Easier search and retrieval of documents</li>
          <li>Automated reminders for document reviews and updates</li>
          <li>Integration with other business systems</li>
          <li>Enhanced data analysis capabilities</li>
          <li>Improved accessibility for remote workers</li>
          <li>Reduced paper usage and storage requirements</li>
        </ul>
        
        <p className="text-[#FFC900]/80 mt-4">
          Regardless of whether paper-based or digital systems are used, the key principle is that documentation 
          should support safety activities rather than becoming an end in itself. The goal is to create useful 
          records that contribute to preventing incidents and injuries.
        </p>
      </div>
    ),
    quiz: [
      {
        question: "Which of the following is NOT a best practice for safety documentation?",
        options: [
          "Ensuring all information is accurate and verified",
          "Completing documentation several weeks after an incident when there is time",
          "Writing in plain language that is easy to understand",
          "Protecting sensitive personal information appropriately"
        ],
        correctAnswer: "Completing documentation several weeks after an incident when there is time",
        explanation: "Documentation should be completed promptly while information is fresh and accurate, not delayed for weeks after an incident."
      }
    ]
  },
  {
    id: "3.1",
    title: "Hazard Recognition",
    description: "Identifying electrical hazards in the workplace",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Electrical Hazard Recognition</h3>
        <p className="text-[#FFC900]/80">
          The ability to recognize electrical hazards is a fundamental skill for all electrical workers. Early identification 
          of hazards is essential for preventing incidents and injuries.
        </p>
        
        <h4 className="text-md font-medium text-[#FFC900]">Common Electrical Hazards</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Exposed live parts</strong> - Terminals, conductors, or components without adequate guarding</li>
          <li><strong>Damaged insulation</strong> - Cuts, abrasions, or aging that exposes conductors</li>
          <li><strong>Improper grounding</strong> - Missing or inadequate equipment grounding</li>
          <li><strong>Overloaded circuits</strong> - Systems carrying current beyond their rated capacity</li>
          <li><strong>Wet conditions</strong> - Water near electrical equipment increasing shock risk</li>
          <li><strong>Overhead power lines</strong> - Risk of contact during work at height</li>
          <li><strong>Underground services</strong> - Buried cables that may be struck during excavation</li>
          <li><strong>Thermal effects</strong> - Overheating equipment that could cause burns or fire</li>
          <li><strong>Arc flash potential</strong> - High-energy systems capable of producing dangerous arcs</li>
        </ul>
        
        <h4 className="text-md font-medium text-[#FFC900]">Hazard Recognition Techniques</h4>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Visual inspection</strong> - Systematic examination for visible signs of damage or defects</li>
          <li><strong>Equipment testing</strong> - Using appropriate instruments to verify safe condition</li>
          <li><strong>System analysis</strong> - Reviewing diagrams and documentation to identify potential issues</li>
          <li><strong>Environmental assessment</strong> - Considering factors like moisture, dust, or temperature that affect risk</li>
          <li><strong>Work practice evaluation</strong> - Examining how tasks are performed to identify unsafe methods</li>
          <li><strong>Historical review</strong> - Learning from past incidents and near-misses</li>
        </ol>
        
        <h4 className="text-md font-medium text-[#FFC900]">Warning Signs of Electrical Hazards</h4>
        <p className="text-[#FFC900]/80">
          Be alert for these indicators of potential electrical problems:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Burning odors or unusual smells</li>
          <li>Discoloration or scorching around outlets or switches</li>
          <li>Unusual sounds (buzzing, crackling)</li>
          <li>Warm or hot outlets, switches, or electrical equipment</li>
          <li>Flickering or dimming lights</li>
          <li>Frequent circuit breaker trips or blown fuses</li>
          <li>Tingling sensation when touching equipment</li>
          <li>Loose or damaged electrical connections</li>
        </ul>
        
        <p className="text-[#FFC900]/80 mt-4">
          Developing a keen eye for electrical hazards requires experience and ongoing education. Never 
          ignore potential hazards or assume they are insignificant. Small issues can escalate quickly 
          into dangerous situations if left unaddressed.
        </p>
      </div>
    ),
    quiz: [
      {
        question: "Which of these is NOT a warning sign of a potential electrical hazard?",
        options: [
          "A burning odor near an electrical panel",
          "A steady green indicator light on equipment",
          "Frequent circuit breaker trips",
          "A buzzing sound from an electrical socket"
        ],
        correctAnswer: "A steady green indicator light on equipment",
        explanation: "A steady green indicator light is typically a sign that equipment is operating normally. The other options (burning odors, frequent breaker trips, and buzzing sounds) are all warning signs of potential electrical problems."
      }
    ]
  },
  {
    id: "3.2",
    title: "Lockout/Tagout",
    description: "Safe isolation procedures for electrical work",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Lockout/Tagout Procedures</h3>
        <p className="text-[#FFC900]/80">
          Lockout/Tagout (LOTO) procedures are critical safety measures used to ensure that hazardous energy sources are 
          properly isolated before maintenance or servicing work begins. These procedures prevent unexpected startup 
          of machinery or release of stored energy that could cause injury.
        </p>
        
        <h4 className="text-md font-medium text-[#FFC900]">Six Steps of Lockout/Tagout</h4>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Preparation</strong> - Identify all energy sources, necessary LOTO devices, and affected employees</li>
          <li><strong>Shutdown</strong> - Turn off the equipment using normal stopping procedures</li>
          <li><strong>Isolation</strong> - Physically disconnect or separate the equipment from all energy sources</li>
          <li><strong>Lockout/Tagout</strong> - Apply locks and tags to energy-isolating devices</li>
          <li><strong>Control stored energy</strong> - Release, restrain, or dissipate any potentially hazardous stored energy</li>
          <li><strong>Verification</strong> - Test to ensure equipment is properly isolated and de-energized</li>
        </ol>
        
        <h4 className="text-md font-medium text-[#FFC900]">Essential LOTO Equipment</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Locks</strong> - Durable, standardized locks with unique keys</li>
          <li><strong>Tags</strong> - Warning tags with clear information about who applied the lock, why, and when</li>
          <li><strong>Hasps</strong> - Devices that allow multiple locks to be applied to a single isolation point</li>
          <li><strong>Circuit breaker lockouts</strong> - Devices designed to prevent breakers from being reclosed</li>
          <li><strong>Valve lockouts</strong> - Devices to secure valves in closed position</li>
          <li><strong>Plug lockouts</strong> - Enclosures to prevent plugs from being connected</li>
          <li><strong>Test equipment</strong> - Voltage testers to verify de-energization</li>
        </ul>
        
        <h4 className="text-md font-medium text-[#FFC900]">Special LOTO Situations</h4>
        <p className="text-[#FFC900]/80">
          Certain situations require specific considerations:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Group lockout</strong> - When multiple workers are performing service on equipment</li>
          <li><strong>Shift changes</strong> - Procedures for transferring LOTO protection between shifts</li>
          <li><strong>Temporary removal</strong> - Process for briefly removing locks to test equipment</li>
          <li><strong>Emergency removal</strong> - Protocol for removing someone else's lock in an emergency</li>
          <li><strong>Complex systems</strong> - Procedures for equipment with multiple energy sources</li>
        </ul>
        
        <p className="text-[#FFC900]/80 mt-4">
          Remember that LOTO is not optional—it's a critical safety procedure required by regulations. Never take 
          shortcuts or assume that a brief task doesn't require full LOTO implementation. Many serious injuries and 
          fatalities have occurred during "quick" jobs where proper isolation was not performed.
        </p>
      </div>
    ),
    quiz: [
      {
        question: "What is the correct sequence for Lockout/Tagout procedures?",
        options: [
          "Preparation, Lockout/Tagout, Shutdown, Isolation, Control stored energy, Verification",
          "Shutdown, Preparation, Isolation, Lockout/Tagout, Control stored energy, Verification",
          "Preparation, Shutdown, Isolation, Lockout/Tagout, Control stored energy, Verification",
          "Verification, Preparation, Shutdown, Isolation, Lockout/Tagout, Control stored energy"
        ],
        correctAnswer: "Preparation, Shutdown, Isolation, Lockout/Tagout, Control stored energy, Verification",
        explanation: "The correct sequence for LOTO procedures is: 1) Preparation, 2) Shutdown, 3) Isolation, 4) Lockout/Tagout, 5) Control stored energy, and 6) Verification. This sequence ensures that all hazardous energy is properly controlled before work begins."
      }
    ]
  },
  {
    id: "3.3",
    title: "Safety Culture Development",
    description: "Building and sustaining a positive safety culture",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Developing a Positive Safety Culture</h3>
        <p className="text-[#FFC900]/80">
          A safety culture refers to the shared values, beliefs, attitudes, and behaviors regarding safety that exist 
          within an organization. A strong safety culture is essential for maintaining workplace safety beyond mere 
          compliance with rules and regulations.
        </p>
        
        <h4 className="text-md font-medium text-[#FFC900]">Characteristics of a Positive Safety Culture</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Leadership commitment</strong> - Management visibly prioritizes safety</li>
          <li><strong>Employee involvement</strong> - Workers actively participate in safety initiatives</li>
          <li><strong>Open communication</strong> - Safety concerns can be raised without fear</li>
          <li><strong>Learning orientation</strong> - Organization learns from incidents and near-misses</li>
          <li><strong>Just culture</strong> - Fair treatment when reporting incidents or concerns</li>
          <li><strong>Adaptability</strong> - Safety systems evolve with changing conditions</li>
          <li><strong>Mutual trust</strong> - Trust between workers and management regarding safety</li>
        </ul>
        
        <h4 className="text-md font-medium text-[#FFC900]">Building Blocks of Safety Culture</h4>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Management commitment</strong> - Leaders demonstrate that safety is a core value</li>
          <li><strong>Safety policies and procedures</strong> - Clear guidelines for safe work</li>
          <li><strong>Training and competence</strong> - Workers have knowledge and skills to work safely</li>
          <li><strong>Worker participation</strong> - Active involvement in safety programs</li>
          <li><strong>Communication systems</strong> - Effective sharing of safety information</li>
          <li><strong>Reporting mechanisms</strong> - Easy-to-use systems for reporting concerns</li>
          <li><strong>Recognition programs</strong> - Positive reinforcement of safe behaviors</li>
          <li><strong>Continuous improvement</strong> - Ongoing evaluation and enhancement of safety systems</li>
        </ol>
        
        <h4 className="text-md font-medium text-[#FFC900]">Overcoming Barriers to Safety Culture</h4>
        <p className="text-[#FFC900]/80">
          Common challenges in developing a safety culture include:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Production pressure that creates conflict with safety priorities</li>
          <li>Complacency due to lack of recent incidents</li>
          <li>Normalization of deviance (gradually accepting higher risk)</li>
          <li>Blame-oriented responses to incidents</li>
          <li>Poor communication across organizational levels</li>
          <li>Inconsistent application of safety standards</li>
          <li>Resistance to change from established practices</li>
        </ul>
        
        <p className="text-[#FFC900]/80 mt-4">
          Developing a strong safety culture is a long-term commitment rather than a one-time initiative. 
          It requires consistent effort, reinforcement, and adaptation as the organization evolves. The 
          benefits, however, are significant: fewer incidents, higher morale, improved quality, and better 
          overall performance.
        </p>
      </div>
    ),
    quiz: [
      {
        question: "Which of the following is NOT a characteristic of a positive safety culture?",
        options: [
          "Management visibly prioritizes safety",
          "Workers can raise safety concerns without fear",
          "Safety rules are strictly enforced with immediate termination for violations",
          "The organization learns from incidents and near-misses"
        ],
        correctAnswer: "Safety rules are strictly enforced with immediate termination for violations",
        explanation: "A positive safety culture involves fair treatment (just culture) when reporting incidents or concerns, not punitive measures like immediate termination. Such harsh enforcement can discourage reporting and transparency."
      }
    ]
  }
];

// Safety Awareness Quiz Questions
export const safetyAwarenessQuestions: AssessmentQuestion[] = [
  {
    question: "What is the first step in the risk assessment process?",
    options: [
      "Implement control measures",
      "Identify the hazards",
      "Document your findings",
      "Review the assessment"
    ],
    correctAnswer: "Identify the hazards",
    explanation: "The first step in any risk assessment is to identify all potential hazards that could cause harm."
  },
  {
    question: "How often should insulating rubber gloves typically be tested?",
    options: [
      "Every month",
      "Every 6 months",
      "Every year",
      "Every 2 years"
    ],
    correctAnswer: "Every 6 months",
    explanation: "Insulating rubber gloves should typically be electrically tested every 6 months to ensure they maintain their insulating properties."
  },
  {
    question: "What should you do first if you find someone in contact with an electrical source?",
    options: [
      "Pull them away from the source immediately",
      "Throw water on them to prevent burns",
      "Do not touch them and try to shut off the power source",
      "Begin CPR right away"
    ],
    correctAnswer: "Do not touch them and try to shut off the power source",
    explanation: "Never touch someone who is in contact with an electrical source as the current could pass through them to you. First, try to shut off the power if it's safe to do so."
  },
  {
    question: "Which of the following is NOT a key behavior of effective safety leadership?",
    options: [
      "Following safety procedures only when supervised",
      "Creating an environment where concerns can be raised freely",
      "Participating actively in safety meetings",
      "Taking responsibility for personal safety and the safety of others"
    ],
    correctAnswer: "Following safety procedures only when supervised",
    explanation: "Effective safety leaders consistently follow safety procedures at all times, not just when supervised. True safety leadership means demonstrating safe behaviors even when no one is watching."
  },
  {
    question: "Why is near-miss reporting particularly valuable in safety management?",
    options: [
      "It requires less paperwork than accident reports",
      "It provides opportunities to identify hazards before they cause harm",
      "It is only required for serious incidents",
      "It only needs to be done once a month"
    ],
    correctAnswer: "It provides opportunities to identify hazards before they cause harm",
    explanation: "Near-miss reporting allows organizations to identify and address hazards before they result in injuries or accidents, making it an important proactive safety measure."
  },
  {
    question: "Which of the following is NOT a best practice for safety documentation?",
    options: [
      "Ensuring all information is accurate and verified",
      "Completing documentation several weeks after an incident when there is time",
      "Writing in plain language that is easy to understand",
      "Protecting sensitive personal information appropriately"
    ],
    correctAnswer: "Completing documentation several weeks after an incident when there is time",
    explanation: "Documentation should be completed promptly while information is fresh and accurate, not delayed for weeks after an incident."
  },
  {
    question: "Which of these is NOT a warning sign of a potential electrical hazard?",
    options: [
      "A burning odor near an electrical panel",
      "A steady green indicator light on equipment",
      "Frequent circuit breaker trips",
      "A buzzing sound from an electrical socket"
    ],
    correctAnswer: "A steady green indicator light on equipment",
    explanation: "A steady green indicator light is typically a sign that equipment is operating normally. The other options (burning odors, frequent breaker trips, and buzzing sounds) are all warning signs of potential electrical problems."
  },
  {
    question: "What is the correct sequence for Lockout/Tagout procedures?",
    options: [
      "Preparation, Lockout/Tagout, Shutdown, Isolation, Control stored energy, Verification",
      "Shutdown, Preparation, Isolation, Lockout/Tagout, Control stored energy, Verification",
      "Preparation, Shutdown, Isolation, Lockout/Tagout, Control stored energy, Verification",
      "Verification, Preparation, Shutdown, Isolation, Lockout/Tagout, Control stored energy"
    ],
    correctAnswer: "Preparation, Shutdown, Isolation, Lockout/Tagout, Control stored energy, Verification",
    explanation: "The correct sequence for LOTO procedures is: 1) Preparation, 2) Shutdown, 3) Isolation, 4) Lockout/Tagout, 5) Control stored energy, and 6) Verification. This sequence ensures that all hazardous energy is properly controlled before work begins."
  },
  {
    question: "Which of the following is NOT a characteristic of a positive safety culture?",
    options: [
      "Management visibly prioritizes safety",
      "Workers can raise safety concerns without fear",
      "Safety rules are strictly enforced with immediate termination for violations",
      "The organization learns from incidents and near-misses"
    ],
    correctAnswer: "Safety rules are strictly enforced with immediate termination for violations",
    explanation: "A positive safety culture involves fair treatment (just culture) when reporting incidents or concerns, not punitive measures like immediate termination. Such harsh enforcement can discourage reporting and transparency."
  },
  {
    question: "What is the main purpose of Personal Protective Equipment (PPE) in electrical work?",
    options: [
      "To comply with company dress code requirements",
      "To identify workers as electrical personnel",
      "To serve as the last line of defense against workplace hazards",
      "To replace proper safety procedures and precautions"
    ],
    correctAnswer: "To serve as the last line of defense against workplace hazards",
    explanation: "PPE serves as the last line of defense against workplace hazards, after other control measures like elimination, substitution, engineering controls, and administrative controls have been implemented."
  },
  {
    question: "When should arc-rated clothing be worn?",
    options: [
      "Only during high-voltage work",
      "When working on or near energized equipment where an arc flash hazard exists",
      "Only when working outdoors",
      "Only when a supervisor is present"
    ],
    correctAnswer: "When working on or near energized equipment where an arc flash hazard exists",
    explanation: "Arc-rated clothing should be worn when working on or near energized electrical equipment where an arc flash hazard assessment indicates a risk exists, regardless of voltage level."
  },
  {
    question: "What should be documented in an incident report?",
    options: [
      "Only information that doesn't implicate anyone in wrongdoing",
      "Basic details like date and time, but no names to protect privacy",
      "All relevant information including date, time, location, people involved, and description of what happened",
      "Only information related to equipment damage, not personal injuries"
    ],
    correctAnswer: "All relevant information including date, time, location, people involved, and description of what happened",
    explanation: "An effective incident report should document all relevant information including basic details, a clear description of the incident, contributing factors, and actions taken."
  }
];
