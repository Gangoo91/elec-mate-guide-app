
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
      console.log("Dashboard controller is ready");
    }, 10);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  // Force ready state after a maximum timeout to prevent stuck loading
  useEffect(() => {
    if (!isReady) {
      const forceReadyTimer = setTimeout(() => {
        console.log("Force ready dashboard controller");
        setIsReady(true);
      }, 1000); // Safety timeout
      
      return () => clearTimeout(forceReadyTimer);
    }
  }, [isReady]);
  
  return { isReady };
}
