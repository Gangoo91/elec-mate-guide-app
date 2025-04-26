
import { Route } from "react-router-dom";
import ApprenticesPage from "@/pages/ApprenticesPage";
import LearningHubPage from "@/pages/LearningHubPage";
import AIToolsPage from "@/pages/AIToolsPage";
import StudyMaterialsPage from "@/pages/StudyMaterialsPage";
import NVQ2StudyMaterialsPage from "@/pages/NVQ2StudyMaterialsPage";
import NVQ3StudyMaterialsPage from "@/pages/NVQ3StudyMaterialsPage";
import HNCStudyMaterialsPage from "@/pages/HNCStudyMaterialsPage";
import PracticeExamsPage from "@/pages/PracticeExamsPage";
import CertificationsPage from "@/pages/CertificationsPage";
import CityGuildsPage from "@/pages/CityGuildsPage";
import Level2ElectricalPage from "@/pages/Level2ElectricalPage";
import Level3ElectricalPage from "@/pages/Level3ElectricalPage";
import Level2CoreUnitsPage from "@/pages/Level2CoreUnitsPage";
import UnitContentPage from "@/pages/UnitContentPage";
import MOETPage from "@/pages/MOETPage";
import MOETCoreKnowledgePage from "@/pages/MOETCoreKnowledgePage";
import MOETElectricalPrinciplesPage from "@/pages/MOETElectricalPrinciplesPage";
import MOETMaintenancePracticesPage from "@/pages/MOETMaintenancePracticesPage";
import MOETEngineeringOperationsPage from "@/pages/MOETEngineeringOperationsPage";
import AM2Page from "@/pages/AM2Page";
import Mentorship from "@/pages/Mentorship";
import EALQualificationsPage from "@/pages/EALQualificationsPage";
import HigherLearningPage from "@/pages/HigherLearningPage";
import InspectionTestingPage from "@/pages/InspectionTestingPage";
import SectionPage from "@/pages/units/SectionPage";
import Level2SectionPage from "@/pages/units/Level2SectionPage";
import CircuitTheoryPage from "@/pages/moet/CircuitTheoryPage";
import PowerSystemsPage from "@/pages/moet/PowerSystemsPage";
import BasicElectronicsPage from "@/pages/moet/BasicElectronicsPage";
import PowerGenerationPage from "@/pages/moet/power-systems/PowerGenerationPage";
import TransmissionSystemsPage from "@/pages/moet/power-systems/transmission/TransmissionSystemsPage";
import PowerDistributionPage from "@/pages/moet/power-systems/PowerDistributionPage";
import DistributionNetworksPage from "@/pages/moet/power-systems/distribution/DistributionNetworksPage";
import TransformersPage from "@/pages/moet/power-systems/distribution/TransformersPage";
import SmartGridPage from "@/pages/moet/power-systems/distribution/SmartGridPage";
import TransmissionSystemsPage from "@/pages/moet/power-systems/transmission/TransmissionSystemsPage";
import TransformersSubstationsPage from "@/pages/moet/power-systems/transmission/TransformersSubstationsPage";
import GridInfrastructurePage from "@/pages/moet/power-systems/transmission/GridInfrastructurePage";
import MOETCoreSkillsPage from "@/pages/MOETCoreSkillsPage";
import MOETBehavioursPage from "@/pages/MOETBehavioursPage";
import MOETAssessmentPage from "@/pages/MOETAssessmentPage";
import SemiconductorBasicsPage from "@/pages/moet/basic-electronics/semiconductors/SemiconductorBasicsPage";
import ElectronicComponentsPage from "@/pages/moet/basic-electronics/components/ElectronicComponentsPage";
import BasicCircuitsPage from "@/pages/moet/basic-electronics/circuits/BasicCircuitsPage";
import PreventiveMaintenancePage from "@/pages/maintenance/PreventiveMaintenancePage";
import SafetyProtocolsPage from "@/pages/maintenance/SafetyProtocolsPage";
import DocumentationPage from "@/pages/maintenance/DocumentationPage";

export const ApprenticeRoutes = [
  <Route key="apprentices" path="/apprentices" element={<ApprenticesPage />} />,
  <Route key="apprentices-learning-hub" path="/apprentices/learning-hub" element={<LearningHubPage />} />,
  <Route key="apprentices-ai-tools" path="/apprentices/ai-tools" element={<AIToolsPage />} />,
  <Route key="apprentices-study-materials" path="/apprentices/study-materials" element={<StudyMaterialsPage />} />,
  <Route key="apprentices-nvq2" path="/apprentices/study-materials/nvq2" element={<NVQ2StudyMaterialsPage />} />,
  <Route key="apprentices-nvq3" path="/apprentices/study-materials/nvq3" element={<NVQ3StudyMaterialsPage />} />,
  <Route key="apprentices-hnc" path="/apprentices/study-materials/hnc" element={<HNCStudyMaterialsPage />} />,
  <Route key="apprentices-practice-exams" path="/apprentices/practice-exams" element={<PracticeExamsPage />} />,
  <Route key="apprentices-certifications" path="/apprentices/certifications" element={<CertificationsPage />} />,
  <Route key="apprentices-city-guilds" path="/apprentices/study-materials/city-guilds" element={<CityGuildsPage />} />,
  <Route key="apprentices-level2" path="/apprentices/study-materials/city-guilds/level-2" element={<Level2ElectricalPage />} />,
  <Route key="apprentices-level3" path="/apprentices/study-materials/city-guilds/level-3" element={<Level3ElectricalPage />} />,
  <Route key="apprentices-level2-core" path="/apprentices/study-materials/city-guilds/level-2/core-units" element={<Level2CoreUnitsPage />} />,
  <Route key="apprentices-level2-unit" path="/apprentices/study-materials/city-guilds/level-2/core-units/:unitId" element={<UnitContentPage />} />,
  <Route key="apprentices-level3-unit" path="/apprentices/study-materials/city-guilds/level-3/:unitId" element={<UnitContentPage />} />,
  <Route key="apprentices-section" path="/apprentices/study-materials/city-guilds/level-3/:unitId/:sectionId" element={<SectionPage />} />,
  <Route key="apprentices-level2-section" path="/apprentices/study-materials/city-guilds/level-2/core-units/:unitId/:sectionId" element={<Level2SectionPage />} />,
  <Route key="apprentices-moet" path="/apprentices/study-materials/city-guilds/moet" element={<MOETPage />} />,
  <Route key="apprentices-moet-core" path="/apprentices/study-materials/city-guilds/moet/core-knowledge" element={<MOETCoreKnowledgePage />} />,
  <Route key="apprentices-moet-electrical" path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles" element={<MOETElectricalPrinciplesPage />} />,
  <Route key="apprentices-moet-maintenance" path="/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices" element={<MOETMaintenancePracticesPage />} />,
  <Route key="apprentices-moet-engineering" path="/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations" element={<MOETEngineeringOperationsPage />} />,
  <Route key="apprentices-am2" path="/apprentices/study-materials/city-guilds/am2" element={<AM2Page />} />,
  <Route key="apprentices-mentorship" path="/apprentices/mentorship" element={<Mentorship />} />,
  <Route key="apprentices-eal" path="/apprentices/study-materials/eal" element={<EALQualificationsPage />} />,
  <Route key="apprentices-higher-learning" path="/apprentices/study-materials/higher-learning" element={<HigherLearningPage />} />,
  <Route key="apprentices-inspection" path="/apprentices/study-materials/inspection-testing" element={<InspectionTestingPage />} />,
  <Route key="apprentices-moet-circuit-theory" path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/circuit-theory" element={<CircuitTheoryPage />} />,
  <Route key="apprentices-moet-power-systems" path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems" element={<PowerSystemsPage />} />,
  <Route key="apprentices-moet-basic-electronics" path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics" element={<BasicElectronicsPage />} />,
  <Route key="apprentices-moet-power-systems-generation" path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/generation" element={<PowerGenerationPage />} />,
  <Route key="apprentices-moet-power-systems-transmission" path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/transmission" element={<PowerTransmissionPage />} />,
  <Route key="apprentices-moet-power-systems-distribution" path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/distribution" element={<PowerDistributionPage />} />,
  <Route 
    key="apprentices-moet-power-systems-distribution-networks" 
    path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/distribution/networks" 
    element={<DistributionNetworksPage />} 
  />,
  <Route 
    key="apprentices-moet-power-systems-distribution-transformers" 
    path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/distribution/transformers" 
    element={<TransformersPage />} 
  />,
  <Route 
    key="apprentices-moet-power-systems-distribution-smart-grid" 
    path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/distribution/smart-grid" 
    element={<SmartGridPage />} 
  />,
  <Route 
    key="apprentices-moet-power-systems-transmission-systems" 
    path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/transmission/systems" 
    element={<TransmissionSystemsPage />} 
  />,
  <Route 
    key="apprentices-moet-power-systems-transmission-transformers" 
    path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/transmission/transformers" 
    element={<TransformersSubstationsPage />} 
  />,
  <Route 
    key="apprentices-moet-power-systems-transmission-infrastructure" 
    path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/transmission/infrastructure" 
    element={<GridInfrastructurePage />} 
  />,
  <Route key="apprentices-moet-core-skills" path="/apprentices/study-materials/city-guilds/moet/core-skills" element={<MOETCoreSkillsPage />} />,
  <Route key="apprentices-moet-behaviours" path="/apprentices/study-materials/city-guilds/moet/behaviours" element={<MOETBehavioursPage />} />,
  <Route key="apprentices-moet-assessment" path="/apprentices/study-materials/city-guilds/moet/assessment" element={<MOETAssessmentPage />} />,
  <Route 
    key="apprentices-moet-basic-electronics-semiconductors" 
    path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics/semiconductors" 
    element={<SemiconductorBasicsPage />} 
  />,
  <Route 
    key="apprentices-moet-basic-electronics-components" 
    path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics/components" 
    element={<ElectronicComponentsPage />} 
  />,
  <Route 
    key="apprentices-moet-basic-electronics-circuits" 
    path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics/circuits" 
    element={<BasicCircuitsPage />} 
  />,
  <Route 
    key="apprentices-moet-maintenance-preventive" 
    path="/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices/preventive" 
    element={<PreventiveMaintenancePage />} 
  />,
  <Route 
    key="apprentices-moet-maintenance-safety" 
    path="/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices/safety" 
    element={<SafetyProtocolsPage />} 
  />,
  <Route 
    key="apprentices-moet-maintenance-documentation" 
    path="/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices/documentation" 
    element={<DocumentationPage />} 
  />,
  <Route key="apprentices-video-demos" path="/apprentices/video-demonstrations" />,
  <Route key="apprentices-ar-learning" path="/apprentices/ar-learning" />,
  <Route key="apprentices-audio-tutorials" path="/apprentices/audio-tutorials" />,
  <Route key="apprentices-study-groups" path="/apprentices/study-groups" />,
  <Route key="apprentices-progress" path="/apprentices/progress" />,
];
