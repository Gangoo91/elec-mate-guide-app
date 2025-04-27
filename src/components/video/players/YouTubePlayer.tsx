
import React, { useRef, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

interface YouTubePlayerProps {
  videoUrl: string;
  title: string;
  onError: () => void;
  onProgress: (currentTime: number, duration: number) => void;
  onPlayStateChange: (isPlaying: boolean) => void;
}

export const YouTubePlayer = ({ 
  videoUrl, 
  title, 
  onError, 
  onProgress,
  onPlayStateChange 
}: YouTubePlayerProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const getYouTubeEmbedUrl = (url: string) => {
    try {
      if (url.includes('youtube.com/embed/')) {
        const embedUrl = new URL(url);
        embedUrl.searchParams.set('enablejsapi', '1');
        embedUrl.searchParams.set('origin', window.location.origin);
        return embedUrl.toString();
      }
      
      const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
      const match = url.match(youtubeRegex);
      
      if (match && match[1]) {
        const videoId = match[1];
        return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`;
      }
      
      return url;
    } catch (err) {
      console.error("Error parsing YouTube URL:", err);
      return url;
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return;
      
      try {
        const data = JSON.parse(event.data);
        
        if (data.event === "onStateChange") {
          switch(data.info) {
            case 0: // Video ended
              onProgress(data.duration || 0, data.duration || 0);
              onPlayStateChange(false);
              break;
            case 1: // Playing
              onPlayStateChange(true);
              break;
            case 2: // Paused
              onPlayStateChange(false);
              break;
          }
        } else if (data.event === "duration") {
          // Duration update
        } else if (data.event === "onError") {
          console.error("YouTube player error:", data);
          onError();
        }
      } catch (e) {
        // Not all messages from the iframe will be JSON
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onError, onProgress, onPlayStateChange]);

  const embedUrl = getYouTubeEmbedUrl(videoUrl);
  
  return (
    <iframe
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
