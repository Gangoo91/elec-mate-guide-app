import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to control Dashboard rendering and prevent caching issues
 */
export function useDashboardController() {
  const location = useLocation();
  const [isReady, setIsReady] = useState(false);
  const previousPathRef = useRef<string | null>(null);
  
  useEffect(() => {
    // Only reset state when the actual path changes
    if (previousPathRef.current !== location.pathname) {
      // Store the current path to track changes
      previousPathRef.current = location.pathname;
      
      // Force a re-render and clear any cached state
      setIsReady(false);
      
      // Small timeout to ensure DOM is ready, but keep it very short
      const timer = setTimeout(() => {
        console.log("Dashboard controller ready", location.pathname);
        setIsReady(true);
      }, 10); // Reduced timeout for faster rendering
      
      return () => clearTimeout(timer);
    } else {
      // If it's the same path, we should still be ready
      setIsReady(true);
    }
  }, [location.pathname]);
  
  return { isReady };
}
