
import React, { useRef, useEffect, useState } from 'react';
import { useVideoProgress } from '@/hooks/useVideoProgress';
import { Play, Maximize, Volume2 } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  videoUrl: string;
  title: string;
}

export const VideoPlayer = ({ videoId, videoUrl, title }: VideoPlayerProps) => {
  const { progress, updateProgress } = useVideoProgress(videoId);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/embed/')) {
      return url;
    }
    
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    
    if (match) {
      const videoId = match[1];
      return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`;
    }
    
    return url;
  };

  const handlePlay = () => {
    if (!playing) {
      setPlaying(true);
      if (iframeRef.current) {
        // Use postMessage to interact with YouTube iframe
        iframeRef.current.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
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
        }
      } catch (e) {
        console.error("YouTube iframe message error:", e);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [duration, updateProgress]);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black group">
      <iframe
        ref={iframeRef}
        className="w-full h-full"
        src={`${getYouTubeEmbedUrl(videoUrl)}?enablejsapi=1&origin=${window.location.origin}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      
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
          <button className="text-white hover:text-[#FFC900] transition">
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
    </div>
  );
};
