
import React from 'react';

// Define the structure for installation planning questions
export interface InstallationPlanningQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// Sample questions for the Installation Planning Assessment
export const installationPlanningQuestions: InstallationPlanningQuestion[] = [
  {
    question: "What is the primary purpose of installation planning in electrical projects?",
    options: [
      "To increase the project cost",
      "To ensure efficient resource allocation and project execution",
      "To extend the project timeline",
      "To avoid regulatory compliance"
    ],
    correctAnswer: "To ensure efficient resource allocation and project execution",
    explanation: "Installation planning is crucial for ensuring that electrical projects are executed efficiently with proper allocation of resources, materials, and personnel, while meeting project timelines and quality standards."
  },
  {
    question: "Which of the following is NOT typically included in an electrical installation plan?",
    options: [
      "Cable routing diagrams",
      "Equipment specifications",
      "Employee vacation schedules",
      "Load calculations"
    ],
    correctAnswer: "Employee vacation schedules",
    explanation: "While installation plans include technical specifications, diagrams, and calculations, general employee vacation schedules are typically part of resource management rather than the technical installation plan itself."
  },
  {
    question: "What is a Gantt chart used for in installation planning?",
    options: [
      "To calculate voltage drop",
      "To schedule and track project activities and timelines",
      "To determine cable sizes",
      "To identify potential clients"
    ],
    correctAnswer: "To schedule and track project activities and timelines",
    explanation: "Gantt charts are project management tools used to visualize project schedules, showing the start and finish dates of various tasks and their dependencies, which is essential for effective installation planning."
  },
  {
    question: "What does the critical path method (CPM) identify in installation planning?",
    options: [
      "The cheapest installation route",
      "The sequence of activities that determine the shortest time to complete the project",
      "The most dangerous aspects of the installation",
      "The client's preferred installation method"
    ],
    correctAnswer: "The sequence of activities that determine the shortest time to complete the project",
    explanation: "The critical path method (CPM) identifies the sequence of dependent tasks that form the longest duration, determining the minimum time needed to complete the project. Delays in critical path activities will delay the entire project."
  },
  {
    question: "Which regulatory standard must be considered when planning electrical installations in the UK?",
    options: [
      "NFPA 70",
      "BS 7671 (IET Wiring Regulations)",
      "IEEE 802.11",
      "ISO 9001"
    ],
    correctAnswer: "BS 7671 (IET Wiring Regulations)",
    explanation: "BS 7671, commonly known as the IET Wiring Regulations, is the national standard in the UK for electrical installations and must be adhered to when planning any electrical installation work."
  },
  {
    question: "What is the purpose of a site survey in installation planning?",
    options: [
      "To meet legal requirements only",
      "To assess existing conditions and gather data for accurate planning",
      "To evaluate staff performance",
      "To determine material prices"
    ],
    correctAnswer: "To assess existing conditions and gather data for accurate planning",
    explanation: "A site survey is conducted to assess the existing conditions, gather precise measurements, identify potential obstacles, and collect all necessary data to ensure accurate and effective installation planning."
  },
  {
    question: "What information should be included in the technical specifications for electrical equipment in an installation plan?",
    options: [
      "Manufacturer's warranty period only",
      "Marketing materials from the supplier",
      "Detailed electrical ratings, dimensions, and installation requirements",
      "The installer's personal preferences"
    ],
    correctAnswer: "Detailed electrical ratings, dimensions, and installation requirements",
    explanation: "Technical specifications should include detailed electrical ratings (voltage, current, etc.), physical dimensions, mounting requirements, environmental constraints, and any special installation considerations for each piece of equipment."
  },
  {
    question: "Why is it important to consider future expansion when creating an electrical installation plan?",
    options: [
      "To use more materials than necessary",
      "To make the installation look more complex",
      "To allow for potential growth and additional load requirements",
      "To justify a higher initial cost"
    ],
    correctAnswer: "To allow for potential growth and additional load requirements",
    explanation: "Planning for future expansion ensures that the electrical system can accommodate additional loads or equipment that may be added later without requiring extensive modifications, saving time and costs in the long run."
  },
  {
    question: "What is the purpose of creating a risk assessment during the installation planning phase?",
    options: [
      "To comply with insurance requirements only",
      "To identify, assess, and mitigate potential hazards and risks",
      "To determine project profitability",
      "To assign blame if accidents occur"
    ],
    correctAnswer: "To identify, assess, and mitigate potential hazards and risks",
    explanation: "Risk assessments are conducted to systematically identify potential hazards, evaluate their likelihood and severity, and implement control measures to eliminate or minimize risks during the installation process."
  },
  {
    question: "Which of the following is a key consideration when planning cable routes in an installation?",
    options: [
      "Using the longest possible route",
      "Avoiding all bends regardless of practicality",
      "Considering EMI sources, accessibility, and mechanical protection",
      "Following only decorative patterns"
    ],
    correctAnswer: "Considering EMI sources, accessibility, and mechanical protection",
    explanation: "When planning cable routes, key considerations include avoiding electromagnetic interference (EMI) sources, ensuring future accessibility for maintenance, providing adequate mechanical protection, and minimizing voltage drop by choosing appropriate routes."
  },
  {
    question: "What is the primary purpose of load calculations in installation planning?",
    options: [
      "To impress clients with complex mathematics",
      "To determine the required capacity of the electrical system",
      "To increase the project budget",
      "To comply with minimum paperwork requirements"
    ],
    correctAnswer: "To determine the required capacity of the electrical system",
    explanation: "Load calculations are performed to accurately determine the required capacity of the electrical system, ensuring that cables, distribution boards, and protective devices are correctly sized to handle the anticipated loads safely."
  },
  {
    question: "What document typically serves as the legal agreement between client and contractor for an electrical installation project?",
    options: [
      "Certificate of completion",
      "Risk assessment",
      "Contract with detailed scope of work",
      "Equipment warranty"
    ],
    correctAnswer: "Contract with detailed scope of work",
    explanation: "The contract with a detailed scope of work serves as the legal agreement between client and contractor, specifying the work to be performed, timelines, payment terms, and other legal obligations of both parties."
  },
  {
    question: "What is the purpose of a handover procedure in installation planning?",
    options: [
      "To transfer liability only",
      "To formally transfer the completed installation to the client with documentation",
      "To terminate employee contracts",
      "To request final payment only"
    ],
    correctAnswer: "To formally transfer the completed installation to the client with documentation",
    explanation: "The handover procedure is the formal process of transferring the completed installation to the client, including providing all necessary documentation, test certificates, operating instructions, and warranties."
  },
  {
    question: "Which of the following should be included in installation documentation for client handover?",
    options: [
      "Staff personal information",
      "Supplier discount rates",
      "As-built drawings and test certificates",
      "Company financial statements"
    ],
    correctAnswer: "As-built drawings and test certificates",
    explanation: "Installation documentation for handover should include as-built drawings (showing the actual installation as completed), test certificates, equipment manuals, warranty information, and maintenance requirements."
  },
  {
    question: "What is the purpose of a project milestone in installation planning?",
    options: [
      "To provide opportunities for team celebrations",
      "To mark significant events or accomplishments in the project timeline",
      "To increase the project budget",
      "To avoid client communications"
    ],
    correctAnswer: "To mark significant events or accomplishments in the project timeline",
    explanation: "Project milestones mark significant events or accomplishments in the project timeline, helping to track progress, trigger payments, and provide natural points for project reviews and course corrections if needed."
  }
];

// Project Planning Content
export const projectPlanningContent = {
  title: "Project Planning Methodology",
  introduction: "Effective project planning is the cornerstone of successful electrical installations. This section covers the fundamental methodologies and approaches to planning electrical installation projects.",
  sections: [
    {
      title: "Project Lifecycle",
      content: (
        <>
          <p>The electrical installation project lifecycle typically consists of five key phases:</p>
          <ol>
            <li><strong>Initiation:</strong> Defining project scope, objectives, and feasibility</li>
            <li><strong>Planning:</strong> Detailed planning of resources, schedule, and technical requirements</li>
            <li><strong>Execution:</strong> Implementation of the installation according to plans</li>
            <li><strong>Monitoring and Control:</strong> Tracking progress and making adjustments</li>
            <li><strong>Closure:</strong> Testing, commissioning, and handover to client</li>
          </ol>
          <p>Each phase requires specific documentation and deliverables to ensure project success.</p>
        </>
      )
    },
    {
      title: "Work Breakdown Structure (WBS)",
      content: (
        <>
          <p>A Work Breakdown Structure is a hierarchical decomposition of the project into smaller, more manageable components:</p>
          <ul>
            <li>Divides the project into logical work packages</li>
            <li>Creates a foundation for scheduling and resource allocation</li>
            <li>Improves estimation accuracy and project control</li>
          </ul>
          <p className="mt-3 mb-3">Example WBS for a commercial electrical installation:</p>
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <p className="font-semibold">1.0 Pre-Installation</p>
            <p className="ml-4">1.1 Site survey</p>
            <p className="ml-4">1.2 Design and engineering</p>
            <p className="ml-4">1.3 Procurement</p>
            <p className="font-semibold mt-2">2.0 Installation</p>
            <p className="ml-4">2.1 Power distribution</p>
            <p className="ml-8">2.1.1 Main distribution board</p>
            <p className="ml-8">2.1.2 Sub-distribution boards</p>
            <p className="ml-4">2.2 Cabling infrastructure</p>
            <p className="ml-4">2.3 Lighting systems</p>
            <p className="font-semibold mt-2">3.0 Testing and Commissioning</p>
            <p className="ml-4">3.1 Initial verification</p>
            <p className="ml-4">3.2 Functional testing</p>
            <p className="font-semibold mt-2">4.0 Handover</p>
            <p className="ml-4">4.1 Documentation</p>
            <p className="ml-4">4.2 Client training</p>
          </div>
        </>
      )
    },
    {
      title: "Project Scheduling",
      content: (
        <>
          <p>Effective scheduling is critical to project success. Key scheduling techniques include:</p>
          <ul>
            <li><strong>Gantt Charts:</strong> Visual timeline representation of tasks and dependencies</li>
            <li><strong>Critical Path Method (CPM):</strong> Identifies the sequence of activities that determine the shortest completion time</li>
            <li><strong>PERT (Program Evaluation and Review Technique):</strong> Handles uncertainty in activity durations</li>
          </ul>
          <p className="mt-3">When scheduling electrical installations, consider:</p>
          <ul>
            <li>Regulatory inspection points</li>
            <li>Equipment delivery lead times</li>
            <li>Dependencies on other trades</li>
            <li>Access restrictions and working hours</li>
            <li>Outage windows for existing systems</li>
          </ul>
        </>
      )
    }
  ],
  examples: [
    {
      title: "Project Charter Example",
      content: (
        <div className="bg-gray-100 p-4 rounded-md">
          <h4 className="font-semibold">Project Charter: Office Building Electrical Upgrade</h4>
          <p className="mt-2"><strong>Project Objective:</strong> Upgrade the electrical distribution system in a 5-story office building to support increased power requirements and improve reliability.</p>
          <p className="mt-2"><strong>Scope:</strong></p>
          <ul className="list-disc ml-5">
            <li>Replace main distribution board</li>
            <li>Install new sub-distribution boards on each floor</li>
            <li>Upgrade cabling infrastructure</li>
            <li>Implement power monitoring system</li>
            <li>Provide as-built documentation and staff training</li>
          </ul>
          <p className="mt-2"><strong>Key Milestones:</strong></p>
          <ul className="list-disc ml-5">
            <li>Design approval: Week 2</li>
            <li>Procurement complete: Week 5</li>
            <li>Main distribution board installation: Week 8</li>
            <li>Final testing and commissioning: Week 12</li>
            <li>Project handover: Week 14</li>
          </ul>
          <p className="mt-2"><strong>Key Stakeholders:</strong> Building owner, tenants, facilities management, local authority</p>
          <p className="mt-2"><strong>Budget: £175,000</strong></p>
        </div>
      )
    }
  ],
  summary: "Effective project planning sets the foundation for successful electrical installations. By properly defining the project lifecycle, creating detailed work breakdowns, and implementing professional scheduling techniques, electrical professionals can ensure projects are delivered on time, within budget, and to the required quality standards."
};

// Resource Allocation Content
export const resourceAllocationContent = {
  title: "Resource Allocation",
  introduction: "Resource allocation is the process of assigning and managing the resources needed for successful project completion, including personnel, materials, equipment, and time.",
  sections: [
    {
      title: "Personnel Planning",
      content: (
        <>
          <p>Effective personnel planning ensures that the right people with the right skills are available at the right time:</p>
          <ul>
            <li><strong>Skills Matrix:</strong> Mapping required skills against available team members</li>
            <li><strong>Resource Histograms:</strong> Visual representation of resource allocation over time</li>
            <li><strong>Responsibility Assignment Matrix (RAM):</strong> Clarifies roles and responsibilities</li>
          </ul>
          <p className="mt-3">Key considerations for electrical installation teams:</p>
          <ul>
            <li>Specialized certifications (e.g., inspection and testing)</li>
            <li>Experience with specific systems or equipment</li>
            <li>Compliance with supervision requirements for trainees</li>
            <li>Health and safety qualifications</li>
          </ul>
        </>
      )
    },
    {
      title: "Materials Management",
      content: (
        <>
          <p>Proper materials management is crucial for project flow and cost control:</p>
          <ul>
            <li><strong>Bill of Materials (BOM):</strong> Comprehensive list of required materials with specifications</li>
            <li><strong>Procurement Schedule:</strong> Timing of purchases aligned with installation sequence</li>
            <li><strong>Just-in-Time Delivery:</strong> Minimizing storage requirements while ensuring availability</li>
            <li><strong>Quality Control:</strong> Inspection procedures for received materials</li>
          </ul>
          <p className="mt-3">Critical factors in electrical materials planning:</p>
          <ul>
            <li>Lead times for specialized equipment</li>
            <li>Storage requirements for sensitive components</li>
            <li>Compliance with specified standards</li>
            <li>Substitution procedures for unavailable items</li>
          </ul>
        </>
      )
    },
    {
      title: "Equipment and Tools",
      content: (
        <>
          <p>Planning for equipment and tools requirements:</p>
          <ul>
            <li><strong>Equipment Schedule:</strong> Allocation of shared equipment resources</li>
            <li><strong>Specialist Tools:</strong> Identification and sourcing of specialized testing equipment</li>
            <li><strong>Calibration Requirements:</strong> Ensuring measurement accuracy</li>
          </ul>
          <p className="mt-3">Considerations for electrical installation:</p>
          <ul>
            <li>Access equipment requirements (scaffolding, lifts)</li>
            <li>Testing instruments with valid calibration certificates</li>
            <li>Backup systems for critical equipment</li>
            <li>Safety equipment specific to electrical hazards</li>
          </ul>
        </>
      )
    }
  ],
  examples: [
    {
      title: "Resource Allocation Chart Example",
      content: (
        <div className="bg-gray-100 p-4 rounded-md">
          <h4 className="font-semibold">Weekly Resource Allocation - Factory Electrical Upgrade Project</h4>
          <table className="min-w-full mt-3">
            <thead>
              <tr>
                <th className="border px-4 py-2">Resource</th>
                <th className="border px-4 py-2">Week 1</th>
                <th className="border px-4 py-2">Week 2</th>
                <th className="border px-4 py-2">Week 3</th>
                <th className="border px-4 py-2">Week 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Project Manager</td>
                <td className="border px-4 py-2">50%</td>
                <td className="border px-4 py-2">25%</td>
                <td className="border px-4 py-2">25%</td>
                <td className="border px-4 py-2">50%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Senior Electrician</td>
                <td className="border px-4 py-2">100%</td>
                <td className="border px-4 py-2">100%</td>
                <td className="border px-4 py-2">100%</td>
                <td className="border px-4 py-2">50%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Electricians (x3)</td>
                <td className="border px-4 py-2">0%</td>
                <td className="border px-4 py-2">100%</td>
                <td className="border px-4 py-2">100%</td>
                <td className="border px-4 py-2">100%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Apprentice</td>
                <td className="border px-4 py-2">50%</td>
                <td className="border px-4 py-2">100%</td>
                <td className="border px-4 py-2">100%</td>
                <td className="border px-4 py-2">50%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Test Engineer</td>
                <td className="border px-4 py-2">0%</td>
                <td className="border px-4 py-2">0%</td>
                <td className="border px-4 py-2">50%</td>
                <td className="border px-4 py-2">100%</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3"><strong>Key Equipment:</strong></p>
          <ul className="list-disc ml-5">
            <td>Access Tower: Required in Weeks 2-3</td>
            <td>Cable Puller: Required in Week 2</td>
            <td>Test Equipment: Required in Weeks 3-4</td>
          </ul>
        </div>
      )
    }
  ],
  summary: "Effective resource allocation is essential for the success of electrical installation projects. By carefully planning personnel assignments, material procurement, and equipment usage, project managers can optimize efficiency, minimize waste, and ensure that the right resources are available when needed throughout the project lifecycle."
};

// Scheduling Content
export const schedulingContent = {
  title: "Project Scheduling",
  introduction: "Project scheduling is the process of defining the sequence, timing, and duration of project activities, taking into account resource availability, dependencies, and constraints.",
  sections: [
    {
      title: "Scheduling Techniques",
      content: (
        <>
          <p>Various techniques can be used to create and manage project schedules:</p>
          <ul>
            <li><strong>Gantt Charts:</strong> Bar charts showing activities plotted against time, clearly displaying task durations and relationships</li>
            <li><strong>Critical Path Method (CPM):</strong> Identifies the sequence of activities that determine the minimum project duration</li>
            <li><strong>PERT (Program Evaluation and Review Technique):</strong> Uses three time estimates (optimistic, most likely, pessimistic) to account for uncertainty</li>
            <li><strong>Resource-Constrained Scheduling:</strong> Accounts for limited resource availability</li>
          </ul>
          <p className="mt-3">For electrical installations, effective scheduling must consider:</p>
          <ul>
            <li>Regulatory inspection points and approval timelines</li>
            <li>Power outage windows and operational constraints</li>
            <li>Coordination with other trades and construction phases</li>
          </ul>
        </>
      )
    },
    {
      title: "Milestones and Dependencies",
      content: (
        <>
          <p>Milestones are significant points in the project timeline that mark important achievements or transitions:</p>
          <ul>
            <li>Design approval</li>
            <li>Material delivery completion</li>
            <li>Power system isolation</li>
            <li>Testing and commissioning start/completion</li>
            <li>Client handover</li>
          </ul>
          <p className="mt-3">Dependencies determine the logical relationships between activities:</p>
          <ul>
            <li><strong>Finish-to-Start (FS):</strong> Task B cannot start until Task A is complete (most common)</li>
            <li><strong>Start-to-Start (SS):</strong> Task B cannot start until Task A has started</li>
            <li><strong>Finish-to-Finish (FF):</strong> Task B cannot finish until Task A has finished</li>
            <li><strong>Start-to-Finish (SF):</strong> Task B cannot finish until Task A has started (rarely used)</li>
          </ul>
          <p className="mt-3">Identifying and managing dependencies is crucial for electrical installations, as many tasks have strict sequence requirements for safety and functionality.</p>
        </>
      )
    },
    {
      title: "Schedule Management and Control",
      content: (
        <>
          <p>Once a baseline schedule is established, ongoing management is required:</p>
          <ul>
            <li><strong>Progress Tracking:</strong> Regular updates of activity status and completion percentages</li>
            <li><strong>Schedule Variance Analysis:</strong> Comparing actual progress against planned schedule</li>
            <li><strong>Corrective Actions:</strong> Implementing recovery measures for delayed activities</li>
            <li><strong>Schedule Compression:</strong> Techniques like fast-tracking (overlapping activities) or crashing (adding resources)</li>
          </ul>
          <p className="mt-3">Effective communication of schedule status:</p>
          <ul>
            <li>Regular progress meetings with the project team</li>
            <li>Updated schedule visualizations</li>
            <li>Early notification of potential delays to stakeholders</li>
            <li>Documentation of schedule changes and their justifications</li>
          </ul>
        </>
      )
    }
  ],
  examples: [
    {
      title: "Electrical Project Schedule Example",
      content: (
        <div className="bg-gray-100 p-4 rounded-md">
          <h4 className="font-semibold">Schedule for Retail Store Electrical Installation</h4>
          <table className="min-w-full mt-3">
            <thead>
              <tr>
                <th className="border px-4 py-2">Activity</th>
                <th className="border px-4 py-2">Duration</th>
                <th className="border px-4 py-2">Predecessor</th>
                <th className="border px-4 py-2">Start</th>
                <th className="border px-4 py-2">Finish</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1. Site survey & design</td>
                <td className="border px-4 py-2">5 days</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Day 1</td>
                <td className="border px-4 py-2">Day 5</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2. Material procurement</td>
                <td className="border px-4 py-2">10 days</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Day 6</td>
                <td className="border px-4 py-2">Day 15</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3. Cable pathways</td>
                <td className="border px-4 py-2">7 days</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Day 6</td>
                <td className="border px-4 py-2">Day 12</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">4. Distribution board install</td>
                <td className="border px-4 py-2">3 days</td>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Day 16</td>
                <td className="border px-4 py-2">Day 18</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5. Cable installation</td>
                <td className="border px-4 py-2">8 days</td>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Day 13</td>
                <td className="border px-4 py-2">Day 20</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">6. Lighting & power outlets</td>
                <td className="border px-4 py-2">6 days</td>
                <td className="border px-4 py-2">5</td>
                <td className="border px-4 py-2">Day 21</td>
                <td className="border px-4 py-2">Day 26</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">7. Testing & commissioning</td>
                <td className="border px-4 py-2">3 days</td>
                <td className="border px-4 py-2">4, 6</td>
                <td className="border px-4 py-2">Day 27</td>
                <td className="border px-4 py-2">Day 29</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">8. Documentation & handover</td>
                <td className="border px-4 py-2">1 day</td>
                <td className="border px-4 py-2">7</td>
                <td className="border px-4 py-2">Day 30</td>
                <td className="border px-4 py-2">Day 30</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3"><strong>Critical Path:</strong> 1 → 2 → 4 → 7 → 8 (22 days)</p>
          <p><strong>Key Milestones:</strong></p>
          <ul className="list-disc ml-5">
            <li>Design approval: Day 5</li>
            <li>Material delivery completion: Day 15</li>
            <li>Power-on testing: Day 27</li>
            <li>Project handover: Day 30</li>
          </ul>
        </div>
      )
    }
  ],
  summary: "Professional project scheduling is essential for successful electrical installations. By employing appropriate scheduling techniques, identifying dependencies, setting realistic milestones, and actively managing the schedule throughout the project, electrical professionals can ensure timely project completion while effectively coordinating resources and activities."
};

// Technical Design Content
export const technicalDesignContent = {
  title: "Technical Design Principles",
  introduction: "Technical design is the process of translating client requirements and regulatory standards into detailed plans that guide the installation of electrical systems. This section covers the fundamental principles and methodologies of technical design for electrical installations.",
  sections: [
    {
      title: "Design Objectives and Constraints",
      content: (
        <>
          <p>Effective technical design balances multiple objectives and constraints:</p>
          <ul>
            <li><strong>Functionality:</strong> Meeting the operational requirements of the installation</li>
            <li><strong>Safety:</strong> Ensuring protection of persons, livestock, and property</li>
            <li><strong>Reliability:</strong> Designing systems with appropriate redundancy and protection</li>
            <li><strong>Energy Efficiency:</strong> Minimizing energy consumption and losses</li>
            <li><strong>Maintainability:</strong> Facilitating future access and servicing</li>
            <li><strong>Cost-effectiveness:</strong> Optimizing initial and lifecycle costs</li>
            <li><strong>Compliance:</strong> Meeting all applicable regulations and standards</li>
          </ul>
          <p className="mt-3">Design constraints typically include:</p>
          <ul>
            <li>Budget limitations</li>
            <li>Physical space restrictions</li>
            <li>Existing infrastructure</li>
            <li>Client specifications</li>
            <li>Environmental conditions</li>
            <li>Future expansion requirements</li>
          </ul>
        </>
      )
    },
    {
      title: "Design Process and Documentation",
      content: (
        <>
          <p>The electrical design process typically follows these stages:</p>
          <ol>
            <li><strong>Client Brief:</strong> Understanding requirements and expectations</li>
            <li><strong>Concept Design:</strong> High-level system architecture and approaches</li>
            <li><strong>Detailed Design:</strong> Comprehensive technical specifications and calculations</li>
            <li><strong>Design Review:</strong> Internal verification and external approval as required</li>
            <li><strong>Implementation Documentation:</strong> Converting designs to installation instructions</li>
          </ol>
          <p className="mt-3">Essential design documentation includes:</p>
          <ul>
            <li>Single-line diagrams showing power distribution</li>
            <li>Layout drawings showing equipment locations</li>
            <li>Schematic diagrams showing circuit connections</li>
            <li>Cable schedules and routing plans</li>
            <li>Equipment specifications and datasheets</li>
            <li>Design calculations (load, voltage drop, fault levels, etc.)</li>
          </ul>
        </>
      )
    },
    {
      title: "Design Standards and Regulations",
      content: (
        <>
          <p>All electrical designs must comply with applicable standards and regulations:</p>
          <ul>
            <li><strong>BS 7671 (IET Wiring Regulations):</strong> The fundamental standard for electrical installations in the UK</li>
            <li><strong>Building Regulations:</strong> Particularly Part P for domestic installations</li>
            <li><strong>Health and Safety at Work Act:</strong> Governing safety aspects</li>
            <li><strong>Industry-specific standards:</strong> Such as those for hazardous areas (ATEX), healthcare facilities, or data centers</li>
          </ul>
          <p className="mt-3">Design considerations mandated by regulations include:</p>
          <ul>
            <li>Protection against electric shock</li>
            <li>Protection against thermal effects</li>
            <li>Protection against overcurrent</li>
            <li>Isolation and switching</li>
            <li>Accessibility for operation and maintenance</li>
            <li>Identification and notices</li>
          </ul>
        </>
      )
    }
  ],
  examples: [
    {
      title: "Design Documentation Example",
      content: (
        <div className="bg-gray-100 p-4 rounded-md">
          <h4 className="font-semibold">Technical Design Documentation Components</h4>
          <p className="mt-2"><strong>Project: Office Building Electrical System</strong></p>
          
          <p className="mt-3"><strong>1. Single-Line Diagram</strong></p>
          <p>Shows the main electrical distribution from utility supply through transformers, main switchgear, distribution boards, and major loads. Indicates ratings of equipment, protective devices, and cables.</p>
          
          <p className="mt-3"><strong>2. Load Calculation Schedule</strong></p>
          <table className="min-w-full mt-1">
            <thead>
              <tr>
                <th className="border px-4 py-1">Circuit</th>
                <th className="border px-4 py-1">Connected Load (kVA)</th>
                <th className="border px-4 py-1">Demand Factor</th>
                <th className="border px-4 py-1">Maximum Demand (kVA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-1">Lighting</td>
                <td className="border px-4 py-1">42.5</td>
                <td className="border px-4 py-1">0.8</td>
                <td className="border px-4 py-1">34.0</td>
              </tr>
              <tr>
                <td className="border px-4 py-1">Small Power</td>
                <td className="border px-4 py-1">78.0</td>
                <td className="border px-4 py-1">0.6</td>
                <td className="border px-4 py-1">46.8</td>
              </tr>
              <tr>
                <td className="border px-4 py-1">HVAC</td>
                <td className="border px-4 py-1">125.0</td>
                <td className="border px-4 py-1">0.7</td>
                <td className="border px-4 py-1">87.5</td>
              </tr>
              <tr>
                <td className="border px-4 py-1">Other</td>
                <td className="border px-4 py-1">35.0</td>
                <td className="border px-4 py-1">0.5</td>
                <td className="border px-4 py-1">17.5</td>
              </tr>
              <tr>
                <td className="border px-4 py-1 font-semibold">Total</td>
                <td className="border px-4 py-1">280.5</td>
                <td className="border px-4 py-1">-</td>
                <td className="border px-4 py-1">185.8</td>
              </tr>
            </tbody>
          </table>
          
          <p className="mt-3"><strong>3. Cable Sizing Calculation Example</strong></p>
          <p className="mt-1">For Sub-Distribution Board SDB-2:</p>
          <ul className="list-disc ml-5">
            <li>Maximum Demand: 63.4 kVA</li>
            <li>Voltage: 400V, 3-phase</li>
            <li>Current: 91.5 A</li>
            <li>Cable Route Length: 45m</li>
            <li>Installation Method: Clipped direct to surface</li>
            <li>Ambient Temperature: 35°C (correction factor 0.96)</li>
            <li>Cable Type: 4-core XLPE insulated copper</li>
            <li>Calculated Minimum Size: 25mm²</li>
            <li>Voltage Drop: 1.2% (within 2% limit)</li>
            <li>Selected Cable: 25mm² with 100A protection</li>
          </ul>
        </div>
      )
    }
  ],
  summary: "Technical design is a critical phase in electrical installation projects, requiring a methodical approach that balances functionality, safety, efficiency, and regulatory compliance. By following established design processes and documenting all aspects thoroughly, electrical professionals create the blueprint for successful installations that meet client needs while ensuring long-term reliability and safety."
};

// System Architecture Content
export const systemArchitectureContent = {
  title: "System Architecture",
  introduction: "System architecture defines the overall structure and organization of electrical systems, including power distribution, control systems, and integration of various components. This section explores key principles and approaches to developing effective electrical system architectures.",
  sections: [
    {
      title: "Power Distribution Architecture",
      content: (
        <>
          <p>The power distribution architecture forms the backbone of any electrical installation:</p>
          <ul>
            <li><strong>Radial Distribution:</strong> The most common system with power flowing from a single source to multiple loads</li>
            <li><strong>Ring Distribution:</strong> Providing alternative supply paths for improved reliability</li>
            <li><strong>Mesh Networks:</strong> Multiple interconnected paths for critical applications</li>
          </ul>
          <p className="mt-3">Key considerations in distribution architecture:</p>
          <ul>
            <li><strong>Voltage Levels:</strong> Selection of appropriate distribution voltages (LV, MV, HV)</li>
            <li><strong>Protective Devices:</strong> Strategic placement of circuit breakers, fuses, and RCDs</li>
            <li><strong>Isolation Points:</strong> Ensuring safe maintenance and emergency shutdown</li>
            <li><strong>Discrimination:</strong> Coordinating protective devices for selective operation</li>
            <li><strong>Power Quality:</strong> Managing harmonics, voltage fluctuations, and power factor</li>
          </ul>
        </>
      )
    },
    {
      title: "Control System Architecture",
      content: (
        <>
          <p>Modern electrical installations often incorporate sophisticated control systems:</p>
          <ul>
            <li><strong>Centralized Control:</strong> Single point of control for the entire system</li>
            <li><strong>Distributed Control:</strong> Multiple controllers managing different subsystems</li>
            <li><strong>Hierarchical Control:</strong> Multi-level architecture with supervisory control</li>
          </ul>
          <p className="mt-3">Components of control system architecture:</p>
          <ul>
            <li><strong>Controllers:</strong> PLCs, microcontrollers, building management systems</li>
            <li><strong>Field Devices:</strong> Sensors, switches, relays, actuators</li>
            <li><strong>Communication Networks:</strong> Fieldbus systems, Ethernet, wireless protocols</li>
            <li><strong>Human-Machine Interfaces:</strong> Displays, touchscreens, control panels</li>
            <li><strong>Data Management:</strong> Historian servers, analytics platforms</li>
          </ul>
        </>
      )
    },
    {
      title: "System Integration and Interoperability",
      content: (
        <>
          <p>Modern electrical systems rarely operate in isolation, requiring careful integration:</p>
          <ul>
            <li><strong>Subsystem Integration:</strong> Connecting power, lighting, HVAC, security, and other systems</li>
            <li><strong>Protocol Compatibility:</strong> Ensuring communication between different manufacturers' equipment</li>
            <li><strong>Legacy System Integration:</strong> Interfacing with existing installations</li>
            <li><strong>Future-Proofing:</strong> Designing for future expansion and technology evolution</li>
          </ul>
          <p className="mt-3">Integration strategies and technologies:</p>
          <ul>
            <li><strong>Open Protocols:</strong> BACnet, Modbus, KNX, DALI</li>
            <li><strong>Middleware:</strong> Protocol converters and gateways</li>
            <li><strong>API Integration:</strong> Software interfaces for system interoperability</li>
            <li><strong>Cloud Connectivity:</strong> Remote monitoring and control capabilities</li>
            <li><strong>IoT Architecture:</strong> Edge devices and cloud platforms</li>
          </ul>
        </>
      )
    }
  ],
  examples: [
    {
      title: "System Architecture Diagram Example",
      content: (
        <div className="bg-gray-100 p-4 rounded-md">
          <h4 className="font-semibold">Commercial Building Electrical System Architecture</h4>
          <p className="mt-2"><strong>Power Distribution:</strong></p>
          <ul className="list-disc ml-5">
            <li>Utility Supply (11kV) → Step-down Transformer → Main LV Switchboard (400V)</li>
            <li>Main Switchboard → Distribution Boards (by floor/zone) → Final Circuits</li>
            <li>Standby Generator with Automatic Transfer Switch for critical loads</li>
            <li>Uninterruptible Power Supply for IT and security systems</li>
          </ul>
          
          <p className="mt-3"><strong>Control Systems:</strong></p>
          <ul className="list-disc ml-5">
            <li>Building Management System (BMS) - centralized monitoring and control</li>
            <li>Lighting Control System with DALI protocol</li>
            <li>HVAC Controls with BACnet communication</li>
            <li>Energy Monitoring System with Modbus meters</li>
            <li>Fire Alarm System (standalone for regulatory compliance)</li>
          </ul>
          
          <p className="mt-3"><strong>Integration Layer:</strong></p>
          <ul className="list-disc ml-5">
            <li>BMS Gateway providing integration of subsystems</li>
            <li>IP Network backbone for system communications</li>
            <li>Visualization Dashboards for facility management</li>
            <li>Remote Access Module for maintenance and monitoring</li>
            <li>Data logging and analytics for energy optimization</li>
          </ul>
          
          <p className="mt-3"><strong>Architecture Considerations:</strong></p>
          <ul className="list-disc ml-5">
            <li>Redundancy in critical systems (dual network paths)</li>
            <li>Segregation of networks for security (IT vs. OT)</li>
            <li>Scalability for future expansion of office spaces</li>
            <li>Maintainability through standardized components</li>
          </ul>
        </div>
      )
    }
  ],
  summary: "Developing an effective electrical system architecture requires a holistic approach that considers power distribution, control systems, and integration requirements. By carefully planning the system structure, selecting appropriate technologies, and ensuring interoperability between components, electrical professionals can create installations that deliver reliability, efficiency, and flexibility while supporting the operational needs of the facility."
};

// Design Tools Content
export const designToolsContent = {
  title: "Design Tools and Software",
  introduction: "Modern electrical installation design relies heavily on specialized software tools that improve accuracy, efficiency, and collaboration. This section explores the various digital tools available for electrical design and their applications.",
  sections: [
    {
      title: "Computer-Aided Design (CAD) Software",
      content: (
        <>
          <p>CAD software forms the foundation of electrical design documentation:</p>
          <ul>
            <li><strong>2D CAD:</strong> For creating floor plans, layouts, and schematic diagrams</li>
            <li><strong>3D CAD:</strong> For spatial coordination and visualization of installations</li>
            <li><strong>BIM (Building Information Modeling):</strong> Integrated approach combining 3D models with project information</li>
          </ul>
          <p className="mt-3">Common electrical CAD features:</p>
          <ul>
            <li>Electrical symbol libraries</li>
            <li>Automated circuit creation</li>
            <li>Cable routing tools</li>
            <li>Panel layout design</li>
            <li>Bill of materials generation</li>
            <li>Drawing annotation and dimensioning</li>
          </ul>
          <p className="mt-3">Popular electrical CAD software includes AutoCAD Electrical, SOLIDWORKS Electrical, and Revit MEP.</p>
        </>
      )
    },
    {
      title: "Calculation and Analysis Software",
      content: (
        <>
          <p>Specialized software for performing critical electrical calculations and analyses:</p>
          <ul>
            <li><strong>Load Flow Analysis:</strong> Determining voltage drops and power flows</li>
            <li><strong>Short Circuit Analysis:</strong> Calculating fault currents for protection design</li>
            <li><strong>Cable Sizing:</strong> Determining appropriate cable dimensions</li>
            <li><strong>Lighting Design:</strong> Calculating illumination levels and fixture layouts</li>
            <li><strong>Harmonic Analysis:</strong> Assessing power quality issues</li>
            <li><strong>Protection Coordination:</strong> Ensuring proper discrimination between devices</li>
          </ul>
          <p className="mt-3">Benefits of calculation software:</p>
          <ul>
            <li>Increased accuracy compared to manual calculations</li>
            <li>Ability to quickly evaluate alternative designs</li>
            <li>Consistent application of standards and regulations</li>
            <li>Documentation of calculation methods and results</li>
            <li>Time savings on complex or repetitive calculations</li>
          </ul>
          <p className="mt-3">Examples include ETAP, DIALux, Amtech, and Electrical Calculator Suite.</p>
        </>
      )
    },
    {
      title: "Project Management and Documentation Tools",
      content: (
        <>
          <p>Software tools that support the broader design and documentation process:</p>
          <ul>
            <li><strong>Project Management Software:</strong> Scheduling, resource allocation, and tracking</li>
            <li><strong>Document Management Systems:</strong> Organizing and controlling design documentation</li>
            <li><strong>Collaboration Platforms:</strong> Facilitating team communication and file sharing</li>
            <li><strong>Specification Writing Tools:</strong> Creating standardized technical specifications</li>
          </ul>
          <p className="mt-3">Integration capabilities:</p>
          <ul>
            <li>Data exchange between design and calculation tools</li>
            <li>Connection to procurement and estimating systems</li>
            <li>Mobile access for on-site reference and updates</li>
            <li>Cloud-based collaboration for distributed teams</li>
          </ul>
          <p className="mt-3">Popular platforms include Microsoft Project, Autodesk Construction Cloud, and Procore.</p>
        </>
      )
    }
  ],
  examples: [
    {
      title: "Design Tool Application Example",
      content: (
        <div className="bg-gray-100 p-4 rounded-md">
          <h4 className="font-semibold">Design Process Using Modern Software Tools</h4>
          <p className="mt-2"><strong>Project: Retail Store Electrical Renovation</strong></p>
          
          <p className="mt-3"><strong>1. Initial Design Phase</strong></p>
          <ul className="list-disc ml-5">
            <li><strong>BIM Software (Revit MEP):</strong> Creating the base electrical model integrated with architectural plans</li>
            <li><strong>Load Calculation Software:</strong> Determining total electrical demand and distribution requirements</li>
            <li><strong>Collaboration Platform:</strong> Sharing initial designs with client and architect for feedback</li>
          </ul>
          
          <p className="mt-3"><strong>2. Detailed Design Phase</strong></p>
          <ul className="list-disc ml-5">
            <li><strong>Electrical CAD:</strong> Developing detailed single-line diagrams and panel schedules</li>
            <li><strong>Cable Sizing Software:</strong> Calculating appropriate cable sizes for all circuits</li>
            <li><strong>Lighting Design Software (DIALux):</strong> Optimizing fixture layout for required illumination levels</li>
            <li><strong>Protection Coordination Software:</strong> Ensuring proper discrimination between protective devices</li>
          </ul>
          
          <p className="mt-3"><strong>3. Documentation and Implementation</strong></p>
          <ul className="list-disc ml-5">
            <li><strong>Specification Software:</strong> Creating detailed technical specifications for equipment</li>
            <li><strong>BIM Clash Detection:</strong> Identifying and resolving conflicts with other building services</li>
            <li><strong>Drawing Automation:</strong> Generating installation drawings and cable schedules</li>
            <li><strong>Bill of Materials Software:</strong> Producing accurate material lists for procurement</li>
          </ul>
          
          <p className="mt-3"><strong>Benefits Realized:</strong></p>
          <ul className="list-disc ml-5">
            <li>50% reduction in design time compared to traditional methods</li>
            <li>Early identification of spatial conflicts, avoiding on-site modifications</li>
            <li>More accurate material quantities, reducing waste</li>
            <li>Standardized documentation improving installation quality</li>
            <li>Digital handover package for facility management</li>
          </ul>
        </div>
      )
    }
  ],
  summary: "Modern design tools and software have transformed electrical installation planning, enabling more accurate, efficient, and collaborative processes. By leveraging specialized CAD systems, calculation software, and project management platforms, electrical professionals can create comprehensive designs that comply with regulations, optimize performance, and facilitate smooth implementation. Staying current with these technologies is increasingly essential for competitive and high-quality electrical installation work."
};

// Implementation Content
export const implementationContent = {
  title: "Implementation Procedures",
  introduction: "Implementation is the phase where planning and design are transformed into physical electrical installations. Following structured procedures ensures that installations are completed safely, efficiently, and in compliance with applicable standards and specifications.",
  sections: [
    {
      title: "Pre-Implementation Planning",
      content: (
        <>
          <p>Before physical installation begins, several preparatory steps are essential:</p>
          <ul>
            <li><strong>Site Preparation:</strong> Ensuring the work area is ready and accessible</li>
            <li><strong>Resource Mobilization:</strong> Assembling personnel, materials, and equipment</li>
            <li><strong>Risk Assessment:</strong> Identifying hazards and implementing control measures</li>
            <li><strong>Permit Requirements:</strong> Obtaining necessary permits and authorizations</li>
            <li><strong>Method Statements:</strong> Documenting detailed work procedures</li>
            <li><strong>Sequencing:</strong> Establishing the logical order of installation activities</li>
          </ul>
          <p className="mt-3">Key documentation required before implementation:</p>
          <ul>
            <li>Approved installation drawings and specifications</li>
            <li>Health and safety plan</li>
            <li>Materials delivery schedule</li>
            <li>Plant and equipment requirements</li>
            <li>Quality inspection plan</li>
          </ul>
        </>
      )
    },
    {
      title: "Installation Techniques and Standards",
      content: (
        <>
          <p>Implementation must follow established techniques and standards:</p>
          <ul>
            <li><strong>Installation Standards:</strong> Following BS 7671 requirements and industry best practices</li>
            <li><strong>Cable Management:</strong> Proper routing, support, and protection of cables</li>
            <li><strong>Equipment Mounting:</strong> Secure and accessible installation of devices</li>
            <li><strong>Connection Methods:</strong> Appropriate termination techniques for reliable connections</li>
            <li><strong>Labeling and Identification:</strong> Clear marking of circuits, equipment, and warning notices</li>
          </ul>
          <p className="mt-3">Critical areas requiring special attention:</p>
          <ul>
            <li>Support systems for cables and equipment</li>
            <li>Segregation of circuits with different voltages or functions</li>
            <li>Protection against mechanical damage</li>
            <li>Fire stopping for penetrations through fire-rated boundaries</li>
            <li>Electromagnetic compatibility considerations</li>
            <li>Environmental protection for outdoor installations</li>
          </ul>
        </>
      )
    },
    {
      title: "Coordination and Supervision",
      content: (
        <>
          <p>Effective management during implementation ensures quality and compliance:</p>
          <ul>
            <li><strong>Supervision:</strong> Qualified oversight of installation work</li>
            <li><strong>Progress Monitoring:</strong> Tracking completion against schedule</li>
            <li><strong>Coordination with Other Trades:</strong> Aligning work with other construction activities</li>
            <li><strong>Technical Queries:</strong> Resolving design or installation issues</li>
            <li><strong>Change Management:</strong> Handling variations to original specifications</li>
            <li><strong>Compliance Checks:</strong> Ongoing verification of regulatory requirements</li>
          </ul>
          <p className="mt-3">Documentation during implementation:</p>
          <ul>
            <li>Daily site logs and progress reports</li>
            <li>Interim inspections and test records</li>
            <li>Technical queries and resolutions</li>
            <li>As-built notes for drawing updates</li>
            <li>Photographic records of concealed installations</li>
          </ul>
        </>
      )
    }
  ],
  examples: [
    {
      title: "Implementation Method Statement Example",
      content: (
        <div className="bg-gray-100 p-4 rounded-md">
          <h4 className="font-semibold">Method Statement: Distribution Board Installation</h4>
          
          <p className="mt-2"><strong>1. Preparation</strong></p>
          <ul className="list-disc ml-5">
            <li>Verify location against approved drawings</li>
            <li>Confirm dimensions and fixing points</li>
            <li>Isolate and lock off any existing supplies to the area</li>
            <li>Complete permit-to-work documentation</li>
            <li>Ensure all required materials and tools are available</li>
          </ul>
          
          <p className="mt-3"><strong>2. Installation Procedure</strong></p>
          <ul className="list-disc ml-5">
            <li>Mark fixing positions according to drawings</li>
            <li>Install mounting frame or direct fixings as specified</li>
            <li>Mount distribution board securely</li>
            <li>Verify level and alignment</li>
            <li>Install protective bonding connections</li>
            <li>Prepare cable entries with appropriate glands/bushings</li>
            <li>Label board as per drawing reference</li>
          </ul>
          
          <p className="mt-3"><strong>3. Circuit Installation</strong></p>
          <ul className="list-disc ml-5">
            <li>Install incoming supply cable, maintaining minimum bending radii</li>
            <li>Connect incoming supply to main switch with correct termination methods</li>
            <li>Install and secure outgoing circuit cables</li>
            <li>Terminate conductors to appropriate devices</li>
            <li>Apply correct torque settings to terminals</li>
            <li>Fit correct protective devices as specified</li>
            <li>Install and complete circuit identification</li>
          </ul>
          
          <p className="mt-3"><strong>4. Quality Checks</strong></p>
          <ul className="list-disc ml-5">
            <li>Visually inspect all connections</li>
            <li>Verify correct phase sequence</li>
            <li>Check security of all fixings and terminations</li>
            <li>Confirm proper circuit identification and labeling</li>
            <li>Complete continuity tests of protective conductors</li>
            <li>Verify insulation resistance of all circuits</li>
            <li>Complete installation checklist</li>
          </ul>
          
          <p className="mt-3"><strong>5. Safety Considerations</strong></p>
          <ul className="list-disc ml-5">
            <li>Use appropriate PPE including safety footwear and insulating gloves</li>
            <li>Implement safe isolation procedures before commencing work</li>
            <li>Use insulated tools for electrical connections</li>
            <li>Maintain clear working area</li>
            <li>Follow manual handling procedures for heavy components</li>
          </ul>
        </div>
      )
    }
  ],
  summary: "Successful implementation of electrical installations requires careful planning, adherence to technical standards, and effective coordination. By following structured procedures and maintaining thorough documentation, electrical professionals can ensure that installations are completed safely, efficiently, and in compliance with all applicable requirements. The implementation phase translates designs into functional systems that will serve their intended purpose reliably."
};

// Quality Control Content
export const qualityControlContent = {
  title: "Quality Control",
  introduction: "Quality control is the systematic process of verifying that electrical installations meet specified requirements, standards, and performance criteria. This section covers the principles, methods, and procedures for ensuring quality throughout the installation process.",
  sections: [
    {
      title: "Quality Management Principles",
      content: (
        <>
          <p>Effective quality control for electrical installations is based on several fundamental principles:</p>
          <ul>
            <li><strong>Prevention Rather Than Correction:</strong> Identifying and addressing potential issues before they occur</li>
            <li><strong>Continuous Verification:</strong> Ongoing checks throughout the installation rather than just at completion</li>
            <li><strong>Documented Standards:</strong> Clear specifications against which quality can be measured</li>
            <li><strong>Competency:</strong> Ensuring personnel have appropriate skills and training</li>
            <li><strong>Traceability:</strong> Maintaining records of inspections, tests, and materials</li>
          </ul>
          <p className="mt-3">A structured approach to quality control typically includes:</p>
          <ul>
            <li>Quality control plan development</li>
            <li>Identification of critical inspection points</li>
            <li>Definition of acceptance criteria</li>
            <li>Allocation of quality responsibilities</li>
            <li>Implementation of verification methods</li>
            <li>Documentation and record-keeping systems</li>
          </ul>
        </>
      )
    },
    {
      title: "Inspection and Testing Processes",
      content: (
        <>
          <p>Inspection and testing are the primary methods of quality verification:</p>
          <ul>
            <li><strong>Visual Inspections:</strong> Checking for correct installation, damage, and compliance with specifications</li>
            <li><strong>Dimensional Checks:</strong> Verifying spatial requirements and clearances</li>
            <li><strong>Functional Tests:</strong> Confirming that systems operate as intended</li>
            <li><strong>Electrical Tests:</strong> Measuring electrical parameters to verify safety and performance</li>
            <li><strong>Documentation Review:</strong> Ensuring required certifications and records are complete</li>
          </ul>
          <p className="mt-3">Key inspection and testing stages include:</p>
          <ul>
            <li><strong>Pre-installation:</strong> Material and equipment verification</li>
            <li><strong>During Installation:</strong> Progressive inspections of work before it becomes inaccessible</li>
            <li><strong>Post-installation:</strong> Comprehensive testing before energization</li>
            <li><strong>Commissioning:</strong> Verification under operating conditions</li>
            <li><strong>Periodic:</strong> Ongoing inspections during the operational life</li>
          </ul>
          <p className="mt-3">Electrical testing required by BS 7671 includes:</p>
          <ul>
            <li>Continuity of protective conductors</li>
            <li>Insulation resistance</li>
            <li>Polarity verification</li>
            <li>Earth fault loop impedance</li>
            <li>RCD operation</li>
            <li>Functional testing of assemblies</li>
          </ul>
        </>
      )
    },
    {
      title: "Non-Conformance and Corrective Actions",
      content: (
        <>
          <p>Processes for handling quality issues when they are identified:</p>
          <ul>
            <li><strong>Non-conformance Reporting:</strong> Documenting instances where installations fail to meet requirements</li>
            <li><strong>Root Cause Analysis:</strong> Identifying the underlying reasons for quality issues</li>
            <li><strong>Corrective Action:</strong> Implementing measures to fix identified problems</li>
            <li><strong>Preventive Action:</strong> Addressing systemic issues to prevent recurrence</li>
            <li><strong>Verification:</strong> Confirming that corrective actions have been effective</li>
          </ul>
          <p className="mt-3">Classification of non-conformances by severity:</p>
          <ul>
            <li><strong>Critical:</strong> Safety issues requiring immediate action</li>
            <li><strong>Major:</strong> Significant deviations from requirements affecting functionality or compliance</li>
            <li><strong>Minor:</strong> Issues that don't substantially impact safety or functionality</li>
          </ul>
          <p className="mt-3">Documentation for quality control should include:</p>
          <ul>
            <li>Inspection checklists and reports</li>
            <li>Test result records</li>
            <li>Non-conformance reports and resolutions</li>
            <li>Material and equipment certificates</li>
            <li>Calibration records for test equipment</li>
            <li>Photographs of completed installations</li>
          </ul>
        </>
      )
    }
  ],
  examples: [
    {
      title: "Quality Control Inspection Checklist Example",
      content: (
        <div className="bg-gray-100 p-4 rounded-md">
          <h4 className="font-semibold">Distribution Board Installation Quality Inspection Checklist</h4>
          
          <table className="min-w-full mt-3">
            <thead>
              <tr>
                <th className="border px-4 py-2">Inspection Item</th>
                <th className="border px-4 py-2">Acceptance Criteria</th>
                <th className="border px-4 py-2">Result</th>
                <th className="border px-4 py-2">Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Location and mounting</td>
                <td className="border px-4 py-2">As per approved drawings, secure fixings</td>
                <td className="border px-4 py-2">Pass</td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Equipment rating</td>
                <td className="border px-4 py-2">Matches design specification</td>
                <td className="border px-4 py-2">Pass</td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">IP rating</td>
                <td className="border px-4 py-2">Meets environmental requirements</td>
                <td className="border px-4 py-2">Pass</td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Circuit protection devices</td>
                <td className="border px-4 py-2">Type and rating as specified</td>
                <td className="border px-4 py-2">Fail</td>
                <td className="border px-4 py-2">Two MCBs incorrect rating - replaced</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Cable terminations</td>
                <td className="border px-4 py-2">Secure, correct torque applied</td>
                <td className="border px-4 py-2">Pass</td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Cable identification</td>
                <td className="border px-4 py-2">All cables clearly labeled</td>
                <td className="border px-4 py-2">Pass</td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Circuit directory</td>
                <td className="border px-4 py-2">Complete and accurate</td>
                <td className="border px-4 py-2">Pass</td>
                <td className="border px-4 py-2">Updated to include new circuit 12</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Main earth connection</td>
                <td className="border px-4 py-2">Properly connected and identified</td>
                <td className="border px-4 py-2">Pass</td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Continuity test</td>
                <td className="border px-4 py-2">All CPC continuity verified</td>
                <td className="border px-4 py-2">Pass</td>
                <td className="border px-4 py-2">Test results recorded separately</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Insulation resistance</td>
                <td className="border px-4 py-2">Minimum 1MΩ at 500V DC</td>
                <td className="border px-4 py-2">Pass</td>
                <td className="border px-4 py-2">All circuits >200MΩ</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">RCD operation</td>
                <td className="border px-4 py-2">Trips within specified time</td>
                <td className="border px-4 py-2">Pass</td>
                <td className="border px-4 py-2">30mA devices trip <100ms</td>
              </tr>
            </tbody>
          </table>
          
          <div className="mt-4">
            <p><strong>Inspector:</strong> J. Smith</p>
            <p><strong>Date:</strong> 15/06/2023</p>
            <p><strong>Location:</strong> Building A, Floor 2</p>
            <p><strong>Reference:</strong> DB-2F-01</p>
            <p><strong>Overall Status:</strong> Pass (after corrective actions)</p>
          </div>
        </div>
      )
    }
  ],
  summary: "Quality control is an integral part of electrical installation projects, ensuring that work meets specified requirements, functions correctly, and complies with relevant standards. By implementing systematic inspection and testing processes, addressing non-conformances effectively, and maintaining comprehensive documentation, electrical professionals can deliver installations that are safe, reliable, and fit for purpose."
};

// Handover Procedures Content
export const handoverProceduresContent = {
  title: "Handover Procedures",
  introduction: "The handover process marks the formal transfer of an electrical installation from the contractor to the client or end-user. A structured handover ensures that all necessary information, documentation, and training are provided to enable safe operation and maintenance of the installation.",
  sections: [
    {
      title: "Completion and Pre-handover Activities",
      content: (
        <>
          <p>Before proceeding with formal handover, several activities must be completed:</p>
          <ul>
            <li><strong>Final Inspections:</strong> Comprehensive checking of the installation against specifications</li>
            <li><strong>Testing and Commissioning:</strong> Verification that all systems function correctly</li>
            <li><strong>Snagging:</strong> Identification and rectification of minor defects</li>
            <li><strong>Documentation Compilation:</strong> Assembly of all required certificates and records</li>
            <li><strong>As-built Documentation:</strong> Updating drawings and schedules to reflect the actual installation</li>
          </ul>
          <p className="mt-3">Key pre-handover verification activities include:</p>
          <ul>
            <li>Complete electrical testing to BS 7671 requirements</li>
            <li>Functional testing of all systems under normal and emergency conditions</li>
            <li>Verification of compliance with Building Regulations and other statutory requirements</li>
            <li>Performance testing against specified parameters</li>
            <li>Integration testing with other building systems</li>
          </ul>
        </>
      )
    },
    {
      title: "Handover Documentation",
      content: (
        <>
          <p>A comprehensive documentation package is essential for handover:</p>
          <ul>
            <li><strong>Electrical Installation Certificate:</strong> Confirming compliance with BS 7671</li>
            <li><strong>Test Results:</strong> Records of all electrical tests performed</li>
            <li><strong>As-built Drawings:</strong> Updated to reflect the actual installation</li>
            <li><strong>Operation and Maintenance Manuals:</strong> Instructions for system operation</li>
            <li><strong>Equipment Warranties:</strong> Manufacturer guarantees and their conditions</li>
            <li><strong>Maintenance Schedules:</strong> Recommended maintenance activities and frequencies</li>
          </ul>
          <p className="mt-3">Additional documentation that may be required:</p>
          <ul>
            <li>Health and Safety File (for projects under CDM Regulations)</li>
            <li>Building Control completion certificates</li>
            <li>Fire detection and alarm system certificates</li>
            <li>Emergency lighting test certificates</li>
            <li>Technical submittals and product datasheets</li>
            <li>Software licenses and access credentials</li>
          </ul>
        </>
      )
    },
    {
      title: "Client Training and Support",
      content: (
        <>
          <p>Ensuring client personnel can safely operate and maintain the installation:</p>
          <ul>
            <li><strong>User Training:</strong> Instruction on day-to-day operation of systems</li>
            <li><strong>Maintenance Training:</strong> Guidance for technical staff on maintenance requirements</li>
            <li><strong>Emergency Procedures:</strong> Actions to take in case of system failures</li>
            <li><strong>Demonstration:</strong> Practical operation of key systems and controls</li>
          </ul>
          <p className="mt-3">Post-handover support arrangements:</p>
          <ul>
            <li>Defects liability period expectations and procedures</li>
            <li>Emergency callout arrangements</li>
            <li>Spare parts inventory and sourcing information</li>
            <li>Contact details for technical support</li>
            <li>Maintenance contract options</li>
            <li>Future modification procedures</li>
          </ul>
        </>
      )
    }
  ],
  examples: [
    {
      title: "Handover Documentation Checklist Example",
      content: (
        <div className="bg-gray-100 p-4 rounded-md">
          <h4 className="font-semibold">Electrical Installation Handover Checklist</h4>
          
          <p className="mt-2"><strong>Project:</strong> Office Building Electrical Upgrade</p>
          <p><strong>Client:</strong> ABC Corporation</p>
          <p><strong>Date of Handover:</strong> 28/09/2023</p>
          
          <p className="mt-3"><strong>1. Certification Documents</strong></p>
          <table className="min-w-full mt-1">
            <thead>
              <tr>
                <th className="border px-4 py-2">Document</th>
                <th className="border px-4 py-2">Provided</th>
                <th className="border px-4 py-2">Reference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Electrical Installation Certificate</td>
                <td className="border px-4 py-2">Yes</td>
                <td className="border px-4 py-2">EIC-2023-118</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Schedule of Test Results</td>
                <td className="border px-4 py-2">Yes</td>
                <td className="border px-4 py-2">TR-2023-118</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Minor Works Certificates</td>
                <td className="border px-4 py-2">Yes</td>
                <td className="border px-4 py-2">MWC-23-45 to 48</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Fire Alarm Commissioning Certificate</td>
                <td className="border px-4 py-2">Yes</td>
                <td className="border px-4 py-2">FA-COM-23-72</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Emergency Lighting Test Certificate</td>
                <td className="border px-4 py-2">Yes</td>
                <td className="border px-4 py-2">EL-2023-36</td>
              </tr>
            </tbody>
          </table>
          
          <p className="mt-3"><strong>2. Technical Documentation</strong></p>
          <table className="min-w-full mt-1">
            <thead>
              <tr>
                <th className="border px-4 py-2">Document</th>
                <th className="border px-4 py-2">Provided</th>
                <th className="border px-4 py-2">Format</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">As-built Drawings</td>
                <td className="border px-4 py-2">Yes</td>
                <td className="border px-4 py-2">PDF + CAD</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Operation & Maintenance Manuals</td>
                <td className="border px-4 py-2">Yes</td>
                <td className="border px-4 py-2">Hardcopy + PDF</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Equipment Datasheets</td>
                <td className="border px-4 py-2">Yes</td>
                <td className="border px-4 py-2">PDF</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Warranty Certificates</td>
                <td className="border px-4 py-2">Yes</td>
                <td className="border px-4 py-2">Hardcopy</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Maintenance Schedule</td>
                <td className="border px-4 py-2">Yes</td>
                <td className="border px-4 py-2">PDF</td>
              </tr>
            </tbody>
          </table>
          
          <p className="mt-3"><strong>3. Training Completed</strong></p>
          <table className="min-w-full mt-1">
            <thead>
              <tr>
                <th className="border px-4 py-2">Training Type</th>
                <th className="border px-4 py-2">Attendees</th>
                <th className="border px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">System Operation Overview</td>
                <td className="border px-4 py-2">Facility Manager, Building Staff</td>
                <td className="border px-4 py-2">25/09/2023</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Distribution System Operation</td>
                <td className="border px-4 py-2">Maintenance Engineers</td>
                <td className="border px-4 py-2">26/09/2023</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">BMS Interface Training</td>
                <td className="border px-4 py-2">Technical Staff</td>
                <td className="border px-4 py-2">27/09/2023</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Emergency Procedures</td>
                <td className="border px-4 py-2">All Staff</td>
                <td className="border px-4 py-2">27/09/2023</td>
              </tr>
            </tbody>
          </table>
          
          <div className="mt-4">
            <p><strong>Handed Over By:</strong> J. Wilson, Project Manager</p>
            <p><strong>Accepted By:</strong> R. Thomas, Facility Manager</p>
            <p><strong>Defects Liability Period:</strong> 12 months from date of handover</p>
            <p><strong>Next Scheduled Maintenance:</strong> 28/03/2024</p>
          </div>
        </div>
      )
    }
  ],
  summary: "A comprehensive and well-executed handover process is vital for ensuring that electrical installations meet client expectations and can be operated and maintained safely. By providing thorough documentation, effective training, and appropriate support arrangements, electrical contractors can facilitate a smooth transition and establish a foundation for the long-term successful operation of the installation."
};
