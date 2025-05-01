
import React from 'react';
import { RouteObject } from 'react-router-dom';
import EALPage from "../../pages/EALPage";
import ElectricalInstallationUnitPage from "../../pages/units/ElectricalInstallationUnitPage";

const ealRoutes: RouteObject[] = [
  {
    path: "/apprentices/study-materials/eal",
    element: <EALPage />
  },
  {
    path: "/apprentices/study-materials/eal/level-2/installation-technology",
    element: <ElectricalInstallationUnitPage />
  },
  // Additional EAL routes can be added here
];

export default ealRoutes;
