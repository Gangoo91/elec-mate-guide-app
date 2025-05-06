
import { Location, NavigateFunction } from 'react-router-dom';
import { handleStudyRoutes } from './navigation/studyRoutes';

export const handleNavigationLogic = (
  location: Location,
  navigate: NavigateFunction
): void => {
  console.log("NavigationUtils - Handling navigation from:", location.pathname);

  // Handle study material routes first
  if (location.pathname.includes('/study-materials') && handleStudyRoutes) {
    const handled = handleStudyRoutes(location, navigate);
    if (handled) return;
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
  
  // Handling dashboard
  if (location.pathname === '/dashboard') {
    navigate('/');
    return;
  }

  // If all pages are blank, ensure we always navigate correctly to a valid page
  if (location.pathname === '/leaderboards' || 
      location.pathname === '/electricians' ||
      location.pathname === '/apprentices') {
    // Stay on the current page, it's a valid route
    return;
  }

  // Default back behavior for other paths
  if (location.pathname !== '/') {
    navigate(-1);
  } else {
    navigate('/');
  }
};
