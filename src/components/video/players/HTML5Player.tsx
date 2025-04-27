
import React, { useEffect, useRef } from 'react';

interface HTML5PlayerProps {
  videoUrl: string;
  title: string;
  onError: () => void;
  onEnded: () => void;
  onTimeUpdate: () => void;
  currentTime?: number;
  playing?: boolean;
  muted?: boolean;
}

export const HTML5Player = ({
  videoUrl,
  title,
  onError,
  onEnded,
  onTimeUpdate,
  currentTime = 0,
  playing = false,
  muted = false,
}: HTML5PlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle play/pause
  useEffect(() => {
    if (!videoRef.current) return;
    
    if (playing) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.error("Error playing video:", err);
          // Only call onError for errors that aren't just user interaction requirements
          if (err.name !== 'NotAllowedError') {
            onError();
          }
        });
      }
    } else {
      videoRef.current.pause();
    }
  }, [playing, onError]);

  // Set current time
  useEffect(() => {
    if (!videoRef.current || !currentTime) return;
    
    try {
      // Only seek if the time difference is significant
      if (Math.abs(videoRef.current.currentTime - currentTime) > 1) {
        videoRef.current.currentTime = currentTime;
      }
    } catch (err) {
      console.error("Error setting video time:", err);
    }
  }, [currentTime]);

  // Set muted state
  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = muted;
  }, [muted]);

  // Make sure video fits container
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.style.width = '100%';
      videoRef.current.style.height = '100%';
      videoRef.current.style.objectFit = 'contain';
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        src={videoUrl}
        title={title}
        onError={onError}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        playsInline
        preload="auto"
      />
    </div>
  );
};
