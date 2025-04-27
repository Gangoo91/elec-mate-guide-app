
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

    progressIntervalRef.current = setInterval(() => {
      if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
        try {
          const currentTime = playerRef.current.getCurrentTime();
          const duration = playerRef.current.getDuration();
          
          if (!isNaN(currentTime) && !isNaN(duration)) {
            onProgress(currentTime, duration);
          }
        } catch (e) {
          console.error('Error getting player time:', e);
        }
      }
    }, 1000);
  }, [onProgress, clearProgressInterval, playerRef]);

  return {
    startProgressInterval,
    clearProgressInterval
  };
};
