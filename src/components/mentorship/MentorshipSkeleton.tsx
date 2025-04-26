
import React from "react";

export const MentorshipSkeleton = () => {
  return (
    <div className="container py-8">
      <div className="animate-pulse space-y-4">
        <div className="h-12 bg-[#FFC900]/10 rounded-lg w-1/3" />
        <div className="h-6 bg-[#FFC900]/10 rounded-lg w-2/3" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 bg-[#FFC900]/10 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

