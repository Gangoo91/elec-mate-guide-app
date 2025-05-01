
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Level2HomePage from "../../pages/Level2CoreUnitsPage";
import UnitContentPage from "../../pages/UnitContentPage";
import Level2Unit201Page from "../../pages/Level2Unit201Page";
import Level2Unit202Page from "../../pages/Level2Unit202Page";
import Level2Unit203Page from "../../pages/Level2Unit203Page";
import Level2Unit204Page from "../../pages/Level2Unit204Page";
import Level2Unit210Page from "../../pages/Level2Unit210Page";
import Unit201SectionPage from "../../pages/units/Unit201SectionPage";
import Unit204SectionPage from "../../pages/units/Unit204SectionPage";
import Unit210SectionPage from "../../pages/units/Unit210SectionPage";
import Level2Unit201AssessmentPage from "../../pages/Level2Unit201AssessmentPage";
import ElectricalInstallationUnitPage from "../../pages/units/ElectricalInstallationUnitPage";

const level2Routes: RouteObject[] = [
  {
    path: "/apprentices/study-materials/city-guilds/level-2",
    element: <Level2HomePage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/core-units/:unitId",
    element: <UnitContentPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/201",
    element: <Level2Unit201Page />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/201/:sectionId",
    element: <Unit201SectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/202",
    element: <Level2Unit202Page />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/203",
    element: <Level2Unit203Page />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/204",
    element: <Level2Unit204Page />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/core-units/204/:sectionId",
    element: <Unit204SectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/201/assessment",
    element: <Level2Unit201AssessmentPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/210",
    element: <Level2Unit210Page />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/core-units/210",
    element: <Level2Unit210Page />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-2/core-units/210/:sectionId",
    element: <Unit210SectionPage />
  },
  // New EAL specific routes
  {
    path: "/apprentices/study-materials/eal/level-2/installation-technology",
    element: <ElectricalInstallationUnitPage />
  }
];

export default level2Routes;
