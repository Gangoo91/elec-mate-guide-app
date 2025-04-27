
import React from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoControlsProps {
  playing: boolean;
  muted?: boolean;
  onPlay: () => void;
  onVolumeClick: () => void;
  onFullscreenClick: () => void;
}

export const VideoControls = ({ 
  playing, 
  muted = false,
  onPlay, 
  onVolumeClick, 
  onFullscreenClick 
}: VideoControlsProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="flex items-center justify-between">
        <button 
          onClick={onPlay}
          className="text-white hover:text-[#FFC900] transition-colors"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </button>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onVolumeClick}
            className="text-white hover:text-[#FFC900] transition-colors"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </button>
          
          <button 
            onClick={onFullscreenClick}
            className="text-white hover:text-[#FFC900] transition-colors"
            aria-label="Toggle fullscreen"
          >
            <Maximize className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
