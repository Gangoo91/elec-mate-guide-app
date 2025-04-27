
import React, { useCallback, useState, useEffect } from 'react';
import { useYouTubePlayer } from './useYouTubePlayer';
import { extractVideoId } from './youtubeApi';
import LoadingSpinner from '@/components/LoadingSpinner';
import { ScrollArea } from '@/components/ui/scroll-area';

interface YouTubePlayerProps {
  videoUrl: string;
  title: string;
  onError: () => void;
  onProgress: (currentTime: number, duration: number) => void;
  onPlayStateChange: (isPlaying: boolean) => void;
  startAt?: number;
  playing?: boolean;
  muted?: boolean;
}

export const YouTubePlayer = ({
  videoUrl,
  title,
  onError,
  onProgress,
  onPlayStateChange,
  startAt = 0,
  playing = false,
  muted = false,
}: YouTubePlayerProps) => {
  const [hasError, setHasError] = useState(false);
  const videoId = extractVideoId(videoUrl);
  const [playerAttempts, setPlayerAttempts] = useState(0);
  const [loadingTimeout, setLoadingTimeout] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingTimeout(true);
    }, 8000);
    
    return () => clearTimeout(timeout);
  }, []);
  
  const handleError = useCallback(() => {
    console.error(`YouTube player error for video: ${title}`);
    
    if (playerAttempts < 3) {
      setPlayerAttempts(prev => prev + 1);
      return;
    }
    
    setHasError(true);
    onError();
  }, [title, playerAttempts, onError]);
  
  const handlePlayerReady = useCallback(() => {
    console.log(`YouTube player ready for video: ${title}`);
  }, [title]);
  
  const { containerRef, playerReady, isLoaded } = useYouTubePlayer({
    videoId: hasError ? null : videoId,
    onError: handleError,
    onProgress,
    onPlayStateChange,
    onPlayerReady: handlePlayerReady,
    startAt,
    playing,
    muted,
  });

  useEffect(() => {
    if (!videoId && !hasError) {
      handleError();
    }
    
    return () => {
      setHasError(false);
      setPlayerAttempts(0);
    };
  }, [videoId, hasError, handleError]);
  
  const showError = loadingTimeout && !playerReady && !isLoaded && !hasError;

  return (
    <ScrollArea className="w-full h-full relative bg-black">
      <div className="w-full h-full relative bg-black overflow-auto">
        <div
          ref={containerRef}
          className={`absolute inset-0 w-full h-full ${!playerReady || !isLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
          title={title}
          aria-label={title}
          data-video-id={videoId || ''}
        />
        {(!playerReady || !isLoaded) && !hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
            <LoadingSpinner size="lg" className="text-[#FFC900]" label="Loading video..." />
            <p className="mt-4 text-white/70">
              {showError ? "Video is taking too long to load. Please try again." : "Loading video..."}
            </p>
          </div>
        )}
        {(hasError || showError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90">
            <div className="text-red-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">Video Loading Error</h3>
            <p className="text-white/70 mb-4 text-center px-4">
              Unable to load this video. Please try refreshing the page or check your connection.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-[#FFC900] text-black px-4 py-2 rounded hover:bg-[#FFC900]/80"
            >
              Refresh Page
            </button>
          </div>
        )}
      </div>
    </ScrollArea>
  );
};
