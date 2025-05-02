
import React from 'react';
import { RouteObject } from 'react-router-dom';
import EALPage from "../../pages/EALPage";
import EALQualificationsPage from "../../pages/EALQualificationsPage";
import ElectricalInstallationUnitPage from "../../pages/units/ElectricalInstallationUnitPage";
import EALLevel2Page from "../../pages/EALLevel2Page";
import EALLevel3Page from "../../pages/EALLevel3Page";
import EALInspectionTestingPage from "../../pages/EALInspectionTestingPage";
import EALEVInstallationPage from "../../pages/EALEVInstallationPage";
import EALHazardousAreasPage from "../../pages/EALHazardousAreasPage";
import EALBuildingControlsPage from "../../pages/EALBuildingControlsPage";
import EALAssessmentPage from "../../pages/EALAssessmentPage";
import EALMOETPage from "../../pages/EALMOETPage";

const ealRoutes: RouteObject[] = [
  {
    path: "/apprentices/study-materials/eal",
    element: <EALPage />
  },
  {
    path: "/apprentices/study-materials/eal/qualifications",
    element: <EALQualificationsPage />
  },
  {
    path: "/apprentices/study-materials/eal/level-2",
    element: <EALLevel2Page />
  },
  {
    path: "/apprentices/study-materials/eal/level-3",
    element: <EALLevel3Page />
  },
  {
    path: "/apprentices/study-materials/eal/inspection-testing",
    element: <EALInspectionTestingPage />
  },
  {
    path: "/apprentices/study-materials/eal/ev-installation",
    element: <EALEVInstallationPage />
  },
  {
    path: "/apprentices/study-materials/eal/hazardous-areas",
    element: <EALHazardousAreasPage />
  },
  {
    path: "/apprentices/study-materials/eal/building-controls",
    element: <EALBuildingControlsPage />
  },
  {
    path: "/apprentices/study-materials/eal/assessment",
    element: <EALAssessmentPage />
  },
  {
    path: "/apprentices/study-materials/eal/moet",
    element: <EALMOETPage />
  },
  {
    path: "/apprentices/study-materials/eal/level-2/installation-technology",
    element: <ElectricalInstallationUnitPage />
  },
  // Additional EAL routes can be added here
];

export default ealRoutes;
