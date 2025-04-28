
import { Question } from '@/data/units/sections/unit202/questions/electricalScienceQuestions';

export const electricalInstallationsQuestions: Question[] = [
  {
    id: 1,
    text: "What is the main purpose of a consumer unit in an electrical installation?",
    options: [
      "To increase the voltage for high-power devices",
      "To distribute and protect electrical circuits in a building",
      "To convert AC voltage to DC voltage",
      "To store electrical energy during power outages"
    ],
    correctAnswer: "To distribute and protect electrical circuits in a building"
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
    correctAnswer: "RCD (Residual Current Device)"
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
    correctAnswer: "1.0mm² or 1.5mm²"
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
    correctAnswer: "100m²"
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
    correctAnswer: "Ring final circuit with 32A protection"
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
    correctAnswer: "Residual current protection and overcurrent protection"
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
    correctAnswer: "To connect metallic parts to the main earthing terminal"
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
    correctAnswer: "Ring final method"
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
    correctAnswer: "30mA"
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
    correctAnswer: "Dedicated radial circuit with appropriate rating"
  },
  {
    id: 11,
    text: "What term describes the process of connecting metal pipes and structural parts to the main earthing terminal?",
    options: [
      "Supplementary bonding",
      "Circuit protection",
      "Main equipotential bonding",
      "Functional earthing"
    ],
    correctAnswer: "Main equipotential bonding"
  },
  {
    id: 12,
    text: "What is the maximum number of socket outlets permitted on a 20A radial circuit with 2.5mm² cable?",
    options: [
      "No specific limit",
      "12 sockets",
      "6 sockets",
      "2 sockets"
    ],
    correctAnswer: "No specific limit"
  },
  {
    id: 13,
    text: "What type of consumer unit provides separate RCD protection for different groups of circuits?",
    options: [
      "Main switch consumer unit",
      "Split-load consumer unit",
      "Single RCD consumer unit",
      "Dual MCB consumer unit"
    ],
    correctAnswer: "Split-load consumer unit"
  },
  {
    id: 14,
    text: "What device would typically protect a cooker circuit in a domestic installation?",
    options: [
      "6A MCB",
      "16A MCB",
      "32A or 40A MCB/circuit breaker",
      "63A MCB"
    ],
    correctAnswer: "32A or 40A MCB/circuit breaker"
  },
  {
    id: 15,
    text: "What type of socket is typically installed for a domestic electric cooker?",
    options: [
      "Standard 13A socket outlet",
      "45A cooker control unit",
      "32A industrial socket",
      "16A commando socket"
    ],
    correctAnswer: "45A cooker control unit"
  },
  {
    id: 16,
    text: "In a domestic lighting circuit, what component allows control of a light from two separate locations?",
    options: [
      "One-way switch",
      "Two-way switches",
      "Intermediate switch",
      "Dimmer switch"
    ],
    correctAnswer: "Two-way switches"
  },
  {
    id: 17,
    text: "What is the purpose of a junction box in an electrical installation?",
    options: [
      "To convert voltage levels",
      "To connect and join cables safely",
      "To provide overcurrent protection",
      "To isolate circuits during maintenance"
    ],
    correctAnswer: "To connect and join cables safely"
  },
  {
    id: 18,
    text: "What cable size is typically used for a standard 32A ring final circuit?",
    options: [
      "1.5mm²",
      "2.5mm²",
      "4.0mm²",
      "6.0mm²"
    ],
    correctAnswer: "2.5mm²"
  },
  {
    id: 19,
    text: "What is the primary purpose of an MCB in an electrical installation?",
    options: [
      "To protect against earth leakage currents",
      "To protect against overcurrents and short circuits",
      "To isolate the main supply",
      "To reduce voltage fluctuations"
    ],
    correctAnswer: "To protect against overcurrents and short circuits"
  },
  {
    id: 20,
    text: "Which of these is NOT a type of consumer unit commonly found in UK domestic installations?",
    options: [
      "Main switch consumer unit",
      "Split-load consumer unit",
      "High integrity consumer unit",
      "Triple-phase transformer unit"
    ],
    correctAnswer: "Triple-phase transformer unit"
  },
  {
    id: 21,
    text: "What is supplementary bonding mainly used for?",
    options: [
      "Connecting the main incoming supply",
      "Connecting circuit breakers together",
      "Connecting local metalwork in high-risk areas like bathrooms",
      "Connecting the consumer unit to distribution boards"
    ],
    correctAnswer: "Connecting local metalwork in high-risk areas like bathrooms"
  },
  {
    id: 22,
    text: "What is the minimum distance from a water source for a socket outlet in a domestic kitchen?",
    options: [
      "No restriction",
      "At least 30cm horizontally",
      "At least 3 meters",
      "At least 1 meter"
    ],
    correctAnswer: "At least 30cm horizontally"
  },
  {
    id: 23,
    text: "Which cable is typically used for two-way switching of a lighting circuit?",
    options: [
      "1.0mm² two-core and earth",
      "1.5mm² three-core and earth",
      "2.5mm² two-core and earth",
      "6.0mm² three-core and earth"
    ],
    correctAnswer: "1.5mm² three-core and earth"
  },
  {
    id: 24,
    text: "What is the purpose of a ceiling rose in a lighting circuit?",
    options: [
      "To provide a decorative cover for the light fitting",
      "To create a connection point for the light fitting and circuit cables",
      "To increase the brightness of the light",
      "To provide additional circuit protection"
    ],
    correctAnswer: "To create a connection point for the light fitting and circuit cables"
  },
  {
    id: 25,
    text: "Which statement best describes a 'diversity factor' in electrical installation design?",
    options: [
      "The ratio of different types of circuits in an installation",
      "The allowance made because not all loads operate simultaneously",
      "The variety of cable sizes used in different circuits",
      "The number of different protective devices used"
    ],
    correctAnswer: "The allowance made because not all loads operate simultaneously"
  },
  {
    id: 26,
    text: "What is the maximum number of 13A socket outlets typically allowed on a ring final circuit?",
    options: [
      "6 outlets",
      "12 outlets",
      "20 outlets",
      "No specific limit"
    ],
    correctAnswer: "No specific limit"
  },
  {
    id: 27,
    text: "What type of circuit is most suitable for an electric shower rated at 9kW?",
    options: [
      "Standard ring final circuit with 32A protection",
      "Lighting circuit with 6A protection",
      "Dedicated radial circuit with 40A or 45A protection",
      "Standard radial circuit with 20A protection"
    ],
    correctAnswer: "Dedicated radial circuit with 40A or 45A protection"
  },
  {
    id: 28,
    text: "What is typically used to protect circuits supplying socket outlets in domestic premises?",
    options: [
      "32A device with 30mA RCD protection",
      "6A device with 100mA RCD protection",
      "10A device with no RCD protection",
      "63A device with 300mA RCD protection"
    ],
    correctAnswer: "32A device with 30mA RCD protection"
  },
  {
    id: 29,
    text: "What is the maximum floor area typically covered by a 20A radial circuit using 2.5mm² cable?",
    options: [
      "25m²",
      "50m²",
      "75m²",
      "100m²"
    ],
    correctAnswer: "50m²"
  },
  {
    id: 30,
    text: "What is the primary purpose of functional switching in an electrical installation?",
    options: [
      "To isolate the installation from the supply",
      "To provide emergency switching",
      "To control equipment during normal operation",
      "To disconnect for mechanical maintenance"
    ],
    correctAnswer: "To control equipment during normal operation"
  },
  {
    id: 31,
    text: "What device combines the functions of an isolator and a switch?",
    options: [
      "Circuit breaker",
      "RCD",
      "Switch-disconnector",
      "Contactor"
    ],
    correctAnswer: "Switch-disconnector"
  },
  {
    id: 32,
    text: "What is the purpose of a 'spur' in a ring final circuit?",
    options: [
      "To increase the circuit voltage",
      "To add additional socket outlets to the circuit",
      "To provide surge protection",
      "To connect the circuit to the earth terminal"
    ],
    correctAnswer: "To add additional socket outlets to the circuit"
  },
  {
    id: 33,
    text: "What is the standard height above floor level for socket outlets in domestic installations?",
    options: [
      "150mm",
      "450mm",
      "750mm",
      "1200mm"
    ],
    correctAnswer: "450mm"
  },
  {
    id: 34,
    text: "Which type of switch is required to control a light from three or more locations?",
    options: [
      "One-way switch only",
      "Two-way switches only",
      "Two-way switches with intermediate switch(es)",
      "Three-way switches"
    ],
    correctAnswer: "Two-way switches with intermediate switch(es)"
  },
  {
    id: 35,
    text: "What describes the protective measure that combines basic protection and fault protection?",
    options: [
      "Double insulation",
      "SELV (Separated Extra-Low Voltage)",
      "Automatic disconnection of supply",
      "Equipotential bonding"
    ],
    correctAnswer: "Automatic disconnection of supply"
  },
  {
    id: 36,
    text: "What is the maximum number of unfused spurs permitted per circuit protective conductor in a ring final circuit?",
    options: [
      "No limit",
      "One spur",
      "Two spurs",
      "Three spurs"
    ],
    correctAnswer: "No limit"
  },
  {
    id: 37,
    text: "Which type of circuit is most appropriate for fixed lighting points in a domestic installation?",
    options: [
      "Ring final circuit",
      "Radial lighting circuit",
      "Dedicated appliance circuit",
      "SELV circuit"
    ],
    correctAnswer: "Radial lighting circuit"
  },
  {
    id: 38,
    text: "What is the primary purpose of an isolator in an electrical installation?",
    options: [
      "To protect against overloads",
      "To protect against earth leakage",
      "To safely disconnect the electrical supply",
      "To limit starting current"
    ],
    correctAnswer: "To safely disconnect the electrical supply"
  },
  {
    id: 39,
    text: "Which zones in a bathroom require electrical equipment with an IPX4 rating or higher?",
    options: [
      "Zone 1 only",
      "Zone 2 only",
      "Zones 0, 1, and 2",
      "Zone 3 only"
    ],
    correctAnswer: "Zones 0, 1, and 2"
  },
  {
    id: 40,
    text: "What is the maximum cable operating temperature for standard PVC insulated cables?",
    options: [
      "50°C",
      "70°C",
      "90°C",
      "105°C"
    ],
    correctAnswer: "70°C"
  },
  {
    id: 41,
    text: "What determines the current-carrying capacity of a cable?",
    options: [
      "Only the cross-sectional area of the conductor",
      "Only the type of insulation used",
      "Only the ambient temperature",
      "Multiple factors including conductor size, insulation, installation method, and ambient conditions"
    ],
    correctAnswer: "Multiple factors including conductor size, insulation, installation method, and ambient conditions"
  },
  {
    id: 42,
    text: "What is voltage drop in an electrical installation?",
    options: [
      "The reduction in voltage from the transformer to the consumer unit",
      "The reduction in voltage between the origin of the installation and the load",
      "The voltage difference between phase and neutral",
      "The voltage fluctuation during peak demand"
    ],
    correctAnswer: "The reduction in voltage between the origin of the installation and the load"
  },
  {
    id: 43,
    text: "What is the standard socket height for wheelchair users according to accessibility guidelines?",
    options: [
      "450mm",
      "750-850mm",
      "900-1100mm",
      "1500mm"
    ],
    correctAnswer: "750-850mm"
  },
  {
    id: 44,
    text: "What type of circuit breaker has a 'C' curve characteristic?",
    options: [
      "One designed for highly resistive loads",
      "One designed for standard domestic use",
      "One designed for motor circuits and inductive loads",
      "One designed for electronic equipment"
    ],
    correctAnswer: "One designed for motor circuits and inductive loads"
  },
  {
    id: 45,
    text: "What is the purpose of a time-delay RCD?",
    options: [
      "To provide faster protection against earth faults",
      "To prevent nuisance tripping caused by momentary imbalances",
      "To reduce the sensitivity of the device",
      "To extend the device's operational life"
    ],
    correctAnswer: "To prevent nuisance tripping caused by momentary imbalances"
  },
  {
    id: 46,
    text: "In a domestic property, what is the typical disconnection time required for a final circuit not exceeding 32A?",
    options: [
      "0.1 seconds",
      "0.4 seconds",
      "5 seconds",
      "10 seconds"
    ],
    correctAnswer: "0.4 seconds"
  },
  {
    id: 47,
    text: "What does the term 'discrimination' refer to in circuit protection?",
    options: [
      "The ability to distinguish between different types of faults",
      "The selective operation of protective devices to isolate only the faulty circuit",
      "The use of different colored cables for various circuits",
      "The difference in current ratings between devices"
    ],
    correctAnswer: "The selective operation of protective devices to isolate only the faulty circuit"
  },
  {
    id: 48,
    text: "What is the maximum permitted earth fault loop impedance (Zs) for a 32A circuit protected by a Type B MCB in a TN-S system?",
    options: [
      "0.8Ω",
      "1.14Ω",
      "1.44Ω",
      "2.3Ω"
    ],
    correctAnswer: "1.44Ω"
  },
  {
    id: 49,
    text: "Which of these is NOT a common type of electrical distribution system used in the UK?",
    options: [
      "TN-S system",
      "TN-C-S system",
      "TT system",
      "TC-N system"
    ],
    correctAnswer: "TC-N system"
  },
  {
    id: 50,
    text: "What is the purpose of surge protection devices in an electrical installation?",
    options: [
      "To protect against overcurrents",
      "To protect against voltage transients and surges",
      "To protect against earth leakage currents",
      "To protect against undervoltage conditions"
    ],
    correctAnswer: "To protect against voltage transients and surges"
  }
];
