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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30000, // 30 seconds
    },
  },
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading, refreshSession } = useAuth();
  const navigate = useNavigate();
  const { preferences } = useUserPreferences();
  
  useEffect(() => {
    refreshSession();
    
    if (!loading && user) {
      const preferredRole = preferences.preferredRole;
      console.log("PublicRoute detected user is logged in, preferred role:", preferredRole);
      
      if (preferredRole === 'apprentice') {
        navigate('/apprentice-hub', { replace: true });
      } else {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [user, loading, navigate, preferences.preferredRole, refreshSession]);
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  return !user ? <>{children}</> : null;
};

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading, refreshSession } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkAuth = async () => {
      if (!user && !loading) {
        await refreshSession();
      }
    };
    
    checkAuth();
  }, [user, loading, refreshSession]);
  
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login', { replace: true });
    }
  }, [user, loading, navigate]);
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  return user ? <>{children}</> : null;
};

const RootRedirect = () => {
  const { user, loading, refreshSession } = useAuth();
  const navigate = useNavigate();
  const { preferences } = useUserPreferences();
  
  useEffect(() => {
    refreshSession();
    
    if (!loading) {
      if (user) {
        const preferredRole = preferences.preferredRole;
        console.log("RootRedirect - User authenticated, preferred role:", preferredRole);
        
        if (preferredRole === 'apprentice') {
          console.log("RootRedirect - Navigating to apprentice hub");
          navigate('/apprentice-hub', { replace: true });
        } else {
          console.log("RootRedirect - Navigating to dashboard");
          navigate('/dashboard', { replace: true });
        }
      } else {
        navigate('/welcome', { replace: true });
      }
    }
  }, [user, loading, navigate, preferences.preferredRole, refreshSession]);
  
  return <div className="flex items-center justify-center h-screen">Loading...</div>;
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
                <Route path="/" element={<RootRedirect />} />
                <Route path="/welcome" element={<PublicRoute><Welcome /></PublicRoute>} />
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/apprentices" element={<PrivateRoute><ApprenticesPage /></PrivateRoute>} />
                <Route path="/apprentice-hub" element={<PrivateRoute><ApprenticeHub /></PrivateRoute>} />
                <Route path="/apprentices/mental-health" element={<PrivateRoute><ApprenticeMentalHealth /></PrivateRoute>} />
                <Route path="/apprentices/learning-hub" element={<PrivateRoute><LearningHubPage /></PrivateRoute>} />
                <Route path="/apprentices/ai-tools" element={<PrivateRoute><AIToolsPage /></PrivateRoute>} />
                <Route path="/apprentices/study-materials" element={<PrivateRoute><StudyMaterialsPage /></PrivateRoute>} />
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
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/index" element={<Navigate to="/" replace />} />
                <Route path="/training" element={<Navigate to="/apprentices/learning-hub" replace />} />
                <Route path="/certification" element={<Navigate to="/apprentices/certifications" replace />} />
                <Route path="/tools" element={<Navigate to="/apprentices/ai-tools" replace />} />
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
