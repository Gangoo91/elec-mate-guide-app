
import { useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useVideoPlayer } from '@/components/video/context/VideoPlayerContext';

export const useVideoControls = () => {
  const { toast } = useToast();
  const {
    playing,
    muted,
    setPlaying,
    setMuted
  } = useVideoPlayer();

  const handlePlay = useCallback(() => {
    setPlaying(!playing);
  }, [playing, setPlaying]);

  const handleVolumeClick = useCallback(() => {
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
  }, [muted, setMuted, toast]);

  const handleFullscreenClick = useCallback(() => {
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
  }, [toast]);

  return {
    playing,
    muted,
    handlePlay,
    handleVolumeClick,
    handleFullscreenClick
  };
};
