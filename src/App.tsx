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
import { AuthProvider, useAuth } from "@/hooks/useAuth";
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

// Authentication wrapper for routes that should only be accessible to non-authenticated users
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  return user ? <Navigate to="/dashboard" replace /> : <>{children}</>;
};

// Authentication wrapper for routes that require authentication
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

const App = () => (
  <ErrorBoundary>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <TooltipProvider>
            <Toaster />
            <BrowserRouter>
              <Routes>
                {/* Public routes - redirect to dashboard if authenticated */}
                <Route path="/" element={<PublicRoute><Welcome /></PublicRoute>} />
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                
                {/* Routes that require authentication */}
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/apprentices" element={<PrivateRoute><ApprenticesPage /></PrivateRoute>} />
                <Route path="/apprentices/learning-hub" element={<PrivateRoute><LearningHubPage /></PrivateRoute>} />
                <Route path="/apprentices/ai-tools" element={<PrivateRoute><AIToolsPage /></PrivateRoute>} />
                <Route path="/apprentices/study-materials" element={<PrivateRoute><StudyMaterialsPage /></PrivateRoute>} />
                <Route path="/apprentices/study-materials/:studyType" element={<PrivateRoute><StudyMaterialsPage /></PrivateRoute>} />
                <Route path="/apprentices/practice-exams" element={<PrivateRoute><PracticeExamsPage /></PrivateRoute>} />
                <Route path="/apprentices/certifications" element={<PrivateRoute><CertificationsPage /></PrivateRoute>} />
                <Route path="/electricians" element={<PrivateRoute><ElectriciansPage /></PrivateRoute>} />
                <Route path="/employers" element={<PrivateRoute><EmployersPage /></PrivateRoute>} />
                <Route path="/mental-health" element={<PrivateRoute><MentalHealth /></PrivateRoute>} />
                <Route path="/mentorship" element={<PrivateRoute><Mentorship /></PrivateRoute>} />
                <Route path="/faq" element={<PrivateRoute><FAQ /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="/manage-subscription" element={<PrivateRoute><ManageSubscription /></PrivateRoute>} />
                <Route path="/subscription" element={<PrivateRoute><Subscription /></PrivateRoute>} />
                <Route path="/subscription/success" element={<PrivateRoute><SubscriptionSuccess /></PrivateRoute>} />
                
                {/* Public pages */}
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                
                {/* Legacy routes - redirect to new routes */}
                <Route path="/index" element={<Navigate to="/" replace />} />
                <Route path="/training" element={<Navigate to="/apprentices/learning-hub" replace />} />
                <Route path="/certification" element={<Navigate to="/apprentices/certifications" replace />} />
                <Route path="/tools" element={<Navigate to="/apprentices/ai-tools" replace />} />
                
                {/* Catch all - redirect to dashboard */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </NotificationProvider>
      </QueryClientProvider>
    </AuthProvider>
  </ErrorBoundary>
);

export default App;
