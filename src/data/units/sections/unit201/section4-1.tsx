
import React from 'react';
import { SectionData } from './interfaces';

export const section4_1: SectionData = {
  title: "Correct and Safe Use of Hand Tools and Power Tools",
  description: "Best practices for using common electrical tools safely and effectively.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Correct and Safe Use of Hand Tools and Power Tools</h3>
      
      <p>
        Electricians rely on various hand and power tools daily. Using these tools correctly not only ensures
        safety but also improves efficiency and the quality of work.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Hand Tool Safety</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-[#FFC900]">Common Electrician Hand Tools</h5>
            <ul className="list-disc pl-5">
              <li>Screwdrivers (flat and Phillips head)</li>
              <li>Wire strippers and cutters</li>
              <li>Pliers (side-cutting, needle-nose)</li>
              <li>Cable knife</li>
              <li>Insulated tools for live working</li>
              <li>Voltage testers</li>
              <li>Fish tape and cable rods</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Hand Tool Safety Guidelines</h5>
            <ul className="list-disc pl-5">
              <li>Use the right tool for the job</li>
              <li>Keep tools clean and well-maintained</li>
              <li>Inspect tools before use</li>
              <li>Store tools properly when not in use</li>
              <li>Use insulated tools for electrical work</li>
              <li>Never use damaged tools</li>
              <li>Don't use excessive force</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Power Tool Safety</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-[#FFC900]">Common Electrical Power Tools</h5>
            <ul className="list-disc pl-5">
              <li>Drills and impact drivers</li>
              <li>SDS hammers for masonry</li>
              <li>Cable cutters (powered)</li>
              <li>Heat guns</li>
              <li>Conduit benders</li>
              <li>Circular saws and jigsaws</li>
              <li>Multimeters and testing equipment</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Power Tool Safety Guidelines</h5>
            <ul className="list-disc pl-5">
              <li>Check for proper grounding/insulation</li>
              <li>Inspect cords and plugs before use</li>
              <li>Use appropriate PPE (eye protection, gloves)</li>
              <li>Keep work area clean and well-lit</li>
              <li>Disconnect power before changing accessories</li>
              <li>Secure workpieces properly</li>
              <li>Maintain proper balance and stance</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-3">
          <h5 className="font-medium text-[#FFC900]">Battery-Powered Tools</h5>
          <ul className="list-disc pl-5">
            <li>Store batteries away from metal objects</li>
            <li>Use only manufacturer-approved chargers</li>
            <li>Don't expose batteries to extreme temperatures</li>
            <li>Inspect batteries for damage before use</li>
            <li>Remove batteries when storing tools for extended periods</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <h4 className="font-medium text-[#FFC900] mb-1">Tool Inspection Checklist:</h4>
        <ul className="list-disc pl-5">
          <li>Check handles for cracks or damage</li>
          <li>Verify insulation is intact on electrical tools</li>
          <li>Ensure moving parts operate smoothly</li>
          <li>Check for worn, loose, or missing parts</li>
          <li>Test safety features and guards</li>
          <li>Verify proper operation before starting work</li>
        </ul>
        <p className="mt-2">
          Remember: Never modify tools or remove safety features, and always follow manufacturer's instructions.
        </p>
      </div>
    </div>
  )
};
