
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import ErrorBoundary from "./components/ErrorBoundary";

// Create QueryClient with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30000, // 30 seconds
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <TooltipProvider>
            <Toaster />
            <BrowserRouter>
              <Routes>
                {/* Homepage routes */}
                <Route path="/" element={<Welcome />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/index" element={<Navigate to="/" replace />} />
                
                {/* All other routes */}
                <Route path="/apprentices" element={<ApprenticesPage />} />
                <Route path="/apprentices/learning-hub" element={<LearningHubPage />} />
                <Route path="/apprentices/ai-tools" element={<AIToolsPage />} />
                <Route path="/apprentices/study-materials" element={<StudyMaterialsPage />} />
                <Route path="/apprentices/practice-exams" element={<PracticeExamsPage />} />
                <Route path="/apprentices/certifications" element={<CertificationsPage />} />
                <Route path="/electricians" element={<ElectriciansPage />} />
                <Route path="/employers" element={<EmployersPage />} />
                <Route path="/training" element={<Navigate to="/" replace />} />
                <Route path="/certification" element={<Navigate to="/" replace />} />
                <Route path="/tools" element={<Navigate to="/" replace />} />
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
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </NotificationProvider>
      </QueryClientProvider>
    </AuthProvider>
  </ErrorBoundary>
);

export default App;
