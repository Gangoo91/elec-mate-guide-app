
import React from 'react';

// Section 1.1: Purpose of Documentation
export const documentationSection1_1 = {
  title: "Purpose of Documentation",
  content: (
    <>
      <p className="mb-4">
        Proper documentation is a cornerstone of effective electrical maintenance. It serves multiple critical purposes that impact safety, compliance, efficiency, and business continuity.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Key Purposes of Maintenance Documentation</h3>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">1. Safety Assurance</h4>
      <p className="mb-3">
        Documentation provides a record of safety measures implemented during maintenance activities, ensuring that:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Proper lockout/tagout procedures were followed</li>
        <li>Safety tests were conducted according to standards</li>
        <li>Hazardous conditions were identified and addressed</li>
        <li>Safety devices and protective measures were verified</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">2. Regulatory Compliance</h4>
      <p className="mb-3">
        Comprehensive documentation demonstrates adherence to:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Health and Safety at Work Act requirements</li>
        <li>Electricity at Work Regulations</li>
        <li>Building regulations and local authority requirements</li>
        <li>Industry-specific standards (BS 7671, etc.)</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">3. Historical Record</h4>
      <p className="mb-3">
        Maintenance documentation creates a valuable historical record that:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Tracks equipment performance over time</li>
        <li>Documents modifications and upgrades</li>
        <li>Provides insights into recurring issues</li>
        <li>Enables trend analysis for predictive maintenance</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">4. Knowledge Transfer</h4>
      <p className="mb-3">
        Well-maintained documentation facilitates knowledge transfer by:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Enabling new maintenance personnel to understand systems quickly</li>
        <li>Preserving institutional knowledge despite staff turnover</li>
        <li>Creating standardized procedures that ensure consistency</li>
        <li>Reducing dependency on specific individuals</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">5. Cost Justification and Planning</h4>
      <p className="mb-3">
        Documentation supports financial aspects of maintenance by:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Providing evidence for warranty claims</li>
        <li>Justifying maintenance expenditures</li>
        <li>Supporting capital budget planning for replacements</li>
        <li>Demonstrating return on investment for maintenance activities</li>
      </ul>
      
      <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Industry Insight</h3>
        <p>
          A 2023 study by the Institute of Asset Management found that organizations with robust maintenance documentation systems experienced 37% fewer unexpected equipment failures and 28% lower maintenance costs compared to those with poor documentation practices.
        </p>
      </div>
    </>
  )
};

// Section 1.2: Regulatory Requirements
export const documentationSection1_2 = {
  title: "Regulatory Requirements",
  content: (
    <>
      <p className="mb-4">
        In the UK, maintenance documentation is governed by various regulations and standards that establish minimum requirements for record-keeping in electrical maintenance.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Key Regulatory Frameworks</h3>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">Health and Safety at Work Act 1974</h4>
      <p className="mb-3">
        This foundational legislation requires employers to ensure the health, safety, and welfare of employees, which includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Maintaining records of risk assessments</li>
        <li>Documenting safety procedures</li>
        <li>Recording incidents and accidents</li>
        <li>Evidencing employee training on safety protocols</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">Electricity at Work Regulations 1989</h4>
      <p className="mb-3">
        These regulations specifically address electrical safety and require:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Records of inspection and testing of electrical systems</li>
        <li>Documentation of maintenance work performed</li>
        <li>Evidence of competency for personnel working on electrical systems</li>
        <li>Records of electrical safety assessments</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">Provision and Use of Work Equipment Regulations (PUWER) 1998</h4>
      <p className="mb-3">
        PUWER requires documentation related to work equipment, including:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Maintenance logs for equipment</li>
        <li>Inspection schedules and results</li>
        <li>Records of equipment modifications</li>
        <li>Operating instructions and training records</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">IET Wiring Regulations (BS 7671)</h4>
      <p className="mb-3">
        These regulations establish standards for electrical installations and require specific documentation:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Electrical Installation Certificates</li>
        <li>Periodic Inspection Reports</li>
        <li>Minor Works Certificates</li>
        <li>Testing records with measured values</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">Document Retention Requirements</h4>
      <p className="mb-3">
        Various regulations specify minimum retention periods for maintenance documentation:
      </p>
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="bg-[#2a2d24]">
            <th className="border border-[#FFC900]/20 p-2 text-left">Document Type</th>
            <th className="border border-[#FFC900]/20 p-2 text-left">Minimum Retention Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Electrical Installation Certificates</td>
            <td className="border border-[#FFC900]/20 p-2">Life of installation</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Periodic Inspection Reports</td>
            <td className="border border-[#FFC900]/20 p-2">At least until next inspection</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Maintenance Records</td>
            <td className="border border-[#FFC900]/20 p-2">Minimum 5 years</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Accident Reports</td>
            <td className="border border-[#FFC900]/20 p-2">Minimum 3 years</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Risk Assessments</td>
            <td className="border border-[#FFC900]/20 p-2">As long as valid (review regularly)</td>
          </tr>
        </tbody>
      </table>
      
      <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Compliance Note</h3>
        <p>
          Failure to maintain proper documentation can result in enforcement actions, including improvement notices, prohibition notices, and in severe cases, prosecution. The Health and Safety Executive (HSE) can issue fines of up to £20,000 in magistrates' courts, with unlimited fines possible in higher courts for serious breaches.
        </p>
      </div>
    </>
  )
};

// Section 1.3: Document Management Systems
export const documentationSection1_3 = {
  title: "Document Management Systems",
  content: (
    <>
      <p className="mb-4">
        Effective maintenance documentation requires organized systems for storing, retrieving, and managing records. Modern document management systems (DMS) provide structured approaches to handling the extensive documentation required in electrical maintenance.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Types of Document Management Systems</h3>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">1. Paper-Based Systems</h4>
      <p className="mb-3">
        Traditional documentation methods still used in some environments:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>File cabinets with organized folders</li>
        <li>Printed logbooks and binders</li>
        <li>Secure document storage rooms</li>
        <li>Index card systems for quick reference</li>
      </ul>
      
      <p className="mb-3">
        <strong>Advantages:</strong> No technology requirements, familiar to long-term staff, physically tangible
      </p>
      <p className="mb-3">
        <strong>Disadvantages:</strong> Space requirements, difficult to back up, slow retrieval, vulnerable to physical damage
      </p>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">2. Electronic Document Management Systems (EDMS)</h4>
      <p className="mb-3">
        Software solutions designed specifically for document management:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Centralized digital storage with search capability</li>
        <li>Version control and document history</li>
        <li>Access controls and permissions</li>
        <li>Automated backup systems</li>
        <li>Document categorization and tagging</li>
      </ul>
      
      <p className="mb-3">
        <strong>Advantages:</strong> Fast retrieval, multiple access points, powerful search, secure backups
      </p>
      <p className="mb-3">
        <strong>Disadvantages:</strong> Initial setup costs, training requirements, dependency on IT infrastructure
      </p>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">3. Computerized Maintenance Management Systems (CMMS)</h4>
      <p className="mb-3">
        Comprehensive solutions that include document management as part of a larger maintenance platform:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Integration with work order systems</li>
        <li>Equipment history tracking</li>
        <li>Automated preventive maintenance scheduling</li>
        <li>Inventory management integration</li>
        <li>Mobile access for field technicians</li>
      </ul>
      
      <p className="mb-3">
        <strong>Advantages:</strong> Comprehensive system, data integration, workflow automation
      </p>
      <p className="mb-3">
        <strong>Disadvantages:</strong> Higher cost, complexity, may exceed needs of smaller operations
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Essential Features of Document Management Systems</h3>
      
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Search functionality:</strong> Ability to quickly locate documents based on content, metadata, dates, etc.</li>
        <li><strong>Version control:</strong> Tracking changes and maintaining document history</li>
        <li><strong>Access control:</strong> Defining who can view, edit, or approve documents</li>
        <li><strong>Audit trails:</strong> Recording who accessed or modified documents and when</li>
        <li><strong>Integration capabilities:</strong> Connecting with other systems like email or ERP</li>
        <li><strong>Notification system:</strong> Alerting users about document updates or required reviews</li>
        <li><strong>Template management:</strong> Standardized formats for common document types</li>
      </ul>
      
      <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Implementation Tip</h3>
        <p>
          When transitioning to an electronic document management system, start with a well-defined document naming convention and folder structure. Create a clear taxonomy that mimics your physical filing system initially, then gradually enhance it with electronic-specific features like tagging and metadata as users become more comfortable with the system.
        </p>
      </div>
    </>
  )
};

// Section 2.1: Maintenance Logs
export const documentationSection2_1 = {
  title: "Maintenance Logs",
  content: (
    <>
      <p className="mb-4">
        Maintenance logs are systematic records of all maintenance activities performed on equipment and systems. They provide a chronological history of work performed, issues encountered, and actions taken.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Components of Effective Maintenance Logs</h3>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">1. Equipment Identification</h4>
      <p className="mb-3">
        Clear identification of the specific equipment serviced:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Equipment tag/ID number</li>
        <li>Serial number</li>
        <li>Make and model</li>
        <li>Location</li>
        <li>System or circuit it belongs to</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">2. Maintenance Details</h4>
      <p className="mb-3">
        Comprehensive information about the maintenance performed:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Date and time of maintenance</li>
        <li>Type of maintenance (preventive, corrective, predictive)</li>
        <li>Detailed description of work performed</li>
        <li>Parts replaced or repaired</li>
        <li>Adjustments made</li>
        <li>Lubricants, chemicals, or consumables used</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">3. Condition Assessment</h4>
      <p className="mb-3">
        Evaluation of equipment condition before and after maintenance:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Initial observations and issues found</li>
        <li>Measurements and readings taken</li>
        <li>Test results</li>
        <li>Post-maintenance performance verification</li>
        <li>Remaining issues or concerns</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">4. Personnel Information</h4>
      <p className="mb-3">
        Record of who performed the work:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Name(s) of technician(s)</li>
        <li>Qualifications or certifications</li>
        <li>Supervisor sign-off</li>
        <li>Total labor hours</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">5. Safety Information</h4>
      <p className="mb-3">
        Documentation of safety procedures followed:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Lockout/tagout procedures applied</li>
        <li>Permits issued or required</li>
        <li>Safety equipment used</li>
        <li>Hazards encountered and mitigations</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Sample Maintenance Log Entry</h3>
      
      <div className="bg-[#2a2d24] p-4 rounded-lg mb-6">
        <h4 className="text-lg font-medium text-[#FFC900]/90 mb-2">Maintenance Log: Distribution Panel DP-3A</h4>
        <p><strong>Date:</strong> 15/03/2025</p>
        <p><strong>Time:</strong> 09:30 - 11:45</p>
        <p><strong>Equipment ID:</strong> DP-3A</p>
        <p><strong>Location:</strong> Building 4, Floor 2, Electrical Room</p>
        <p><strong>Maintenance Type:</strong> Scheduled Preventive Maintenance</p>
        <p><strong>Work Performed:</strong> Annual thermal imaging inspection, connection tightness check, and general cleaning of distribution panel.</p>
        <p><strong>Findings:</strong> Thermal scan revealed elevated temperature (68°C) at connection point for circuit #7. Visual inspection showed loose connection. All other connections normal temperature range (25-35°C).</p>
        <p><strong>Actions Taken:</strong> Isolated panel following LOTO procedure #EP-122. Tightened loose connection on circuit #7 to 5Nm torque. Cleaned all bus bars and internal components with approved electrical cleaner. Re-torqued all connections to manufacturer specifications. Verified correct torque.</p>
        <p><strong>Post-Maintenance Testing:</strong> Thermal scan after 1 hour under load shows circuit #7 now at 32°C, within normal range. All circuit breakers exercised and operating properly.</p>
        <p><strong>Parts Used:</strong> None</p>
        <p><strong>Technician:</strong> J. Smith (Certification #EL-2789)</p>
        <p><strong>Verified By:</strong> M. Johnson, Maintenance Supervisor</p>
        <p><strong>Next Scheduled Maintenance:</strong> March 2026</p>
      </div>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Best Practices for Maintenance Logging</h3>
      
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Create standardized templates for consistent data entry</li>
        <li>Include photographs or thermal images when relevant</li>
        <li>Ensure entries are made immediately after work completion</li>
        <li>Use clear, specific language avoiding jargon</li>
        <li>Record even minor observations that might indicate developing issues</li>
        <li>Link maintenance logs to related documents like permits or test reports</li>
        <li>Regularly review logs to identify patterns or recurring issues</li>
      </ul>
    </>
  )
};

// Section 2.2: Inspection Reports
export const documentationSection2_2 = {
  title: "Inspection Reports",
  content: (
    <>
      <p className="mb-4">
        Inspection reports document the systematic examination of electrical equipment and systems to assess their condition, identify potential issues, and ensure compliance with safety and operational standards.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Types of Electrical Inspections</h3>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">1. Periodic Inspection and Testing</h4>
      <p className="mb-3">
        Comprehensive inspections conducted at scheduled intervals:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Condition reporting of electrical installations</li>
        <li>Verification of compliance with BS 7671 (Wiring Regulations)</li>
        <li>Identification of damage, deterioration, and defects</li>
        <li>Complete testing sequence including insulation resistance, earth continuity, etc.</li>
        <li>Results in an Electrical Installation Condition Report (EICR)</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">2. Visual Inspections</h4>
      <p className="mb-3">
        Regular observations without detailed testing:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Identification of physical damage or deterioration</li>
        <li>Checking for loose connections or components</li>
        <li>Verification of warning signs and labels</li>
        <li>Assessment of environmental conditions</li>
        <li>Often performed as part of routine maintenance</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">3. Thermographic Inspections</h4>
      <p className="mb-3">
        Using infrared technology to detect abnormal heating:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Non-intrusive inspection method</li>
        <li>Identification of hotspots indicating loose connections</li>
        <li>Detection of overloaded circuits</li>
        <li>Documentation of temperature anomalies</li>
        <li>Visual thermal images included in reports</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">4. Pre-energization Inspections</h4>
      <p className="mb-3">
        Checks performed before newly installed or modified equipment is energized:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Verification that installation matches design specifications</li>
        <li>Checking proper termination of conductors</li>
        <li>Confirmation of protective devices installation</li>
        <li>Inspection of earthing and bonding</li>
        <li>Clearance and creepage distance verification</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Key Components of Inspection Reports</h3>
      
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Identification information:</strong> Location, system details, equipment details</li>
        <li><strong>Inspection details:</strong> Date, time, type of inspection, standards referenced</li>
        <li><strong>Inspector information:</strong> Name, qualifications, contact details</li>
        <li><strong>Inspection methods:</strong> Procedures, equipment, and techniques used</li>
        <li><strong>Observations:</strong> Detailed findings categorized by severity</li>
        <li><strong>Test results:</strong> Measurements, readings, and comparison to standards</li>
        <li><strong>Defect classification:</strong> Categorization of issues (e.g., C1 - danger present, C2 - potentially dangerous)</li>
        <li><strong>Recommendations:</strong> Required actions with timeframes</li>
        <li><strong>Supporting documentation:</strong> Photographs, diagrams, thermal images</li>
        <li><strong>Declaration:</strong> Statement of conformity or non-conformity</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Defect Classification in EICR Reports</h3>
      
      <table className="w-full border-collapse mb-6">
        <thead>
          <tr className="bg-[#2a2d24]">
            <th className="border border-[#FFC900]/20 p-2 text-left">Code</th>
            <th className="border border-[#FFC900]/20 p-2 text-left">Classification</th>
            <th className="border border-[#FFC900]/20 p-2 text-left">Recommended Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">C1</td>
            <td className="border border-[#FFC900]/20 p-2">Danger Present</td>
            <td className="border border-[#FFC900]/20 p-2">Risk of injury - immediate action required</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">C2</td>
            <td className="border border-[#FFC900]/20 p-2">Potentially Dangerous</td>
            <td className="border border-[#FFC900]/20 p-2">Urgent remedial action required</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">C3</td>
            <td className="border border-[#FFC900]/20 p-2">Improvement Recommended</td>
            <td className="border border-[#FFC900]/20 p-2">Not dangerous but improvement recommended</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">FI</td>
            <td className="border border-[#FFC900]/20 p-2">Further Investigation</td>
            <td className="border border-[#FFC900]/20 p-2">Additional examination needed to determine category</td>
          </tr>
        </tbody>
      </table>
      
      <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Professional Practice Note</h3>
        <p>
          When preparing inspection reports, be precise and objective in your descriptions. Avoid vague terms like "faulty" or "damaged" without specific details. Instead, describe exactly what was observed: "The insulation on the conductor is cracked and exposes 5mm of bare copper." This precision helps maintenance teams correctly prioritize and address issues.
        </p>
      </div>
    </>
  )
};

// Section 2.3: Failure Analysis Reports
export const documentationSection2_3 = {
  title: "Failure Analysis Reports",
  content: (
    <>
      <p className="mb-4">
        Failure Analysis Reports document the investigation of equipment or system failures, aiming to identify root causes and implement corrective actions to prevent recurrence. These reports are critical for improving reliability and safety in electrical maintenance.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Purpose of Failure Analysis</h3>
      
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Determine what failed and the physical cause</li>
        <li>Identify the root cause behind the failure</li>
        <li>Assess the impact of the failure on operations and safety</li>
        <li>Develop corrective actions to prevent similar failures</li>
        <li>Provide data for reliability and maintenance program improvement</li>
        <li>Document lessons learned for knowledge sharing</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Components of a Comprehensive Failure Analysis Report</h3>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">1. Failure Description</h4>
      <p className="mb-3">
        Detailed account of the failure event:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Date, time, and location of failure</li>
        <li>Equipment identification and specifications</li>
        <li>Operating conditions at time of failure</li>
        <li>Symptoms and manifestations observed</li>
        <li>Sequence of events leading to the failure</li>
        <li>Immediate actions taken after failure</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">2. Investigation Methodology</h4>
      <p className="mb-3">
        Description of the approach used to analyze the failure:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Investigation team members and their expertise</li>
        <li>Data collection methods</li>
        <li>Analysis techniques employed (e.g., 5-Why, Fishbone diagram)</li>
        <li>Testing and examination procedures</li>
        <li>Reference standards or guidelines followed</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">3. Findings and Analysis</h4>
      <p className="mb-3">
        Results of the investigation:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Physical evidence discovered</li>
        <li>Test results and measurements</li>
        <li>Comparison with design specifications</li>
        <li>Evaluation of maintenance history</li>
        <li>Assessment of operating procedures</li>
        <li>Consideration of environmental factors</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">4. Root Cause Identification</h4>
      <p className="mb-3">
        Determination of underlying causes:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Immediate physical or technical cause</li>
        <li>Human factors or errors involved</li>
        <li>Procedural or process inadequacies</li>
        <li>Design or specification issues</li>
        <li>Maintenance program deficiencies</li>
        <li>Management or system failures</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">5. Corrective Actions</h4>
      <p className="mb-3">
        Recommendations to prevent recurrence:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Immediate corrective actions taken</li>
        <li>Short-term preventive measures</li>
        <li>Long-term solutions</li>
        <li>Changes to maintenance procedures</li>
        <li>Training requirements</li>
        <li>Modifications to equipment or systems</li>
        <li>Timeline and responsibility assignments</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Common Root Causes of Electrical Failures</h3>
      
      <table className="w-full border-collapse mb-6">
        <thead>
          <tr className="bg-[#2a2d24]">
            <th className="border border-[#FFC900]/20 p-2 text-left">Category</th>
            <th className="border border-[#FFC900]/20 p-2 text-left">Example Root Causes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Design Issues</td>
            <td className="border border-[#FFC900]/20 p-2">Undersized components, inadequate cooling, improper protection coordination</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Material Failures</td>
            <td className="border border-[#FFC900]/20 p-2">Insulation degradation, contact oxidation, manufacturing defects</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Environmental Factors</td>
            <td className="border border-[#FFC900]/20 p-2">Moisture ingress, contaminants, excessive heat, vibration</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Maintenance Issues</td>
            <td className="border border-[#FFC900]/20 p-2">Inadequate inspection frequency, improper repair procedures, missed preventive tasks</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Operational Errors</td>
            <td className="border border-[#FFC900]/20 p-2">Incorrect switching sequences, overloading, improper settings</td>
          </tr>
        </tbody>
      </table>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Failure Analysis Methods</h3>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">5-Why Analysis</h4>
      <p className="mb-3">
        A technique that involves asking "why" multiple times to peel away layers of symptoms and reach the root cause:
      </p>
      <div className="bg-[#2a2d24] p-4 rounded-lg mb-4">
        <p><strong>Problem:</strong> Motor control center (MCC) contactor failure</p>
        <p><strong>Why #1:</strong> The contactor contacts welded together.</p>
        <p><strong>Why #2:</strong> The contacts experienced excessive current.</p>
        <p><strong>Why #3:</strong> The motor experienced frequent starting operations in short succession.</p>
        <p><strong>Why #4:</strong> The level control system was rapidly cycling the pump on and off.</p>
        <p><strong>Why #5:</strong> The level switch setpoints were too close together.</p>
        <p><strong>Root Cause:</strong> Improper configuration of level control parameters.</p>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">Fishbone (Ishikawa) Diagram</h4>
      <p className="mb-3">
        A visual tool that categorizes potential causes into major categories (commonly: Man, Machine, Method, Material, Measurement, Environment):
      </p>
      <p className="mb-3">
        This approach helps ensure a comprehensive investigation of all possible contributing factors to the failure.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Best Practice</h3>
        <p>
          When documenting failure analysis, maintain a blame-free approach focused on system improvement rather than individual culpability. This encourages honest reporting and more effective problem-solving. The goal is to identify and address systemic issues, not to assign blame.
        </p>
      </div>
    </>
  )
};

// Section 3.1: Digital Documentation
export const documentationSection3_1 = {
  title: "Digital Documentation",
  content: (
    <>
      <p className="mb-4">
        Digital documentation systems are transforming how maintenance records are created, stored, and utilized in electrical maintenance. Modern software solutions offer significant advantages over traditional paper-based systems while introducing new considerations for implementation and management.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Digital Documentation Technologies</h3>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">1. Computerized Maintenance Management Systems (CMMS)</h4>
      <p className="mb-3">
        Comprehensive software platforms specifically designed for maintenance operations:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Work order generation and tracking</li>
        <li>Equipment history records</li>
        <li>Preventive maintenance scheduling</li>
        <li>Inventory management</li>
        <li>Documentation storage and retrieval</li>
        <li>Reporting and analytics</li>
        <li>Mobile access for field technicians</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">2. Mobile Documentation Tools</h4>
      <p className="mb-3">
        Applications designed for on-site documentation using portable devices:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Form-based data collection</li>
        <li>Photo and video capture capability</li>
        <li>Voice-to-text documentation</li>
        <li>QR/barcode scanning for equipment identification</li>
        <li>Offline functionality with later synchronization</li>
        <li>Digital signature capture</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">3. Building Information Modeling (BIM) Integration</h4>
      <p className="mb-3">
        Linking maintenance documentation to digital building models:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Spatial representation of equipment and systems</li>
        <li>Visual navigation of maintenance records</li>
        <li>Access to specifications and as-built information</li>
        <li>Integration with facility management systems</li>
        <li>Lifecycle information management</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">4. Cloud-Based Documentation Systems</h4>
      <p className="mb-3">
        Online platforms for storing and accessing documentation:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Remote access from any location</li>
        <li>Automatic backup and disaster recovery</li>
        <li>Scalable storage capacity</li>
        <li>Collaboration features for multiple users</li>
        <li>Version control and document history</li>
        <li>Integration with other business systems</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Benefits of Digital Documentation</h3>
      
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Accessibility:</strong> Instant access to documentation from anywhere</li>
        <li><strong>Searchability:</strong> Quick location of specific information</li>
        <li><strong>Data integrity:</strong> Reduction in transcription errors and lost documents</li>
        <li><strong>Analysis capability:</strong> Trend identification and predictive maintenance</li>
        <li><strong>Space savings:</strong> Elimination of physical storage requirements</li>
        <li><strong>Environmental impact:</strong> Reduction in paper usage</li>
        <li><strong>Integration:</strong> Connection with other business systems</li>
        <li><strong>Standardization:</strong> Consistent format and required fields</li>
        <li><strong>Workflow automation:</strong> Notification of required actions and approvals</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Implementation Considerations</h3>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">Security Considerations</h4>
      <p className="mb-3">
        Essential measures to protect digital documentation:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Access control and user authentication</li>
        <li>Data encryption for sensitive information</li>
        <li>Regular security updates and patches</li>
        <li>Backup procedures and disaster recovery</li>
        <li>Audit trails for all document actions</li>
        <li>Compliance with data protection regulations</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">Change Management</h4>
      <p className="mb-3">
        Approaches for successful transition to digital systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Comprehensive training programs</li>
        <li>Phased implementation approach</li>
        <li>Super-user engagement and support</li>
        <li>Clear communication of benefits</li>
        <li>Involvement of end users in system selection</li>
        <li>Adequate technical support during transition</li>
      </ul>
      
      <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Digital Documentation Case Study</h3>
        <p className="mb-2">
          A manufacturing facility transitioned from paper-based maintenance records to a CMMS with mobile documentation. Key results after one year:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>43% reduction in documentation time for technicians</li>
          <li>92% improvement in documentation accessibility</li>
          <li>68% faster response to critical equipment failures</li>
          <li>21% decrease in maintenance costs through better planning</li>
          <li>35% reduction in equipment downtime</li>
        </ul>
      </div>
    </>
  )
};

// Section 3.2: Documentation Best Practices
export const documentationSection3_2 = {
  title: "Documentation Best Practices",
  content: (
    <>
      <p className="mb-4">
        Effective documentation requires more than just recording information—it demands a systematic approach to ensure records are accurate, complete, consistent, and useful. Following established best practices helps maintenance teams create documentation that truly adds value to operations.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Documentation Quality Principles</h3>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">1. Accuracy</h4>
      <p className="mb-3">
        Ensuring information correctness:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Record exact measurements and readings</li>
        <li>Use proper technical terminology</li>
        <li>Document actual conditions, not assumptions</li>
        <li>Cross-verify critical information</li>
        <li>Include calibration details for test equipment</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">2. Completeness</h4>
      <p className="mb-3">
        Including all necessary information:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Use standardized templates and checklists</li>
        <li>Include all required fields and sections</li>
        <li>Document both positive findings and issues</li>
        <li>Record contextual information (conditions, circumstances)</li>
        <li>Attach supporting materials (photos, diagrams)</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">3. Clarity</h4>
      <p className="mb-3">
        Making documentation understandable:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Write in clear, direct language</li>
        <li>Avoid ambiguous statements</li>
        <li>Define any abbreviations or specialized terms</li>
        <li>Use consistent nomenclature</li>
        <li>Organize information logically</li>
        <li>Include visual aids when beneficial</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">4. Relevance</h4>
      <p className="mb-3">
        Focusing on meaningful information:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Include information that serves a specific purpose</li>
        <li>Prioritize critical data and observations</li>
        <li>Exclude unnecessary details that create noise</li>
        <li>Tailor detail level to the document's purpose</li>
        <li>Consider the needs of different document users</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Practical Documentation Guidelines</h3>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">Standardization</h4>
      <p className="mb-3">
        Approaches to ensure consistency across documentation:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Develop and use standard templates for common document types</li>
        <li>Create a documentation style guide</li>
        <li>Establish consistent naming conventions</li>
        <li>Define standard units of measurement</li>
        <li>Use controlled vocabularies for equipment descriptions</li>
        <li>Implement structured data entry where possible</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">Visual Documentation</h4>
      <p className="mb-3">
        Enhancing documentation with images and diagrams:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Include "before and after" photographs of work performed</li>
        <li>Use thermal imaging to document electrical issues</li>
        <li>Annotate images to highlight specific points of interest</li>
        <li>Include reference points or scale indicators in photos</li>
        <li>Use consistent lighting and angles for comparison photos</li>
        <li>Maintain an organized system for storing and linking images</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">Documentation Review and Verification</h4>
      <p className="mb-3">
        Quality assurance for documentation:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Establish a peer review process for critical documentation</li>
        <li>Include supervisor sign-off for important records</li>
        <li>Conduct periodic documentation audits</li>
        <li>Verify factual accuracy with multiple sources when appropriate</li>
        <li>Check for completeness against templates or checklists</li>
        <li>Review documentation effectiveness regularly and improve as needed</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Example of Clear vs. Unclear Documentation</h3>
      
      <table className="w-full border-collapse mb-6">
        <thead>
          <tr className="bg-[#2a2d24]">
            <th className="border border-[#FFC900]/20 p-2 text-left">Unclear Documentation</th>
            <th className="border border-[#FFC900]/20 p-2 text-left">Clear Documentation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Fixed faulty circuit breaker in panel.</td>
            <td className="border border-[#FFC900]/20 p-2">Replaced tripping 32A MCB (circuit #7) in distribution panel DP-4 with new Square D QO 32A Type C MCB. Serial #SQ45783. Tested operation under 20A load using portable load bank. Confirmed proper operation.</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Cable looks damaged.</td>
            <td className="border border-[#FFC900]/20 p-2">Identified 2.5mm² cable from socket outlet #3 to consumer unit with damaged insulation at 1.2m from consumer unit. Damage extends 15cm with visible conductor exposure. Tagged for replacement.</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Motor seems to be running hot.</td>
            <td className="border border-[#FFC900]/20 p-2">Measured motor bearing temperature at 76°C using calibrated infrared thermometer (#IR-224, cal. date 04/03/2025). Normal operating temperature per manufacturer specifications is 35-65°C. Thermal image attached. Recommended detailed inspection and lubrication.</td>
          </tr>
        </tbody>
      </table>
      
      <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Documentation Rule of Thumb</h3>
        <p>
          The true test of good documentation is whether someone unfamiliar with the situation could understand what was done, why it was done, and what the outcomes were. Always document with future readers in mind, including those who may need to reference your records months or years later.
        </p>
      </div>
    </>
  )
};

// Section 3.3: Using Documentation for Improvement
export const documentationSection3_3 = {
  title: "Using Documentation for Improvement",
  content: (
    <>
      <p className="mb-4">
        Well-maintained maintenance documentation is not just a record of past activities—it's a valuable resource that can drive continuous improvement in maintenance practices, equipment reliability, and operational efficiency.
      </p>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Data Analysis for Maintenance Improvement</h3>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">1. Failure Pattern Analysis</h4>
      <p className="mb-3">
        Examining documentation to identify recurring issues:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Tracking failure frequencies and types</li>
        <li>Identifying equipment with higher-than-expected failure rates</li>
        <li>Spotting common failure modes across similar equipment</li>
        <li>Correlating failures with environmental or operational factors</li>
        <li>Recognizing cascade failures where one issue triggers others</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">2. Maintenance Effectiveness Evaluation</h4>
      <p className="mb-3">
        Using documentation to assess maintenance program performance:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Comparing equipment reliability before and after maintenance</li>
        <li>Evaluating the effectiveness of preventive maintenance intervals</li>
        <li>Assessing whether maintenance procedures address root causes</li>
        <li>Determining if maintenance tasks are targeting the right issues</li>
        <li>Identifying maintenance activities that might be unnecessary</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">3. Life Cycle Cost Analysis</h4>
      <p className="mb-3">
        Using maintenance records to evaluate equipment economics:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Tracking total maintenance costs per asset</li>
        <li>Identifying when replacement is more economical than continued repair</li>
        <li>Comparing maintenance costs across different brands or models</li>
        <li>Evaluating warranty claim history and vendor performance</li>
        <li>Supporting capital expenditure justifications with maintenance data</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Implementing Documentation-Based Improvements</h3>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">Reliability-Centered Maintenance (RCM)</h4>
      <p className="mb-3">
        Using documentation to develop targeted maintenance strategies:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Identifying critical equipment based on failure consequences</li>
        <li>Determining appropriate maintenance types for different failure modes</li>
        <li>Optimizing maintenance intervals based on documented failure patterns</li>
        <li>Developing condition-monitoring protocols for early failure detection</li>
        <li>Creating equipment-specific maintenance procedures</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">Predictive Maintenance Program Development</h4>
      <p className="mb-3">
        Using historical data to predict and prevent failures:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Establishing baselines for normal equipment operation</li>
        <li>Identifying early warning indicators of potential failures</li>
        <li>Determining optimal monitoring frequency and parameters</li>
        <li>Creating alert thresholds based on historical failure data</li>
        <li>Developing predictive algorithms using maintenance history</li>
      </ul>
      
      <h4 className="text-lg font-medium text-[#FFC900]/90 mt-4 mb-2">Training and Knowledge Development</h4>
      <p className="mb-3">
        Using documentation to enhance maintenance capabilities:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Creating case studies from significant or unusual failures</li>
        <li>Developing troubleshooting guides based on historical issues</li>
        <li>Identifying knowledge gaps based on recurring problems</li>
        <li>Building equipment-specific training materials</li>
        <li>Creating a knowledge base of solutions for common problems</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Key Performance Indicators (KPIs)</h3>
      <p className="mb-3">
        Metrics that can be tracked using maintenance documentation:
      </p>
      
      <table className="w-full border-collapse mb-6">
        <thead>
          <tr className="bg-[#2a2d24]">
            <th className="border border-[#FFC900]/20 p-2 text-left">KPI</th>
            <th className="border border-[#FFC900]/20 p-2 text-left">Description</th>
            <th className="border border-[#FFC900]/20 p-2 text-left">Documentation Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Mean Time Between Failures (MTBF)</td>
            <td className="border border-[#FFC900]/20 p-2">Average time between equipment failures</td>
            <td className="border border-[#FFC900]/20 p-2">Failure reports, maintenance logs</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Mean Time To Repair (MTTR)</td>
            <td className="border border-[#FFC900]/20 p-2">Average time to restore equipment after failure</td>
            <td className="border border-[#FFC900]/20 p-2">Work orders, repair documentation</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Overall Equipment Effectiveness (OEE)</td>
            <td className="border border-[#FFC900]/20 p-2">Measure of equipment productivity</td>
            <td className="border border-[#FFC900]/20 p-2">Downtime records, production logs</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Planned vs. Unplanned Maintenance Ratio</td>
            <td className="border border-[#FFC900]/20 p-2">Balance between preventive and reactive work</td>
            <td className="border border-[#FFC900]/20 p-2">Maintenance logs, work orders</td>
          </tr>
          <tr>
            <td className="border border-[#FFC900]/20 p-2">Maintenance Cost per Unit</td>
            <td className="border border-[#FFC900]/20 p-2">Maintenance expenses relative to production</td>
            <td className="border border-[#FFC900]/20 p-2">Maintenance logs, cost records</td>
          </tr>
        </tbody>
      </table>
      
      <h3 className="text-xl font-semibold text-[#FFC900] mt-6 mb-3">Continuous Improvement Process</h3>
      
      <ol className="list-decimal pl-6 space-y-2 mb-4">
        <li><strong>Collect and organize documentation</strong> - Ensure systematic recording of all maintenance activities</li>
        <li><strong>Analyze patterns and trends</strong> - Review documentation to identify recurring issues and opportunities</li>
        <li><strong>Develop improvement strategies</strong> - Create specific plans to address identified issues</li>
        <li><strong>Implement changes</strong> - Modify procedures, schedules, or equipment based on analysis</li>
        <li><strong>Document the changes</strong> - Record modifications to procedures and their rationale</li>
        <li><strong>Monitor results</strong> - Track outcomes of implemented changes</li>
        <li><strong>Review and refine</strong> - Continue the cycle with ongoing analysis</li>
      </ol>
      
      <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Case Study: Documentation-Driven Improvement</h3>
        <p className="mb-2">
          A hospital facilities team implemented systematic documentation analysis for their electrical maintenance program. After reviewing three years of maintenance records:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>They identified that 35% of emergency generator failures were related to battery issues</li>
          <li>Documentation showed these typically occurred after periods of high humidity</li>
          <li>They installed environmental monitoring in generator rooms</li>
          <li>Implemented condition-based battery inspections triggered by humidity thresholds</li>
          <li>Result: Generator reliability increased from 96% to 99.8% over 18 months</li>
        </ul>
      </div>
    </>
  )
};

// Quiz questions for documentation
export const documentationQuestions = [
  {
    question: "What is a primary purpose of maintenance documentation in terms of safety?",
    options: [
      "To increase equipment performance",
      "To provide a record of safety measures implemented during maintenance",
      "To reduce maintenance costs",
      "To satisfy customer requirements"
    ],
    correctAnswer: "To provide a record of safety measures implemented during maintenance",
    explanation: "Maintenance documentation creates a record of safety measures that were implemented during maintenance activities, ensuring proper procedures were followed and safety was maintained throughout the work."
  },
  {
    question: "Under the Electricity at Work Regulations 1989, which of the following documentation is required?",
    options: [
      "Employee vacation records",
      "Marketing materials",
      "Records of inspection and testing of electrical systems",
      "Customer satisfaction surveys"
    ],
    correctAnswer: "Records of inspection and testing of electrical systems",
    explanation: "The Electricity at Work Regulations 1989 specifically require documentation of inspection and testing of electrical systems to ensure compliance with electrical safety standards."
  },
  {
    question: "What is Mean Time Between Failures (MTBF) used to measure?",
    options: [
      "The average time it takes to repair equipment",
      "The average time between equipment failures",
      "The maximum operating temperature of equipment",
      "The minimum maintenance interval required"
    ],
    correctAnswer: "The average time between equipment failures",
    explanation: "Mean Time Between Failures (MTBF) measures the average time between equipment failures and is a key reliability metric that can be calculated using maintenance documentation."
  },
  {
    question: "Which of these is a best practice for visual documentation in maintenance records?",
    options: [
      "Always use black and white photos to save storage space",
      "Include 'before and after' photographs of work performed",
      "Limit photos to one per maintenance report",
      "Avoid annotating images as it makes them unclear"
    ],
    correctAnswer: "Include 'before and after' photographs of work performed",
    explanation: "Including 'before and after' photographs provides clear visual evidence of the maintenance work performed and the improvements made, which is especially valuable for future reference."
  },
  {
    question: "What classification code in an Electrical Installation Condition Report (EICR) indicates 'Danger Present'?",
    options: [
      "C1",
      "C2",
      "C3",
      "FI"
    ],
    correctAnswer: "C1",
    explanation: "In an Electrical Installation Condition Report, code C1 indicates 'Danger Present' which requires immediate action as there is risk of injury."
  },
  {
    question: "Which document management system is specifically designed to integrate with work orders and preventive maintenance scheduling?",
    options: [
      "Word processors",
      "Email systems",
      "Computerized Maintenance Management Systems (CMMS)",
      "Social media platforms"
    ],
    correctAnswer: "Computerized Maintenance Management Systems (CMMS)",
    explanation: "CMMS solutions are specifically designed for maintenance operations and integrate document management with work orders, preventive maintenance scheduling, and other maintenance functions."
  },
  {
    question: "What is a key benefit of digital documentation compared to paper-based systems?",
    options: [
      "No need for backup systems",
      "Lower initial implementation costs",
      "Enhanced searchability of records",
      "No training required for users"
    ],
    correctAnswer: "Enhanced searchability of records",
    explanation: "Digital documentation systems provide powerful search capabilities that allow quick location of specific information, which is particularly valuable in maintenance where historical records may need to be accessed quickly."
  },
  {
    question: "When analyzing maintenance documentation for improvement, what does 'failure pattern analysis' help identify?",
    options: [
      "Employee performance issues",
      "Marketing trends",
      "Recurring equipment issues and common failure modes",
      "Budget allocation needs"
    ],
    correctAnswer: "Recurring equipment issues and common failure modes",
    explanation: "Failure pattern analysis involves examining maintenance documentation to identify recurring issues, equipment with higher failure rates, and common failure modes across similar equipment."
  },
  {
    question: "What is the minimum retention period typically recommended for electrical installation certificates?",
    options: [
      "1 year",
      "3 years",
      "5 years",
      "Life of installation"
    ],
    correctAnswer: "Life of installation",
    explanation: "Electrical Installation Certificates should be retained for the life of the installation since they provide essential safety and compliance information that remains relevant as long as the installation exists."
  },
  {
    question: "Which approach uses maintenance documentation to identify critical equipment based on failure consequences and determine appropriate maintenance types?",
    options: [
      "Just-in-time inventory",
      "Reliability-Centered Maintenance (RCM)",
      "Total Quality Management",
      "Six Sigma"
    ],
    correctAnswer: "Reliability-Centered Maintenance (RCM)",
    explanation: "Reliability-Centered Maintenance (RCM) is an approach that uses documentation to develop targeted maintenance strategies based on identifying critical equipment and determining appropriate maintenance types for different failure modes."
  }
];
