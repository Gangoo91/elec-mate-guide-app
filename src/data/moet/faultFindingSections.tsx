
import React from 'react';

export const faultFindingSections = {
  "1.1": {
    id: "1.1",
    title: "Systematic Fault Diagnosis",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Structured Approach</h3>
        <p className="text-[#FFC900]/80">
          A systematic approach to fault finding involves logical steps that help identify the root cause 
          efficiently without overlooking critical factors.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li>Gather information about the fault (symptoms, when it occurred, any recent changes)</li>
          <li>Verify the fault exists and reproduce if possible</li>
          <li>Identify possible causes based on symptoms</li>
          <li>Test each hypothesis systematically</li>
          <li>Isolate the fault location</li>
          <li>Repair or replace faulty components</li>
          <li>Test the system to verify the fault is resolved</li>
          <li>Document findings and solutions</li>
        </ol>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Information Gathering</h3>
        <p className="text-[#FFC900]/80">
          The quality of information gathered initially often determines how quickly a fault can be diagnosed.
          Effective questioning techniques when speaking with users or operators include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>When did the fault first appear?</li>
          <li>Were there any unusual conditions or events before the fault occurred?</li>
          <li>Has any maintenance or modification work been carried out recently?</li>
          <li>Is the fault intermittent or constant?</li>
          <li>Have any temporary fixes been attempted?</li>
        </ul>
      </div>
    )
  },
  "1.2": {
    id: "1.2",
    title: "Five-Step Diagnosis Method",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Industry Standard Approach</h3>
        <p className="text-[#FFC900]/80">
          The five-step diagnosis method provides a structured framework for tackling electrical faults efficiently.
        </p>
        
        <div className="space-y-3 text-[#FFC900]/80">
          <div>
            <h4 className="font-medium">1. Symptom Recognition</h4>
            <p>Identify all symptoms and unusual behaviors. Note specific conditions when the fault occurs.</p>
          </div>
          
          <div>
            <h4 className="font-medium">2. Symptom Analysis</h4>
            <p>Determine what normal operation should look like and compare with current symptoms. 
            Establish which systems or components are affected.</p>
          </div>
          
          <div>
            <h4 className="font-medium">3. Cause Isolation</h4>
            <p>Narrow down possible causes through systematic elimination. Move from general systems to specific components.</p>
          </div>
          
          <div>
            <h4 className="font-medium">4. Fault Correction</h4>
            <p>Repair, replace, or adjust the faulty component or system.</p>
          </div>
          
          <div>
            <h4 className="font-medium">5. System Verification</h4>
            <p>Test the entire system to ensure the fault is resolved and no new issues have been introduced.</p>
          </div>
        </div>
        
        <p className="text-[#FFC900]/80 mt-4">
          Adhering to this structured approach helps prevent wasted time on unnecessary tests and ensures 
          comprehensive fault resolution.
        </p>
      </div>
    )
  },
  "1.3": {
    id: "1.3",
    title: "Split-Half Method",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Efficient Troubleshooting Technique</h3>
        <p className="text-[#FFC900]/80">
          The split-half method is an efficient troubleshooting technique for systems with multiple sequential components.
          It helps locate faults quickly in large or complex systems.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90">How It Works:</h4>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li>Identify the beginning and end points of the system or circuit that contains the fault.</li>
          <li>Test at the middle point between these two extremes.</li>
          <li>Based on the test result, determine which half contains the fault.</li>
          <li>Repeat the process, continuing to test at the middle of the remaining section.</li>
          <li>Continue splitting and testing until the faulty component is isolated.</li>
        </ol>
        
        <div className="bg-[#2a2d24] p-4 rounded-lg mt-4">
          <h4 className="font-medium text-[#FFC900]">Example Application:</h4>
          <p className="text-[#FFC900]/80">
            In a series lighting circuit with 8 lights, if none are working:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
            <li>First test at light #4</li>
            <li>If voltage is present at #4 but the light doesn't work, the fault is in lights #4-8</li>
            <li>Next test at light #6</li>
            <li>If voltage is present at #6 but the light doesn't work, the fault is in lights #6-8</li>
            <li>Continue until the faulty component is identified</li>
          </ul>
        </div>
        
        <p className="text-[#FFC900]/80 mt-4">
          This method is particularly effective for troubleshooting data lines, series circuits, and systems with 
          multiple similar components.
        </p>
      </div>
    )
  },
  "2.1": {
    id: "2.1",
    title: "Digital Multimeter Applications",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Versatile Testing Tool</h3>
        <p className="text-[#FFC900]/80">
          The digital multimeter (DMM) is the most versatile electrical testing instrument, combining several 
          measurement functions in one device. Modern DMMs offer high accuracy and a wide range of testing capabilities.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90">Key Measurement Functions:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Voltage (AC and DC):</strong> Measuring potential difference between two points</li>
          <li><strong>Current (AC and DC):</strong> Measuring the flow of electrons through a circuit</li>
          <li><strong>Resistance:</strong> Measuring opposition to current flow</li>
          <li><strong>Continuity:</strong> Testing for complete circuits with audible indication</li>
          <li><strong>Diode Test:</strong> Checking semiconductor junction operation</li>
          <li><strong>Capacitance:</strong> Measuring a component's ability to store charge</li>
          <li><strong>Frequency:</strong> Measuring signal cycles per second</li>
          <li><strong>Temperature:</strong> Using external probes to measure temperature</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Safety Considerations:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Always verify meter's CAT rating matches the environment you're working in</li>
          <li>Inspect leads and probes for damage before each use</li>
          <li>Use proper test techniques - one hand when possible</li>
          <li>Select appropriate function and range before connecting to circuit</li>
          <li>Never measure current in parallel</li>
          <li>Ensure the meter is properly rated for the voltage being measured</li>
        </ul>
      </div>
    )
  },
  "2.2": {
    id: "2.2",
    title: "Oscilloscopes and Signal Analysis",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Waveform Visualization</h3>
        <p className="text-[#FFC900]/80">
          Oscilloscopes provide visual representation of electrical signals over time, making them essential for 
          diagnosing complex electrical issues that multimeters cannot detect.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90">Key Oscilloscope Applications:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Signal integrity analysis:</strong> Identifying noise, distortion, or interference in electrical signals</li>
          <li><strong>Timing analysis:</strong> Measuring time relationships between different signals</li>
          <li><strong>Transient detection:</strong> Capturing momentary voltage spikes or dips</li>
          <li><strong>Frequency analysis:</strong> Determining the frequency components of complex signals</li>
          <li><strong>Harmonic measurement:</strong> Identifying unwanted harmonic content in power supplies</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Key Measurements:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Amplitude:</strong> Signal voltage from peak to peak</li>
          <li><strong>Frequency:</strong> Number of cycles per second (Hz)</li>
          <li><strong>Period:</strong> Time for one complete cycle</li>
          <li><strong>Rise/Fall time:</strong> Time taken for signal to change states</li>
          <li><strong>Phase relationships:</strong> Timing differences between related signals</li>
        </ul>
        
        <p className="text-[#FFC900]/80 mt-4">
          Modern digital oscilloscopes offer advanced features like automatic measurements, waveform storage, 
          mathematical operations on signals, and FFT (Fast Fourier Transform) analysis for frequency domain visualization.
        </p>
      </div>
    )
  },
  "2.3": {
    id: "2.3",
    title: "Specialized Test Equipment",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Purpose-Built Diagnostic Tools</h3>
        <p className="text-[#FFC900]/80">
          Beyond multimeters and oscilloscopes, specialized test equipment is essential for effective fault diagnosis 
          in specific applications.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90">Insulation Testers:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Tests insulation resistance at high voltage (typically 250V-1000V)</li>
          <li>Identifies breakdown in cable or motor insulation</li>
          <li>Usually displays results in megaohms (MΩ)</li>
          <li>Helps predict insulation failure before catastrophic breakdown</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Earth Loop Impedance Testers:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Measures impedance of the earth fault path</li>
          <li>Verifies protective device operation in fault conditions</li>
          <li>Helps ensure compliance with electrical safety regulations</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">RCD Testers:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Tests trip time and current sensitivity of Residual Current Devices</li>
          <li>Verifies protection against electric shock</li>
          <li>Tests at multiple current levels (typically ½×, 1×, and 5× rated trip current)</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Thermal Imaging Cameras:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Non-contact detection of temperature variations</li>
          <li>Identifies hotspots in electrical connections, indicating high resistance</li>
          <li>Locates overloaded circuits and components</li>
          <li>Especially useful for preventative maintenance</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Network Analyzers:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Tests data communication networks</li>
          <li>Identifies breaks, shorts, and impedance mismatches in network cabling</li>
          <li>Measures performance metrics like throughput and packet loss</li>
        </ul>
      </div>
    )
  },
  "3.1": {
    id: "3.1",
    title: "Open Circuit Faults",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Complete Circuit Breaks</h3>
        <p className="text-[#FFC900]/80">
          Open circuit faults occur when there is a break in the conductive path, preventing current flow. 
          These are among the most common electrical faults.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90">Common Causes:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Physical damage to cables or conductors</li>
          <li>Loose or disconnected terminals</li>
          <li>Blown fuses or tripped circuit breakers</li>
          <li>Failed components (resistors, capacitors, etc.)</li>
          <li>Broken PCB tracks</li>
          <li>Oxidized or corroded connections</li>
          <li>Activated thermal cutouts</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Diagnosis Techniques:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Visual inspection:</strong> Check for obvious breaks, burn marks, or loose connections</li>
          <li><strong>Continuity testing:</strong> Using a multimeter's continuity function to trace breaks</li>
          <li><strong>Voltage measurement:</strong> Checking for expected voltage levels at various points</li>
          <li><strong>Signal injection:</strong> Introducing a signal at one end and tracing along the path</li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-lg mt-4">
          <h4 className="font-medium text-[#FFC900]">Diagnostic Example:</h4>
          <p className="text-[#FFC900]/80">
            When diagnosing a light fixture that doesn't work:
          </p>
          <ol className="list-decimal pl-6 space-y-1 text-[#FFC900]/80">
            <li>Verify power is available at the supply point</li>
            <li>Check the switch operation with a continuity test</li>
            <li>Test the light fixture (bulb, connections)</li>
            <li>Check continuity of all wires between power source and fixture</li>
            <li>Inspect junction boxes and connection points for loose wires</li>
          </ol>
        </div>
      </div>
    )
  },
  "3.2": {
    id: "3.2",
    title: "Short Circuit Faults",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Unintended Current Paths</h3>
        <p className="text-[#FFC900]/80">
          Short circuit faults occur when current takes an unintended path of lower resistance than the normal circuit path. 
          These faults can be dangerous as they often result in excessive current flow.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90">Types of Short Circuits:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Line-to-neutral:</strong> Direct connection between live and neutral conductors</li>
          <li><strong>Line-to-earth:</strong> Connection between live conductor and earth/ground</li>
          <li><strong>Line-to-line:</strong> Connection between different phase conductors</li>
          <li><strong>Partial short:</strong> Reduced resistance rather than direct connection</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Common Causes:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Damaged cable insulation</li>
          <li>Water ingress into electrical equipment</li>
          <li>Conductive contamination across terminals</li>
          <li>Cable compression or pinching</li>
          <li>Component failures (especially capacitors)</li>
          <li>Loose strands of wire creating bridges between terminals</li>
          <li>Carbonization paths from previous overheating</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Diagnosis Methods:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Insulation resistance testing:</strong> Measuring resistance between conductors</li>
          <li><strong>Visual inspection:</strong> Looking for burn marks or damaged insulation</li>
          <li><strong>Section-by-section isolation:</strong> Disconnecting parts of the circuit to locate the fault</li>
          <li><strong>Current measurement:</strong> Identifying abnormally high current in certain paths</li>
          <li><strong>Thermal imaging:</strong> Detecting hotspots that may indicate partial shorts</li>
        </ul>
        
        <p className="text-[#FFC900]/80 mt-4">
          Always disconnect power before diagnosing potential short circuits. The protective device operation 
          (blown fuse or tripped breaker) is often the first indication of a short circuit fault.
        </p>
      </div>
    )
  },
  "3.3": {
    id: "3.3",
    title: "Earth Faults",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Safety-Critical Faults</h3>
        <p className="text-[#FFC900]/80">
          Earth faults occur when a live conductor makes unintended contact with an earthed part of an electrical system or equipment.
          These faults are particularly safety-critical as they can result in electric shock hazards.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90">Characteristics:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>May cause RCD/GFCI devices to trip</li>
          <li>Can energize metal enclosures or parts that should not be live</li>
          <li>May cause intermittent operation of equipment</li>
          <li>Often results from insulation breakdown or moisture ingress</li>
          <li>Can develop gradually over time as insulation deteriorates</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Common Causes:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Physical damage to cable insulation</li>
          <li>Moisture or water ingress into equipment</li>
          <li>Aging and degradation of insulation materials</li>
          <li>Mechanical stress on cables causing internal damage</li>
          <li>Vibration causing conductors to touch earthed enclosures</li>
          <li>Conductive dust build-up creating paths to earth</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Diagnostic Approaches:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Earth loop impedance testing:</strong> Measuring the impedance of the earth fault path</li>
          <li><strong>Insulation resistance testing:</strong> Checking isolation between live parts and earth</li>
          <li><strong>RCD testing:</strong> Verifying correct operation of protective devices</li>
          <li><strong>Leakage current measurement:</strong> Using clamp meters to detect small earth leakage currents</li>
          <li><strong>Systematic isolation:</strong> Disconnecting equipment piece by piece to identify the source</li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-lg mt-4">
          <h4 className="font-medium text-[#FFC900]">Safety Notice:</h4>
          <p className="text-[#FFC900]/80">
            Earth faults must be treated as high priority due to their safety implications. Never bypass RCDs or other 
            protective devices that have tripped due to an earth fault. Always identify and rectify the root cause.
          </p>
        </div>
      </div>
    )
  },
  "3.4": {
    id: "3.4",
    title: "High Resistance Connections",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Hidden Power Wasters</h3>
        <p className="text-[#FFC900]/80">
          High resistance connections occur when electrical connections deteriorate, creating points of increased resistance 
          in circuits. These faults often go unnoticed until they cause significant issues.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90">Symptoms and Effects:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Localized heating at connection points</li>
          <li>Voltage drop across connections</li>
          <li>Intermittent operation of equipment</li>
          <li>Flickering lights</li>
          <li>Reduced power to appliances</li>
          <li>Discoloration of terminals (often brown or black)</li>
          <li>Burning smell from connection points</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Common Causes:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Loose screw terminals</li>
          <li>Corrosion of conductors or terminals</li>
          <li>Improper crimping or termination</li>
          <li>Oxidation at connection interfaces</li>
          <li>Thermal expansion and contraction cycles</li>
          <li>Dissimilar metals causing galvanic corrosion</li>
          <li>Vibration causing gradual loosening</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Detection Methods:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Thermal imaging:</strong> Identifying hot spots at connection points</li>
          <li><strong>Voltage drop measurement:</strong> Measuring voltage across connections under load</li>
          <li><strong>Touch testing:</strong> Careful physical inspection for loose connections</li>
          <li><strong>IR thermometer:</strong> Spot checking temperatures at connections</li>
          <li><strong>Current analysis:</strong> Looking for fluctuations in current draw</li>
        </ul>
        
        <p className="text-[#FFC900]/80 mt-4">
          High resistance connections can be particularly dangerous as they generate heat that can eventually 
          lead to fires. They also waste energy and can damage sensitive equipment through voltage fluctuations.
        </p>
        
        <div className="bg-[#2a2d24] p-4 rounded-lg mt-4">
          <h4 className="font-medium text-[#FFC900]">Resolution:</h4>
          <p className="text-[#FFC900]/80">
            When a high resistance connection is identified, the proper fix is to completely remake the connection. 
            Simply tightening can be a temporary solution, but proper remediation often requires:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
            <li>Removing and cleaning connection surfaces</li>
            <li>Replacing damaged terminals or connectors</li>
            <li>Using appropriate contact lubricant where recommended</li>
            <li>Tightening to the manufacturer's torque specification</li>
          </ul>
        </div>
      </div>
    )
  },
  "4.1": {
    id: "4.1",
    title: "Electrical Safety Measures",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Safety-First Approach</h3>
        <p className="text-[#FFC900]/80">
          Fault finding often involves working with potentially hazardous electrical systems. Following proper safety 
          procedures is essential to prevent injury, death, or equipment damage.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90">Safe Isolation Procedure:</h4>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Identify the circuit or equipment:</strong> Confirm exactly what needs to be isolated</li>
          <li><strong>Obtain permission:</strong> Inform relevant personnel about the planned work</li>
          <li><strong>Turn off supply:</strong> Switch off the appropriate isolator or breaker</li>
          <li><strong>Secure the isolation:</strong> Apply lock-off devices and warning tags</li>
          <li><strong>Verify isolation:</strong> Test that the equipment is indeed isolated using approved voltage indicators</li>
          <li><strong>Prove test equipment:</strong> Verify the tester works before and after testing</li>
        </ol>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Personal Protective Equipment (PPE):</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Insulated tools rated for the voltage being worked with</li>
          <li>Safety glasses or face shields for arc flash protection</li>
          <li>Insulating gloves appropriate for the voltage level</li>
          <li>Non-conductive footwear</li>
          <li>Arc-rated clothing where arc flash risks exist</li>
          <li>Insulating mats where appropriate</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Working Practices:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>One-hand rule:</strong> When possible, work with only one hand to avoid creating a path across the chest</li>
          <li><strong>Remove jewelry:</strong> Watches, rings, and other conductive items should be removed</li>
          <li><strong>Use insulated tools:</strong> Ensure tools are properly rated and in good condition</li>
          <li><strong>Avoid wet conditions:</strong> Never work on electrical equipment in wet environments</li>
          <li><strong>Never work alone:</strong> Have someone nearby who can help in an emergency</li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-lg mt-4">
          <h4 className="font-medium text-[#FFC900]">Live Working:</h4>
          <p className="text-[#FFC900]/80">
            Working on live equipment should only be done when absolutely necessary, such as when:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
            <li>The isolation of equipment would create greater hazards</li>
            <li>It's not reasonably practicable to isolate (e.g., for testing purposes)</li>
            <li>The work is properly planned and assessed as safe to perform live</li>
            <li>Workers are properly trained and equipped for live working</li>
          </ul>
          <p className="text-[#FFC900]/80 mt-2">
            When live working is required, additional precautions must be taken including barriers, insulating screens, and appropriate PPE.
          </p>
        </div>
      </div>
    )
  },
  "4.2": {
    id: "4.2",
    title: "Documentation and Reporting",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Recording Fault Information</h3>
        <p className="text-[#FFC900]/80">
          Proper documentation of fault diagnosis and repair is essential for maintenance records, regulatory compliance, 
          and future troubleshooting. Good documentation practices improve maintenance efficiency over time.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90">Elements of Good Fault Documentation:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Initial fault description:</strong> Clear description of symptoms and when they occurred</li>
          <li><strong>Diagnostic steps taken:</strong> Record of tests performed and their results</li>
          <li><strong>Root cause identification:</strong> What was ultimately determined to be the cause</li>
          <li><strong>Corrective actions:</strong> Details of repairs, replacements, or adjustments made</li>
          <li><strong>Parts used:</strong> Record of components replaced with part numbers</li>
          <li><strong>Verification testing:</strong> Results of tests performed to confirm the repair</li>
          <li><strong>Time and date:</strong> When the work was performed</li>
          <li><strong>Technician information:</strong> Who performed the diagnosis and repair</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Reporting Requirements:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Safety concerns:</strong> Any safety issues identified should be clearly highlighted</li>
          <li><strong>Recommendations:</strong> Suggestions for preventing similar failures</li>
          <li><strong>Regulatory compliance:</strong> Documentation required by applicable regulations</li>
          <li><strong>Client communication:</strong> Information to be shared with clients or users</li>
          <li><strong>Follow-up actions:</strong> Any required future inspections or maintenance</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Documentation Systems:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Paper-based records:</strong> Traditional log books and forms</li>
          <li><strong>Computerized maintenance management systems (CMMS):</strong> Digital tracking of maintenance activities</li>
          <li><strong>Mobile applications:</strong> Field data collection tools</li>
          <li><strong>Photographic evidence:</strong> Before and after images of faults/repairs</li>
          <li><strong>Test certificates:</strong> Formal documentation of compliance testing</li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-lg mt-4">
          <h4 className="font-medium text-[#FFC900]">Benefits of Thorough Documentation:</h4>
          <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
            <li>Helps identify recurring problems and systemic issues</li>
            <li>Provides evidence of regulatory compliance</li>
            <li>Assists other technicians who may work on the equipment later</li>
            <li>Builds a knowledge base for faster diagnosis of similar issues</li>
            <li>Supports warranty claims and quality improvement processes</li>
            <li>May be required for insurance purposes</li>
          </ul>
        </div>
      </div>
    )
  },
  "5.1": {
    id: "5.1",
    title: "Case Study: Circuit Breaker Nuisance Tripping",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Practical Application of Fault Finding</h3>
        <p className="text-[#FFC900]/80">
          This case study walks through the diagnosis and resolution of a circuit breaker that repeatedly trips without apparent overload.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90">Scenario:</h4>
        <p className="text-[#FFC900]/80">
          A manufacturing facility reports that a 32A circuit breaker feeding a production line trips intermittently, 
          usually during periods of peak operation. Initial checks show the current draw is typically around 22A, 
          well within the breaker's rating.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Diagnostic Process:</h4>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li>
            <strong>Information gathering:</strong> Discovered the tripping occurs mostly on warm days and when multiple 
            machines are running simultaneously. The circuit was installed 15 years ago.
          </li>
          <li>
            <strong>Visual inspection:</strong> Examination of the distribution board revealed slight discoloration at 
            the breaker terminals, suggesting heating.
          </li>
          <li>
            <strong>Initial measurements:</strong> Current monitoring showed occasional spikes up to 28A during machine startup, 
            still below the breaker rating. Voltage measurements were normal.
          </li>
          <li>
            <strong>Thermal imaging:</strong> Thermal camera revealed a hot spot at one of the breaker terminals (65°C) and 
            at a junction box connection (72°C).
          </li>
          <li>
            <strong>Deep investigation:</strong> Inspection of the junction box found loose connections causing high resistance. 
            Further inspection at the breaker found oxidation of the conductor and terminal.
          </li>
        </ol>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Root Cause Analysis:</h4>
        <p className="text-[#FFC900]/80">
          The high resistance connections were generating heat during normal operation. As the facility's ambient temperature 
          rose and current draw increased, the additional heat would cause:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li>Further expansion of connectors, increasing resistance</li>
          <li>Temperature rise in the breaker's thermal trip mechanism</li>
          <li>Eventually reaching the trip threshold despite current being below rated value</li>
        </ol>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Solution Implementation:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Replaced damaged sections of cable with discolored insulation</li>
          <li>Installed new properly sized terminals at the junction box</li>
          <li>Applied conductive paste to terminal connections</li>
          <li>Torqued all connections to specification</li>
          <li>Replaced the circuit breaker as internal contacts may have been damaged</li>
          <li>Performed thermal imaging verification after repair under load</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Follow-up and Prevention:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Implemented quarterly thermal imaging inspections of critical circuits</li>
          <li>Updated maintenance procedures to include regular terminal tightening</li>
          <li>Added the distribution board to the preventative maintenance schedule</li>
        </ul>
        
        <p className="text-[#FFC900]/80 mt-4">
          This case demonstrates how high resistance connections can cause symptoms that appear to be protective device 
          failures but are actually related to installation issues.
        </p>
      </div>
    )
  },
  "5.2": {
    id: "5.2",
    title: "Case Study: Motor Failure Analysis",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Systematic Motor Troubleshooting</h3>
        <p className="text-[#FFC900]/80">
          This case study examines the diagnosis of an industrial three-phase motor that fails to start properly and overheats during operation.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90">Scenario:</h4>
        <p className="text-[#FFC900]/80">
          A 7.5kW three-phase induction motor driving a pump exhibits symptoms of humming without proper 
          starting, followed by overheating and eventually tripping its thermal overload protection. The motor is five 
          years old and has been operating reliably until recently.
        </p>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Initial Assessment:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Visual inspection:</strong> No obvious signs of physical damage; cooling fins partially blocked with dust</li>
          <li><strong>Load assessment:</strong> Pump appears to rotate freely when motor is disconnected</li>
          <li><strong>Sound analysis:</strong> Unusual humming noise during attempted start</li>
          <li><strong>Smell check:</strong> Slight electrical burning smell detected</li>
        </ul>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Diagnostic Sequence:</h4>
        <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
          <li>
            <strong>Supply voltage testing:</strong> Measurements at the motor terminals showed:
            <ul className="list-disc pl-6 mt-1 text-[#FFC900]/70">
              <li>L1-L2: 415V</li>
              <li>L2-L3: 0V</li>
              <li>L1-L3: 415V</li>
            </ul>
            <p className="mt-1">This indicated an open circuit in one phase.</p>
          </li>
          <li>
            <strong>Tracing the fault:</strong> Working backwards from the motor:
            <ul className="list-disc pl-6 mt-1 text-[#FFC900]/70">
              <li>Terminal box connections were tight and in good condition</li>
              <li>Cable from distribution board showed continuity</li>
              <li>Contactor inspection revealed burned and pitted contacts on one pole</li>
            </ul>
          </li>
          <li>
            <strong>Root cause investigation:</strong> Further examination determined:
            <ul className="list-disc pl-6 mt-1 text-[#FFC900]/70">
              <li>Contactor showed signs of frequent cycling</li>
              <li>Control system logs indicated frequent start/stop operations</li>
              <li>Interview with operators confirmed process changes leading to more frequent cycling</li>
            </ul>
          </li>
        </ol>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Diagnosis:</h4>
        <p className="text-[#FFC900]/80">
          The motor was attempting to run on two phases instead of three (single-phasing) due to a failed contactor pole. 
          The root causes were:
        </p>
        <ol className="list-decimal pl-6 space-y-1 text-[#FFC900]/80">
          <li>Excessive contactor cycling exceeding its rated operations</li>
          <li>Contactor sized for continuous operation rather than frequent cycling</li>
          <li>Single-phasing causing motor to draw excessive current on remaining phases</li>
          <li>Reduced cooling efficiency due to dust accumulation</li>
        </ol>
        
        <h4 className="font-medium text-[#FFC900]/90 mt-4">Solution Implementation:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Replaced the contactor with a higher-rated model designed for frequent cycling</li>
          <li>Cleaned motor cooling fins and vents</li>
          <li>Installed a phase failure relay to protect against future single-phasing</li>
          <li>Added motor thermistor protection for improved thermal monitoring</li>
          <li>Recommended process changes to reduce cycling where possible</li>
          <li>Scheduled more frequent inspections of the motor control circuit</li>
        </ul>
        
        <p className="text-[#FFC900]/80 mt-4">
          This case illustrates the importance of looking beyond the immediate symptoms to identify operating 
          conditions that contribute to failures. Single-phasing is a common but serious fault that can cause motor failure.
        </p>
      </div>
    )
  }
};

export const faultFindingQuestions = [
  {
    question: "Which of the following is the first step in systematic fault diagnosis?",
    options: [
      "Test each hypothesis systematically",
      "Gather information about the fault",
      "Repair or replace faulty components",
      "Isolate the fault location"
    ],
    correctAnswer: "Gather information about the fault",
    explanation: "The first step in systematic fault diagnosis is to gather information about the fault, including symptoms, when it occurred, and any recent changes. This information is crucial for developing effective hypotheses about the fault's cause."
  },
  {
    question: "In the split-half method, if a circuit has 8 components and the first test at the midpoint shows the fault is in the second half, where should you test next?",
    options: [
      "Component 2",
      "Component 4",
      "Component 6",
      "Component 8"
    ],
    correctAnswer: "Component 6",
    explanation: "In the split-half method, you first test at the midpoint (component 4). If the fault is in the second half (components 5-8), you next test at the midpoint of that section, which is component 6."
  },
  {
    question: "Which of the following is NOT a common feature of modern digital multimeters?",
    options: [
      "Voltage measurement",
      "Resistance measurement",
      "X-ray imaging",
      "Continuity testing"
    ],
    correctAnswer: "X-ray imaging",
    explanation: "X-ray imaging is not a feature of digital multimeters. Common functions include voltage, current, resistance measurement, continuity testing, frequency measurement, capacitance testing, and diode testing."
  },
  {
    question: "What does an oscilloscope allow you to visualize that a multimeter typically cannot?",
    options: [
      "Voltage magnitude",
      "Signal waveforms over time",
      "Circuit resistance",
      "Continuity"
    ],
    correctAnswer: "Signal waveforms over time",
    explanation: "Oscilloscopes provide visual representation of electrical signals over time, showing waveforms that multimeters cannot display. This is crucial for diagnosing issues like distortion, interference, or timing problems."
  },
  {
    question: "Which tool is most appropriate for detecting high resistance connections in a distribution panel?",
    options: [
      "Insulation tester",
      "Earth loop impedance tester",
      "Thermal imaging camera",
      "RCD tester"
    ],
    correctAnswer: "Thermal imaging camera",
    explanation: "Thermal imaging cameras are ideal for detecting high resistance connections because these connections generate heat. The camera can identify hotspots at terminals or connections that indicate high resistance issues."
  },
  {
    question: "What type of fault is characterized by a complete break in the conductive path?",
    options: [
      "Short circuit",
      "Earth fault",
      "High resistance connection",
      "Open circuit"
    ],
    correctAnswer: "Open circuit",
    explanation: "An open circuit fault occurs when there is a break in the conductive path that prevents current flow. Common causes include broken wires, loose connections, or blown fuses."
  },
  {
    question: "Which of the following is the most serious potential consequence of a high resistance connection?",
    options: [
      "Increased energy consumption",
      "Fire hazard",
      "Equipment running faster than normal",
      "Lower voltage readings"
    ],
    correctAnswer: "Fire hazard",
    explanation: "High resistance connections generate heat, which can eventually lead to fires. This makes them particularly dangerous, especially in concealed locations or near flammable materials."
  },
  {
    question: "When conducting safe isolation procedures, what step must be performed after turning off the supply?",
    options: [
      "Begin work immediately",
      "Secure the isolation with lock-off devices",
      "Inform colleagues work has commenced",
      "Document the findings"
    ],
    correctAnswer: "Secure the isolation with lock-off devices",
    explanation: "After turning off the supply, the next step is to secure the isolation using lock-off devices and warning tags. This prevents accidental re-energization of the circuit while work is in progress."
  },
  {
    question: "Why is proper documentation of fault diagnosis important?",
    options: [
      "It's only required for apprentices",
      "It helps identify recurring problems and systemic issues",
      "It's only needed for warranty purposes",
      "Documentation is optional in most cases"
    ],
    correctAnswer: "It helps identify recurring problems and systemic issues",
    explanation: "Proper documentation helps identify recurring problems and systemic issues, provides evidence of regulatory compliance, assists other technicians, builds a knowledge base for faster diagnosis, and may be required for warranty or insurance purposes."
  },
  {
    question: "What is 'single-phasing' in a three-phase motor system?",
    options: [
      "Running the motor at one-third speed",
      "Operating with only one phase connected",
      "Running the motor with one phase having different voltage",
      "Operating with one phase disconnected (two phases only)"
    ],
    correctAnswer: "Operating with one phase disconnected (two phases only)",
    explanation: "Single-phasing refers to a condition where one of the three phases is lost, causing the motor to attempt to run on only two phases. This causes the motor to draw excessive current on the remaining phases, resulting in overheating and potential damage."
  }
];

