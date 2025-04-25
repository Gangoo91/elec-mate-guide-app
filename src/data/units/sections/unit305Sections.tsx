
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const sections305: Record<string, SectionData> = {
  "1.1": {
    title: "Client Requirements Analysis",
    description: "Understanding and analyzing client requirements for electrical system design",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Importance of Client Requirements Analysis</h2>
        <p>
          A thorough analysis of client requirements is the foundation of successful electrical system design. It ensures that the final installation meets the client's needs, expectations, and budget while complying with all relevant regulations.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Initial Client Consultation</h3>
        <p>
          The first step in analyzing client requirements is a comprehensive consultation to discuss:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Intended use of the building or space</li>
          <li>Specific electrical requirements for equipment</li>
          <li>Special requirements for lighting, heating, or cooling</li>
          <li>Energy efficiency expectations and sustainability goals</li>
          <li>Budget constraints</li>
          <li>Aesthetic considerations</li>
          <li>Timeline for design and installation</li>
          <li>Future expansion plans or flexibility needs</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Documenting Requirements</h3>
        <p>
          All requirements should be documented in a clear, structured format:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Create a detailed client brief</li>
          <li>Develop a structured requirements document</li>
          <li>Use checklists to ensure all aspects are covered</li>
          <li>Prioritize requirements (must-have vs. nice-to-have)</li>
          <li>Have the client review and sign off on requirements</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Electrical Load Requirements</h2>
        <p>
          A critical part of the analysis is determining the electrical loads:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>List all electrical equipment to be installed</li>
          <li>Obtain power ratings for each piece of equipment</li>
          <li>Determine duty cycles and usage patterns</li>
          <li>Identify any equipment with special power quality requirements</li>
          <li>Consider starting currents for motors and other inductive loads</li>
          <li>Plan for future additional loads</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Site Survey</h2>
        <p>
          For existing buildings, a thorough site survey is essential:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Assess existing electrical infrastructure</li>
          <li>Check incoming supply capacity</li>
          <li>Identify potential routes for new circuits</li>
          <li>Note structural constraints</li>
          <li>Identify potential hazards</li>
          <li>Document existing earthing arrangements</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Stakeholder Identification</h2>
        <p>
          Identify all stakeholders who may have input or requirements:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Building owner</li>
          <li>End users</li>
          <li>Facilities management team</li>
          <li>Other design professionals (architects, mechanical engineers)</li>
          <li>Local authority building control</li>
          <li>Distribution Network Operator (DNO)</li>
          <li>Health and safety representatives</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Requirement Categories</h2>
        
        <h3 className="text-lg font-medium mt-4">Power Requirements</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Total power demand</li>
          <li>Circuit requirements</li>
          <li>Socket outlet quantities and locations</li>
          <li>Special requirements (e.g., clean power, UPS)</li>
          <li>External power requirements</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Lighting Requirements</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Illumination levels for different areas</li>
          <li>Type of lighting (task, ambient, accent)</li>
          <li>Control requirements (switches, dimmers, sensors)</li>
          <li>Emergency lighting needs</li>
          <li>Energy efficiency considerations</li>
          <li>Specific aesthetic requirements</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Control Systems</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Building management system (BMS) requirements</li>
          <li>Smart home/building features</li>
          <li>Lighting controls</li>
          <li>HVAC controls</li>
          <li>Energy monitoring requirements</li>
          <li>Remote access needs</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Deliverables and Client Sign-off</h2>
        <p>
          After completing the requirements analysis:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Prepare a detailed requirements specification document</li>
          <li>Include preliminary load calculations</li>
          <li>Develop conceptual designs if appropriate</li>
          <li>Provide initial budget estimates</li>
          <li>Present options for the client to consider</li>
          <li>Obtain formal client approval before proceeding to detailed design</li>
        </ul>
      </div>
    ),
  },
  "1.2": {
    title: "Regulatory Constraints",
    description: "Understanding the regulatory framework that governs electrical installation design",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Key Regulatory Standards for Electrical Design</h2>
        <p>
          Electrical system design is governed by various regulations, standards, and codes of practice that must be followed to ensure safety, compliance, and operational effectiveness.
        </p>
        
        <h3 className="text-lg font-medium mt-4">BS 7671: Requirements for Electrical Installations (IET Wiring Regulations)</h3>
        <p>
          The fundamental standard for UK electrical installations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Sets minimum safety standards for electrical design and installation</li>
          <li>Updated periodically with amendments to address new technologies and safety concerns</li>
          <li>Currently at 18th Edition (with amendments)</li>
          <li>Covers all aspects of electrical installations including:
            <ul className="list-disc pl-6 mt-1">
              <li>Protection for safety</li>
              <li>Selection and erection of equipment</li>
              <li>Inspection and testing</li>
              <li>Special installations or locations</li>
            </ul>
          </li>
          <li>Not directly enforceable by law but used as evidence of compliance with statutory regulations</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Building Regulations</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Approved Document P (Electrical Safety) for domestic premises</li>
          <li>Requires notification of certain electrical work to building control</li>
          <li>Requires work to be certified as compliant with BS 7671</li>
          <li>Approved Document B (Fire Safety)</li>
          <li>Approved Document L (Conservation of fuel and power)</li>
          <li>Approved Document M (Access to and use of buildings)</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Statutory Regulations</h2>
        
        <h3 className="text-lg font-medium mt-4">Electricity at Work Regulations 1989</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Legal requirements for electrical safety in workplaces</li>
          <li>Places duties on employers, employees and self-employed persons</li>
          <li>Requires electrical systems to be maintained to prevent danger</li>
          <li>Work activities must not cause danger</li>
          <li>Enforced by the Health and Safety Executive (HSE)</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Health and Safety at Work Act 1974</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Overarching legislation for workplace safety</li>
          <li>General duty of care for employers to ensure safety</li>
          <li>Duty to provide safe equipment and systems of work</li>
          <li>Requirements for information, instruction, training and supervision</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Electricity Safety, Quality and Continuity Regulations 2002 (as amended)</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Governs the supply and distribution of electricity</li>
          <li>Requirements for connection to distribution networks</li>
          <li>Safety standards for distribution equipment</li>
          <li>Earthing arrangements for different supply systems</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Industry Codes and Guidance</h2>
        
        <h3 className="text-lg font-medium mt-4">IET Guidance Notes</h3>
        <p>
          Series of publications providing detailed guidance on specific aspects:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>GN1: Selection and Erection</li>
          <li>GN2: Isolation and Switching</li>
          <li>GN3: Inspection and Testing</li>
          <li>GN4: Protection Against Fire</li>
          <li>GN5: Protection Against Electric Shock</li>
          <li>GN6: Protection Against Overcurrent</li>
          <li>GN7: Special Locations</li>
          <li>GN8: Earthing and Bonding</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">NICEIC/ELECSA Technical Handbooks</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Practical guidance for compliant installations</li>
          <li>Interpretation of regulations for different applications</li>
          <li>Updated regularly to reflect regulatory changes</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Planning and Environmental Regulations</h2>
        
        <h3 className="text-lg font-medium mt-4">Planning Permission Requirements</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>External electrical equipment may require planning consent</li>
          <li>Restrictions in conservation areas or listed buildings</li>
          <li>Visual impact considerations for external equipment</li>
          <li>Noise restrictions for generators or transformers</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Environmental Legislation</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Environmental Protection Act</li>
          <li>Waste Electrical and Electronic Equipment (WEEE) Regulations</li>
          <li>Restriction of Hazardous Substances (RoHS) Directive</li>
          <li>Energy performance requirements</li>
          <li>Climate Change Act and carbon reduction targets</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Specific Application Standards</h2>
        
        <h3 className="text-lg font-medium mt-4">Special Locations</h3>
        <p>
          Additional standards apply for specialized installations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>BS EN 60079 series: Explosive atmospheres</li>
          <li>HTM 06-01: Electrical services supply and distribution (healthcare)</li>
          <li>BS 5266: Emergency lighting systems</li>
          <li>BS 5839: Fire detection and alarm systems</li>
          <li>BS 7430: Code of practice for protective earthing of electrical installations</li>
          <li>BS EN 62305: Protection against lightning</li>
          <li>BS 7909: Temporary electrical systems for entertainment events</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Energy Efficiency Requirements</h2>
        
        <h3 className="text-lg font-medium mt-4">Minimum Energy Efficiency Standards</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Energy Performance of Buildings Directive (EPBD)</li>
          <li>Minimum Energy Efficiency Standards (MEES)</li>
          <li>Energy Performance Certificate (EPC) requirements</li>
          <li>Part L of Building Regulations</li>
          <li>Minimum efficiency standards for equipment (e.g., motors, lighting)</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Building Sustainability Standards</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>BREEAM (Building Research Establishment Environmental Assessment Method)</li>
          <li>LEED (Leadership in Energy and Environmental Design)</li>
          <li>WELL Building Standard</li>
          <li>Passivhaus standard</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Network Operator Requirements</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Distribution Network Operator (DNO) connection requirements</li>
          <li>G99/G98 for grid-connected generation equipment</li>
          <li>Maximum demand limitations</li>
          <li>Point of supply and metering arrangements</li>
          <li>Supply characteristics (voltage, frequency, phase arrangement)</li>
          <li>Earthing arrangements (TN-S, TN-C-S, TT systems)</li>
        </ul>
      </div>
    ),
  },
  "1.3": {
    title: "Safety and Energy Efficiency Considerations",
    description: "Integrating safety and energy efficiency into electrical installation design",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Safety in Electrical Design</h2>
        <p>
          Safety is the paramount consideration in electrical design, encompassing protection against electric shock, fire, thermal effects, and other hazards.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Protection Against Electric Shock</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Basic protection (protection against direct contact):
            <ul className="list-disc pl-6 mt-1">
              <li>Insulation of live parts</li>
              <li>Barriers or enclosures</li>
              <li>Obstacles (for skilled persons)</li>
              <li>Placing out of reach (for skilled persons)</li>
            </ul>
          </li>
          <li>Fault protection (protection against indirect contact):
            <ul className="list-disc pl-6 mt-1">
              <li>Automatic disconnection of supply</li>
              <li>Double or reinforced insulation</li>
              <li>Electrical separation</li>
              <li>Extra-low voltage systems (SELV and PELV)</li>
            </ul>
          </li>
          <li>Additional protection:
            <ul className="list-disc pl-6 mt-1">
              <li>Residual current devices (RCDs)</li>
              <li>Supplementary equipotential bonding</li>
            </ul>
          </li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Protection Against Thermal Effects</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Prevention of ignition of combustible materials</li>
          <li>Protection against burns</li>
          <li>Prevention of overheating of equipment</li>
          <li>Fire-rated materials for electrical installations</li>
          <li>Appropriate IP ratings for dusty or explosive atmospheres</li>
          <li>Thermal insulation for hot surfaces</li>
          <li>Appropriate cable sizing to prevent overheating</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Overcurrent Protection Design</h2>
        
        <h3 className="text-lg font-medium mt-4">Protection Against Overload Current</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Proper sizing of protective devices for conductors</li>
          <li>Consideration of ambient temperature derating factors</li>
          <li>Grouping factors for multiple circuits</li>
          <li>Diversity factors for load assessment</li>
          <li>Coordination with conductor current-carrying capacity</li>
          <li>Consideration of harmonic currents</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Protection Against Short-Circuit Current</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Calculation of prospective short-circuit current</li>
          <li>Selection of devices with adequate breaking capacity</li>
          <li>Coordination between protective devices</li>
          <li>Fault current limitation techniques</li>
          <li>Time/current characteristics of protective devices</li>
          <li>Energy limitation for conductor protection</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Energy Efficiency Design Principles</h2>
        
        <h3 className="text-lg font-medium mt-4">Load Assessment and Management</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Accurate assessment of actual load requirements</li>
          <li>Avoidance of over-specification</li>
          <li>Load balancing across phases</li>
          <li>Implementation of intelligent load shedding</li>
          <li>Peak demand management strategies</li>
          <li>Time-of-use controls to minimize consumption during peak periods</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Energy-Efficient Equipment Selection</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>High-efficiency motors (IE3 or IE4 rating)</li>
          <li>LED lighting technologies</li>
          <li>Energy-efficient transformers</li>
          <li>Variable speed drives for motor applications</li>
          <li>Energy Star or similar rated appliances and equipment</li>
          <li>Power factor correction equipment</li>
          <li>Efficient HVAC systems and controls</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Distribution System Optimization</h2>
        
        <h3 className="text-lg font-medium mt-4">Power Loss Reduction</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Optimal cable sizing to minimize losses</li>
          <li>Strategic placement of distribution boards to reduce cable runs</li>
          <li>Higher voltage distribution where appropriate</li>
          <li>Selection of equipment with low standby power consumption</li>
          <li>DC distribution for certain applications</li>
          <li>Prevention of harmonic losses through filtering or oversizing</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Power Quality Improvement</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Harmonic mitigation measures</li>
          <li>Voltage optimization technology</li>
          <li>Active power factor correction</li>
          <li>Balanced loading of three-phase systems</li>
          <li>Surge protection to prevent equipment damage</li>
          <li>Appropriate earthing design to minimize interference</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Control Systems for Energy Efficiency</h2>
        
        <h3 className="text-lg font-medium mt-4">Lighting Controls</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Occupancy/motion sensors</li>
          <li>Daylight harvesting systems</li>
          <li>Task-appropriate lighting design</li>
          <li>Timed or astronomical controls for external lighting</li>
          <li>Scene setting capabilities for different activities</li>
          <li>Addressable lighting control systems</li>
          <li>Integration with building management systems</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">HVAC Electrical Controls</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Programmable thermostats and zoned controls</li>
          <li>Variable speed drives for fans and pumps</li>
          <li>Demand-controlled ventilation</li>
          <li>Free cooling capability</li>
          <li>Heat recovery systems</li>
          <li>Optimum start/stop controls</li>
          <li>Weather compensation controls</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Renewable Integration and Energy Storage</h2>
        
        <h3 className="text-lg font-medium mt-4">Renewable Energy Systems</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Design for solar PV integration</li>
          <li>Accommodation of wind or other renewable sources</li>
          <li>Grid connection requirements</li>
          <li>Export limitation devices where required</li>
          <li>Power quality considerations</li>
          <li>Islanding protection</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Energy Storage Systems</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Battery storage system integration</li>
          <li>Charging/discharging control strategies</li>
          <li>Safety considerations for battery installations</li>
          <li>Thermal management of storage systems</li>
          <li>Emergency backup capability</li>
          <li>Grid support functions</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Monitoring and Measurement</h2>
        
        <h3 className="text-lg font-medium mt-4">Energy Monitoring Systems</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Sub-metering for key energy consumers</li>
          <li>Power quality monitoring</li>
          <li>Real-time energy dashboards</li>
          <li>Automatic data collection and reporting</li>
          <li>Alert systems for abnormal consumption patterns</li>
          <li>Integration with building management systems</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Return on Investment Considerations</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Life-cycle cost analysis for energy-efficient solutions</li>
          <li>Payback period calculations</li>
          <li>Consideration of energy price increases</li>
          <li>Available incentives and grants</li>
          <li>Enhanced capital allowances for energy-efficient equipment</li>
          <li>Maintenance cost reductions from efficient systems</li>
        </ul>
      </div>
    ),
  },
};
