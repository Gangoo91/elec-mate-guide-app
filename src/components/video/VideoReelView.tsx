
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import { VideoPlayer } from './VideoPlayer';
import type { VideoLesson } from '@/types/videos';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

interface VideoReelViewProps {
  videos: VideoLesson[];
  initialVideoIndex?: number;
}

export const VideoReelView = ({ videos, initialVideoIndex = 0 }: VideoReelViewProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialVideoIndex);
  const isMobile = useIsMobile();
  
  const handlePrevVideo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleNextVideo = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // No videos case
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center p-4">
        <p className="text-[#FFC900] text-xl">No videos available in this category</p>
      </div>
    );
  }

  const currentVideo = videos[currentIndex];
  
  return (
    <div className="relative h-[calc(100vh-120px)] md:h-[calc(100vh-150px)] w-full">
      {/* Current video container */}
      <div className="absolute inset-0 flex flex-col">
        {/* Video player takes up most of the screen */}
        <div className="relative flex-grow w-full">
          <VideoPlayer
            videoId={currentVideo.id}
            videoUrl={currentVideo.video_url}
            title={currentVideo.title}
          />
        </div>
        
        {/* Video info overlay at bottom */}
        <div className="bg-[#22251e]/90 p-4 w-full">
          <h3 className="text-[#FFC900] font-semibold text-lg mb-1">{currentVideo.title}</h3>
          <p className="text-[#FFC900]/70 text-sm line-clamp-2">{currentVideo.description}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-[#FFC900]/60">{currentVideo.duration}</span>
            <span className="text-xs text-[#FFC900]/60">
              {currentIndex + 1} of {videos.length}
            </span>
          </div>
        </div>
      </div>
      
      {/* Navigation controls */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-10">
        <Button
          variant="outline" 
          size="icon"
          className="bg-[#22251e]/70 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#22251e] hover:text-[#FFC900]"
          onClick={handlePrevVideo}
          disabled={currentIndex === 0}
        >
          <ChevronUp className="h-4 w-4" />
          <span className="sr-only">Previous video</span>
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="bg-[#22251e]/70 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#22251e] hover:text-[#FFC900]"
          onClick={handleNextVideo}
          disabled={currentIndex === videos.length - 1}
        >
          <ChevronDown className="h-4 w-4" />
          <span className="sr-only">Next video</span>
        </Button>
      </div>
    </div>
  );
};
