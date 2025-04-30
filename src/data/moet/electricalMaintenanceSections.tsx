
import React from 'react';

export const electricalMaintenanceSections: Record<string, { title: string, content: React.ReactNode }> = {
  "1.1": {
    title: "Maintenance Schedules",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/80">
          Effective electrical maintenance requires consistent scheduling and thorough documentation. 
          Scheduled maintenance helps prevent equipment failures, extends the life of electrical systems, 
          and ensures safe operation.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Key Schedule Components</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Daily visual inspections for obvious issues</li>
          <li>Weekly testing of emergency systems</li>
          <li>Monthly insulation resistance testing</li>
          <li>Quarterly thermal imaging of critical connections</li>
          <li>Annual comprehensive system testing</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Benefits of Scheduled Maintenance</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Reduced unexpected downtime</li>
          <li>Extended equipment lifespan</li>
          <li>Lower repair costs through early intervention</li>
          <li>Improved safety for personnel</li>
          <li>Compliance with regulatory requirements</li>
          <li>Better resource allocation and planning</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Schedule Development</h3>
        <p className="text-[#FFC900]/80">
          Developing an effective maintenance schedule requires consideration of:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Manufacturer recommendations</li>
          <li>Equipment criticality and failure impact</li>
          <li>Operational patterns and production schedules</li>
          <li>Historical data from similar systems</li>
          <li>Industry best practices and standards</li>
          <li>Available resources (personnel, tools, time)</li>
        </ul>
      </div>
    )
  },
  
  "1.2": {
    title: "Planning and Implementation",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/80">
          A well-designed maintenance plan considers equipment criticality, operational requirements, 
          manufacturer recommendations, and regulatory compliance.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Risk Assessment</h3>
        <p className="text-[#FFC900]/80">
          Risk assessment evaluates the impact of failure against the probability of occurrence. This helps prioritize maintenance activities based on:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Critical equipment affecting production or safety</li>
          <li>Historical failure patterns</li>
          <li>Age and condition of equipment</li>
          <li>Environmental factors affecting reliability</li>
          <li>Consequences of failure (safety, financial, operational)</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Resource Allocation</h3>
        <p className="text-[#FFC900]/80">
          Efficient maintenance implementation requires proper resource planning:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Personnel with appropriate skills and certifications</li>
          <li>Specialized test equipment and tools</li>
          <li>Spare parts inventory management</li>
          <li>Time allocation during operational windows</li>
          <li>Budget considerations for materials and labor</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Implementation Strategies</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Staged implementation to minimize operational impact</li>
          <li>Communication protocols with operations teams</li>
          <li>Clear work instructions and procedures</li>
          <li>Quality control checkpoints</li>
          <li>Feedback mechanisms for continuous improvement</li>
          <li>Training requirements for maintenance staff</li>
        </ul>
      </div>
    )
  },
  
  "1.3": {
    title: "Condition Monitoring",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/80">
          Modern maintenance programs incorporate condition monitoring to detect potential issues 
          before they lead to failures.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Thermal Imaging</h3>
        <p className="text-[#FFC900]/80">
          Infrared cameras detect heat variations that indicate potential problems:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Loose or corroded connections showing as hotspots</li>
          <li>Overloaded circuits and components</li>
          <li>Imbalanced loads across phases</li>
          <li>Failing insulation and deteriorating components</li>
          <li>Motor bearing issues appearing as heat signatures</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Ultrasonic Detection</h3>
        <p className="text-[#FFC900]/80">
          Ultrasonic equipment can identify issues by detecting high-frequency sounds from:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Partial discharges within insulation</li>
          <li>Corona effects on high-voltage equipment</li>
          <li>Arcing across deteriorated connections</li>
          <li>Mechanical issues in bearings and moving parts</li>
          <li>Gas or fluid leaks in sealed systems</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Power Quality Monitoring</h3>
        <p className="text-[#FFC900]/80">
          Continuous or periodic monitoring of electrical parameters can identify:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Harmonic distortion affecting equipment performance</li>
          <li>Voltage fluctuations and imbalances</li>
          <li>Power factor issues increasing energy costs</li>
          <li>Transient events causing intermittent problems</li>
          <li>Load profile anomalies indicating system issues</li>
        </ul>
      </div>
    )
  },
  
  "2.1": {
    title: "Key Testing Methods",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/80">
          Regular testing helps identify potential issues before they lead to failures or safety hazards.
          Following standardized testing procedures ensures consistency and reliability.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Essential Electrical Tests</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Insulation resistance:</strong> Measuring resistance between conductors and ground</li>
          <li><strong>Earth continuity:</strong> Verifying the integrity of protective earth connections</li>
          <li><strong>Voltage measurement:</strong> Confirming correct supply voltages and phase balance</li>
          <li><strong>Current measurement:</strong> Checking for balanced loads and overloading conditions</li>
          <li><strong>Functional testing:</strong> Verifying equipment operates as intended</li>
          <li><strong>RCD/GFCI testing:</strong> Ensuring proper operation of protective devices</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Test Equipment Calibration</h3>
        <p className="text-[#FFC900]/80">
          Accurate testing depends on properly calibrated equipment:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Regular calibration schedules for all test instruments</li>
          <li>Calibration traceability to national standards</li>
          <li>Pre-test verification procedures</li>
          <li>Equipment maintenance and care</li>
          <li>Proper storage and handling practices</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Testing Safety Protocols</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Risk assessment before testing begins</li>
          <li>Safe isolation procedures for dead testing</li>
          <li>Personal protective equipment requirements</li>
          <li>Communications protocols during testing</li>
          <li>Emergency procedures for unexpected situations</li>
          <li>Control of access to test areas</li>
        </ul>
      </div>
    )
  },
  
  "2.2": {
    title: "Insulation Testing",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/80">
          Insulation deterioration is a leading cause of electrical failures. Regular testing helps 
          identify degradation before complete failure occurs.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Insulation Resistance Testing</h3>
        <p className="text-[#FFC900]/80">
          Using a megohmmeter (insulation tester) to measure resistance:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Between phase conductors</li>
          <li>Between phases and neutral</li>
          <li>Between all conductors and earth</li>
          <li>At various test voltages (250V, 500V, 1000V) depending on system voltage</li>
          <li>With time-based measurements for trending analysis</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Specialized Insulation Tests</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Polarization Index (PI):</strong> Ratio of 10-minute to 1-minute insulation resistance readings</li>
          <li><strong>Dielectric Absorption Ratio (DAR):</strong> Ratio of 60-second to 30-second measurements</li>
          <li><strong>Step Voltage Test:</strong> Comparing insulation resistance at different test voltages</li>
          <li><strong>Dielectric Discharge Test:</strong> Analyzing discharge characteristics after test voltage removal</li>
          <li><strong>High Potential Testing:</strong> Applying voltage higher than rated to identify weak spots</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Interpreting Insulation Test Results</h3>
        <p className="text-[#FFC900]/80">
          Understanding test results is critical for maintenance decisions:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Minimum acceptable resistance values based on equipment type and voltage</li>
          <li>Trend analysis comparing current with historical measurements</li>
          <li>Temperature correction factors for standardizing readings</li>
          <li>PI values interpretation (generally &gt; 2.0 indicates good condition)</li>
          <li>DAR values interpretation (generally &gt; 1.3 indicates good condition)</li>
          <li>Equipment-specific considerations for motors, transformers, cables, etc.</li>
        </ul>
      </div>
    )
  },
  
  "2.3": {
    title: "Protective Device Testing",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/80">
          Protective devices must be regularly tested to ensure they will operate correctly when required.
          Failure of protective devices can lead to equipment damage and safety hazards.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Circuit Breaker Testing</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Trip timing:</strong> Verifying operation within specified time at various current levels</li>
          <li><strong>Contact resistance:</strong> Measuring resistance across closed contacts</li>
          <li><strong>Insulation resistance:</strong> Testing insulation between poles and to ground</li>
          <li><strong>Mechanical operation:</strong> Checking free movement and mechanism condition</li>
          <li><strong>Primary injection testing:</strong> Applying actual currents to verify operation</li>
          <li><strong>Secondary injection testing:</strong> Simulating fault conditions in electronic trip units</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">RCD/GFCI Testing</h3>
        <p className="text-[#FFC900]/80">
          Testing residual current devices ensures personal protection:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Trip time verification at rated leakage current (typically 30mA)</li>
          <li>Trip current measurement (ramp test)</li>
          <li>No-trip test at 50% of rated leakage current</li>
          <li>Push button test function verification</li>
          <li>Documentation of test results for compliance</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Relay Testing and Coordination</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Pickup value testing:</strong> Verifying relay operation at threshold values</li>
          <li><strong>Timing tests:</strong> Confirming operation delay curves</li>
          <li><strong>Coordination studies:</strong> Ensuring selective operation between devices</li>
          <li><strong>Functionality testing:</strong> Checking all protection functions (overcurrent, earth fault, etc.)</li>
          <li><strong>Control circuit verification:</strong> Testing integrity of trip and alarm circuits</li>
          <li><strong>Communication testing:</strong> For relays with network capabilities</li>
        </ul>
      </div>
    )
  },
  
  "3.1": {
    title: "Record Keeping",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/80">
          Thorough documentation is essential for effective maintenance management. Records provide 
          historical data for analysis, compliance evidence, and information for future maintenance planning.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Essential Maintenance Records</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Equipment inventory:</strong> Complete listing with specifications and locations</li>
          <li><strong>Maintenance history:</strong> Chronological record of all work performed</li>
          <li><strong>Test results:</strong> Documentation of all testing with date-stamped values</li>
          <li><strong>Inspection findings:</strong> Observations and recommendations</li>
          <li><strong>Repairs and replacements:</strong> Details of components changed and work performed</li>
          <li><strong>Non-conformance reports:</strong> Documentation of issues found and resolutions</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Documentation Best Practices</h3>
        <p className="text-[#FFC900]/80">
          Effective record keeping follows established principles:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Standardized formats and terminologies</li>
          <li>Clear identification of equipment and locations</li>
          <li>Date and time stamping of all activities</li>
          <li>Personnel identification for accountability</li>
          <li>Objective reporting of findings without bias</li>
          <li>Proper retention based on regulatory requirements</li>
          <li>Secure storage with appropriate access controls</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Documentation Benefits</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Compliance demonstration for regulatory requirements</li>
          <li>Trend analysis for predictive maintenance</li>
          <li>Historical perspective for troubleshooting</li>
          <li>Knowledge transfer between maintenance personnel</li>
          <li>Evidence for insurance and warranty claims</li>
          <li>Justification for capital expenditures</li>
          <li>Support for root cause analysis of failures</li>
        </ul>
      </div>
    )
  },
  
  "3.2": {
    title: "Computerized Maintenance Management",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/80">
          Modern maintenance relies on digital systems to streamline planning, execution, and record-keeping.
          Computerized Maintenance Management Systems (CMMS) offer significant advantages over paper-based systems.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">CMMS Core Functions</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Work order management:</strong> Creating, assigning, tracking, and closing maintenance tasks</li>
          <li><strong>Asset management:</strong> Detailed equipment records with specifications and history</li>
          <li><strong>Preventive maintenance scheduling:</strong> Automatic generation of recurring tasks</li>
          <li><strong>Inventory control:</strong> Tracking spare parts and automatic reordering</li>
          <li><strong>Labor management:</strong> Staff assignments, skills tracking, and time recording</li>
          <li><strong>Reporting and analytics:</strong> Performance metrics and trend analysis</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Integration Capabilities</h3>
        <p className="text-[#FFC900]/80">
          Modern CMMS platforms integrate with other systems for enhanced functionality:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Building management systems (BMS) for automated alerts</li>
          <li>Enterprise resource planning (ERP) for financial coordination</li>
          <li>Condition monitoring systems for predictive inputs</li>
          <li>Mobile devices for field data collection</li>
          <li>Internet of Things (IoT) sensors for real-time data</li>
          <li>Geographic information systems (GIS) for spatial mapping</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Implementation Considerations</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Scalability to match organizational growth</li>
          <li>User-friendly interfaces for widespread adoption</li>
          <li>Data security and access control measures</li>
          <li>Migration strategy from legacy systems</li>
          <li>Training requirements for maintenance staff</li>
          <li>Customization vs. standardization balance</li>
          <li>Cloud-based vs. on-premises hosting options</li>
        </ul>
      </div>
    )
  },
  
  "3.3": {
    title: "Documentation Standards",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/80">
          Following consistent documentation standards ensures records are useful and accessible.
          Industry standards provide frameworks for effective documentation practices.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Industry Standards</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>ISO 55000:</strong> International standards for asset management systems</li>
          <li><strong>IEC 60364:</strong> Requirements for electrical installation documentation</li>
          <li><strong>NFPA 70B:</strong> Recommended practice for electrical equipment maintenance</li>
          <li><strong>IEEE 3007.2:</strong> Recommended practice for maintenance of industrial and commercial power systems</li>
          <li><strong>BS 7671:</strong> Requirements for electrical installations (IET Wiring Regulations)</li>
          <li><strong>EN 13460:</strong> Documentation for maintenance</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Document Control</h3>
        <p className="text-[#FFC900]/80">
          Proper document control ensures information integrity:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Unique document identification and numbering</li>
          <li>Version control and revision history</li>
          <li>Approval processes and authorization</li>
          <li>Distribution control and access management</li>
          <li>Retention periods and archiving procedures</li>
          <li>Regular review and updating schedules</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Documentation Types</h3>
        <p className="text-[#FFC900]/80">
          A comprehensive documentation system includes various document types:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Policies and procedures:</strong> Standardized approaches to maintenance activities</li>
          <li><strong>Work instructions:</strong> Detailed step-by-step guidance for specific tasks</li>
          <li><strong>Checklists:</strong> Verification tools for consistency in execution</li>
          <li><strong>Test reports:</strong> Standardized formats for recording test results</li>
          <li><strong>Certificates:</strong> Formal documentation of compliance and testing</li>
          <li><strong>As-built drawings:</strong> Current representation of installed systems</li>
          <li><strong>Maintenance logs:</strong> Chronological records of activities and findings</li>
        </ul>
      </div>
    )
  },
  
  "4.1": {
    title: "Data-Driven Maintenance",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/80">
          Predictive maintenance uses condition monitoring data and advanced analytics to predict when 
          equipment failure might occur, allowing for planned interventions before issues arise.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Data Collection Methods</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Continuous monitoring:</strong> Real-time data from permanently installed sensors</li>
          <li><strong>Periodic measurements:</strong> Regular manual collection at scheduled intervals</li>
          <li><strong>Wireless sensors:</strong> Remote monitoring of difficult-to-access equipment</li>
          <li><strong>Mobile data collection:</strong> Using portable devices during rounds</li>
          <li><strong>Integrated systems:</strong> Drawing data from existing control systems</li>
          <li><strong>IoT devices:</strong> Network-connected sensors providing continuous streams</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Analytical Approaches</h3>
        <p className="text-[#FFC900]/80">
          Transforming collected data into actionable information:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Trend analysis:</strong> Tracking parameter changes over time</li>
          <li><strong>Statistical process control:</strong> Identifying deviations from normal conditions</li>
          <li><strong>Failure mode analysis:</strong> Understanding how equipment typically fails</li>
          <li><strong>Condition indicators:</strong> Developing metrics that correlate with equipment health</li>
          <li><strong>Reliability modeling:</strong> Statistical prediction of failure probability</li>
          <li><strong>Correlation analysis:</strong> Identifying relationships between multiple parameters</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Implementation Benefits</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Optimized maintenance intervals based on actual condition</li>
          <li>Reduced unplanned downtime and emergency repairs</li>
          <li>Extended equipment life through timely interventions</li>
          <li>Lower overall maintenance costs and spare parts inventory</li>
          <li>Improved safety through prevention of catastrophic failures</li>
          <li>Enhanced resource planning with advance notice of maintenance needs</li>
          <li>Better utilization of maintenance personnel</li>
        </ul>
      </div>
    )
  },
  
  "4.2": {
    title: "Advanced Monitoring Techniques",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/80">
          Modern predictive maintenance employs sophisticated monitoring methods to detect early signs of failure.
          These techniques provide insights into equipment condition that are invisible to conventional inspections.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Infrared Thermography</h3>
        <p className="text-[#FFC900]/80">
          Using infrared cameras to identify thermal patterns and anomalies:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Detection of hotspots from loose connections or overloads</li>
          <li>Identification of failing components before visible signs</li>
          <li>Monitoring of thermal patterns in switchgear and distribution equipment</li>
          <li>Non-contact measurement for energized equipment</li>
          <li>Quantitative temperature measurement for trend analysis</li>
          <li>Ability to survey large areas quickly and efficiently</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Ultrasonic Analysis</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Detection of high-frequency sounds from partial discharges</li>
          <li>Early identification of corona effects in high-voltage equipment</li>
          <li>Location of arcing in enclosed equipment</li>
          <li>Detection of mechanical issues in bearings and rotating equipment</li>
          <li>Identification of compressed air or gas leaks</li>
          <li>Assessment of lubrication conditions in mechanical components</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Motor Current Signature Analysis</h3>
        <p className="text-[#FFC900]/80">
          Analyzing electrical signatures to detect mechanical and electrical issues:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Identification of broken rotor bars in induction motors</li>
          <li>Detection of bearing faults through current modulation</li>
          <li>Analysis of air gap eccentricity</li>
          <li>Monitoring of load variations and mechanical resonances</li>
          <li>Early warning of stator winding deterioration</li>
          <li>Non-intrusive testing while equipment is operating</li>
        </ul>
      </div>
    )
  },
  
  "4.3": {
    title: "AI and Machine Learning Applications",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/80">
          The latest predictive maintenance systems incorporate artificial intelligence to improve accuracy.
          Machine learning algorithms can identify subtle patterns that traditional analysis might miss.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Pattern Recognition</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Identifying complex patterns across multiple data streams</li>
          <li>Detecting subtle changes that precede failure</li>
          <li>Learning normal operational patterns for specific equipment</li>
          <li>Adapting to seasonal variations and operational changes</li>
          <li>Differentiating between normal fluctuations and developing issues</li>
          <li>Improving detection accuracy over time through learning</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Predictive Models</h3>
        <p className="text-[#FFC900]/80">
          Advanced algorithms provide powerful predictive capabilities:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Remaining useful life estimation:</strong> Predicting time until failure</li>
          <li><strong>Failure probability calculation:</strong> Statistical risk assessment</li>
          <li><strong>Maintenance optimization:</strong> Balancing intervention timing</li>
          <li><strong>Multi-parameter analysis:</strong> Considering interactions between systems</li>
          <li><strong>Condition forecasting:</strong> Projecting future equipment state</li>
          <li><strong>Anomaly detection:</strong> Identifying unusual behavior patterns</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Implementation Considerations</h3>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Data quality and quantity requirements</li>
          <li>Integration with existing maintenance systems</li>
          <li>Training requirements for maintenance personnel</li>
          <li>Handling of false positives and negatives</li>
          <li>Continuous model improvement and validation</li>
          <li>Balancing automation with human expertise</li>
          <li>Cybersecurity considerations for connected systems</li>
          <li>Cost-benefit analysis for implementation</li>
        </ul>
      </div>
    )
  }
};
