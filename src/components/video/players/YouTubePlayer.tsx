
import React, { useRef, useEffect, useState } from 'react';

// Define YouTube API types
declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        options: {
          videoId?: string;
          width?: string | number;
          height?: string | number;
          playerVars?: {
            autoplay?: 0 | 1;
            controls?: 0 | 1;
            enablejsapi?: 0 | 1;
            origin?: string;
            rel?: 0 | 1;
            start?: number;
          };
          events: {
            onStateChange: (event: any) => void;
            onError: (event: any) => void;
            onReady: (event: any) => void;
          }
        }
      ) => {
        getCurrentTime: () => number;
        getDuration: () => number;
        playVideo: () => void;
        pauseVideo: () => void;
        getPlayerState: () => number;
        seekTo: (seconds: number) => void;
        destroy: () => void;
      };
      PlayerState: {
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
    onYouTubeIframeAPIReady: (() => void) | null;
  }
}

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
  playing = false
}: YouTubePlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [playerReady, setPlayerReady] = useState(false);

  const extractVideoId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(videoUrl);

  useEffect(() => {
    // Load YouTube API script
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        
        // Make sure we're not adding it multiple times
        if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
          const firstScriptTag = document.getElementsByTagName('script')[0];
          if (firstScriptTag && firstScriptTag.parentNode) {
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          }
        }
      }
    };

    loadYouTubeAPI();

    // Cleanup function to destroy player and clear interval
    return () => {
      clearProgressInterval();
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
      }
    };
  }, []);

  const startProgressInterval = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    progressIntervalRef.current = setInterval(() => {
      if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
        try {
          const currentTime = playerRef.current.getCurrentTime();
          const duration = playerRef.current.getDuration();
          onProgress(currentTime, duration);
        } catch (e) {
          console.error('Error getting player time:', e);
          clearProgressInterval();
        }
      }
    }, 1000);
  };

  const clearProgressInterval = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  useEffect(() => {
    // Initialize player when videoId changes or script loads
    if (!videoId) {
      console.error('Invalid YouTube URL:', videoUrl);
      onError();
      return;
    }

    const initPlayer = () => {
      // Only initialize if container exists and YT API is ready
      if (!containerRef.current || !window.YT || !window.YT.Player) {
        return;
      }

      // Clear previous player
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
      }

      // Create new player
      try {
        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId: videoId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            enablejsapi: 1,
            origin: window.location.origin,
            rel: 0,
            start: Math.floor(startAt)
          },
          events: {
            onReady: (event: any) => {
              setPlayerReady(true);
              if (startAt > 0) {
                event.target.seekTo(startAt);
              }
              if (playing) {
                event.target.playVideo();
              }
            },
            onStateChange: (event: any) => {
              if (!window.YT) return;
              
              switch (event.data) {
                case window.YT.PlayerState.ENDED:
                  onPlayStateChange(false);
                  onProgress(event.target.getDuration(), event.target.getDuration());
                  clearProgressInterval();
                  break;
                case window.YT.PlayerState.PLAYING:
                  onPlayStateChange(true);
                  startProgressInterval();
                  break;
                case window.YT.PlayerState.PAUSED:
                  onPlayStateChange(false);
                  clearProgressInterval();
                  break;
              }
            },
            onError: (event: any) => {
              console.error('YouTube player error:', event);
              onError();
              clearProgressInterval();
            }
          }
        });
      } catch (error) {
        console.error('Error initializing YouTube player:', error);
        onError();
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (window.onYouTubeIframeAPIReady === initPlayer) {
        window.onYouTubeIframeAPIReady = null;
      }
    };
  }, [videoId, videoUrl, onError, startAt]);

  // Control playing/paused state
  useEffect(() => {
    if (!playerReady || !playerRef.current) return;

    try {
      if (playing) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    } catch (error) {
      console.error('Error controlling YouTube player:', error);
    }
  }, [playing, playerReady]);

  return (
    <div className="w-full h-full bg-black">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};
