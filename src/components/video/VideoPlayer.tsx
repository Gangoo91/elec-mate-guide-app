
import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { useVideoProgress } from '@/hooks/useVideoProgress';
import { YouTubePlayer } from './players/YouTubePlayer';
import { HTML5Player } from './players/HTML5Player';
import { VideoErrorDisplay } from './players/VideoErrorDisplay';
import { VideoControls } from './controls/VideoControls';

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
  
  const isYouTubeUrl = (url: string): boolean => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  // Initialize player with last position if available
  useEffect(() => {
    if (progress.lastPosition > 0) {
      setCurrentTime(progress.lastPosition);
    }
  }, [progress.lastPosition]);

  const handlePlay = () => {
    setPlaying(!playing);
    
    // For HTML5 video, manually trigger play/pause
    if (!isYouTubeUrl(videoUrl)) {
      const video = document.querySelector('video');
      if (video) {
        if (video.paused) {
          video.play().catch(err => {
            console.error("Error playing video:", err);
            setError(true);
          });
        } else {
          video.pause();
        }
      }
    }
  };

  const handleVolumeClick = () => {
    const video = document.querySelector('video');
    if (video) {
      video.muted = !video.muted;
    }
  };

  const handleFullscreenClick = () => {
    const container = document.querySelector('.video-container');
    if (container instanceof HTMLElement) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        container.requestFullscreen().catch(err => {
          console.error("Error attempting to enable fullscreen:", err);
        });
      }
    }
  };

  const handleVideoEnded = () => {
    setPlaying(false);
    updateProgress(duration, duration);
  };

  const handleTimeUpdate = (currentTime: number, videoDuration: number) => {
    if (videoDuration > 0) {
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
          {isYouTubeUrl(videoUrl) ? (
            <YouTubePlayer
              videoUrl={videoUrl}
              title={title}
              onError={() => setError(true)}
              onProgress={handleTimeUpdate}
              onPlayStateChange={setPlaying}
              startAt={progress.lastPosition}
              playing={playing}
            />
          ) : (
            <HTML5Player
              videoUrl={videoUrl}
              title={title}
              onError={() => setError(true)}
              onEnded={handleVideoEnded}
              onTimeUpdate={() => {
                const video = document.querySelector('video');
                if (video) {
                  handleTimeUpdate(video.currentTime, video.duration);
                }
              }}
              currentTime={currentTime}
              playing={playing}
            />
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
          />
        </>
      )}
    </div>
  );
};
