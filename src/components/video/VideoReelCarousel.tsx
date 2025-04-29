
import React, { useState } from 'react';
import { VideoLesson } from '@/types/videos';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { VideoPlayer } from './VideoPlayer';

interface VideoReelCarouselProps {
  videos: VideoLesson[];
  initialVideoIndex?: number;
}

export const VideoReelCarousel = ({ videos, initialVideoIndex = 0 }: VideoReelCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialVideoIndex);

  // Empty state
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center p-4">
        <p className="text-[#FFC900] text-xl">No videos available in this category</p>
      </div>
    );
  }

  return (
    <Carousel
      className="w-full"
      orientation="vertical"
      opts={{
        align: "start",
        loop: false,
      }}
      setApi={(api) => {
        api?.on('select', () => {
          setCurrentIndex(api.selectedScrollSnap());
        });
      }}
    >
      <CarouselContent className="-mt-1 h-[calc(100vh-120px)]">
        {videos.map((video, index) => (
          <CarouselItem key={video.id} className="pt-1 h-full">
            <div className="relative h-full flex flex-col">
              {/* Video player */}
              <div className="relative flex-grow w-full">
                <VideoPlayer
                  videoId={video.id}
                  videoUrl={video.video_url}
                  title={video.title}
                />
              </div>
              
              {/* Info overlay */}
              <div className="bg-[#22251e]/90 p-4 w-full">
                <h3 className="text-[#FFC900] font-semibold text-lg mb-1">{video.title}</h3>
                <p className="text-[#FFC900]/70 text-sm line-clamp-2">{video.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-[#FFC900]/60">{video.duration}</span>
                  <span className="text-xs text-[#FFC900]/60">
                    {index + 1} of {videos.length}
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
