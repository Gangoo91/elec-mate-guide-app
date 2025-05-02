
import { Location } from 'react-router-dom';

export const handleStudyRoutes = (
  location: Location,
  navigate: (path: string) => void
): boolean => {
  console.log("StudyRoutes - Checking path:", location.pathname);

  // Level 2 Core Units
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-2\/core-units\/\d+\/\w+/)) {
    const unitId = location.pathname.split('/')[6];
    navigate(`/apprentices/study-materials/city-guilds/level-2/core-units/${unitId}`);
    return true;
  }

  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-2\/core-units\/\d+$/)) {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
    return true;
  }

  if (location.pathname === '/apprentices/study-materials/city-guilds/level-2/core-units') {
    navigate('/apprentices/study-materials/city-guilds/level-2');
    return true;
  }

  // Level 2 Installation
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-2\/installation\/\d+\/\w+/)) {
    const unitId = location.pathname.split('/')[6];
    navigate(`/apprentices/study-materials/city-guilds/level-2/installation/${unitId}`);
    return true;
  }

  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-2\/installation\/\d+$/)) {
    navigate('/apprentices/study-materials/city-guilds/level-2/installation');
    return true;
  }

  if (location.pathname === '/apprentices/study-materials/city-guilds/level-2/installation') {
    navigate('/apprentices/study-materials/city-guilds/level-2');
    return true;
  }

  // Level 3 Advanced Units
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-3\/\d+\/\w+/)) {
    const unitId = location.pathname.split('/')[5];
    navigate(`/apprentices/study-materials/city-guilds/level-3/${unitId}`);
    return true;
  }

  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-3\/\d+$/)) {
    navigate('/apprentices/study-materials/city-guilds/level-3');
    return true;
  }

  // Level 2 to City & Guilds
  if (location.pathname === '/apprentices/study-materials/city-guilds/level-2') {
    navigate('/apprentices/study-materials/city-guilds');
    return true;
  }

  // Level 3 to City & Guilds
  if (location.pathname === '/apprentices/study-materials/city-guilds/level-3') {
    navigate('/apprentices/study-materials/city-guilds');
    return true;
  }

  // City & Guilds to Study Materials
  if (location.pathname === '/apprentices/study-materials/city-guilds') {
    navigate('/apprentices/study-materials');
    return true;
  }
  
  // EAL specific routes for level 2 subjects
  if (location.pathname.match(/\/apprentices\/study-materials\/eal\/level-2\/[a-z-]+\/[a-z-]+$/)) {
    const subject = location.pathname.split('/')[5];
    navigate(`/apprentices/study-materials/eal/level-2/${subject}`);
    return true;
  }

  // Study Materials to Apprentices
  if (location.pathname === '/apprentices/study-materials') {
    navigate('/apprentices');
    return true;
  }

  return false;
};
