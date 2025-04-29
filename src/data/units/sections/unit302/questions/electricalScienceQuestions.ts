
export const electricalScienceQuestions = [
  {
    question: "In a three-phase star connection, how is the line voltage related to the phase voltage?",
    options: [
      "Line voltage = phase voltage",
      "Line voltage = √3 × phase voltage",
      "Line voltage = 3 × phase voltage",
      "Line voltage = phase voltage / √3"
    ],
    correctAnswer: "Line voltage = √3 × phase voltage",
    explanation: "In a three-phase star connection, the line voltage is √3 times the phase voltage due to the 120° phase difference between the phases."
  },
  {
    question: "Which of the following statements about delta connections is correct?",
    options: [
      "Delta connections always require a neutral conductor",
      "In delta connections, line current equals phase current",
      "In delta connections, line current equals √3 × phase current",
      "Delta connections cannot be used for motor windings"
    ],
    correctAnswer: "In delta connections, line current equals √3 × phase current",
    explanation: "In a delta connection, the line current is √3 times the phase current because each line conductor carries the vector sum of two phase currents."
  },
  {
    question: "What is the formula for total power in a balanced three-phase system?",
    options: [
      "P = V × I × cosφ",
      "P = √3 × VL × IL × cosφ",
      "P = 3 × VL × IL × cosφ",
      "P = VL × IL × cosφ × √3"
    ],
    correctAnswer: "P = √3 × VL × IL × cosφ",
    explanation: "The total power in a balanced three-phase system is calculated as P = √3 × VL × IL × cosφ, where VL is the line voltage, IL is the line current, and cosφ is the power factor."
  },
  {
    question: "What is the primary advantage of using a star-delta starter for a three-phase motor?",
    options: [
      "It increases the starting torque",
      "It reduces the starting current",
      "It allows for speed control during operation",
      "It eliminates the need for overload protection"
    ],
    correctAnswer: "It reduces the starting current",
    explanation: "The primary advantage of a star-delta starter is that it reduces the starting current to approximately one-third of what would occur with direct-on-line starting."
  },
  {
    question: "What does the term 'slip' refer to in an induction motor?",
    options: [
      "The difference between synchronous speed and rotor speed",
      "The amount of lubricant required for bearings",
      "The displacement between stator and rotor",
      "The relationship between voltage and current"
    ],
    correctAnswer: "The difference between synchronous speed and rotor speed",
    explanation: "Slip in an induction motor refers to the difference between the synchronous speed of the rotating magnetic field and the actual speed of the rotor, typically expressed as a percentage."
  },
  {
    question: "Which protection device is specifically designed to protect against prolonged overloads in motors?",
    options: [
      "Circuit breaker",
      "Fuse",
      "Thermal overload relay",
      "Earth leakage circuit breaker"
    ],
    correctAnswer: "Thermal overload relay",
    explanation: "Thermal overload relays are specifically designed to protect motors against prolonged overload conditions by modeling the heating effect of current on the motor windings."
  },
  {
    question: "In a Variable Frequency Drive (VFD), what component converts DC back to AC at variable frequency?",
    options: [
      "Rectifier",
      "DC bus capacitors",
      "Inverter",
      "Filter"
    ],
    correctAnswer: "Inverter",
    explanation: "In a VFD, the inverter section converts the DC voltage from the DC bus back to AC at a variable frequency, typically using pulse-width modulation (PWM) techniques."
  },
  {
    question: "What is the synchronous speed of a 4-pole motor operating at 50 Hz?",
    options: [
      "1500 RPM",
      "3000 RPM",
      "1800 RPM",
      "750 RPM"
    ],
    correctAnswer: "1500 RPM",
    explanation: "The synchronous speed of an AC motor is calculated using the formula: N = 120f/p, where f is frequency in Hz and p is number of poles. For a 4-pole motor at 50 Hz: N = (120 × 50)/4 = 1500 RPM."
  },
  {
    question: "What is power factor in an AC circuit?",
    options: [
      "The ratio of active power to apparent power",
      "The ratio of reactive power to apparent power",
      "The product of voltage and current",
      "The reciprocal of impedance"
    ],
    correctAnswer: "The ratio of active power to apparent power",
    explanation: "Power factor is defined as the ratio of active (true) power to apparent power, mathematically expressed as cosφ where φ is the phase angle between voltage and current."
  },
  {
    question: "Which of the following motor types operates at exactly the synchronous speed?",
    options: [
      "Induction motor",
      "Synchronous motor",
      "Wound rotor motor",
      "Universal motor"
    ],
    correctAnswer: "Synchronous motor",
    explanation: "Synchronous motors operate at exactly the synchronous speed determined by the frequency of the supply and the number of poles. Unlike induction motors, they do not have slip during normal operation."
  }
];

export default electricalScienceQuestions;
