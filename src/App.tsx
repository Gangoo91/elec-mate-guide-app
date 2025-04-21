
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import ApprenticesPage from "./pages/ApprenticesPage";
import ElectriciansPage from "./pages/ElectriciansPage";
import EmployersPage from "./pages/EmployersPage";
import Subscription from "./pages/Subscription";
import SubscriptionSuccess from "./pages/SubscriptionSuccess";
import SubscriptionGuard from "./components/guards/SubscriptionGuard";
import { AuthProvider } from "@/hooks/useAuth";
import ManageSubscription from "./pages/ManageSubscription";
import { NotificationProvider } from "./contexts/NotificationContext";
import FAQ from "./pages/FAQ";
import MentalHealth from "./pages/MentalHealth";
import Mentorship from "./pages/Mentorship";
import LearningHubPage from "./pages/LearningHubPage";
import AIToolsPage from "./pages/AIToolsPage";
import StudyMaterialsPage from "./pages/StudyMaterialsPage";
import PracticeExamsPage from "./pages/PracticeExamsPage";
import CertificationsPage from "./pages/CertificationsPage";

const queryClient = new QueryClient();

const App = () => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/apprentices" element={
                <SubscriptionGuard requiredTier="Apprentice">
                  <ApprenticesPage />
                </SubscriptionGuard>
              } />
              <Route path="/apprentices/learning-hub" element={
                <SubscriptionGuard requiredTier="Apprentice">
                  <LearningHubPage />
                </SubscriptionGuard>
              } />
              <Route path="/apprentices/ai-tools" element={
                <SubscriptionGuard requiredTier="Apprentice">
                  <AIToolsPage />
                </SubscriptionGuard>
              } />
              <Route path="/apprentices/study-materials" element={
                <SubscriptionGuard requiredTier="Apprentice">
                  <StudyMaterialsPage />
                </SubscriptionGuard>
              } />
              <Route path="/apprentices/practice-exams" element={
                <SubscriptionGuard requiredTier="Apprentice">
                  <PracticeExamsPage />
                </SubscriptionGuard>
              } />
              <Route path="/apprentices/certifications" element={
                <SubscriptionGuard requiredTier="Apprentice">
                  <CertificationsPage />
                </SubscriptionGuard>
              } />
              <Route path="/electricians" element={
                <SubscriptionGuard requiredTier="Electrician">
                  <ElectriciansPage />
                </SubscriptionGuard>
              } />
              <Route path="/employers" element={
                <SubscriptionGuard requiredTier="Employer">
                  <EmployersPage />
                </SubscriptionGuard>
              } />
              <Route path="/training" element={
                <SubscriptionGuard requiredTier="Apprentice">
                  <Dashboard />
                </SubscriptionGuard>
              } />
              <Route path="/certification" element={
                <SubscriptionGuard requiredTier="Apprentice">
                  <Dashboard />
                </SubscriptionGuard>
              } />
              <Route path="/tools" element={
                <SubscriptionGuard requiredTier="Apprentice">
                  <Dashboard />
                </SubscriptionGuard>
              } />
              <Route path="/mental-health" element={<MentalHealth />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/manage-subscription" element={<ManageSubscription />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/subscription/success" element={<SubscriptionSuccess />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </NotificationProvider>
    </QueryClientProvider>
  </AuthProvider>
);

export default App;
