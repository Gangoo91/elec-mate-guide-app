
import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import ApprenticeRoutes from './apprentice';
import { ElectricianRoutes } from './ElectricianRoutes';
import { createRoutesFromElements } from 'react-router-dom';
import Welcome from '@/pages/Welcome';
import Dashboard from '@/pages/Dashboard';
import NotFound from '@/pages/NotFound';
import SubscriptionGuard from '@/components/guards/SubscriptionGuard';

// Combine all routes with correct prioritization
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />
  },
  {
    path: '/dashboard',
    element: <Dashboard key="dashboard-main" />
  },
  {
    path: '/welcome',
    element: <Welcome />
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
