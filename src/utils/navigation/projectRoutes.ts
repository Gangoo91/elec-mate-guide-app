
import { Location, NavigateFunction } from 'react-router-dom';

export const handleProjectRoutes = (
  location: Location,
  navigate: NavigateFunction
): boolean => {
  const projectNavigationMap: Record<string, string> = {
    '/electricians/project-management': '/electricians/project-overview',
    '/electricians/templates': '/electricians/project-overview',
    '/electricians/job-scheduling': '/electricians',
    '/electricians/project-overview': '/electricians', // Add this line to handle navigation back to electricians hub
  };

  if (projectNavigationMap[location.pathname]) {
    navigate(projectNavigationMap[location.pathname]);
    return true;
  }

  // Handle job scheduling pages pattern
  if (location.pathname.match(/\/electricians\/job-scheduling\/[a-z-]+/)) {
    navigate('/electricians/job-scheduling');
    return true;
  }

  return false;
};
