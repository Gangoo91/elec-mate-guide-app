
export const electricalDesignQuestions = [
  {
    id: 1,
    question: "What is the maximum volt drop permitted for lighting circuits in a 230V installation?",
    options: [
      "2% (4.6V)",
      "3% (6.9V)",
      "4% (9.2V)",
      "5% (11.5V)"
    ],
    correctAnswer: "3% (6.9V)",
    explanation: "According to BS 7671, the maximum permitted voltage drop for lighting circuits is 3% of the nominal voltage, which equates to 6.9V in a 230V system."
  },
  {
    id: 2,
    question: "What is the minimum cross-sectional area for a main protective bonding conductor in an installation with a 25mm² supply neutral conductor?",
    options: [
      "6mm²",
      "10mm²",
      "16mm²",
      "25mm²"
    ],
    correctAnswer: "16mm²",
    explanation: "For supply neutral conductors greater than 16mm² but less than or equal to 35mm², the minimum cross-sectional area for main protective bonding conductors is 16mm²."
  },
  {
    id: 3,
    question: "Which of the following earthing systems requires an independent earth electrode at the installation?",
    options: [
      "TN-S",
      "TN-C",
      "TN-C-S",
      "TT"
    ],
    correctAnswer: "TT",
    explanation: "In a TT earthing system, the supply is earthed at the transformer, but the installation has its own separate, independent earth electrode."
  },
  {
    id: 4,
    question: "What is the purpose of diversity factors in electrical design?",
    options: [
      "To increase the maximum load",
      "To reduce cable sizes",
      "To account for the fact that not all loads operate simultaneously at maximum demand",
      "To ensure overcurrent protection"
    ],
    correctAnswer: "To account for the fact that not all loads operate simultaneously at maximum demand",
    explanation: "Diversity factors are used in electrical design to recognize that not all connected loads will operate simultaneously at their maximum demand, allowing for more economical sizing of supply equipment and cables."
  },
  {
    id: 5,
    question: "What is the formula used in the adiabatic equation for determining conductor size for fault protection?",
    options: [
      "S² = I² × t",
      "S = I² × t / k²",
      "S² = I² × t / k²",
      "S = I × t / k"
    ],
    correctAnswer: "S² = I² × t / k²",
    explanation: "The adiabatic equation used for determining conductor size for fault protection is S² = I² × t / k², where S is the cross-sectional area, I is the fault current, t is the disconnection time, and k is a factor depending on the material and insulation."
  },
  {
    id: 6,
    question: "Which Building Regulation specifically deals with electrical safety in dwellings?",
    options: [
      "Part A",
      "Part B",
      "Part L",
      "Part P"
    ],
    correctAnswer: "Part P",
    explanation: "Part P of the Building Regulations specifically deals with electrical safety in dwellings, requiring that electrical installations are designed and installed to provide reasonable protection against the risk of injury or fire."
  },
  {
    id: 7,
    question: "What is the minimum IP rating required for an electrical accessory installed in bathroom Zone 2?",
    options: [
      "IP20",
      "IP44",
      "IP55",
      "IP68"
    ],
    correctAnswer: "IP44",
    explanation: "Electrical equipment installed in bathroom Zone 2 must have a minimum IP rating of IP44, providing protection against solid objects larger than 1mm and splashing water from any direction."
  },
  {
    id: 8,
    question: "What is the maximum floor area that can be served by a 32A radial circuit for socket outlets?",
    options: [
      "20m²",
      "30m²",
      "50m²",
      "100m²"
    ],
    correctAnswer: "50m²",
    explanation: "A 32A radial circuit for socket outlets can serve a maximum floor area of 50m²."
  },
  {
    id: 9,
    question: "For a domestic ring final circuit, what is the standard protective device rating?",
    options: [
      "16A",
      "20A",
      "30A/32A",
      "45A"
    ],
    correctAnswer: "30A/32A",
    explanation: "A domestic ring final circuit is typically protected by a 30A or 32A protective device."
  },
  {
    id: 10,
    question: "Which type of MCB is most suitable for circuits with highly inductive loads and high inrush currents?",
    options: [
      "Type B",
      "Type C",
      "Type D",
      "Type A"
    ],
    correctAnswer: "Type D",
    explanation: "Type D MCBs are designed for circuits with highly inductive loads and high inrush currents, tripping at 10-20 times their rated current."
  },
  {
    id: 11,
    question: "What is the purpose of discrimination between protective devices?",
    options: [
      "To ensure devices operate at the same time",
      "To ensure only the device closest to the fault operates",
      "To increase the fault level",
      "To reduce the current rating"
    ],
    correctAnswer: "To ensure only the device closest to the fault operates",
    explanation: "Discrimination (or selectivity) between protective devices ensures that only the device closest to the fault operates, minimizing disruption to the rest of the installation."
  },
  {
    id: 12,
    question: "What must be considered when selecting cable size to ensure compliance with the adiabatic equation?",
    options: [
      "Cable length only",
      "Operating temperature only",
      "Fault current, disconnection time, and conductor material",
      "Voltage rating only"
    ],
    correctAnswer: "Fault current, disconnection time, and conductor material",
    explanation: "When selecting cable size to comply with the adiabatic equation, you must consider the fault current, disconnection time, and conductor material (including insulation type)."
  },
  {
    id: 13,
    question: "Which of the following cable types is most suitable for installation in a fire alarm system?",
    options: [
      "PVC twin and earth",
      "XLPE insulated SWA",
      "FP200 fire resistant cable",
      "LSZH data cable"
    ],
    correctAnswer: "FP200 fire resistant cable",
    explanation: "FP200 fire resistant cable is specifically designed for fire alarm systems, as it maintains circuit integrity for a specified period during a fire."
  },
  {
    id: 14,
    question: "When designing a supplementary bonding system in a bathroom, what is the minimum size of copper bonding conductor required if the conductor is not mechanically protected?",
    options: [
      "1.5mm²",
      "2.5mm²",
      "4mm²",
      "6mm²"
    ],
    correctAnswer: "4mm²",
    explanation: "For supplementary bonding in bathrooms, if the copper bonding conductor is not mechanically protected, the minimum size required is 4mm²."
  },
  {
    id: 15,
    question: "What is the maximum disconnection time for a TN system with a final circuit up to 32A?",
    options: [
      "0.2 seconds",
      "0.4 seconds",
      "5 seconds",
      "0.8 seconds"
    ],
    correctAnswer: "0.4 seconds",
    explanation: "For a TN system with a final circuit up to 32A, the maximum disconnection time is 0.4 seconds according to BS 7671."
  },
  {
    id: 16,
    question: "Which of the following factors would NOT affect the current-carrying capacity of a cable?",
    options: [
      "Ambient temperature",
      "Cable grouping",
      "Thermal insulation",
      "Cable color"
    ],
    correctAnswer: "Cable color",
    explanation: "Cable color does not affect the current-carrying capacity of a cable. The main factors are ambient temperature, cable grouping, installation method, and thermal insulation."
  },
  {
    id: 17,
    question: "What is the typical diversity factor applied to socket outlet circuits in a domestic installation?",
    options: [
      "100%",
      "80%",
      "66%",
      "40%"
    ],
    correctAnswer: "66%",
    explanation: "In domestic installations, a diversity factor of 66% (two-thirds) is typically applied to socket outlet circuits when calculating maximum demand."
  },
  {
    id: 18,
    question: "Which of the following is NOT a requirement of Part L of the Building Regulations?",
    options: [
      "Energy-efficient lighting",
      "Controls for heating systems",
      "RCD protection for circuits",
      "Energy usage monitoring"
    ],
    correctAnswer: "RCD protection for circuits",
    explanation: "RCD protection for circuits is a requirement of Part P (Electrical Safety) rather than Part L (Conservation of Fuel and Power), which deals with energy efficiency measures."
  },
  {
    id: 19,
    question: "What is the main advantage of a TN-S earthing system compared to TN-C-S?",
    options: [
      "Lower installation cost",
      "Better electromagnetic compatibility performance",
      "Reduced earth electrode resistance",
      "Higher fault currents"
    ],
    correctAnswer: "Better electromagnetic compatibility performance",
    explanation: "A TN-S system offers better electromagnetic compatibility (EMC) performance compared to TN-C-S as there is no risk of neutral current flowing in exposed metalwork or other parallel paths."
  },
  {
    id: 20,
    question: "For an emergency lighting circuit, what is the minimum duration of battery backup required?",
    options: [
      "1 hour",
      "2 hours",
      "3 hours",
      "4 hours"
    ],
    correctAnswer: "3 hours",
    explanation: "For emergency lighting systems, the minimum duration of battery backup required is typically 3 hours, in accordance with BS 5266."
  },
  {
    id: 21,
    question: "What type of RCD is required for a circuit supplying equipment with DC components in the protective conductor?",
    options: [
      "Type AC",
      "Type A",
      "Type B",
      "Type F"
    ],
    correctAnswer: "Type B",
    explanation: "Type B RCDs are required for circuits supplying equipment that may produce smooth DC components in the protective conductor, such as variable speed drives or electric vehicle charging equipment."
  },
  {
    id: 22,
    question: "What is the maximum floor area that can be served by a 20A radial circuit for socket outlets?",
    options: [
      "10m²",
      "20m²",
      "50m²",
      "100m²"
    ],
    correctAnswer: "20m²",
    explanation: "A 20A radial circuit for socket outlets can serve a maximum floor area of 20m²."
  },
  {
    id: 23,
    question: "Which of the following cable types would be most suitable for an underground supply to an outbuilding?",
    options: [
      "PVC twin and earth",
      "Steel wire armored (SWA)",
      "MICC",
      "FP200"
    ],
    correctAnswer: "Steel wire armored (SWA)",
    explanation: "Steel Wire Armored (SWA) cable is the most suitable for underground supplies to outbuildings due to its mechanical protection and suitability for direct burial."
  },
  {
    id: 24,
    question: "What is the k factor for a copper conductor with XLPE insulation when using the adiabatic equation?",
    options: [
      "76",
      "115",
      "143",
      "166"
    ],
    correctAnswer: "143",
    explanation: "The k factor for copper conductors with XLPE insulation is 143, as specified in BS 7671 for use in the adiabatic equation for thermal protection."
  },
  {
    id: 25,
    question: "What is the maximum operating temperature of standard PVC-insulated cables?",
    options: [
      "60°C",
      "70°C",
      "90°C",
      "110°C"
    ],
    correctAnswer: "70°C",
    explanation: "Standard PVC-insulated cables have a maximum operating temperature of 70°C."
  },
  {
    id: 26,
    question: "Which of the following is NOT typically included in main protective bonding?",
    options: [
      "Water service pipe",
      "Gas installation pipe",
      "Plastic waste pipe",
      "Structural steelwork"
    ],
    correctAnswer: "Plastic waste pipe",
    explanation: "Plastic waste pipes are not typically included in main protective bonding as they are non-conductive and do not present a risk of becoming live."
  },
  {
    id: 27,
    question: "What is the minimum cross-sectional area of a circuit protective conductor (CPC) for a 10mm² line conductor?",
    options: [
      "1.5mm²",
      "4mm²",
      "6mm²",
      "10mm²"
    ],
    correctAnswer: "10mm²",
    explanation: "For line conductors up to and including 16mm², the minimum cross-sectional area of the CPC is equal to that of the line conductor, which in this case is 10mm²."
  },
  {
    id: 28,
    question: "Which type of distribution board would be most suitable for an installation requiring high levels of discrimination between circuits?",
    options: [
      "Consumer unit with MCBs only",
      "Consumer unit with RCBOs",
      "Distribution board with MCCBs",
      "Distribution board with fuses only"
    ],
    correctAnswer: "Consumer unit with RCBOs",
    explanation: "A consumer unit with individual RCBOs provides better discrimination since each circuit has its own RCD protection, preventing a fault on one circuit from affecting others."
  },
  {
    id: 29,
    question: "What is the maximum permitted earth fault loop impedance (Zs) for a 32A Type B MCB protected circuit in a TN-S system?",
    options: [
      "0.72Ω",
      "1.09Ω",
      "1.44Ω",
      "2.3Ω"
    ],
    correctAnswer: "1.44Ω",
    explanation: "The maximum permitted earth fault loop impedance (Zs) for a 32A Type B MCB in a TN-S system is 1.44Ω, based on the requirement for a disconnection time of 0.4 seconds."
  },
  {
    id: 30,
    question: "When designing a circuit for a 9kW electric shower, what minimum cable size would typically be required?",
    options: [
      "4mm²",
      "6mm²",
      "10mm²",
      "16mm²"
    ],
    correctAnswer: "6mm²",
    explanation: "A 9kW electric shower typically requires a minimum cable size of 6mm², assuming standard installation conditions and a relatively short run length."
  },
  {
    id: 31,
    question: "What is the purpose of applying correction factors in cable sizing calculations?",
    options: [
      "To increase the current rating of cables",
      "To account for installation conditions that affect current-carrying capacity",
      "To reduce the voltage drop in cables",
      "To improve cable insulation properties"
    ],
    correctAnswer: "To account for installation conditions that affect current-carrying capacity",
    explanation: "Correction factors are applied in cable sizing calculations to account for installation conditions such as ambient temperature, grouping, and thermal insulation that affect the cable's current-carrying capacity."
  },
  {
    id: 32,
    question: "What design feature helps to minimize harmonics in an electrical installation?",
    options: [
      "Using smaller cables",
      "Installing RCDs",
      "Using dedicated neutral conductors for each phase in a three-phase system",
      "Increasing the number of socket outlets"
    ],
    correctAnswer: "Using dedicated neutral conductors for each phase in a three-phase system",
    explanation: "Using dedicated neutral conductors for each phase in a three-phase system (rather than a shared neutral) helps to minimize the effect of harmonics, particularly triple-n harmonics which can add up in the neutral conductor."
  },
  {
    id: 33,
    question: "Which of the following would NOT be considered an extraneous-conductive-part requiring main protective bonding?",
    options: [
      "Metal water pipe entering a building",
      "Exposed metal window frame",
      "Metal gas pipe entering a building",
      "Metal structural elements of the building accessible from inside"
    ],
    correctAnswer: "Exposed metal window frame",
    explanation: "An exposed metal window frame would not typically be considered an extraneous-conductive-part requiring main protective bonding unless it is in direct contact with the earth or other services that could introduce a potential from outside the electrical installation."
  },
  {
    id: 34,
    question: "What is the purpose of an RCD in an electrical installation?",
    options: [
      "To protect against overcurrent",
      "To protect against short circuits only",
      "To detect imbalance between live and neutral currents and disconnect the supply",
      "To prevent voltage fluctuations"
    ],
    correctAnswer: "To detect imbalance between live and neutral currents and disconnect the supply",
    explanation: "An RCD (Residual Current Device) detects imbalance between live and neutral currents, which indicates current leaking to earth, and disconnects the supply to provide protection against electric shock."
  },
  {
    id: 35,
    question: "In which situation would a Type C MCB be most appropriate?",
    options: [
      "Domestic lighting circuit",
      "Socket outlet circuit in a dwelling",
      "Circuit supplying small motors or fluorescent lighting",
      "Circuit supplying sensitive electronic equipment"
    ],
    correctAnswer: "Circuit supplying small motors or fluorescent lighting",
    explanation: "Type C MCBs are most appropriate for circuits supplying small motors or fluorescent lighting, which have moderately inductive loads with inrush currents typically 5-10 times the normal running current."
  },
  {
    id: 36,
    question: "What is the maximum number of socket outlets permitted on a 32A ring final circuit?",
    options: [
      "8 socket outlets",
      "12 socket outlets",
      "No specific limit, based on floor area served",
      "20 socket outlets maximum"
    ],
    correctAnswer: "No specific limit, based on floor area served",
    explanation: "There is no specific limit on the number of socket outlets permitted on a 32A ring final circuit. The limitation is based on the floor area served (typically 100m²) and consideration of the expected load."
  },
  {
    id: 37,
    question: "What is the minimum cross-sectional area permitted for a copper lighting circuit?",
    options: [
      "0.5mm²",
      "0.75mm²",
      "1.0mm²",
      "1.5mm²"
    ],
    correctAnswer: "1.0mm²",
    explanation: "The minimum cross-sectional area permitted for a copper lighting circuit is 1.0mm², although 1.5mm² is more commonly used."
  },
  {
    id: 38,
    question: "Which of the following is a valid reason for using RCBOs rather than a split-load consumer unit with MCBs and RCDs?",
    options: [
      "RCBOs are always less expensive",
      "RCBOs require less space in the consumer unit",
      "RCBOs provide individual RCD protection to each circuit, preventing one fault from affecting other circuits",
      "RCBOs eliminate the need for circuit protective conductors"
    ],
    correctAnswer: "RCBOs provide individual RCD protection to each circuit, preventing one fault from affecting other circuits",
    explanation: "RCBOs provide individual RCD protection to each circuit, ensuring that a fault on one circuit will not affect the operation of other circuits, which can happen with a split-load board where multiple circuits share an RCD."
  },
  {
    id: 39,
    question: "What is the voltage rating of standard low voltage installations in the UK?",
    options: [
      "110V",
      "230V single-phase, 400V three-phase",
      "240V single-phase, 415V three-phase",
      "120V single-phase, 208V three-phase"
    ],
    correctAnswer: "230V single-phase, 400V three-phase",
    explanation: "The standard nominal voltage for low voltage installations in the UK is 230V single-phase and 400V three-phase, as harmonized with European standards."
  },
  {
    id: 40,
    question: "What is the minimum IP rating for electrical equipment installed outdoors and exposed to rainfall?",
    options: [
      "IP20",
      "IP44",
      "IP55",
      "IP65"
    ],
    correctAnswer: "IP55",
    explanation: "Electrical equipment installed outdoors and exposed to rainfall should have a minimum IP rating of IP55, providing protection against dust and water jets from any direction."
  },
  {
    id: 41,
    question: "What is the primary purpose of current-using equipment classification as Class I, Class II, or Class III?",
    options: [
      "To determine energy efficiency ratings",
      "To indicate methods of protection against electric shock",
      "To specify voltage ratings",
      "To indicate current ratings"
    ],
    correctAnswer: "To indicate methods of protection against electric shock",
    explanation: "The classification of equipment as Class I, Class II, or Class III indicates the method of protection against electric shock employed in the equipment design."
  },
  {
    id: 42,
    question: "What is the maximum permitted voltage drop for circuits other than lighting in a 230V installation?",
    options: [
      "3% (6.9V)",
      "5% (11.5V)",
      "7% (16.1V)",
      "10% (23V)"
    ],
    correctAnswer: "5% (11.5V)",
    explanation: "For circuits other than lighting in a 230V installation, the maximum permitted voltage drop is 5% of the nominal voltage, which is 11.5V."
  },
  {
    id: 43,
    question: "Which of the following is NOT a factor to consider when selecting distribution board location?",
    options: [
      "Accessibility for maintenance",
      "Proximity to wet areas",
      "Brand of protective devices",
      "Proximity to main loads"
    ],
    correctAnswer: "Brand of protective devices",
    explanation: "The brand of protective devices is not a primary factor when selecting distribution board location. Key considerations include accessibility for maintenance, proximity to wet areas (to be avoided), and proximity to main loads (to minimize cable runs)."
  },
  {
    id: 44,
    question: "What is the recommended mounting height for socket outlets in domestic premises?",
    options: [
      "150mm from the floor",
      "450mm from the floor",
      "1200mm from the floor",
      "1800mm from the floor"
    ],
    correctAnswer: "450mm from the floor",
    explanation: "The recommended mounting height for standard socket outlets in domestic premises is 450mm from the finished floor level to the bottom of the socket, though this may vary for specific applications or accessibility requirements."
  },
  {
    id: 45,
    question: "Which regulation or standard specifically covers the design and installation of emergency lighting?",
    options: [
      "BS 7671",
      "BS 5266",
      "BS 5839",
      "Part P Building Regulations"
    ],
    correctAnswer: "BS 5266",
    explanation: "BS 5266 is the specific standard that covers the design, installation, and maintenance of emergency lighting systems."
  },
  {
    id: 46,
    question: "What is the minimum distance recommended between consumer units/distribution boards and gas meters?",
    options: [
      "150mm",
      "300mm",
      "500mm",
      "1000mm"
    ],
    correctAnswer: "300mm",
    explanation: "The minimum recommended separation between consumer units/distribution boards and gas meters is 300mm, to minimize risk in case of gas leaks."
  },
  {
    id: 47,
    question: "What type of cable would be most appropriate for a fire alarm system where circuit integrity during a fire is critical?",
    options: [
      "PVC twin and earth",
      "XLPE insulated cable",
      "Standard SWA cable",
      "Mineral insulated copper clad (MICC) cable"
    ],
    correctAnswer: "Mineral insulated copper clad (MICC) cable",
    explanation: "Mineral Insulated Copper Clad (MICC) cable is most appropriate for fire alarm systems where circuit integrity during a fire is critical, as it can withstand very high temperatures while maintaining circuit function."
  },
  {
    id: 48,
    question: "What is the main purpose of selectivity (discrimination) between protective devices?",
    options: [
      "To reduce installation costs",
      "To increase the number of protective devices",
      "To minimize disruption by ensuring only the protective device closest to the fault operates",
      "To increase the fault level"
    ],
    correctAnswer: "To minimize disruption by ensuring only the protective device closest to the fault operates",
    explanation: "The main purpose of selectivity (discrimination) between protective devices is to minimize disruption to the electrical installation by ensuring that only the protective device closest to the fault operates, leaving the rest of the installation unaffected."
  },
  {
    id: 49,
    question: "Which factor is most important when selecting protective devices for motor circuits?",
    options: [
      "Motor starting current characteristics",
      "Motor color",
      "Motor manufacturer",
      "Motor weight"
    ],
    correctAnswer: "Motor starting current characteristics",
    explanation: "Motor starting current characteristics are the most important factor when selecting protective devices for motor circuits, as motors typically draw much higher current during starting than during normal running, and the protective device must accommodate this without nuisance tripping."
  },
  {
    id: 50,
    question: "What is the primary purpose of a surge protective device (SPD) in an electrical installation?",
    options: [
      "To protect against overcurrent",
      "To protect equipment from transient overvoltages",
      "To disconnect the supply in case of earth faults",
      "To prevent voltage drop"
    ],
    correctAnswer: "To protect equipment from transient overvoltages",
    explanation: "The primary purpose of a surge protective device (SPD) is to protect electrical equipment from damage due to transient overvoltages, which can be caused by lightning, switching operations, or other electromagnetic events."
  }
];

export default electricalDesignQuestions;
