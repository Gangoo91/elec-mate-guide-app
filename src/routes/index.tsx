
import React from 'react';
import { RouteObject } from 'react-router-dom';
import ApprenticeRoutes from './apprentice';
import { ElectricianRoutes } from './ElectricianRoutes';
import { createRoutesFromElements } from 'react-router-dom';

// Combine all routes
const routes: RouteObject[] = [
  ...ApprenticeRoutes,
  ...createRoutesFromElements(ElectricianRoutes)
];

export default routes;
