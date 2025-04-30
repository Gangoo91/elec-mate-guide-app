
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Level3HomePage from "../../pages/Level3CoreUnitsPage";
import Level3ElectricalPage from "../../pages/Level3ElectricalPage";
import Level3Unit301Page from "../../pages/Level3Unit301Page";
import Level3Unit302Page from "../../pages/Level3Unit302Page";
import Level3Unit303Page from "../../pages/Level3Unit303Page";
import Level3Unit304Page from "../../pages/Level3Unit304Page";
import Level3Unit305Page from "../../pages/Level3Unit305Page";
import Level3Unit308Page from "../../pages/Level3Unit308Page";
import Unit302SectionPage from "../../pages/units/Unit302SectionPage";
import Unit303SectionPage from "../../pages/units/Unit303SectionPage";
import Unit304SectionPage from "../../pages/units/Unit304SectionPage";
import Unit305SectionPage from "../../pages/units/Unit305SectionPage";
import Unit308SectionPage from "../../pages/units/Unit308SectionPage";
import Level3Unit301AssessmentPage from "../../pages/Level3Unit301AssessmentPage";
import Level3Unit302AssessmentPage from "../../pages/Level3Unit302AssessmentPage";
import Level3Unit303AssessmentPage from "../../pages/Level3Unit303AssessmentPage";
import Level3Unit304AssessmentPage from "../../pages/Level3Unit304AssessmentPage";
import Level3Unit305AssessmentPage from "../../pages/Level3Unit305AssessmentPage";

const level3Routes: RouteObject[] = [
  {
    path: "/apprentices/study-materials/city-guilds/level-3",
    element: <Level3ElectricalPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/core-units",
    element: <Level3HomePage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/301",
    element: <Level3Unit301Page />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/302",
    element: <Level3Unit302Page />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/303",
    element: <Level3Unit303Page />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/304",
    element: <Level3Unit304Page />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/305",
    element: <Level3Unit305Page />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/308",
    element: <Level3Unit308Page />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/302/:sectionId",
    element: <Unit302SectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/303/:sectionId",
    element: <Unit303SectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/304/:sectionId",
    element: <Unit304SectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/305/:sectionId",
    element: <Unit305SectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/308/:sectionId",
    element: <Unit308SectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/301/assessment",
    element: <Level3Unit301AssessmentPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/302/assessment",
    element: <Level3Unit302AssessmentPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/303/assessment",
    element: <Level3Unit303AssessmentPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/304/assessment",
    element: <Level3Unit304AssessmentPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/level-3/305/assessment",
    element: <Level3Unit305AssessmentPage />
  },
];

export default level3Routes;
