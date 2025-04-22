
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to control Dashboard rendering and prevent flickering issues
 */
export function useDashboardController() {
  const location = useLocation();
  const [isReady, setIsReady] = useState(true); // Start with true to prevent flickering
  
  useEffect(() => {
    // Simplified loading logic to prevent flickering
    // No localStorage or timers that could cause race conditions
    setIsReady(true);
    console.log("Dashboard controller is ready - simplified");
  }, [location.pathname]);
  
  return { isReady };
}
