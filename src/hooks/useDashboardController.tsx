
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to control Dashboard rendering and prevent caching issues
 */
export function useDashboardController() {
  const location = useLocation();
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Force a re-render and clear any cached state
    setIsReady(false);
    
    // Small timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return { isReady };
}
