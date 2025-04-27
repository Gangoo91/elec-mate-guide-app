
import React, { useRef, useEffect } from 'react';

// Define YouTube API types
declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        options: {
          events: {
            onStateChange: (event: any) => void;
            onError: () => void;
            onReady: (event: any) => void;
          }
        }
      ) => {
        getCurrentTime: () => number;
        getDuration: () => number;
        playVideo: () => void;
        pauseVideo: () => void;
        getPlayerState: () => number;
        seekTo: (seconds: number) => void;
      };
    };
    onYouTubeIframeAPIReady: (() => void) | null;
  }
}

interface YouTubePlayerProps {
  videoUrl: string;
  title: string;
  onError: () => void;
  onProgress: (currentTime: number, duration: number) => void;
  onPlayStateChange: (isPlaying: boolean) => void;
  startAt?: number;
  playing?: boolean;
}

export const YouTubePlayer = ({ 
  videoUrl, 
  title, 
  onError, 
  onProgress,
  onPlayStateChange,
  startAt = 0,
  playing = false
}: YouTubePlayerProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const getYouTubeEmbedUrl = (url: string) => {
    try {
      if (url.includes('youtube.com/embed/')) {
        const embedUrl = new URL(url);
        embedUrl.searchParams.set('enablejsapi', '1');
        embedUrl.searchParams.set('origin', window.location.origin);
        embedUrl.searchParams.set('start', Math.floor(startAt).toString());
        return embedUrl.toString();
      }
      
      const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
      const match = url.match(youtubeRegex);
      
      if (match && match[1]) {
        const videoId = match[1];
        const params = new URLSearchParams({
          enablejsapi: '1',
          origin: window.location.origin,
          start: Math.floor(startAt).toString()
        });
        return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
      }
      
      return url;
    } catch (err) {
      console.error("Error parsing YouTube URL:", err);
      return url;
    }
  };

  useEffect(() => {
    const initYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag.parentNode) {
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
      }
    };

    initYouTubeAPI();
  }, []);

  useEffect(() => {
    const setupPlayer = () => {
      if (iframeRef.current && iframeRef.current.id && window.YT) {
        playerRef.current = new window.YT.Player(iframeRef.current.id, {
          events: {
            'onStateChange': (event: any) => {
              switch(event.data) {
                case 0: // Ended
                  onPlayStateChange(false);
                  onProgress(event.target.getDuration(), event.target.getDuration());
                  clearProgressInterval();
                  break;
                case 1: // Playing
                  onPlayStateChange(true);
                  startProgressInterval();
                  break;
                case 2: // Paused
                  onPlayStateChange(false);
                  clearProgressInterval();
                  break;
              }
            },
            'onError': () => {
              onError();
              clearProgressInterval();
            },
            'onReady': (event: any) => {
              if (startAt > 0) {
                event.target.seekTo(startAt);
              }
            }
          }
        });
      }
    };

    const startProgressInterval = () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }

      progressIntervalRef.current = setInterval(() => {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
          onProgress(
            playerRef.current.getCurrentTime(),
            playerRef.current.getDuration()
          );
        }
      }, 1000);
    };

    const clearProgressInterval = () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };

    if (iframeRef.current && window.YT) {
      setupPlayer();
    } else {
      window.onYouTubeIframeAPIReady = setupPlayer;
    }

    return () => {
      clearProgressInterval();
      if (window.onYouTubeIframeAPIReady === setupPlayer) {
        window.onYouTubeIframeAPIReady = null;
      }
    };
  }, [iframeRef, onError, onPlayStateChange, onProgress, startAt]);

  useEffect(() => {
    if (playerRef.current && typeof playerRef.current.getPlayerState === 'function') {
      const playerState = playerRef.current.getPlayerState();
      
      if (playing && playerState !== 1) { // Not playing
        playerRef.current.playVideo();
      } else if (!playing && playerState === 1) { // Currently playing
        playerRef.current.pauseVideo();
      }
    }
  }, [playing]);

  // Extract video ID for the iframe ID
  const videoIdMatch = videoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  const iframeId = `yt-player-${videoIdMatch ? videoIdMatch[1] : 'video'}`;
  const embedUrl = getYouTubeEmbedUrl(videoUrl);
  
  return (
    <iframe
      id={iframeId}
      ref={iframeRef}
      className="w-full h-full"
      src={embedUrl}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      onError={onError}
    />
  );
};
