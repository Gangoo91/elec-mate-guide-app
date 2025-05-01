
import { Location } from 'react-router-dom';

export const handleMentalHealthRoutes = (
  location: Location,
  navigate: (to: string) => void
): boolean => {
  // Don't redirect within mental health routes
  if (location.pathname === "/mental-health") {
    return false;
  }
  
  // Define all valid mental health routes
  const validMentalHealthRoutes = [
    "/mental-health/stress-management", 
    "/mental-health/support-groups", 
    "/mental-health/professional-resources", 
    "/mental-health/buddy",
    "/mental-health/professional-resources/support-groups",
    "/mental-health/professional-resources/find-professional",
    "/mental-health/professional-resources/self-help",
    "/mental-health/professional-resources/crisis-support"
  ];
  
  // Only apply redirection for mental health routes
  if (!location.pathname.startsWith("/mental-health/")) {
    return false;
  }
  
  // For valid subpages, let them navigate directly
  if (validMentalHealthRoutes.includes(location.pathname)) {
    return false;
  }

  // Default back to main mental health page for unknown routes
  navigate("/mental-health");
  return true;
};
