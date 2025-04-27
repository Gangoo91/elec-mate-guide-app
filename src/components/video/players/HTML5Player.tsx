
import React, { useRef } from 'react';

interface HTML5PlayerProps {
  videoUrl: string;
  title: string;
  onError: () => void;
  onEnded: () => void;
  onTimeUpdate: () => void;
}

export const HTML5Player = ({ 
  videoUrl, 
  title, 
  onError, 
  onEnded, 
  onTimeUpdate 
}: HTML5PlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    />
  );
};
