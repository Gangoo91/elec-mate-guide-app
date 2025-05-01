
import { Location } from 'react-router-dom';

export const handleStudyRoutes = (
  location: Location, 
  navigateCallback: (path: string) => void
): boolean => {
  
  // Handle City & Guilds Level 2 Section pages
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-2\/201\/[a-z0-9-]+$/)) {
    navigateCallback('/apprentices/study-materials/city-guilds/level-2/201');
    return true;
  }

  // Handle City & Guilds Level 2 pages
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-2\/[0-9]+$/)) {
    navigateCallback('/apprentices/study-materials/city-guilds/level-2');
    return true;
  }
  
  // Handle the city & guilds path
  if (location.pathname === '/apprentices/study-materials/city-guilds/level-2') {
    navigateCallback('/apprentices/study-materials/city-guilds');
    return true;
  }
  
  if (location.pathname === '/apprentices/study-materials/city-guilds') {
    navigateCallback('/apprentices/study-materials');
    return true;
  }
  
  // Handle the study materials root
  if (location.pathname === '/apprentices/study-materials') {
    navigateCallback('/apprentices/learning-hub');
    return true;
  }

  // Handle EAL Level 2 pages
  if (location.pathname.match(/\/apprentices\/study-materials\/eal\/level-2\/[a-z-]+$/)) {
    navigateCallback('/apprentices/study-materials/eal/level-2');
    return true;
  }
  
  // Handle EAL top level
  if (location.pathname.match(/\/apprentices\/study-materials\/eal\/level-[23]$/)) {
    navigateCallback('/apprentices/study-materials/eal');
    return true;
  }

  return false;
};
