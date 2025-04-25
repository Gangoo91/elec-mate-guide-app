import React from 'react';
import { SectionData } from '../interfaces';

export const section1_3: SectionData = {
  title: "AC and DC Electricity",
  description: "Understanding the differences between alternating and direct current",
  content: (
    <>
      <h3 className="text-xl font-semibold mb-4">AC and DC Current Types</h3>
      <p className="mb-4">
        There are two main types of electricity: Direct Current (DC) and Alternating Current (AC). Each has distinct properties and applications.
      </p>
      
      <h4 className="text-lg font-semibold mb-3">Key Differences</h4>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>DC flows in one direction only, while AC periodically changes direction</li>
        <li>DC is produced by batteries and solar cells, AC by generators</li>
        <li>UK mains power is AC at 230V, changing direction 50 times per second (50Hz)</li>
      </ul>
    </>
  ),
  detailedContent: (
    <>
      <h3 className="text-2xl font-bold mb-6">AC and DC Electricity Explained</h3>
      
      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Direct Current (DC)</h4>
        <p className="mb-4">
          Direct Current (DC) is electrical current that flows in one direction only. The voltage level remains relatively constant over time.
        </p>
        
        <div className="bg-[#22251e] p-6 rounded-lg mb-4">
          <h5 className="text-lg font-semibold mb-3">DC Characteristics</h5>
          <ul className="list-disc pl-6 space-y-2">
            <li>Constant polarity (+ and - terminals stay the same)</li>
            <li>Steady voltage (may have some ripple but generally constant)</li>
            <li>Used in electronic devices, batteries, and solar panels</li>
            <li>Easy to store in batteries and capacitors</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Alternating Current (AC)</h4>
        <p className="mb-4">
          Alternating Current (AC) periodically changes direction, with voltage levels that vary sinusoidally over time.
        </p>
        
        <div className="bg-[#22251e] p-6 rounded-lg mb-4">
          <h5 className="text-lg font-semibold mb-3">AC Characteristics</h5>
          <ul className="list-disc pl-6 space-y-2">
            <li>Polarity changes regularly (terminals switch between + and -)</li>
            <li>Voltage follows a sine wave pattern</li>
            <li>Used in power distribution, homes, and businesses</li>
            <li>Can be easily transformed to different voltage levels</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Why AC is Used for Power Distribution</h4>
        <p className="mb-4">
          AC became the standard for power distribution for several important reasons:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">Efficient Transmission</h5>
            <p>
              AC can be easily transformed to higher voltages for transmission, which reduces power losses over long distances. Lower current at higher voltage means less energy lost as heat in the cables.
            </p>
          </div>
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">Generation Advantages</h5>
            <p>
              AC is naturally produced by rotating generators, making it easier and more efficient to generate in large quantities compared to DC.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-4">AC to DC Conversion</h4>
        <p>
          Most modern electronics actually use DC internally, even though they're powered from AC mains:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Rectifiers convert AC to DC</li>
          <li>Power supplies contain transformers, rectifiers, and filters</li>
          <li>USB chargers, laptop adapters, and phone chargers all convert AC to DC</li>
          <li>Modern HVDC (High Voltage DC) is becoming important for certain long-distance power transmission applications</li>
        </ul>
      </section>
    </>
  )
};
