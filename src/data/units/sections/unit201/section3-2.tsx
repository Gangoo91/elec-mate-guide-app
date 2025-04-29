
import React from 'react';
import { SectionData } from './interfaces';

export const section3_2: SectionData = {
  title: "Hierarchy of Control Measures",
  description: "Understanding the most effective approaches to controlling workplace risks.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Hierarchy of Control Measures</h3>
      
      <p>
        The hierarchy of control is a systematic approach to managing safety risks in the workplace. It ranks risk control measures 
        from the highest level of protection and reliability to the lowest. This framework helps electricians and employers 
        implement the most effective controls for electrical hazards.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">The Five Levels of Control</h4>
        
        <div className="space-y-4">
          <div className="bg-[#2a2d24] p-3 rounded-lg">
            <h5 className="font-medium text-[#FFC900]">1. Elimination</h5>
            <p>Physically removing the hazard</p>
            <p className="mt-2 text-sm font-medium">Most Effective</p>
            <p className="mt-1 text-sm">Examples in electrical work:</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Designing out the need for live working</li>
              <li>Removing redundant electrical installations</li>
              <li>Eliminating the need to work at height by redesigning the installation</li>
            </ul>
          </div>
          
          <div className="bg-[#2a2d24] p-3 rounded-lg">
            <h5 className="font-medium text-[#FFC900]">2. Substitution</h5>
            <p>Replacing the hazard with something less hazardous</p>
            <p className="mt-1 text-sm">Examples in electrical work:</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Using low-voltage equipment where possible</li>
              <li>Replacing soldered joints with crimped connections</li>
              <li>Using battery-powered tools instead of mains-powered ones</li>
              <li>Substituting hazardous chemicals with safer alternatives</li>
            </ul>
          </div>
          
          <div className="bg-[#2a2d24] p-3 rounded-lg">
            <h5 className="font-medium text-[#FFC900]">3. Engineering Controls</h5>
            <p>Isolating people from the hazard</p>
            <p className="mt-1 text-sm">Examples in electrical work:</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Installing RCDs (Residual Current Devices)</li>
              <li>Using insulation and guarding of live parts</li>
              <li>Installing safety switches</li>
              <li>Implementing lock-out/tag-out systems</li>
              <li>Using barriers and enclosures</li>
            </ul>
          </div>
          
          <div className="bg-[#2a2d24] p-3 rounded-lg">
            <h5 className="font-medium text-[#FFC900]">4. Administrative Controls</h5>
            <p>Changing the way people work</p>
            <p className="mt-1 text-sm">Examples in electrical work:</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Safe working procedures</li>
              <li>Training and instruction</li>
              <li>Permit-to-work systems</li>
              <li>Warning signs</li>
              <li>Job rotation to limit exposure</li>
              <li>Regular testing and inspection</li>
            </ul>
          </div>
          
          <div className="bg-[#2a2d24] p-3 rounded-lg">
            <h5 className="font-medium text-[#FFC900]">5. PPE (Personal Protective Equipment)</h5>
            <p>Protecting the worker with personal equipment</p>
            <p className="mt-2 text-sm font-medium">Least Effective</p>
            <p className="mt-1 text-sm">Examples in electrical work:</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Insulated gloves</li>
              <li>Safety boots with electrical resistance</li>
              <li>Arc flash protection</li>
              <li>Eye protection</li>
              <li>Hard hats</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Applying the Hierarchy</h4>
      <p>
        When managing electrical risks, you should:
      </p>
      <ol className="list-decimal pl-5 space-y-1">
        <li>Always start at the top of the hierarchy (elimination) and work down</li>
        <li>Use a combination of controls if a single control is not enough</li>
        <li>Review the effectiveness of controls regularly</li>
        <li>Consult with workers when deciding on controls</li>
      </ol>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <p className="font-medium">
          Remember: PPE should never be the only control measure. It should be used in combination with higher-level 
          controls and as a last line of defense. Relying solely on PPE is the least effective approach to managing risk.
        </p>
      </div>
    </div>
  )
};
