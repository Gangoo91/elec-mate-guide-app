
import { useCallback, useRef } from 'react';

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
      if (!playerRef.current) return;
      
      try {
        const currentTime = playerRef.current.getCurrentTime();
        const duration = playerRef.current.getDuration();
        
        if (currentTime && duration) {
          onProgress(currentTime, duration);
        }
      } catch (err) {
        console.error('Error getting video progress:', err);
      }
    }, 1000);
  }, [onProgress, playerRef, clearProgressInterval]);

  return {
    startProgressInterval,
    clearProgressInterval,
  };
};
