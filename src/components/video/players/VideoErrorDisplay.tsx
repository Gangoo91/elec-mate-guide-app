
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface VideoErrorDisplayProps {
  videoUrl: string;
}

export const VideoErrorDisplay = ({ videoUrl }: VideoErrorDisplayProps) => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-black/90 p-6 text-center">
    <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
    <h3 className="text-white text-lg font-semibold mb-2">Video Unavailable</h3>
    <p className="text-white/70 mb-4">
      This video cannot be played. It may have been removed or is currently unavailable.
    </p>
    <a 
      href={videoUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-[#FFC900] hover:underline"
    >
      Try opening the video in a new tab
    </a>
  </div>
);
