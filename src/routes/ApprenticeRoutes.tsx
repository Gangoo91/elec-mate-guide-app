import React from 'react';
import { RouteObject } from 'react-router-dom';
import ApprenticeDashboardPage from "../pages/ApprenticeHub"; // Using existing page
import StudyMaterialsPage from "../pages/StudyMaterialsPage";
import CityGuildsPage from "../pages/CityGuildsPage";
import Level2HomePage from "../pages/Level2CoreUnitsPage"; // Using existing page
import Level3HomePage from "../pages/Level3CoreUnitsPage"; // Using existing page
import Level3ElectricalPage from "../pages/Level3ElectricalPage"; // Import the Level3ElectricalPage
import MOETHomePage from "../pages/MOETPage"; // Using existing page
import AM2HomePage from "../pages/AM2Page"; // Using existing page
import UnitContentPage from "../pages/UnitContentPage";
import Level2Unit201Page from "../pages/Level2Unit201Page";
import Level2Unit202Page from "../pages/Level2Unit202Page";
import Level2Unit203Page from "../pages/Level2Unit203Page";
import Level2Unit204Page from "../pages/Level2Unit204Page";
import Level2Unit210Page from "../pages/Level2Unit210Page";
import Level3Unit301Page from "../pages/Level3Unit301Page";
import Level3Unit302Page from "../pages/Level3Unit302Page";
import Level3Unit303Page from "../pages/Level3Unit303Page"; 
import Level3Unit304Page from "../pages/Level3Unit304Page";
import Level3Unit305Page from "../pages/Level3Unit305Page";
import Level3Unit308Page from "../pages/Level3Unit308Page"; // Add import for Unit 308
import Unit201SectionPage from "../pages/units/Unit201SectionPage";
import Unit302SectionPage from "../pages/units/Unit302SectionPage";
import Unit303SectionPage from "../pages/units/Unit303SectionPage"; 
import Unit304SectionPage from "../pages/units/Unit304SectionPage"; 
import Unit305SectionPage from "../pages/units/Unit305SectionPage";
import Unit308SectionPage from "../pages/units/Unit308SectionPage"; // Import Unit308SectionPage
import PracticeExamsPage from "../pages/PracticeExamsPage";
import Level2Unit201AssessmentPage from "../pages/Level2Unit201AssessmentPage";
import Level3Unit301AssessmentPage from "../pages/Level3Unit301AssessmentPage";
import Level3Unit302AssessmentPage from "../pages/Level3Unit302AssessmentPage";
import Level3Unit303AssessmentPage from "../pages/Level3Unit303AssessmentPage";
import Level3Unit304AssessmentPage from "../pages/Level3Unit304AssessmentPage";
import Level3Unit305AssessmentPage from "../pages/Level3Unit305AssessmentPage";
import LearningHubPage from "../pages/LearningHubPage";

const ApprenticeRoutes: RouteObject[] = [
  {
    path: "/apprentices",
    element: <ApprenticeDashboardPage />,
  },
  {
    path: "/apprentices/dashboard",
    element: <ApprenticeDashboardPage />,
  },
  {
    path: "/apprentices/learning-hub",
    element: <LearningHubPage />,
  },
  {
    path: "/apprentices/study-materials",
    element: <StudyMaterialsPage />,
  },
  {
    path: "/apprentices/practice-exams",
    element: <PracticeExamsPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds",
    element: <CityGuildsPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2",
    element: <Level2HomePage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3",
    element: <Level3ElectricalPage />, // Make sure this is Level3ElectricalPage
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/core-units",
    element: <Level3HomePage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet",
    element: <MOETHomePage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/am2",
    element: <AM2HomePage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/core-units/:unitId",
    element: <UnitContentPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/201",
    element: <Level2Unit201Page />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/201/:sectionId",
    element: <Unit201SectionPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/202",
    element: <Level2Unit202Page />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/203",
    element: <Level2Unit203Page />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/204",
    element: <Level2Unit204Page />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/210",
    element: <Level2Unit210Page />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/301",
    element: <Level3Unit301Page />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/302",
    element: <Level3Unit302Page />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/303",
    element: <Level3Unit303Page />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/304",
    element: <Level3Unit304Page />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/305",
    element: <Level3Unit305Page />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/308",
    element: <Level3Unit308Page />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/302/:sectionId",
    element: <Unit302SectionPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/303/:sectionId",
    element: <Unit303SectionPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/304/:sectionId",
    element: <Unit304SectionPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/305/:sectionId",
    element: <Unit305SectionPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/308/:sectionId",
    element: <Unit308SectionPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/301/assessment",
    element: <Level3Unit301AssessmentPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/302/assessment",
    element: <Level3Unit302AssessmentPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/303/assessment",
    element: <Level3Unit303AssessmentPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/304/assessment",
    element: <Level3Unit304AssessmentPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/305/assessment",
    element: <Level3Unit305AssessmentPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/201/assessment",
    element: <Level2Unit201AssessmentPage />,
  },
];

export default ApprenticeRoutes;
