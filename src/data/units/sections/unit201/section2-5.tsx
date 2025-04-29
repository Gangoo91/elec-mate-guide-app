
import React from 'react';
import { SectionData } from './interfaces';

export const section2_5: SectionData = {
  title: "Use of Hazardous Substances",
  description: "Safe handling of glues, solvents, and other chemicals used in electrical work.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Use of Hazardous Substances</h3>
      
      <p>
        Electricians frequently use chemicals and substances that can be hazardous to health, including adhesives, 
        solvents, cleaning agents, and other materials. Understanding their risks and how to handle them safely is 
        essential for protecting your health.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Common Hazardous Substances in Electrical Work</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-[#FFC900]">Chemical Products</h5>
            <ul className="list-disc pl-5">
              <li>PVC cement and conduit solvent</li>
              <li>Cable lubricants</li>
              <li>Contact cleaners</li>
              <li>Silicone sealants</li>
              <li>Epoxy resins</li>
              <li>Battery acid</li>
              <li>Insulation materials</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Potential Hazards</h5>
            <ul className="list-disc pl-5">
              <li>Inhalation of fumes or dust</li>
              <li>Skin contact causing dermatitis</li>
              <li>Eye irritation or damage</li>
              <li>Ingestion if hands are not washed</li>
              <li>Fire risks from flammable substances</li>
              <li>Environmental damage from improper disposal</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Safe Handling Procedures</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Read Safety Data Sheets (SDS)</strong>
          <p className="text-sm">Always read and understand the SDS for any chemical product before use. These provide essential information about hazards, handling, storage, and emergency measures.</p>
        </li>
        <li>
          <strong>Use Appropriate PPE</strong>
          <p className="text-sm">Based on the SDS information, use appropriate personal protective equipment, which may include:</p>
          <ul className="list-disc pl-5 text-sm">
            <li>Chemical-resistant gloves</li>
            <li>Eye protection</li>
            <li>Respiratory protection for volatile substances</li>
            <li>Protective clothing</li>
          </ul>
        </li>
        <li>
          <strong>Ventilation</strong>
          <p className="text-sm">Ensure adequate ventilation when using solvents or products that release fumes. Work outdoors or use extraction fans when necessary.</p>
        </li>
        <li>
          <strong>Storage</strong>
          <p className="text-sm">Store chemicals in their original containers with labels intact. Follow storage guidance regarding temperature, sunlight exposure, and compatibility with other substances.</p>
        </li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">COSHH Assessment</h4>
        <p>When working with hazardous substances, a COSHH assessment should consider:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>The substance and its hazards</li>
          <li>How much is being used and for how long</li>
          <li>Who might be exposed and how</li>
          <li>Control measures needed</li>
          <li>Actions in case of emergency (spills, first aid)</li>
          <li>Health surveillance requirements</li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Special Considerations for Electricians</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Be aware that some solvents can damage electrical insulation</li>
        <li>Avoid using flammable substances near potential ignition sources</li>
        <li>Consider whether adhesives or solvents will affect the fire rating of constructions</li>
        <li>Remember that fumes can travel through conduits and cable ducts</li>
        <li>Some substances may render electrical equipment non-compliant with regulations</li>
      </ul>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <h4 className="font-medium text-[#FFC900] mb-1">Safe Disposal:</h4>
        <p>
          Never pour chemicals down drains or dispose of them in general waste. Follow local regulations for 
          disposal of hazardous waste, which may include taking them to designated collection points or arranging 
          specialist collection.
        </p>
      </div>
    </div>
  )
};
