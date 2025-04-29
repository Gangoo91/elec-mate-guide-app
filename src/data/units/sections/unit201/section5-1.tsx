
import React from 'react';
import { SectionData } from './interfaces';

export const section5_1: SectionData = {
  title: "How Fires Start (Fire Triangle: Heat, Fuel, Oxygen)",
  description: "Understanding the science behind fires and how to prevent them in electrical work.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">How Fires Start (Fire Triangle: Heat, Fuel, Oxygen)</h3>
      
      <p>
        Understanding the fire triangle is fundamental to fire prevention in electrical work. A fire can only occur when 
        all three elements of the fire triangle are present simultaneously.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">The Three Elements of Fire</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#2a2d24] p-4 rounded-lg">
            <h5 className="font-medium text-[#FFC900] text-center">HEAT</h5>
            <p className="mt-2 text-center">The energy needed to raise the temperature of the fuel to a point where it gives off sufficient vapors to be ignited</p>
            <div className="mt-3">
              <h6 className="text-[#FFC900] font-medium text-sm">Electrical sources:</h6>
              <ul className="list-disc pl-5 text-sm">
                <li>Overloaded circuits</li>
                <li>Short circuits</li>
                <li>Poor connections</li>
                <li>Equipment overheating</li>
                <li>Arcing</li>
                <li>Static electricity</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#2a2d24] p-4 rounded-lg">
            <h5 className="font-medium text-[#FFC900] text-center">FUEL</h5>
            <p className="mt-2 text-center">Any combustible material that can combine with oxygen to burn</p>
            <div className="mt-3">
              <h6 className="text-[#FFC900] font-medium text-sm">Common fuels in electrical work:</h6>
              <ul className="list-disc pl-5 text-sm">
                <li>Cable insulation</li>
                <li>Plastic enclosures</li>
                <li>Flammable liquids</li>
                <li>Wood and paper</li>
                <li>Dust accumulation</li>
                <li>Nearby combustible materials</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#2a2d24] p-4 rounded-lg">
            <h5 className="font-medium text-[#FFC900] text-center">OXYGEN</h5>
            <p className="mt-2 text-center">Present in air (approximately 21%)</p>
            <div className="mt-3">
              <h6 className="text-[#FFC900] font-medium text-sm">Considerations:</h6>
              <ul className="list-disc pl-5 text-sm">
                <li>Ventilation systems can increase oxygen flow</li>
                <li>Enclosed spaces may have limited oxygen</li>
                <li>Some chemicals can release oxygen when heated</li>
                <li>Open windows and doors affect air flow</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p className="mt-4 font-medium text-center">
          Remove ANY ONE of these elements, and a fire cannot start or continue to burn.
        </p>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Preventing Fires by Breaking the Triangle</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        <div>
          <h5 className="font-medium text-[#FFC900]">Removing Heat</h5>
          <ul className="list-disc pl-5">
            <li>Using correctly rated circuit protection</li>
            <li>Ensuring proper cable sizing</li>
            <li>Regular maintenance to identify hot spots</li>
            <li>Proper cooling for equipment</li>
            <li>Avoiding overloaded circuits</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-[#FFC900]">Removing Fuel</h5>
          <ul className="list-disc pl-5">
            <li>Good housekeeping - remove waste</li>
            <li>Store flammable materials properly</li>
            <li>Use fire-resistant materials</li>
            <li>Keep electrical areas clear of combustibles</li>
            <li>Regular cleaning to remove dust buildup</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-[#FFC900]">Managing Oxygen</h5>
          <ul className="list-disc pl-5">
            <li>Close fire doors</li>
            <li>Use appropriate fire suppression systems</li>
            <li>Understand ventilation impacts</li>
            <li>Consider confined spaces carefully</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <h4 className="font-medium text-[#FFC900] mb-1">Modern Fire Triangle Extension: The Fire Tetrahedron</h4>
        <p>
          Modern fire science adds a fourth element, creating the fire tetrahedron:
        </p>
        <p className="mt-2">
          <strong>Chemical Chain Reaction</strong> - The process that sustains the fire once it has started. 
          Some fire extinguishing methods (like halon) work by interrupting this chain reaction rather than 
          removing heat, fuel, or oxygen.
        </p>
      </div>
    </div>
  )
};
