
import React from 'react';
import { RouteObject } from 'react-router-dom';
import ApprenticeDashboardPage from "../pages/ApprenticeHub"; // Using existing page
import StudyMaterialsPage from "../pages/StudyMaterialsPage";
import CityGuildsPage from "../pages/CityGuildsPage";
import Level2HomePage from "../pages/Level2CoreUnitsPage"; // Using existing page
import Level3HomePage from "../pages/Level3CoreUnitsPage"; // Using existing page
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
import Unit302SectionPage from "../pages/units/Unit302SectionPage";
import PracticeExamsPage from "../pages/PracticeExamsPage";
import Level3Unit302AssessmentPage from "../pages/Level3Unit302AssessmentPage";
import LearningHubPage from "../pages/LearningHubPage"; // Import the learning hub page

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
    path: "/apprentices/learning-hub", // Add the learning hub route
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
    path: "/apprentices/study-materials/city-guilds/level-3/302/:sectionId",
    element: <Unit302SectionPage />,
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/302/assessment",
    element: <Level3Unit302AssessmentPage />,
  },
];

export default ApprenticeRoutes;

