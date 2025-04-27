
import React, { useRef, useEffect } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  const attemptedLoadRef = useRef(false);

  useEffect(() => {
    if (videoRef.current) {
      if (currentTime > 0) {
        videoRef.current.currentTime = currentTime;
      }
    }
  }, [currentTime]);

  useEffect(() => {
    // Set up video element
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (playing) {
      // Add a catch for autoplay restrictions
      const playPromise = videoElement.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.error("Error playing video:", err);
          // Don't call onError yet - we might be hitting autoplay restrictions
          // Instead try again with user interaction
        });
      }
    } else {
      videoElement.pause();
    }

    // Cleanup
    return () => {
      // Stop loading/downloading the video when component unmounts
      if (videoElement) {
        videoElement.pause();
        videoElement.src = ""; // Empty source
        videoElement.load(); // Reset the video element
      }
    };
  }, [playing, onError]);

  const handleLoadedMetadata = () => {
    // Video metadata has loaded - this is a good sign that the video is valid
    attemptedLoadRef.current = true;
    if (videoRef.current && currentTime > 0) {
      videoRef.current.currentTime = currentTime;
    }
  };

  const handleLoadError = () => {
    onError();
    attemptedLoadRef.current = true;
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

  // Check if after 5 seconds the video hasn't loaded, we should trigger an error
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
        className="w-full h-full object-cover"
        src={isValidVideoUrl(videoUrl) ? videoUrl : ''}
        title={title}
        controls={false}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        onError={handleLoadError}
        onLoadedMetadata={handleLoadedMetadata}
        preload="metadata"
        playsInline
      />
    </AspectRatio>
  );
};
