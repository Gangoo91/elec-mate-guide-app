
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
    // Always mark as not ready first to ensure we get a clean render
    setIsReady(false);
    
    // Small delay to ensure the DOM is ready
    const timer = setTimeout(() => {
      // Store the current path
      previousPathRef.current = location.pathname;
      console.log("Dashboard controller ready", location.pathname);
      setIsReady(true);
    }, 20);
    
    // Check if we're coming from a page refresh
    const checkPageRefresh = () => {
      const lastPath = sessionStorage.getItem('lastPath');
      
      // If we have a stored path and we're at root, it was likely a refresh
      if (lastPath && location.pathname === '/') {
        console.log("Detected page refresh, restoring path:", lastPath);
        // Clear the stored path so we don't redirect again
        sessionStorage.removeItem('lastPath');
      }
    };
    
    checkPageRefresh();
    
    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);
  
  return { isReady };
}
