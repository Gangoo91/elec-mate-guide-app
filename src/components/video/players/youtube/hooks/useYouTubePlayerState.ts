
// Simplified hook for YouTube player state
// This is kept minimal as we're removing YouTube player functionality

import { useCallback, useState } from 'react';

interface UseYouTubePlayerStateProps {
  playerRef: React.MutableRefObject<any>;
  playing: boolean;
  playerReady: boolean;
}

export const useYouTubePlayerState = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return {
    isLoaded,
    cleanupPlayer: useCallback(() => {
      console.warn("YouTube player cleanup skipped - feature removed");
    }, [])
  };
};
