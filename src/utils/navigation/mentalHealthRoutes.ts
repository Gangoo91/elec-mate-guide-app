
import { Location } from 'react-router-dom';

export const handleMentalHealthRoutes = (
  location: Location,
  navigate: (to: string) => void
): boolean => {
  // Don't redirect within mental health routes
  if (location.pathname === "/mental-health") {
    return false;
  }
  
  // For subpages, let them navigate directly
  if (location.pathname.startsWith("/mental-health/") && 
      ["/mental-health/stress-management", 
       "/mental-health/support-groups", 
       "/mental-health/professional-resources", 
       "/mental-health/buddy"].includes(location.pathname)) {
    return false;
  }

  // Default back to main mental health page for unknown routes
  if (location.pathname.startsWith("/mental-health/") && 
      !["/mental-health/stress-management", 
       "/mental-health/support-groups", 
       "/mental-health/professional-resources", 
       "/mental-health/buddy"].includes(location.pathname)) {
    navigate("/mental-health");
    return true;
  }

  return false;
};
