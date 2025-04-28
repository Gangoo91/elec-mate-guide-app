
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}

export const sections203: Record<string, SectionData> = {
  "1.1": {
    title: "Basic Electrical Components",
    description: "Understanding the fundamental components used in electrical installations",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">Components in Electrical Installations</h3>
        <p className="mb-4">
          Electrical installations consist of various components that work together to distribute electricity safely and efficiently throughout a building.
        </p>
        
        <h4 className="text-lg font-semibold mb-3">Consumer Units</h4>
        <p className="mb-4">
          The consumer unit (also called a distribution board or fuse box) is the central hub of a domestic electrical installation:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Main switch: Allows complete isolation of the electrical installation</li>
          <li>Circuit breakers: Provide protection against overloads and short circuits</li>
          <li>RCDs (Residual Current Devices): Protect against electric shock</li>
          <li>RCBOs: Combined RCD and circuit breaker protection in a single device</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Switches and Sockets</h4>
        <p className="mb-4">
          These are the user interfaces of an electrical installation:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Light switches: One-way, two-way and intermediate switches</li>
          <li>Socket outlets: Standard 13A, USB, switched and unswitched varieties</li>
          <li>Fused connection units: For fixed appliances</li>
          <li>Specialized outlets: For cookers, showers, and other high-power applications</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Protective Devices</h4>
        <p className="mb-4">
          Safety is paramount in electrical installations:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>MCBs (Miniature Circuit Breakers): Protect individual circuits</li>
          <li>Fuses: Traditional protection that physically melts when overloaded</li>
          <li>Surge protectors: Guard against voltage spikes</li>
          <li>Time-delay devices: Allow high inrush currents without tripping</li>
        </ul>
      </>
    ),
    detailedContent: (
      <>
        <h3 className="text-2xl font-bold mb-6">Components in Detail</h3>
        
        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Consumer Units</h4>
          <p className="mb-4">
            The consumer unit is the central distribution point for electrical power in a building. Modern consumer units 
            feature advanced safety mechanisms that protect both the installation and the building occupants.
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Types of Consumer Units</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Main Switch Consumer Unit:</strong> Contains only an isolator for the entire installation</li>
              <li><strong>Split-Load Consumer Unit:</strong> Divides circuits between two or more RCDs</li>
              <li><strong>High-Integrity Consumer Unit:</strong> Provides enhanced protection with dual RCDs</li>
              <li><strong>Garage/Outbuilding Unit:</strong> Secondary units used for detached buildings</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Protection Devices</h4>
          <p className="mb-4">
            Various protection devices work together to create a safe electrical installation:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">RCD (Residual Current Device)</h5>
              <p>Detects current imbalances and disconnects power, protecting against electric shock. Standard sensitivity is 30mA for domestic installations.</p>
            </div>
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">MCB (Miniature Circuit Breaker)</h5>
              <p>Protects against overloads and short circuits with ratings from 6A to 63A for different circuit types.</p>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-4">Accessories and Components</h4>
          <p>
            A wide range of accessories completes the electrical installation:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>Switches:</strong> Various types including one-way, two-way, intermediate, and dimmer switches</li>
            <li><strong>Socket outlets:</strong> Available in switched/unswitched, single/double, and special types like USB</li>
            <li><strong>Junction boxes:</strong> Used to connect multiple cables safely in concealed installations</li>
            <li><strong>Enclosures:</strong> Metal or plastic boxes used to house control equipment</li>
          </ul>
        </section>
      </>
    )
  },
  "1.2": {
    title: "Understanding Circuits",
    description: "Learning about different types of electrical circuits in domestic and commercial installations",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">Electrical Circuits in Buildings</h3>
        <p className="mb-4">
          Different circuits serve different purposes in an electrical installation. Each is designed with specific 
          characteristics to suit the load it serves.
        </p>
        
        <h4 className="text-lg font-semibold mb-3">Lighting Circuits</h4>
        <p className="mb-4">
          Typically wired using 1.0mm² or 1.5mm² cable and protected by a 6A or 10A device:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Loop-in wiring: The traditional method where the cable loops from fitting to fitting</li>
          <li>Junction box wiring: Using central junction boxes to distribute connections</li>
          <li>One-way switching: Simple on/off control from one location</li>
          <li>Two-way switching: Control from two locations, such as at both ends of a hallway</li>
          <li>Intermediate switching: Control from three or more locations</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Power Circuits</h4>
        <p className="mb-4">
          Usually wired with 2.5mm² cable and protected by a 20A or 32A device:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Ring circuits: Cable forms a complete loop from the consumer unit and back</li>
          <li>Radial circuits: Cable extends from the consumer unit but doesn't return</li>
          <li>Socket outlet positioning requirements: Height, proximity to water, accessibility considerations</li>
          <li>Maximum recommended number of sockets per circuit</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Specialized Circuits</h4>
        <p className="mb-4">
          Certain appliances require dedicated circuits:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cooker circuits: Using 6mm² cable and 32A or 40A protection</li>
          <li>Shower circuits: Sized according to power rating (typically 6-10mm² cable)</li>
          <li>Immersion heater circuits: Usually on their own 16A circuit</li>
          <li>Outside power supplies: Requiring additional RCD protection</li>
        </ul>
      </>
    ),
    detailedContent: (
      <>
        <h3 className="text-2xl font-bold mb-6">Electrical Circuit Design and Function</h3>
        
        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Lighting Circuit Design</h4>
          <p className="mb-4">
            Lighting circuits have specific design features to ensure safe and efficient operation:
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Junction Box Method</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li>Central junction boxes distribute connections to multiple light fittings</li>
              <li>Easier fault-finding compared to loop-in wiring</li>
              <li>Requires more cable and junction boxes</li>
              <li>Each light fitting connects back to a central point</li>
            </ul>
          </div>

          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Loop-in Method</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cable runs from fitting to fitting in sequence</li>
              <li>More economical use of cable</li>
              <li>More difficult to fault-find</li>
              <li>Typically uses three-plate ceiling roses for connections</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Power Circuit Design</h4>
          <p className="mb-4">
            Power circuits distribute electricity to socket outlets and fixed appliances:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Ring Final Circuit</h5>
              <p>
                Forms a complete loop from consumer unit and back again, with these characteristics:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Protected by 32A device</li>
                <li>Uses 2.5mm² cable</li>
                <li>Maximum floor area of 100m²</li>
                <li>Unlimited number of sockets (in practice)</li>
              </ul>
            </div>
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Radial Circuit</h5>
              <p>
                Extends from consumer unit without returning, with these characteristics:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>20A protection with 2.5mm² cable (up to 50m²)</li>
                <li>32A protection with 4.0mm² cable (up to 75m²)</li>
                <li>Simpler design than ring circuits</li>
                <li>Uses less cable in certain layouts</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-4">Circuit Theory and Calculations</h4>
          <p className="mb-4">
            Understanding the theoretical aspects of circuits is essential for proper design:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Design current:</strong> Calculating the maximum current a circuit will carry</li>
            <li><strong>Diversity:</strong> Accounting for the fact that not all loads operate simultaneously</li>
            <li><strong>Voltage drop:</strong> Ensuring voltage at the farthest point remains within acceptable limits</li>
            <li><strong>Cable sizing:</strong> Selecting appropriate cable based on current-carrying capacity and installation method</li>
            <li><strong>Overload protection:</strong> Ensuring protective devices operate before cables are damaged</li>
          </ul>
        </section>
      </>
    )
  }
};

export default sections203;
