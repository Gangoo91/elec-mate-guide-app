
import { RouteObject } from 'react-router-dom';
import apprenticeMainRoutes from './main-routes';
import moetRoutes from './moet-routes';
import level2Routes from './level2-routes';
import level3Routes from './level3-routes';
import am2Routes from './am2-routes';
import ealRoutes from './eal-routes';
import mentorshipRoutes from '../mentorship/mentorshipRoutes';

// Combine all apprentice routes
const ApprenticeRoutes: RouteObject[] = [
  ...apprenticeMainRoutes,
  ...moetRoutes,
  ...level2Routes,
  ...level3Routes,
  ...am2Routes,
  ...ealRoutes,
  ...mentorshipRoutes.filter(route => route.path?.startsWith('/apprentices'))
];

export default ApprenticeRoutes;
