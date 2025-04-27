
import React, { useCallback, useState } from 'react';
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
  const [hasError, setHasError] = useState(false);
  const videoId = useCallback(() => extractVideoId(videoUrl), [videoUrl])();
  const [playerReady, setPlayerReady] = useState(false);
  
  // Handle player errors locally first
  const handleError = () => {
    console.log(`YouTube player error for video: ${title}`);
    setHasError(true);
    onError();
  };
  
  const handlePlayerReady = useCallback(() => {
    setPlayerReady(true);
  }, []);
  
  // Only initialize the player if we have a valid videoId and no errors yet
  const { containerRef } = useYouTubePlayer({
    videoId: hasError ? null : videoId,
    onError: handleError,
    onProgress,
    onPlayStateChange,
    onPlayerReady: handlePlayerReady,
    startAt,
    playing,
  });

  // If videoId is invalid, trigger error immediately
  React.useEffect(() => {
    if (!videoId && !hasError) {
      handleError();
    }
  }, [videoId, hasError]);

  return (
    <AspectRatio ratio={16 / 9} className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className={`w-full h-full bg-black ${!playerReady ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
        title={title}
        aria-label={title}
        data-video-id={videoId || ''}
      />
    </AspectRatio>
  );
};
