import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
import ElectriciansMentalHealth from "./pages/ElectriciansMentalHealth";
import ElectriciansToolboxTalk from "./pages/ElectriciansToolboxTalk";
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
import CoreUnitsPage from "./pages/CoreUnitsPage";
import Unit201Page from "./pages/study/nvq2/units/Unit201Page";
import Unit202Page from "./pages/study/nvq2/units/Unit202Page";
import Unit203Page from "./pages/study/nvq2/units/Unit203Page";
import Unit204Page from "./pages/study/nvq2/units/Unit204Page";
import ApprenticeHub from "./pages/ApprenticeHub";
import ApprenticeMentalHealth from "./pages/ApprenticeMentalHealth";

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

// Handle page transitions and prevent full reloads
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Authentication wrapper for routes that should only be accessible to non-authenticated users
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loading && user) {
      // If user is already logged in, check their preferred role
      const preferredRole = localStorage.getItem('preferredRole');
      if (preferredRole === 'apprentice') {
        navigate('/apprentice-hub', { replace: true });
      } else {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [user, loading, navigate]);
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  return !user ? <>{children}</> : null;
};

// Authentication wrapper for routes that require authentication
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading, refreshSession } = useAuth();
  const navigate = useNavigate();
  
  // Try to refresh session when mounting a protected route
  useEffect(() => {
    if (!user && !loading) {
      refreshSession();
    }
  }, [user, loading, refreshSession]);
  
  useEffect(() => {
    // If still not authenticated after refresh attempt, redirect to login
    if (!loading && !user) {
      navigate('/login', { replace: true });
    }
  }, [user, loading, navigate]);
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  return user ? <>{children}</> : null;
};

const App = () => (
  <ErrorBoundary>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <TooltipProvider>
            <Toaster />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                {/* Root route - redirect to dashboard if authenticated, welcome if not */}
                <Route path="/" element={
                  <PublicRoute><Welcome /></PublicRoute>
                } />
                
                {/* Public routes - redirect to dashboard if authenticated */}
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                
                {/* Routes that require authentication */}
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/apprentices" element={<PrivateRoute><ApprenticesPage /></PrivateRoute>} />
                <Route path="/apprentice-hub" element={<PrivateRoute><ApprenticeHub /></PrivateRoute>} />
                <Route path="/apprentices/mental-health" element={<PrivateRoute><ApprenticeMentalHealth /></PrivateRoute>} />
                <Route path="/apprentices/learning-hub" element={<PrivateRoute><LearningHubPage /></PrivateRoute>} />
                <Route path="/apprentices/ai-tools" element={<PrivateRoute><AIToolsPage /></PrivateRoute>} />
                <Route path="/apprentices/study-materials" element={<PrivateRoute><StudyMaterialsPage /></PrivateRoute>} />
                
                {/* Study materials routes */}
                <Route path="/apprentices/study-materials/:studyType" element={<PrivateRoute><StudyMaterialsPage /></PrivateRoute>} />
                <Route path="/apprentices/study-materials/nvq2/core-units" element={<PrivateRoute><CoreUnitsPage /></PrivateRoute>} />
                <Route path="/apprentices/study-materials/nvq2/core-units/201" element={<PrivateRoute><Unit201Page /></PrivateRoute>} />
                <Route path="/apprentices/study-materials/nvq2/core-units/202" element={<PrivateRoute><Unit202Page /></PrivateRoute>} />
                <Route path="/apprentices/study-materials/nvq2/core-units/203" element={<PrivateRoute><Unit203Page /></PrivateRoute>} />
                <Route path="/apprentices/study-materials/nvq2/core-units/204" element={<PrivateRoute><Unit204Page /></PrivateRoute>} />
                
                <Route path="/apprentices/study-materials/:studyType/*" element={<PrivateRoute><StudyMaterialsPage /></PrivateRoute>} />
                <Route path="/apprentices/practice-exams" element={<PrivateRoute><PracticeExamsPage /></PrivateRoute>} />
                <Route path="/apprentices/certifications" element={<PrivateRoute><CertificationsPage /></PrivateRoute>} />
                <Route path="/electricians" element={<PrivateRoute><ElectriciansPage /></PrivateRoute>} />
                <Route path="/electricians/mental-health" element={<PrivateRoute><ElectriciansMentalHealth /></PrivateRoute>} />
                <Route path="/electricians/toolbox-talk" element={<PrivateRoute><ElectriciansToolboxTalk /></PrivateRoute>} />
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
                
                {/* Catch all - redirect to 404 or dashboard if signed in */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </NotificationProvider>
      </QueryClientProvider>
    </AuthProvider>
  </ErrorBoundary>
);

export default App;
