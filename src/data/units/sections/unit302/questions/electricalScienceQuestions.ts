
// Questions bank for Unit 302: Principles of Electrical Science
export const unit302Questions = [
  // 1. Basic Electrical Theory
  {
    id: 1,
    question: "If a circuit has a voltage of 230V and a current of 5A, what is the resistance?",
    options: ["46Ω", "1150Ω", "0.022Ω", "12Ω"],
    correctAnswer: "46Ω",
    explanation: "Using Ohm's Law: R = V/I = 230V/5A = 46Ω"
  },
  {
    id: 2,
    question: "A 2000W electric heater is used for 3 hours. How much energy is consumed in kilowatt-hours?",
    options: ["600 kWh", "6 kWh", "0.67 kWh", "66.7 kWh"],
    correctAnswer: "6 kWh",
    explanation: "Energy = Power × Time = 2kW × 3h = 6kWh"
  },
  {
    id: 3,
    question: "Which formula correctly calculates power when voltage and current are known?",
    options: ["P = V² × R", "P = I² × R", "P = V × I", "P = V/I"],
    correctAnswer: "P = V × I",
    explanation: "Power equals voltage multiplied by current (P = V × I)"
  },
  {
    id: 4,
    question: "In a series circuit with three resistors of 10Ω, 15Ω, and 25Ω, what is the total resistance?",
    options: ["16.7Ω", "50Ω", "5.4Ω", "150Ω"],
    correctAnswer: "50Ω",
    explanation: "In series, resistances add: R_total = R₁ + R₂ + R₃ = 10Ω + 15Ω + 25Ω = 50Ω"
  },
  {
    id: 5,
    question: "In a parallel circuit with resistors of 6Ω and 3Ω, what is the total resistance?",
    options: ["9Ω", "4.5Ω", "2Ω", "18Ω"],
    correctAnswer: "2Ω",
    explanation: "For parallel resistors: 1/R_total = 1/R₁ + 1/R₂ = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2, so R_total = 2Ω"
  },
  {
    id: 6,
    question: "What happens to the total resistance when resistors are added in parallel?",
    options: ["It increases", "It decreases", "It stays the same", "It multiplies"],
    correctAnswer: "It decreases",
    explanation: "Adding resistors in parallel provides additional paths for current, reducing total resistance"
  },
  {
    id: 7,
    question: "Which of these would correctly convert 1800W to kilowatts?",
    options: ["18 kW", "1.8 kW", "0.18 kW", "180 kW"],
    correctAnswer: "1.8 kW",
    explanation: "1800W = 1800/1000 kW = 1.8 kW"
  },

  // 2. Electromagnetic Effects
  {
    id: 8,
    question: "What is the direction of the magnetic field around a straight current-carrying conductor?",
    options: ["Parallel to the conductor", "Perpendicular to the conductor", "Circular around the conductor", "Random directions"],
    correctAnswer: "Circular around the conductor",
    explanation: "According to the right-hand grip rule, the magnetic field forms concentric circles around a straight current-carrying conductor"
  },
  {
    id: 9,
    question: "Electromagnetic induction occurs when:",
    options: [
      "Current flows in a circuit", 
      "A magnetic field changes through a conductor", 
      "Two conductors touch each other", 
      "Resistance increases in a circuit"
    ],
    correctAnswer: "A magnetic field changes through a conductor",
    explanation: "Electromagnetic induction occurs when a changing magnetic field cuts through a conductor, inducing an EMF (voltage)"
  },
  {
    id: 10,
    question: "What property of an electromagnet determines its strength?",
    options: [
      "The resistance of the wire", 
      "The number of turns and current", 
      "The diameter of the wire only", 
      "The length of the wire only"
    ],
    correctAnswer: "The number of turns and current",
    explanation: "The strength of an electromagnet is proportional to both the number of turns in the coil and the current flowing through it"
  },
  {
    id: 11,
    question: "In a transformer, what is the relationship between the number of turns and voltage?",
    options: [
      "Voltage is inversely proportional to turns ratio", 
      "Voltage is directly proportional to turns ratio", 
      "Voltage is unrelated to turns ratio", 
      "Voltage equals the number of turns"
    ],
    correctAnswer: "Voltage is directly proportional to turns ratio",
    explanation: "V₁/V₂ = N₁/N₂, where V is voltage and N is number of turns, showing direct proportionality"
  },

  // 3. DC Theory
  {
    id: 12,
    question: "Which statement about direct current (DC) is true?",
    options: [
      "DC flows in both directions alternately", 
      "DC flows in one direction only", 
      "DC always has a zero average value", 
      "DC requires a transformer to work"
    ],
    correctAnswer: "DC flows in one direction only",
    explanation: "Direct current (DC) flows in one direction only, from positive to negative"
  },
  {
    id: 13,
    question: "A battery has an internal resistance of 0.5Ω and an EMF of 12V. If it supplies a current of 2A, what is the terminal voltage?",
    options: ["11V", "12V", "13V", "24V"],
    correctAnswer: "11V",
    explanation: "Terminal voltage = EMF - (Internal resistance × Current) = 12V - (0.5Ω × 2A) = 12V - 1V = 11V"
  },
  {
    id: 14,
    question: "What is the total voltage in a series circuit containing three batteries of 1.5V, 9V, and 12V?",
    options: ["22.5V", "7.5V", "4V", "4.5V"],
    correctAnswer: "22.5V",
    explanation: "In series, voltages add: V_total = V₁ + V₂ + V₃ = 1.5V + 9V + 12V = 22.5V"
  },

  // 4. AC Theory
  {
    id: 15,
    question: "Which value represents the RMS value of a 340V peak AC voltage?",
    options: ["240.4V", "480.8V", "170.2V", "680V"],
    correctAnswer: "240.4V",
    explanation: "RMS value = Peak value × 0.707 = 340V × 0.707 ≈ 240.4V"
  },
  {
    id: 16,
    question: "The frequency of UK mains electricity is:",
    options: ["50 Hz", "60 Hz", "230 Hz", "415 Hz"],
    correctAnswer: "50 Hz",
    explanation: "The standard frequency of mains electricity in the UK is 50 Hertz"
  },
  {
    id: 17,
    question: "If an AC waveform has a time period of 20ms, what is its frequency?",
    options: ["20 Hz", "0.02 Hz", "50 Hz", "5 Hz"],
    correctAnswer: "50 Hz",
    explanation: "Frequency = 1/Time period = 1/0.02s = 50 Hz"
  },
  {
    id: 18,
    question: "What does it mean when voltage and current are 'in phase' in an AC circuit?",
    options: [
      "They reach their peak values at different times", 
      "They reach their peak values at the same time", 
      "The current leads the voltage by 90°", 
      "The voltage leads the current by 90°"
    ],
    correctAnswer: "They reach their peak values at the same time",
    explanation: "When in phase, voltage and current waveforms reach their maximum, zero, and minimum values simultaneously"
  },
  {
    id: 19,
    question: "In a purely capacitive AC circuit, the current:",
    options: [
      "Is in phase with the voltage", 
      "Lags the voltage by 90°", 
      "Leads the voltage by 90°", 
      "Is in phase opposition to the voltage"
    ],
    correctAnswer: "Leads the voltage by 90°",
    explanation: "In a purely capacitive circuit, current leads voltage by 90°, which is the opposite of an inductive circuit"
  },

  // 5. Capacitance
  {
    id: 20,
    question: "The unit of capacitance is:",
    options: ["Volt", "Farad", "Henry", "Ohm"],
    correctAnswer: "Farad",
    explanation: "The farad (F) is the SI unit of electrical capacitance"
  },
  {
    id: 21,
    question: "What does a capacitor store?",
    options: ["Current", "Electric charge", "Magnetic field", "Resistance"],
    correctAnswer: "Electric charge",
    explanation: "Capacitors store electric charge, creating a potential difference (voltage) across their plates"
  },
  {
    id: 22,
    question: "In a DC circuit, what happens to a capacitor when it is fully charged?",
    options: [
      "It acts like a short circuit", 
      "It acts like an open circuit", 
      "It continues to draw constant current", 
      "It generates heat"
    ],
    correctAnswer: "It acts like an open circuit",
    explanation: "Once fully charged, a capacitor in a DC circuit blocks current flow, acting like an open circuit"
  },
  {
    id: 23,
    question: "Using the formula Q = CV, if a 10μF capacitor has 0.05 coulombs of charge, what is the voltage across it?",
    options: ["0.5V", "5V", "500V", "5,000V"],
    correctAnswer: "5,000V",
    explanation: "V = Q/C = 0.05/0.00001 = 5,000V (Note: 10μF = 0.00001F)"
  },
  {
    id: 24,
    question: "What happens to the total capacitance when capacitors are connected in parallel?",
    options: [
      "It equals the sum of the individual capacitances", 
      "It equals the reciprocal of the sum of reciprocals", 
      "It equals the product divided by the sum", 
      "It doesn't change"
    ],
    correctAnswer: "It equals the sum of the individual capacitances",
    explanation: "For capacitors in parallel: C_total = C₁ + C₂ + C₃ + ..."
  },

  // 6. Inductance
  {
    id: 25,
    question: "The unit of inductance is:",
    options: ["Ohm", "Farad", "Henry", "Watt"],
    correctAnswer: "Henry",
    explanation: "The henry (H) is the SI unit of electrical inductance"
  },
  {
    id: 26,
    question: "What does an inductor store?",
    options: ["Electric charge", "Current", "Energy in a magnetic field", "Resistance"],
    correctAnswer: "Energy in a magnetic field",
    explanation: "Inductors store energy in the magnetic field that forms around them when current flows through their coils"
  },
  {
    id: 27,
    question: "In a purely inductive AC circuit, the current:",
    options: [
      "Is in phase with the voltage", 
      "Lags the voltage by 90°", 
      "Leads the voltage by 90°", 
      "Is in phase opposition to the voltage"
    ],
    correctAnswer: "Lags the voltage by 90°",
    explanation: "In a purely inductive circuit, current lags voltage by 90°"
  },
  {
    id: 28,
    question: "Mutual inductance occurs when:",
    options: [
      "Two capacitors are connected", 
      "The magnetic field of one inductor links with another", 
      "Current flows through a resistor", 
      "Two batteries are connected in parallel"
    ],
    correctAnswer: "The magnetic field of one inductor links with another",
    explanation: "Mutual inductance occurs when the changing magnetic field from one coil induces voltage in another nearby coil"
  },

  // 7. Power in AC Circuits
  {
    id: 29,
    question: "The power dissipated as heat in an AC circuit is known as:",
    options: ["Reactive power", "Apparent power", "True power", "Inductive power"],
    correctAnswer: "True power",
    explanation: "True power (measured in watts) is the actual power dissipated or used in an AC circuit"
  },
  {
    id: 30,
    question: "Power factor is defined as:",
    options: [
      "Apparent Power ÷ True Power", 
      "True Power ÷ Apparent Power", 
      "Reactive Power ÷ True Power", 
      "True Power × Apparent Power"
    ],
    correctAnswer: "True Power ÷ Apparent Power",
    explanation: "Power factor = True Power (W) ÷ Apparent Power (VA), which is also equal to cos φ"
  },
  {
    id: 31,
    question: "A circuit with a power factor of 0.8 has a true power of 2400W. What is the apparent power?",
    options: ["1920 VA", "3000 VA", "2400 VA", "1800 VA"],
    correctAnswer: "3000 VA",
    explanation: "Apparent Power = True Power ÷ Power Factor = 2400W ÷ 0.8 = 3000 VA"
  },
  {
    id: 32,
    question: "What components are typically used to improve power factor in industrial installations?",
    options: ["Resistors", "Inductors", "Capacitors", "Diodes"],
    correctAnswer: "Capacitors",
    explanation: "Capacitors are used to improve power factor by counteracting the lagging current caused by inductive loads"
  },
  {
    id: 33,
    question: "Which formula can be used to calculate true power in a single-phase AC circuit?",
    options: ["P = VI", "P = VI sin φ", "P = VI cos φ", "P = V²/R"],
    correctAnswer: "P = VI cos φ",
    explanation: "True power P = VI cos φ, where φ is the phase angle between voltage and current"
  },
  {
    id: 34,
    question: "A power factor of 1.0 indicates:",
    options: [
      "A purely resistive circuit", 
      "A purely inductive circuit", 
      "A purely capacitive circuit", 
      "A short circuit"
    ],
    correctAnswer: "A purely resistive circuit",
    explanation: "A power factor of 1.0 indicates that voltage and current are in phase, which occurs in purely resistive circuits"
  },
  {
    id: 35,
    question: "Reactive power is measured in:",
    options: ["Watts (W)", "Volt-Amperes (VA)", "Volt-Amperes Reactive (VAr)", "Watt-hours (Wh)"],
    correctAnswer: "Volt-Amperes Reactive (VAr)",
    explanation: "Reactive power is measured in volt-amperes reactive (VAr), representing power that oscillates between source and load"
  },
  
  // Additional Mixed Questions
  {
    id: 36,
    question: "What is the impedance of a circuit containing a 30Ω resistor and a capacitive reactance of 40Ω?",
    options: ["10Ω", "50Ω", "70Ω", "50Ω"],
    correctAnswer: "50Ω",
    explanation: "Z = √(R² + Xc²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50Ω"
  },
  {
    id: 37,
    question: "Which waveform represents a pure sine wave?",
    options: [
      "A waveform with flat tops", 
      "A waveform with sharp peaks", 
      "A waveform with equal positive and negative cycles following the sine function", 
      "A waveform with unequal positive and negative cycles"
    ],
    correctAnswer: "A waveform with equal positive and negative cycles following the sine function",
    explanation: "A pure sine wave follows the mathematical sine function with smooth, equal positive and negative cycles"
  },
  {
    id: 38,
    question: "If the peak value of an AC voltage is 311V, what is its RMS value?",
    options: ["155.5V", "220V", "240V", "311V"],
    correctAnswer: "220V",
    explanation: "RMS value = Peak value × 0.707 = 311V × 0.707 ≈ 220V"
  },
  {
    id: 39,
    question: "What is the relationship between line and phase voltages in a star-connected three-phase system?",
    options: [
      "They are equal", 
      "Line voltage = Phase voltage × √3", 
      "Line voltage = Phase voltage × 3", 
      "Line voltage = Phase voltage ÷ √3"
    ],
    correctAnswer: "Line voltage = Phase voltage × √3",
    explanation: "In a star connection, the line voltage is √3 times the phase voltage"
  },
  {
    id: 40,
    question: "A 200Ω resistor, 100Ω inductive reactance, and 50Ω capacitive reactance are connected in series. What is the total impedance?",
    options: ["250Ω", "350Ω", "50Ω", "223.6Ω"],
    correctAnswer: "223.6Ω",
    explanation: "The net reactance is X = XL - XC = 100Ω - 50Ω = 50Ω. Then Z = √(R² + X²) = √(200² + 50²) = √(40000 + 2500) = √42500 ≈ 223.6Ω"
  },
  {
    id: 41,
    question: "What is the resonant frequency of a circuit containing a 2mH inductor and a 10μF capacitor?",
    options: ["1125 Hz", "35.6 Hz", "356 Hz", "112.5 Hz"],
    correctAnswer: "1125 Hz",
    explanation: "f = 1/(2π√LC) = 1/(2π√(0.002 × 0.00001)) = 1/(2π√(2 × 10⁻⁸)) ≈ 1125 Hz"
  },
  {
    id: 42,
    question: "A capacitor has a reactance of 200Ω at 50Hz. What is its capacitance?",
    options: ["15.9μF", "1.59μF", "159μF", "0.159μF"],
    correctAnswer: "15.9μF",
    explanation: "Xc = 1/(2πfC), so C = 1/(2πfXc) = 1/(2π × 50 × 200) = 1/(62,800) ≈ 15.9μF"
  },
  {
    id: 43,
    question: "The time constant of an RC circuit is:",
    options: ["R + C", "R × C", "R/C", "C/R"],
    correctAnswer: "R × C",
    explanation: "The time constant τ (tau) of an RC circuit is the product of resistance R and capacitance C: τ = R × C"
  },
  {
    id: 44,
    question: "What is the purpose of laminations in transformer cores?",
    options: [
      "To increase weight", 
      "To reduce eddy current losses", 
      "To increase resistance", 
      "To improve appearance"
    ],
    correctAnswer: "To reduce eddy current losses",
    explanation: "Transformer cores are laminated (made of thin sheets insulated from each other) to reduce eddy current losses"
  },
  {
    id: 45,
    question: "A resistor, inductor, and capacitor are connected in series to an AC supply. At resonance:",
    options: [
      "Current is at minimum", 
      "Current is at maximum", 
      "Voltage is zero", 
      "Power factor is zero"
    ],
    correctAnswer: "Current is at maximum",
    explanation: "At resonance in a series RLC circuit, the inductive and capacitive reactances cancel out, resulting in maximum current"
  },
  {
    id: 46,
    question: "In a purely capacitive AC circuit, the average power is:",
    options: ["Maximum", "Minimum", "Zero", "Equal to apparent power"],
    correctAnswer: "Zero",
    explanation: "In a purely capacitive circuit, current and voltage are 90° out of phase, so the average power is zero"
  },
  {
    id: 47,
    question: "Which of these relationships is correct for a transformer?",
    options: [
      "P₁ = P₂", 
      "V₁I₁ = V₂I₂", 
      "I₁/I₂ = V₁/V₂", 
      "V₁/V₂ = I₁/I₂"
    ],
    correctAnswer: "V₁I₁ = V₂I₂",
    explanation: "In an ideal transformer, input power equals output power: P₁ = P₂, thus V₁I₁ = V₂I₂"
  },
  {
    id: 48,
    question: "What is the reactance of a 0.2H inductor at 100Hz?",
    options: ["20π Ω", "40π Ω", "126 Ω", "20 Ω"],
    correctAnswer: "126 Ω",
    explanation: "XL = 2πfL = 2π × 100 × 0.2 = 40π ≈ 126 Ω"
  },
  {
    id: 49,
    question: "What does a low power factor in an electrical installation indicate?",
    options: [
      "Efficient use of power", 
      "Inefficient use of power", 
      "Low voltage", 
      "High resistance"
    ],
    correctAnswer: "Inefficient use of power",
    explanation: "A low power factor indicates inefficient use of power, with a higher proportion of reactive power that doesn't do useful work"
  },
  {
    id: 50,
    question: "The skin effect in conductors carrying AC refers to:",
    options: [
      "The formation of oxide on the conductor surface", 
      "The tendency of current to flow near the surface", 
      "The heating of the conductor surface", 
      "The magnetic field on the conductor surface"
    ],
    correctAnswer: "The tendency of current to flow near the surface",
    explanation: "Skin effect is the tendency of AC to flow mainly near the surface (skin) of a conductor, effectively reducing its cross-sectional area"
  }
];
