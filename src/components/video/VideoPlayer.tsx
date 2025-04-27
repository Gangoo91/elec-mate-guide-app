
import React, { useRef, useEffect } from 'react';
import { useVideoProgress } from '@/hooks/useVideoProgress';

interface VideoPlayerProps {
  videoId: string;
  videoUrl: string;
  title: string;
}

export const VideoPlayer = ({ videoId, videoUrl, title }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { progress, updateProgress } = useVideoProgress(videoId);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set initial position if available
    if (progress.lastPosition > 0) {
      video.currentTime = progress.lastPosition;
    }

    // Update progress periodically
    const updateInterval = setInterval(() => {
      if (video.paused) return;
      updateProgress(video.currentTime, video.duration);
    }, 5000);

    return () => clearInterval(updateInterval);
  }, [videoRef.current]);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="w-full h-full"
        controls
        src={videoUrl}
        title={title}
        onEnded={() => {
          const video = videoRef.current;
          if (video) {
            updateProgress(video.duration, video.duration);
          }
        }}
      />
      {progress.watched && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
          Completed
        </div>
      )}
    </div>
  );
};
