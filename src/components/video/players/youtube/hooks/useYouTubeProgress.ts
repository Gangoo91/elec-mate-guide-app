
import { useRef, useCallback, useEffect } from 'react';

interface UseYouTubeProgressProps {
  onProgress: (currentTime: number, duration: number) => void;
  playerRef: React.MutableRefObject<any>;
}

export const useYouTubeProgress = ({ onProgress, playerRef }: UseYouTubeProgressProps) => {
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const mountedRef = useRef(true);

  // Track component mount state to prevent updates after unmount
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

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
      if (!mountedRef.current) {
        clearProgressInterval();
        return;
      }
      
      if (!playerRef.current) return;
      
      try {
        if (typeof playerRef.current.getCurrentTime === 'function' && 
            typeof playerRef.current.getDuration === 'function') {
          
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

  // Ensure cleanup on unmount
  useEffect(() => {
    return () => {
      clearProgressInterval();
    };
  }, [clearProgressInterval]);

  return {
    startProgressInterval,
    clearProgressInterval
  };
};
