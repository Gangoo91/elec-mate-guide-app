
// Simplified hook for YouTube player element
// This is kept minimal as we're removing YouTube player functionality

import { useRef } from 'react';

export function useYouTubePlayerElement({ videoId, playerElementId }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return { containerRef, containerCreated: false };
}
