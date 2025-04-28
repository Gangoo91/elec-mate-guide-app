
import { Location } from 'react-router-dom';
import { handleSpecialisationRoutes } from './navigation/specialisationRoutes';
import { handleMentalHealthRoutes } from './navigation/mentalHealthRoutes';
import { handleStudyRoutes } from './navigation/studyRoutes';
import { handleProjectRoutes } from './navigation/projectRoutes';

export const handleNavigationLogic = (
  location: Location,
  navigate: (to: string) => void,
  customAction?: () => void
) => {
  console.log("Navigation: handleNavigationLogic called from:", location.pathname);
  
  // Use custom action if provided - this takes priority
  if (customAction) {
    console.log("Navigation: Using custom action");
    customAction();
    return;
  }

  // Try each specialized handler
  if (handleSpecialisationRoutes(location, navigate)) return;
  if (handleMentalHealthRoutes(location, navigate)) return;
  if (handleStudyRoutes(location, navigate)) return;
  if (handleProjectRoutes(location, navigate)) return;

  // Main section routes
  const mainSectionMap: Record<string, string> = {
    '/electricians/technical-tools': '/electricians',
    '/electricians/toolbox-talk': '/electricians',
    '/electricians/mentorship': '/electricians',
  };

  if (mainSectionMap[location.pathname]) {
    navigate(mainSectionMap[location.pathname]);
    return;
  }

  // Special handling for solar installation pages
  if (location.pathname.includes('/site-assessment/')) {
    navigate('/electricians/solar-pv-installation/installation-process/site-assessment');
    return;
  }

  // Special handling for EV infrastructure page
  if (location.pathname === "/electricians/ev-infrastructure") {
    if (location.state?.from === "specialisations") {
      navigate('/electricians/development/specialisations');
    } else {
      navigate("/electricians");
    }
    return;
  }

  // Default navigation for root paths
  if (location.pathname === "/apprentices" || location.pathname === "/electricians") {
    navigate("/dashboard");
    return;
  }

  // For all other cases, go back in history
  console.log("Navigation: Default - navigating to previous page");
  navigate(-1);
};
