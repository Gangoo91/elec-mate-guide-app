
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

  // Handle cases where someone refreshes directly on a path
  if (location.pathname === '/') {
    // Already home, no need for navigation
    return;
  }

  // Default back behavior for other paths
  if (location.pathname !== '/' && location.pathname !== '/dashboard') {
    navigate(-1);
  } else {
    navigate('/dashboard');
  }
};
