
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
  const mountedRef = useRef(true);
  const playerCreationAttemptedRef = useRef(false);
  const [playerInitialized, setPlayerInitialized] = useState(false);

  // Track component mount state
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Define progress functions
  const { startProgressInterval, clearProgressInterval } = useYouTubeProgress({
    onProgress,
    playerRef
  });

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
  }, [onPlayStateChange, onProgress, startProgressInterval, clearProgressInterval]);

  const handlePlayerReady = useCallback((event: any) => {
    if (!mountedRef.current) return;
    
    console.log("YouTube player ready event received");
    
    try {
      // Make sure the player is properly initialized before proceeding
      if (event.target && typeof event.target.getIframe === 'function') {
        const iframe = event.target.getIframe();
        if (iframe && document.body.contains(iframe)) {
          setPlayerReady(true);
          setPlayerInitialized(true);
          
          // Configure player
          if (typeof event.target.unMute === 'function') {
            event.target.unMute();
            event.target.setVolume(100);
          }
          
          // Seek to starting position if needed
          if (startAt > 0 && typeof event.target.seekTo === 'function') {
            event.target.seekTo(startAt);
          }
          
          // Notify parent component
          if (onPlayerReady) {
            onPlayerReady();
          }
          
          // Handle play state
          if (playing && typeof event.target.playVideo === 'function') {
            // Small delay to ensure the player is fully ready
            setTimeout(() => {
              if (mountedRef.current && typeof event.target.playVideo === 'function') {
                event.target.playVideo();
              }
            }, 100);
          }
        } else {
          console.log("Player iframe not in DOM yet");
        }
      } else {
        console.log("Player not fully initialized");
      }
    } catch (err) {
      console.error('Error in player ready handler:', err);
    }
  }, [startAt, onPlayerReady, playing]);

  // Initialize the player with the handlePlayerStateChange function
  const { initPlayer } = useYouTubeInitialization({
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
    if (!containerRef.current || !videoId || playerCreationAttemptedRef.current) return;

    playerCreationAttemptedRef.current = true;
    
    const createPlayerElement = () => {
      if (!containerRef.current || !mountedRef.current) return;
      
      // Clear container first
      while (containerRef.current.firstChild) {
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
    
    return () => {
      playerCreationAttemptedRef.current = false;
    };
  }, [videoId, playerElementId]);

  // Initialize player after DOM is updated
  useEffect(() => {
    if (!containerCreated || !videoId || playerInitialized) return;
    
    const timer = setTimeout(() => {
      if (mountedRef.current) {
        initPlayer();
      }
    }, 300);
    
    return () => {
      clearTimeout(timer);
    };
  }, [containerCreated, videoId, initPlayer, playerInitialized]);

  const { isLoaded, cleanupPlayer } = useYouTubePlayerState({
    playerRef,
    playing,
    playerReady
  });

  // Update player state when play prop changes
  useEffect(() => {
    if (!playerReady || !playerRef.current) return;
    
    if (playing && typeof playerRef.current.playVideo === 'function') {
      try {
        playerRef.current.playVideo();
      } catch (err) {
        console.error('Error playing video:', err);
      }
    } else if (!playing && typeof playerRef.current.pauseVideo === 'function') {
      try {
        playerRef.current.pauseVideo();
      } catch (err) {
        console.error('Error pausing video:', err);
      }
    }
  }, [playing, playerReady]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (!mountedRef.current) return;
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
