
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
        videoRef.current.play().catch(err => {
          console.error("Error playing video:", err);
          onError();
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [playing, onError]);

  return (
    <video
      ref={videoRef}
      className="w-full h-full"
      src={videoUrl}
      title={title}
      controls={false}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onError={onError}
      preload="metadata"
    />
  );
};
