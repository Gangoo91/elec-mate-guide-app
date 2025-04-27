
import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import LoadingSpinner from "@/components/LoadingSpinner";

// Use consistent lazy loading for all components
const ApprenticeHub = lazy(() => import('@/pages/ApprenticeHub'));
const LearningHubPage = lazy(() => import('@/pages/LearningHubPage'));
const StudyGroupsPage = lazy(() => import('@/pages/StudyGroupsPage'));
const StudyGroupDetailsPage = lazy(() => import('@/pages/StudyGroupDetailsPage'));
const StudyMaterialsPage = lazy(() => import('@/pages/StudyMaterialsPage'));
const PracticeExamsPage = lazy(() => import('@/pages/PracticeExamsPage'));
const AIToolsPage = lazy(() => import('@/pages/AIToolsPage'));
const VideoDemonstrationsPage = lazy(() => import('@/pages/VideoDemonstrationsPage'));

// Wrap lazy components in suspense
const withSuspense = (Component) => (
  <Suspense fallback={<div className="w-full h-full min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
    {Component}
  </Suspense>
);

export const ApprenticeRoutes = [
  <Route key="apprentice-hub" path="/apprentices" element={withSuspense(<ApprenticeHub />)} />,
  <Route key="learning-hub" path="/apprentices/learning-hub" element={withSuspense(<LearningHubPage />)} />,
  <Route key="study-groups" path="/apprentices/study-groups" element={withSuspense(<StudyGroupsPage />)} />,
  <Route key="study-group-details" path="/apprentices/study-groups/:groupId" element={withSuspense(<StudyGroupDetailsPage />)} />,
  <Route key="study-materials" path="/apprentices/study-materials" element={withSuspense(<StudyMaterialsPage />)} />,
  <Route key="practice-exams" path="/apprentices/practice-exams" element={withSuspense(<PracticeExamsPage />)} />,
  <Route key="ai-tools" path="/apprentices/ai-tools" element={withSuspense(<AIToolsPage />)} />,
  <Route key="video-demonstrations" path="/apprentices/video-demonstrations" element={withSuspense(<VideoDemonstrationsPage />)} />
];
