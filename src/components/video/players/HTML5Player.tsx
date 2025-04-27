
import React, { useRef, useEffect, useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  muted = false
}: HTML5PlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const attemptedLoadRef = useRef(false);
  const [loadAttempts, setLoadAttempts] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Apply currentTime whenever it changes or video is loaded
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement && currentTime > 0 && videoElement.readyState >= 2) {
      videoElement.currentTime = currentTime;
    }
  }, [currentTime]);

  // Handle play/pause
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Set muted state
    if (videoElement.muted !== muted) {
      videoElement.muted = muted;
    }

    if (playing) {
      const playPromise = videoElement.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.error("Error playing video:", err);
          // Could be due to autoplay restrictions, try muted
          if (!muted && err.name === 'NotAllowedError') {
            videoElement.muted = true;
            videoElement.play().catch(innerErr => {
              console.error("Failed to play even when muted:", innerErr);
            });
          }
        });
      }
    } else {
      videoElement.pause();
    }

    return () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.src = ""; // Empty source
        videoElement.load(); // Reset the video element
      }
    };
  }, [playing, videoUrl, muted]);

  const handleLoadedMetadata = () => {
    attemptedLoadRef.current = true;
    const videoElement = videoRef.current;
    
    if (videoElement && currentTime > 0) {
      videoElement.currentTime = currentTime;
    }
    
    if (videoElement) {
      videoElement.muted = muted;
    }
    
    // Show video once it's ready
    setIsVisible(true);
    
    if (playing && videoElement) {
      videoElement.play().catch(err => {
        console.error("Error auto-playing after metadata load:", err);
      });
    }
  };

  const handleLoadError = () => {
    // Retry loading up to 3 times with different mime types
    if (loadAttempts < 3 && videoRef.current) {
      setLoadAttempts(prev => prev + 1);
      // Try again after a delay
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.load();
        }
      }, 1000);
    } else {
      onError();
      attemptedLoadRef.current = true;
    }
  };

  // Verify the video URL is valid
  const isValidVideoUrl = (url: string): boolean => {
    if (!url) return false;
    
    return url && (
      url.endsWith('.mp4') || 
      url.endsWith('.webm') || 
      url.endsWith('.ogg') ||
      url.startsWith('blob:') ||
      url.includes('video') ||
      // Some URLs may not have file extensions but still be valid
      url.includes('googleapis.com') || 
      url.includes('cloudfront.net') ||
      url.includes('amazonaws.com')
    );
  };

  // Check if after 5 seconds the video hasn't loaded
  useEffect(() => {
    if (!isValidVideoUrl(videoUrl)) {
      onError();
      return;
    }

    const timeoutId = setTimeout(() => {
      if (videoRef.current && videoRef.current.readyState === 0 && !attemptedLoadRef.current) {
        console.error("Video failed to load after timeout");
        onError();
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [videoUrl, onError]);

  return (
    <AspectRatio ratio={16 / 9} className="w-full overflow-hidden">
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        src={isValidVideoUrl(videoUrl) ? videoUrl : ''}
        title={title}
        controls={false}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        onError={handleLoadError}
        onLoadedMetadata={handleLoadedMetadata}
        preload="metadata"
        playsInline
        muted={muted}
      />
    </AspectRatio>
  );
};
