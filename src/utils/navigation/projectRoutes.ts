
import { Location } from 'react-router-dom';

export const handleProjectRoutes = (
  location: Location,
  navigate: (to: string) => void
): boolean => {
  const projectNavigationMap: Record<string, string> = {
    '/electricians/project-management': '/electricians/project-overview',
    '/electricians/templates': '/electricians/project-overview',
    '/electricians/job-scheduling': '/electricians',
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
