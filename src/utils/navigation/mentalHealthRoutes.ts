
import { Location } from 'react-router-dom';

export const handleMentalHealthRoutes = (
  location: Location,
  navigate: (to: string) => void
): boolean => {
  if (location.pathname === "/mental-health") {
    navigate("/apprentices");
    return true;
  }
  
  if (location.pathname.startsWith("/mental-health/") && location.pathname !== "/mental-health") {
    navigate("/mental-health");
    return true;
  }

  return false;
};
