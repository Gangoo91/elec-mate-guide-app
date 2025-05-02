
import React from 'react';
import { RouteObject } from 'react-router-dom';
import ApprenticeRoutes from './apprentice';
import { ElectricianRoutes } from './ElectricianRoutes';

// Combine all routes
const routes: RouteObject[] = [
  ...ApprenticeRoutes,
  ...ElectricianRoutes,
];

export default routes;
