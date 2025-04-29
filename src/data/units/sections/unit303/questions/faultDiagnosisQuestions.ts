
export const faultDiagnosisQuestions = [
  {
    id: 1,
    question: "What is the correct first step in any fault-finding procedure?",
    options: [
      "Test with a multimeter",
      "Visual inspection",
      "Immediately replace components",
      "Disconnect the power"
    ],
    correctAnswer: "Visual inspection",
    explanation: "A visual inspection is always the first step as it can quickly identify obvious issues like damaged components or loose connections without any tools required."
  },
  {
    id: 2,
    question: "Before carrying out any electrical fault diagnosis, what essential safety procedure must you complete?",
    options: [
      "Safe isolation of the circuit",
      "Inform the client of potential costs",
      "Test your multimeter on another circuit",
      "Put on PPE"
    ],
    correctAnswer: "Safe isolation of the circuit",
    explanation: "Safe isolation is essential before working on any circuit to ensure there is no electrical risk during fault diagnosis."
  },
  {
    id: 3,
    question: "Which test instrument would you use to verify that a circuit has been safely isolated?",
    options: [
      "Continuity tester",
      "Approved voltage indicator",
      "RCD tester",
      "Loop impedance tester"
    ],
    correctAnswer: "Approved voltage indicator",
    explanation: "An approved voltage indicator is the correct instrument to confirm that a circuit is dead and has been properly isolated."
  },
  {
    id: 4,
    question: "What is an 'open circuit' fault?",
    options: [
      "A path with too much resistance",
      "A direct connection between live and neutral",
      "A complete break in the flow path for current",
      "When current flows to earth"
    ],
    correctAnswer: "A complete break in the flow path for current",
    explanation: "An open circuit occurs when there is a break in the continuity of a circuit, preventing current flow."
  },
  {
    id: 5,
    question: "What typical symptom would indicate a high resistance connection?",
    options: [
      "Flickering lights",
      "Circuit breaker tripping instantly",
      "Discoloration or burn marks at connection points",
      "No power at all in the circuit"
    ],
    correctAnswer: "Discoloration or burn marks at connection points",
    explanation: "High resistance connections typically generate heat, which can cause discoloration or burn marks where the connection is poor."
  },
  {
    id: 6,
    question: "Which of the following would most likely cause an RCD to trip?",
    options: [
      "Open circuit in a light fitting",
      "Overloading of a socket circuit",
      "Current leakage to earth",
      "High resistance connection"
    ],
    correctAnswer: "Current leakage to earth",
    explanation: "RCDs (Residual Current Devices) trip when they detect current leakage to earth, which could indicate a fault that poses a shock risk."
  },
  {
    id: 7,
    question: "When testing insulation resistance, what is the minimum acceptable value for a 230V circuit according to BS 7671?",
    options: [
      "0.5 MΩ",
      "1.0 MΩ",
      "2.0 MΩ",
      "10.0 MΩ"
    ],
    correctAnswer: "1.0 MΩ",
    explanation: "According to BS 7671 (IET Wiring Regulations), the minimum insulation resistance for a 230V circuit is 1.0 megaohm."
  },
  {
    id: 8,
    question: "What would you use a proving unit for during fault diagnosis?",
    options: [
      "To test the resistance of a circuit",
      "To verify a voltage indicator is working correctly",
      "To measure current flow",
      "To confirm proper earthing"
    ],
    correctAnswer: "To verify a voltage indicator is working correctly",
    explanation: "A proving unit is used to confirm that a voltage indicator is working correctly before and after use, which is essential for safe isolation procedures."
  },
  {
    id: 9,
    question: "What is a 'short circuit' fault?",
    options: [
      "When current flows through a path of unusually low resistance",
      "When a circuit has no power",
      "When a wire is too short for the application",
      "When current is lower than expected"
    ],
    correctAnswer: "When current flows through a path of unusually low resistance",
    explanation: "A short circuit occurs when current flows through an unintended path of low resistance, often between live and neutral or live and earth."
  },
  {
    id: 10,
    question: "When replacing a component during fault rectification, what should you ensure?",
    options: [
      "The replacement is cheaper than the original",
      "The replacement has the exact same specifications as the original",
      "The replacement is a newer model for future-proofing",
      "The replacement comes with extended warranty"
    ],
    correctAnswer: "The replacement has the exact same specifications as the original",
    explanation: "It's essential to ensure that replacement components have the same specifications as the original to maintain the safety and integrity of the electrical installation."
  },
  {
    id: 11,
    question: "What document must be completed after rectifying a fault and retesting a circuit?",
    options: [
      "A Certificate of Testing",
      "An Electrical Installation Condition Report (EICR)",
      "A Minor Electrical Installation Works Certificate",
      "A Building Control Notification"
    ],
    correctAnswer: "A Minor Electrical Installation Works Certificate",
    explanation: "After rectifying a fault in an existing circuit, a Minor Electrical Installation Works Certificate should be completed to certify the work done."
  },
  {
    id: 12,
    question: "What is the five-step safe isolation procedure?",
    options: [
      "Identify, isolate, secure, verify, prove",
      "Disconnect, check, lock, test, verify",
      "Shut off, lock, test, warn, work",
      "Locate, disconnect, secure, check, confirm"
    ],
    correctAnswer: "Identify, isolate, secure, verify, prove",
    explanation: "The five steps of safe isolation are: identify the circuit, isolate it, secure the isolation, verify it's dead, and prove your test instrument before and after use."
  },
  {
    id: 13,
    question: "What would a high reading on a loop impedance test indicate?",
    options: [
      "The circuit is working perfectly",
      "There is a high resistance fault somewhere in the circuit",
      "The RCD is too sensitive",
      "The circuit is overloaded"
    ],
    correctAnswer: "There is a high resistance fault somewhere in the circuit",
    explanation: "A high loop impedance reading indicates increased resistance in the circuit, which could be due to poor connections, damaged conductors, or incorrect cable sizing."
  },
  {
    id: 14,
    question: "Which tool would be most appropriate for locating a broken wire in a conduit?",
    options: [
      "RCD tester",
      "Voltage indicator",
      "Cable detector",
      "Continuity tester"
    ],
    correctAnswer: "Continuity tester",
    explanation: "A continuity tester is used to check if a complete path exists for current to flow. It will show if there is a break in a wire within conduit."
  },
  {
    id: 15,
    question: "After replacing a faulty accessory, what essential test must you perform?",
    options: [
      "Check the accessory's warranty",
      "Visual inspection only",
      "Continuity of protective conductors",
      "Check with the client if they're satisfied"
    ],
    correctAnswer: "Continuity of protective conductors",
    explanation: "After replacing an accessory, you must verify the continuity of protective conductors to ensure that the protective earthing is intact."
  },
  {
    id: 16,
    question: "What could cause repeated tripping of an MCB on a lighting circuit?",
    options: [
      "A high resistance connection",
      "Using energy-efficient LED bulbs",
      "A short circuit or overload",
      "Inadequate insulation resistance"
    ],
    correctAnswer: "A short circuit or overload",
    explanation: "An MCB (Miniature Circuit Breaker) will trip when it detects a short circuit or when the current exceeds its rated value (overload)."
  },
  {
    id: 17,
    question: "When would earth fault loop impedance testing be required?",
    options: [
      "Only on new installations",
      "After fault rectification to verify safety",
      "Only when an RCD keeps tripping",
      "Only in commercial premises"
    ],
    correctAnswer: "After fault rectification to verify safety",
    explanation: "Earth fault loop impedance testing is required after fault rectification to ensure that the protective devices will operate correctly if a fault occurs."
  },
  {
    id: 18,
    question: "What is the purpose of using a lock-off device during fault diagnosis?",
    options: [
      "To prevent theft of tools",
      "To prevent unauthorized reconnection of the supply",
      "To lock the consumer unit closed",
      "To secure test equipment in place"
    ],
    correctAnswer: "To prevent unauthorized reconnection of the supply",
    explanation: "Lock-off devices are used to prevent unauthorized persons from reconnecting the power while work is being carried out, ensuring safety."
  },
  {
    id: 19,
    question: "Which of these would NOT be categorized as a protective device?",
    options: [
      "MCB",
      "RCD",
      "RCBO",
      "Junction box"
    ],
    correctAnswer: "Junction box",
    explanation: "A junction box is not a protective device; it's used for connecting wires. MCBs, RCDs, and RCBOs are all protective devices designed to disconnect circuits under fault conditions."
  },
  {
    id: 20,
    question: "What is thermal imaging most useful for when diagnosing faults?",
    options: [
      "Detecting open circuits",
      "Finding high resistance connections",
      "Testing RCD operation",
      "Checking earth continuity"
    ],
    correctAnswer: "Finding high resistance connections",
    explanation: "Thermal imaging can detect hotspots caused by high resistance connections, which generate heat due to increased power dissipation."
  },
  {
    id: 21,
    question: "Which step must be completed before carrying out insulation resistance testing?",
    options: [
      "Apply power to the circuit",
      "Test the consumer unit only",
      "Safely isolate the circuit",
      "Remove all light bulbs"
    ],
    correctAnswer: "Safely isolate the circuit",
    explanation: "The circuit must be safely isolated before performing insulation resistance testing to prevent electric shock and ensure accurate results."
  },
  {
    id: 22,
    question: "What is the common symptom of a broken neutral connection?",
    options: [
      "Total loss of power",
      "Fluctuating voltage and flickering lights",
      "Circuit breaker tripping",
      "RCD constantly tripping"
    ],
    correctAnswer: "Fluctuating voltage and flickering lights",
    explanation: "A broken neutral connection often causes fluctuating voltage and flickering lights because the return path for current is compromised."
  },
  {
    id: 23,
    question: "What is the purpose of a proving unit when testing for dead?",
    options: [
      "To provide a live supply for testing",
      "To verify that the voltage indicator works correctly",
      "To check if the installation is faulty",
      "To measure earth loop impedance"
    ],
    correctAnswer: "To verify that the voltage indicator works correctly",
    explanation: "A proving unit is used to verify that a voltage indicator is working correctly before and after testing for safe isolation, ensuring it can reliably detect the absence of voltage."
  },
  {
    id: 24,
    question: "What should you do if you find a damaged accessory during fault diagnosis?",
    options: [
      "Apply insulating tape to cover the damage",
      "Leave it in place if it's still working",
      "Replace it with an equivalent component",
      "Only replace it if the client approves the cost"
    ],
    correctAnswer: "Replace it with an equivalent component",
    explanation: "Damaged accessories should always be replaced with equivalent components that meet the same specifications to maintain safety and compliance."
  },
  {
    id: 25,
    question: "Which of these is most important to record when documenting a fault repair?",
    options: [
      "How long the repair took",
      "The cost of replacement parts",
      "The nature of the fault and action taken",
      "The name of the person who reported the fault"
    ],
    correctAnswer: "The nature of the fault and action taken",
    explanation: "Documenting the nature of the fault and the action taken is critical for future reference, maintenance records, and compliance with regulations."
  },
  {
    id: 26,
    question: "What might cause a circuit to have power but connected equipment doesn't work?",
    options: [
      "Overcurrent protection has activated",
      "A broken neutral connection",
      "The circuit is overloaded",
      "The voltage is too high"
    ],
    correctAnswer: "A broken neutral connection",
    explanation: "A broken neutral connection can result in a situation where voltage is present but equipment doesn't work properly because the circuit is incomplete."
  },
  {
    id: 27,
    question: "Which test would confirm whether an RCD is operating correctly?",
    options: [
      "Insulation resistance test",
      "Continuity test",
      "RCD functional test using the test button",
      "Voltage drop test"
    ],
    correctAnswer: "RCD functional test using the test button",
    explanation: "The test button on an RCD creates a deliberate imbalance to verify that the RCD operates correctly by tripping within the specified time."
  },
  {
    id: 28,
    question: "If a client reports intermittent power in multiple rooms, what should you check first?",
    options: [
      "Circuit breakers in the consumer unit",
      "Main incoming supply connections",
      "Individual socket outlets",
      "Light fittings"
    ],
    correctAnswer: "Main incoming supply connections",
    explanation: "Intermittent power affecting multiple rooms suggests an issue with the main incoming supply connections, which should be checked first."
  },
  {
    id: 29,
    question: "What is the main cause of high resistance connections?",
    options: [
      "Using the wrong type of cable",
      "Loose, corroded, or improperly made connections",
      "Excessive current flow",
      "Incorrect cable sizing"
    ],
    correctAnswer: "Loose, corroded, or improperly made connections",
    explanation: "High resistance connections are typically caused by loose, corroded, or improperly made connections that increase resistance and generate heat."
  },
  {
    id: 30,
    question: "What should be completed after a fault repair to confirm compliance?",
    options: [
      "Visual inspection only",
      "Appropriate electrical tests and certification",
      "Client satisfaction form",
      "Equipment warranty registration"
    ],
    correctAnswer: "Appropriate electrical tests and certification",
    explanation: "After a fault repair, appropriate electrical tests must be conducted and certified to confirm that the installation complies with BS 7671 regulations."
  },
  {
    id: 31,
    question: "What is a 'nuisance tripping' of an RCD?",
    options: [
      "When an RCD trips due to an actual fault",
      "When an RCD trips without an apparent fault condition",
      "When the test button doesn't make the RCD trip",
      "When multiple circuits are disconnected by one RCD"
    ],
    correctAnswer: "When an RCD trips without an apparent fault condition",
    explanation: "Nuisance tripping refers to situations where an RCD trips without an obvious fault condition, which could be due to cumulative leakage currents or transient issues."
  },
  {
    id: 32,
    question: "Which of these could cause an MCB to trip repeatedly?",
    options: [
      "Low voltage supply",
      "Circuit overload or short circuit",
      "High resistance connections",
      "Loose neutral connections"
    ],
    correctAnswer: "Circuit overload or short circuit",
    explanation: "MCBs trip repeatedly when there is either a persistent overload (too much current) or a short circuit in the protected circuit."
  },
  {
    id: 33,
    question: "What is the recommended test voltage for insulation resistance testing of a 230V installation?",
    options: [
      "230V",
      "400V",
      "500V",
      "1000V"
    ],
    correctAnswer: "500V",
    explanation: "For a 230V installation, the recommended test voltage for insulation resistance testing is 500V DC."
  },
  {
    id: 34,
    question: "Which safety measure is essential when working on metal consumer units?",
    options: [
      "Wearing rubber gloves",
      "Using insulated tools",
      "Working during daylight hours",
      "Having an assistant present"
    ],
    correctAnswer: "Using insulated tools",
    explanation: "When working on metal consumer units, using insulated tools is essential to prevent short circuits and electric shocks."
  },
  {
    id: 35,
    question: "What is the first step in diagnosing why an RCD trips immediately when reset?",
    options: [
      "Replace the RCD",
      "Disconnect all circuits and reconnect them one by one",
      "Check the supply voltage",
      "Call the distribution network operator"
    ],
    correctAnswer: "Disconnect all circuits and reconnect them one by one",
    explanation: "The first diagnostic step for an RCD that trips immediately is to disconnect all circuits and reconnect them one by one to identify which circuit has the fault."
  },
  {
    id: 36,
    question: "What could cause a lighting circuit to operate but with dim lights?",
    options: [
      "Incorrect lamp type",
      "Voltage drop due to poor connections or undersized cables",
      "RCD nuisance tripping",
      "Too many lights on the circuit"
    ],
    correctAnswer: "Voltage drop due to poor connections or undersized cables",
    explanation: "Dim lights are often caused by voltage drop resulting from high resistance in the circuit, typically due to poor connections or undersized cables."
  },
  {
    id: 37,
    question: "Which test instrument would you use to locate the position of a buried cable?",
    options: [
      "Voltage indicator",
      "Cable detector/tracer",
      "RCD tester",
      "Multimeter"
    ],
    correctAnswer: "Cable detector/tracer",
    explanation: "A cable detector or tracer is specifically designed to locate the position of buried cables without damaging them."
  },
  {
    id: 38,
    question: "When is a Minor Electrical Installation Works Certificate required?",
    options: [
      "For all electrical work",
      "For alterations or additions to an existing circuit",
      "Only for new installations",
      "Only for work costing over a certain amount"
    ],
    correctAnswer: "For alterations or additions to an existing circuit",
    explanation: "A Minor Electrical Installation Works Certificate is required for alterations or additions to an existing circuit, including fault repairs."
  },
  {
    id: 39,
    question: "What does it mean if a circuit breaker trips with a 'click' sound rather than tripping silently?",
    options: [
      "The breaker is faulty",
      "It indicates a short circuit rather than an overload",
      "The circuit has too many devices connected",
      "The breaker is old and needs replacing"
    ],
    correctAnswer: "It indicates a short circuit rather than an overload",
    explanation: "When a circuit breaker trips with an audible 'click', it typically indicates a short circuit fault, while a silent trip often indicates an overload condition."
  },
  {
    id: 40,
    question: "What is a 'polarity test'?",
    options: [
      "Testing that the neutral is at earth potential",
      "Checking that live and neutral are connected correctly",
      "Making sure the voltage is correct",
      "Verifying phase sequence in three-phase systems"
    ],
    correctAnswer: "Checking that live and neutral are connected correctly",
    explanation: "A polarity test verifies that live (phase) and neutral conductors are connected to the correct terminals throughout the installation."
  },
  {
    id: 41,
    question: "What is the primary safety risk associated with a broken earth connection?",
    options: [
      "Circuit won't work",
      "Fire hazard",
      "Electric shock hazard",
      "Damage to equipment"
    ],
    correctAnswer: "Electric shock hazard",
    explanation: "A broken earth connection creates an electric shock hazard as fault current cannot flow to earth, leaving metal parts potentially live if a fault occurs."
  },
  {
    id: 42,
    question: "Which of these is NOT a typical sign of electrical overheating?",
    options: [
      "Discolored switches or sockets",
      "Burning smell",
      "Dim lights when appliances are used",
      "Melted plastic on accessories"
    ],
    correctAnswer: "Dim lights when appliances are used",
    explanation: "Dim lights when appliances are used typically indicates voltage drop due to high impedance, not overheating. The other options are signs of overheating."
  },
  {
    id: 43,
    question: "What is the purpose of using warning signs during fault diagnosis?",
    options: [
      "To impress the client",
      "To warn others not to reconnect the supply",
      "To identify the electrician working on the system",
      "To indicate a permanent fault"
    ],
    correctAnswer: "To warn others not to reconnect the supply",
    explanation: "Warning signs are used to alert others that work is in progress and to prevent them from reconnecting the supply, which could create a safety hazard."
  },
  {
    id: 44,
    question: "Which of these is the most likely cause of an RCD tripping only during rainy weather?",
    options: [
      "Water ingress affecting outdoor equipment",
      "Higher electricity demand",
      "Expansion of conductors due to humidity",
      "Static electricity buildup"
    ],
    correctAnswer: "Water ingress affecting outdoor equipment",
    explanation: "RCDs tripping during rainy weather typically indicates water ingress into outdoor equipment, creating earth leakage paths."
  },
  {
    id: 45,
    question: "What is the correct sequence for safe isolation?",
    options: [
      "Identify, test, isolate, secure, verify",
      "Identify, isolate, secure, test, verify",
      "Test, identify, isolate, verify, secure",
      "Isolate, identify, secure, test, verify"
    ],
    correctAnswer: "Identify, isolate, secure, test, verify",
    explanation: "The correct sequence is: identify the circuit, isolate it, secure the isolation, test to verify it's dead, and verify your test instrument works."
  },
  {
    id: 46,
    question: "What does a 'megger' test measure?",
    options: [
      "Current flow",
      "Voltage levels",
      "Insulation resistance",
      "Earth loop impedance"
    ],
    correctAnswer: "Insulation resistance",
    explanation: "A 'megger' test (using an insulation resistance tester) measures the resistance of the insulation between conductors or between conductors and earth."
  },
  {
    id: 47,
    question: "Which of these would NOT help in diagnosing an intermittent fault?",
    options: [
      "Interview the user about when the fault occurs",
      "Monitor the circuit over time",
      "Replace components one by one",
      "Visual inspection only"
    ],
    correctAnswer: "Visual inspection only",
    explanation: "Visual inspection alone is unlikely to diagnose an intermittent fault, as these faults often occur under specific conditions that may not be visible."
  },
  {
    id: 48,
    question: "What should you do after identifying a safety issue beyond the original fault reported?",
    options: [
      "Ignore it as it wasn't part of the original job",
      "Fix it without telling the client",
      "Document it and inform the client",
      "Only fix it if it's simple"
    ],
    correctAnswer: "Document it and inform the client",
    explanation: "Any additional safety issues should be documented and the client informed, even if they were not part of the original reported fault."
  },
  {
    id: 49,
    question: "What is the purpose of an Electrical Installation Condition Report (EICR)?",
    options: [
      "To certify new installations only",
      "To assess the condition of an existing electrical installation",
      "To record minor works",
      "To document consumer unit replacements only"
    ],
    correctAnswer: "To assess the condition of an existing electrical installation",
    explanation: "An EICR is used to assess and document the condition of an existing electrical installation, identifying any defects or departures from standards."
  },
  {
    id: 50,
    question: "What do the codes C1, C2, and C3 indicate on an Electrical Installation Condition Report?",
    options: [
      "Different types of circuits",
      "Different technician qualification levels",
      "Different levels of defect severity",
      "Different testing methods used"
    ],
    correctAnswer: "Different levels of defect severity",
    explanation: "C1, C2, and C3 codes indicate different levels of defect severity: C1 (danger present), C2 (potentially dangerous), and C3 (improvement recommended)."
  }
];
