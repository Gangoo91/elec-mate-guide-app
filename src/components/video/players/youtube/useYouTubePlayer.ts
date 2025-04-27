
import { useRef, useState, useCallback, useEffect } from 'react';
import { useYouTubeInitialization } from './hooks/useYouTubeInitialization';
import { useYouTubePlayerState } from './hooks/useYouTubePlayerState';

interface UseYouTubePlayerProps {
  videoId: string | null;
  onError: () => void;
  onProgress: (currentTime: number, duration: number) => void;
  onPlayStateChange: (isPlaying: boolean) => void;
  onPlayerReady?: () => void;
  startAt?: number;
  playing?: boolean;
}

export const useYouTubePlayer = ({
  videoId,
  onError,
  onProgress,
  onPlayStateChange,
  onPlayerReady,
  startAt = 0,
  playing = false
}: UseYouTubePlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [playerElementId] = useState(`youtube-player-${Math.random().toString(36).substr(2, 9)}`);
  const lastVideoIdRef = useRef<string | null>(null);

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
          clearProgressInterval();
        }
      }
    }, 1000);
  }, [onProgress, clearProgressInterval]);

  const handlePlayerReady = useCallback((event: any) => {
    setPlayerReady(true);
    errorRetryCountRef.current = 0;
    
    try {
      if (event.target && typeof event.target.unMute === 'function') {
        event.target.unMute();
        event.target.setVolume(100);
      }
    } catch (err) {
      console.error('Error setting volume:', err);
    }
    
    if (startAt > 0) {
      try {
        event.target.seekTo(startAt);
      } catch (err) {
        console.error('Error seeking to position:', err);
      }
    }
    
    if (playing) {
      try {
        event.target.playVideo();
      } catch (err) {
        console.error('Error playing video:', err);
      }
    }
    
    if (onPlayerReady) {
      onPlayerReady();
    }
  }, [startAt, playing, onPlayerReady]);

  const handlePlayerStateChange = useCallback((event: any) => {
    if (!window.YT) return;
    
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
  }, [onPlayStateChange, onProgress, startProgressInterval, clearProgressInterval]);

  const handlePlayerError = useCallback((event: any) => {
    console.error('YouTube player error:', event);
    
    if (errorRetryCountRef.current < 2) {
      errorRetryCountRef.current++;
      console.log(`Retrying YouTube player initialization (attempt ${errorRetryCountRef.current})`);
      
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (err) {
          console.error('Error destroying player:', err);
        }
      }
      
      setTimeout(() => {
        initPlayer();
      }, 1500);
    } else {
      onError();
      clearProgressInterval();
    }
  }, [onError, clearProgressInterval]);

  const { playerRef, initPlayer, errorRetryCountRef } = useYouTubeInitialization({
    videoId,
    playerElementId,
    onError,
    onPlayerReady: handlePlayerReady,
    onPlayerStateChange: handlePlayerStateChange,
    onPlayerError: handlePlayerError,
    playing,
    startAt
  });

  const { cleanupPlayer } = useYouTubePlayerState({
    playerRef,
    playing,
    playerReady
  });

  // Create player element if it doesn't exist
  useEffect(() => {
    if (!containerRef.current || !videoId) return;

    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    const playerDiv = document.createElement('div');
    playerDiv.id = playerElementId;
    containerRef.current.appendChild(playerDiv);
  }, [videoId, playerElementId]);

  // Initialize player when video changes
  useEffect(() => {
    if (!videoId) {
      return;
    }
    
    if (videoId !== lastVideoIdRef.current) {
      lastVideoIdRef.current = videoId;
      setPlayerReady(false);
      errorRetryCountRef.current = 0;
    }
    
    const initTimeout = setTimeout(() => {
      initPlayer();
    }, 100);
    
    return () => {
      clearTimeout(initTimeout);
      clearProgressInterval();
    };
  }, [videoId, initPlayer, clearProgressInterval, errorRetryCountRef]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearProgressInterval();
      cleanupPlayer();
    };
  }, [clearProgressInterval, cleanupPlayer]);

  return { containerRef, playerReady };
};
