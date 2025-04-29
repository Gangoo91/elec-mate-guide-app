
import { Location } from 'react-router-dom';

export const handleStudyRoutes = (
  location: Location,
  navigate: (to: string) => void
): boolean => {
  // Level 2 unit section pages
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-2\/core-units\/\d{3}\/\d+\.\d+/)) {
    const unitId = location.pathname.split('/')[6];
    navigate(`/apprentices/study-materials/city-guilds/level-2/core-units/${unitId}`);
    return true;
  }

  // Level 2 unit pages
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-2\/core-units\/\d{3}/)) {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
    return true;
  }

  // Level 3 unit pages (except Unit 301 and Unit 302 which have their own pages)
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-3\/(?!301$)(?!302$)\d{3}$/)) {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
    return true;
  }
  
  // Special handling for Unit 301
  if (location.pathname === '/apprentices/study-materials/city-guilds/level-3/301') {
    // Don't redirect, allow accessing this specific unit page
    return false;
  }
  
  // Special handling for Unit 302
  if (location.pathname === '/apprentices/study-materials/city-guilds/level-3/302') {
    // Don't redirect, allow accessing this specific unit page
    return false;
  }

  // Level 3 section pages
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-3\/\d{3}\/\d+\.\d+/)) {
    const unitId = location.pathname.split('/')[6];
    navigate(`/apprentices/study-materials/city-guilds/level-3/${unitId}`);
    return true;
  }

  return false;
};
