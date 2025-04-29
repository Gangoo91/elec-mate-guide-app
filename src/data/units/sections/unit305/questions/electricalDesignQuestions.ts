
export const electricalDesignQuestions = [
  {
    id: 1,
    question: "What is the maximum demand of a circuit?",
    options: [
      "The total connected load",
      "The sum of all circuit currents",
      "The estimated maximum power that will be required at any one time",
      "The power factor multiplied by the voltage"
    ],
    correctAnswer: "The estimated maximum power that will be required at any one time",
    explanation: "Maximum demand is the estimated maximum power that will be required at any one time, which is less than the total connected load due to diversity factors."
  },
  {
    id: 2,
    question: "What is diversity in electrical design?",
    options: [
      "The range of different circuits in an installation",
      "The ratio of maximum demand to total connected load",
      "The number of different appliances in an installation",
      "The geographical spread of an installation's circuits"
    ],
    correctAnswer: "The ratio of maximum demand to total connected load",
    explanation: "Diversity is the principle that not all appliances or equipment will be used simultaneously at full load, which is expressed as the ratio of maximum demand to total connected load."
  },
  {
    id: 3,
    question: "When calculating the cable size for a circuit, which of these factors must be considered?",
    options: [
      "Only the current-carrying capacity",
      "Only the voltage drop",
      "Only the fault current protection",
      "All of these factors"
    ],
    correctAnswer: "All of these factors",
    explanation: "Cable sizing must consider current-carrying capacity, voltage drop, and fault current protection to ensure safe and efficient operation."
  },
  {
    id: 4,
    question: "What is the recommended maximum voltage drop for lighting circuits in BS 7671?",
    options: [
      "1%",
      "3%",
      "5%",
      "8%"
    ],
    correctAnswer: "3%",
    explanation: "BS 7671 recommends a maximum voltage drop of 3% for lighting circuits from the origin of the installation."
  },
  {
    id: 5,
    question: "What is the purpose of a discrimination study?",
    options: [
      "To identify faulty equipment",
      "To ensure only the protective device closest to a fault operates",
      "To calculate energy usage",
      "To measure power factor correction"
    ],
    correctAnswer: "To ensure only the protective device closest to a fault operates",
    explanation: "A discrimination study ensures that when a fault occurs, only the protective device closest to the fault operates, maintaining supply to the rest of the installation."
  },
  {
    id: 6,
    question: "Which of these is NOT a type of distribution board arrangement?",
    options: [
      "Split load",
      "All MCB",
      "High impedance",
      "Consumer unit"
    ],
    correctAnswer: "High impedance",
    explanation: "High impedance is not a type of distribution board arrangement. Common arrangements include split load, all MCB, and consumer units for domestic installations."
  },
  {
    id: 7,
    question: "What is meant by the term 'design current' in cable calculations?",
    options: [
      "The current the circuit will never exceed",
      "The maximum current the circuit is expected to carry under normal operation",
      "The minimum current needed for the circuit to function",
      "The current at which the protective device will operate"
    ],
    correctAnswer: "The maximum current the circuit is expected to carry under normal operation",
    explanation: "The design current is the maximum current the circuit is expected to carry under normal operation, which is used as the basis for cable selection."
  },
  {
    id: 8,
    question: "When segregating circuits in a commercial installation, which of these would typically be on a separate distribution board?",
    options: [
      "Kitchen and bathroom lights",
      "Emergency lighting and normal lighting",
      "Upstairs and downstairs sockets",
      "Indoor and outdoor lighting"
    ],
    correctAnswer: "Emergency lighting and normal lighting",
    explanation: "Emergency lighting circuits should be segregated from normal lighting and supplied from a separate distribution board for safety and reliability."
  },
  {
    id: 9,
    question: "What is the typical diversity factor applied to socket outlets in a domestic property?",
    options: [
      "100%",
      "75%",
      "50% of total current demand or 100% of largest circuit",
      "25%"
    ],
    correctAnswer: "50% of total current demand or 100% of largest circuit",
    explanation: "For domestic socket outlets, a typical diversity factor is 50% of the total current demand or 100% of the largest circuit, whichever is larger."
  },
  {
    id: 10,
    question: "What does the term 'Iz' represent in cable sizing calculations?",
    options: [
      "The nominal current of the protective device",
      "The current-carrying capacity of the cable under installation conditions",
      "The design current of the circuit",
      "The impedance of the circuit"
    ],
    correctAnswer: "The current-carrying capacity of the cable under installation conditions",
    explanation: "Iz represents the current-carrying capacity of the cable under the specific installation conditions, accounting for factors like ambient temperature and grouping."
  },
  {
    id: 11,
    question: "What is the main purpose of cable derating factors?",
    options: [
      "To increase the current-carrying capacity of cables",
      "To reduce the cost of installations",
      "To adjust the current-carrying capacity based on installation conditions",
      "To calculate voltage drop more accurately"
    ],
    correctAnswer: "To adjust the current-carrying capacity based on installation conditions",
    explanation: "Derating factors adjust the current-carrying capacity of cables based on installation conditions such as ambient temperature, grouping, and thermal insulation."
  },
  {
    id: 12,
    question: "According to BS 7671, what is the maximum permitted earth fault loop impedance for a 32A Type B circuit breaker protecting a socket outlet circuit?",
    options: [
      "0.4Ω",
      "0.8Ω",
      "1.2Ω",
      "1.44Ω"
    ],
    correctAnswer: "1.44Ω",
    explanation: "For a 32A Type B circuit breaker, the maximum permitted earth fault loop impedance is 1.44Ω according to BS 7671."
  },
  {
    id: 13,
    question: "Which regulation document specifically covers the design of electrical installations?",
    options: [
      "BS 5839",
      "BS 7671",
      "BS 5266",
      "BS 9999"
    ],
    correctAnswer: "BS 7671",
    explanation: "BS 7671 (IET Wiring Regulations) specifically covers the design of electrical installations in the UK."
  },
  {
    id: 14,
    question: "What is the purpose of the 'Design Stage' certification in an electrical installation?",
    options: [
      "To record who installed the system",
      "To confirm the design meets the requirements of BS 7671",
      "To verify that the installation has been tested",
      "To transfer ownership to the client"
    ],
    correctAnswer: "To confirm the design meets the requirements of BS 7671",
    explanation: "The Design Stage certification confirms that the design meets the requirements of BS 7671 before installation begins."
  },
  {
    id: 15,
    question: "In a commercial building, what factor would most influence the choice between single-phase and three-phase supply?",
    options: [
      "Building height",
      "Total load requirement",
      "Number of floors",
      "Age of the building"
    ],
    correctAnswer: "Total load requirement",
    explanation: "The total load requirement is the primary factor in determining whether a single-phase or three-phase supply is needed for a commercial building."
  },
  {
    id: 16,
    question: "What is the purpose of a load schedule in electrical design?",
    options: [
      "To track installation progress",
      "To document all loads and their electrical characteristics",
      "To calculate billing rates",
      "To assign tasks to electricians"
    ],
    correctAnswer: "To document all loads and their electrical characteristics",
    explanation: "A load schedule documents all loads in an installation and their electrical characteristics including power ratings, current demands, and locations."
  },
  {
    id: 17,
    question: "What does the term 'discrimination' mean in relation to circuit protection?",
    options: [
      "Selecting different brands of protection devices",
      "Using different types of protection devices",
      "Ensuring only the protection device closest to a fault operates",
      "Installing protection devices at different heights"
    ],
    correctAnswer: "Ensuring only the protection device closest to a fault operates",
    explanation: "Discrimination (selectivity) ensures that when a fault occurs, only the protection device closest to the fault operates, leaving the rest of the installation unaffected."
  },
  {
    id: 18,
    question: "Which of these cable installation methods typically has the highest current-carrying capacity?",
    options: [
      "Cables clipped direct to a surface",
      "Cables in conduit on a wall",
      "Cables buried directly in the ground",
      "Cables in trunking"
    ],
    correctAnswer: "Cables clipped direct to a surface",
    explanation: "Cables clipped direct to a surface typically have the highest current-carrying capacity as they have better heat dissipation compared to enclosed methods."
  },
  {
    id: 19,
    question: "What is the primary purpose of circuit segregation in electrical installations?",
    options: [
      "To reduce costs",
      "To separate circuits by function for safety and reliability",
      "To simplify the wiring layout",
      "To reduce cable lengths"
    ],
    correctAnswer: "To separate circuits by function for safety and reliability",
    explanation: "Circuit segregation separates circuits by function (e.g., power, lighting, emergency systems) to enhance safety, reliability, and maintenance."
  },
  {
    id: 20,
    question: "Which factor has the most significant impact on cable voltage drop?",
    options: [
      "Cable insulation material",
      "Cable length",
      "Installation method",
      "Cable color"
    ],
    correctAnswer: "Cable length",
    explanation: "Cable length has the most significant impact on voltage drop, as voltage drop increases linearly with the length of the cable."
  },
  {
    id: 21,
    question: "What does the term 'IP rating' refer to in electrical design?",
    options: [
      "Internet Protocol security level",
      "Ingress Protection against solids and liquids",
      "Internal Power rating",
      "Installation Performance standard"
    ],
    correctAnswer: "Ingress Protection against solids and liquids",
    explanation: "IP (Ingress Protection) rating refers to the degree of protection provided by enclosures against intrusion of solids and liquids."
  },
  {
    id: 22,
    question: "What is the recommended mounting height for standard socket outlets in domestic properties?",
    options: [
      "150mm from the floor",
      "450mm from the floor",
      "900mm from the floor",
      "1800mm from the floor"
    ],
    correctAnswer: "450mm from the floor",
    explanation: "The recommended mounting height for standard socket outlets in domestic properties is typically 450mm from the finished floor level to the center of the socket."
  },
  {
    id: 23,
    question: "Which type of circuit would typically require the largest cable size?",
    options: [
      "Lighting circuit",
      "Cooker circuit",
      "Socket outlet ring circuit",
      "Doorbell circuit"
    ],
    correctAnswer: "Cooker circuit",
    explanation: "A cooker circuit would typically require the largest cable size due to the high power demand of electric cookers compared to the other listed circuits."
  },
  {
    id: 24,
    question: "Which of the following is a correct method for calculating the design current of a single-phase circuit?",
    options: [
      "Power (W) ÷ Voltage (V)",
      "Power (W) × Voltage (V)",
      "Power (W) ÷ (Voltage (V) × Power Factor)",
      "Power (W) ÷ (Voltage (V) × √3)"
    ],
    correctAnswer: "Power (W) ÷ (Voltage (V) × Power Factor)",
    explanation: "The design current for a single-phase circuit is calculated as Power (W) divided by the product of Voltage (V) and Power Factor."
  },
  {
    id: 25,
    question: "What is the minimum recommended lighting level (in lux) for general office work areas?",
    options: [
      "100 lux",
      "300 lux",
      "500 lux",
      "750 lux"
    ],
    correctAnswer: "500 lux",
    explanation: "The minimum recommended lighting level for general office work areas is 500 lux according to lighting design standards."
  },
  {
    id: 26,
    question: "When would you use the adiabatic equation in electrical design?",
    options: [
      "To calculate lighting levels",
      "To determine cable size for short-circuit protection",
      "To measure insulation resistance",
      "To verify power factor correction"
    ],
    correctAnswer: "To determine cable size for short-circuit protection",
    explanation: "The adiabatic equation is used to determine minimum cable size for short-circuit protection, ensuring the cable can withstand the energy released during a fault."
  },
  {
    id: 27,
    question: "What is the purpose of an electricity supply capacity assessment?",
    options: [
      "To determine the maximum potential solar generation capacity",
      "To calculate the building's energy efficiency rating",
      "To check if the existing supply can handle new loads",
      "To measure power quality issues"
    ],
    correctAnswer: "To check if the existing supply can handle new loads",
    explanation: "An electricity supply capacity assessment determines if the existing supply has sufficient capacity to handle proposed additional loads without upgrading."
  },
  {
    id: 28,
    question: "What does FELV stand for in electrical installations?",
    options: [
      "Functional Extra-Low Voltage",
      "Fault Electrical Loss Value",
      "Functional Electrical Low Voltage",
      "Fused Extra-Low Voltage"
    ],
    correctAnswer: "Functional Extra-Low Voltage",
    explanation: "FELV stands for Functional Extra-Low Voltage, which is an extra-low voltage system that doesn't provide the same safety level as SELV or PELV systems."
  },
  {
    id: 29,
    question: "What is the most appropriate supply type for a large industrial motor?",
    options: [
      "110V single-phase",
      "230V single-phase",
      "400V three-phase",
      "24V DC"
    ],
    correctAnswer: "400V three-phase",
    explanation: "A 400V three-phase supply is most appropriate for large industrial motors due to higher efficiency, better starting characteristics, and higher power capacity."
  },
  {
    id: 30,
    question: "Which of the following is NOT a factor in determining the size of the main protective bonding conductor?",
    options: [
      "The cross-sectional area of the supply neutral conductor",
      "The distance to the main earthing terminal",
      "The type of earthing system",
      "The cross-sectional area of the line conductors"
    ],
    correctAnswer: "The distance to the main earthing terminal",
    explanation: "The distance to the main earthing terminal is not a factor in determining the size of the main protective bonding conductor. It's primarily based on the cross-sectional area of the supply conductors."
  },
  {
    id: 31,
    question: "What is the purpose of a G59/G99 application in electrical design?",
    options: [
      "To register a new consumer unit installation",
      "To apply for a new electrical supply connection",
      "To notify the DNO of generation equipment connected to the network",
      "To obtain approval for a temporary construction supply"
    ],
    correctAnswer: "To notify the DNO of generation equipment connected to the network",
    explanation: "G59/G99 applications notify the Distribution Network Operator (DNO) of generation equipment that will be connected to the network, ensuring it meets necessary requirements."
  },
  {
    id: 32,
    question: "In electrical design drawings, what does a dotted line typically represent?",
    options: [
      "Existing wiring that is to remain",
      "New wiring to be installed",
      "Wiring concealed (e.g., under floor or in ceiling)",
      "Emergency lighting circuits"
    ],
    correctAnswer: "Wiring concealed (e.g., under floor or in ceiling)",
    explanation: "In electrical design drawings, dotted lines typically represent wiring that will be concealed, such as under floors or within ceilings and walls."
  },
  {
    id: 33,
    question: "What class of protection relies on both basic insulation and supplementary insulation?",
    options: [
      "Class I",
      "Class II",
      "Class III",
      "Class IV"
    ],
    correctAnswer: "Class II",
    explanation: "Class II protection relies on both basic insulation and supplementary insulation or reinforced insulation, without requiring a protective earth connection."
  },
  {
    id: 34,
    question: "When would you use an RCD with a 10mA trip current rather than the standard 30mA?",
    options: [
      "For standard socket outlets",
      "For lighting circuits",
      "For equipment used in wet areas or by vulnerable people",
      "For three-phase industrial equipment"
    ],
    correctAnswer: "For equipment used in wet areas or by vulnerable people",
    explanation: "10mA RCDs provide higher sensitivity protection and are used for equipment in wet areas or for use by vulnerable people, offering enhanced protection against electric shock."
  },
  {
    id: 35,
    question: "Which of these is an appropriate external design influence code for an outdoor location exposed to rain?",
    options: [
      "AD1",
      "AD2",
      "AD3",
      "AD4"
    ],
    correctAnswer: "AD3",
    explanation: "AD3 is the appropriate external design influence code for locations exposed to rain, indicating that equipment must be protected against water falling as rain."
  },
  {
    id: 36,
    question: "What is the primary purpose of a distribution board schedule?",
    options: [
      "To show the physical layout of the distribution board",
      "To document all circuits, their protection, and cable specifications",
      "To calculate the cost of the installation",
      "To determine the installation timeline"
    ],
    correctAnswer: "To document all circuits, their protection, and cable specifications",
    explanation: "A distribution board schedule documents all circuits connected to the board, including their protection devices, cable specifications, and what they supply."
  },
  {
    id: 37,
    question: "What does the term 'prospective short-circuit current' refer to?",
    options: [
      "The current that would flow if a short circuit occurred at a specific point",
      "The expected current flow under normal operation",
      "The maximum current a circuit breaker can handle",
      "The rated current of the installation's main fuse"
    ],
    correctAnswer: "The current that would flow if a short circuit occurred at a specific point",
    explanation: "Prospective short-circuit current is the current that would flow if a short circuit of negligible impedance occurred at a specific point in the electrical system."
  },
  {
    id: 38,
    question: "Which of these systems would typically require the highest level of supply security?",
    options: [
      "Residential lighting",
      "Office air conditioning",
      "Hospital operating theater",
      "Retail display lighting"
    ],
    correctAnswer: "Hospital operating theater",
    explanation: "Hospital operating theaters require the highest level of supply security due to the critical nature of procedures and potential life-threatening consequences of power loss."
  },
  {
    id: 39,
    question: "What is the maximum number of socket outlets typically permitted on a 32A ring final circuit?",
    options: [
      "12 socket outlets",
      "No specific limit, based on floor area",
      "20 socket outlets",
      "8 socket outlets"
    ],
    correctAnswer: "No specific limit, based on floor area",
    explanation: "There is no specific numerical limit on socket outlets for a 32A ring final circuit; the number is determined by the floor area served rather than a fixed count."
  },
  {
    id: 40,
    question: "Which document would contain the client's specific requirements for an electrical installation?",
    options: [
      "BS 7671",
      "Electrical Installation Certificate",
      "Design specification",
      "Distribution network operator agreement"
    ],
    correctAnswer: "Design specification",
    explanation: "The design specification document contains the client's specific requirements for the electrical installation, forming the basis for the design process."
  },
  {
    id: 41,
    question: "What is the purpose of a switchgear discrimination study?",
    options: [
      "To determine the optimal position for switchgear",
      "To ensure that protective devices operate in the correct sequence",
      "To calculate energy consumption of switchgear",
      "To determine the maintenance schedule for switchgear"
    ],
    correctAnswer: "To ensure that protective devices operate in the correct sequence",
    explanation: "A switchgear discrimination study ensures that protective devices operate in the correct sequence, with the device closest to the fault operating first."
  },
  {
    id: 42,
    question: "What is the primary function of the 'Electrical Design Certificate'?",
    options: [
      "To declare that the design meets the requirements of BS 7671",
      "To certify that the installation has been tested",
      "To transfer ownership of the installation",
      "To apply for electricity supply connection"
    ],
    correctAnswer: "To declare that the design meets the requirements of BS 7671",
    explanation: "The Electrical Design Certificate declares that the electrical design meets the requirements of BS 7671 and other applicable standards."
  },
  {
    id: 43,
    question: "When designing a high-efficiency lighting system, which of these technologies would typically be preferred?",
    options: [
      "Incandescent lamps",
      "Halogen lamps",
      "LED lighting",
      "Mercury vapor lamps"
    ],
    correctAnswer: "LED lighting",
    explanation: "LED lighting would be preferred for high-efficiency lighting systems due to its superior energy efficiency, longer lifespan, and lower maintenance requirements."
  },
  {
    id: 44,
    question: "What is the minimum height above ground required for overhead lines crossing a road?",
    options: [
      "3.5 meters",
      "5.2 meters",
      "5.8 meters",
      "6.7 meters"
    ],
    correctAnswer: "5.8 meters",
    explanation: "The minimum height required for overhead lines crossing a road is 5.8 meters according to UK regulations."
  },
  {
    id: 45,
    question: "When would you need to apply for Building Regulations approval for electrical work?",
    options: [
      "For any electrical work in a commercial building",
      "For notifiable electrical work in dwellings",
      "Only for new electrical installations",
      "Only when changing the consumer unit"
    ],
    correctAnswer: "For notifiable electrical work in dwellings",
    explanation: "Building Regulations approval is needed for notifiable electrical work in dwellings, which includes new circuits, consumer unit replacements, and work in special locations."
  },
  {
    id: 46,
    question: "What is the definition of 'connected load' in electrical design?",
    options: [
      "The load that is currently drawing current",
      "The sum of the rated powers of all connected equipment",
      "The maximum load permitted by the supply company",
      "The load after diversity factors are applied"
    ],
    correctAnswer: "The sum of the rated powers of all connected equipment",
    explanation: "Connected load is the sum of the rated powers of all equipment connected to the electrical system, without considering diversity factors."
  },
  {
    id: 47,
    question: "Which of these design approaches is most sustainable?",
    options: [
      "Oversizing all circuits for future expansion",
      "Using the minimum cable sizes permitted by regulations",
      "Right-sizing cables and equipment based on actual requirements with some provision for future loads",
      "Using the highest rated equipment regardless of load"
    ],
    correctAnswer: "Right-sizing cables and equipment based on actual requirements with some provision for future loads",
    explanation: "Right-sizing cables and equipment based on actual requirements with reasonable provision for future loads is most sustainable, balancing material usage, energy efficiency, and future flexibility."
  },
  {
    id: 48,
    question: "What is the main purpose of zoning in bathroom electrical design?",
    options: [
      "To create visual separation of spaces",
      "To define areas with different safety requirements based on proximity to water",
      "To allocate different lighting levels",
      "To separate circuits by function"
    ],
    correctAnswer: "To define areas with different safety requirements based on proximity to water",
    explanation: "Bathroom zoning defines areas with different safety requirements based on proximity to water sources, with stricter requirements for zones closer to water."
  },
  {
    id: 49,
    question: "In lighting design calculations, what does the 'Maintenance Factor' account for?",
    options: [
      "Costs of maintaining the lighting system",
      "Reduction in light output over time due to aging and dirt",
      "Frequency of lamp replacement",
      "Energy consumption for maintenance"
    ],
    correctAnswer: "Reduction in light output over time due to aging and dirt",
    explanation: "The Maintenance Factor in lighting calculations accounts for the reduction in light output over time due to lamp aging, dirt accumulation, and deterioration of reflective surfaces."
  },
  {
    id: 50,
    question: "Which of the following would be considered during a power quality assessment?",
    options: [
      "Only voltage fluctuations",
      "Only harmonic distortion",
      "Only frequency variations",
      "All of these factors"
    ],
    correctAnswer: "All of these factors",
    explanation: "A power quality assessment would consider multiple factors including voltage fluctuations, harmonic distortion, and frequency variations, as well as other power quality parameters."
  }
];
