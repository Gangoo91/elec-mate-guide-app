
import React from 'react';
import { Play, Volume2, Maximize } from 'lucide-react';

interface VideoControlsProps {
  playing: boolean;
  onPlay: () => void;
  onVolumeClick: () => void;
  onFullscreenClick: () => void;
}

export const VideoControls = ({
  playing,
  onPlay,
  onVolumeClick,
  onFullscreenClick
}: VideoControlsProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button 
          className="text-white hover:text-[#FFC900] transition"
          onClick={onPlay}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          <Play className="h-5 w-5" />
        </button>
        <button 
          className="text-white hover:text-[#FFC900] transition"
          onClick={onVolumeClick}
          aria-label="Volume"
        >
          <Volume2 className="h-5 w-5" />
        </button>
      </div>
      <button 
        className="text-white hover:text-[#FFC900] transition"
        onClick={onFullscreenClick}
        aria-label="Toggle fullscreen"
      >
        <Maximize className="h-5 w-5" />
      </button>
    </div>
  );
};
