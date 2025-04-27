
import React, { useState } from 'react';
import { Play, Maximize, Volume2 } from 'lucide-react';
import { useVideoProgress } from '@/hooks/useVideoProgress';
import { YouTubePlayer } from './players/YouTubePlayer';
import { HTML5Player } from './players/HTML5Player';
import { VideoErrorDisplay } from './players/VideoErrorDisplay';

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
  
  const isYouTubeUrl = (url: string): boolean => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const handlePlay = () => {
    if (!playing) {
      setPlaying(true);
    }
  };

  const handleVideoEnded = () => {
    setPlaying(false);
    updateProgress(duration, duration);
  };

  const handleTimeUpdate = (currentTime: number, videoDuration: number) => {
    if (currentTime > 0) {
      updateProgress(currentTime, videoDuration);
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black group">
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
          
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                className="text-white hover:text-[#FFC900] transition"
                onClick={handlePlay}
              >
                <Play className="h-5 w-5" />
              </button>
              <button className="text-white hover:text-[#FFC900] transition">
                <Volume2 className="h-5 w-5" />
              </button>
            </div>
            <button className="text-white hover:text-[#FFC900] transition">
              <Maximize className="h-5 w-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
