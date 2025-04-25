
import { Route } from "react-router-dom";
import ElectriciansPage from "@/pages/ElectriciansPage";
import LearningHubElectriciansPage from "@/pages/LearningHubElectriciansPage";
import ElectriciansStudyGuidePage from "@/pages/electricians/ElectriciansStudyGuidePage";
import SolarPVInstallationPage from "@/pages/electricians/SolarPVInstallationPage";
import SystemComponentsPage from "@/pages/electricians/solar/SystemComponentsPage";
import SolarPanelsPage from "@/pages/electricians/solar/components/SolarPanelsPage";
import InvertersPage from "@/pages/electricians/solar/components/InvertersPage";
import MountingSystemsPage from "@/pages/electricians/solar/components/MountingSystemsPage";
import ElectricalComponentsPage from "@/pages/electricians/solar/components/ElectricalComponentsPage";
import InstallationProcessPage from "@/pages/electricians/solar/InstallationProcessPage";
import ElectricalIntegrationPage from "@/pages/electricians/solar/ElectricalIntegrationPage";
import WiringConnectionsPage from "@/pages/electricians/solar/WiringConnectionsPage";
import SafetyProceduresPage from "@/pages/electricians/solar/SafetyProceduresPage";
import DocumentationPage from "@/pages/electricians/solar/DocumentationPage";
import EnergyStorageSystemsPage from "@/pages/electricians/EnergyStorageSystemsPage";
import BuildingManagementSystemsPage from "@/pages/electricians/BuildingManagementSystemsPage";
import SmartHomeTechnologiesPage from "@/pages/electricians/SmartHomeTechnologiesPage";
import EVInfrastructurePage from "@/pages/electricians/EVInfrastructurePage";
import DataNetworksPage from "@/pages/electricians/DataNetworksPage";
import EnergyEfficiencyPage from "@/pages/electricians/EnergyEfficiencyPage";
import EmergencyLightingPage from "@/pages/electricians/EmergencyLightingPage";
import FireAlarmSystemsPage from "@/pages/electricians/FireAlarmSystemsPage";
import AccessControlPage from "@/pages/electricians/AccessControlPage";
import ElectriciansExamsPage from "@/pages/ElectriciansExamsPage";
import ToolboxTalkPage from "@/pages/ToolboxTalkPage";
import TechnicalToolsPage from "@/pages/TechnicalToolsPage";
import ProfessionalDevelopmentPage from "@/pages/ProfessionalDevelopmentPage";
import CareerPathwaysPage from "@/pages/CareerPathwaysPage";
import JobPriceEstimatorPage from "@/pages/JobPriceEstimatorPage";
import CalculatorTools from "@/pages/CalculatorTools";
import InspectionTestingGuide from "@/pages/InspectionTestingGuide";
import TemplatesPage from "@/pages/TemplatesPage";
import SignDocumentPage from "@/pages/SignDocumentPage";
import DesignEngineerPage from "@/pages/careers/DesignEngineerPage";
import CommissioningEngineerPage from "@/pages/careers/CommissioningEngineerPage";
import ProjectManagerPage from "@/pages/careers/ProjectManagerPage";
import ControlSystemsEngineerPage from "@/pages/careers/ControlSystemsEngineerPage";
import ElectricalInspectorPage from "@/pages/careers/ElectricalInspectorPage";
import BuildingServicesEngineerPage from "@/pages/careers/BuildingServicesEngineerPage";
import SiteAssessmentPage from "@/pages/electricians/solar/installation/SiteAssessmentPage";
import StructuralAssessmentPage from "@/pages/electricians/solar/installation/StructuralAssessmentPage";
import SolarResourcePage from "@/pages/electricians/solar/installation/SolarResourcePage";
import SiteSurveyPage from "@/pages/electricians/solar/installation/SiteSurveyPage";
import Mentorship from "@/pages/Mentorship";
import SystemDesignPage from "@/pages/electricians/solar/installation/SystemDesignPage";
import PhysicalInstallationPage from "@/pages/electricians/solar/installation/PhysicalInstallationPage";
import CommissioningPage from "@/pages/electricians/solar/installation/CommissioningPage";

export const ElectricianRoutes = [
  <Route key="electricians" path="/electricians" element={<ElectriciansPage />} />,
  <Route key="electricians-learning-hub" path="/electricians/learning-hub" element={<LearningHubElectriciansPage />} />,
  <Route key="electricians-study-guide" path="/electricians/study-guide" element={<ElectriciansStudyGuidePage />} />,
  <Route key="electricians-solar-pv" path="/electricians/solar-pv-installation" element={<SolarPVInstallationPage />} />,
  <Route key="electricians-solar-components" path="/electricians/solar-pv-installation/system-components" element={<SystemComponentsPage />} />,
  <Route key="electricians-solar-panels" path="/electricians/solar-pv-installation/system-components/panels" element={<SolarPanelsPage />} />,
  <Route key="electricians-solar-inverters" path="/electricians/solar-pv-installation/system-components/inverters" element={<InvertersPage />} />,
  <Route key="electricians-solar-mounting" path="/electricians/solar-pv-installation/system-components/mounting" element={<MountingSystemsPage />} />,
  <Route key="electricians-solar-electrical" path="/electricians/solar-pv-installation/system-components/electrical" element={<ElectricalComponentsPage />} />,
  <Route key="electricians-solar-installation" path="/electricians/solar-pv-installation/installation-process" element={<InstallationProcessPage />} />,
  <Route key="electricians-solar-integration" path="/electricians/solar-pv-installation/electrical-integration" element={<ElectricalIntegrationPage />} />,
  <Route key="electricians-solar-wiring" path="/electricians/solar-pv-installation/wiring-connections" element={<WiringConnectionsPage />} />,
  <Route key="electricians-solar-safety" path="/electricians/solar-pv-installation/safety-procedures" element={<SafetyProceduresPage />} />,
  <Route key="electricians-solar-documentation" path="/electricians/solar-pv-installation/documentation" element={<DocumentationPage />} />,
  <Route key="electricians-energy-storage" path="/electricians/energy-storage-systems" element={<EnergyStorageSystemsPage />} />,
  <Route key="electricians-building-management" path="/electricians/building-management-systems" element={<BuildingManagementSystemsPage />} />,
  <Route key="electricians-smart-home" path="/electricians/smart-home-technologies" element={<SmartHomeTechnologiesPage />} />,
  <Route key="electricians-ev" path="/electricians/ev-infrastructure" element={<EVInfrastructurePage />} />,
  <Route key="electricians-data" path="/electricians/data-networks" element={<DataNetworksPage />} />,
  <Route key="electricians-energy" path="/electricians/energy-efficiency" element={<EnergyEfficiencyPage />} />,
  <Route key="electricians-emergency" path="/electricians/emergency-lighting" element={<EmergencyLightingPage />} />,
  <Route key="electricians-fire" path="/electricians/fire-alarm-systems" element={<FireAlarmSystemsPage />} />,
  <Route key="electricians-access" path="/electricians/access-control" element={<AccessControlPage />} />,
  <Route key="electricians-exams" path="/electricians/practice-exams" element={<ElectriciansExamsPage />} />,
  <Route key="electricians-toolbox" path="/electricians/toolbox-talk" element={<ToolboxTalkPage />} />,
  <Route key="electricians-tools" path="/electricians/technical-tools" element={<TechnicalToolsPage />} />,
  <Route key="electricians-development" path="/electricians/development" element={<ProfessionalDevelopmentPage />} />,
  <Route key="electricians-career" path="/electricians/development/career-pathways" element={<CareerPathwaysPage />} />,
  <Route key="electricians-estimator" path="/electricians/technical-tools/estimator" element={<JobPriceEstimatorPage />} />,
  <Route key="electricians-calculators" path="/electricians/technical-tools/calculators" element={<CalculatorTools />} />,
  <Route key="electricians-inspection" path="/electricians/technical-tools/inspection-guide" element={<InspectionTestingGuide />} />,
  <Route key="electricians-templates" path="/electricians/technical-tools/templates" element={<TemplatesPage />} />,
  <Route key="electricians-sign" path="/electricians/technical-tools/templates/:templateId/sign" element={<SignDocumentPage />} />,
  <Route key="electricians-mentorship" path="/electricians/mentorship" element={<Mentorship />} />,
  <Route key="electricians-design" path="/electricians/development/career-pathways/design" element={<DesignEngineerPage />} />,
  <Route key="electricians-commissioning" path="/electricians/development/career-pathways/commissioning" element={<CommissioningEngineerPage />} />,
  <Route key="electricians-project" path="/electricians/development/career-pathways/project-management" element={<ProjectManagerPage />} />,
  <Route key="electricians-control" path="/electricians/development/career-pathways/control-systems" element={<ControlSystemsEngineerPage />} />,
  <Route key="electricians-inspector" path="/electricians/development/career-pathways/inspection" element={<ElectricalInspectorPage />} />,
  <Route key="electricians-building" path="/electricians/development/career-pathways/building-services" element={<BuildingServicesEngineerPage />} />,
  <Route key="site-assessment" path="/electricians/solar-pv-installation/installation-process/site-assessment" element={<SiteAssessmentPage />} />,
  <Route key="structural-assessment" path="/electricians/solar-pv-installation/installation-process/site-assessment/structural" element={<StructuralAssessmentPage />} />,
  <Route key="solar-resource" path="/electricians/solar-pv-installation/installation-process/site-assessment/solar-resource" element={<SolarResourcePage />} />,
  <Route key="site-survey" path="/electricians/solar-pv-installation/installation-process/site-assessment/survey" element={<SiteSurveyPage />} />,
  <Route key="system-design" path="/electricians/solar-pv-installation/installation-process/system-design" element={<SystemDesignPage />} />,
  <Route key="physical-installation" path="/electricians/solar-pv-installation/installation-process/physical-installation" element={<PhysicalInstallationPage />} />,
  <Route key="commissioning" path="/electricians/solar-pv-installation/installation-process/commissioning" element={<CommissioningPage />} />,
];
