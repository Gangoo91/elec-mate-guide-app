
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

const ContentSection = ({ title, content }: SectionProps) => (
  <Card className="mb-6 bg-[#22251e] border-[#FFC900]/20">
    <CardContent className="pt-6">
      <h3 className="text-[#FFC900] font-medium text-xl mb-4">{title}</h3>
      <div className="text-[#FFC900]/80 space-y-3">
        {content}
      </div>
    </CardContent>
  </Card>
);

const UnitContentPage = () => {
  const navigate = useNavigate();
  const { unitId } = useParams<{ unitId: string }>();
  
  // Unit content mapping
  const unitContent: Record<string, {
    title: string;
    description: string;
    sections: { title: string; content: React.ReactNode }[];
  }> = {
    "201": {
      title: "Health and Safety in Building Services Engineering",
      description: "Learn how to stay safe at work, spot dangers, use safety equipment, and follow the right safety rules when working with electrical equipment.",
      sections: [
        {
          title: "Why Safety Matters",
          content: (
            <>
              <p>Safety is super important when working with electricity. One mistake can lead to serious injuries or even death.</p>
              <p className="mt-2">In this unit, you'll learn how to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Spot dangers before they cause harm</li>
                <li>Use safety gear properly</li>
                <li>Follow the right steps to keep yourself and others safe</li>
                <li>Know what to do in an emergency</li>
              </ul>
            </>
          )
        },
        {
          title: "Safety Laws and Rules",
          content: (
            <>
              <p>There are important laws that protect workers:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Health and Safety at Work Act - The main law that keeps workers safe</li>
                <li>Electricity at Work Regulations - Special rules for electrical work</li>
                <li>Personal Protective Equipment (PPE) Regulations - Rules about safety gear</li>
              </ul>
              <p className="mt-2">These aren't just boring rules - they're there to save lives and prevent accidents!</p>
            </>
          )
        },
        {
          title: "Staying Safe on Site",
          content: (
            <>
              <p>When you're working on a building site or in someone's home, you need to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Always wear your safety gear (hard hat, boots, hi-vis vest)</li>
                <li>Keep your work area clean and tidy to prevent trips and falls</li>
                <li>Use the right tools for the job and check they're in good condition</li>
                <li>Know where fire exits are and what to do in an emergency</li>
              </ul>
            </>
          )
        },
        {
          title: "Working Safely with Electricity",
          content: (
            <>
              <p>Electricity can be dangerous if not handled properly:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Always turn off power before working on circuits</li>
                <li>Use proper testing equipment to check if wires are live</li>
                <li>Never take shortcuts with electrical safety</li>
                <li>Use insulated tools when working with electricity</li>
              </ul>
              <p className="mt-2">Remember: It's better to take extra time to be safe than to rush and have an accident!</p>
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

  // Get content for current unit or show not found
  const currentUnit = unitContent[unitId || ""];
  
  // Handle back navigation
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/course-content');
  };

  if (!currentUnit) {
    return (
      <MainLayout>
        <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
          <PageHeader 
            title="Unit Not Found"
            description="Sorry, we couldn't find content for this unit"
            customBackAction={handleBackClick}
          />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title={`Unit ${unitId} - ${currentUnit.title}`}
          description={currentUnit.description}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          {currentUnit.sections.map((section, index) => (
            <ContentSection 
              key={index} 
              title={section.title} 
              content={section.content} 
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default UnitContentPage;
