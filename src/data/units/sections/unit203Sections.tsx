
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
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
    )
  }
};
