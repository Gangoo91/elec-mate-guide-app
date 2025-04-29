
import React from 'react';
import { SectionData } from './interfaces';

export const section4_2: SectionData = {
  title: "Inspecting Tools Before Use",
  description: "Checking tools and equipment to ensure they are safe to use.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Inspecting Tools Before Use</h3>
      
      <p>
        Regular inspection of tools and equipment is vital for preventing accidents and ensuring 
        effective performance. As an electrician, your tools are your livelihood, and their condition 
        directly affects work quality and safety.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Pre-Use Inspection Checklist</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Check handles for cracks, splinters, or damage</li>
          <li>Ensure insulation is intact with no exposed conductors</li>
          <li>Verify guards are in place and functioning properly</li>
          <li>Check for loose, missing or damaged parts</li>
          <li>Look for signs of wear, damage or defects</li>
          <li>Test safety features to ensure proper operation</li>
          <li>Check power cords for damage, cuts, or fraying</li>
          <li>Verify plugs have all prongs intact and are not damaged</li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Insulated Tools Visual Inspection</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Color-Coding:</strong>
          <p className="text-sm">Insulated tools are typically marked with a 1000V rating and have red/yellow handles indicating they're designed for electrical work.</p>
        </li>
        <li>
          <strong>Insulation Integrity:</strong>
          <p className="text-sm">Look for cuts, cracks, holes, or wear in the insulation. Even minor damage can compromise the tool's safety.</p>
        </li>
        <li>
          <strong>Contamination Check:</strong>
          <p className="text-sm">Ensure insulated surfaces are clean and free from greases, oils, or solvents that could degrade the insulation.</p>
        </li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Test Equipment Inspection</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Verify test equipment is within calibration date</li>
          <li>Perform test-verify-test on voltage testers (proving unit)</li>
          <li>Check meter probes for damage to insulation</li>
          <li>Ensure correct category rating for the work environment</li>
          <li>Verify fused leads where required</li>
          <li>Check for correct operation on a known source</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <h4 className="font-medium text-[#FFC900] mb-1">When to Remove Tools from Service:</h4>
        <ul className="list-disc pl-5">
          <li>Any damage to insulation</li>
          <li>Excessive wear or damage to any part</li>
          <li>Failed safety features</li>
          <li>Expired calibration dates</li>
          <li>Signs of overheating or electrical damage</li>
          <li>When in doubt about the condition or safety of the tool</li>
        </ul>
        <p className="mt-2 font-medium">
          Remember: Never use damaged tools or attempt temporary repairs. Tag defective tools as 
          "DO NOT USE" and report them to your supervisor.
        </p>
      </div>
    </div>
  )
};
