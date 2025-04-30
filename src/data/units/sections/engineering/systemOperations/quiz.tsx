
import React from 'react';

// Quiz questions
export const systemOperationsQuestions = [
  {
    id: 1,
    question: "Which type of control system utilizes feedback mechanisms to adjust control parameters based on actual system performance?",
    options: [
      "Open-Loop System",
      "Manual Control System",
      "Closed-Loop System",
      "Static Control System"
    ],
    correctAnswer: "Closed-Loop System",
    explanation: "Closed-Loop Systems utilize feedback mechanisms to compare actual system performance with desired performance and make adjustments accordingly. This allows the system to self-correct and maintain desired operation parameters."
  },
  {
    id: 2,
    question: "What is the primary purpose of a Lockout/Tagout (LOTO) procedure?",
    options: [
      "To optimize power distribution efficiency",
      "To secure equipment in a safe state during maintenance",
      "To record operational data for compliance purposes",
      "To manage power quality issues in the system"
    ],
    correctAnswer: "To secure equipment in a safe state during maintenance",
    explanation: "Lockout/Tagout (LOTO) procedures are designed to ensure that equipment is properly shut off and cannot be restarted unexpectedly during maintenance or servicing work, protecting the safety of personnel working on the equipment."
  },
  {
    id: 3,
    question: "Which of the following is NOT typically a component of a control system?",
    options: [
      "Sensors",
      "Controllers",
      "Actuators",
      "Transformers"
    ],
    correctAnswer: "Transformers",
    explanation: "While sensors (to measure parameters), controllers (to process data and determine actions), and actuators (to execute control actions) are standard components of control systems, transformers are power equipment that change voltage levels and are not specifically control system components."
  },
  {
    id: 4,
    question: "What does an Energy Management System (EMS) primarily help achieve in power system operations?",
    options: [
      "Increased power generation capacity",
      "Optimized performance and reliability",
      "Higher operating temperatures in equipment",
      "Reduced safety requirements"
    ],
    correctAnswer: "Optimized performance and reliability",
    explanation: "Energy Management Systems (EMS) are used in power system operations to monitor, control, and optimize the performance and reliability of the generation, transmission, and distribution of electrical power."
  },
  {
    id: 5,
    question: "Which of the following is a key challenge in power system operations related to renewable energy sources?",
    options: [
      "Excessive power generation",
      "Higher voltage stability",
      "Variable generation patterns",
      "Simplified control systems"
    ],
    correctAnswer: "Variable generation patterns",
    explanation: "Renewable energy sources like solar and wind power present the challenge of variable generation patterns due to their dependence on weather conditions. This variability requires sophisticated management strategies to maintain system stability and reliability."
  },
  {
    id: 6,
    question: "What is the primary function of distribution system operations?",
    options: [
      "Generating electrical power",
      "Managing long-distance power transmission",
      "Delivering power from transmission systems to end consumers",
      "Manufacturing electrical equipment"
    ],
    correctAnswer: "Delivering power from transmission systems to end consumers",
    explanation: "Distribution system operations focus on managing the electrical networks that deliver power from transmission systems to end users, including residential, commercial, and industrial customers."
  },
  {
    id: 7,
    question: "Which of the following is a method for improving operational efficiency in electrical systems?",
    options: [
      "Increasing peak power demand",
      "Operating equipment at maximum capacity at all times",
      "Power factor correction",
      "Removing monitoring systems to reduce costs"
    ],
    correctAnswer: "Power factor correction",
    explanation: "Power factor correction improves the efficiency of electrical systems by reducing reactive power, minimizing losses, avoiding utility penalties, and optimizing the use of electrical infrastructure."
  },
  {
    id: 8,
    question: "In industrial electrical systems, what is the primary purpose of a Motor Control Center (MCC)?",
    options: [
      "Generate electricity for the facility",
      "Provide centralized control of multiple motors",
      "Store energy during power outages",
      "Convert AC power to DC power"
    ],
    correctAnswer: "Provide centralized control of multiple motors",
    explanation: "Motor Control Centers (MCCs) are centralized assemblies that house motor controllers, starters, and related equipment, providing a consolidated location for controlling and protecting multiple motors within an industrial facility."
  },
  {
    id: 9,
    question: "What is the 'Testing Before Touch' principle in operational safety procedures?",
    options: [
      "Testing equipment performance before installation",
      "Checking worker qualifications before assigning tasks",
      "Verifying absence of voltage before beginning work",
      "Testing tools before purchasing them"
    ],
    correctAnswer: "Verifying absence of voltage before beginning work",
    explanation: "The 'Testing Before Touch' principle is a critical safety practice that requires verification that electrical equipment or circuits are de-energized and have no voltage present before any work is performed on them, helping prevent electrical injuries."
  },
  {
    id: 10,
    question: "Which monitoring parameter is most directly related to the risk of equipment overheating?",
    options: [
      "Voltage levels",
      "Thermal parameters",
      "Power factor",
      "System frequency"
    ],
    correctAnswer: "Thermal parameters",
    explanation: "Thermal parameters, such as equipment temperatures and ambient conditions, are most directly related to the risk of equipment overheating. Monitoring these parameters allows for early detection of potential overheating conditions that could lead to equipment damage or failure."
  }
];
