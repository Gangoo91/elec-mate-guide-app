
import { Location } from 'react-router-dom';

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
  
  // Map of paths to their parent routes
  const navigationMap: Record<string, string> = {
    // Project routes
    '/electricians/project-management': '/electricians/project-overview',
    '/electricians/templates': '/electricians/project-overview',
    
    // Main section routes
    '/electricians/technical-tools': '/electricians',
    '/electricians/toolbox-talk': '/electricians',
    '/electricians/mentorship': '/electricians',
    
    // Specialisation case study routes
    '/electricians/specialisations/marine/case-studies': '/electricians/specialisations/marine',
    '/electricians/specialisations/ev/case-studies': '/electricians/specialisations/ev',
    
    // Job scheduling routes
    '/electricians/job-scheduling': '/electricians',
  };

  // Check if path matches any specialisation case study pattern
  if (location.pathname.match(/\/electricians\/specialisations\/[a-z-]+\/case-studies\/[a-z-]+$/)) {
    const specialisationPath = location.pathname.split('/case-studies/')[0];
    console.log(`Navigation: Navigating back to specialization: ${specialisationPath}`);
    navigate(specialisationPath);
    return;
  }

  // Check if path matches any specialisation pattern
  if (location.pathname.match(/\/electricians\/specialisations\/[a-z-]+$/)) {
    console.log("Navigation: Navigating to specialisations");
    navigate('/electricians/development/specialisations');
    return;
  }

  // Check if path matches job scheduling pages pattern
  if (location.pathname.match(/\/electricians\/job-scheduling\/[a-z-]+/)) {
    console.log("Navigation: Navigating to job scheduling");
    navigate('/electricians/job-scheduling');
    return;
  }

  // Check if path matches Level 2 unit pages pattern
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-2\/core-units\/\d{3}/)) {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
    return;
  }

  // Check if path matches career pathways pattern
  if (location.pathname.match(/\/electricians\/development\/career-pathways\/[a-z-]+/)) {
    navigate('/electricians/development/career-pathways');
    return;
  }

  // Special handling for Level 3 pages
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-3\/\d{3}/)) {
    navigate('/apprentices/study-materials/city-guilds/level-3');
    return;
  }

  // Special handling for solar installation pages
  if (location.pathname.includes('/site-assessment/')) {
    navigate('/electricians/solar-pv-installation/installation-process/site-assessment');
    return;
  }

  // Special handling for Level 3 section pages
  if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-3\/\d{3}\/\d+\.\d+/)) {
    const unitId = location.pathname.split('/')[6];
    navigate(`/apprentices/study-materials/city-guilds/level-3/${unitId}`);
    return;
  }

  // Handle mental health routes
  if (location.pathname === "/mental-health") {
    navigate("/electricians");
    return;
  }
  if (location.pathname.startsWith("/mental-health/") && location.pathname !== "/mental-health") {
    navigate("/mental-health");
    return;
  }

  // Handle direct navigation paths from the map
  if (navigationMap[location.pathname]) {
    navigate(navigationMap[location.pathname]);
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
  if (location.pathname === "/apprentices") {
    navigate("/dashboard");
    return;
  }

  if (location.pathname === "/electricians") {
    navigate("/dashboard");
    return;
  }

  // For all other cases, go back in history
  console.log("Navigation: Default - navigating back in history");
  navigate(-1);
};
