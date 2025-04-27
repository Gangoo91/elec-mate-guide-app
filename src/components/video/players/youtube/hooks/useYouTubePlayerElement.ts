
import { useRef, useState, useEffect } from 'react';

interface UseYouTubePlayerElementProps {
  videoId: string | null;
  playerElementId: string;
}

export const useYouTubePlayerElement = ({ videoId, playerElementId }: UseYouTubePlayerElementProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerCreated, setContainerCreated] = useState(false);
  const playerCreationAttemptedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || !videoId || playerCreationAttemptedRef.current) return;

    playerCreationAttemptedRef.current = true;
    
    const createPlayerElement = () => {
      if (!containerRef.current) return;
      
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
  
      const playerDiv = document.createElement('div');
      playerDiv.id = playerElementId;
      playerDiv.style.position = 'absolute';
      playerDiv.style.top = '0';
      playerDiv.style.left = '0';
      playerDiv.style.width = '100%';
      playerDiv.style.height = '100%';
      containerRef.current.appendChild(playerDiv);
      setContainerCreated(true);
    };

    createPlayerElement();
    
    return () => {
      playerCreationAttemptedRef.current = false;
    };
  }, [videoId, playerElementId]);

  return { containerRef, containerCreated };
};
