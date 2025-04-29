
import React from 'react';
import { Section } from './types';
import LessonContent from "@/components/units/LessonContent";
import { ContentSection } from "@/components/units/ContentSection";

export const section1_1: Section = {
  id: "1.1",
  title: "Electrical Installation Design Principles",
  description: "Understanding how to plan circuits and choose supply arrangements",
  content: (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Learning Objectives</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand different supply arrangement types (TN-S, TN-C-S, TT)</li>
          <li>Learn how to plan electrical circuits for different building types</li>
          <li>Design appropriate electrical installation layouts</li>
          <li>Select appropriate circuit arrangements for various applications</li>
        </ul>
      </div>
      
      <LessonContent title="Supply Arrangements">
        <p className="mb-4">
          Electrical installations can use different types of supply arrangements, each with specific characteristics:
        </p>
        
        <div className="space-y-4">
          <div className="bg-[#2a2d24] p-4 rounded-md">
            <h4 className="font-medium text-[#FFC900] mb-2">TN-S System</h4>
            <p>
              The TN-S system uses separate neutral and protective earth conductors throughout the system.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Separate neutral and protective conductors from source to installation</li>
              <li>Provides excellent protection against electric shock</li>
              <li>Used in new installations and where high safety is required</li>
              <li>Five-wire system (3 phases, neutral, and protective earth)</li>
            </ul>
          </div>
          
          <div className="bg-[#2a2d24] p-4 rounded-md">
            <h4 className="font-medium text-[#FFC900] mb-2">TN-C-S System (PME)</h4>
            <p>
              The TN-C-S system combines the neutral and protective functions in a single conductor 
              in part of the system (PEN conductor).
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Combined PEN conductor from supply to consumer unit</li>
              <li>Separate neutral and earth within the installation</li>
              <li>Commonly used in UK domestic installations (PME)</li>
              <li>Requires special attention to earthing arrangements</li>
            </ul>
          </div>
          
          <div className="bg-[#2a2d24] p-4 rounded-md">
            <h4 className="font-medium text-[#FFC900] mb-2">TT System</h4>
            <p>
              The TT system has direct connection of exposed conductive parts to earth, independent of any 
              earthing of the source of supply.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Earth fault return path via the general mass of earth</li>
              <li>Higher earth fault loop impedance than TN systems</li>
              <li>Requires RCD protection for all circuits</li>
              <li>Often used in rural areas or where PME cannot be used</li>
            </ul>
          </div>
        </div>
      </LessonContent>
      
      <ContentSection
        title="Designing Circuits for Different Buildings"
        content={
          <>
            <p className="mb-4">
              Different building types have specific requirements when planning electrical installations:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#FFC900]/20">
                    <th className="py-2 px-3 text-left text-[#FFC900]">Building Type</th>
                    <th className="py-2 px-3 text-left text-[#FFC900]">Specific Considerations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-2 px-3 text-[#FFC900]/80">Domestic</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">
                      <ul className="list-disc pl-4">
                        <li>Consumer unit location and accessibility</li>
                        <li>Socket outlet positions and quantities</li>
                        <li>Lighting circuit arrangements</li>
                        <li>Special locations (bathrooms, kitchens)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-2 px-3 text-[#FFC900]/80">Commercial</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">
                      <ul className="list-disc pl-4">
                        <li>Higher load requirements</li>
                        <li>Emergency lighting</li>
                        <li>Fire alarm systems</li>
                        <li>Data and communications infrastructure</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-[#FFC900]/80">Industrial</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">
                      <ul className="list-disc pl-4">
                        <li>Three-phase equipment</li>
                        <li>Higher fault levels</li>
                        <li>Motor circuits and control</li>
                        <li>Hazardous areas</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        }
      />
      
      <LessonContent title="Circuit Arrangements">
        <p className="mb-4">
          Proper planning includes designing appropriate circuits for various applications:
        </p>
        
        <div className="space-y-4">
          <div className="bg-[#2a2d24] p-4 rounded-md">
            <h4 className="font-medium text-[#FFC900] mb-2">Lighting Circuits</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Typically wired as a radial circuit</li>
              <li>6A or 10A MCB/fuse protection</li>
              <li>1.0mm² or 1.5mm² cable</li>
              <li>Maximum of 10-12 lighting points per circuit recommended</li>
              <li>Consider emergency lighting requirements</li>
            </ul>
          </div>
          
          <div className="bg-[#2a2d24] p-4 rounded-md">
            <h4 className="font-medium text-[#FFC900] mb-2">Socket Outlet Circuits</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Ring circuits:</strong> 30-32A protection, 2.5mm² cable, maximum floor area 100m²</li>
              <li><strong>Radial circuits:</strong> 20A protection (2.5mm² cable) or 32A protection (4.0mm² cable)</li>
              <li>Maximum of 2 cooking appliances on a 32A circuit</li>
              <li>Consider dedicated circuits for high-current appliances</li>
            </ul>
          </div>
          
          <div className="bg-[#2a2d24] p-4 rounded-md">
            <h4 className="font-medium text-[#FFC900] mb-2">Specialized Circuits</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Cooker circuits:</strong> 32A or 45A protection, minimum 6mm² cable</li>
              <li><strong>Electric showers:</strong> Dedicated 40-45A circuit, 10mm² cable</li>
              <li><strong>Immersion heaters:</strong> Dedicated 16A circuit, 2.5mm² cable</li>
              <li><strong>Outdoor supplies:</strong> RCBO or RCD protection, suitable IP rating</li>
            </ul>
          </div>
        </div>
        
        <p className="mt-4">
          All circuits must be designed to comply with BS 7671 (IET Wiring Regulations), considering 
          factors such as load assessment, diversity, voltage drop, and protection against electric shock.
        </p>
      </LessonContent>
    </div>
  ),
  detailedContent: (
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-[#FFC900]">Maximum Demand Calculations</h4>
      <p className="text-[#FFC900]/80">
        When designing an electrical installation, it's important to calculate the maximum demand:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
        <li>List all equipment and their power requirements</li>
        <li>Apply diversity factors according to usage patterns</li>
        <li>Calculate the total current demand</li>
        <li>Size the main incoming supply accordingly</li>
      </ul>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Distribution Board Layout</h4>
      <p className="text-[#FFC900]/80">
        Effective distribution board layout is critical for safety and maintenance:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
        <li>Group circuits by type (lighting, power, specialized)</li>
        <li>Balance loads across phases in three-phase installations</li>
        <li>Allow spare capacity for future expansion (typically 25%)</li>
        <li>Clearly label all circuits</li>
        <li>Ensure adequate access for maintenance</li>
      </ul>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Circuit Design Documentation</h4>
      <p className="text-[#FFC900]/80">
        Comprehensive documentation should include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
        <li>Single-line diagrams showing supply arrangements</li>
        <li>Circuit schedules with protective device ratings</li>
        <li>Cable specifications and routes</li>
        <li>Load calculations and diversity factors applied</li>
        <li>Earthing arrangements and main bonding details</li>
      </ul>
    </div>
  )
};

export default section1_1;
