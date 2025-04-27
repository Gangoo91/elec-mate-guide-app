
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
        if (playerRef.current && document.body.contains(playerRef.current.getIframe?.())) {
          action();
        }
      } catch (error) {
        console.error('Error controlling YouTube player:', error);
      }
    };

    if (playing) {
      // Smaller delay to ensure YouTube API is ready but not too long
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
      }, 50);
      
      return () => clearTimeout(timer);
    } else if (!playing && playerRef.current) {
      attemptPlayerAction(() => {
        if (typeof playerRef.current.pauseVideo === 'function') {
          playerRef.current.pauseVideo();
        }
      });
    }
  }, [playing, playerReady, isLoaded]);

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
    }, [])
  };
};
