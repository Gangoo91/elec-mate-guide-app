
import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import LoadingSpinner from "@/components/LoadingSpinner";

// Use consistent lazy loading for all components
const ApprenticeHub = lazy(() => import('@/pages/ApprenticeHub'));
const LearningHubPage = lazy(() => import('@/pages/LearningHubPage'));
const StudyGroupsPage = lazy(() => import('@/pages/StudyGroupsPage'));
const StudyGroupDetailsPage = lazy(() => import('@/pages/StudyGroupDetailsPage'));
const StudyMaterialsPage = lazy(() => import('@/pages/StudyMaterialsPage'));
const CityGuildsPage = lazy(() => import('@/pages/CityGuildsPage'));
const Level2ElectricalPage = lazy(() => import('@/pages/Level2ElectricalPage'));
const Level2CoreUnitsPage = lazy(() => import('@/pages/Level2CoreUnitsPage'));
const Level2SimplifiedPage = lazy(() => import('@/pages/Level2SimplifiedPage'));
const Level2ExamsPage = lazy(() => import('@/pages/Level2ExamsPage'));
const EALQualificationsPage = lazy(() => import('@/pages/EALQualificationsPage'));
const MOETPage = lazy(() => import('@/pages/MOETPage'));
const PracticeExamsPage = lazy(() => import('@/pages/PracticeExamsPage'));
const AIToolsPage = lazy(() => import('@/pages/AIToolsPage'));
const VideoDemonstrationsPage = lazy(() => import('@/pages/VideoDemonstrationsPage'));
const ARLearningPage = lazy(() => import('@/pages/ARLearningPage'));
const AudioTutorialsPage = lazy(() => import('@/pages/AudioTutorialsPage'));
const ProgressTrackingPage = lazy(() => import('@/pages/apprentices/ProgressTrackingPage'));
const UnitContentPage = lazy(() => import('@/pages/UnitContentPage'));

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
  <Route key="city-guilds" path="/apprentices/study-materials/city-guilds" element={withSuspense(<CityGuildsPage />)} />,
  <Route key="level2-electrical" path="/apprentices/study-materials/city-guilds/level-2" element={withSuspense(<Level2ElectricalPage />)} />,
  <Route key="level2-core-units" path="/apprentices/study-materials/city-guilds/level-2/core-units" element={withSuspense(<Level2CoreUnitsPage />)} />,
  <Route key="level2-simplified" path="/apprentices/study-materials/city-guilds/level-2/simplified" element={withSuspense(<Level2SimplifiedPage />)} />,
  <Route key="level2-exams" path="/apprentices/study-materials/city-guilds/level-2/exams" element={withSuspense(<Level2ExamsPage />)} />,
  <Route key="eal-qualifications" path="/apprentices/study-materials/eal" element={withSuspense(<EALQualificationsPage />)} />,
  <Route key="moet" path="/apprentices/study-materials/city-guilds/moet" element={withSuspense(<MOETPage />)} />,
  <Route key="practice-exams" path="/apprentices/practice-exams" element={withSuspense(<PracticeExamsPage />)} />,
  <Route key="ai-tools" path="/apprentices/ai-tools" element={withSuspense(<AIToolsPage />)} />,
  <Route key="video-demonstrations" path="/apprentices/video-demonstrations" element={withSuspense(<VideoDemonstrationsPage />)} />,
  <Route key="ar-learning" path="/apprentices/ar-learning" element={withSuspense(<ARLearningPage />)} />,
  <Route key="audio-tutorials" path="/apprentices/audio-tutorials" element={withSuspense(<AudioTutorialsPage />)} />,
  <Route key="progress-tracking" path="/apprentices/progress" element={withSuspense(<ProgressTrackingPage />)} />,
  // Add route for individual unit pages
  <Route key="unit-content" path="/apprentices/study-materials/city-guilds/level-2/core-units/:unitId" element={withSuspense(<UnitContentPage />)} />
];
