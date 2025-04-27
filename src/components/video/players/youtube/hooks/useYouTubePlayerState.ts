
import { useEffect, useCallback, useState } from 'react';

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
  
  useEffect(() => {
    if (!playerReady || !playerRef.current) return;
    
    // Mark as loaded once player is ready
    if (!isLoaded) {
      setIsLoaded(true);
    }

    const attemptPlayerAction = (action: () => void) => {
      try {
        if (playerRef.current && 
            typeof playerRef.current.getIframe === 'function' && 
            document.body.contains(playerRef.current.getIframe())) {
          action();
        } else {
          console.error('Player not ready or not attached to DOM');
        }
      } catch (error) {
        console.error('Error controlling YouTube player:', error);
      }
    };

    // Use a more reliable approach for play/pause
    if (playing) {
      // Gradually increasing delay to help with initialization timing
      const timer = setTimeout(() => {
        attemptPlayerAction(() => {
          if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
            playerRef.current.playVideo();
            
            if (typeof playerRef.current.unMute === 'function') {
              playerRef.current.unMute();
              playerRef.current.setVolume(100);
            }
          }
        });
      }, 200);
      
      return () => clearTimeout(timer);
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
