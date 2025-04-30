
import React from 'react';
import { RouteObject } from 'react-router-dom';
import AM2HomePage from "../../pages/AM2Page";
import AM2CoreUnitsPage from "../../pages/AM2CoreUnitsPage";
import AM2MockExamsPage from "../../pages/AM2MockExamsPage";

const am2Routes: RouteObject[] = [
  {
    path: "/apprentices/study-materials/city-guilds/am2",
    element: <AM2HomePage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/am2/core-units",
    element: <AM2CoreUnitsPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/am2/mock-exams",
    element: <AM2MockExamsPage />
  }
];

export default am2Routes;
