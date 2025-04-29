
import React from 'react';
import { SectionData } from './interfaces';

export const section6_3: SectionData = {
  title: "Double-checking Tools and Equipment",
  description: "Ensuring tools and test equipment are safe and appropriate for electrical work.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Double-checking Tools and Equipment</h3>
      
      <p>
        Thoroughly checking your tools and test equipment before use is a critical safety step that 
        all electricians must practice. Faulty or inappropriate tools can lead to electric shock, 
        incorrect readings, and potentially dangerous situations.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Testing Instruments</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Verify-Test-Verify Process</strong>
            <p className="text-sm">Always follow the "verify-test-verify" procedure:</p>
            <ol className="list-decimal pl-5 text-sm">
              <li>Test the instrument on a known live source</li>
              <li>Test on the circuit to be worked on</li>
              <li>Retest on the known live source to confirm the instrument is still working</li>
            </ol>
          </li>
          <li>
            <strong>Calibration Status</strong>
            <p className="text-sm">Check that instruments are within their calibration date. Out-of-date calibration can lead to inaccurate readings.</p>
          </li>
          <li>
            <strong>Appropriate Rating</strong>
            <p className="text-sm">Ensure the instrument is appropriately rated for the voltage/current you're working with and has the correct CAT rating for the environment.</p>
          </li>
          <li>
            <strong>Battery Check</strong>
            <p className="text-sm">Low battery can cause unreliable readings. Many instrument failures occur due to insufficient battery power.</p>
          </li>
        </ul>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Physical Inspection of Test Equipment</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Inspect test leads for damage, exposed conductors, or loose connections</li>
          <li>Check probe tips for sharpness and security</li>
          <li>Verify fused leads where required</li>
          <li>Ensure probe insulators are intact</li>
          <li>Check meter housing for cracks or damage</li>
          <li>Ensure display is clear and all segments are working</li>
          <li>Verify selector switches move smoothly and make good contact</li>
          <li>Confirm that any accessories (clamps, clips, etc.) are in good condition</li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Hand and Power Tools</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Insulated Tools</strong>
          <p className="text-sm">Check for the 1000V rating mark and verify insulation is intact with no cracks, chips, or exposed metal.</p>
        </li>
        <li>
          <strong>Power Tool Checks</strong>
          <p className="text-sm">Inspect cords, casings, and ensure guards are in place and working correctly. Check for current PAT test labels.</p>
        </li>
        <li>
          <strong>Moving Parts</strong>
          <p className="text-sm">Ensure any moving parts operate smoothly and correctly. Check for excessive wear or damage.</p>
        </li>
        <li>
          <strong>Corrosion</strong>
          <p className="text-sm">Look for rust or corrosion that could affect tool performance or safety.</p>
        </li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Safety Equipment Checks</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Inspect voltage indicators for damage and proper functioning</li>
          <li>Check locking-off equipment is complete and in good condition</li>
          <li>Verify proving units are working correctly</li>
          <li>Ensure warning signs and barriers are available and in good condition</li>
          <li>Check insulating mats for cracks, holes, or contamination</li>
          <li>Inspect rubber gloves for pinhole leaks by inflating and checking for air escape</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <h4 className="font-medium text-[#FFC900] mb-1">Key Safe Practices:</h4>
        <ul className="list-disc pl-5">
          <li>Never use damaged or suspect tools - it's not worth the risk</li>
          <li>Always tag and remove from service any defective equipment</li>
          <li>Don't rely on a single method to verify a circuit is dead</li>
          <li>Use the correct tool for the job - improvising can be dangerous</li>
          <li>Regularly clean and maintain your tools and test equipment</li>
          <li>Remember that even the best tools can fail - always work as if they might</li>
        </ul>
        <p className="mt-2 font-medium">
          Your life may depend on your test equipment and tools functioning correctly. 
          Take the time to check them thoroughly.
        </p>
      </div>
    </div>
  )
};
