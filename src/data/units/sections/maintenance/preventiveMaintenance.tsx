
import React from 'react';

// Define the types for section data
interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
  questions?: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

// Section 1.1
const section1_1: SectionData = {
  title: "Key Components of Preventive Maintenance",
  description: "Understanding the fundamental components of an effective maintenance program",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Key Components of Preventive Maintenance</h3>
      
      <p className="mb-4">
        Preventive maintenance consists of several key components that work together to create a comprehensive
        maintenance program. Understanding these components is essential for implementing effective maintenance 
        strategies in electrical installations.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Essential Components</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Regular Inspections and Testing</strong>
            <p className="text-sm">Systematic examination of equipment to identify signs of wear, damage, or potential failure.</p>
          </li>
          <li>
            <strong>Scheduled Cleaning and Recalibration</strong>
            <p className="text-sm">Regular cleaning of components and recalibration of instruments to maintain optimal performance.</p>
          </li>
          <li>
            <strong>Performance Testing</strong>
            <p className="text-sm">Testing equipment under controlled conditions to verify proper operation.</p>
          </li>
          <li>
            <strong>Scheduled Part Replacement</strong>
            <p className="text-sm">Replacing components before they fail based on manufacturer recommendations or usage metrics.</p>
          </li>
          <li>
            <strong>Documentation</strong>
            <p className="text-sm">Comprehensive record-keeping of all maintenance activities, findings, and actions taken.</p>
          </li>
          <li>
            <strong>Training</strong>
            <p className="text-sm">Ensuring maintenance personnel are properly trained on equipment and procedures.</p>
          </li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Implementing These Components</h4>
      <p className="mb-4">
        For electrical equipment, these components should be implemented with particular attention to:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Safety procedures and lockout/tagout protocols</li>
        <li>Manufacturer specifications and recommendations</li>
        <li>Regulatory requirements (e.g., Electricity at Work Regulations)</li>
        <li>Equipment criticality and risk assessment</li>
        <li>Resource allocation and scheduling</li>
      </ul>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-4">
        <p className="font-medium">
          Note: An effective preventive maintenance program doesn't just include these components—it integrates them
          into a cohesive system that aligns with organizational goals, safety requirements, and operational needs.
        </p>
      </div>
    </div>
  )
};

// Section 1.2
const section1_2: SectionData = {
  title: "Benefits of Preventive Maintenance",
  description: "How preventive maintenance improves reliability, safety and reduces costs",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Benefits of Preventive Maintenance</h3>
      
      <p className="mb-4">
        Implementing a robust preventive maintenance program offers numerous advantages for electrical systems
        and equipment. These benefits extend beyond just equipment longevity to impact safety, efficiency, 
        and overall business operations.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Key Benefits</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Extended Equipment Life</strong>
            <p className="text-sm">Regular maintenance prevents premature wear and extends the useful life of electrical equipment.</p>
          </li>
          <li>
            <strong>Improved Reliability</strong>
            <p className="text-sm">Reduces unexpected failures and downtime through early identification of potential issues.</p>
          </li>
          <li>
            <strong>Enhanced Safety</strong>
            <p className="text-sm">Helps prevent electrical hazards such as fires, shocks, and arc flashes by maintaining proper equipment condition.</p>
          </li>
          <li>
            <strong>Reduced Emergency Repairs</strong>
            <p className="text-sm">Minimizes costly emergency maintenance by addressing issues before they become critical failures.</p>
          </li>
          <li>
            <strong>Lower Overall Maintenance Costs</strong>
            <p className="text-sm">While preventive maintenance requires regular investment, it typically costs less than reactive maintenance in the long run.</p>
          </li>
          <li>
            <strong>Energy Efficiency</strong>
            <p className="text-sm">Well-maintained electrical equipment operates more efficiently, reducing energy consumption and costs.</p>
          </li>
          <li>
            <strong>Regulatory Compliance</strong>
            <p className="text-sm">Helps meet safety regulations and insurance requirements through documented maintenance programs.</p>
          </li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-6">Economic Impact</h4>
      <div className="bg-[#22251e] p-4 rounded-lg mt-2">
        <p className="mb-3">Research indicates that every £1 invested in preventive maintenance can save £3-5 in reactive maintenance costs. Additionally, it provides these financial benefits:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Reduced production/operation losses from downtime</li>
          <li>Lower overtime costs for emergency repairs</li>
          <li>Decreased inventory requirements for emergency spare parts</li>
          <li>Improved budgeting through predictable maintenance costs</li>
          <li>Extended equipment replacement cycles</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-4">
        <p className="font-medium">
          While the benefits of preventive maintenance are substantial, it's important to optimize the balance between 
          maintenance costs and risk. Not all equipment requires the same level of preventive care—maintenance 
          strategies should be tailored based on equipment criticality, failure consequences, and resource constraints.
        </p>
      </div>
    </div>
  )
};

// Section 2.1
const section2_1: SectionData = {
  title: "Steps to Create a Maintenance Schedule",
  description: "Methodical approach to planning maintenance activities",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Steps to Create a Maintenance Schedule</h3>
      
      <p className="mb-4">
        Developing an effective maintenance schedule is a systematic process that ensures all equipment
        receives appropriate attention at optimal intervals. A well-designed schedule balances maintenance 
        needs with operational requirements and resource constraints.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Step-by-Step Process</h4>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Inventory Equipment</strong>
            <p className="text-sm">Create a comprehensive list of all electrical equipment requiring maintenance. Include key information such as equipment ID, location, manufacturer, model, and installation date.</p>
          </li>
          <li>
            <strong>Gather Manufacturer Recommendations</strong>
            <p className="text-sm">Review equipment manuals and manufacturer guidelines for recommended maintenance tasks and frequencies.</p>
          </li>
          <li>
            <strong>Assess Equipment Criticality</strong>
            <p className="text-sm">Evaluate the importance of each piece of equipment based on factors such as:
              <ul className="list-disc pl-6 mt-1">
                <li>Impact of failure on operations</li>
                <li>Safety implications</li>
                <li>Environmental concerns</li>
                <li>Replacement cost and lead time</li>
              </ul>
            </p>
          </li>
          <li>
            <strong>Define Maintenance Tasks</strong>
            <p className="text-sm">For each equipment type, create detailed task lists specifying:
              <ul className="list-disc pl-6 mt-1">
                <li>Specific actions to perform</li>
                <li>Tools and materials required</li>
                <li>Safety procedures to follow</li>
                <li>Estimated time for completion</li>
                <li>Required skill level</li>
              </ul>
            </p>
          </li>
          <li>
            <strong>Determine Appropriate Frequencies</strong>
            <p className="text-sm">Based on manufacturer recommendations, industry standards, equipment criticality, and operating conditions, establish how often each task should be performed.</p>
          </li>
          <li>
            <strong>Assign Responsibilities</strong>
            <p className="text-sm">Determine who will perform each task based on required skills, certifications, and workload.</p>
          </li>
          <li>
            <strong>Create the Calendar</strong>
            <p className="text-sm">Distribute tasks across the maintenance calendar, considering factors such as:
              <ul className="list-disc pl-6 mt-1">
                <li>Production/operation schedules</li>
                <li>Equipment downtime requirements</li>
                <li>Staff availability</li>
                <li>Seasonal considerations</li>
              </ul>
            </p>
          </li>
          <li>
            <strong>Develop Documentation</strong>
            <p className="text-sm">Create standardized forms, checklists, and procedures for technicians to follow and document their work.</p>
          </li>
        </ol>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-4">Review and Optimize</h4>
      <p className="mb-3">
        After implementing your maintenance schedule, it's critical to:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Track compliance with the schedule</li>
        <li>Record findings and actions from each maintenance activity</li>
        <li>Analyze patterns in equipment failures or issues</li>
        <li>Adjust frequencies and tasks based on actual experience</li>
        <li>Update the schedule as equipment is added, modified, or removed</li>
      </ul>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-4">
        <p className="font-medium">
          Remember: A maintenance schedule is a living document that should evolve based on equipment performance, 
          operational changes, and new maintenance techniques or technologies. Regular review and optimization 
          are essential for maximum effectiveness.
        </p>
      </div>
    </div>
  )
};

// Section 2.2
const section2_2: SectionData = {
  title: "Common Maintenance Frequencies",
  description: "Understanding daily, weekly, monthly and annual maintenance tasks",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Common Maintenance Frequencies</h3>
      
      <p className="mb-4">
        Maintenance tasks for electrical equipment are typically organized by frequency. The appropriate 
        interval depends on equipment type, usage patterns, operating environment, and criticality. Understanding 
        typical frequency categories helps in developing comprehensive maintenance programs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20">
          <h4 className="font-medium text-lg text-[#FFC900] mb-2">Daily Checks</h4>
          <p className="text-sm mb-2">Quick visual inspections and basic monitoring that can be performed without equipment shutdown.</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Visual inspection for obvious damage or abnormalities</li>
            <li>Checking indicator lights and display readings</li>
            <li>Monitoring temperature and unusual sounds</li>
            <li>Recording meter readings and operating parameters</li>
            <li>Verifying cooling systems operation</li>
            <li>Checking for unusual odors or signs of overheating</li>
          </ul>
        </div>
        
        <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20">
          <h4 className="font-medium text-lg text-[#FFC900] mb-2">Weekly Maintenance</h4>
          <p className="text-sm mb-2">More thorough inspections and minor preventive tasks.</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>More detailed visual inspections</li>
            <li>Checking connection tightness</li>
            <li>Basic cleaning of accessible components</li>
            <li>Verifying operation of backup systems</li>
            <li>Checking fluid levels (if applicable)</li>
            <li>Testing alarm systems</li>
            <li>Inspecting for signs of corrosion or moisture</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20">
          <h4 className="font-medium text-lg text-[#FFC900] mb-2">Monthly Maintenance</h4>
          <p className="text-sm mb-2">More comprehensive checks often requiring brief equipment shutdown.</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Thermal imaging of connections and components</li>
            <li>More thorough cleaning of equipment</li>
            <li>Testing protective devices</li>
            <li>Checking and recording insulation resistance</li>
            <li>Lubricating moving parts</li>
            <li>Verifying battery backup systems</li>
            <li>Inspecting and cleaning ventilation systems</li>
          </ul>
        </div>
        
        <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20">
          <h4 className="font-medium text-lg text-[#FFC900] mb-2">Quarterly Maintenance</h4>
          <p className="text-sm mb-2">More in-depth services requiring partial system shutdown.</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Detailed inspection of all major components</li>
            <li>Testing and calibration of protective relays</li>
            <li>Verification of control circuit operation</li>
            <li>Oil sampling and analysis (where applicable)</li>
            <li>Checking of power quality parameters</li>
            <li>Detailed infrared scanning</li>
            <li>Verification of grounding system integrity</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20">
          <h4 className="font-medium text-lg text-[#FFC900] mb-2">Annual Maintenance</h4>
          <p className="text-sm mb-2">Major service typically requiring complete equipment shutdown.</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Complete system inspection and testing</li>
            <li>Major component replacement based on service life</li>
            <li>Comprehensive insulation resistance testing</li>
            <li>Oil changes or filtration</li>
            <li>Full calibration of all instruments</li>
            <li>Verification of all protection systems</li>
            <li>Major cleaning including internal components</li>
            <li>Testing under load conditions where possible</li>
          </ul>
        </div>
        
        <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20">
          <h4 className="font-medium text-lg text-[#FFC900] mb-2">Usage-Based Maintenance</h4>
          <p className="text-sm mb-2">Maintenance based on operating hours or cycles rather than calendar time.</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Motor bearing replacement after specified run hours</li>
            <li>Circuit breaker servicing after specific number of operations</li>
            <li>Generator maintenance based on run time</li>
            <li>UPS battery replacement based on charge cycles</li>
            <li>Equipment rebuilding after specified operating hours</li>
            <li>Filter replacement based on pressure differential</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-4">
        <h4 className="font-medium text-[#FFC900] mb-1">Important Considerations:</h4>
        <ul className="list-disc pl-6">
          <li>Always follow manufacturer recommendations for maintenance frequencies</li>
          <li>Adjust frequencies based on environmental conditions (e.g., increase in harsh environments)</li>
          <li>Consider equipment criticality when setting maintenance intervals</li>
          <li>Document any deviations from standard frequencies and the rationale behind them</li>
          <li>Use condition monitoring to optimize frequencies rather than relying solely on fixed schedules</li>
        </ul>
      </div>
    </div>
  )
};

// Section 3.1
const section3_1: SectionData = {
  title: "Essential Documentation Elements",
  description: "Key components of maintenance records and their importance",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Essential Documentation Elements</h3>
      
      <p className="mb-4">
        Thorough documentation is a cornerstone of an effective preventive maintenance program. 
        Well-maintained records provide historical data, ensure compliance, and support decision-making 
        for future maintenance activities.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Equipment Records</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Equipment identification and location</li>
          <li>Manufacturer, model, and serial numbers</li>
          <li>Installation date and commissioning data</li>
          <li>Technical specifications and rated parameters</li>
          <li>Design documents and original test results</li>
          <li>Warranty information and expiration dates</li>
          <li>Vendor and supplier contact information</li>
          <li>Parts list and recommended spares</li>
          <li>Operating and maintenance manuals</li>
        </ul>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Maintenance History</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Dates of all maintenance activities</li>
          <li>Type of maintenance performed (preventive, corrective, etc.)</li>
          <li>Specific tasks completed during each maintenance visit</li>
          <li>Technician names and qualifications</li>
          <li>Time spent on maintenance activities</li>
          <li>Parts replaced and associated costs</li>
          <li>Test results and measurements</li>
          <li>Abnormalities found and actions taken</li>
          <li>Follow-up actions required</li>
        </ul>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Maintenance Procedures</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Step-by-step maintenance instructions</li>
          <li>Safety procedures and precautions</li>
          <li>Required tools and test equipment</li>
          <li>Lockout/tagout procedures</li>
          <li>Reference values and tolerances for measurements</li>
          <li>Troubleshooting guides</li>
          <li>Diagrams and schematics</li>
          <li>Component location information</li>
          <li>Specialized knowledge or techniques required</li>
        </ul>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Regulatory Documentation</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Inspection certificates and compliance records</li>
          <li>Test results for equipment requiring periodic certification</li>
          <li>Risk assessments and method statements</li>
          <li>Permits and authorizations</li>
          <li>Records of regulatory inspections</li>
          <li>Compliance with standards and regulations</li>
          <li>Health and safety documentation</li>
          <li>Environmental compliance records</li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-4">Documentation Best Practices</h4>
      <div className="bg-[#22251e] p-4 rounded-lg mt-2">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Standardization</strong>
            <p className="text-sm">Use standardized forms and templates to ensure consistency across all maintenance records.</p>
          </li>
          <li>
            <strong>Accessibility</strong>
            <p className="text-sm">Ensure records are easily accessible to authorized personnel when needed.</p>
          </li>
          <li>
            <strong>Regular Updates</strong>
            <p className="text-sm">Keep documentation current by updating records immediately after maintenance activities.</p>
          </li>
          <li>
            <strong>Detail and Accuracy</strong>
            <p className="text-sm">Record specific readings and observations, not just checkmarks or pass/fail indications.</p>
          </li>
          <li>
            <strong>Digital Backup</strong>
            <p className="text-sm">Maintain digital copies of all critical documentation with appropriate backup procedures.</p>
          </li>
        </ol>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-4">
        <p className="font-medium">
          Remember: Thorough documentation not only satisfies regulatory requirements but also provides valuable data for 
          analyzing equipment performance, optimizing maintenance intervals, and making informed decisions about 
          repair vs. replacement. It also ensures knowledge transfer when personnel changes occur.
        </p>
      </div>
    </div>
  )
};

// Section 3.2
const section3_2: SectionData = {
  title: "Computerized Maintenance Management Systems",
  description: "Using CMMS software to manage maintenance activities",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Computerized Maintenance Management Systems (CMMS)</h3>
      
      <p className="mb-4">
        Computerized Maintenance Management Systems (CMMS) are software tools designed to streamline and 
        optimize maintenance operations. These systems centralize information and automate many aspects 
        of maintenance management, significantly improving efficiency and effectiveness.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Core Functions of CMMS</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Equipment Database Management</strong>
            <p className="text-sm">Maintains comprehensive information about all equipment assets, including specifications, location, warranty information, and maintenance history.</p>
          </li>
          <li>
            <strong>Work Order Management</strong>
            <p className="text-sm">Creates, assigns, tracks, and closes maintenance tasks, ensuring nothing is overlooked and providing visibility into work status.</p>
          </li>
          <li>
            <strong>Preventive Maintenance Scheduling</strong>
            <p className="text-sm">Automatically generates maintenance tasks based on predefined schedules or usage metrics, sending notifications when maintenance is due.</p>
          </li>
          <li>
            <strong>Inventory Management</strong>
            <p className="text-sm">Tracks spare parts and materials, managing stock levels, reorder points, and usage patterns to ensure parts availability when needed.</p>
          </li>
          <li>
            <strong>Resource Planning</strong>
            <p className="text-sm">Helps allocate maintenance personnel efficiently based on skills, workload, and task priority.</p>
          </li>
          <li>
            <strong>Reporting and Analysis</strong>
            <p className="text-sm">Generates reports on key performance indicators, maintenance costs, equipment reliability, and other metrics to support decision-making.</p>
          </li>
        </ul>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Benefits of CMMS for Electrical Maintenance</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-[#FFC900]">Operational Benefits</h5>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Reduced equipment downtime</li>
              <li>Improved maintenance planning and scheduling</li>
              <li>Better resource utilization</li>
              <li>Decreased emergency repairs</li>
              <li>Extended equipment lifespan</li>
              <li>Streamlined regulatory compliance</li>
              <li>Enhanced safety management</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Economic Benefits</h5>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Lower maintenance costs</li>
              <li>Reduced inventory carrying costs</li>
              <li>Less overtime for emergency work</li>
              <li>Decreased production losses</li>
              <li>Better capital expenditure planning</li>
              <li>Improved warranty recovery</li>
              <li>Data-driven budget allocation</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-4">Modern CMMS Capabilities</h4>
      <div className="bg-[#22251e] p-4 rounded-lg mt-2">
        <p className="mb-3">Contemporary CMMS solutions offer advanced features that further enhance maintenance operations:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Mobile access for technicians in the field</li>
          <li>Integration with IoT sensors for real-time equipment monitoring</li>
          <li>Predictive maintenance capabilities using data analysis</li>
          <li>Barcode/QR code scanning for rapid equipment identification</li>
          <li>Integration with building management systems</li>
          <li>Digital documentation including photos, videos, and voice notes</li>
          <li>Cloud-based platforms for access from anywhere</li>
          <li>AI-powered recommendations for maintenance optimization</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-4">
        <h4 className="font-medium text-[#FFC900] mb-1">Implementation Considerations:</h4>
        <ul className="list-disc pl-6">
          <li>Select a CMMS that matches your organization's size and complexity</li>
          <li>Ensure proper data migration from existing systems</li>
          <li>Provide adequate training for all users</li>
          <li>Start with core functionality and expand gradually</li>
          <li>Establish clear processes for data entry and system usage</li>
          <li>Regularly review and optimize system configuration</li>
          <li>Consider integration needs with other business systems</li>
        </ul>
      </div>
    </div>
  )
};

// Section 4.1
const section4_1: SectionData = {
  title: "Predictive Maintenance",
  description: "Using condition monitoring to optimize maintenance timing",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Predictive Maintenance</h3>
      
      <p className="mb-4">
        Predictive maintenance takes preventive maintenance to the next level by using condition monitoring 
        technologies and data analysis to predict when equipment failure might occur. This approach allows 
        maintenance to be performed just before failure, maximizing equipment uptime while minimizing 
        unnecessary maintenance.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Key Condition Monitoring Techniques for Electrical Systems</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Infrared Thermography</strong>
            <p className="text-sm">Uses thermal imaging cameras to detect temperature variations that may indicate loose connections, overloaded components, or imminent failures. Particularly effective for identifying hotspots in electrical panels, transformers, and motor control centers.</p>
          </li>
          <li>
            <strong>Ultrasonic Testing</strong>
            <p className="text-sm">Detects high-frequency sounds produced by electrical arcing, corona discharge, or partial discharge in insulation systems. These sounds occur before equipment damage is visible and often before infrared detection is possible.</p>
          </li>
          <li>
            <strong>Vibration Analysis</strong>
            <p className="text-sm">Monitors vibration patterns in motors, generators, and other rotating equipment to detect misalignment, imbalance, bearing wear, or mechanical looseness before failure occurs.</p>
          </li>
          <li>
            <strong>Oil Analysis</strong>
            <p className="text-sm">Examines insulating oils in transformers and circuit breakers to detect dissolved gases, moisture content, acidity, and particle contamination that can indicate deterioration or potential failure.</p>
          </li>
          <li>
            <strong>Partial Discharge Testing</strong>
            <p className="text-sm">Detects and measures small electrical discharges within insulation that don't completely bridge the gap between conductors but indicate insulation deterioration.</p>
          </li>
          <li>
            <strong>Motor Current Signature Analysis (MCSA)</strong>
            <p className="text-sm">Analyzes current waveforms to detect electrical and mechanical issues in motors, including broken rotor bars, bearing problems, and eccentricity.</p>
          </li>
        </ul>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Data Analysis in Predictive Maintenance</h4>
        <p className="mb-3">Modern predictive maintenance relies heavily on data analysis to transform raw condition monitoring data into actionable insights:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Trend analysis to identify deteriorating conditions over time</li>
          <li>Statistical models to determine normal operating parameters</li>
          <li>Anomaly detection to identify deviations from normal patterns</li>
          <li>Machine learning algorithms to recognize failure patterns</li>
          <li>Remaining useful life predictions based on condition data</li>
          <li>Integration of multiple data sources for comprehensive analysis</li>
          <li>Automated alerts when parameters exceed predefined thresholds</li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-4">Implementation Approach</h4>
      <p className="mb-2">
        Implementing predictive maintenance requires a structured approach:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong>Criticality Assessment</strong>
          <p className="text-sm">Begin with critical equipment where failures would have the highest impact.</p>
        </li>
        <li>
          <strong>Select Appropriate Technologies</strong>
          <p className="text-sm">Choose monitoring techniques based on equipment type, failure modes, and cost-benefit analysis.</p>
        </li>
        <li>
          <strong>Establish Baselines</strong>
          <p className="text-sm">Determine normal operating parameters for equipment under various conditions.</p>
        </li>
        <li>
          <strong>Define Alert Thresholds</strong>
          <p className="text-sm">Set parameters that trigger maintenance actions based on condition severity.</p>
        </li>
        <li>
          <strong>Develop Response Procedures</strong>
          <p className="text-sm">Create clear workflows for addressing different types of alerts.</p>
        </li>
        <li>
          <strong>Continuous Improvement</strong>
          <p className="text-sm">Regularly review and refine the program based on actual results and new technologies.</p>
        </li>
      </ol>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-4">
        <h4 className="font-medium text-[#FFC900] mb-1">Key Considerations:</h4>
        <ul className="list-disc pl-6">
          <li>Predictive maintenance doesn't replace all preventive maintenance—it complements it</li>
          <li>Initial investment in sensors, software, and training can be substantial</li>
          <li>Staff require specialized skills in both data analysis and electrical systems</li>
          <li>Success depends on consistent data collection and quality</li>
          <li>The program should evolve as equipment ages and technologies improve</li>
        </ul>
      </div>
    </div>
  )
};

// Section 4.2
const section4_2: SectionData = {
  title: "Reliability-Centered Maintenance",
  description: "Structured approach to maintenance based on failure modes",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Reliability-Centered Maintenance (RCM)</h3>
      
      <p className="mb-4">
        Reliability-Centered Maintenance (RCM) is a systematic approach to developing an optimal maintenance 
        program based on the reliability characteristics of equipment. Rather than applying a one-size-fits-all 
        maintenance strategy, RCM tailors maintenance tasks to specific failure modes and their consequences.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Core Principles of RCM</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Function-oriented</strong>
            <p className="text-sm">Focuses on preserving system functions rather than just preserving equipment.</p>
          </li>
          <li>
            <strong>System-focused</strong>
            <p className="text-sm">Considers the impact of each component on the overall system performance.</p>
          </li>
          <li>
            <strong>Reliability-centered</strong>
            <p className="text-sm">Recognizes the relationship between equipment age and failure probability varies by component type.</p>
          </li>
          <li>
            <strong>Acknowledges design limitations</strong>
            <p className="text-sm">Recognizes that maintenance can only achieve the reliability inherent in the system design.</p>
          </li>
          <li>
            <strong>Driven by safety and economics</strong>
            <p className="text-sm">Prioritizes safety while balancing costs and benefits of maintenance activities.</p>
          </li>
          <li>
            <strong>Dynamic</strong>
            <p className="text-sm">Responds to changing conditions and new information about equipment performance.</p>
          </li>
        </ul>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">The RCM Process</h4>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Functions and Performance Standards</strong>
            <p className="text-sm">Define what the system and its equipment are supposed to do and at what level of performance.</p>
          </li>
          <li>
            <strong>Functional Failures</strong>
            <p className="text-sm">Identify ways in which the system can fail to meet its functions and performance standards.</p>
          </li>
          <li>
            <strong>Failure Modes</strong>
            <p className="text-sm">Analyze the specific events or conditions that cause each functional failure.</p>
          </li>
          <li>
            <strong>Failure Effects</strong>
            <p className="text-sm">Describe what happens when each failure mode occurs, including the evidence that the failure has occurred.</p>
          </li>
          <li>
            <strong>Failure Consequences</strong>
            <p className="text-sm">Classify the impact of each failure in terms of safety, environmental, operational, and economic consequences.</p>
          </li>
          <li>
            <strong>Maintenance Task Selection</strong>
            <p className="text-sm">Choose appropriate maintenance strategies based on failure characteristics and consequences:
              <ul className="list-disc pl-6 mt-1">
                <li>Condition-based maintenance for failures with detectable deterioration</li>
                <li>Time-based replacement for components with predictable wear-out patterns</li>
                <li>Failure-finding tasks for hidden failures (especially in protective devices)</li>
                <li>Design changes when no effective maintenance task can be identified</li>
                <li>"Run to failure" for non-critical items where preventive maintenance isn't cost-effective</li>
              </ul>
            </p>
          </li>
          <li>
            <strong>Implementation and Continuous Improvement</strong>
            <p className="text-sm">Execute the selected maintenance strategies and refine based on results and new information.</p>
          </li>
        </ol>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-4">Application to Electrical Systems</h4>
      <div className="bg-[#22251e] p-4 rounded-lg mt-2">
        <p className="mb-3">RCM is particularly valuable for electrical systems because:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Electrical components have diverse failure patterns (some wear-based, others random)</li>
          <li>Many electrical failures have serious consequences (safety, outages, equipment damage)</li>
          <li>Different components within the same system often require different maintenance approaches</li>
          <li>Many protective devices have hidden failure modes that require specific testing strategies</li>
          <li>Condition monitoring technologies are particularly well-suited to many electrical components</li>
        </ul>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">RCM Example: Medium Voltage Circuit Breaker</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#2a2d24]">
                <th className="border border-[#FFC900]/20 px-4 py-2">Failure Mode</th>
                <th className="border border-[#FFC900]/20 px-4 py-2">Consequence</th>
                <th className="border border-[#FFC900]/20 px-4 py-2">Selected Maintenance Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#FFC900]/20 px-4 py-2">Mechanism fails to operate</td>
                <td className="border border-[#FFC900]/20 px-4 py-2">Safety critical - Failed protection</td>
                <td className="border border-[#FFC900]/20 px-4 py-2">Regular functional testing and lubrication</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/20 px-4 py-2">Contacts eroded beyond limits</td>
                <td className="border border-[#FFC900]/20 px-4 py-2">Operational - Overheating, potential failure</td>
                <td className="border border-[#FFC900]/20 px-4 py-2">Inspection based on operation count and thermal imaging</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/20 px-4 py-2">Insulation deterioration</td>
                <td className="border border-[#FFC900]/20 px-4 py-2">Safety critical - Potential flashover</td>
                <td className="border border-[#FFC900]/20 px-4 py-2">Insulation resistance testing and partial discharge monitoring</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-4">
        <p className="font-medium">
          RCM implementation requires a significant initial investment in analysis, but typically results in more 
          efficient maintenance programs with reduced costs and improved reliability. It prevents both under-maintenance 
          (leading to failures) and over-maintenance (wasting resources and potentially introducing new failure modes).
        </p>
      </div>
    </div>
  )
};

// Assessment section with questions for the quiz
const assessmentSection: SectionData = {
  title: "Preventive Maintenance Quiz",
  description: "Comprehensive assessment of preventive maintenance concepts",
  content: <></>,
  questions: [
    {
      question: "What is the primary goal of preventive maintenance?",
      options: [
        "To reduce equipment costs",
        "To reduce the likelihood of failures and unplanned downtime",
        "To increase equipment performance",
        "To extend warranty periods"
      ],
      correctAnswer: "To reduce the likelihood of failures and unplanned downtime",
      explanation: "Preventive maintenance is primarily focused on reducing the likelihood of equipment failures and unplanned downtime through scheduled service and maintenance activities."
    },
    {
      question: "Which of the following is NOT a key component of preventive maintenance?",
      options: [
        "Regular inspections and testing",
        "Scheduled cleaning and recalibration",
        "Waiting for equipment to fail before servicing",
        "Documentation of maintenance activities"
      ],
      correctAnswer: "Waiting for equipment to fail before servicing",
      explanation: "Preventive maintenance is based on proactive maintenance to prevent failures, not reactive maintenance that waits for equipment to fail before servicing."
    },
    {
      question: "What is the recommended approach for creating a maintenance schedule?",
      options: [
        "Schedule all maintenance at the same time",
        "Only perform maintenance when equipment fails",
        "Schedule maintenance based on criticality and manufacturer recommendations",
        "Perform maintenance only during off-hours"
      ],
      correctAnswer: "Schedule maintenance based on criticality and manufacturer recommendations",
      explanation: "An effective maintenance schedule should be based on equipment criticality and manufacturer recommendations to ensure appropriate maintenance frequencies."
    },
    {
      question: "Which maintenance frequency would typically include major overhauls and component replacements?",
      options: [
        "Daily checks",
        "Weekly maintenance",
        "Monthly maintenance",
        "Annual maintenance"
      ],
      correctAnswer: "Annual maintenance",
      explanation: "Annual maintenance typically includes more extensive work such as major overhauls and component replacements, while daily, weekly, and monthly maintenance focus on inspections and minor adjustments."
    },
    {
      question: "What type of inspection should be included in daily maintenance checks?",
      options: [
        "Complete equipment disassembly",
        "Component replacement",
        "Visual inspections and monitoring readings",
        "Major calibration"
      ],
      correctAnswer: "Visual inspections and monitoring readings",
      explanation: "Daily maintenance checks typically include quick visual inspections and monitoring of readings, which can identify early signs of issues without requiring extensive work."
    },
    {
      question: "Which of the following is a benefit of implementing predictive maintenance techniques?",
      options: [
        "Increased emergency repairs",
        "Higher overall maintenance costs",
        "More accurately predicting when equipment will fail",
        "Reduced equipment lifespan"
      ],
      correctAnswer: "More accurately predicting when equipment will fail",
      explanation: "Predictive maintenance uses condition monitoring to more accurately predict when equipment will fail, allowing for better planning of maintenance activities."
    },
    {
      question: "What should be documented during routine maintenance activities?",
      options: [
        "Only major repairs",
        "Only failed inspections",
        "All maintenance activities, findings, and actions taken",
        "Only maintenance that requires part replacement"
      ],
      correctAnswer: "All maintenance activities, findings, and actions taken",
      explanation: "Comprehensive documentation of all maintenance activities, findings, and actions taken is essential for tracking equipment history and planning future maintenance."
    },
    {
      question: "How does preventive maintenance impact equipment reliability?",
      options: [
        "It has no impact on reliability",
        "It decreases reliability",
        "It improves reliability by addressing issues before failure",
        "It only improves reliability for new equipment"
      ],
      correctAnswer: "It improves reliability by addressing issues before failure",
      explanation: "Preventive maintenance improves equipment reliability by identifying and addressing potential issues before they lead to failure."
    },
    {
      question: "What is a key consideration when scheduling maintenance to minimize operational disruption?",
      options: [
        "Always schedule maintenance during peak operation times",
        "Coordinate with production schedules and plan for equipment downtime",
        "Only perform maintenance when equipment fails",
        "Perform all maintenance at the end of the year"
      ],
      correctAnswer: "Coordinate with production schedules and plan for equipment downtime",
      explanation: "To minimize operational disruption, maintenance should be coordinated with production schedules and planned for times when equipment downtime will have the least impact."
    },
    {
      question: "Which approach to maintenance combines preventive and predictive strategies?",
      options: [
        "Reactive maintenance",
        "Corrective maintenance",
        "Condition-based maintenance",
        "Run-to-failure maintenance"
      ],
      correctAnswer: "Condition-based maintenance",
      explanation: "Condition-based maintenance combines aspects of both preventive and predictive strategies by using real-time monitoring to determine when maintenance should be performed."
    }
  ]
};

// Export all sections in an object
export const preventiveMaintenanceSections: Record<string, SectionData> = {
  "1.1": section1_1,
  "1.2": section1_2,
  "2.1": section2_1,
  "2.2": section2_2,
  "3.1": section3_1,
  "3.2": section3_2,
  "4.1": section4_1,
  "4.2": section4_2,
  "assessment": assessmentSection
};
