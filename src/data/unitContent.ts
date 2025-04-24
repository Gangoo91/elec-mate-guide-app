import React from 'react';

export interface UnitContent {
  title: string;
  description: string;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
}

export const unitContent: Record<string, UnitContent> = {
  "201": {
    title: "Health and Safety in Building Services Engineering",
    description: "Master essential workplace safety practices and regulations for electrical installations. Learn to identify hazards, use protective equipment, and follow proper safety procedures.",
    sections: [
      {
        title: "Unit Overview",
        content: (
          <>
            <p className="mb-4">This unit is fundamental to your development as an electrical professional. You'll learn how to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Identify and prevent workplace hazards</li>
              <li>Use personal protective equipment (PPE) correctly</li>
              <li>Follow essential safety procedures</li>
              <li>Respond to emergencies effectively</li>
              <li>Handle electrical equipment safely</li>
            </ul>
            <p>By the end of this unit, you'll be confident in maintaining a safe working environment.</p>
          </>
        )
      },
      {
        title: "Key Learning Objectives",
        content: (
          <div className="space-y-4">
            <div>
              <h4 className="text-[#FFC900] font-medium text-lg mb-2">1. Understanding Health and Safety Legislation</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Health and Safety at Work Act 1974</li>
                <li>Electricity at Work Regulations 1989</li>
                <li>Personal Protective Equipment Regulations</li>
                <li>Manual Handling Operations Regulations</li>
                <li>Your legal responsibilities as an electrical worker</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#FFC900] font-medium text-lg mb-2">2. Identifying and Preventing Hazards</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Common workplace hazards in electrical work</li>
                <li>Risk assessment procedures</li>
                <li>Safe working practices</li>
                <li>Preventing accidents and injuries</li>
                <li>Environmental hazards and controls</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        title: "Assessment Criteria",
        content: (
          <>
            <p className="mb-4">To pass this unit, you'll need to demonstrate:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Understanding of relevant health and safety legislation</li>
              <li>Ability to identify and assess workplace hazards</li>
              <li>Knowledge of proper PPE usage and maintenance</li>
              <li>Understanding of emergency procedures</li>
              <li>Practical application of safe working practices</li>
            </ul>
          </>
        )
      }
    ]
  },
  "202": {
    title: "Principles of Electrical Science",
    description: "Get to know the basics of electricity - how it works, what voltage and current mean, and how to measure them. Think of it as learning the ABC's of electrical work!",
    sections: [
      {
        title: "What Is Electricity?",
        content: (
          <>
            <p>Electricity is the flow of tiny particles called electrons. Think of it like water flowing through a pipe.</p>
            <p className="mt-2">The key things you'll learn about are:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Voltage: The pressure pushing the electrons (measured in volts, V)</li>
              <li>Current: How many electrons are flowing (measured in amps, A)</li>
              <li>Resistance: What slows down the flow (measured in ohms, Ω)</li>
            </ul>
          </>
        )
      },
      {
        title: "Ohm's Law - The Basic Rule",
        content: (
          <>
            <p>Ohm's Law is a simple but important rule: Voltage = Current × Resistance</p>
            <p className="mt-2">Or written as: V = I × R</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>If you know any two values, you can find the third</li>
              <li>This helps you work out what's happening in a circuit</li>
              <li>It's used every day by electricians to solve problems</li>
            </ul>
            <p className="mt-2">Example: If the voltage is 230V and the resistance is 23Ω, the current is 10A</p>
          </>
        )
      },
      {
        title: "AC and DC Electricity",
        content: (
          <>
            <p>There are two main types of electricity:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Direct Current (DC): Electricity that flows in one direction only (like in batteries)</li>
              <li>Alternating Current (AC): Electricity that changes direction many times per second (what comes from wall sockets)</li>
            </ul>
            <p className="mt-2">In the UK, mains electricity is AC at 230V and changes direction 50 times per second (50Hz).</p>
          </>
        )
      },
      {
        title: "Measuring Electricity",
        content: (
          <>
            <p>As an electrician, you'll use different tools to measure electricity:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Voltmeter: Measures voltage</li>
              <li>Ammeter: Measures current</li>
              <li>Ohmmeter: Measures resistance</li>
              <li>Multimeter: Can measure all three</li>
            </ul>
            <p className="mt-2">Learning to use these tools correctly is an important part of this unit.</p>
          </>
        )
      }
    ]
  },
  "203": {
    title: "Electrical Installations Technology",
    description: "Learn about the different parts used in electrical installations, like switches and sockets. You'll discover how to put them together safely in homes and buildings.",
    sections: [
      {
        title: "Basic Electrical Components",
        content: (
          <>
            <p>An electrical installation includes many different parts:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Switches: Turn things on and off</li>
              <li>Sockets: Where you plug appliances in</li>
              <li>Consumer unit (fuse box): Main control point for all circuits</li>
              <li>Circuit breakers: Automatically turn off power if something goes wrong</li>
              <li>Cables: Carry electricity from place to place</li>
            </ul>
          </>
        )
      },
      {
        title: "Understanding Circuits",
        content: (
          <>
            <p>A circuit is a complete path for electricity to flow around. Most homes have several types:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Lighting circuits: For ceiling lights and lamps</li>
              <li>Power circuits: For sockets and high-power devices</li>
              <li>Dedicated circuits: For special appliances like cookers or showers</li>
            </ul>
            <p className="mt-2">Each circuit is protected by its own fuse or circuit breaker.</p>
          </>
        )
      },
      {
        title: "Cables and Wiring",
        content: (
          <>
            <p>Different types of cables are used for different jobs:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Twin and earth: Most common for home wiring</li>
              <li>3-core and earth: For 2-way switching (controlling one light from two places)</li>
              <li>Armored cable: For outdoor use or where extra protection is needed</li>
            </ul>
            <p className="mt-2">Cable size (thickness) depends on how much current it needs to carry safely.</p>
          </>
        )
      },
      {
        title: "Earthing and Bonding",
        content: (
          <>
            <p>Earthing is a safety system that protects people from electric shocks:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The earth wire gives electricity a safe path to ground if something goes wrong</li>
              <li>Main bonding connects metal pipes (water, gas) to the earth system</li>
              <li>Supplementary bonding connects metal parts in bathrooms and kitchens</li>
            </ul>
            <p className="mt-2">Without proper earthing, metal parts of appliances could become dangerous if a fault happens.</p>
          </>
        )
      }
    ]
  },
  "204": {
    title: "Installation of Wiring Systems and Enclosures",
    description: "Get hands-on experience with installing electrical wiring. You'll learn how to run cables, set up electrical boxes, and connect everything properly.",
    sections: [
      {
        title: "Planning Your Installation",
        content: (
          <>
            <p>Before you start any wiring work, you need to plan carefully:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Check building plans to know where cables should run</li>
              <li>Make sure you have the right materials and tools</li>
              <li>Think about cable routes to avoid problems later</li>
              <li>Consider future needs - it's easier to install extra now than later</li>
            </ul>
          </>
        )
      },
      {
        title: "Cable Installation Methods",
        content: (
          <>
            <p>There are several ways to install cables in a building:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Clipped directly to a surface (quick and easy)</li>
              <li>Inside plastic trunking (neat and protects cables)</li>
              <li>Inside conduit (metal or plastic tubes that provide strong protection)</li>
              <li>Under floorboards or through ceiling spaces (hidden from view)</li>
            </ul>
            <p className="mt-2">The method you choose depends on the situation and what looks best.</p>
          </>
        )
      },
      {
        title: "Working with Enclosures",
        content: (
          <>
            <p>"Enclosures" means boxes and housings that contain electrical connections:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Back boxes: Fitted into walls for switches and sockets</li>
              <li>Junction boxes: For joining cables together</li>
              <li>Consumer units: Main distribution boards</li>
              <li>Trunking: Plastic channels that hold and protect cables</li>
            </ul>
            <p className="mt-2">You'll learn how to choose the right enclosures and fit them correctly.</p>
          </>
        )
      },
      {
        title: "Making Good Connections",
        content: (
          <>
            <p>How you connect wires is super important for safety and reliability:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Strip cables properly without damaging the conductors</li>
              <li>Use the right terminals for different wire sizes</li>
              <li>Make sure connections are tight but not over-tightened</li>
              <li>Leave enough slack in cables but not too much</li>
            </ul>
            <p className="mt-2">Bad connections can cause overheating, fires, or equipment failures.</p>
          </>
        )
      }
    ]
  },
  "210": {
    title: "Understand How to Communicate with Others",
    description: "Learn how to talk to customers and work well with your team. This helps you explain your work clearly and become a better professional.",
    sections: [
      {
        title: "Why Communication Matters",
        content: (
          <>
            <p>Good communication is just as important as technical skills:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>It helps prevent misunderstandings and mistakes</li>
              <li>It builds trust with customers and colleagues</li>
              <li>It makes work go more smoothly and efficiently</li>
              <li>It helps you get ahead in your career</li>
            </ul>
          </>
        )
      },
      {
        title: "Talking with Customers",
        content: (
          <>
            <p>When dealing with customers:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Use simple, non-technical language they can understand</li>
              <li>Listen carefully to their needs and concerns</li>
              <li>Be polite and professional at all times</li>
              <li>Explain what you're doing and why</li>
            </ul>
            <p className="mt-2">Remember: To the customer, you represent your company and the electrical trade.</p>
          </>
        )
      },
      {
        title: "Working with Your Team",
        content: (
          <>
            <p>On a job site, you'll work with other electricians and different trades:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Share information about what you're doing and any issues</li>
              <li>Ask questions if you're not sure about something</li>
              <li>Be clear about when you'll finish tasks</li>
              <li>Report problems promptly rather than hiding them</li>
            </ul>
            <p className="mt-2">Good teamwork depends on good communication!</p>
          </>
        )
      },
      {
        title: "Written Communication",
        content: (
          <>
            <p>You'll also need to write clearly for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Job sheets and time records</li>
              <li>Reports on work completed</li>
              <li>Email messages to customers or suppliers</li>
              <li>Notes for other workers who might continue your work</li>
            </ul>
            <p className="mt-2">Even if you prefer practical work, good writing skills will help your career.</p>
          </>
        )
      }
    ]
  }
};
