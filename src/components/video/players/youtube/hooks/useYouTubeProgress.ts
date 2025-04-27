
// Simplified hook for YouTube progress tracking
// This is kept minimal as we're removing YouTube player functionality

export function useYouTubeProgress({ onProgress, playerRef }: any) {
  const startProgressInterval = () => {
    console.warn("YouTube progress tracking skipped - feature removed");
  };

  const clearProgressInterval = () => {
    // No-op
  };

  return { startProgressInterval, clearProgressInterval };
}
