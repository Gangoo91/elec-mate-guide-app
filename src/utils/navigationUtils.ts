
import { Location } from 'react-router-dom';
import { handleProjectRoutes } from './navigation/projectRoutes';
import { handleSpecialisationRoutes } from './navigation/specialisationRoutes';
import { handleMentalHealthRoutes } from './navigation/mentalHealthRoutes';
import { handleStudyRoutes } from './navigation/studyRoutes';

export const handleNavigationLogic = (
  location: Location, 
  navigate: (to: string | number) => void,
  customAction?: () => void
) => {
  if (customAction) {
    console.log("NavigationUtils - Using custom back action");
    customAction();
    return;
  }

  console.log("NavigationUtils - Using default back logic");
  
  // Handle development routes
  if (location.pathname.match(/\/electricians\/development\/[a-z-]+$/)) {
    navigate('/electricians/development');
    return;
  }

  // Specific handler for career pathways detail pages
  if (location.pathname.match(/\/electricians\/development\/career-pathways\/[a-z-]+$/)) {
    navigate('/electricians/development/career-pathways');
    return;
  }
  
  // Handle mentorship routes for both apprentices and electricians
  if (location.pathname.includes('/mentorship/')) {
    if (location.pathname.startsWith('/apprentices/')) {
      navigate('/apprentices/mentorship');
      return;
    }
    
    if (location.pathname.startsWith('/electricians/')) {
      navigate('/electricians/mentorship');
      return;
    }
  }
  
  // Handle EAL routes
  if (location.pathname.match(/\/apprentices\/study-materials\/eal\/level-[23]/)) {
    navigate('/apprentices/study-materials/eal');
    return;
  }
  
  // Handle other EAL qualification routes
  if (location.pathname.match(/\/apprentices\/study-materials\/eal\/(moet|inspection-testing|ev-installation|hazardous-areas|building-controls)$/)) {
    navigate('/apprentices/study-materials/eal');
    return;
  }
  
  // Handle EAL detailed subject pages
  if (location.pathname.match(/\/apprentices\/study-materials\/eal\/moet\/[a-z-]+$/)) {
    navigate('/apprentices/study-materials/eal/moet');
    return;
  }
  
  if (location.pathname.match(/\/apprentices\/study-materials\/eal\/inspection-testing\/[a-z-]+$/)) {
    navigate('/apprentices/study-materials/eal/inspection-testing');
    return;
  }
  
  if (location.pathname.match(/\/apprentices\/study-materials\/eal\/ev-installation\/[a-z-]+$/)) {
    navigate('/apprentices/study-materials/eal/ev-installation');
    return;
  }
  
  if (location.pathname.match(/\/apprentices\/study-materials\/eal\/hazardous-areas\/[a-z-]+$/)) {
    navigate('/apprentices/study-materials/eal/hazardous-areas');
    return;
  }
  
  if (location.pathname.match(/\/apprentices\/study-materials\/eal\/building-controls\/[a-z-]+$/)) {
    navigate('/apprentices/study-materials/eal/building-controls');
    return;
  }
  
  if (location.pathname === '/apprentices/study-materials/eal/assessment') {
    navigate('/apprentices/study-materials/eal');
    return;
  }
  
  // Check if the path matches any of the study route patterns
  if (handleStudyRoutes(location, (path) => navigate(path))) {
    return;
  }

  // Handle project routes
  if (handleProjectRoutes(location, (path) => navigate(path))) {
    return;
  }

  // Handle specialisation routes
  if (handleSpecialisationRoutes(location, (path) => navigate(path))) {
    return;
  }

  // Handle mental health routes
  if (handleMentalHealthRoutes(location, (path) => navigate(path))) {
    return;
  }
  
  // Default to browser back if no specific handler matches
  navigate(-1);
};
