
import React from 'react';
import { UnitContent } from './interfaces';

export const unit203: UnitContent = {
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
};
