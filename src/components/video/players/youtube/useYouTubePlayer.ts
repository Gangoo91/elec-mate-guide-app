
import { useRef, useState, useEffect, useCallback } from 'react';
import { loadYouTubeAPI, isValidYouTubeId } from './youtubeApi';

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
  const playerRef = useRef<any>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [playerElementId] = useState(`youtube-player-${Math.random().toString(36).substr(2, 9)}`);
  const playerInitializedRef = useRef(false);
  const errorRetryCountRef = useRef(0);
  const lastVideoIdRef = useRef<string | null>(null);

  // Define all callbacks outside of useEffect to prevent them from being recreated
  const startProgressInterval = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

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
  }, [onProgress]);

  const clearProgressInterval = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  }, []);

  // Validate video ID
  useEffect(() => {
    if (videoId && !isValidYouTubeId(videoId)) {
      console.error('Invalid YouTube video ID:', videoId);
      onError();
    }
  }, [videoId, onError]);

  // Handle YouTube events
  const handlePlayerReady = useCallback((event: any) => {
    setPlayerReady(true);
    errorRetryCountRef.current = 0; // Reset error count on successful load
    
    // Make sure video has sound and is not muted
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
    
    // Only retry up to 2 times
    if (errorRetryCountRef.current < 2) {
      errorRetryCountRef.current++;
      console.log(`Retrying YouTube player initialization (attempt ${errorRetryCountRef.current})`);
      
      // Destroy current player
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
          playerInitializedRef.current = false;
        } catch (err) {
          console.error('Error destroying player:', err);
        }
      }
      
      // Try to reinitialize after a short delay
      setTimeout(() => {
        initPlayer();
      }, 1500);
    } else {
      onError();
      clearProgressInterval();
    }
  }, [onError, clearProgressInterval]);

  // Initialize YouTube player
  const initPlayer = useCallback(() => {
    if (!containerRef.current || !videoId || playerInitializedRef.current) {
      return;
    }

    // Skip re-initialization for same video ID
    if (videoId === lastVideoIdRef.current && playerRef.current) {
      return;
    }
    
    lastVideoIdRef.current = videoId;

    loadYouTubeAPI().then(() => {
      if (!window.YT || !window.YT.Player) {
        console.error('YouTube API not available');
        onError();
        return;
      }

      // Create a player element if it doesn't exist
      if (!document.getElementById(playerElementId) && containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
        
        const playerDiv = document.createElement('div');
        playerDiv.id = playerElementId;
        containerRef.current.appendChild(playerDiv);
      }

      try {
        playerRef.current = new window.YT.Player(playerElementId, {
          videoId: videoId,
          playerVars: {
            autoplay: playing ? 1 : 0,
            controls: 0,
            enablejsapi: 1,
            origin: window.location.origin,
            rel: 0,
            start: Math.floor(startAt),
            // Additional parameters to improve stability and prevent muting
            playsinline: 1,
            modestbranding: 1,
            iv_load_policy: 3, // Hide annotations
            fs: 0, // Disable fullscreen button (we'll handle this ourselves)
            mute: 0 // Ensure video is not muted
          },
          events: {
            onReady: handlePlayerReady,
            onStateChange: handlePlayerStateChange,
            onError: handlePlayerError
          }
        });
        
        playerInitializedRef.current = true;
      } catch (error) {
        console.error('Error initializing YouTube player:', error);
        onError();
      }
    }).catch(err => {
      console.error('Failed to load YouTube API:', err);
      onError();
    });
  }, [videoId, playerElementId, playing, startAt, handlePlayerReady, handlePlayerStateChange, handlePlayerError, onError]);

  // Initialize player when component mounts
  useEffect(() => {
    if (!videoId) {
      return;
    }
    
    // Reset state when videoId changes
    if (videoId !== lastVideoIdRef.current) {
      playerInitializedRef.current = false;
      setPlayerReady(false);
      errorRetryCountRef.current = 0;
    }
    
    // Delay initialization slightly to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      initPlayer();
    }, 100);
    
    return () => {
      clearTimeout(initTimeout);
      clearProgressInterval();
    };
  }, [videoId, initPlayer, clearProgressInterval]);

  // Handle play/pause state changes
  useEffect(() => {
    if (!playerReady || !playerRef.current) return;

    try {
      if (playing && typeof playerRef.current.playVideo === 'function') {
        playerRef.current.playVideo();
        
        // Make sure video is not muted
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

  // Clean up on unmount
  useEffect(() => {
    return () => {
      clearProgressInterval();
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (err) {
          console.error('Error destroying player:', err);
        }
        playerInitializedRef.current = false;
      }
    };
  }, [clearProgressInterval]);

  return { containerRef, playerReady };
};
