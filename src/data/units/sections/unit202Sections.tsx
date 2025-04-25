
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}

export const sections202: Record<string, SectionData> = {
  "1.1": {
    title: "What Is Electricity?",
    description: "Understanding the fundamentals of electrical energy and charge",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">The Nature of Electricity</h3>
        <p className="mb-4">
          Electricity is a form of energy resulting from the existence of charged particles (electrons and protons). 
          In electrical work, we're mainly concerned with the movement of electrons through conductors.
        </p>
      </>
    ),
    detailedContent: (
      <>
        <h3 className="text-2xl font-bold mb-6">Comprehensive Guide to Electricity</h3>
        
        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Fundamental Concepts</h4>
          <p className="mb-4">
            Electricity is a fascinating phenomenon that forms the backbone of modern technology. At its core, 
            electricity is about the movement and interaction of charged particles, primarily electrons.
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Key Components of Electricity</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Electrons:</strong> Negatively charged particles that move through conductors</li>
              <li><strong>Protons:</strong> Positively charged particles found in the nucleus of atoms</li>
              <li><strong>Neutrons:</strong> Neutral particles that stabilize the atomic nucleus</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">How Electricity Flows</h4>
          <p className="mb-4">
            Electricity flows from areas of high potential (voltage) to areas of low potential, similar to how water 
            flows from a high point to a low point. This flow of electrons is what we call electric current.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Conductors</h5>
              <p>Materials that allow easy flow of electrons, such as metals like copper and aluminum.</p>
            </div>
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Insulators</h5>
              <p>Materials that resist the flow of electrons, like rubber, plastic, and glass.</p>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-4">Practical Implications</h4>
          <p>
            Understanding electricity is crucial for electricians. It allows you to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Design safe and efficient electrical systems</li>
            <li>Troubleshoot complex electrical problems</li>
            <li>Select appropriate materials and components</li>
            <li>Ensure the safety of electrical installations</li>
          </ul>
        </section>
      </>
    )
  },
  "1.2": {
    title: "Ohm's Law - The Basic Rule",
    description: "Understanding the relationship between voltage, current, and resistance",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">Ohm's Law in Detail</h3>
        <p className="mb-4">
          Ohm's Law states that the current flowing through a conductor is directly proportional to the voltage 
          and inversely proportional to the resistance.
        </p>
        
        <h4 className="text-lg font-semibold mb-3">The Formula</h4>
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <p className="text-lg font-mono">V = I × R</p>
          <p>Where:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>V = Voltage (in Volts)</li>
            <li>I = Current (in Amperes)</li>
            <li>R = Resistance (in Ohms)</li>
          </ul>
        </div>

        <h4 className="text-lg font-semibold mb-3">Practical Examples</h4>
        <div className="space-y-3">
          <p>Example 1: Finding Current</p>
          <ul className="list-disc pl-6 mb-3">
            <li>If voltage = 230V and resistance = 23Ω</li>
            <li>Current = 230V ÷ 23Ω = 10A</li>
          </ul>

          <p>Example 2: Finding Resistance</p>
          <ul className="list-disc pl-6">
            <li>If voltage = 12V and current = 2A</li>
            <li>Resistance = 12V ÷ 2A = 6Ω</li>
          </ul>
        </div>
      </>
    ),
    detailedContent: (
      <>
        <h3 className="text-2xl font-bold mb-6">Master Ohm's Law</h3>
        
        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Complete Understanding of Ohm's Law</h4>
          <p className="mb-4">
            Ohm's Law is one of the most fundamental principles in electrical theory. It establishes the relationship 
            between voltage (V), current (I), and resistance (R) in an electrical circuit.
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">The Three Forms of Ohm's Law</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li>V = I × R (To find voltage)</li>
              <li>I = V ÷ R (To find current)</li>
              <li>R = V ÷ I (To find resistance)</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">The Ohm's Law Triangle</h4>
          <p className="mb-4">
            Many electricians remember Ohm's Law using a triangle diagram. Cover the quantity you want to find, 
            and the remaining values show you how to calculate it.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Power and Ohm's Law</h5>
              <p>
                Ohm's Law can be extended to calculate power (P) in a circuit:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>P = V × I (Power = Voltage × Current)</li>
                <li>P = I² × R (Power = Current² × Resistance)</li>
                <li>P = V² ÷ R (Power = Voltage² ÷ Resistance)</li>
              </ul>
            </div>
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Limitations of Ohm's Law</h5>
              <p>
                Ohm's Law has some limitations:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Only applies to purely resistive circuits</li>
                <li>Doesn't apply to non-linear components (diodes, etc.)</li>
                <li>Temperature changes can affect resistance values</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-4">Real-World Applications</h4>
          <p>
            Electricians use Ohm's Law daily to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Calculate voltage drops in circuits</li>
            <li>Size conductors appropriately for current loads</li>
            <li>Troubleshoot circuit problems</li>
            <li>Verify protection device ratings</li>
          </ul>
        </section>
      </>
    )
  },
  "1.3": {
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
  },
  "1.4": {
    title: "Measuring Electricity",
    description: "Learning how to accurately measure electrical quantities",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">Electrical Measurement Tools</h3>
        <p className="mb-4">
          Accurate measurement is essential in electrical work. Different tools are used to measure various electrical quantities.
        </p>
        
        <h4 className="text-lg font-semibold mb-3">Common Measurement Tools</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Multimeter: Measures voltage, current, resistance, and more</li>
          <li>Clamp meter: Measures current without breaking the circuit</li>
          <li>Oscilloscope: Visualizes electrical waveforms</li>
          <li>Test lamps: Simple tools for checking if circuits are live</li>
        </ul>
      </>
    ),
    detailedContent: (
      <>
        <h3 className="text-2xl font-bold mb-6">Complete Guide to Electrical Measurements</h3>
        
        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">The Digital Multimeter</h4>
          <p className="mb-4">
            The digital multimeter (DMM) is the most versatile tool in an electrician's kit, capable of measuring multiple electrical parameters.
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Key Multimeter Functions</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Voltage measurement (V):</strong> AC and DC voltage ranges</li>
              <li><strong>Current measurement (A):</strong> AC and DC current capabilities</li>
              <li><strong>Resistance measurement (Ω):</strong> From ohms to megohms</li>
              <li><strong>Continuity test:</strong> Audible indication of a complete circuit</li>
              <li><strong>Diode test:</strong> Testing semiconductor components</li>
              <li><strong>Capacitance:</strong> Measuring capacitor values</li>
              <li><strong>Frequency:</strong> Measuring AC frequency</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Safe Measurement Techniques</h4>
          <p className="mb-4">
            Safety is paramount when taking electrical measurements. Follow these guidelines to prevent accidents:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Voltage Measurement Safety</h5>
              <ul className="list-disc pl-6 space-y-1">
                <li>Always set meter to highest voltage range first</li>
                <li>Use insulated probes with finger guards</li>
                <li>Keep one hand in pocket when measuring high voltage</li>
                <li>Never measure voltage with probes in current terminals</li>
              </ul>
            </div>
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Current Measurement Safety</h5>
              <ul className="list-disc pl-6 space-y-1">
                <li>Break the circuit before connecting in series</li>
                <li>Start with highest range and work down</li>
                <li>Use clamp meter for high currents when possible</li>
                <li>Never measure current with probes in voltage terminals</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Specialized Measurement Equipment</h4>
          <p className="mb-4">
            Beyond the multimeter, electricians use specialized tools for specific measurements:
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Advanced Measurement Tools</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Insulation resistance tester:</strong> Measures insulation quality (megger)</li>
              <li><strong>Earth resistance tester:</strong> Measures ground resistance</li>
              <li><strong>RCD testers:</strong> Tests response time of residual current devices</li>
              <li><strong>Loop impedance tester:</strong> Measures earth fault loop impedance</li>
              <li><strong>Phase rotation meter:</strong> Determines phase sequence in three-phase systems</li>
            </ul>
          </div>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-4">Reading and Recording Measurements</h4>
          <p>
            Proper documentation of electrical measurements is crucial:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Always note the unit of measurement (V, A, Ω, etc.)</li>
            <li>Record accuracy/precision (±0.5V, etc.)</li>
            <li>Note measurement conditions (load/no load, temperature)</li>
            <li>Compare with expected values to identify problems</li>
            <li>Follow proper testing sequences according to regulations</li>
          </ul>
        </section>
      </>
    )
  }
};

export default sections202;
