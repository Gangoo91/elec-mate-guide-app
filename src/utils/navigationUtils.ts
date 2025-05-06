
import { Location, NavigateFunction } from 'react-router-dom';
import { handleStudyRoutes } from './navigation/studyRoutes';
import { handleProjectRoutes } from './navigation/projectRoutes';

export const handleNavigationLogic = (
  location: Location,
  navigate: NavigateFunction
): void => {
  console.log("NavigationUtils - Handling navigation from:", location.pathname);

  // Check if this is a page refresh navigation
  const lastPath = sessionStorage.getItem('lastPath');
  if (lastPath && location.pathname === '/') {
    console.log("Restoring navigation after refresh to:", lastPath);
    sessionStorage.removeItem('lastPath');
    navigate(lastPath);
    return;
  }

  // Handle study material routes first
  if (location.pathname.includes('/study-materials') && handleStudyRoutes) {
    const handled = handleStudyRoutes(location, navigate);
    if (handled) return;
  }

  // Handle project-related routes
  if (handleProjectRoutes && (
      location.pathname.includes('/project-') || 
      location.pathname.includes('/templates') ||
      location.pathname.includes('/job-scheduling')
    )) {
    const handled = handleProjectRoutes(location, navigate);
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
  
  // Electricians routes - ensure they stay on their pages
  if (location.pathname === '/electricians' || 
      location.pathname.includes('/electricians/toolbox-talk') ||
      location.pathname.includes('/electricians/learning-hub')) {
    // Stay on the current page, it's a valid route
    return;
  }

  // Special handling for electricians chat room
  if (location.pathname === '/electricians/toolbox-talk/chat') {
    // Stay on the chat page, don't navigate away
    console.log("Staying on chat room page");
    return;
  }
  
  // Handling dashboard - redirect to dashboard instead of root for better UX
  if (location.pathname === '/dashboard') {
    // Keep on dashboard, don't navigate away
    return;
  }

  // If all pages are blank, ensure we always navigate correctly to a valid page
  if (location.pathname === '/leaderboards' || 
      location.pathname === '/electricians' ||
      location.pathname === '/apprentices') {
    // Stay on the current page, it's a valid route
    return;
  }
  
  // Root path - show the dashboard or welcome page
  if (location.pathname === '/') {
    // Stay at root, don't navigate
    return;
  }

  // Default back behavior for other paths
  navigate(-1);
};
