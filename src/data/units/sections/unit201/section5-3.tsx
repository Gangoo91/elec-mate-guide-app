
import React from 'react';
import { SectionData } from './interfaces';

export const section5_3: SectionData = {
  title: "Evacuation Procedures",
  description: "Emergency response and evacuation protocols in case of fire or other emergencies.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Evacuation Procedures</h3>
      
      <p>
        Understanding evacuation procedures is essential for all workers, including electricians. 
        Proper evacuation can save lives during fires, gas leaks, structural failures, or other emergencies.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Before an Emergency</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Familiarize yourself with the site evacuation plan when starting work at a new location</li>
          <li>Identify all emergency exits and assembly points</li>
          <li>Know the location of fire alarm call points</li>
          <li>Understand your specific role in an evacuation (if assigned)</li>
          <li>Note any colleagues who might need assistance during evacuation</li>
          <li>Keep emergency exits and routes clear at all times</li>
        </ul>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">During an Evacuation</h4>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Stop work immediately</strong>
            <p className="text-sm">Make equipment safe if possible, but don't delay evacuation to do so</p>
          </li>
          <li>
            <strong>Proceed to the nearest safe exit</strong>
            <p className="text-sm">Walk, don't run. Stay calm and help others if safe to do so</p>
          </li>
          <li>
            <strong>Follow designated evacuation routes</strong>
            <p className="text-sm">Don't use lifts/elevators during a fire evacuation</p>
          </li>
          <li>
            <strong>Proceed to the assembly point</strong>
            <p className="text-sm">Move well away from the building</p>
          </li>
          <li>
            <strong>Report to the roll-call taker</strong>
            <p className="text-sm">Ensure your presence is noted</p>
          </li>
          <li>
            <strong>Report any missing persons</strong>
            <p className="text-sm">Tell fire wardens or emergency responders about anyone you believe is still inside</p>
          </li>
          <li>
            <strong>Wait for the all-clear</strong>
            <p className="text-sm">Never re-enter the building until authorized to do so</p>
          </li>
        </ol>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Special Considerations for Electricians</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Electrical Isolation</strong>
          <p className="text-sm">If time permits and it's safe to do so, isolate electrical equipment before evacuating. This can prevent further hazards developing.</p>
        </li>
        <li>
          <strong>Hazardous Areas</strong>
          <p className="text-sm">Be aware of any specific evacuation procedures for high-risk areas like substations, plant rooms, or confined spaces.</p>
        </li>
        <li>
          <strong>Communicating Electrical Hazards</strong>
          <p className="text-sm">Inform emergency responders about any specific electrical risks they should be aware of.</p>
        </li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Different Alarm Sounds and Their Meaning</h4>
        <p>Most sites use different alarm patterns to indicate different responses:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Continuous Alarm:</strong> Immediate evacuation required
          </li>
          <li>
            <strong>Intermittent Alarm:</strong> Often a warning or standby signal - prepare to evacuate
          </li>
          <li>
            <strong>Voice Alarms:</strong> Follow the specific instructions given
          </li>
        </ul>
        <p className="mt-2">
          Always check the specific alarm patterns and their meanings for each site you work on.
        </p>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <h4 className="font-medium text-[#FFC900] mb-1">Important:</h4>
        <ul className="list-disc pl-5">
          <li>Never ignore an alarm, even if you think it might be a drill</li>
          <li>Never use lifts/elevators during a fire evacuation</li>
          <li>If smoke is present, stay low where the air is clearer</li>
          <li>If trapped, close doors, seal gaps, call for help, and signal at windows</li>
          <li>Remember: your safety comes first - equipment and tools can be replaced</li>
        </ul>
      </div>
    </div>
  )
};
