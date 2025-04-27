
import React, { createContext, useContext, ReactNode } from 'react';

interface VideoPlayerContextType {
  playing: boolean;
  muted: boolean;
  currentTime: number;
  duration: number;
  error: boolean;
  setPlaying: (playing: boolean) => void;
  setMuted: (muted: boolean) => void;
  setError: (error: boolean) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
}

const VideoPlayerContext = createContext<VideoPlayerContextType | undefined>(undefined);

export function VideoPlayerProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  return (
    <VideoPlayerContext.Provider
      value={{
        playing,
        muted,
        error,
        currentTime,
        duration,
        setPlaying,
        setMuted,
        setError,
        setCurrentTime,
        setDuration,
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  );
}

export function useVideoPlayer() {
  const context = useContext(VideoPlayerContext);
  if (context === undefined) {
    throw new Error('useVideoPlayer must be used within a VideoPlayerProvider');
  }
  return context;
}
