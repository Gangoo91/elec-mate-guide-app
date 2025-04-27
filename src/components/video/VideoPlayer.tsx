
import React, { useState, useCallback } from 'react';
import { useVideoProgress } from '@/hooks/useVideoProgress';
import { YouTubePlayer } from './players/youtube/YouTubePlayer';
import { HTML5Player } from './players/HTML5Player';
import { VideoErrorDisplay } from './players/VideoErrorDisplay';
import { VideoControls } from './controls/VideoControls';
import { useToast } from '@/hooks/use-toast';
import LoadingSpinner from '@/components/LoadingSpinner';
import { VideoPlayerProvider, useVideoPlayer } from './context/VideoPlayerContext';
import { PlayOverlay } from './components/PlayOverlay';
import { CompletionBadge } from './components/CompletionBadge';

const VideoPlayerContent = ({ videoId, videoUrl, title }: { videoId: string, videoUrl: string, title: string }) => {
  const { progress, updateProgress } = useVideoProgress(videoId);
  const { toast } = useToast();
  const [playerLoading, setPlayerLoading] = useState(true);
  const [playerInitialized, setPlayerInitialized] = useState(false);
  
  const {
    playing,
    muted,
    error,
    currentTime,
    setPlaying,
    setMuted,
    setError,
    setCurrentTime,
    setDuration
  } = useVideoPlayer();

  const isYouTubeUrl = useCallback((url: string): boolean => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  }, []);

  // Initialize player with delay
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setPlayerInitialized(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handlePlay = () => {
    setPlaying(!playing);
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
    updateProgress(currentTime, currentTime);
    toast({
      title: "Video completed",
      description: progress.kudosAwarded ? "Thanks for watching!" : "You earned kudos points!",
    });
  };

  const handleVideoError = useCallback(() => {
    console.error("Video error occurred for:", title);
    setError(true);
    setPlaying(false);
    setPlayerLoading(false);
    
    toast({
      title: "Video Error",
      description: "There was an issue playing this video",
      variant: "destructive",
    });
  }, [title, toast, setError, setPlaying]);

  const handleTimeUpdate = useCallback((currentTime: number, videoDuration: number) => {
    setPlayerLoading(false);
    
    if (videoDuration > 0 && videoDuration !== Infinity) {
      setDuration(videoDuration);
    }
    
    if (currentTime > 0) {
      setCurrentTime(currentTime);
      updateProgress(currentTime, videoDuration);
    }
  }, [updateProgress, setCurrentTime, setDuration]);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black group video-container">
      {error ? (
        <VideoErrorDisplay videoUrl={videoUrl} />
      ) : (
        <>
          {!playerInitialized && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
              <LoadingSpinner size="lg" className="text-[#FFC900]" label="Loading video player..." />
              <p className="text-white/70 mt-4">Initializing video player...</p>
            </div>
          )}
          
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
          ) : null}
          
          <PlayOverlay onPlay={handlePlay} loading={playerLoading} />
          <CompletionBadge watched={progress.watched} />
          
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

export const VideoPlayer = (props: { videoId: string; videoUrl: string; title: string }) => {
  return (
    <VideoPlayerProvider>
      <VideoPlayerContent {...props} />
    </VideoPlayerProvider>
  );
};
