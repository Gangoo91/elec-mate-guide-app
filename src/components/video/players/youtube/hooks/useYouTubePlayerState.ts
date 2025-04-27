
import { useEffect, useCallback, useState, useRef } from 'react';

interface UseYouTubePlayerStateProps {
  playerRef: React.MutableRefObject<any>;
  playing: boolean;
  playerReady: boolean;
}

export const useYouTubePlayerState = ({ 
  playerRef, 
  playing, 
  playerReady 
}: UseYouTubePlayerStateProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const attemptCountRef = useRef(0);
  const mountedRef = useRef(true);
  const playTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track component mount state
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
        playTimeoutRef.current = null;
      }
    };
  }, []);
  
  useEffect(() => {
    if (!playerReady || !playerRef.current) return;
    
    // Mark as loaded once player is ready
    if (!isLoaded) {
      setIsLoaded(true);
    }

    const attemptPlayerAction = (action: () => void) => {
      try {
        if (!playerRef.current) return;
        
        // Check if player exists and its iframe is in the DOM
        const iframe = playerRef.current.getIframe?.();
        if (iframe && document.body.contains(iframe)) {
          action();
          attemptCountRef.current = 0; // Reset the counter on success
        } else {
          // Log error only if we're not exceeding retry limit
          if (attemptCountRef.current < 3) {
            console.log('Player iframe not attached to DOM, retrying...');
            attemptCountRef.current++;
          }
        }
      } catch (error) {
        console.error('Error controlling YouTube player:', error);
      }
    };

    // Use a more reliable approach for play/pause
    if (playing) {
      // Clear any existing timeout
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
      }
      
      // Use increasing delays for retry attempts
      const delay = Math.min(300 + (attemptCountRef.current * 100), 800);
      
      playTimeoutRef.current = setTimeout(() => {
        if (!mountedRef.current) return;
        
        attemptPlayerAction(() => {
          if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
            playerRef.current.playVideo();
            
            if (typeof playerRef.current.unMute === 'function') {
              playerRef.current.unMute();
              playerRef.current.setVolume(100);
            }
          }
        });
      }, delay);
      
      return () => {
        if (playTimeoutRef.current) {
          clearTimeout(playTimeoutRef.current);
          playTimeoutRef.current = null;
        }
      };
    } else if (!playing && playerRef.current) {
      attemptPlayerAction(() => {
        if (typeof playerRef.current.pauseVideo === 'function') {
          playerRef.current.pauseVideo();
        }
      });
    }
  }, [playing, playerReady, isLoaded, playerRef]);

  return {
    isLoaded,
    cleanupPlayer: useCallback(() => {
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
        playTimeoutRef.current = null;
      }
      
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (err) {
          console.error('Error destroying player:', err);
        }
      }
    }, [playerRef])
  };
};
