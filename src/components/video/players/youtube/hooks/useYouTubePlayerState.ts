
import { useEffect, useState, useCallback } from 'react';

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

    try {
      if (playing && typeof playerRef.current.playVideo === 'function') {
        playerRef.current.playVideo();
        
        if (typeof playerRef.current.unMute === 'function') {
          playerRef.current.unMute();
        }
      } else if (!playing && typeof playerRef.current.pauseVideo === 'function') {
        playerRef.current.pauseVideo();
      }
    } catch (error) {
      console.error('Error controlling YouTube player:', error);
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
