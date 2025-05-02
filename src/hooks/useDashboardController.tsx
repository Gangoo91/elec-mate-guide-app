
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
      console.log("Dashboard controller ready", location.pathname);
      setIsReady(true);
    }, 50);
    
    // Add event listener for page loads
    const handleLoad = () => {
      console.log("Page fully loaded, ensuring dashboard is ready");
      setIsReady(true);
    };
    
    window.addEventListener('load', handleLoad);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, [location.pathname]);
  
  return { isReady };
}
