
import React from 'react';
import { RouteObject } from 'react-router-dom';
import ApprenticeRoutes from './apprentice';
import { ElectricianRoutes } from './ElectricianRoutes';
import { createRoutesFromElements } from 'react-router-dom';
import Welcome from '@/pages/Welcome';
import ApprenticeHub from "@/pages/ApprenticeHub";
import LearningHubPage from "@/pages/LearningHubPage";
import LeaderboardsPage from "@/pages/LeaderboardsPage";
import Dashboard from '@/pages/Dashboard';
import TutorsPage from '@/pages/TutorsPage';
import NotFound from '@/pages/NotFound';

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
    path: "/apprentices",
    element: <ApprenticeHub />
  },
  {
    path: "/apprentices/learning-hub",
    element: <LearningHubPage />
  },
  {
    path: "/leaderboards",
    element: <LeaderboardsPage />
  },
  {
    path: "/tutors",
    element: <TutorsPage />
  },
  ...ApprenticeRoutes,
  ...createRoutesFromElements(ElectricianRoutes)
];

export default routes;
