
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

  // Special handling for Level 3 page
  if (location.pathname === '/apprentices/study-materials/city-guilds/level-3') {
    // Don't redirect, allow accessing the Level 3 electrical page directly
    return false;
  }

  // Level 3 unit pages (except Unit 301, Unit 302, Unit 303, Unit 304, Unit 305, and Unit 308 which have their own pages)
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-3\/(?!301$)(?!302$)(?!303$)(?!304$)(?!305$)(?!308$)(?!core-units$)\d{3}$/)) {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
    return true;
  }
  
  // Special handling for specific unit pages
  if (location.pathname === '/apprentices/study-materials/city-guilds/level-3/301' ||
      location.pathname === '/apprentices/study-materials/city-guilds/level-3/302' ||
      location.pathname === '/apprentices/study-materials/city-guilds/level-3/303' ||
      location.pathname === '/apprentices/study-materials/city-guilds/level-3/304' ||
      location.pathname === '/apprentices/study-materials/city-guilds/level-3/305' ||
      location.pathname === '/apprentices/study-materials/city-guilds/level-3/308') {
    // Don't redirect, allow accessing these specific unit pages
    return false;
  }
  
  // Special handling for Unit assessment pages
  if (location.pathname === '/apprentices/study-materials/city-guilds/level-3/302/assessment' ||
      location.pathname === '/apprentices/study-materials/city-guilds/level-3/303/assessment' ||
      location.pathname === '/apprentices/study-materials/city-guilds/level-3/304/assessment' ||
      location.pathname === '/apprentices/study-materials/city-guilds/level-3/305/assessment') {
    // Don't redirect, allow accessing the assessment pages
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
