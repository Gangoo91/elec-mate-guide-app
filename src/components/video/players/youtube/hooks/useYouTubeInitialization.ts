
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
  const apiLoadingPromiseRef = useRef<Promise<void> | null>(null);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const loadAPI = useCallback(async () => {
    if (apiLoadedRef.current) return Promise.resolve();
    
    if (!apiLoadingPromiseRef.current) {
      apiLoadingPromiseRef.current = loadYouTubeAPI().then(() => {
        if (mountedRef.current) {
          apiLoadedRef.current = true;
        }
      }).catch(err => {
        console.error('Failed to load YouTube API:', err);
        apiLoadingPromiseRef.current = null;
        throw err;
      });
    }
    
    return apiLoadingPromiseRef.current;
  }, []);

  const createYoutubePlayer = useCallback(() => {
    try {
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
      
      if (!document.body.contains(playerElement)) {
        console.error('Player element not in DOM');
        return false;
      }

      // Use a consistent video ID format for all videos
      // Make sure we're using a valid YouTube video ID format
      const safeVideoId = videoId || 'dQw4w9WgXcQ'; // Fallback to a known working video if ID is missing

      playerRef.current = new window.YT.Player(playerElementId, {
        videoId: safeVideoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          enablejsapi: 1,
          origin: window.location.origin,
          rel: 0,
          start: Math.floor(startAt),
          playsinline: 1,
          modestbranding: 1,
          iv_load_policy: 3,
          fs: 0,
          mute: 1
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
  }, [videoId, playerElementId, startAt, onPlayerReady, onPlayerStateChange, onPlayerError, onError, playerRef]);

  const initPlayer = useCallback(async () => {
    if (!videoId || playerInitializedRef.current || !mountedRef.current) {
      return;
    }

    try {
      await loadAPI();
      
      if (!mountedRef.current) return;
      
      setTimeout(() => {
        if (!mountedRef.current) return;
        
        if (!createYoutubePlayer() && errorRetryCountRef.current < 3) {
          setTimeout(() => {
            if (mountedRef.current && !playerInitializedRef.current) {
              createYoutubePlayer();
            }
          }, 1000);
        }
      }, 300);
    } catch (err) {
      if (mountedRef.current) {
        console.error('YouTube player initialization failed:', err);
        onError();
      }
    }
  }, [videoId, loadAPI, createYoutubePlayer, onError]);

  useEffect(() => {
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
  }, [videoId, playerRef]);

  return {
    initPlayer,
    errorRetryCountRef
  };
};
