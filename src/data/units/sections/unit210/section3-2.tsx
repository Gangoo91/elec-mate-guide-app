
import React from 'react';
import { Section210 } from './types';
import LessonContent from '@/components/units/LessonContent';

export const section3_2: Section210 = {
  id: "3.2",
  title: "Explaining Complex Concepts",
  description: "Breaking down technical information for non-specialists",
  content: (
    <>
      <LessonContent title="Explaining Complex Electrical Concepts">
        <p>
          As an electrical professional, you'll often need to explain technical concepts to people without 
          your specialized knowledge. This might include clients, other trades, or colleagues from different 
          departments. The ability to communicate complex ideas in accessible language is a valuable skill.
        </p>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Techniques for Simplifying Complex Information</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Use analogies:</strong> Compare electrical concepts to familiar everyday experiences
            <p className="text-sm mt-1 text-[#FFC900]/70">Example: "Electrical current is like water flowing through pipes, with voltage being like water pressure."</p>
          </li>
          <li>
            <strong>Visual aids:</strong> Use simple diagrams, models, or demonstrations
            <p className="text-sm mt-1 text-[#FFC900]/70">Example: Drawing a basic circuit diagram to explain why a GFCI is needed in a bathroom</p>
          </li>
          <li>
            <strong>Layer information:</strong> Start with basic concepts before adding complexity
            <p className="text-sm mt-1 text-[#FFC900]/70">Example: Explain what a circuit breaker does before describing different types and ratings</p>
          </li>
          <li>
            <strong>Focus on impacts:</strong> Explain the practical effects rather than the technical details
            <p className="text-sm mt-1 text-[#FFC900]/70">Example: "This upgrade will prevent your lights from dimming when large appliances turn on."</p>
          </li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Common Topics to Explain</h3>
        <p>Be prepared to explain these concepts to non-specialists:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Why certain safety features are required by regulations</li>
          <li>The reasons behind recommended upgrades or replacements</li>
          <li>How different electrical systems in a building interact</li>
          <li>The limitations of existing electrical installations</li>
          <li>Trade-offs between different options (cost vs. performance vs. longevity)</li>
        </ul>
        
        <div className="bg-[#353a2c] p-4 rounded-md mt-6">
          <p className="text-[#FFC900] font-medium">Communication Exercise</p>
          <p>Practice explaining these concepts to someone without electrical knowledge:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Why a 100A service might need upgrading to 200A</li>
            <li>The difference between GFCI and AFCI protection</li>
            <li>Why dedicated circuits are important for certain appliances</li>
          </ul>
        </div>
      </LessonContent>
    </>
  )
};
