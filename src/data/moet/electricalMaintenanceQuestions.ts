
export const electricalMaintenanceQuestions = [
  {
    question: "Which of the following is NOT typically part of a scheduled maintenance program?",
    options: [
      "Daily visual inspections",
      "Quarterly thermal imaging of connections",
      "Continuous 24/7 monitoring of all circuits",
      "Annual comprehensive system testing",
    ],
    correctAnswer: "Continuous 24/7 monitoring of all circuits",
    explanation: "While continuous monitoring may be used in critical systems, it's generally not part of regular scheduled maintenance programs, which instead focus on periodic inspections and tests at specific intervals (daily, weekly, monthly, quarterly, annually)."
  },
  {
    question: "What is the primary purpose of insulation resistance testing?",
    options: [
      "To measure current flow through a circuit",
      "To detect deterioration in insulation before failure occurs",
      "To verify proper grounding of equipment",
      "To test circuit breaker trip times",
    ],
    correctAnswer: "To detect deterioration in insulation before failure occurs",
    explanation: "Insulation resistance testing measures the resistance between conductors and ground to detect deterioration in the insulation material before a complete failure occurs, helping prevent short circuits and electrical hazards."
  },
  {
    question: "The Polarization Index (PI) is calculated by:",
    options: [
      "Comparing voltage to current measurements",
      "Dividing the 10-minute insulation resistance by the 1-minute value",
      "Multiplying the megohmmeter reading by the circuit voltage",
      "Subtracting the leakage current from the total current",
    ],
    correctAnswer: "Dividing the 10-minute insulation resistance by the 1-minute value",
    explanation: "The Polarization Index (PI) is calculated by dividing the insulation resistance measured after 10 minutes by the value measured after 1 minute. A higher ratio indicates better insulation condition."
  },
  {
    question: "Which of the following is a key component of a Computerized Maintenance Management System (CMMS)?",
    options: [
      "Automatic repair of electrical faults",
      "Remote control of circuit breakers",
      "Work order management and tracking",
      "Direct replacement of maintenance personnel",
    ],
    correctAnswer: "Work order management and tracking",
    explanation: "A CMMS typically includes work order management functionality for creating, assigning, tracking, and closing maintenance tasks. This helps organize maintenance activities and provides documentation of completed work."
  },
  {
    question: "Thermal imaging in electrical maintenance is primarily used to:",
    options: [
      "Replace traditional voltage testing",
      "Identify hotspots indicating poor connections or overloads",
      "Measure exact temperatures of conductors",
      "Automatically shut down overheating equipment",
    ],
    correctAnswer: "Identify hotspots indicating poor connections or overloads",
    explanation: "Thermal imaging cameras detect infrared radiation to create heat maps of electrical equipment, allowing technicians to identify abnormally hot areas (hotspots) that may indicate loose connections, overloads, or other issues before they cause failures."
  },
  {
    question: "Which standard provides guidelines for electrical equipment maintenance?",
    options: [
      "ISO 9001",
      "NFPA 70B",
      "IEEE 802.11",
      "ANSI C12.20",
    ],
    correctAnswer: "NFPA 70B",
    explanation: "NFPA 70B is the National Fire Protection Association's Recommended Practice for Electrical Equipment Maintenance, providing guidelines for establishing and implementing an effective electrical preventive maintenance program."
  },
  {
    question: "Motor Current Signature Analysis (MCSA) can detect:",
    options: [
      "Only electrical issues in motors",
      "Only mechanical issues in motors",
      "Both electrical and mechanical issues in motors",
      "Neither electrical nor mechanical issues",
    ],
    correctAnswer: "Both electrical and mechanical issues in motors",
    explanation: "Motor Current Signature Analysis (MCSA) can detect both electrical issues (such as broken rotor bars, stator winding faults) and mechanical issues (such as bearing problems, misalignment) by analyzing the frequency spectrum of the motor current."
  },
  {
    question: "The primary benefit of predictive maintenance over preventive maintenance is:",
    options: [
      "It eliminates the need for maintenance personnel",
      "It is always less expensive to implement",
      "It bases maintenance on actual equipment condition rather than fixed intervals",
      "It completely prevents all equipment failures",
    ],
    correctAnswer: "It bases maintenance on actual equipment condition rather than fixed intervals",
    explanation: "Predictive maintenance uses condition monitoring and data analysis to determine when maintenance is actually needed based on equipment condition, rather than performing maintenance on a fixed schedule regardless of condition, which can lead to more efficient use of resources."
  },
  {
    question: "Which of the following is an example of condition monitoring?",
    options: [
      "Replacing components at fixed intervals",
      "Visual inspection during scheduled downtime",
      "Continuous vibration monitoring of rotating equipment",
      "Cleaning electrical panels annually",
    ],
    correctAnswer: "Continuous vibration monitoring of rotating equipment",
    explanation: "Condition monitoring involves continuously or regularly measuring parameters that indicate equipment health. Vibration monitoring of rotating equipment is a classic example, as changes in vibration patterns can indicate developing mechanical issues."
  },
  {
    question: "What does RCD/GFCI testing verify?",
    options: [
      "Current carrying capacity",
      "Tripping at specified leakage current levels",
      "Voltage regulation capabilities",
      "Short circuit withstand rating",
    ],
    correctAnswer: "Tripping at specified leakage current levels",
    explanation: "Testing Residual Current Devices (RCDs) or Ground Fault Circuit Interrupters (GFCIs) verifies that they will trip at their specified leakage current levels (typically 30mA for personnel protection), ensuring they will function correctly to protect against electric shock."
  },
  {
    question: "A key benefit of using Artificial Intelligence in predictive maintenance is:",
    options: [
      "Eliminating the need for human maintenance personnel",
      "Identifying subtle patterns in data that humans might miss",
      "Automatically repairing electrical faults",
      "Replacing all traditional maintenance techniques",
    ],
    correctAnswer: "Identifying subtle patterns in data that humans might miss",
    explanation: "AI systems can analyze vast amounts of data and identify subtle patterns or correlations that might indicate developing issues, often recognizing these early warning signs before they would be apparent to human analysts."
  },
  {
    question: "Which of the following is NOT typically included in electrical maintenance documentation?",
    options: [
      "Equipment inventories and specifications",
      "Personal information about maintenance personnel",
      "Test results and trending data",
      "Incident reports and corrective actions",
    ],
    correctAnswer: "Personal information about maintenance personnel",
    explanation: "While maintenance documentation includes equipment details, test results, and incident reports, it typically doesn't include personal information about maintenance personnel beyond their qualifications and certifications relevant to the work performed."
  },
  {
    question: "The Dielectric Absorption Ratio (DAR) compares insulation resistance readings at:",
    options: [
      "15 seconds and 30 seconds",
      "30 seconds and 60 seconds",
      "1 minute and 10 minutes",
      "10 minutes and 1 hour",
    ],
    correctAnswer: "30 seconds and 60 seconds",
    explanation: "The Dielectric Absorption Ratio (DAR) is typically calculated by dividing the 60-second (1-minute) insulation resistance measurement by the 30-second measurement. A higher ratio generally indicates better insulation condition."
  },
  {
    question: "Ultrasonic detection in electrical maintenance is primarily used to detect:",
    options: [
      "Heat buildup in connections",
      "Current flow in conductors",
      "Partial discharges and corona effects",
      "Voltage fluctuations",
    ],
    correctAnswer: "Partial discharges and corona effects",
    explanation: "Ultrasonic detectors can hear the high-frequency sounds produced by partial discharges, corona effects, and arcing in electrical equipment - sounds that are typically beyond the range of human hearing but can indicate developing insulation failures."
  },
  {
    question: "Which of the following is a key factor in developing an effective maintenance schedule?",
    options: [
      "Using the same frequency for all equipment regardless of criticality",
      "Considering equipment criticality and operational requirements",
      "Always following a fixed monthly schedule",
      "Ignoring manufacturer recommendations to save costs",
    ],
    correctAnswer: "Considering equipment criticality and operational requirements",
    explanation: "Effective maintenance scheduling considers the criticality of each piece of equipment (consequence of failure), operational requirements, manufacturer recommendations, and regulatory requirements to determine appropriate maintenance frequencies."
  }
];
