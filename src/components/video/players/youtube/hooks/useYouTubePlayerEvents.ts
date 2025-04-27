
import { useCallback } from 'react';

interface UseYouTubePlayerEventsProps {
  onProgress: (currentTime: number, duration: number) => void;
  onPlayStateChange: (isPlaying: boolean) => void;
  startProgressInterval: () => void;
  clearProgressInterval: () => void;
  mountedRef: React.MutableRefObject<boolean>;
}

export const useYouTubePlayerEvents = ({
  onProgress,
  onPlayStateChange,
  startProgressInterval,
  clearProgressInterval,
  mountedRef
}: UseYouTubePlayerEventsProps) => {
  const handlePlayerStateChange = useCallback((event: any) => {
    if (!mountedRef.current || !window.YT) return;
    
    try {
      switch (event.data) {
        case window.YT.PlayerState.ENDED:
          onPlayStateChange(false);
          onProgress(event.target.getDuration(), event.target.getDuration());
          clearProgressInterval();
          break;
        case window.YT.PlayerState.PLAYING:
          onPlayStateChange(true);
          startProgressInterval();
          break;
        case window.YT.PlayerState.PAUSED:
          onPlayStateChange(false);
          clearProgressInterval();
          break;
      }
    } catch (err) {
      console.error('Error handling player state change:', err);
    }
  }, [onPlayStateChange, onProgress, startProgressInterval, clearProgressInterval, mountedRef]);

  return { handlePlayerStateChange };
};
