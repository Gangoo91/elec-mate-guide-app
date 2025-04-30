
import { RouteObject } from 'react-router-dom';
import apprenticeMainRoutes from './main-routes';
import moetRoutes from './moet-routes';
import level2Routes from './level2-routes';
import level3Routes from './level3-routes';
import am2Routes from './am2-routes';

// Combine all apprentice routes
const ApprenticeRoutes: RouteObject[] = [
  ...apprenticeMainRoutes,
  ...moetRoutes,
  ...level2Routes,
  ...level3Routes,
  ...am2Routes
];

export default ApprenticeRoutes;
