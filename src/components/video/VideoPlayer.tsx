
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
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Extract YouTube video ID from URL if it's a YouTube URL
  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/embed/')) {
      return url; // Already an embed URL
    }
    
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    
    // If it's a YouTube URL, add parameters for API
    if (match) {
      const videoId = match[1];
      return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`;
    }
    
    return url;
  };

  // Handle video play and tracking
  const handlePlay = () => {
    if (iframeRef.current) {
      // Start tracking progress when video plays
      setPlaying(true);
      
      // For YouTube iframe, we can only track when it completes
      // Set a timer to check and mark as watched after expected duration
      setTimeout(() => {
        if (playing) {
          // Assume video is watched after 60 seconds (adjust as needed)
          updateProgress(60, 60); // Mark as watched
        }
      }, 60000);
    }
  };

  // Track when user clicks on the video
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Set up message listener for YouTube iframe API events
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return;
      
      try {
        const data = JSON.parse(event.data);
        if (data.event === "onStateChange" && data.info === 0) {
          // Video ended (state 0)
          updateProgress(100, 100); // Mark as completed
        }
      } catch (e) {
        // Not a JSON message or other error
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [updateProgress]);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black group">
      <iframe
        ref={iframeRef}
        className="w-full h-full"
        src={getYouTubeEmbedUrl(videoUrl)}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onClick={handlePlay}
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
