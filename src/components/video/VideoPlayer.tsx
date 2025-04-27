
import React, { useRef, useEffect } from 'react';
import { useVideoProgress } from '@/hooks/useVideoProgress';

interface VideoPlayerProps {
  videoId: string;
  videoUrl: string;
  title: string;
}

export const VideoPlayer = ({ videoId, videoUrl, title }: VideoPlayerProps) => {
  const { progress, updateProgress } = useVideoProgress(videoId);

  // Extract YouTube video ID from URL if it's a YouTube URL
  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/embed/')) {
      return url; // Already an embed URL
    }
    
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
      <iframe
        className="w-full h-full"
        src={getYouTubeEmbedUrl(videoUrl)}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {progress.watched && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
          Completed
        </div>
      )}
    </div>
  );
};
