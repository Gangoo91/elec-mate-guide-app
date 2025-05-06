
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Custom hook to control Dashboard rendering and prevent caching issues
 */
export function useDashboardController() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const previousPathRef = useRef<string | null>(null);
  
  useEffect(() => {
    // Always mark as not ready first to ensure we get a clean render
    setIsReady(false);
    
    // Check if we're coming from a page refresh
    const checkPageRefresh = () => {
      const lastPath = sessionStorage.getItem('lastPath');
      
      // If we have a stored path and we're at root, it was likely a refresh
      if (lastPath && location.pathname === '/') {
        console.log("Detected page refresh, restoring path:", lastPath);
        // Navigate to the stored path
        navigate(lastPath, { replace: true });
        // Clear the stored path so we don't redirect again
        sessionStorage.removeItem('lastPath');
        return true;
      }
      return false;
    };
    
    // Only proceed with normal rendering if not handling a refresh
    if (!checkPageRefresh()) {
      // Small delay to ensure the DOM is ready
      const timer = setTimeout(() => {
        // Store the current path
        previousPathRef.current = location.pathname;
        console.log("Dashboard controller ready", location.pathname);
        setIsReady(true);
      }, 50);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [location.pathname, navigate]);
  
  return { isReady };
}
