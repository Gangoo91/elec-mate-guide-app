
import { Location, NavigateFunction } from 'react-router-dom';

export const handleStudyRoutes = (
  location: Location,
  navigate: NavigateFunction
): boolean => {
  // Handle level-specific study material routes
  if (location.pathname.includes('/study-materials/city-guilds/level')) {
    // Extract the base path and the rest of the path
    const pathParts = location.pathname.split('/');
    const levelIndex = pathParts.findIndex(part => part.includes('level'));
    
    if (levelIndex !== -1 && pathParts.length > levelIndex + 2) {
      // Navigate to the level page
      const levelPath = pathParts.slice(0, levelIndex + 1).join('/');
      navigate(levelPath);
      return true;
    }
  }
  
  return false;
};
