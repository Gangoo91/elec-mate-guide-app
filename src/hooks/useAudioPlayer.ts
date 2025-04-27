
import { useState, useEffect, useRef } from 'react';

export const useAudioPlayer = (audioUrl: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioUrl) {
      setError('No audio URL provided');
      return;
    }
    
    try {
      audioRef.current = new Audio(audioUrl);
      
      const handleEnded = () => setIsPlaying(false);
      const handleTimeUpdate = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      };
      const handleLoadedMetadata = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
          setError(null);
        }
      };
      const handleError = (e: ErrorEvent) => {
        console.error('Audio loading error:', e);
        setError('Failed to load audio file');
        setIsPlaying(false);
      };

      audioRef.current.addEventListener('ended', handleEnded);
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.addEventListener('error', handleError as EventListener);

      audioRef.current.load();

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleEnded);
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          audioRef.current.removeEventListener('error', handleError as EventListener);
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    } catch (err) {
      console.error('Error setting up audio player:', err);
      setError('Error setting up audio player');
      return () => {};
    }
  }, [audioUrl]);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(err => {
            console.error('Audio playback failed:', err);
            setError('Failed to play audio');
            setIsPlaying(false);
          });
      }
    }
  };

  const seek = (value: number) => {
    if (audioRef.current && !isNaN(value)) {
      const newTime = (value / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  
  return { 
    isPlaying, 
    togglePlayback,
    currentTime: formatTime(currentTime),
    progress,
    duration: formatTime(duration),
    error,
    seek
  };
};
