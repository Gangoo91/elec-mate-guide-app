
import React from 'react';
import KudosDisplay from "@/components/profile/KudosDisplay";

export const VideoSidebar = () => (
  <div className="lg:col-span-1">
    <KudosDisplay />
    
    <div className="mt-6 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-[#FFC900] mb-3">Course Content Guide</h3>
      <ul className="space-y-2 text-[#FFC900]/80">
        {[
          "Videos aligned with course units",
          "Practical demonstrations for hands-on skills",
          "Theory explanations with visual aids",
          "Safety procedures and best practices",
          "Installation techniques and methods",
          "Testing and inspection guidance"
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-[#FFC900] font-bold">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
