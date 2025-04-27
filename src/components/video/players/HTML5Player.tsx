
import React, { useRef, useEffect } from 'react';

interface HTML5PlayerProps {
  videoUrl: string;
  title: string;
  onError: () => void;
  onEnded: () => void;
  onTimeUpdate: () => void;
  currentTime?: number;
  playing?: boolean;
}

export const HTML5Player = ({ 
  videoUrl, 
  title, 
  onError, 
  onEnded, 
  onTimeUpdate,
  currentTime = 0,
  playing = false
}: HTML5PlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (currentTime > 0) {
        videoRef.current.currentTime = currentTime;
      }
    }
  }, [currentTime]);

  useEffect(() => {
    if (videoRef.current) {
      if (playing) {
        // Add a catch for autoplay restrictions
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.error("Error playing video:", err);
            onError();
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [playing, onError]);

  const handleLoadedMetadata = () => {
    // Video metadata has loaded - this is a good sign that the video is valid
    if (videoRef.current && currentTime > 0) {
      videoRef.current.currentTime = currentTime;
    }
  };

  // Verify the video URL is valid
  const isValidVideoUrl = (url: string): boolean => {
    return url && (
      url.endsWith('.mp4') || 
      url.endsWith('.webm') || 
      url.endsWith('.ogg') ||
      url.startsWith('blob:') ||
      url.includes('video')
    );
  };

  return (
    <video
      ref={videoRef}
      className="w-full h-full"
      src={isValidVideoUrl(videoUrl) ? videoUrl : ''}
      title={title}
      controls={false}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onError={onError}
      onLoadedMetadata={handleLoadedMetadata}
      preload="metadata"
    />
  );
};
