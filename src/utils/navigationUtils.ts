
import { Location, NavigateFunction } from 'react-router-dom';
import { handleStudyRoutes } from './navigation/studyRoutes';

export const handleNavigationLogic = (
  location: Location,
  navigate: NavigateFunction
): void => {
  console.log("NavigationUtils - Handling navigation from:", location.pathname);

  // Handle study material routes first
  if (handleStudyRoutes(location, navigate)) {
    return;
  }

  // Handle tutor routes specifically
  if (location.pathname.startsWith('/tutors/')) {
    const segments = location.pathname.split('/');
    if (segments.length > 3) {
      // If deeper than /tutors/section, go back one level
      navigate(`/tutors/${segments[2]}`);
    } else {
      // If at /tutors/section, go back to /tutors
      navigate('/tutors');
    }
    return;
  }

  // Learning Hub to Apprentices
  if (location.pathname === '/apprentices/learning-hub') {
    navigate('/apprentices');
    return;
  }
  
  // Progress tracking to Apprentices
  if (location.pathname === '/apprentices/progress') {
    navigate('/apprentices');
    return;
  }
  
  // Off-the-job training to Progress page
  if (location.pathname === '/apprentices/progress/off-the-job') {
    navigate('/apprentices/progress');
    return;
  }

  // EAL routes
  if (location.pathname.match(/\/apprentices\/study-materials\/eal\/\w+\/\w+/)) {
    const segments = location.pathname.split('/');
    navigate(`/apprentices/study-materials/eal/${segments[4]}`);
    return;
  }

  if (location.pathname.match(/\/apprentices\/study-materials\/eal\/\w+$/)) {
    navigate('/apprentices/study-materials/eal');
    return;
  }

  if (location.pathname === '/apprentices/study-materials/eal') {
    navigate('/apprentices/study-materials');
    return;
  }

  // Study Materials to Apprentices
  if (location.pathname === '/apprentices/study-materials') {
    navigate('/apprentices');
    return;
  }

  // Default back behavior for other paths
  if (location.pathname !== '/') {
    navigate(-1);
  } else {
    navigate('/');
  }
};
