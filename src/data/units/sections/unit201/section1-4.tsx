
import React from 'react';
import { SectionData } from './interfaces';

export const section1_4: SectionData = {
  title: "Manual Handling Regulations",
  description: "Understanding how to safely lift and move equipment and materials in electrical work.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Manual Handling Regulations</h3>
      
      <p>
        The Manual Handling Operations Regulations 1992 (amended in 2002) cover the moving of objects by hand or
        bodily force. As an electrician, you'll frequently need to move heavy equipment, cable drums, and tools.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Key Requirements</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Avoid hazardous manual handling operations where reasonably practicable</li>
          <li>Assess any hazardous manual handling operations that cannot be avoided</li>
          <li>Reduce the risk of injury so far as is reasonably practicable</li>
          <li>Provide information on the weight of loads and the heaviest side of an unevenly loaded item</li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">TILE Risk Assessment</h4>
      <p>When assessing manual handling tasks, consider the TILE factors:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div className="bg-[#22251e] p-3 rounded-lg">
          <p className="font-medium text-[#FFC900]">T - Task</p>
          <ul className="list-disc pl-4 text-sm">
            <li>How the load is handled</li>
            <li>Position of the body during the task</li>
            <li>Repetitive movements involved</li>
          </ul>
        </div>
        <div className="bg-[#22251e] p-3 rounded-lg">
          <p className="font-medium text-[#FFC900]">I - Individual</p>
          <ul className="list-disc pl-4 text-sm">
            <li>Physical capability of the person</li>
            <li>Knowledge and training</li>
            <li>Any health conditions</li>
          </ul>
        </div>
        <div className="bg-[#22251e] p-3 rounded-lg">
          <p className="font-medium text-[#FFC900]">L - Load</p>
          <ul className="list-disc pl-4 text-sm">
            <li>Weight, size, and shape</li>
            <li>Stability and grip</li>
            <li>Sharp edges or hot surfaces</li>
          </ul>
        </div>
        <div className="bg-[#22251e] p-3 rounded-lg">
          <p className="font-medium text-[#FFC900]">E - Environment</p>
          <ul className="list-disc pl-4 text-sm">
            <li>Space constraints</li>
            <li>Floor conditions</li>
            <li>Lighting and temperature</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <p className="font-semibold">
          Remember: If you cannot lift something safely on your own, always ask for assistance or use 
          mechanical aids. No electrical component is worth risking a back injury.
        </p>
      </div>
    </div>
  )
};
