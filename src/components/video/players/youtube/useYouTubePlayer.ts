
import { useRef, useState, useCallback, useEffect } from 'react';
import { useYouTubeInitialization } from './hooks/useYouTubeInitialization';
import { useYouTubePlayerState } from './hooks/useYouTubePlayerState';
import { useYouTubeProgress } from './hooks/useYouTubeProgress';

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
  const [playerReady, setPlayerReady] = useState(false);
  const [playerElementId] = useState(`youtube-player-${Math.random().toString(36).substr(2, 9)}`);
  const playerRef = useRef<any>(null);
  const [containerCreated, setContainerCreated] = useState(false);

  // Define progress functions
  const { startProgressInterval, clearProgressInterval } = useYouTubeProgress({
    onProgress,
    playerRef
  });

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

  const handlePlayerReady = useCallback((event: any) => {
    console.log("YouTube player ready event received");
    setPlayerReady(true);
    
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
    
    // Delay play command to ensure player is fully ready
    if (playing) {
      setTimeout(() => {
        try {
          if (event.target && typeof event.target.playVideo === 'function') {
            event.target.playVideo();
          }
        } catch (err) {
          console.error('Error playing video after ready:', err);
        }
      }, 200);
    }
    
    if (onPlayerReady) {
      onPlayerReady();
    }
  }, [startAt, onPlayerReady, playing]);

  // Initialize the player with the handlePlayerStateChange function
  const { initPlayer, errorRetryCountRef } = useYouTubeInitialization({
    videoId,
    playerElementId,
    onError,
    onPlayerReady: handlePlayerReady,
    onPlayerStateChange: handlePlayerStateChange,
    onPlayerError: onError,
    playing,
    startAt,
    playerRef
  });

  // Create player element if it doesn't exist
  useEffect(() => {
    if (!containerRef.current || !videoId) return;

    const createPlayerElement = () => {
      if (!containerRef.current) return;
      
      // Clear container first
      while (containerRef.current && containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
  
      // Create fresh player div
      const playerDiv = document.createElement('div');
      playerDiv.id = playerElementId;
      playerDiv.style.position = 'absolute';
      playerDiv.style.top = '0';
      playerDiv.style.left = '0';
      playerDiv.style.width = '100%';
      playerDiv.style.height = '100%';
      containerRef.current.appendChild(playerDiv);
      setContainerCreated(true);
    };

    createPlayerElement();
    
    // Small timeout to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      if (containerCreated) {
        initPlayer();
      }
    }, 100);
    
    return () => clearTimeout(initTimeout);
  }, [videoId, playerElementId, initPlayer, containerCreated]);

  const { isLoaded, cleanupPlayer } = useYouTubePlayerState({
    playerRef,
    playing,
    playerReady
  });

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearProgressInterval();
      cleanupPlayer();
    };
  }, [clearProgressInterval, cleanupPlayer]);

  return { 
    containerRef, 
    playerReady,
    isLoaded 
  };
};
