
// Create our own Question interface that includes the explanation field
export interface ElectricalInstallationQuestion {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const electricalInstallationsQuestions: ElectricalInstallationQuestion[] = [
  {
    id: 1,
    text: "What is the main purpose of a consumer unit in an electrical installation?",
    options: [
      "To increase the voltage for high-power devices",
      "To distribute and protect electrical circuits in a building",
      "To convert AC voltage to DC voltage",
      "To store electrical energy during power outages"
    ],
    correctAnswer: "To distribute and protect electrical circuits in a building",
    explanation: "The consumer unit is the central hub of an electrical installation that distributes electricity to different circuits and contains protective devices to ensure safety."
  },
  {
    id: 2,
    text: "Which component provides protection against electric shock caused by earth leakage currents?",
    options: [
      "MCB (Miniature Circuit Breaker)",
      "RCD (Residual Current Device)",
      "Main Switch",
      "Surge Protector"
    ],
    correctAnswer: "RCD (Residual Current Device)",
    explanation: "RCDs detect imbalances between live and neutral currents, indicating a potential earth leakage, and disconnect the power to prevent electric shock."
  },
  {
    id: 3,
    text: "What cable size is typically used for standard lighting circuits in domestic installations?",
    options: [
      "1.0mm² or 1.5mm²",
      "2.5mm²",
      "4.0mm²",
      "6.0mm²"
    ],
    correctAnswer: "1.0mm² or 1.5mm²",
    explanation: "Lighting circuits typically carry lower currents than power circuits and therefore use smaller cable sizes like 1.0mm² or 1.5mm²."
  },
  {
    id: 4,
    text: "What is the maximum floor area that can be covered by a 32A ring final circuit using 2.5mm² cable?",
    options: [
      "50m²",
      "75m²",
      "100m²",
      "150m²"
    ],
    correctAnswer: "100m²",
    explanation: "According to regulations, a 32A ring final circuit using 2.5mm² cable can serve a maximum floor area of 100m²."
  },
  {
    id: 5,
    text: "What type of circuit is typically used for socket outlets in UK domestic installations?",
    options: [
      "Lighting circuit with 6A protection",
      "Radial circuit with 20A protection",
      "Ring final circuit with 32A protection",
      "Dedicated circuit with 16A protection"
    ],
    correctAnswer: "Ring final circuit with 32A protection",
    explanation: "In the UK, socket outlets are typically wired on ring final circuits protected by a 32A device, which forms a complete loop from and back to the consumer unit."
  },
  {
    id: 6,
    text: "What does an RCBO combine in a single device?",
    options: [
      "Residual current protection and overcurrent protection",
      "Surge protection and overvoltage protection",
      "Main switch and circuit isolation",
      "Earth bonding and circuit testing"
    ],
    correctAnswer: "Residual current protection and overcurrent protection",
    explanation: "An RCBO (Residual Current Breaker with Overload) combines the functions of an RCD and an MCB in a single device, providing both earth leakage and overcurrent protection."
  },
  {
    id: 7,
    text: "What is the purpose of main equipotential bonding in an electrical installation?",
    options: [
      "To increase the current-carrying capacity of circuits",
      "To connect metallic parts to the main earthing terminal",
      "To isolate the installation from the supply",
      "To reduce voltage fluctuations"
    ],
    correctAnswer: "To connect metallic parts to the main earthing terminal",
    explanation: "Main equipotential bonding connects extraneous conductive parts (like water pipes) to the main earthing terminal to ensure they remain at the same potential, reducing shock risk."
  },
  {
    id: 8,
    text: "Which of these is NOT a common method of wiring lighting circuits?",
    options: [
      "Loop-in method",
      "Junction box method",
      "Ring final method",
      "Ceiling rose method"
    ],
    correctAnswer: "Ring final method",
    explanation: "Ring final circuits are used for socket outlets, not for lighting circuits. The common methods for lighting circuits are the loop-in method and the junction box method."
  },
  {
    id: 9,
    text: "What is the standard rating for an RCD in a domestic consumer unit providing additional protection against electric shock?",
    options: [
      "10mA",
      "30mA",
      "100mA",
      "300mA"
    ],
    correctAnswer: "30mA",
    explanation: "A 30mA RCD is the standard rating used for additional protection against electric shock in domestic installations, providing a balance between safety and resistance to nuisance tripping."
  },
  {
    id: 10,
    text: "Which type of circuit is most appropriate for a domestic electric shower?",
    options: [
      "Ring final circuit",
      "Lighting circuit",
      "Dedicated radial circuit with appropriate rating",
      "Split-load circuit"
    ],
    correctAnswer: "Dedicated radial circuit with appropriate rating",
    explanation: "Electric showers typically have high power ratings and require their own dedicated radial circuit with appropriate cable size and circuit protection based on the shower's power rating."
  }
];
