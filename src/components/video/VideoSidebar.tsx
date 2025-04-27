
import React from 'react';
import KudosDisplay from "@/components/profile/KudosDisplay";

export const VideoSidebar = () => (
  <div className="space-y-6">
    <KudosDisplay />
    
    <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-[#FFC900] mb-3">Course Content Guide</h3>
      <ul className="space-y-3 text-[#FFC900]/80">
        {[
          "Videos aligned with course units",
          "Practical demonstrations for hands-on skills",
          "Theory explanations with visual aids",
          "Safety procedures and best practices",
          "Installation techniques and methods",
          "Testing and inspection guidance"
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm sm:text-base">
            <span className="text-[#FFC900] font-bold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
