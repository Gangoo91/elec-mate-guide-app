
import React, { useCallback } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useYouTubePlayer } from './useYouTubePlayer';
import { extractVideoId } from './youtubeApi';

interface YouTubePlayerProps {
  videoUrl: string;
  title: string;
  onError: () => void;
  onProgress: (currentTime: number, duration: number) => void;
  onPlayStateChange: (isPlaying: boolean) => void;
  startAt?: number;
  playing?: boolean;
}

export const YouTubePlayer = ({
  videoUrl,
  title,
  onError,
  onProgress,
  onPlayStateChange,
  startAt = 0,
  playing = false,
}: YouTubePlayerProps) => {
  const videoId = useCallback(() => extractVideoId(videoUrl), [videoUrl])();
  
  // Only initialize the player if we have a valid videoId
  const { containerRef } = useYouTubePlayer({
    videoId,
    onError,
    onProgress,
    onPlayStateChange,
    startAt,
    playing,
  });

  return (
    <AspectRatio ratio={16 / 9} className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-full bg-black"
        title={title}
        aria-label={title}
        data-video-id={videoId || ''}
      />
    </AspectRatio>
  );
};
