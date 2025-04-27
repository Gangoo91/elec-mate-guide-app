
import { useEffect, useRef, useCallback } from 'react';
import { loadYouTubeAPI } from '../youtubeApi';

interface UseYouTubeInitializationProps {
  videoId: string | null;
  playerElementId: string;
  onError: () => void;
  onPlayerReady: (event: any) => void;
  onPlayerStateChange: (event: any) => void;
  onPlayerError: (event: any) => void;
  playing?: boolean;
  startAt?: number;
  playerRef: React.MutableRefObject<any>;
}

export const useYouTubeInitialization = ({
  videoId,
  playerElementId,
  onError,
  onPlayerReady,
  onPlayerStateChange,
  onPlayerError,
  playing = false,
  startAt = 0,
  playerRef
}: UseYouTubeInitializationProps) => {
  const playerInitializedRef = useRef(false);
  const errorRetryCountRef = useRef(0);
  const apiLoadedRef = useRef(false);

  const initPlayer = useCallback(() => {
    if (!videoId || playerInitializedRef.current) {
      return;
    }

    const createYoutubePlayer = () => {
      try {
        // Clean up any previous instance
        if (playerRef.current && typeof playerRef.current.destroy === 'function') {
          try {
            playerRef.current.destroy();
            playerRef.current = null;
          } catch (err) {
            console.error('Error destroying old player instance:', err);
          }
        }
        
        const playerElement = document.getElementById(playerElementId);
        if (!playerElement) {
          console.error('Player element not found before initialization:', playerElementId);
          // Don't throw error yet, wait for next attempt
          return false;
        }
        
        if (!window.YT || !window.YT.Player) {
          console.error('YouTube API not fully loaded');
          return false;
        }
        
        playerRef.current = new window.YT.Player(playerElementId, {
          videoId: videoId,
          playerVars: {
            autoplay: playing ? 1 : 0,
            controls: 0,
            enablejsapi: 1,
            origin: window.location.origin,
            rel: 0,
            start: Math.floor(startAt),
            playsinline: 1,
            modestbranding: 1,
            iv_load_policy: 3,
            fs: 0,
            mute: 0
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
            onError: onPlayerError
          }
        });
        
        playerInitializedRef.current = true;
        return true;
      } catch (error) {
        console.error('Error initializing YouTube player:', error);
        errorRetryCountRef.current += 1;
        
        if (errorRetryCountRef.current >= 3) {
          onError();
        }
        return false;
      }
    };

    if (apiLoadedRef.current && window.YT && window.YT.Player) {
      // Add a small delay to ensure DOM is ready
      setTimeout(() => {
        if (!createYoutubePlayer()) {
          // If player creation failed, retry once more after a short delay
          setTimeout(createYoutubePlayer, 500);
        }
      }, 100);
      return;
    }
    
    loadYouTubeAPI().then(() => {
      apiLoadedRef.current = true;
      if (!window.YT || !window.YT.Player) {
        // Wait a bit longer for API to be fully ready
        setTimeout(() => {
          if (!window.YT || !window.YT.Player) {
            console.error('YouTube API still not available after delay');
            onError();
            return;
          }
          setTimeout(createYoutubePlayer, 200);
        }, 500);
        return;
      }

      // Give a little more time for API to be fully initialized
      setTimeout(createYoutubePlayer, 200);
    }).catch(err => {
      console.error('Failed to load YouTube API:', err);
      onError();
    });
  }, [videoId, playerElementId, playing, startAt, onPlayerReady, onPlayerStateChange, onPlayerError, onError, playerRef]);

  useEffect(() => {
    // Reset state when videoId changes
    if (videoId !== null) {
      playerInitializedRef.current = false;
      errorRetryCountRef.current = 0;
      // Initialize with a slight delay to ensure clean DOM updates
      const timer = setTimeout(initPlayer, 100);
      return () => clearTimeout(timer);
    }
    
    // Cleanup function
    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
          playerInitializedRef.current = false;
        } catch (err) {
          console.error('Error destroying player on cleanup:', err);
        }
      }
    };
  }, [videoId, playerRef, initPlayer]);

  return {
    initPlayer,
    errorRetryCountRef
  };
};
