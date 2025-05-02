
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { clearLocalCache } from "@/utils/cacheUtils";

/**
 * Custom hook to control Dashboard rendering and prevent caching issues
 */
export function useDashboardController() {
  const location = useLocation();
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Force a re-render and clear any cached state
    setIsReady(false);
    
    // Clear any potential cache
    clearLocalCache();
    
    // Small timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      console.log("Dashboard controller ready, path:", location.pathname);
      setIsReady(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return { isReady };
}
