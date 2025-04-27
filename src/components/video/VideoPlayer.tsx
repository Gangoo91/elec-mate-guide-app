
import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';
import { useVideoProgress } from '@/hooks/useVideoProgress';
import { YouTubePlayer } from './players/youtube/YouTubePlayer';
import { HTML5Player } from './players/HTML5Player';
import { VideoErrorDisplay } from './players/VideoErrorDisplay';
import { VideoControls } from './controls/VideoControls';
import { useToast } from '@/hooks/use-toast';

interface VideoPlayerProps {
  videoId: string;
  videoUrl: string;
  title: string;
}

export const VideoPlayer = ({ videoId, videoUrl, title }: VideoPlayerProps) => {
  const { progress, updateProgress } = useVideoProgress(videoId);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [muted, setMuted] = useState(false);
  const { toast } = useToast();
  const [playerInitialized, setPlayerInitialized] = useState(false);
  
  const isYouTubeUrl = useCallback((url: string): boolean => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  }, []);

  // Initialize player with last position if available
  useEffect(() => {
    if (progress.lastPosition > 0) {
      setCurrentTime(progress.lastPosition);
    }
    
    // Delay player initialization to ensure components are properly mounted
    const timer = setTimeout(() => {
      setPlayerInitialized(true);
    }, 300); // Increased for better reliability
    
    return () => clearTimeout(timer);
  }, [progress.lastPosition]);

  // Reset state when video changes
  useEffect(() => {
    setError(false);
    setPlaying(false);
    setCurrentTime(progress.lastPosition > 0 ? progress.lastPosition : 0);
  }, [videoId, videoUrl, progress.lastPosition]);

  const handlePlay = () => {
    setPlaying(prevState => !prevState);
  };

  const handleVolumeClick = () => {
    const newMutedState = !muted;
    setMuted(newMutedState);
    
    const video = document.querySelector('video');
    if (video) {
      video.muted = newMutedState;
    }
    
    toast({
      title: newMutedState ? "Sound muted" : "Sound unmuted",
      duration: 2000,
    });
  };

  const handleFullscreenClick = () => {
    const container = document.querySelector('.video-container');
    if (container instanceof HTMLElement) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        container.requestFullscreen().catch(err => {
          console.error("Error attempting to enable fullscreen:", err);
          toast({
            title: "Fullscreen Error",
            description: "Couldn't enter fullscreen mode",
            variant: "destructive",
          });
        });
      }
    }
  };

  const handleVideoEnded = () => {
    setPlaying(false);
    updateProgress(duration, duration);
    toast({
      title: "Video completed",
      description: progress.kudosAwarded ? "Thanks for watching!" : "You earned kudos points!",
    });
  };

  const handleVideoError = () => {
    console.error("Video error occurred for:", title);
    setError(true);
    setPlaying(false);
    toast({
      title: "Video Error",
      description: "There was an issue playing this video",
      variant: "destructive",
    });
  };

  const handleTimeUpdate = (currentTime: number, videoDuration: number) => {
    if (videoDuration > 0 && videoDuration !== Infinity) {
      setDuration(videoDuration);
    }
    
    if (currentTime > 0) {
      setCurrentTime(currentTime);
      updateProgress(currentTime, videoDuration || duration);
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black group video-container">
      {error ? (
        <VideoErrorDisplay videoUrl={videoUrl} />
      ) : (
        <>
          {playerInitialized && isYouTubeUrl(videoUrl) ? (
            <YouTubePlayer
              videoUrl={videoUrl}
              title={title}
              onError={handleVideoError}
              onProgress={handleTimeUpdate}
              onPlayStateChange={setPlaying}
              startAt={progress.lastPosition}
              playing={playing}
            />
          ) : playerInitialized ? (
            <HTML5Player
              videoUrl={videoUrl}
              title={title}
              onError={handleVideoError}
              onEnded={handleVideoEnded}
              onTimeUpdate={() => {
                const video = document.querySelector('video');
                if (video) {
                  handleTimeUpdate(video.currentTime, video.duration);
                }
              }}
              currentTime={currentTime}
              playing={playing}
              muted={muted}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="animate-pulse text-white/50">Loading video player...</div>
            </div>
          )}
          
          {!playing && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer"
              onClick={handlePlay}
            >
              <div className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all">
                <Play className="h-12 w-12 text-white" />
              </div>
            </div>
          )}
          
          {progress.watched && (
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
              Completed
            </div>
          )}
          
          <VideoControls
            playing={playing}
            onPlay={handlePlay}
            onVolumeClick={handleVolumeClick}
            onFullscreenClick={handleFullscreenClick}
            muted={muted}
          />
        </>
      )}
    </div>
  );
};
