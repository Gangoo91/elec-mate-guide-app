import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth, AuthProvider } from "@/hooks/useAuth";
import { useUserPreferences } from "@/hooks/useUserPreferences";
import ErrorBoundary from "@/components/ErrorBoundary";
import { NotificationProvider } from "@/contexts/NotificationContext";

import Welcome from "@/pages/Welcome";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import ForgotPassword from "@/pages/ForgotPassword";
import Dashboard from "@/pages/Dashboard";
import ApprenticesPage from "@/pages/ApprenticesPage";
import ApprenticeHub from "@/pages/ApprenticeHub";
import ApprenticeMentalHealth from "@/pages/ApprenticeMentalHealth";
import LearningHubPage from "@/pages/LearningHubPage";
import AIToolsPage from "@/pages/AIToolsPage";
import StudyMaterialsPage from "@/pages/StudyMaterialsPage";
import CoreUnitsPage from "@/pages/CoreUnitsPage";
import PracticeExamsPage from "@/pages/PracticeExamsPage";
import CertificationsPage from "@/pages/CertificationsPage";
import ElectriciansPage from "@/pages/ElectriciansPage";
import ElectriciansMentalHealth from "@/pages/ElectriciansMentalHealth";
import ElectriciansToolboxTalk from "@/pages/ElectriciansToolboxTalk";
import EmployersPage from "@/pages/EmployersPage";
import MentalHealth from "@/pages/MentalHealth";
import Mentorship from "@/pages/Mentorship";
import FAQ from "@/pages/FAQ";
import Profile from "@/pages/Profile";
import ManageSubscription from "@/pages/ManageSubscription";
import Subscription from "@/pages/Subscription";
import SubscriptionSuccess from "@/pages/SubscriptionSuccess";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

import Unit201Page from "@/pages/study/nvq2/units/Unit201Page";
import Unit202Page from "@/pages/study/nvq2/units/Unit202Page";
import Unit203Page from "@/pages/study/nvq2/units/Unit203Page";
import Unit204Page from "@/pages/study/nvq2/units/Unit204Page";
import InteractiveLessonsPage from "@/pages/study/nvq2/InteractiveLessonsPage";
import InteractiveLessonDetailPage from "@/pages/study/nvq2/InteractiveLessonDetailPage";
import VideoContentPage from "@/pages/study/nvq2/VideoContentPage";
import QuizzesProgressPage from "@/pages/study/nvq2/QuizzesProgressPage";

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
  const { preferences, isLoaded, refreshPreferences } = useUserPreferences();
  
  useEffect(() => {
    console.log("PublicRoute - Component mounted");
    refreshSession();
    // Ensure preferences are fresh when checking routes
    refreshPreferences();
  }, [refreshSession, refreshPreferences]);
  
  useEffect(() => {
    if (!loading && user && isLoaded) {
      // Always go to apprentice-hub after login
      console.log("PublicRoute - Redirecting to apprentice hub");
      navigate('/apprentice-hub', { replace: true });
    }
  }, [user, loading, navigate, isLoaded]);
  
  if (loading || !isLoaded) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  return !user ? <>{children}</> : null;
};

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading, refreshSession } = useAuth();
  const navigate = useNavigate();
  const { refreshPreferences } = useUserPreferences();
  const [authChecked, setAuthChecked] = useState(false);
  
  useEffect(() => {
    console.log("PrivateRoute - Component mounted");
    const checkAuth = async () => {
      try {
        await refreshSession();
        // Also refresh preferences to ensure consistent state
        refreshPreferences();
        setAuthChecked(true);
      } catch (error) {
        console.error("Error refreshing session:", error);
        setAuthChecked(true);
      }
    };
    
    checkAuth();
  }, [refreshSession, refreshPreferences]);
  
  useEffect(() => {
    if (authChecked && !loading && !user) {
      console.log("PrivateRoute - No user found after refresh, redirecting to login");
      navigate('/login', { replace: true });
    }
  }, [user, loading, navigate, authChecked]);
  
  if (loading || !authChecked) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  return user ? <>{children}</> : null;
};

const RootRedirect = () => {
  const { user, loading, refreshSession } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [redirectChecked, setRedirectChecked] = useState(false);
  
  // Always refresh session and set up auto-redirect to apprentice-hub
  useEffect(() => {
    console.log("RootRedirect - Component mounted, current path:", location.pathname);
    
    const initializeApp = async () => {
      try {
        await refreshSession();
        setRedirectChecked(true);
      } catch (error) {
        console.error("Error in RootRedirect initialization:", error);
        setRedirectChecked(true);
      }
    };
    
    initializeApp();
  }, [refreshSession, location.pathname]);
  
  // Second effect: handle redirection logic once we have latest data
  useEffect(() => {
    if (!redirectChecked || loading) {
      return;
    }
    
    console.log("RootRedirect - Ready to redirect, user:", user ? "authenticated" : "unauthenticated");
    
    if (user) {
      // Always go to apprentice-hub when logged in
      console.log("RootRedirect - Navigating to apprentice hub");
      navigate('/apprentice-hub', { replace: true });
    } else {
      console.log("RootRedirect - No user, navigating to welcome");
      navigate('/welcome', { replace: true });
    }
  }, [user, loading, navigate, redirectChecked]);
  
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
                <Route path="/dashboard" element={<Navigate to="/apprentice-hub" replace />} />
                <Route path="/apprentices" element={<Navigate to="/apprentice-hub" replace />} />
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
                <Route path="/apprentices/study-materials/nvq2/interactive-lessons" element={<PrivateRoute><InteractiveLessonsPage /></PrivateRoute>} />
                <Route path="/apprentices/study-materials/nvq2/interactive-lessons/:lessonId" element={<PrivateRoute><InteractiveLessonDetailPage /></PrivateRoute>} />
                <Route path="/apprentices/study-materials/nvq2/video-content" element={<PrivateRoute><VideoContentPage /></PrivateRoute>} />
                <Route path="/apprentices/study-materials/nvq2/quizzes-progress" element={<PrivateRoute><QuizzesProgressPage /></PrivateRoute>} />
                
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
