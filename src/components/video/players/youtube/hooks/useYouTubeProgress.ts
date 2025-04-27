
import { useRef, useCallback } from 'react';

interface UseYouTubeProgressProps {
  onProgress: (currentTime: number, duration: number) => void;
  playerRef: React.MutableRefObject<any>;
}

export const useYouTubeProgress = ({ onProgress, playerRef }: UseYouTubeProgressProps) => {
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearProgressInterval = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  }, []);

  const startProgressInterval = useCallback(() => {
    clearProgressInterval();

    // Use a shorter interval for more responsive progress updates
    progressIntervalRef.current = setInterval(() => {
      if (!playerRef.current) return;
      
      try {
        if (typeof playerRef.current.getCurrentTime === 'function') {
          const currentTime = playerRef.current.getCurrentTime();
          const duration = playerRef.current.getDuration();
          
          if (!isNaN(currentTime) && !isNaN(duration) && duration > 0) {
            onProgress(currentTime, duration);
          }
        }
      } catch (e) {
        console.error('Error getting player time:', e);
      }
    }, 500);  // Every half second is enough for smooth progress
  }, [onProgress, clearProgressInterval, playerRef]);

  return {
    startProgressInterval,
    clearProgressInterval
  };
};
