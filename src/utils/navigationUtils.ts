
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
