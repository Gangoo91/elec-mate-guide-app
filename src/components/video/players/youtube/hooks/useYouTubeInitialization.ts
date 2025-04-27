
// Simplified hook for YouTube initialization
// This is kept minimal as we're removing YouTube player functionality

export function useYouTubeInitialization({ 
  videoId, 
  playerElementId, 
  onError,
  onPlayerReady,
  onPlayerStateChange,
  onPlayerError,
  playing,
  startAt,
  playerRef
}: any) {
  const initPlayer = () => {
    console.warn("YouTube player initialization skipped - feature removed");
    if (onError) {
      setTimeout(onError, 100);
    }
  };

  return { initPlayer };
}
