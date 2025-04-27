
import { lazy } from 'react';
import { Route } from 'react-router-dom';

const ApprenticeHub = lazy(() => import('@/pages/ApprenticeHub'));
const LearningHubPage = lazy(() => import('@/pages/LearningHubPage'));
const StudyGroupsPage = lazy(() => import('@/pages/StudyGroupsPage'));
const StudyGroupDetailsPage = lazy(() => import('@/pages/StudyGroupDetailsPage'));
const StudyMaterialsPage = lazy(() => import('@/pages/StudyMaterialsPage'));
const PracticeExamsPage = lazy(() => import('@/pages/PracticeExamsPage'));
const AIToolsPage = lazy(() => import('@/pages/AIToolsPage'));

export const ApprenticeRoutes = [
  <Route key="apprentice-hub" path="/apprentices" element={<ApprenticeHub />} />,
  <Route key="learning-hub" path="/apprentices/learning-hub" element={<LearningHubPage />} />,
  <Route key="study-groups" path="/apprentices/study-groups" element={<StudyGroupsPage />} />,
  <Route key="study-group-details" path="/apprentices/study-groups/:groupId" element={<StudyGroupDetailsPage />} />,
  <Route key="study-materials" path="/apprentices/study-materials" element={<StudyMaterialsPage />} />,
  <Route key="practice-exams" path="/apprentices/practice-exams" element={<PracticeExamsPage />} />,
  <Route key="ai-tools" path="/apprentices/ai-tools" element={<AIToolsPage />} />
];
