import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Profile from "./pages/Profile";
import ApprenticesPage from "./pages/ApprenticesPage";
import ElectriciansPage from "./pages/ElectriciansPage";
import EmployersPage from "./pages/EmployersPage";
import Subscription from "./pages/Subscription";
import SubscriptionSuccess from "./pages/SubscriptionSuccess";
import SubscriptionGuard from "./components/guards/SubscriptionGuard";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import ManageSubscription from "./pages/ManageSubscription";
import { NotificationProvider } from "./contexts/NotificationContext";
import FAQ from "./pages/FAQ";
import MentalHealth from "./pages/MentalHealth";
import Mentorship from "./pages/Mentorship";
import LearningHubPage from "./pages/LearningHubPage";
import AIToolsPage from "./pages/AIToolsPage";
import StudyMaterialsPage from "./pages/StudyMaterialsPage";
import NVQ2StudyMaterialsPage from "./pages/NVQ2StudyMaterialsPage";
import NVQ3StudyMaterialsPage from "./pages/NVQ3StudyMaterialsPage";
import HNCStudyMaterialsPage from "./pages/HNCStudyMaterialsPage";
import PracticeExamsPage from "./pages/PracticeExamsPage";
import CertificationsPage from "./pages/CertificationsPage";
import StressManagement from "./pages/StressManagement";
import SupportGroups from "./pages/SupportGroups";
import ProfessionalResources from "./pages/ProfessionalResources";
import ErrorBoundary from "./components/ErrorBoundary";
import MentalHealthBuddy from "./pages/MentalHealthBuddy";
import TechnicalToolsPage from "./pages/TechnicalToolsPage";
import JobPriceEstimatorPage from "./pages/JobPriceEstimatorPage";
import CalculatorTools from "./pages/CalculatorTools";
import InspectionTestingGuide from "./pages/InspectionTestingGuide";
import TemplatesPage from "./pages/TemplatesPage";
import SignDocumentPage from "./pages/SignDocumentPage";
import CityGuildsPage from "./pages/CityGuildsPage";
import Level2ElectricalPage from "./pages/Level2ElectricalPage";
import UnitContentPage from "./pages/UnitContentPage";
import Level3ElectricalPage from "./pages/Level3ElectricalPage";
import MOETPage from "./pages/MOETPage";
import AM2Page from "./pages/AM2Page";
import Level2CoreUnitsPage from "./pages/Level2CoreUnitsPage";
import MOETContentPage from "./pages/MOETContentPage";
import MOETCoreKnowledgePage from "./pages/MOETCoreKnowledgePage";
import MOETElectricalPrinciplesPage from "./pages/MOETElectricalPrinciplesPage";
import MOETMaintenancePracticesPage from "./pages/MOETMaintenancePracticesPage";
import MOETEngineeringOperationsPage from "./pages/MOETEngineeringOperationsPage";
import EALQualificationsPage from "./pages/EALQualificationsPage";
import HigherLearningPage from "./pages/HigherLearningPage";
import InspectionTestingPage from "./pages/InspectionTestingPage";
import ToolboxTalkPage from "./pages/ToolboxTalkPage";
import ProfessionalDevelopmentPage from "./pages/ProfessionalDevelopmentPage";
import CareerPathwaysPage from "./pages/CareerPathwaysPage";
import DesignEngineerPage from "./pages/careers/DesignEngineerPage";
import CommissioningEngineerPage from "./pages/careers/CommissioningEngineerPage";
import ProjectManagerPage from "./pages/careers/ProjectManagerPage";
import ControlSystemsEngineerPage from "./pages/careers/ControlSystemsEngineerPage";
import ElectricalInspectorPage from "./pages/careers/ElectricalInspectorPage";
import BuildingServicesEngineerPage from "./pages/careers/BuildingServicesEngineerPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30000,
    },
  },
});

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  return user ? <Navigate to="/dashboard" replace /> : <>{children}</>;
};

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <NotificationProvider>
              <TooltipProvider>
                <Toaster />
                <Routes>
                  <Route path="/" element={<AuthWrapper><Welcome /></AuthWrapper>} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/index" element={<Navigate to="/" replace />} />
                  
                  <Route path="/apprentices" element={<ApprenticesPage />} />
                  <Route path="/apprentices/learning-hub" element={<LearningHubPage />} />
                  <Route path="/apprentices/ai-tools" element={<AIToolsPage />} />
                  <Route path="/apprentices/study-materials" element={<StudyMaterialsPage />} />
                  <Route path="/apprentices/study-materials/nvq2" element={<NVQ2StudyMaterialsPage />} />
                  <Route path="/apprentices/study-materials/nvq3" element={<NVQ3StudyMaterialsPage />} />
                  <Route path="/apprentices/study-materials/hnc" element={<HNCStudyMaterialsPage />} />
                  <Route path="/apprentices/practice-exams" element={<PracticeExamsPage />} />
                  <Route path="/apprentices/certifications" element={<CertificationsPage />} />
                  <Route path="/apprentices/study-materials/city-guilds" element={<CityGuildsPage />} />
                  <Route path="/apprentices/study-materials/city-guilds/level-2" element={<Level2ElectricalPage />} />
                  <Route path="/apprentices/study-materials/city-guilds/level-3" element={<Level3ElectricalPage />} />
                  <Route path="/apprentices/study-materials/city-guilds/level-2/core-units" element={<Level2CoreUnitsPage />} />
                  <Route path="/apprentices/study-materials/city-guilds/level-2/core-units/:unitId" element={<UnitContentPage />} />
                  <Route path="/apprentices/study-materials/city-guilds/level-3/course-content/unit-:unitId" element={<UnitContentPage />} />
                  <Route path="/apprentices/study-materials/city-guilds/moet" element={<MOETPage />} />
                  <Route path="/apprentices/study-materials/city-guilds/moet/content" element={<MOETContentPage />} />
                  <Route path="/apprentices/study-materials/city-guilds/moet/core-knowledge" element={<MOETCoreKnowledgePage />} />
                  <Route path="/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles" element={<MOETElectricalPrinciplesPage />} />
                  <Route path="/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices" element={<MOETMaintenancePracticesPage />} />
                  <Route path="/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations" element={<MOETEngineeringOperationsPage />} />
                  <Route path="/apprentices/study-materials/city-guilds/am2" element={<AM2Page />} />
                  <Route path="/apprentices/mentorship" element={<Mentorship />} />
                  <Route path="/apprentices/study-materials/eal" element={<EALQualificationsPage />} />
                  <Route path="/apprentices/study-materials/higher-learning" element={<HigherLearningPage />} />
                  <Route path="/apprentices/study-materials/inspection-testing" element={<InspectionTestingPage />} />
                  
                  <Route path="/electricians" element={<ElectriciansPage />} />
                  <Route path="/electricians/toolbox-talk" element={<ToolboxTalkPage />} />
                  <Route path="/electricians/technical-tools" element={<TechnicalToolsPage />} />
                  <Route path="/electricians/development" element={<ProfessionalDevelopmentPage />} />
                  <Route path="/electricians/development/career-pathways" element={<CareerPathwaysPage />} />
                  <Route path="/electricians/technical-tools/estimator" element={<JobPriceEstimatorPage />} />
                  <Route path="/electricians/technical-tools/calculators" element={<CalculatorTools />} />
                  <Route path="/electricians/technical-tools/inspection-guide" element={<InspectionTestingGuide />} />
                  <Route path="/electricians/technical-tools/templates" element={<TemplatesPage />} />
                  <Route path="/electricians/technical-tools/templates/:templateId/sign" element={<SignDocumentPage />} />
                  <Route path="/electricians/mentorship" element={<Mentorship />} />
                  <Route path="/electricians/development/career-pathways/design" element={<DesignEngineerPage />} />
                  <Route path="/electricians/development/career-pathways/commissioning" element={<CommissioningEngineerPage />} />
                  <Route path="/electricians/development/career-pathways/project-management" element={<ProjectManagerPage />} />
                  <Route path="/electricians/development/career-pathways/control-systems" element={<ControlSystemsEngineerPage />} />
                  <Route path="/electricians/development/career-pathways/inspection" element={<ElectricalInspectorPage />} />
                  <Route path="/electricians/development/career-pathways/building-services" element={<BuildingServicesEngineerPage />} />
                  
                  <Route path="/employers" element={<EmployersPage />} />
                  
                  <Route path="/training" element={<Navigate to="/" replace />} />
                  <Route path="/certification" element={<Navigate to="/" replace />} />
                  <Route path="/tools" element={<Navigate to="/" replace />} />
                  <Route path="/mental-health" element={<MentalHealth />} />
                  <Route path="/mental-health/stress-management" element={<StressManagement />} />
                  <Route path="/mental-health/support-groups" element={<SupportGroups />} />
                  <Route path="/mental-health/professional-resources" element={<ProfessionalResources />} />
                  <Route path="/mental-health/buddy" element={<MentalHealthBuddy />} />
                  
                  <Route path="/faq" element={<FAQ />} />
                  
                  <Route path="/signup" element={<AuthWrapper><Signup /></AuthWrapper>} />
                  <Route path="/login" element={<AuthWrapper><Login /></AuthWrapper>} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/manage-subscription" element={<ManageSubscription />} />
                  <Route path="/subscription" element={<Subscription />} />
                  <Route path="/subscription/success" element={<SubscriptionSuccess />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </TooltipProvider>
            </NotificationProvider>
          </QueryClientProvider>
        </AuthProvider>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
