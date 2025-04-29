
export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const inspectionTestingQuestions = [
  {
    id: 1,
    text: "What is the correct sequence for electrical testing?",
    options: [
      "Live testing, then dead testing, then visual inspection",
      "Visual inspection, then dead testing, then live testing",
      "Dead testing, then live testing, then visual inspection",
      "Visual inspection, then live testing, then dead testing"
    ],
    correctAnswer: "Visual inspection, then dead testing, then live testing",
    explanation: "The correct sequence is: visual inspection first to identify any obvious issues, followed by dead testing with power off for safety, and finally live testing when necessary."
  },
  {
    id: 2,
    text: "What does the acronym CPC stand for in electrical installations?",
    options: [
      "Circuit Protection Component",
      "Circuit Protective Conductor",
      "Complete Power Connection",
      "Current Phase Controller"
    ],
    correctAnswer: "Circuit Protective Conductor",
    explanation: "CPC stands for Circuit Protective Conductor, which is the protective earthing conductor in an electrical installation."
  },
  {
    id: 3,
    text: "Which test should be performed first in the sequence of dead tests?",
    options: [
      "Insulation resistance test",
      "Earth fault loop impedance test",
      "Continuity of protective conductors",
      "Polarity test"
    ],
    correctAnswer: "Continuity of protective conductors",
    explanation: "Continuity of protective conductors should be tested first to ensure the earth path is complete before proceeding with other tests."
  },
  {
    id: 4,
    text: "What is the minimum acceptable insulation resistance for a 230V circuit according to BS 7671?",
    options: [
      "0.5 MΩ",
      "1.0 MΩ",
      "2.0 MΩ",
      "0.1 MΩ"
    ],
    correctAnswer: "1.0 MΩ",
    explanation: "For circuits up to 500V (including 230V installations), the minimum acceptable insulation resistance value is 1.0 MΩ according to BS 7671."
  },
  {
    id: 5,
    text: "What does an RCD test verify?",
    options: [
      "The resistance of the circuit",
      "The trip time and current of the device",
      "The polarity of the installation",
      "The continuity of conductors"
    ],
    correctAnswer: "The trip time and current of the device",
    explanation: "An RCD test verifies both the trip time and the trip current of the RCD to ensure it will disconnect quickly enough to prevent electric shock."
  },
  {
    id: 6,
    text: "What type of test instrument is used to measure earth fault loop impedance?",
    options: [
      "Multimeter",
      "Insulation resistance tester",
      "Loop impedance tester",
      "Continuity tester"
    ],
    correctAnswer: "Loop impedance tester",
    explanation: "A loop impedance tester (often part of a multifunction tester) is specifically designed to measure earth fault loop impedance."
  },
  {
    id: 7,
    text: "What is the purpose of a polarity test?",
    options: [
      "To check the earth resistance",
      "To ensure switches and fuses are connected in the line conductor",
      "To check the conductor size",
      "To verify insulation integrity"
    ],
    correctAnswer: "To ensure switches and fuses are connected in the line conductor",
    explanation: "Polarity testing ensures that all switches and protective devices are connected in the line (live) conductor, and that the line, neutral, and earth are correctly connected throughout the installation."
  },
  {
    id: 8,
    text: "What is the primary purpose of an Electrical Installation Certificate?",
    options: [
      "To record electrical equipment purchased",
      "To verify the installation meets safety standards and regulations",
      "To provide a warranty for the electrical work",
      "To list the electricians who worked on the project"
    ],
    correctAnswer: "To verify the installation meets safety standards and regulations",
    explanation: "An Electrical Installation Certificate is a formal declaration that the new installation, or alteration to an existing installation, is safe and meets the requirements of BS 7671."
  },
  {
    id: 9,
    text: "When performing a dead test, what must be done first?",
    options: [
      "Connect the test meter",
      "Isolate the circuit and prove the supply is disconnected",
      "Call the client",
      "Complete the paperwork"
    ],
    correctAnswer: "Isolate the circuit and prove the supply is disconnected",
    explanation: "Safety is paramount - before conducting any dead testing, the circuit must be isolated and proven dead using a suitable voltage indicator."
  },
  {
    id: 10,
    text: "What is a Prospective Fault Current (PFC)?",
    options: [
      "The current that would flow in a circuit if a fault occurred",
      "The maximum current a circuit can safely carry",
      "The current flowing in a circuit under normal conditions",
      "The leakage current through insulation"
    ],
    correctAnswer: "The current that would flow in a circuit if a fault occurred",
    explanation: "PFC is the maximum current that would flow in the event of a short circuit or fault, used to ensure protective devices have adequate breaking capacity."
  },
  {
    id: 11,
    text: "What should be recorded on an initial verification schedule?",
    options: [
      "Only failed test results",
      "All test results for the installation",
      "Only visual inspection results",
      "Only live test results"
    ],
    correctAnswer: "All test results for the installation",
    explanation: "The initial verification schedule must record all test results from the inspection and testing process, including visual inspection, dead tests, and live tests."
  },
  {
    id: 12,
    text: "What is the primary purpose of an earth continuity test?",
    options: [
      "To check the neutral conductor",
      "To ensure the protective conductor provides a continuous path",
      "To verify insulation quality",
      "To check circuit voltage"
    ],
    correctAnswer: "To ensure the protective conductor provides a continuous path",
    explanation: "The earth continuity test verifies that the protective conductor provides a continuous low-resistance path from all exposed conductive parts to the main earthing terminal."
  },
  {
    id: 13,
    text: "Which test voltage should be used when testing insulation resistance of a 230V circuit?",
    options: [
      "230V",
      "500V",
      "1000V",
      "50V"
    ],
    correctAnswer: "500V",
    explanation: "For circuits with nominal voltages up to 500V (including 230V installations), a test voltage of 500V DC should be used when testing insulation resistance."
  },
  {
    id: 14,
    text: "What should be verified during a visual inspection of a consumer unit?",
    options: [
      "The color of the unit",
      "The manufacturer's warranty details",
      "Correct selection and setting of protective devices",
      "The serial number"
    ],
    correctAnswer: "Correct selection and setting of protective devices",
    explanation: "During visual inspection of a consumer unit, one must verify the correct selection and setting of protective devices, proper connection of conductors, presence of appropriate circuit identification, and security of fixings."
  },
  {
    id: 15,
    text: "What is the recommended maximum value for earth electrode resistance?",
    options: [
      "1 ohm",
      "10 ohms",
      "100 ohms",
      "1000 ohms"
    ],
    correctAnswer: "10 ohms",
    explanation: "The recommended maximum value for earth electrode resistance is typically 10 ohms, although specific installations might require lower values."
  },
  {
    id: 16,
    text: "What type of test is used to verify the operation of RCDs?",
    options: [
      "Insulation resistance test",
      "Continuity test",
      "Trip time test",
      "Polarity test"
    ],
    correctAnswer: "Trip time test",
    explanation: "RCDs are verified using trip time tests at their rated tripping current and typically at 50% and 5 times rated current to ensure they operate within the required time limits."
  },
  {
    id: 17,
    text: "Why is it important to verify the polarity of socket outlets?",
    options: [
      "To make them look uniform",
      "To ensure proper connection of line, neutral and earth conductors",
      "To check their color",
      "To verify their brand"
    ],
    correctAnswer: "To ensure proper connection of line, neutral and earth conductors",
    explanation: "Verifying socket outlet polarity ensures that line, neutral, and earth conductors are properly connected, which is essential for the safe operation of connected equipment and effective operation of protective devices."
  },
  {
    id: 18,
    text: "What happens if the resistance of a protective conductor is too high?",
    options: [
      "The circuit will work more efficiently",
      "The protective device may not operate correctly in a fault condition",
      "Energy consumption will decrease",
      "Circuit voltage will increase"
    ],
    correctAnswer: "The protective device may not operate correctly in a fault condition",
    explanation: "If the resistance of a protective conductor is too high, sufficient fault current may not flow to operate the protective device quickly enough, creating a safety hazard."
  },
  {
    id: 19,
    text: "Which document is used to record minor electrical installation works?",
    options: [
      "Electrical Installation Certificate",
      "Minor Electrical Installation Works Certificate",
      "Periodic Inspection Report",
      "Visual Inspection Certificate"
    ],
    correctAnswer: "Minor Electrical Installation Works Certificate",
    explanation: "The Minor Electrical Installation Works Certificate is used for recording and certifying small alterations or additions to an electrical installation."
  },
  {
    id: 20,
    text: "What safety measure should always be taken before beginning inspection and testing?",
    options: [
      "Taking a photo of the installation",
      "Notifying the building owner",
      "Isolating the supply and locking off",
      "Checking the weather forecast"
    ],
    correctAnswer: "Isolating the supply and locking off",
    explanation: "Safety first - before beginning inspection and testing, the supply should be isolated and securely locked off to prevent accidental re-energization."
  },
  {
    id: 21,
    text: "What is the purpose of the 'test button' on an RCD?",
    options: [
      "To reset the device",
      "To simulate a fault condition and check the mechanical operation",
      "To boost the sensitivity",
      "To check the power supply"
    ],
    correctAnswer: "To simulate a fault condition and check the mechanical operation",
    explanation: "The test button on an RCD simulates a fault condition to check that the mechanical trip mechanism works, but does not verify the trip time or current."
  },
  {
    id: 22,
    text: "What information should be recorded when testing the continuity of ring final circuit conductors?",
    options: [
      "Only the highest resistance value",
      "The time taken to perform the test",
      "R1+R2 values for each socket",
      "The resistance of each conductor (L-L, N-N, and CPC-CPC) measured at the distribution board"
    ],
    correctAnswer: "The resistance of each conductor (L-L, N-N, and CPC-CPC) measured at the distribution board",
    explanation: "When testing ring final circuit continuity, the resistance of each conductor loop (line-line, neutral-neutral, and CPC-CPC) should be measured and recorded to verify the ring is complete."
  },
  {
    id: 23,
    text: "Why is it important to 'test the tester' before and after use?",
    options: [
      "To check the battery level",
      "To ensure the test instrument is working correctly",
      "To calibrate the device",
      "To record the serial number"
    ],
    correctAnswer: "To ensure the test instrument is working correctly",
    explanation: "Testing the tester before and after use on a known live source verifies that the instrument was functioning correctly throughout the testing procedure."
  },
  {
    id: 24,
    text: "What does a high reading on an insulation resistance test indicate?",
    options: [
      "Poor insulation",
      "Good insulation",
      "Short circuit",
      "Open circuit"
    ],
    correctAnswer: "Good insulation",
    explanation: "A high reading (in megohms) on an insulation resistance test indicates good insulation between conductors or between conductors and earth."
  },
  {
    id: 25,
    text: "Which of these is NOT a type of Residual Current Device?",
    options: [
      "RCBO",
      "RCCB",
      "RCCD",
      "SRCD"
    ],
    correctAnswer: "RCCD",
    explanation: "RCCD is not a standard type of RCD. Common types include RCCB (Residual Current Circuit Breaker), RCBO (Residual Current Breaker with Overcurrent protection), and SRCD (Socket Outlet RCD)."
  },
  {
    id: 26,
    text: "What is the maximum disconnection time for a 32A circuit in a TN system?",
    options: [
      "0.2 seconds",
      "0.4 seconds",
      "5 seconds",
      "10 seconds"
    ],
    correctAnswer: "0.4 seconds",
    explanation: "According to BS 7671, for a final circuit not exceeding 32A in a TN system, the maximum disconnection time is 0.4 seconds."
  },
  {
    id: 27,
    text: "What is being tested during a functional test?",
    options: [
      "The appearance of the installation",
      "The proper operation of assemblies, such as switchgear and controls",
      "The resistance values",
      "The age of components"
    ],
    correctAnswer: "The proper operation of assemblies, such as switchgear and controls",
    explanation: "Functional testing verifies that assembled equipment like switchgear, controls, and interlocks operate correctly as intended."
  },
  {
    id: 28,
    text: "When is commissioning of an electrical installation complete?",
    options: [
      "When all visual inspections are done",
      "When the client pays the invoice",
      "When all required tests, inspections, and documentation are complete and satisfactory",
      "When power is turned on"
    ],
    correctAnswer: "When all required tests, inspections, and documentation are complete and satisfactory",
    explanation: "Commissioning is complete when all required tests and inspections have been carried out with satisfactory results, and all documentation has been completed and handed over to the client."
  },
  {
    id: 29,
    text: "What is the purpose of establishing the phase sequence in a three-phase system?",
    options: [
      "To make installation faster",
      "To ensure motors rotate in the correct direction",
      "To reduce energy consumption",
      "To improve circuit voltage"
    ],
    correctAnswer: "To ensure motors rotate in the correct direction",
    explanation: "Phase sequence testing in three-phase systems ensures that motors and other equipment requiring a specific phase sequence will operate in the correct direction."
  },
  {
    id: 30,
    text: "What does a test for earth electrode resistance measure?",
    options: [
      "The resistance between the electrode and the general mass of earth",
      "The resistance of the electrode itself",
      "The resistance of the earth wire",
      "The voltage at the electrode"
    ],
    correctAnswer: "The resistance between the electrode and the general mass of earth",
    explanation: "An earth electrode resistance test measures the resistance between the earth electrode and the general mass of earth, which is crucial for effective earthing systems."
  },
  {
    id: 31,
    text: "What is the recommended test current for continuity testing of protective conductors?",
    options: [
      "1 mA",
      "10 mA",
      "100 mA",
      "200 mA"
    ],
    correctAnswer: "200 mA",
    explanation: "A test current of at least 200 mA is recommended for continuity testing of protective conductors to ensure accurate resistance measurements."
  },
  {
    id: 32,
    text: "What safety measure is essential when testing insulation resistance?",
    options: [
      "Wearing gloves",
      "Ensuring the circuit is isolated",
      "Having a first aid kit nearby",
      "Turning off the lights"
    ],
    correctAnswer: "Ensuring the circuit is isolated",
    explanation: "The circuit must be isolated before conducting insulation resistance tests to prevent damage to equipment and ensure safety."
  },
  {
    id: 33,
    text: "What document is required when making an alteration to an existing installation?",
    options: [
      "Minor Electrical Installation Works Certificate",
      "Electrical Installation Certificate",
      "Periodic Inspection Report",
      "Design Specification"
    ],
    correctAnswer: "Minor Electrical Installation Works Certificate",
    explanation: "For minor alterations to an existing installation that do not include a new circuit, a Minor Electrical Installation Works Certificate is required."
  },
  {
    id: 34,
    text: "When should external earth fault loop impedance (Ze) be measured?",
    options: [
      "Only during periodic inspection",
      "Only when installing a new consumer unit",
      "When connecting a new installation or when carrying out a periodic inspection",
      "Only during power outages"
    ],
    correctAnswer: "When connecting a new installation or when carrying out a periodic inspection",
    explanation: "External earth fault loop impedance (Ze) should be measured when connecting a new installation and during periodic inspection to ensure proper protection."
  },
  {
    id: 35,
    text: "What test is used to locate a fault on a concealed cable?",
    options: [
      "Insulation resistance test",
      "Continuity test with accurate ohmmeter",
      "Cable detection equipment and insulation test",
      "Polarity test"
    ],
    correctAnswer: "Cable detection equipment and insulation test",
    explanation: "Locating faults on concealed cables typically requires cable detection equipment to trace the cable route, followed by insulation testing to pinpoint the fault location."
  },
  {
    id: 36,
    text: "What is the significance of Zs in electrical testing?",
    options: [
      "It represents the line conductor impedance",
      "It represents the earth fault loop impedance",
      "It represents the neutral conductor impedance",
      "It represents the phase angle"
    ],
    correctAnswer: "It represents the earth fault loop impedance",
    explanation: "Zs represents the earth fault loop impedance, which is crucial for verifying that protective devices will operate within required disconnection times."
  },
  {
    id: 37,
    text: "Who can complete an Electrical Installation Certificate?",
    options: [
      "Anyone who helped with the installation",
      "Only the client",
      "A competent person with appropriate knowledge of the design, specification, construction, and testing",
      "Any electrical worker"
    ],
    correctAnswer: "A competent person with appropriate knowledge of the design, specification, construction, and testing",
    explanation: "An Electrical Installation Certificate must be completed by a competent person with appropriate knowledge of the design, specification, construction, and testing of the installation."
  },
  {
    id: 38,
    text: "Why should all electronic devices be disconnected before insulation resistance testing?",
    options: [
      "To make the test easier",
      "To avoid damaging them with the high test voltage",
      "To save time",
      "It's not necessary to disconnect them"
    ],
    correctAnswer: "To avoid damaging them with the high test voltage",
    explanation: "Electronic devices should be disconnected before insulation resistance testing because the high test voltage (typically 500V) can damage sensitive electronic components."
  },
  {
    id: 39,
    text: "What should be checked during a polarity test of a lighting circuit?",
    options: [
      "That the center contact of the lampholder is connected to the neutral",
      "That the center contact of the lampholder is connected to the line conductor",
      "That the lamp works",
      "That the correct wattage bulb is installed"
    ],
    correctAnswer: "That the center contact of the lampholder is connected to the line conductor",
    explanation: "In a polarity test of a lighting circuit, it should be verified that the center contact of the lampholder is connected to the line conductor for safety reasons."
  },
  {
    id: 40,
    text: "What is the function of an Insulation Monitoring Device (IMD)?",
    options: [
      "To measure circuit voltage",
      "To continuously monitor insulation resistance between active conductors and earth",
      "To test the resistance of cables",
      "To check the polarity of outlets"
    ],
    correctAnswer: "To continuously monitor insulation resistance between active conductors and earth",
    explanation: "An Insulation Monitoring Device continuously monitors the insulation resistance between active conductors and earth, providing early warning of insulation degradation."
  },
  {
    id: 41,
    text: "What is the first action to take when investigating a reported electrical fault?",
    options: [
      "Replace components immediately",
      "Talk to the client about the symptoms",
      "Turn off the supply",
      "Call a supervisor"
    ],
    correctAnswer: "Talk to the client about the symptoms",
    explanation: "When investigating a fault, first talk to the client to gather information about the symptoms, which helps in diagnosing the problem efficiently."
  },
  {
    id: 42,
    text: "What is a 'dead test'?",
    options: [
      "Testing equipment that has failed",
      "Testing conducted with the circuit energized",
      "Testing conducted with the circuit isolated from the supply",
      "Testing at the end of a project"
    ],
    correctAnswer: "Testing conducted with the circuit isolated from the supply",
    explanation: "A dead test is any test conducted with the circuit completely isolated from the supply, such as continuity and insulation resistance tests."
  },
  {
    id: 43,
    text: "What verification is made to the consumer unit during an installation inspection?",
    options: [
      "The manufacturer's reputation",
      "The cost of the unit",
      "The color of the enclosure",
      "That circuit protective devices are correctly rated and installed"
    ],
    correctAnswer: "That circuit protective devices are correctly rated and installed",
    explanation: "During inspection, the consumer unit is checked to ensure circuit protective devices are correctly rated and installed according to the design and regulations."
  },
  {
    id: 44,
    text: "Which test would identify if the CPC and neutral conductors are transposed?",
    options: [
      "Insulation resistance test",
      "Polarity test",
      "Earth fault loop impedance test",
      "RCD test"
    ],
    correctAnswer: "Polarity test",
    explanation: "A polarity test would identify if the CPC and neutral conductors are transposed, which is a serious wiring fault that must be corrected."
  },
  {
    id: 45,
    text: "What is the main purpose of a verification schedule?",
    options: [
      "To calculate the cost of the job",
      "To record all test results for the installation",
      "To satisfy the insurance company",
      "To list the tools used"
    ],
    correctAnswer: "To record all test results for the installation",
    explanation: "A verification schedule provides a comprehensive record of all test results from the inspection and testing process."
  },
  {
    id: 46,
    text: "What is the maximum disconnection time for a 230V circuit in a TT system?",
    options: [
      "0.2 seconds",
      "0.4 seconds",
      "5 seconds",
      "0.2 seconds for socket outlets, 0.4 seconds for fixed equipment"
    ],
    correctAnswer: "0.2 seconds",
    explanation: "In a TT system, the maximum disconnection time for a 230V circuit is 0.2 seconds according to BS 7671."
  },
  {
    id: 47,
    text: "What is the correct method for testing RCD operation?",
    options: [
      "Using a voltage tester",
      "Using an RCD tester at various test currents",
      "Using an insulation resistance tester",
      "Using a continuity tester"
    ],
    correctAnswer: "Using an RCD tester at various test currents",
    explanation: "RCD operation is tested using an RCD tester that applies various test currents (typically 50%, 100%, and 500% of rated tripping current) to verify correct operation and trip times."
  },
  {
    id: 48,
    text: "What does a continuity test on a ring final circuit check?",
    options: [
      "That the fuse is working",
      "That voltage is present",
      "That the ring is complete with no breaks",
      "The color of the wires"
    ],
    correctAnswer: "That the ring is complete with no breaks",
    explanation: "A continuity test on a ring final circuit checks that the ring is complete with no breaks in the line, neutral, or protective conductors."
  },
  {
    id: 49,
    text: "Why should the line and neutral connections be isolated from each other during insulation resistance testing?",
    options: [
      "To save time",
      "To prevent damage to the meter",
      "To avoid parallel paths that could affect the reading",
      "It's not necessary to isolate them"
    ],
    correctAnswer: "To avoid parallel paths that could affect the reading",
    explanation: "Line and neutral connections should be isolated from each other during insulation resistance testing to avoid parallel paths that could give misleadingly low resistance readings."
  },
  {
    id: 50,
    text: "What is the role of an 'Approved Electrician' in the inspection and testing process?",
    options: [
      "They are only allowed to do visual inspections",
      "They can complete all tests but cannot sign certificates",
      "They can inspect, test, and certify installations",
      "They only work on industrial installations"
    ],
    correctAnswer: "They can inspect, test, and certify installations",
    explanation: "An Approved Electrician has the competence and authorization to inspect, test, and certify electrical installations in accordance with BS 7671."
  }
];
