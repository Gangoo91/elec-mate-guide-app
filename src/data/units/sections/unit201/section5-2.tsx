
import React from 'react';
import { SectionData } from './interfaces';

export const section5_2: SectionData = {
  title: "Types of Fire Extinguishers",
  description: "Selecting and using the appropriate fire extinguisher for different types of fires.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Types of Fire Extinguishers</h3>
      
      <p>
        Using the correct type of fire extinguisher is crucial for effectively fighting fires and avoiding
        dangerous situations. Different extinguishers are designed for different classes of fire.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Fire Classifications</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-[#FFC900]">Class A Fires</h5>
            <p className="mb-1">Ordinary combustibles (wood, paper, cloth)</p>
            <p className="text-sm">Common in general building materials and office environments</p>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Class B Fires</h5>
            <p className="mb-1">Flammable liquids and gases</p>
            <p className="text-sm">Including solvents, oil, gasoline, and paint</p>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Class C Fires</h5>
            <p className="mb-1">Energized electrical equipment</p>
            <p className="text-sm">Most relevant to electricians' work</p>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Class D Fires</h5>
            <p className="mb-1">Combustible metals</p>
            <p className="text-sm">Specialized industrial applications</p>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Class F Fires</h5>
            <p className="mb-1">Cooking oils and fats</p>
            <p className="text-sm">Found in kitchens and food preparation areas</p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Types of Fire Extinguishers</h4>
        <div className="space-y-4">
          <div className="border-b border-[#FFC900]/10 pb-3">
            <h5 className="font-medium text-[#FFC900]">Water (Red Label)</h5>
            <p className="mb-1">For Class A fires only</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Cools burning material</li>
              <li><span className="text-red-400 font-medium">NEVER use on electrical fires - risk of electrocution</span></li>
              <li><span className="text-red-400 font-medium">NEVER use on flammable liquid fires - will spread the fire</span></li>
            </ul>
          </div>
          
          <div className="border-b border-[#FFC900]/10 pb-3">
            <h5 className="font-medium text-[#FFC900]">Carbon Dioxide (CO₂) (Black Label)</h5>
            <p className="mb-1">For Class B and Class C fires</p>
            <ul className="list-disc pl-5 text-sm">
              <li><span className="text-green-400 font-medium">Safe for electrical fires</span> - displaces oxygen</li>
              <li>Leaves no residue</li>
              <li>Limited cooling effect - risk of re-ignition</li>
              <li>Use caution in confined spaces - can displace breathing oxygen</li>
            </ul>
          </div>
          
          <div className="border-b border-[#FFC900]/10 pb-3">
            <h5 className="font-medium text-[#FFC900]">Dry Powder (Blue Label)</h5>
            <p className="mb-1">For Class A, B, and C fires</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Versatile and effective on multiple fire types</li>
              <li><span className="text-green-400 font-medium">Safe for electrical fires</span> - non-conductive</li>
              <li>Creates a dust cloud that can affect visibility and breathing</li>
              <li>Leaves a residue that can damage sensitive equipment</li>
            </ul>
          </div>
          
          <div className="border-b border-[#FFC900]/10 pb-3">
            <h5 className="font-medium text-[#FFC900]">Foam (Cream Label)</h5>
            <p className="mb-1">For Class A and B fires</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Forms a blanket over the fire, sealing off oxygen</li>
              <li><span className="text-red-400 font-medium">NOT safe for electrical fires</span> - conducts electricity</li>
              <li>Effective for flammable liquid fires</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-[#FFC900]">Wet Chemical (Yellow Label)</h5>
            <p className="mb-1">For Class F fires (cooking oils and fats)</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Specifically designed for commercial kitchens</li>
              <li><span className="text-red-400 font-medium">NOT safe for electrical fires</span> unless stated on the extinguisher</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Using a Fire Extinguisher - The PASS Method</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>P</strong>ull the pin</li>
        <li><strong>A</strong>im at the base of the fire</li>
        <li><strong>S</strong>queeze the handle</li>
        <li><strong>S</strong>weep from side to side</li>
      </ul>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-3">
        <h4 className="font-medium text-[#FFC900] mb-1">Electrician's Note:</h4>
        <p>
          For electrical work, always ensure you have quick access to a CO₂ or dry powder extinguisher. 
          Remember that your primary action should be to disconnect the power if safe to do so, 
          before attempting to fight any electrical fire.
        </p>
        <p className="mt-2 font-medium">
          Never put yourself at risk to fight a fire - if in doubt, evacuate and call the fire service.
        </p>
      </div>
    </div>
  )
};
