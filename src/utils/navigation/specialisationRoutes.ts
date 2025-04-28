
import { Location } from 'react-router-dom';

export const handleSpecialisationRoutes = (
  location: Location,
  navigate: (to: string) => void
): boolean => {
  // Handle specialisation case study pattern
  if (location.pathname.match(/\/electricians\/specialisations\/[a-z-]+\/case-studies\/[a-z-]+$/)) {
    const specialisationPath = location.pathname.split('/case-studies/')[0];
    console.log(`Navigation: Navigating back to specialization: ${specialisationPath}`);
    navigate(specialisationPath);
    return true;
  }

  // Handle specialisation pattern
  if (location.pathname.match(/\/electricians\/specialisations\/[a-z-]+$/)) {
    console.log("Navigation: Navigating to specialisations");
    navigate('/electricians/development/specialisations');
    return true;
  }

  return false;
};
