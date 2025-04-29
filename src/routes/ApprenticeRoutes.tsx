import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ApprenticeDashboard from "@/pages/apprentices/ApprenticeDashboard";
import StudyMaterialsPage from "@/pages/apprentices/StudyMaterialsPage";
import Level2SimplifiedPage from "@/pages/apprentices/level2/Level2SimplifiedPage";
import Level2CoreUnitsPage from "@/pages/apprentices/level2/Level2CoreUnitsPage";
import Level2ElectricalPage from "@/pages/apprentices/level2/Level2ElectricalPage";
import Level2ExamsPage from "@/pages/apprentices/level2/Level2ExamsPage";
import Level3HomePage from "@/pages/apprentices/level3/Level3HomePage";
import Level3Unit301Page from "@/pages/apprentices/level3/Level3Unit301Page";
import Level3Unit303Page from "@/pages/apprentices/level3/Level3Unit303Page";
import Level3Unit304Page from "@/pages/apprentices/level3/Level3Unit304Page";
import Level3Unit305Page from "@/pages/apprentices/level3/Level3Unit305Page";
import Level3Unit308Page from "@/pages/apprentices/level3/Level3Unit308Page";
import Unit301SectionPage from "@/pages/units/Unit301SectionPage";
import Unit303SectionPage from "@/pages/units/Unit303SectionPage";
import Unit304SectionPage from "@/pages/units/Unit304SectionPage";
import Unit305SectionPage from "@/pages/units/Unit305SectionPage";
import Unit308SectionPage from "@/pages/units/Unit308SectionPage";
import Level2Unit201Page from "@/pages/Level2Unit201Page";
import Level2Unit202Page from "@/pages/Level2Unit202Page";
import Level2Unit203Page from "@/pages/Level2Unit203Page";
import Level2Unit204Page from "@/pages/Level2Unit204Page";
import Level2Unit210Page from "@/pages/Level2Unit210Page";
import Unit201SectionPage from "@/pages/units/Unit201SectionPage";
import Unit202SectionPage from "@/pages/units/Unit202SectionPage";
import Unit203SectionPage from "@/pages/units/Unit203SectionPage";
import Unit204SectionPage from "@/pages/units/Unit204SectionPage";
import Unit210SectionPage from "@/pages/units/Unit210SectionPage";
import UnitContentPage from "@/pages/UnitContentPage";
import Level2Unit201AssessmentPage from "@/pages/Level2Unit201AssessmentPage";

const ApprenticeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ApprenticeDashboard />} />
      <Route path="dashboard" element={<ApprenticeDashboard />} />
      <Route path="study-materials" element={<StudyMaterialsPage />} />
      
      {/* Level 3 Routes */}
      <Route path="study-materials/city-guilds/level-3" element={<Level3HomePage />} />
      <Route path="study-materials/city-guilds/level-3/301" element={<Level3Unit301Page />} />
      <Route path="study-materials/city-guilds/level-3/301/:sectionId" element={<Unit301SectionPage />} />
      <Route path="study-materials/city-guilds/level-3/303" element={<Level3Unit303Page />} />
      <Route path="study-materials/city-guilds/level-3/303/:sectionId" element={<Unit303SectionPage />} />
      <Route path="study-materials/city-guilds/level-3/304" element={<Level3Unit304Page />} />
      <Route path="study-materials/city-guilds/level-3/304/:sectionId" element={<Unit304SectionPage />} />
      <Route path="study-materials/city-guilds/level-3/305" element={<Level3Unit305Page />} />
      <Route path="study-materials/city-guilds/level-3/305/:sectionId" element={<Unit305SectionPage />} />
      <Route path="study-materials/city-guilds/level-3/308" element={<Level3Unit308Page />} />
      <Route path="study-materials/city-guilds/level-3/308/:sectionId" element={<Unit308SectionPage />} />
      <Route path="study-materials/city-guilds/level-3/:unitId" element={<UnitContentPage />} />
      
      {/* Level 2 Routes */}
      <Route path="study-materials/city-guilds/level-2" element={<Level2SimplifiedPage />} />
      <Route path="study-materials/city-guilds/level-2/core-units" element={<Level2CoreUnitsPage />} />
      <Route path="study-materials/city-guilds/level-2/electrical" element={<Level2ElectricalPage />} />
      <Route path="study-materials/city-guilds/level-2/exams" element={<Level2ExamsPage />} />
      
      {/* Level 2 Unit Pages */}
      <Route path="study-materials/city-guilds/level-2/201" element={<Level2Unit201Page />} />
      <Route path="study-materials/city-guilds/level-2/201/assessment" element={<Level2Unit201AssessmentPage />} />
      <Route path="study-materials/city-guilds/level-2/201/:sectionId" element={<Unit201SectionPage />} />
      <Route path="study-materials/city-guilds/level-2/202" element={<Level2Unit202Page />} />
      <Route path="study-materials/city-guilds/level-2/202/:sectionId" element={<Unit202SectionPage />} />
      <Route path="study-materials/city-guilds/level-2/203" element={<Level2Unit203Page />} />
      <Route path="study-materials/city-guilds/level-2/203/:sectionId" element={<Unit203SectionPage />} />
      <Route path="study-materials/city-guilds/level-2/204" element={<Level2Unit204Page />} />
      <Route path="study-materials/city-guilds/level-2/204/:sectionId" element={<Unit204SectionPage />} />
      <Route path="study-materials/city-guilds/level-2/210" element={<Level2Unit210Page />} />
      <Route path="study-materials/city-guilds/level-2/210/:sectionId" element={<Unit210SectionPage />} />
    </Routes>
  );
};

export default ApprenticeRoutes;
