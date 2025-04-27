
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
  const mountedRef = useRef(true);

  // Track if component is mounted to prevent state updates after unmount
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const initPlayer = useCallback(() => {
    if (!videoId || playerInitializedRef.current || !mountedRef.current) {
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
          return false;
        }
        
        if (!window.YT || !window.YT.Player) {
          console.error('YouTube API not fully loaded');
          return false;
        }
        
        // Ensure DOM content is stable before creating player
        if (!document.body.contains(playerElement)) {
          console.error('Player element not in DOM');
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

    // If API already loaded, initialize player after a delay
    if (apiLoadedRef.current && window.YT && window.YT.Player) {
      // Delay player creation to ensure DOM is stable
      setTimeout(() => {
        if (!mountedRef.current) return;
        
        if (!createYoutubePlayer()) {
          // If player creation failed, retry once more after a longer delay
          setTimeout(() => {
            if (!mountedRef.current) return;
            createYoutubePlayer();
          }, 800);
        }
      }, 300);
      return;
    }
    
    // Load API if not already loaded
    loadYouTubeAPI().then(() => {
      if (!mountedRef.current) return;
      
      apiLoadedRef.current = true;
      if (!window.YT || !window.YT.Player) {
        // Wait a bit longer for API to be fully ready
        setTimeout(() => {
          if (!mountedRef.current) return;
          
          if (!window.YT || !window.YT.Player) {
            console.error('YouTube API still not available after delay');
            onError();
            return;
          }
          setTimeout(createYoutubePlayer, 500);
        }, 800);
        return;
      }

      // Give time for API to be fully initialized
      setTimeout(() => {
        if (!mountedRef.current) return;
        createYoutubePlayer();
      }, 500);
    }).catch(err => {
      if (!mountedRef.current) return;
      
      console.error('Failed to load YouTube API:', err);
      onError();
    });
  }, [videoId, playerElementId, playing, startAt, onPlayerReady, onPlayerStateChange, onPlayerError, onError, playerRef]);

  useEffect(() => {
    // Reset state when videoId changes
    if (videoId !== null) {
      playerInitializedRef.current = false;
      errorRetryCountRef.current = 0;
      // Initialize with a delay to ensure clean DOM updates
      const timer = setTimeout(initPlayer, 300);
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
