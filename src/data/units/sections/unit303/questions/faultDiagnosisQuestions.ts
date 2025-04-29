
export const faultDiagnosisQuestions = [
  {
    question: "What is a short circuit fault?",
    options: [
      "A break in the electrical path that prevents current flow",
      "An unintended connection between live conductors or between live and earth",
      "When too many devices are connected to one circuit",
      "A high resistance connection causing localized heating"
    ],
    correctAnswerIndex: 1,
    explanation: "A short circuit is an unintended connection between live conductors or between live and earth, causing excessive current flow that typically trips protection devices immediately."
  },
  {
    question: "Which of the following is NOT a common cause of open circuit faults?",
    options: [
      "Broken wires",
      "Loose connections",
      "Failed components",
      "Water ingress"
    ],
    correctAnswerIndex: 3,
    explanation: "Water ingress typically causes short circuits or earth faults rather than open circuits. Open circuits are caused by breaks in conductors, loose connections, or failed components."
  },
  {
    question: "What protection device is specifically designed to detect earth faults?",
    options: [
      "MCB (Miniature Circuit Breaker)",
      "Fuse",
      "RCD (Residual Current Device)",
      "Surge protector"
    ],
    correctAnswerIndex: 2,
    explanation: "RCDs (Residual Current Devices) are specifically designed to detect earth faults by monitoring the balance of current in live and neutral conductors."
  },
  {
    question: "During the safe isolation procedure, when should you verify your voltage indicator with a proving unit?",
    options: [
      "Only before testing for dead",
      "Only after testing for dead",
      "Both before and after testing for dead",
      "It's not necessary to verify the voltage indicator"
    ],
    correctAnswerIndex: 2,
    explanation: "You must verify your voltage indicator with a proving unit both before and after testing for dead to ensure the indicator is working correctly throughout the process."
  },
  {
    question: "What should be the first step in a logical fault-finding process?",
    options: [
      "Testing with an insulation resistance tester",
      "Performing a visual inspection",
      "Isolating the circuit",
      "Testing continuity"
    ],
    correctAnswerIndex: 1,
    explanation: "The first step should be a visual inspection to look for obvious signs of damage, burning, discoloration or other visible issues."
  },
  {
    question: "Which of these tests would NOT be appropriate for identifying a high resistance connection?",
    options: [
      "Thermal imaging",
      "Voltage drop test",
      "Insulation resistance test",
      "Load test at the connection point"
    ],
    correctAnswerIndex: 2,
    explanation: "Insulation resistance testing wouldn't specifically identify high resistance connections. Thermal imaging, voltage drop tests, and load tests are more appropriate for identifying high resistance connections."
  },
  {
    question: "After repairing a fault, when should post-rectification testing be carried out?",
    options: [
      "Only if the customer requests it",
      "Only for major repairs",
      "For all repairs before re-energizing the circuit",
      "Only if the original fault was an earth fault"
    ],
    correctAnswerIndex: 2,
    explanation: "Post-rectification testing must be carried out for all repairs before re-energizing the circuit to ensure the repair is effective and the installation is safe."
  },
  {
    question: "What document would typically be completed for a small repair to an existing circuit?",
    options: [
      "Electrical Installation Certificate (EIC)",
      "Minor Electrical Installation Works Certificate (MEIWC)",
      "Electrical Installation Condition Report (EICR)",
      "Building Regulations Compliance Certificate"
    ],
    correctAnswerIndex: 1,
    explanation: "A Minor Electrical Installation Works Certificate (MEIWC) is typically used for small repairs or additions to an existing circuit."
  },
  {
    question: "Which of the following is a potential cause of an RCD nuisance tripping?",
    options: [
      "Broken neutral conductor",
      "High ambient temperature",
      "Leakage current through appliance filters",
      "Open circuit in the protected circuit"
    ],
    correctAnswerIndex: 2,
    explanation: "Leakage current through capacitive filters in electronic equipment can cause nuisance tripping of RCDs, especially in systems with multiple electronic devices."
  },
  {
    question: "When locking off a circuit during isolation, who should keep the key?",
    options: [
      "The supervisor",
      "The person working on the circuit",
      "The client",
      "It should be left in the lock for emergency access"
    ],
    correctAnswerIndex: 1,
    explanation: "The person working on the circuit should maintain possession of the keys throughout the work period to ensure no one else can remove the lock and re-energize the circuit."
  },
  {
    question: "What is the purpose of a loop impedance tester in fault diagnosis?",
    options: [
      "To test insulation resistance",
      "To measure earth fault loop impedance",
      "To check continuity of conductors",
      "To verify RCD operation"
    ],
    correctAnswerIndex: 1,
    explanation: "A loop impedance tester is used to measure earth fault loop impedance, verifying that protection will operate within required disconnection times."
  },
  {
    question: "What should you do if you find a deteriorated cable during fault diagnosis?",
    options: [
      "Tape over the damaged area",
      "Apply heat shrink insulation",
      "Replace the entire cable",
      "Note it in the report for future action"
    ],
    correctAnswerIndex: 2,
    explanation: "A deteriorated cable should be replaced in its entirety rather than attempting to repair just a section, as deterioration may affect other parts of the cable not immediately visible."
  },
  {
    question: "What is the main purpose of an insulation resistance test during fault diagnosis?",
    options: [
      "To identify open circuits",
      "To identify high resistance connections",
      "To identify short circuits and earth faults",
      "To verify RCD operation"
    ],
    correctAnswerIndex: 2,
    explanation: "Insulation resistance testing is primarily used to identify short circuits and earth faults by verifying the integrity of insulation between live conductors and between live conductors and earth."
  },
  {
    question: "When tightening terminal screws during a repair, what should you use?",
    options: [
      "A standard screwdriver with as much force as possible",
      "A calibrated torque screwdriver where specified",
      "Pliers to ensure maximum tightness",
      "Any tool as long as the connection feels tight"
    ],
    correctAnswerIndex: 1,
    explanation: "A calibrated torque screwdriver should be used where specified to ensure connections are tightened to the correct torque - not too loose and not too tight."
  },
  {
    question: "What is a common cause of high resistance connections in electrical installations?",
    options: [
      "Oversized cables",
      "Loose terminations",
      "Too many insulation layers",
      "Low ambient temperature"
    ],
    correctAnswerIndex: 1,
    explanation: "Loose terminations are a common cause of high resistance connections, as they can create small gaps or poor contact areas that increase resistance and cause heating."
  },
  {
    question: "Which of the following is NOT part of the safe isolation procedure?",
    options: [
      "Identifying the circuit to be isolated",
      "Securing the isolation with locks and tags",
      "Testing the circuit is dead",
      "Conducting an insulation resistance test"
    ],
    correctAnswerIndex: 3,
    explanation: "Conducting an insulation resistance test is not part of the safe isolation procedure - it would be performed after isolation as part of fault diagnosis or verification after repair."
  },
  {
    question: "After replacing a faulty MCB, what test would be most appropriate to verify the repair?",
    options: [
      "Insulation resistance test only",
      "Functional test by turning the circuit on",
      "Continuity test only",
      "Earth fault loop impedance test and functional test"
    ],
    correctAnswerIndex: 3,
    explanation: "An earth fault loop impedance test and functional test would be most appropriate to verify both the safety compliance and proper operation of the circuit after replacing an MCB."
  },
  {
    question: "Which of the following could cause an 'open circuit' fault in a lighting circuit?",
    options: [
      "Water ingress to a junction box",
      "Broken filament in an incandescent lamp",
      "Too many lights on one circuit",
      "Earth wire connected to neutral"
    ],
    correctAnswerIndex: 1,
    explanation: "A broken filament in an incandescent lamp creates an open circuit, preventing current flow through the lamp."
  },
  {
    question: "When would you use a proving unit during fault diagnosis?",
    options: [
      "To test circuit continuity",
      "To verify that a voltage indicator is working correctly",
      "To test insulation resistance",
      "To verify RCD operation"
    ],
    correctAnswerIndex: 1,
    explanation: "A proving unit is used to verify that a voltage indicator is functioning correctly before and after testing for the presence or absence of voltage."
  },
  {
    question: "Which of the following is NOT typically included in a risk assessment for fault diagnosis work?",
    options: [
      "Identification of potential hazards",
      "Assessment of risks to yourself and others",
      "Cost estimate for repairs",
      "Determination of appropriate control measures"
    ],
    correctAnswerIndex: 2,
    explanation: "A cost estimate for repairs is not typically part of a risk assessment. Risk assessments focus on safety aspects such as hazard identification, risk evaluation, and control measures."
  },
  {
    question: "What should you NOT do when finding a fault with a consumer unit?",
    options: [
      "Test for dead after isolation",
      "Lock off the main switch",
      "Work on the unit with the power on to diagnose issues",
      "Use appropriate PPE"
    ],
    correctAnswerIndex: 2,
    explanation: "You should never work on a consumer unit with the power on to diagnose issues. All work should be carried out after proper isolation and verification that the unit is dead."
  },
  {
    question: "What is the purpose of a Minor Electrical Installation Works Certificate?",
    options: [
      "To certify a new electrical installation",
      "To document alterations or additions to an existing circuit",
      "To record the condition of an existing installation",
      "To approve a major renovation"
    ],
    correctAnswerIndex: 1,
    explanation: "A Minor Electrical Installation Works Certificate is used to document alterations or additions to an existing circuit rather than certifying a completely new installation."
  },
  {
    question: "When explaining a fault to a client, what approach is most appropriate?",
    options: [
      "Using highly technical terms to impress them",
      "Being vague to avoid confusing them",
      "Using clear, simple language without excessive technical jargon",
      "Letting them read the technical manual"
    ],
    correctAnswerIndex: 2,
    explanation: "When explaining faults to clients, it's best to use clear, simple language without excessive technical jargon to ensure they understand the issue properly."
  },
  {
    question: "What is the maximum disconnection time for a 32A final circuit in a TN system according to BS 7671?",
    options: [
      "0.2 seconds",
      "0.4 seconds",
      "0.8 seconds",
      "5 seconds"
    ],
    correctAnswerIndex: 1,
    explanation: "According to BS 7671, the maximum disconnection time for a final circuit not exceeding 32A in a TN system is 0.4 seconds."
  },
  {
    question: "Which test would be most appropriate for identifying an earth fault in a cable?",
    options: [
      "Continuity test",
      "Polarity test",
      "Insulation resistance test",
      "Functional test"
    ],
    correctAnswerIndex: 2,
    explanation: "An insulation resistance test would be most appropriate for identifying an earth fault in a cable, as it tests the integrity of insulation between conductors and earth."
  },
  {
    question: "What is the primary purpose of a lock-off device during circuit isolation?",
    options: [
      "To protect the isolator from damage",
      "To prevent unauthorised reconnection of power",
      "To ground any residual charge",
      "To identify the circuit owner"
    ],
    correctAnswerIndex: 1,
    explanation: "The primary purpose of a lock-off device during circuit isolation is to prevent unauthorised reconnection of power while work is in progress."
  },
  {
    question: "When documenting a fault repair, which of these would NOT typically be recorded?",
    options: [
      "Test results before and after the repair",
      "Description of the fault",
      "The educational background of the technician",
      "Parts replaced and work done"
    ],
    correctAnswerIndex: 2,
    explanation: "The educational background of the technician would not typically be recorded in fault repair documentation. Documentation focuses on the technical aspects of the fault and repair."
  },
  {
    question: "What is the correct sequence for testing a circuit after repair?",
    options: [
      "Live testing, dead testing, functional testing",
      "Dead testing, live testing, functional testing",
      "Functional testing, live testing, dead testing",
      "Dead testing, functional testing, live testing"
    ],
    correctAnswerIndex: 1,
    explanation: "The correct sequence is dead testing (continuity, insulation resistance), followed by live testing (polarity, earth fault loop impedance), then functional testing to verify proper operation."
  },
  {
    question: "Which of the following would NOT cause a circuit breaker to trip repeatedly?",
    options: [
      "Short circuit between live and neutral",
      "Too many appliances on the circuit",
      "Open circuit in the neutral conductor",
      "Earth fault from live to exposed metal"
    ],
    correctAnswerIndex: 2,
    explanation: "An open circuit in the neutral conductor would not cause a circuit breaker to trip repeatedly. It might cause other problems like voltage issues, but not overcurrent tripping."
  },
  {
    question: "What safety equipment would be most important when working on a potentially live circuit during fault diagnosis?",
    options: [
      "Safety glasses and gloves",
      "Insulated tools and voltage detector",
      "Hard hat and steel-toe boots",
      "Hearing protection"
    ],
    correctAnswerIndex: 1,
    explanation: "Insulated tools and a voltage detector would be most important when working on a potentially live circuit during fault diagnosis to protect against electric shock."
  },
  {
    question: "During continuity testing of protective conductors, what resistance reading would indicate a potential issue?",
    options: [
      "Less than 0.05 ohms",
      "Exactly 1 ohm",
      "Greater than 1 ohm",
      "0 ohms"
    ],
    correctAnswerIndex: 2,
    explanation: "A resistance reading greater than 1 ohm during continuity testing of protective conductors would generally indicate a potential issue with the continuity of the protective path."
  },
  {
    question: "After repairing a socket outlet circuit, what test would verify correct polarity?",
    options: [
      "Insulation resistance test",
      "Continuity test of the line conductor loop",
      "RCD operation test",
      "Visual inspection of terminal connections"
    ],
    correctAnswerIndex: 1,
    explanation: "A continuity test of the line conductor loop would verify correct polarity by confirming the line (phase) conductor goes to the correct terminal of each socket."
  },
  {
    question: "What is a likely cause of intermittent faults in electrical circuits?",
    options: [
      "Complete short circuits",
      "Solid connections",
      "Loose connections that make and break contact",
      "Broken conductors"
    ],
    correctAnswerIndex: 2,
    explanation: "Loose connections that make and break contact are a common cause of intermittent faults, as they can create temporary open circuits or high resistance connections depending on vibration, temperature, etc."
  },
  {
    question: "When replacing a damaged cable, what is the most important factor to consider?",
    options: [
      "The color of the cable sheath",
      "The cable's length",
      "The correct type, size, and rating of the cable",
      "The manufacturer of the cable"
    ],
    correctAnswerIndex: 2,
    explanation: "The most important factor is selecting the correct type, size, and rating of the cable to ensure it's suitable for the application and complies with regulations."
  },
  {
    question: "What does an RCBO combine?",
    options: [
      "RCD and surge protection",
      "MCB and surge protection",
      "RCD and MCB protection",
      "MCB and isolation switch"
    ],
    correctAnswerIndex: 2,
    explanation: "An RCBO (Residual Current Circuit Breaker with Overcurrent protection) combines the functions of an RCD (detecting earth faults) and an MCB (protecting against overcurrent)."
  },
  {
    question: "What fault is most likely if a customer reports that some lights work but others don't on the same circuit?",
    options: [
      "Short circuit",
      "Earth fault",
      "Open circuit",
      "Overload"
    ],
    correctAnswerIndex: 2,
    explanation: "An open circuit is most likely if some lights work but others don't on the same circuit, indicating a break in the circuit after the working lights but before the non-working ones."
  },
  {
    question: "When would a 'polarity test' be particularly important during fault diagnosis?",
    options: [
      "When investigating flickering lights",
      "When checking for earth faults",
      "When checking socket outlets don't have line and neutral reversed",
      "When measuring earth fault loop impedance"
    ],
    correctAnswerIndex: 2,
    explanation: "A polarity test would be particularly important when checking that socket outlets don't have line and neutral connections reversed, which would be a serious safety issue."
  },
  {
    question: "What is the most likely cause of an electric shower cutting out intermittently?",
    options: [
      "Earth fault",
      "Thermal overload protection activating",
      "RCD nuisance tripping",
      "Short circuit"
    ],
    correctAnswerIndex: 1,
    explanation: "The most likely cause of an electric shower cutting out intermittently is its thermal overload protection activating, possibly due to insufficent water flow or scale buildup."
  },
  {
    question: "What should you check first if multiple circuits are dead in a consumer unit?",
    options: [
      "Each individual MCB",
      "The main switch or supply",
      "RCD protection",
      "Each individual socket"
    ],
    correctAnswerIndex: 1,
    explanation: "If multiple circuits are dead, you should check the main switch or supply first as this would affect all circuits rather than checking individual components."
  },
  {
    question: "Which of these is NOT a common cause of RCD tripping?",
    options: [
      "Moisture ingress causing earth leakage",
      "Damaged cable insulation",
      "Multiple neutral-earth connections",
      "Circuit overload without earth fault"
    ],
    correctAnswerIndex: 3,
    explanation: "Circuit overload without an earth fault would not cause an RCD to trip - this would trigger an MCB but not an RCD, which responds to earth leakage current, not overload."
  },
  {
    question: "What reading on a continuity tester would indicate an open circuit?",
    options: [
      "0 ohms",
      "0.5 ohms",
      "1 ohm",
      "Infinite resistance"
    ],
    correctAnswerIndex: 3,
    explanation: "An infinite resistance reading on a continuity tester would indicate an open circuit, meaning there is no complete path for current to flow."
  },
  {
    question: "What is the best approach to testing a circuit where the fault appears intermittently?",
    options: [
      "Replace the entire circuit",
      "Ignore it if it's working at the time of inspection",
      "Systematic testing combined with physical movement/thermal testing of components",
      "Always replace all terminations"
    ],
    correctAnswerIndex: 2,
    explanation: "For intermittent faults, systematic testing combined with physical movement or thermal testing of components is the best approach, as this may help reproduce the conditions that cause the fault."
  },
  {
    question: "According to BS 7671, what minimum insulation resistance is acceptable for a circuit operating at 230V?",
    options: [
      "0.5 MΩ",
      "1.0 MΩ",
      "2.0 MΩ",
      "10.0 MΩ"
    ],
    correctAnswerIndex: 1,
    explanation: "According to BS 7671, the minimum acceptable insulation resistance for a circuit operating at 230V is 1.0 MΩ (megaohm)."
  },
  {
    question: "What safety feature must be verified before using a voltage indicator on a potentially live circuit?",
    options: [
      "The date of the last calibration",
      "That it's functioning correctly using a proving unit",
      "The battery level if battery-powered",
      "The maximum voltage rating"
    ],
    correctAnswerIndex: 1,
    explanation: "Before using a voltage indicator on a potentially live circuit, you must verify that it's functioning correctly using a proving unit to ensure it will accurately detect the presence of voltage."
  },
  {
    question: "When replacing a consumer unit, what document must be provided to the customer on completion?",
    options: [
      "Minor Electrical Installation Works Certificate",
      "Electrical Installation Certificate",
      "Electrical Installation Condition Report",
      "Visual Inspection Report"
    ],
    correctAnswerIndex: 1,
    explanation: "When replacing a consumer unit, an Electrical Installation Certificate must be provided to the customer on completion as this constitutes a major change to the installation."
  },
  {
    question: "Which of the following would cause a 'voltage drop' across a cable?",
    options: [
      "The cable being too short",
      "The cable being oversized for the load",
      "The cable being undersized for the load",
      "The cable being properly insulated"
    ],
    correctAnswerIndex: 2,
    explanation: "A cable being undersized for the load would cause a significant voltage drop across the cable due to its higher resistance relative to the current being carried."
  },
  {
    question: "What could cause lighting fixtures to flicker?",
    options: [
      "Too low ambient temperature",
      "Loose connections",
      "Circuit correctly sized and installed",
      "New LED bulbs"
    ],
    correctAnswerIndex: 1,
    explanation: "Loose connections are a common cause of lighting fixtures flickering, as they can create intermittent contact that causes fluctuations in power delivery."
  },
  {
    question: "What should be done with the results of post-rectification testing?",
    options: [
      "Keep them private",
      "Document them and provide copies to the client",
      "Only record failures",
      "Only record them if the client asks for documentation"
    ],
    correctAnswerIndex: 1,
    explanation: "The results of post-rectification testing should be documented and copies provided to the client as evidence that the repair was completed successfully and the installation is now safe and compliant."
  }
];
