
import React from 'react';
import { RouteObject } from 'react-router-dom';
import MOETPage from "../../pages/MOETPage";
import MOETCoreKnowledgePage from "../../pages/MOETCoreKnowledgePage";
import MOETBehavioursPage from "../../pages/MOETBehavioursPage";
import MOETAssessmentPage from "../../pages/MOETAssessmentPage";
import BasicElectronicsPage from "../../pages/moet/BasicElectronicsPage";
import CircuitTheoryPage from "../../pages/moet/CircuitTheoryPage";
import CircuitTheorySectionPage from "../../pages/moet/CircuitTheorySectionPage";
import CircuitTheoryAssessmentPage from "../../pages/moet/CircuitTheoryAssessmentPage";
import PowerSystemsPage from "../../pages/moet/PowerSystemsPage";
import ElectricalPrinciplesPage from "../../pages/moet/ElectricalPrinciplesPage";
import MOETEngineeringOperationsPage from "../../pages/MOETEngineeringOperationsPage";
import MOETMaintenancePracticesPage from "../../pages/MOETMaintenancePracticesPage";
import MOETCoreSkillsPage from "../../pages/MOETCoreSkillsPage";

const moetRoutes: RouteObject[] = [
  {
    path: "/apprentices/study-materials/city-guilds/moet",
    element: <MOETPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge",
    element: <MOETCoreKnowledgePage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-skills",
    element: <MOETCoreSkillsPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles",
    element: <ElectricalPrinciplesPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices",
    element: <MOETMaintenancePracticesPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations",
    element: <MOETEngineeringOperationsPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/behaviours",
    element: <MOETBehavioursPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/assessment",
    element: <MOETAssessmentPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics",
    element: <BasicElectronicsPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/circuit-theory",
    element: <CircuitTheoryPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/circuit-theory/:sectionId",
    element: <CircuitTheorySectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/circuit-theory/assessment",
    element: <CircuitTheoryAssessmentPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems",
    element: <PowerSystemsPage />
  },
];

export default moetRoutes;
