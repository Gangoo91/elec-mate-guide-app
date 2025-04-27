
import { useRef, useCallback, useEffect } from 'react';

interface UseYouTubeProgressProps {
  onProgress: (currentTime: number, duration: number) => void;
  playerRef: React.MutableRefObject<any>;
}

export const useYouTubeProgress = ({ onProgress, playerRef }: UseYouTubeProgressProps) => {
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const mountedRef = useRef(true);
  const lastTimeRef = useRef<{currentTime: number, duration: number} | null>(null);

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
          
          // Only send progress updates when the values change significantly
          // or if it's the first update
          if (!isNaN(currentTime) && !isNaN(duration) && duration > 0) {
            const shouldUpdate = !lastTimeRef.current || 
              Math.abs(lastTimeRef.current.currentTime - currentTime) > 0.5 ||
              Math.abs(lastTimeRef.current.duration - duration) > 0.5;
              
            if (shouldUpdate) {
              lastTimeRef.current = { currentTime, duration };
              onProgress(currentTime, duration);
            }
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
