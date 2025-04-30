import React from 'react';
import { RouteObject } from 'react-router-dom';
import MOETPage from "../../pages/MOETPage";
import MOETCoreKnowledgePage from "../../pages/MOETCoreKnowledgePage";
import MOETCoreSkillsPage from "../../pages/MOETCoreSkillsPage";
import MOETBehavioursPage from "../../pages/MOETBehavioursPage";
import MOETAssessmentPage from "../../pages/MOETAssessmentPage";
import PracticalObservationsPage from "../../pages/assessment/PracticalObservationsPage";
import TechnicalInterviewsPage from "../../pages/assessment/TechnicalInterviewsPage";
import PortfolioReviewPage from "../../pages/assessment/PortfolioReviewPage";
import BasicElectronicsPage from "../../pages/moet/BasicElectronicsPage";
import BasicElectronicsSectionPage from "../../pages/moet/BasicElectronicsSectionPage";
import BasicElectronicsAssessmentPage from "../../pages/moet/BasicElectronicsAssessmentPage";
import CircuitTheoryPage from "../../pages/moet/CircuitTheoryPage";
import CircuitTheorySectionPage from "../../pages/moet/CircuitTheorySectionPage";
import CircuitTheoryAssessmentPage from "../../pages/moet/CircuitTheoryAssessmentPage";
import PowerSystemsPage from "../../pages/moet/PowerSystemsPage";
import PowerSystemsSectionPage from "../../pages/moet/PowerSystemsSectionPage";
import PowerSystemsAssessmentPage from "../../pages/moet/PowerSystemsAssessmentPage";
import ElectricalPrinciplesPage from "../../pages/moet/ElectricalPrinciplesPage";
import MOETEngineeringOperationsPage from "../../pages/MOETEngineeringOperationsPage";
import MOETMaintenancePracticesPage from "../../pages/MOETMaintenancePracticesPage";
import PreventiveMaintenancePage from "../../pages/maintenance/PreventiveMaintenancePage";
import PreventiveMaintenanceSectionPage from "../../pages/maintenance/PreventiveMaintenanceSectionPage";
import SafetyProtocolsPage from "../../pages/maintenance/SafetyProtocolsPage";
import DocumentationPage from "../../pages/maintenance/DocumentationPage";
import SystemOperationsPage from "../../pages/engineering/SystemOperationsPage";
import InstallationPlanningPage from "../../pages/engineering/InstallationPlanningPage";
import TechnicalDocumentationPage from "../../pages/engineering/TechnicalDocumentationPage";
import ElectricalMaintenancePage from "../../pages/moet/ElectricalMaintenancePage";
import ElectricalMaintenanceSectionPage from "../../pages/moet/ElectricalMaintenanceSectionPage";
import FaultFindingPage from "../../pages/moet/FaultFindingPage";
import FaultFindingSectionPage from "../../pages/moet/FaultFindingSectionPage";
import EquipmentInstallationPage from "../../pages/moet/EquipmentInstallationPage";
import EquipmentInstallationSectionPage from "../../pages/moet/EquipmentInstallationSectionPage";
import ProfessionalConductPage from "../../pages/moet/ProfessionalConductPage";
import ProfessionalConductSectionPage from "../../pages/moet/ProfessionalConductSectionPage";
import SafetyAwarenessPage from "../../pages/moet/SafetyAwarenessPage";
import SafetyAwarenessSectionPage from "../../pages/moet/SafetyAwarenessSectionPage";
import TeamworkPage from "../../pages/moet/Teamwork";

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
    path: "/apprentices/study-materials/city-guilds/moet/core-skills/electrical-maintenance",
    element: <ElectricalMaintenancePage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-skills/electrical-maintenance/:sectionId",
    element: <ElectricalMaintenanceSectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-skills/fault-finding",
    element: <FaultFindingPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-skills/fault-finding/:sectionId",
    element: <FaultFindingSectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-skills/equipment-installation",
    element: <EquipmentInstallationPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-skills/equipment-installation/:sectionId",
    element: <EquipmentInstallationSectionPage />
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
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices/preventive",
    element: <PreventiveMaintenancePage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices/preventive/:sectionId",
    element: <PreventiveMaintenanceSectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices/safety",
    element: <SafetyProtocolsPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices/documentation",
    element: <DocumentationPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations",
    element: <MOETEngineeringOperationsPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/system-operations",
    element: <SystemOperationsPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/installation-planning",
    element: <InstallationPlanningPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/technical-documentation",
    element: <TechnicalDocumentationPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/behaviours",
    element: <MOETBehavioursPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/behaviours/professional-conduct",
    element: <ProfessionalConductPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/behaviours/professional-conduct/:sectionId",
    element: <ProfessionalConductSectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/behaviours/safety-awareness",
    element: <SafetyAwarenessPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/behaviours/safety-awareness/:sectionId",
    element: <SafetyAwarenessSectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/behaviours/teamwork",
    element: <TeamworkPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/assessment",
    element: <MOETAssessmentPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/assessment/practical-observations",
    element: <PracticalObservationsPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/assessment/technical-interviews",
    element: <TechnicalInterviewsPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/assessment/portfolio-review",
    element: <PortfolioReviewPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics",
    element: <BasicElectronicsPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics/:sectionId",
    element: <BasicElectronicsSectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics/assessment",
    element: <BasicElectronicsAssessmentPage />
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
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/:sectionId",
    element: <PowerSystemsSectionPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/assessment",
    element: <PowerSystemsAssessmentPage />
  }
];

export default moetRoutes;
