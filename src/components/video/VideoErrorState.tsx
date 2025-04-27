
import React from 'react';

export const VideoErrorState = () => (
  <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
    <div className="text-center">
      <h2 className="text-xl font-semibold text-red-500 mb-2">Error Loading Videos</h2>
      <p className="text-[#FFC900]/70">
        There was a problem loading the videos. Please try again later.
      </p>
    </div>
  </div>
);
