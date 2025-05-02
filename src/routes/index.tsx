
import React from 'react';
import { RouteObject } from 'react-router-dom';
import ApprenticeRoutes from './apprentice';
import { ElectricianRoutes } from './ElectricianRoutes';
import { createRoutesFromElements } from 'react-router-dom';
import Welcome from '@/pages/Welcome';
import Dashboard from '@/pages/Dashboard';
import NotFound from '@/pages/NotFound';
import SubscriptionGuard from '@/components/guards/SubscriptionGuard';

// Combine all routes
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/tutors',
    element: (
      <SubscriptionGuard requiredTier="Electrician">
        <NotFound />
      </SubscriptionGuard>
    )
  },
  {
    path: '/tutors/apply',
    element: (
      <SubscriptionGuard requiredTier="Electrician">
        <NotFound />
      </SubscriptionGuard>
    )
  },
  ...ApprenticeRoutes,
  ...createRoutesFromElements(ElectricianRoutes)
];

export default routes;
