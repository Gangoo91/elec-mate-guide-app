
// Simplified hook for YouTube player events
// This is kept minimal as we're removing YouTube player functionality

export function useYouTubePlayerEvents({ 
  onProgress, 
  onPlayStateChange, 
  startProgressInterval, 
  clearProgressInterval,
  mountedRef
}: any) {
  const handlePlayerStateChange = () => {
    console.warn("YouTube player state change skipped - feature removed");
  };

  return { handlePlayerStateChange };
}
