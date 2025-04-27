
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
}

export const useYouTubeInitialization = ({
  videoId,
  playerElementId,
  onError,
  onPlayerReady,
  onPlayerStateChange,
  onPlayerError,
  playing = false,
  startAt = 0
}: UseYouTubeInitializationProps) => {
  const playerRef = useRef<any>(null);
  const playerInitializedRef = useRef(false);
  const errorRetryCountRef = useRef(0);
  const apiLoadedRef = useRef(false);

  const initPlayer = useCallback(() => {
    if (!videoId || playerInitializedRef.current || !document.getElementById(playerElementId)) {
      return;
    }

    if (apiLoadedRef.current && window.YT && window.YT.Player) {
      try {
        // Clean up any previous instance
        if (playerRef.current && typeof playerRef.current.destroy === 'function') {
          playerRef.current.destroy();
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
      } catch (error) {
        console.error('Error initializing YouTube player:', error);
        onError();
      }
      return;
    }
    
    loadYouTubeAPI().then(() => {
      apiLoadedRef.current = true;
      if (!window.YT || !window.YT.Player) {
        console.error('YouTube API not available');
        onError();
        return;
      }

      // Small delay to ensure the API is fully initialized
      setTimeout(() => {
        try {
          if (!document.getElementById(playerElementId)) {
            console.error('Player element not found:', playerElementId);
            return;
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
        } catch (error) {
          console.error('Error initializing YouTube player:', error);
          onError();
        }
      }, 200);
    }).catch(err => {
      console.error('Failed to load YouTube API:', err);
      onError();
    });
  }, [videoId, playerElementId, playing, startAt, onPlayerReady, onPlayerStateChange, onPlayerError, onError]);

  useEffect(() => {
    // Reset state when videoId changes
    if (videoId) {
      playerInitializedRef.current = false;
    }
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
  }, [videoId]);

  return {
    playerRef,
    initPlayer,
    errorRetryCountRef
  };
};
