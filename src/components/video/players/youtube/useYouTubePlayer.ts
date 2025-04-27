
import { useState, useRef, useEffect } from 'react';
import { useYouTubeInitialization } from './hooks/useYouTubeInitialization';
import { useYouTubePlayerState } from './hooks/useYouTubePlayerState';
import { useYouTubeProgress } from './hooks/useYouTubeProgress';
import { useYouTubePlayerElement } from './hooks/useYouTubePlayerElement';
import { useYouTubePlayerEvents } from './hooks/useYouTubePlayerEvents';

interface UseYouTubePlayerProps {
  videoId: string | null;
  onError: () => void;
  onProgress: (currentTime: number, duration: number) => void;
  onPlayStateChange: (isPlaying: boolean) => void;
  onPlayerReady?: () => void;
  startAt?: number;
  playing?: boolean;
  muted?: boolean;
}

export const useYouTubePlayer = ({
  videoId,
  onError,
  onProgress,
  onPlayStateChange,
  onPlayerReady,
  startAt = 0,
  playing = false,
  muted = false
}: UseYouTubePlayerProps) => {
  const [playerReady, setPlayerReady] = useState(false);
  const [playerElementId] = useState(`youtube-player-${Math.random().toString(36).substr(2, 9)}`);
  const playerRef = useRef<any>(null);
  const [playerInitialized, setPlayerInitialized] = useState(false);
  const mountedRef = useRef(true);

  const { startProgressInterval, clearProgressInterval } = useYouTubeProgress({
    onProgress,
    playerRef
  });

  const { handlePlayerStateChange } = useYouTubePlayerEvents({
    onProgress,
    onPlayStateChange,
    startProgressInterval,
    clearProgressInterval,
    mountedRef
  });

  const { containerRef, containerCreated } = useYouTubePlayerElement({
    videoId,
    playerElementId
  });

  const handlePlayerReady = (event: any) => {
    if (!mountedRef.current) return;
    
    console.log("YouTube player ready event received");
    
    try {
      if (event.target && typeof event.target.getIframe === 'function') {
        const iframe = event.target.getIframe();
        if (iframe && document.body.contains(iframe)) {
          setPlayerReady(true);
          setPlayerInitialized(true);
          
          if (typeof event.target.setVolume === 'function') {
            if (muted) {
              event.target.mute();
            } else {
              event.target.unMute();
              event.target.setVolume(100);
            }
          }
          
          if (startAt > 0 && typeof event.target.seekTo === 'function') {
            event.target.seekTo(startAt);
          }
          
          if (onPlayerReady) {
            onPlayerReady();
          }
          
          if (playing && typeof event.target.playVideo === 'function') {
            setTimeout(() => {
              if (mountedRef.current && typeof event.target.playVideo === 'function') {
                event.target.playVideo();
              }
            }, 100);
          }
        }
      }
    } catch (err) {
      console.error('Error in player ready handler:', err);
    }
  };

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

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

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

  // Fix: Call useYouTubePlayerState without arguments as it no longer expects any
  const { isLoaded, cleanupPlayer } = useYouTubePlayerState();

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
