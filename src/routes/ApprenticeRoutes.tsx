
import React from 'react';
import { Route } from 'react-router-dom';

import ApprenticeHub from '@/pages/ApprenticeHub';
import LearningHubPage from '@/pages/LearningHubPage';
import StudyMaterialsPage from '@/pages/StudyMaterialsPage';
import CityGuildsPage from '@/pages/CityGuildsPage';
import Level2CoreUnitsPage from '@/pages/Level2CoreUnitsPage';
import Level2ElectricalPage from '@/pages/Level2ElectricalPage';
import Level3ElectricalPage from '@/pages/Level3ElectricalPage';
import Level2SimplifiedPage from '@/pages/Level2SimplifiedPage';
import Level2ExamsPage from '@/pages/Level2ExamsPage';
import Unit202SectionPage from '@/pages/units/Unit202SectionPage';
import Level2Unit202Page from '@/pages/Level2Unit202Page';
import Level2Unit201Page from '@/pages/Level2Unit201Page';
import Level2Unit203Page from '@/pages/Level2Unit203Page';
import Level2Unit204Page from '@/pages/Level2Unit204Page';
import Level2Unit210Page from '@/pages/Level2Unit210Page';
import SectionPage from '@/pages/units/SectionPage';
import Level2SectionPage from '@/pages/units/Level2SectionPage';
import Unit201SectionPage from '@/pages/units/Unit201SectionPage';
import Unit203SectionPage from '@/pages/units/Unit203SectionPage'; 
import Unit204SectionPage from '@/pages/units/Unit204SectionPage';
import UnitContentPage from '@/pages/UnitContentPage';
import ProgressTrackingPage from '@/pages/apprentices/ProgressTrackingPage';
import StudyGroupsPage from '@/pages/StudyGroupsPage';
import StudyGroupDetailsPage from '@/pages/StudyGroupDetailsPage';
import ARLearningPage from '@/pages/ARLearningPage';
import PracticeExamsPage from '@/pages/PracticeExamsPage';

export const ApprenticeRoutes = (
  <>
    <Route path="/apprentices" element={<ApprenticeHub />} />
    <Route path="/apprentices/learning-hub" element={<LearningHubPage />} />
    <Route path="/apprentices/study-materials" element={<StudyMaterialsPage />} />
    <Route path="/apprentices/study-materials/city-guilds" element={<CityGuildsPage />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2" element={<Level2ElectricalPage />} />
    <Route path="/apprentices/study-materials/city-guilds/level-3" element={<Level3ElectricalPage />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/core-units" element={<Level2CoreUnitsPage />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/simplified" element={<Level2SimplifiedPage />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/exams" element={<Level2ExamsPage />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/core-units/202" element={<Level2Unit202Page />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/core-units/201" element={<Level2Unit201Page />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/core-units/203" element={<Level2Unit203Page />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/core-units/204" element={<Level2Unit204Page />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/core-units/210" element={<Level2Unit210Page />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/core-units/202/:sectionId" element={<Unit202SectionPage />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/core-units/201/:sectionId" element={<Unit201SectionPage />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/core-units/203/:sectionId" element={<Unit203SectionPage />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/core-units/204/:sectionId" element={<Unit204SectionPage />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/core-units/:unitId" element={<UnitContentPage />} />
    <Route path="/apprentices/study-materials/city-guilds/level-2/core-units/:unitId/:sectionId" element={<Level2SectionPage />} />
    <Route path="/apprentices/study-materials/city-guilds/level-3/:unitId" element={<UnitContentPage />} />
    <Route path="/apprentices/study-materials/city-guilds/level-3/:unitId/:sectionId" element={<SectionPage />} />
    <Route path="/apprentices/progress-tracking" element={<ProgressTrackingPage />} />
    <Route path="/apprentices/study-groups" element={<StudyGroupsPage />} />
    <Route path="/apprentices/study-groups/:groupId" element={<StudyGroupDetailsPage />} />
    <Route path="/apprentices/ar-learning" element={<ARLearningPage />} />
    <Route path="/apprentices/practice-exams" element={<PracticeExamsPage />} />
  </>
);
