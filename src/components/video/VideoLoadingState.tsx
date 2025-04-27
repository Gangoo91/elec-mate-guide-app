
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export const VideoLoadingState = () => (
  <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-[#FFC900]/20 rounded w-1/4"></div>
      <div className="h-4 bg-[#FFC900]/20 rounded w-2/4"></div>
      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-40 w-full" />
        ))}
      </div>
    </div>
  </div>
);
