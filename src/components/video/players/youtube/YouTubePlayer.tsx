
import React, { useCallback, useState, useEffect } from 'react';
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
  const videoId = extractVideoId(videoUrl);
  const [playerReady, setPlayerReady] = useState(false);
  const [playerAttempts, setPlayerAttempts] = useState(0);
  
  // Handle player errors locally first
  const handleError = useCallback(() => {
    console.log(`YouTube player error for video: ${title}`);
    
    // Try to reinitialize player up to 2 times before showing an error
    if (playerAttempts < 2) {
      setPlayerAttempts(prev => prev + 1);
      return;
    }
    
    setHasError(true);
    onError();
  }, [title, playerAttempts, onError]);
  
  const handlePlayerReady = useCallback(() => {
    console.log(`YouTube player ready for video: ${title}`);
    setPlayerReady(true);
  }, [title]);
  
  // Initialize the player - Using useYouTubePlayer regardless of videoId/error state
  // We'll handle the conditional logic inside the hook
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
  useEffect(() => {
    if (!videoId && !hasError) {
      handleError();
    }
    
    // Reset state when video URL changes
    return () => {
      setPlayerReady(false);
      setHasError(false);
      setPlayerAttempts(0);
    };
  }, [videoId, hasError, handleError]);
  
  // Reinitialize player on attempt change
  useEffect(() => {
    if (playerAttempts > 0) {
      // Short delay before retrying
      const timer = setTimeout(() => {
        if (!playerReady && !hasError && videoId) {
          console.log(`Retrying YouTube player for ${title}, attempt ${playerAttempts}`);
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [playerAttempts, playerReady, hasError, videoId, title]);

  return (
    <AspectRatio ratio={16 / 9} className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className={`w-full h-full bg-black ${!playerReady ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
        title={title}
        aria-label={title}
        data-video-id={videoId || ''}
      />
    </AspectRatio>
  );
};
