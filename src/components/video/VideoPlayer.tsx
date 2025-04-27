import React, { useRef, useEffect, useState } from 'react';
import { useVideoProgress } from '@/hooks/useVideoProgress';
import { Play, Maximize, Volume2, AlertTriangle } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  videoUrl: string;
  title: string;
}

export const VideoPlayer = ({ videoId, videoUrl, title }: VideoPlayerProps) => {
  const { progress, updateProgress } = useVideoProgress(videoId);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const isYouTubeUrl = (url: string): boolean => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };
  
  const getYouTubeEmbedUrl = (url: string) => {
    try {
      // If it's already an embed URL, just return it
      if (url.includes('youtube.com/embed/')) {
        const embedUrl = new URL(url);
        // Add origin parameter for postMessage API
        embedUrl.searchParams.set('enablejsapi', '1');
        embedUrl.searchParams.set('origin', window.location.origin);
        return embedUrl.toString();
      }
      
      // Extract video ID from various YouTube URL formats
      const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
      const match = url.match(youtubeRegex);
      
      if (match && match[1]) {
        const videoId = match[1];
        return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`;
      }
      
      // If no match was found, return the original URL
      return url;
    } catch (err) {
      console.error("Error parsing YouTube URL:", err);
      return url;
    }
  };

  const handlePlay = () => {
    if (!playing) {
      setPlaying(true);
      if (isYouTubeUrl(videoUrl) && iframeRef.current) {
        try {
          // Use postMessage to interact with YouTube iframe
          iframeRef.current.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        } catch (err) {
          console.error("Error playing YouTube video:", err);
        }
      } else if (videoRef.current) {
        // Play HTML5 video
        videoRef.current.play().catch(err => {
          console.error("Error playing video:", err);
          setError(true);
        });
      }
    }
  };

  const handleVideoEnded = () => {
    setPlaying(false);
    updateProgress(duration, duration);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      if (currentTime > 0) {
        updateProgress(currentTime, videoRef.current.duration);
      }
    }
  };

  const handleIframeError = () => {
    console.error("Video iframe failed to load:", videoUrl);
    setError(true);
  };

  useEffect(() => {
    // For YouTube videos
    const iframe = iframeRef.current;
    if (isYouTubeUrl(videoUrl) && iframe) {
      const handleMessage = (event: MessageEvent) => {
        if (event.origin !== "https://www.youtube.com") return;
        
        try {
          const data = JSON.parse(event.data);
          
          if (data.event === "onStateChange") {
            switch(data.info) {
              case 0: // Video ended
                updateProgress(duration, duration);
                setPlaying(false);
                break;
              case 1: // Playing
                setPlaying(true);
                break;
              case 2: // Paused
                setPlaying(false);
                break;
            }
          } else if (data.event === "duration") {
            setDuration(data.duration);
          } else if (data.event === "onError") {
            console.error("YouTube player error:", data);
            setError(true);
          }
        } catch (e) {
          // Not all messages from the iframe will be JSON
        }
      };

      window.addEventListener('message', handleMessage);
      return () => window.removeEventListener('message', handleMessage);
    }
  }, [duration, updateProgress, videoUrl]);

  const renderVideoPlayer = () => {
    if (isYouTubeUrl(videoUrl)) {
      const embedUrl = getYouTubeEmbedUrl(videoUrl);
      console.log("Embedding YouTube URL:", embedUrl);
      
      return (
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onError={handleIframeError}
        />
      );
    } else {
      console.log("Using HTML5 video player for:", videoUrl);
      
      return (
        <video
          ref={videoRef}
          className="w-full h-full"
          src={videoUrl}
          title={title}
          controls={false}
          onEnded={handleVideoEnded}
          onTimeUpdate={handleTimeUpdate}
          onError={() => setError(true)}
        />
      );
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black group">
      {error ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black/90 p-6 text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-white text-lg font-semibold mb-2">Video Unavailable</h3>
          <p className="text-white/70 mb-4">This video cannot be played. It may have been removed or is currently unavailable.</p>
          <a 
            href={videoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#FFC900] hover:underline"
          >
            Try opening the video in a new tab
          </a>
        </div>
      ) : (
        <>
          {renderVideoPlayer()}
          
          {!playing && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer"
              onClick={handlePlay}
            >
              <div className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all">
                <Play className="h-12 w-12 text-white" />
              </div>
            </div>
          )}
          
          {progress.watched && (
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
              Completed
            </div>
          )}
          
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                className="text-white hover:text-[#FFC900] transition"
                onClick={handlePlay}
              >
                <Play className="h-5 w-5" />
              </button>
              <button className="text-white hover:text-[#FFC900] transition">
                <Volume2 className="h-5 w-5" />
              </button>
            </div>
            <button className="text-white hover:text-[#FFC900] transition">
              <Maximize className="h-5 w-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
