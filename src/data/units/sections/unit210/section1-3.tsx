
import React from 'react';
import { Section210 } from './types';
import LessonContent from "@/components/units/LessonContent";

export const section1_3: Section210 = {
  title: "Team Communication",
  description: "Develop effective communication skills with colleagues and other trades",
  content: (
    <div className="space-y-8">
      <LessonContent title="Learning Objectives">
        <ul className="list-disc pl-5 space-y-2">
          <li>Understand the importance of clear communication with colleagues and other trades</li>
          <li>Learn effective handover techniques</li>
          <li>Develop strategies for resolving workplace communication issues</li>
        </ul>
      </LessonContent>
      
      <LessonContent title="1.3.1 Workplace Communication">
        <p className="mb-4">
          On job sites, you'll work alongside other electricians and different trades. Effective communication is essential for:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Coordinating work to avoid conflicts and delays</li>
          <li>Ensuring safety protocols are followed by everyone</li>
          <li>Sharing important information about changes or challenges</li>
          <li>Building a positive team environment</li>
        </ul>
        <p className="mb-4">
          Communication with colleagues may be more technical than with customers, but clarity remains important:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Be specific when discussing locations, components, or issues</li>
          <li>Don't assume others know exactly what you mean</li>
          <li>Use correct technical terms when appropriate</li>
          <li>Confirm understanding of important instructions or information</li>
        </ul>
        <p>
          Remember that even experienced electricians can misinterpret instructions if they're not completely clear.
        </p>
      </LessonContent>
      
      <LessonContent title="1.3.2 Cross-trade Communication">
        <p className="mb-4">
          On larger sites, you'll interact with other trades such as plumbers, carpenters, and HVAC technicians:
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li>
            <strong className="text-[#FFC900]">Coordinate space needs:</strong> Discuss routing of cables, pipes, and ductwork to avoid conflicts
          </li>
          <li>
            <strong className="text-[#FFC900]">Sequence work appropriately:</strong> Communicate about timing to ensure work happens in the correct order
          </li>
          <li>
            <strong className="text-[#FFC900]">Respect other trades' expertise:</strong> Ask questions rather than making assumptions about their work
          </li>
          <li>
            <strong className="text-[#FFC900]">Address issues diplomatically:</strong> If there's a problem with another trade's work that affects yours, discuss it professionally
          </li>
        </ul>
        <div className="bg-[#353a2c] p-4 rounded-md border border-[#FFC900]/30 mb-4">
          <h4 className="text-[#FFC900] font-medium mb-2">Example: Effective Cross-trade Communication</h4>
          <p className="text-[#FFC900]/80">
            "I notice you're planning to run that water pipe across this area. I need to install a consumer unit on this wall, and I'm concerned about having water pipes directly above electrical equipment. Could we discuss options for rerouting either your pipe or relocating my consumer unit?"
          </p>
        </div>
        <p>
          Building good relationships with other trades makes collaboration easier and improves overall project outcomes.
        </p>
      </LessonContent>
      
      <LessonContent title="1.3.3 Handover Procedures">
        <p className="mb-4">
          When jobs span multiple days or involve multiple electricians, proper handover is crucial:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Document what has been completed and what still needs to be done</li>
          <li>Highlight any unusual issues or workarounds implemented</li>
          <li>Note any materials needed or ordered</li>
          <li>Identify potential safety issues or hazards</li>
          <li>Document the status of circuits (energized, isolated, etc.)</li>
        </ul>
        <p className="mb-4">
          A good handover process might include:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>A written log or digital record</li>
          <li>Photos of work in progress, especially for concealed installations</li>
          <li>Verbal briefing when possible</li>
          <li>Clear labeling of temporary work or incomplete installations</li>
        </ul>
        <p>
          Thorough handovers save time, prevent rework, and enhance safety by ensuring everyone has complete information.
        </p>
      </LessonContent>
    </div>
  ),
  detailedContent: (
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-[#FFC900]">Conflict Resolution in the Workplace</h4>
      <p className="mb-4">
        Even with good communication, conflicts sometimes arise in the workplace:
      </p>
      <ul className="list-disc pl-5 space-y-3 mb-6">
        <li>
          <strong className="text-[#FFC900]">Address issues early:</strong> Small misunderstandings can grow into larger conflicts if not addressed
        </li>
        <li>
          <strong className="text-[#FFC900]">Focus on issues, not personalities:</strong> Discuss the specific problem rather than blaming individuals
        </li>
        <li>
          <strong className="text-[#FFC900]">Listen actively:</strong> Try to understand others' perspectives before responding
        </li>
        <li>
          <strong className="text-[#FFC900]">Seek solutions:</strong> Focus on finding a way forward rather than dwelling on who was right or wrong
        </li>
        <li>
          <strong className="text-[#FFC900]">Involve supervision when necessary:</strong> If conflicts can't be resolved directly, seek help from a supervisor
        </li>
      </ul>
      
      <h4 className="text-xl font-medium text-[#FFC900]">Communication in Emergencies</h4>
      <p className="mb-4">
        In emergency situations, communication becomes even more critical:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Be clear and direct about the nature of the emergency</li>
        <li>Specify exact locations and the assistance needed</li>
        <li>Use established emergency protocols and terminology</li>
        <li>Remain calm to help others stay calm</li>
        <li>Confirm that emergency messages have been received and understood</li>
        <li>Document incidents promptly after they're resolved</li>
      </ul>
      
      <h4 className="text-xl font-medium text-[#FFC900]">Team Communication Tools</h4>
      <p className="mb-4">
        Modern workplaces use various tools to enhance team communication:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Digital job management systems for tracking and handovers</li>
        <li>Group messaging apps for quick team updates</li>
        <li>Digital photographs to document work and issues</li>
        <li>Project management software for larger jobs</li>
        <li>Video calls for remote troubleshooting or consultation</li>
      </ul>
      <p className="mt-4">
        While these tools are valuable, they supplement rather than replace clear face-to-face and written communication.
      </p>
    </div>
  ),
};
