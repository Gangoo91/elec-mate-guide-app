
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const MountingSystemsInstallationPage = () => {
  const sections = [
    {
      title: "Understanding Roof Types",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Different roof types require specific mounting approaches:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pitched Roofs
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Tile roofs: Special hooks and flashings required</li>
                <li>Slate roofs: Extra care needed to prevent breakage</li>
                <li>Metal roofs: Direct attachment with proper sealants</li>
                <li>Composition shingle: Flashing and lag bolt installation</li>
              </ul>
            </li>
            <li>Flat Roofs
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Ballasted systems: Weight calculations crucial</li>
                <li>Membrane protection requirements</li>
                <li>Drainage considerations</li>
                <li>Wind uplift factors</li>
              </ul>
            </li>
            <li>Ground Mount
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Foundation types: concrete, helical piles, ground screws</li>
                <li>Soil conditions assessment</li>
                <li>Terrain considerations</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Load Calculations and Structural Requirements",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Essential structural considerations for safe installation:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dead Load Assessment
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Solar panel weight: typically 15-20 kg per panel</li>
                <li>Mounting system weight: 3-5 kg per meter</li>
                <li>Ballast requirements for flat roofs</li>
              </ul>
            </li>
            <li>Wind Load Calculations
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Local wind speed requirements</li>
                <li>Uplift forces on different roof zones</li>
                <li>Edge and corner considerations</li>
              </ul>
            </li>
            <li>Snow Load Considerations
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Additional weight calculations</li>
                <li>Panel angle impact on snow accumulation</li>
                <li>Drift load considerations</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Installation Tools and Equipment",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Essential tools needed for mounting system installation:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Basic Tools
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Torque wrench (calibrated)</li>
                <li>Battery-powered impact driver</li>
                <li>Level (2ft and 4ft)</li>
                <li>Tape measure</li>
                <li>Marking tools</li>
              </ul>
            </li>
            <li>Specialty Tools
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Roof hook gauge</li>
                <li>Rail cutting tools</li>
                <li>Stud finder/electronic detector</li>
                <li>Sealing equipment</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Step-by-Step Installation Process",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Detailed installation sequence:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>1. Layout and Marking
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Locate and mark roof rafters</li>
                <li>Plan attachment points</li>
                <li>Mark roof penetration locations</li>
              </ul>
            </li>
            <li>2. Installing Attachments
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Install flashing (if required)</li>
                <li>Secure mounting hardware</li>
                <li>Apply proper sealants</li>
                <li>Verify proper torque settings</li>
              </ul>
            </li>
            <li>3. Rail Installation
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Attach rails to mounting points</li>
                <li>Level and align rails</li>
                <li>Install splices if needed</li>
                <li>Verify proper spacing</li>
              </ul>
            </li>
            <li>4. Quality Checks
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Verify all bolts are torqued</li>
                <li>Check rail alignment</li>
                <li>Confirm proper spacing</li>
                <li>Inspect weatherproofing</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Safety Requirements",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Critical safety measures during installation:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal Protection
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Fall protection systems</li>
                <li>Hard hats and safety glasses</li>
                <li>Steel-toed boots</li>
                <li>Cut-resistant gloves</li>
              </ul>
            </li>
            <li>Site Safety
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Secure work area</li>
                <li>Tool tethering</li>
                <li>Clear access paths</li>
                <li>Emergency procedures</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Common Installation Mistakes to Avoid",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Critical issues to watch out for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Poor Waterproofing
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Incorrect flashing installation</li>
                <li>Improper sealant application</li>
                <li>Missing or damaged boots</li>
              </ul>
            </li>
            <li>Structural Issues
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Missing rafter connections</li>
                <li>Incorrect attachment spacing</li>
                <li>Over-torquing bolts</li>
              </ul>
            </li>
            <li>Rail System Errors
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Improper rail spacing</li>
                <li>Missing end caps</li>
                <li>Incorrect splice installation</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Mounting System Installation Guide"
      description="Complete guide to solar PV mounting system installation, including detailed steps, safety requirements, and best practices. Learn about different roof types, load calculations, and proper installation techniques."
      sections={sections}
    />
  );
};

export default MountingSystemsInstallationPage;
