import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}

export const sections204: Record<string, SectionData> = {
  "1.1": {
    title: "Working with Conduit",
    description: "Learning techniques for installing and working with different types of conduit systems",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">Conduit Installation Techniques</h3>
        <p className="mb-4">
          Conduit provides mechanical protection and a professional finish for electrical installations.
          Understanding how to work with different types is a key skill for electricians.
        </p>
        
        <h4 className="text-lg font-semibold mb-3">Metal Conduit</h4>
        <p className="mb-4">
          Steel conduit offers superior protection and mechanical strength:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Cutting: Using pipe cutters or hacksaws with fine-toothed blades</li>
          <li>Threading: Creating standard threads for secure connections</li>
          <li>Bending: Techniques for 90° bends, offsets, and saddles using bending machines</li>
          <li>Earthing requirements: Maintaining continuity throughout the system</li>
          <li>Typical applications: Commercial, industrial, and areas requiring high impact resistance</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">PVC Conduit</h4>
        <p className="mb-4">
          Plastic conduit offers corrosion resistance and ease of installation:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Cutting: Clean cuts with PVC pipe cutters or fine-toothed saws</li>
          <li>Jointing: Using solvent cement for secure connections</li>
          <li>Bending: Techniques using springs or heating methods</li>
          <li>Expansion requirements: Allowing for thermal expansion in longer runs</li>
          <li>Temperature limitations: Not suitable for high-temperature areas</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Flexible Conduit</h4>
        <p className="mb-4">
          Used where movement or vibration is present:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Metallic flexible conduit: For motor connections and machine tools</li>
          <li>PVC-covered flexible metallic conduit: Adding corrosion resistance</li>
          <li>Liquid-tight flexible conduit: For wet or outdoor installations</li>
          <li>Proper termination methods: Using the correct glands and fittings</li>
          <li>Support requirements: Preventing sagging and strain</li>
        </ul>
      </>
    ),
    detailedContent: (
      <>
        <h3 className="text-2xl font-bold mb-6">Comprehensive Guide to Conduit Installation</h3>
        
        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Steel Conduit Techniques</h4>
          <p className="mb-4">
            Steel conduit provides superior protection and mechanical strength, making it ideal for industrial and commercial applications.
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Cutting and Threading</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use a rotary conduit cutter for clean, square cuts</li>
              <li>Remove burrs with a reamer to protect cable insulation</li>
              <li>Use threading dies to create BSP thread (British Standard Pipe)</li>
              <li>Apply thread lubricant for easier assembly and corrosion protection</li>
              <li>Standard thread lengths: short (9.5mm) and long (19mm) threads</li>
            </ul>
          </div>

          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Advanced Bending Techniques</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Set Bends:</strong> 90° bends require exact measurement to formers</li>
              <li><strong>Offset Bends:</strong> Using the 1:4 ratio (1 unit height = 4 units length)</li>
              <li><strong>Saddle Bends:</strong> Creating double bends to pass obstacles</li>
              <li><strong>Back-to-Back Bends:</strong> Creating precise U-shaped sections</li>
              <li><strong>Compound Bends:</strong> Multiple bends in different planes</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">PVC Conduit Installation</h4>
          <p className="mb-4">
            PVC conduit offers corrosion resistance and is economical for many installations:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Heat Bending Process</h5>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Insert spring to prevent kinking</li>
                <li>Apply heat evenly with hot air gun</li>
                <li>Rotate conduit while heating</li>
                <li>Form bend when sufficiently pliable</li>
                <li>Hold in position until cool</li>
              </ol>
            </div>
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Joint Preparation</h5>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Cut square with fine-toothed saw</li>
                <li>Remove burrs with file or scraper</li>
                <li>Apply PVC solvent cement</li>
                <li>Join with quarter-turn twist</li>
                <li>Wipe away excess solvent</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-4">Flexible Conduit Applications</h4>
          <p className="mb-4">
            Flexible conduit is used where movement, vibration or alignment challenges exist:
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Installation Best Practices</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minimum bend radius of 3× the conduit diameter</li>
              <li>Support within 300mm of terminations</li>
              <li>Use proper glands designed for flexible conduit</li>
              <li>Ensure proper earthing continuity with appropriate glands</li>
              <li>Allow sufficient length for movement without strain</li>
              <li>Avoid over-tightening glands which can damage conduit</li>
            </ul>
          </div>
          
          <p className="mt-4">
            When installing flexible conduit in damp or wet locations, always use liquid-tight varieties with appropriate IP-rated 
            glands to maintain the integrity of the installation.
          </p>
        </section>
      </>
    )
  },
  "1.2": {
    title: "Cable Installation Techniques",
    description: "Learning proper methods for installing various cable types in electrical systems",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">Professional Cable Installation</h3>
        <p className="mb-4">
          Proper cable installation ensures safety, reliability, and compliance with regulations. This section covers the techniques needed for different scenarios.
        </p>
        
        <h4 className="text-lg font-semibold mb-3">Cable Selection</h4>
        <p className="mb-4">
          Choosing the right cable for the application:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Current-carrying capacity requirements</li>
          <li>Voltage drop considerations</li>
          <li>Environmental factors: temperature, moisture, UV exposure</li>
          <li>Fire performance requirements</li>
          <li>Mechanical protection needs</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Installation Methods</h4>
        <p className="mb-4">
          Techniques for different installation scenarios:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Surface clipped: Using clips and cleats at correct intervals</li>
          <li>Concealed: In walls, floors, and ceilings with appropriate protection</li>
          <li>Contained: In trunking, conduit, and cable trays</li>
          <li>Underground: Depth requirements and mechanical protection</li>
          <li>Overhead: Tensioning and support methods</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Cable Support and Protection</h4>
        <p className="mb-4">
          Ensuring cables are properly supported throughout their run:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Maximum support intervals for different cable types and orientations</li>
          <li>Bend radius limitations to prevent damage</li>
          <li>Protection at wall penetrations and floor crossings</li>
          <li>Fire stopping requirements when passing through fire-rated walls</li>
          <li>Protection from mechanical damage, water ingress, and rodents</li>
        </ul>
      </>
    ),
    detailedContent: (
      <>
        <h3 className="text-2xl font-bold mb-6">Professional Cable Installation Practices</h3>
        
        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Cable Selection Methodology</h4>
          <p className="mb-4">
            Selecting the appropriate cable is crucial for safety, compliance, and longevity:
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Cable Type Selection Factors</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Current Rating:</strong> Based on load requirements and derating factors</li>
              <li><strong>Voltage Rating:</strong> Must exceed system voltage (usually 300/500V or 450/750V)</li>
              <li><strong>Environmental Conditions:</strong> Temperature, moisture, UV exposure, chemical exposure</li>
              <li><strong>Fire Performance:</strong> Standard, low smoke zero halogen, fire resistant</li>
              <li><strong>Installation Method:</strong> Clipped, contained, buried, overhead</li>
              <li><strong>Mechanical Protection:</strong> Need for armoring or additional protection</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Professional Installation Methods</h4>
          <p className="mb-4">
            Proper installation techniques ensure safety and performance:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Concealed Cable Routes</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li>Run vertical or horizontal (never diagonal)</li>
                <li>150mm from corners or openings</li>
                <li>Minimum depth of 50mm in walls</li>
                <li>Use mechanically protected routes</li>
                <li>Avoid proximity to water or gas pipes</li>
              </ul>
            </div>
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Cable Pulling Techniques</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li>Calculate maximum pulling tension</li>
                <li>Use appropriate lubricants</li>
                <li>Pull steadily without jerking</li>
                <li>Maintain communication during pulls</li>
                <li>Use draw strings for pre-installation</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-4">Cable Support and Protection Standards</h4>
          <p className="mb-4">
            Cables must be properly supported throughout their installation:
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Support Intervals by Cable Type</h5>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#FFC900]/30">
                  <th className="text-left py-2 px-2">Cable Type</th>
                  <th className="text-center py-2 px-2">Horizontal (mm)</th>
                  <th className="text-center py-2 px-2">Vertical (mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#FFC900]/10">
                  <td className="py-2 px-2">Flat twin & earth (≤ 1.0mm²)</td>
                  <td className="text-center py-2 px-2">250</td>
                  <td className="text-center py-2 px-2">400</td>
                </tr>
                <tr className="border-b border-[#FFC900]/10">
                  <td className="py-2 px-2">Flat twin & earth (≥ 1.5mm²)</td>
                  <td className="text-center py-2 px-2">300</td>
                  <td className="text-center py-2 px-2">400</td>
                </tr>
                <tr className="border-b border-[#FFC900]/10">
                  <td className="py-2 px-2">Armored cable (≤ 10mm²)</td>
                  <td className="text-center py-2 px-2">350</td>
                  <td className="text-center py-2 px-2">450</td>
                </tr>
                <tr className="border-b border-[#FFC900]/10">
                  <td className="py-2 px-2">Armored cable (≥ 16mm²)</td>
                  <td className="text-center py-2 px-2">450</td>
                  <td className="text-center py-2 px-2">600</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>
            Maintaining these standards ensures installations comply with BS 7671 requirements and
            provides protection against mechanical damage while allowing heat dissipation.
          </p>
        </section>
      </>
    )
  }
};

export default sections204;
