
import React from 'react';
import { SectionData } from './interfaces';

export const section6_2: SectionData = {
  title: "Importance of Proving Dead Before Working",
  description: "Critical procedures to verify electrical equipment is de-energized before beginning work.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Importance of Proving Dead Before Working</h3>
      
      <p>
        Proving a circuit is dead is one of the most critical safety procedures in electrical work. Never assume a circuit is dead just because 
        you've switched it off or because someone told you it's dead. You must verify it yourself.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">The 'Prove Dead' Procedure</h4>
        
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong>Test your voltage indicator on a known live source</strong>
            <p className="text-sm">
              Before testing the isolated circuit, verify your voltage indicator is working by testing it on a known live circuit or using a proving unit.
            </p>
          </li>
          <li>
            <strong>Test the isolated circuit to prove it's dead</strong>
            <p className="text-sm">
              Use the voltage indicator to test between:
            </p>
            <ul className="list-disc pl-5 text-sm">
              <li>Phase-to-Earth</li>
              <li>Phase-to-Neutral</li>
              <li>Neutral-to-Earth</li>
              <li>All phases (in three-phase systems)</li>
            </ul>
          </li>
          <li>
            <strong>Test the voltage indicator again on a known live source</strong>
            <p className="text-sm">
              Re-test your voltage indicator to confirm it's still functioning correctly. This verifies that your indicator didn't fail during the test.
            </p>
          </li>
        </ol>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Approved Test Equipment</h4>
        
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>GS38-compliant voltage indicators</strong>
            <p className="text-sm">
              Must meet the HSE's GS38 guidance:
            </p>
            <ul className="list-disc pl-5 text-sm">
              <li>Adequately insulated probes</li>
              <li>Minimized exposed metal parts</li>
              <li>Built-in finger guards</li>
              <li>Fused leads</li>
              <li>CAT rating appropriate for the installation</li>
            </ul>
          </li>
          <li>
            <strong>Proving units</strong>
            <p className="text-sm">
              Portable devices that provide a safe source of voltage to verify test instrument operation.
              Essential when a known live source is not readily available or in low-light conditions.
            </p>
          </li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Why Proving Dead Is Critical</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Electric shock can cause severe injury or death</li>
        <li>Circuits may be mislabeled or have unexpected backfeeds</li>
        <li>Test equipment could be faulty</li>
        <li>Someone could accidentally re-energize the circuit</li>
        <li>Multiple supplies may feed the same location</li>
        <li>Capacitors may store charge even after isolation</li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Common Mistakes to Avoid</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Using a multimeter instead of a proper voltage indicator</strong>
            <p className="text-sm">Multimeters are not designed for safety verification and may not be GS38 compliant</p>
          </li>
          <li>
            <strong>Testing only phase-to-neutral</strong>
            <p className="text-sm">Always test all possible combinations to ensure complete isolation</p>
          </li>
          <li>
            <strong>Skipping the "test-before-use" verification</strong>
            <p className="text-sm">Never assume your test equipment is working properly</p>
          </li>
          <li>
            <strong>Rushing the procedure</strong>
            <p className="text-sm">Take your time; getting this wrong can be fatal</p>
          </li>
          <li>
            <strong>Not using lock-off devices</strong>
            <p className="text-sm">Even after proving dead, secure the isolation to prevent re-energization</p>
          </li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <p className="font-medium">
          Remember: "Proving dead" is not optional or something you can skip to save time. It's a fundamental safety procedure 
          that should become second nature. Electricity cannot be seen, heard, or smelled—the only way to know if a circuit is 
          dead is to test it properly with approved equipment.
        </p>
      </div>
    </div>
  )
};
