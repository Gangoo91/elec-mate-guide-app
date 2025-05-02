
import React from 'react';
import { RouteObject } from 'react-router-dom';
import LearningHubPage from "@/pages/LearningHubPage";
import ApprenticesPage from "@/pages/ApprenticesPage";
import MOETPage from "@/pages/MOETPage";

// Main apprentice routes
const apprenticeMainRoutes: RouteObject[] = [
  {
    path: '/apprentices',
    element: <ApprenticesPage />
  },
  {
    path: '/apprentices/learning-hub',
    element: <LearningHubPage />
  },
  {
    path: '/apprentices/study-materials/city-guilds/moet',
    element: <MOETPage />
  }
];

export default apprenticeMainRoutes;
