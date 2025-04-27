
import { lazy } from 'react';

const ApprenticeHub = lazy(() => import('@/pages/ApprenticeHub'));
const LearningHubPage = lazy(() => import('@/pages/LearningHubPage'));
const StudyGroupsPage = lazy(() => import('@/pages/StudyGroupsPage'));
const StudyGroupDetailsPage = lazy(() => import('@/pages/StudyGroupDetailsPage'));
const StudyMaterialsPage = lazy(() => import('@/pages/StudyMaterialsPage'));
const PracticeExamsPage = lazy(() => import('@/pages/PracticeExamsPage'));
const AIToolsPage = lazy(() => import('@/pages/AIToolsPage'));

export const ApprenticeRoutes = [
  {
    path: '/apprentices',
    element: <ApprenticeHub />
  },
  {
    path: '/apprentices/learning-hub',
    element: <LearningHubPage />
  },
  {
    path: '/apprentices/study-groups',
    element: <StudyGroupsPage />
  },
  {
    path: '/apprentices/study-groups/:groupId',
    element: <StudyGroupDetailsPage />
  },
  {
    path: '/apprentices/study-materials',
    element: <StudyMaterialsPage />
  },
  {
    path: '/apprentices/practice-exams',
    element: <PracticeExamsPage />
  },
  {
    path: '/apprentices/ai-tools',
    element: <AIToolsPage />
  }
];
