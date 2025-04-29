
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

  // Special handling for Level 3 page (add an explicit check)
  if (location.pathname === '/apprentices/study-materials/city-guilds/level-3') {
    // Don't redirect, allow accessing the Level 3 electrical page
    return false;
  }

  // Level 3 unit pages (except Unit 301, Unit 302, Unit 303, and Unit 304 which have their own pages)
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-3\/(?!301$)(?!302$)(?!303$)(?!304$)(?!core-units$)\d{3}$/)) {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
    return true;
  }
  
  // Special handling for Unit 301, 302, 303, and 304
  if (location.pathname === '/apprentices/study-materials/city-guilds/level-3/301' ||
      location.pathname === '/apprentices/study-materials/city-guilds/level-3/302' ||
      location.pathname === '/apprentices/study-materials/city-guilds/level-3/303' ||
      location.pathname === '/apprentices/study-materials/city-guilds/level-3/304') {
    // Don't redirect, allow accessing these specific unit pages
    return false;
  }
  
  // Special handling for Unit 302, 303, and 304 assessments
  if (location.pathname === '/apprentices/study-materials/city-guilds/level-3/302/assessment' ||
      location.pathname === '/apprentices/study-materials/city-guilds/level-3/303/assessment' ||
      location.pathname === '/apprentices/study-materials/city-guilds/level-3/304/assessment') {
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
