
import React from 'react';
import { RouteObject } from 'react-router-dom';
import LearningHubPage from "@/pages/LearningHubPage";
import ApprenticesPage from "@/pages/ApprenticesPage";
import MOETPage from "@/pages/MOETPage";
import StudyMaterialsPage from "@/pages/StudyMaterialsPage";
import ProgressTrackingPage from "@/pages/apprentices/ProgressTrackingPage";

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
    path: '/apprentices/study-materials',
    element: <StudyMaterialsPage />
  },
  {
    path: '/apprentices/study-materials/city-guilds/moet',
    element: <MOETPage />
  },
  {
    path: '/apprentices/progress',
    element: <ProgressTrackingPage />
  },
  {
    path: '/apprentices/progress/off-the-job',
    element: <ProgressTrackingPage />
  }
];

export default apprenticeMainRoutes;
