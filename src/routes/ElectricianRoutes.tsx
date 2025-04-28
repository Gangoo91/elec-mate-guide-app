
import { Route } from "react-router-dom";
import ElectriciansPage from "@/pages/ElectriciansPage";
import ElectriciansStudyGuidePage from "@/pages/ElectriciansStudyGuidePage";
import ElectriciansExamsPage from "@/pages/ElectriciansExamsPage";
import CalculatorTools from "@/pages/CalculatorTools";
import TechnicalToolsPage from "@/pages/TechnicalToolsPage";
import InspectionTestingPage from "@/pages/InspectionTestingPage";
import InspectionTestingGuide from "@/pages/InspectionTestingGuide";
import JobPriceEstimatorPage from "@/pages/JobPriceEstimatorPage";
import JobSchedulePage from "@/pages/electricians/JobSchedulePage";
import ProjectManagementPage from "@/pages/electricians/ProjectManagementPage";
import ProjectOverviewPage from "@/pages/electricians/ProjectOverviewPage";
import SolarPVInstallationPage from "@/pages/electricians/SolarPVInstallationPage";
import SmartHomeTechnologiesPage from "@/pages/electricians/SmartHomeTechnologiesPage";
import FireAlarmSystemsPage from "@/pages/electricians/FireAlarmSystemsPage";
import EmergencyLightingPage from "@/pages/electricians/EmergencyLightingPage";
import BuildingManagementSystemsPage from "@/pages/electricians/BuildingManagementSystemsPage";
import DataNetworksPage from "@/pages/electricians/DataNetworksPage";
import AccessControlPage from "@/pages/electricians/AccessControlPage";
import EVInfrastructurePage from "@/pages/electricians/EVInfrastructurePage";
import EnergyEfficiencyPage from "@/pages/electricians/EnergyEfficiencyPage";
import EnergyStorageSystemsPage from "@/pages/electricians/EnergyStorageSystemsPage";
import InvoiceManagerPage from "@/pages/InvoiceManagerPage";
import TemplatesPage from "@/pages/TemplatesPage";
import SignDocumentPage from "@/pages/SignDocumentPage";
import LearningHubElectriciansPage from "@/pages/LearningHubElectriciansPage";
import ProfessionalDevelopmentPage from "@/pages/ProfessionalDevelopmentPage";
import IndustrySpecialisationsPage from "@/pages/development/IndustrySpecialisationsPage";
import BusinessDevelopmentPage from "@/pages/development/BusinessDevelopmentPage";
import HigherEducationPage from "@/pages/development/HigherEducationPage";
import ProfessionalAssociationsPage from "@/pages/development/ProfessionalAssociationsPage";
import ECAPage from "@/pages/development/associations/ECAPage";
import NAPITPage from "@/pages/development/associations/NAPITPage";
import NAECIPage from "@/pages/development/associations/NAECIPage";
import FinancialManagementPage from "@/pages/development/business/FinancialManagementPage";
import GrowingBusinessPage from "@/pages/development/business/GrowingBusinessPage";
import StartingBusinessPage from "@/pages/development/business/StartingBusinessPage";
import TeamManagementPage from "@/pages/electricians/project-management/TeamManagementPage";
import ClientManagementPage from "@/pages/electricians/job-scheduling/ClientManagementPage";
import JobCompletionPage from "@/pages/electricians/job-scheduling/JobCompletionPage";
import TimeManagementPage from "@/pages/electricians/job-scheduling/TimeManagementPage";
import UpcomingJobsPage from "@/pages/electricians/job-scheduling/UpcomingJobsPage";
import SystemComponentsPage from "@/pages/electricians/solar/SystemComponentsPage";
import InstallationProcessPage from "@/pages/electricians/solar/InstallationProcessPage";
import SafetyProceduresPage from "@/pages/electricians/solar/SafetyProceduresPage";
import ElectricalIntegrationPage from "@/pages/electricians/solar/ElectricalIntegrationPage";
import DocumentationPage from "@/pages/electricians/solar/DocumentationPage";
import WiringConnectionsPage from "@/pages/electricians/solar/WiringConnectionsPage";
import SolarPanelsPage from "@/pages/electricians/solar/components/SolarPanelsPage";
import InvertersPage from "@/pages/electricians/solar/components/InvertersPage";
import MountingSystemsPage from "@/pages/electricians/solar/components/MountingSystemsPage";
import ElectricalComponentsPage from "@/pages/electricians/solar/components/ElectricalComponentsPage";
import SiteAssessmentPage from "@/pages/electricians/solar/installation/SiteAssessmentPage";
import SiteSurveyPage from "@/pages/electricians/solar/installation/SiteSurveyPage";
import SolarResourcePage from "@/pages/electricians/solar/installation/SolarResourcePage";
import StructuralAssessmentPage from "@/pages/electricians/solar/installation/StructuralAssessmentPage";
import SystemDesignPage from "@/pages/electricians/solar/installation/SystemDesignPage";
import PhysicalInstallationPage from "@/pages/electricians/solar/installation/PhysicalInstallationPage";
import MountingSystemsInstallationPage from "@/pages/electricians/solar/installation/MountingSystemsInstallationPage";
import PanelInstallationPage from "@/pages/electricians/solar/installation/PanelInstallationPage";
import EquipmentInstallationPage from "@/pages/electricians/solar/installation/EquipmentInstallationPage";
import CommissioningPage from "@/pages/electricians/solar/installation/CommissioningPage";
import SafetyConsiderationsPage from "@/pages/electricians/solar/installation/SafetyConsiderationsPage";
import RoofEvaluationPage from "@/pages/electricians/solar/installation/structural/RoofEvaluationPage";
import LoadAnalysisPage from "@/pages/electricians/solar/installation/structural/LoadAnalysisPage";
import SupportStructurePage from "@/pages/electricians/solar/installation/structural/SupportStructurePage";
import ToolboxTalkPage from "@/pages/ToolboxTalkPage";
import ToolsPage from "@/pages/toolbox/ToolsPage";
import Mentorship from "@/pages/Mentorship";

// Specialisations pages
import IndustrialAutomationPage from "@/pages/electricians/specialisations/IndustrialAutomationPage";
import RenewableEnergyPage from "@/pages/electricians/specialisations/RenewableEnergyPage";
import SmartBuildingPage from "@/pages/electricians/specialisations/SmartBuildingPage";
import HighVoltagePage from "@/pages/electricians/specialisations/HighVoltagePage";
import DataCenterPage from "@/pages/electricians/specialisations/DataCenterPage";
import HazardousAreasPage from "@/pages/electricians/specialisations/HazardousAreasPage";
import MarineOffshorePage from "@/pages/electricians/specialisations/MarineOffshorePage";

// Case Studies
import CommercialSolarCaseStudy from "@/pages/electricians/specialisations/case-studies/CommercialSolarCaseStudy";
import CommunityEnergyStudy from "@/pages/electricians/specialisations/case-studies/CommunityEnergyStudy";
import ManufacturingAutomationStudy from "@/pages/electricians/specialisations/case-studies/ManufacturingAutomationStudy";
import WarehouseAutomationStudy from "@/pages/electricians/specialisations/case-studies/WarehouseAutomationStudy";
import SmartOfficeAutomationStudy from "@/pages/electricians/specialisations/case-studies/SmartOfficeAutomationStudy";
import SmartHotelSystemsStudy from "@/pages/electricians/specialisations/case-studies/SmartHotelSystemsStudy";
import CruiseShipCaseStudy from "@/pages/electricians/specialisations/case-studies/CruiseShipCaseStudy";
import WindPlatformCaseStudy from "@/pages/electricians/specialisations/case-studies/WindPlatformCaseStudy";

// Import certifications page
import CertificationsPage from "@/pages/CertificationsPage";

export const ElectricianRoutes = (
  <>
    <Route path="/electricians" element={<ElectriciansPage />} />
    <Route path="/electricians/study" element={<ElectriciansStudyGuidePage />} />
    <Route path="/electricians/exams" element={<ElectriciansExamsPage />} />
    <Route path="/electricians/technical-tools/calculators" element={<CalculatorTools />} />
    <Route path="/electricians/technical-tools" element={<TechnicalToolsPage />} />
    <Route path="/electricians/technical-tools/inspection-testing" element={<InspectionTestingPage />} />
    <Route path="/electricians/technical-tools/inspection-guide" element={<InspectionTestingGuide />} />
    <Route path="/electricians/technical-tools/job-price-estimator" element={<JobPriceEstimatorPage />} />
    <Route path="/electricians/technical-tools/invoice-manager" element={<InvoiceManagerPage />} />
    <Route path="/electricians/job-scheduling" element={<JobSchedulePage />} />
    <Route path="/electricians/project-management" element={<ProjectManagementPage />} />
    <Route path="/electricians/project-overview" element={<ProjectOverviewPage />} />
    <Route path="/electricians/solar-pv" element={<SolarPVInstallationPage />} />
    <Route path="/electricians/smart-home" element={<SmartHomeTechnologiesPage />} />
    <Route path="/electricians/fire-alarms" element={<FireAlarmSystemsPage />} />
    <Route path="/electricians/emergency-lighting" element={<EmergencyLightingPage />} />
    <Route path="/electricians/building-management" element={<BuildingManagementSystemsPage />} />
    <Route path="/electricians/data-networks" element={<DataNetworksPage />} />
    <Route path="/electricians/access-control" element={<AccessControlPage />} />
    <Route path="/electricians/ev-infrastructure" element={<EVInfrastructurePage />} />
    <Route path="/electricians/energy-efficiency" element={<EnergyEfficiencyPage />} />
    <Route path="/electricians/energy-storage" element={<EnergyStorageSystemsPage />} />
    <Route path="/electricians/templates" element={<TemplatesPage />} />
    <Route path="/electricians/sign-document" element={<SignDocumentPage />} />
    <Route path="/electricians/learning-hub" element={<LearningHubElectriciansPage />} />
    <Route path="/electricians/development" element={<ProfessionalDevelopmentPage />} />
    <Route path="/electricians/development/specialisations" element={<IndustrySpecialisationsPage />} />
    <Route path="/electricians/development/business" element={<BusinessDevelopmentPage />} />
    <Route path="/electricians/development/higher-education" element={<HigherEducationPage />} />
    <Route path="/electricians/development/associations" element={<ProfessionalAssociationsPage />} />
    <Route path="/electricians/development/associations/eca" element={<ECAPage />} />
    <Route path="/electricians/development/associations/napit" element={<NAPITPage />} />
    <Route path="/electricians/development/associations/naeci" element={<NAECIPage />} />
    <Route path="/electricians/development/business/financial-management" element={<FinancialManagementPage />} />
    <Route path="/electricians/development/business/growing-business" element={<GrowingBusinessPage />} />
    <Route path="/electricians/development/business/starting-business" element={<StartingBusinessPage />} />
    <Route path="/electricians/project-management/team" element={<TeamManagementPage />} />
    <Route path="/electricians/job-scheduling/client-management" element={<ClientManagementPage />} />
    <Route path="/electricians/job-scheduling/job-completion" element={<JobCompletionPage />} />
    <Route path="/electricians/job-scheduling/time-management" element={<TimeManagementPage />} />
    <Route path="/electricians/job-scheduling/upcoming-jobs" element={<UpcomingJobsPage />} />
    <Route path="/electricians/solar-pv/components" element={<SystemComponentsPage />} />
    <Route path="/electricians/solar-pv/installation" element={<InstallationProcessPage />} />
    <Route path="/electricians/solar-pv/safety" element={<SafetyProceduresPage />} />
    <Route path="/electricians/solar-pv/electrical" element={<ElectricalIntegrationPage />} />
    <Route path="/electricians/solar-pv/documentation" element={<DocumentationPage />} />
    <Route path="/electricians/solar-pv/wiring" element={<WiringConnectionsPage />} />
    <Route path="/electricians/solar-pv/components/solar-panels" element={<SolarPanelsPage />} />
    <Route path="/electricians/solar-pv/components/inverters" element={<InvertersPage />} />
    <Route path="/electricians/solar-pv/components/mounting" element={<MountingSystemsPage />} />
    <Route path="/electricians/solar-pv/components/electrical" element={<ElectricalComponentsPage />} />
    <Route path="/electricians/solar-pv/installation/site-assessment" element={<SiteAssessmentPage />} />
    <Route path="/electricians/solar-pv/installation/site-survey" element={<SiteSurveyPage />} />
    <Route path="/electricians/solar-pv/installation/solar-resource" element={<SolarResourcePage />} />
    <Route path="/electricians/solar-pv/installation/structural" element={<StructuralAssessmentPage />} />
    <Route path="/electricians/solar-pv/installation/system-design" element={<SystemDesignPage />} />
    <Route path="/electricians/solar-pv/installation/physical" element={<PhysicalInstallationPage />} />
    <Route path="/electricians/solar-pv/installation/mounting" element={<MountingSystemsInstallationPage />} />
    <Route path="/electricians/solar-pv/installation/panels" element={<PanelInstallationPage />} />
    <Route path="/electricians/solar-pv/installation/equipment" element={<EquipmentInstallationPage />} />
    <Route path="/electricians/solar-pv/installation/commissioning" element={<CommissioningPage />} />
    <Route path="/electricians/solar-pv/installation/safety" element={<SafetyConsiderationsPage />} />
    <Route path="/electricians/solar-pv/installation/structural/roof" element={<RoofEvaluationPage />} />
    <Route path="/electricians/solar-pv/installation/structural/load" element={<LoadAnalysisPage />} />
    <Route path="/electricians/solar-pv/installation/structural/support" element={<SupportStructurePage />} />
    <Route path="/electricians/toolbox-talk" element={<ToolboxTalkPage />} />
    <Route path="/electricians/toolbox-talk/tools" element={<ToolsPage />} />
    <Route path="/electricians/mentorship" element={<Mentorship />} />

    {/* Specialisations routes */}
    <Route path="/electricians/development/specialisations/automation" element={<IndustrialAutomationPage />} />
    <Route path="/electricians/development/specialisations/renewable" element={<RenewableEnergyPage />} />
    <Route path="/electricians/development/specialisations/smart-building" element={<SmartBuildingPage />} />
    <Route path="/electricians/development/specialisations/highvoltage" element={<HighVoltagePage />} />
    <Route path="/electricians/development/specialisations/datacenter" element={<DataCenterPage />} />
    <Route path="/electricians/specialisations/hazardous" element={<HazardousAreasPage />} />
    <Route path="/electricians/specialisations/marine" element={<MarineOffshorePage />} />
    <Route path="/electricians/specialisations/ev" element={<EVInfrastructurePage />} />

    {/* Case Studies routes */}
    <Route path="/electricians/specialisations/renewable/case-studies/commercial-solar" element={<CommercialSolarCaseStudy />} />
    <Route path="/electricians/specialisations/renewable/case-studies/community-energy" element={<CommunityEnergyStudy />} />
    <Route path="/electricians/specialisations/automation/case-studies/manufacturing" element={<ManufacturingAutomationStudy />} />
    <Route path="/electricians/specialisations/automation/case-studies/warehouse" element={<WarehouseAutomationStudy />} />
    <Route path="/electricians/specialisations/smart-building/case-studies/office-automation" element={<SmartOfficeAutomationStudy />} />
    <Route path="/electricians/specialisations/smart-building/case-studies/hotel-systems" element={<SmartHotelSystemsStudy />} />
    <Route path="/electricians/specialisations/marine/case-studies/cruise-ship" element={<CruiseShipCaseStudy />} />
    <Route path="/electricians/specialisations/marine/case-studies/wind-platform" element={<WindPlatformCaseStudy />} />

    {/* Certifications */}
    <Route path="/certifications" element={<CertificationsPage />} />
  </>
);
