
import { useEffect, useCallback } from 'react';

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
  
  useEffect(() => {
    if (!playerReady || !playerRef.current) return;

    const attemptPlayerAction = (action: () => void) => {
      try {
        if (document.body.contains(playerRef.current.getIframe())) {
          action();
        }
      } catch (error) {
        console.error('Error controlling YouTube player:', error);
      }
    };

    if (playing) {
      // Add delay to ensure YouTube API is ready
      setTimeout(() => {
        attemptPlayerAction(() => {
          if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
            playerRef.current.playVideo();
            
            if (typeof playerRef.current.unMute === 'function') {
              playerRef.current.unMute();
              playerRef.current.setVolume(100);
            }
          }
        });
      }, 100);
    } else if (!playing && playerRef.current) {
      attemptPlayerAction(() => {
        if (typeof playerRef.current.pauseVideo === 'function') {
          playerRef.current.pauseVideo();
        }
      });
    }
  }, [playing, playerReady]);

  return {
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
