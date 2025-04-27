
import React from 'react';
import { useVideoPlayer } from '../context/VideoPlayerContext';

interface PlayOverlayProps {
  onPlay: () => void;
  loading: boolean;
}

export const PlayOverlay = ({ onPlay, loading }: PlayOverlayProps) => {
  const { playing } = useVideoPlayer();

  if (loading || playing) return null;

  return (
    <div 
      className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer z-10"
      onClick={onPlay}
    >
      <div className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-12 w-12 text-white"
        >
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      </div>
    </div>
  );
};
