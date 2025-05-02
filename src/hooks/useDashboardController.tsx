
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
    
    console.log("Dashboard controller initializing", location.pathname);
    
    // Clear any cached data
    sessionStorage.removeItem('dashboard_cache');
    
    // Small timeout to ensure DOM is ready and previous cache is cleared
    const timer = setTimeout(() => {
      console.log("Dashboard controller ready", location.pathname);
      setIsReady(true);
    }, 150); // Increased timeout to ensure cache clearing
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return { isReady };
}
