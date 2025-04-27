
import { useRef, useState, useEffect, useCallback } from 'react';
import { loadYouTubeAPI } from './youtubeApi';

interface UseYouTubePlayerProps {
  videoId: string | null;
  onError: () => void;
  onProgress: (currentTime: number, duration: number) => void;
  onPlayStateChange: (isPlaying: boolean) => void;
  startAt?: number;
  playing?: boolean;
}

export const useYouTubePlayer = ({
  videoId,
  onError,
  onProgress,
  onPlayStateChange,
  startAt = 0,
  playing = false
}: UseYouTubePlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [playerElementId] = useState(`youtube-player-${Math.random().toString(36).substr(2, 9)}`);
  const playerInitializedRef = useRef(false);

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
          onProgress(currentTime, duration);
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

  // Handle YouTube events
  const handlePlayerReady = useCallback((event: any) => {
    setPlayerReady(true);
    if (startAt > 0) {
      event.target.seekTo(startAt);
    }
    if (playing) {
      event.target.playVideo();
    }
  }, [startAt, playing]);

  const handlePlayerStateChange = useCallback((event: any) => {
    if (!window.YT) return;
    
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
  }, [onPlayStateChange, onProgress, startProgressInterval, clearProgressInterval]);

  const handlePlayerError = useCallback((event: any) => {
    console.error('YouTube player error:', event);
    onError();
    clearProgressInterval();
  }, [onError, clearProgressInterval]);

  // Initialize YouTube player only once
  const initPlayer = useCallback(() => {
    if (!containerRef.current || !window.YT || !window.YT.Player || playerInitializedRef.current || !videoId) {
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
          // Additional parameters to improve stability
          playsinline: 1,
          modestbranding: 1,
          iv_load_policy: 3, // Hide annotations
          fs: 0 // Disable fullscreen button (we'll handle this ourselves)
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
  }, [videoId, playerElementId, playing, startAt, handlePlayerReady, handlePlayerStateChange, handlePlayerError, onError]);

  useEffect(() => {
    // Load YouTube API if not loaded already
    loadYouTubeAPI();
    
    // Clean up on unmount
    return () => {
      clearProgressInterval();
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
        playerInitializedRef.current = false;
      }
    };
  }, [clearProgressInterval]);

  useEffect(() => {
    // Initialize player when YT API is ready
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (window.onYouTubeIframeAPIReady === initPlayer) {
        window.onYouTubeIframeAPIReady = null;
      }
    };
  }, [initPlayer]);

  // Handle play/pause state changes without recreating the player
  useEffect(() => {
    if (!playerReady || !playerRef.current) return;

    try {
      const player = playerRef.current;
      if (playing && player && typeof player.playVideo === 'function') {
        player.playVideo();
      } else if (!playing && player && typeof player.pauseVideo === 'function') {
        player.pauseVideo();
      }
    } catch (error) {
      console.error('Error controlling YouTube player:', error);
    }
  }, [playing, playerReady]);

  return { containerRef };
};
