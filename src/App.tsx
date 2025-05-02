import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { NotificationProvider } from "./contexts/NotificationContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Profile from "./pages/Profile";
import FAQ from "./pages/FAQ";
import Subscription from "./pages/Subscription";
import SubscriptionSuccess from "./pages/SubscriptionSuccess";
import ManageSubscription from "./pages/ManageSubscription";
import Settings from "./pages/Settings";
import { AuthRoutes } from "./routes/AuthRoutes";
import ApprenticeRoutes from "./routes/ApprenticeRoutes";
import { ElectricianRoutes } from "./routes/ElectricianRoutes";
import mentalHealthRoutes from "./routes/MentalHealthRoutes";
import mentorshipRoutes from "./routes/mentorship/mentorshipRoutes";
import { ChatProvider } from "./contexts/ChatContext";
import { useEffect } from "react";
import { clearLocalCache } from "./utils/cacheUtils";
import Level2Unit201Page from "./pages/Level2Unit201Page";
import Level2Unit202Page from "./pages/Level2Unit202Page";
import Level2Unit203Page from "./pages/Level2Unit203Page";
import Level2Unit204Page from './pages/Level2Unit204Page';
import Unit201SectionPage from "./pages/units/Unit201SectionPage";
import Unit202SectionPage from "./pages/units/Unit202SectionPage";
import Unit203SectionPage from "./pages/units/Unit203SectionPage";
import Unit204SectionPage from './pages/units/Unit204SectionPage';
import UnitContentPage from "./pages/UnitContentPage";
import Level3Unit305Page from "./pages/Level3Unit305Page";
import Level3Unit305AssessmentPage from "./pages/Level3Unit305AssessmentPage";
import Unit305SectionPage from "./pages/units/Unit305SectionPage";
import "./index.css";

// Create a route observer component to clear cache on route changes
const RouteObserver = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log("Route changed to:", location.pathname);
    
    // Force clear cache when navigating to dashboard
    if (location.pathname === "/" || location.pathname === "/index" || location.pathname === "/dashboard") {
      clearLocalCache();
    }
    
    // Ensure index routes redirect properly to dashboard
    if (location.pathname === "/index") {
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);
  
  return null;
};

// Configure the QueryClient with proper settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30000,
      gcTime: 60000, // Using gcTime instead of deprecated cacheTime
    },
  },
});

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <NotificationProvider>
              <ChatProvider>
                <TooltipProvider>
                  <Toaster />
                  <RouteObserver />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/index" element={<Navigate to="/" replace />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/manage-subscription" element={<ManageSubscription />} />
                    <Route path="/subscription" element={<Subscription />} />
                    <Route path="/subscription/success" element={<SubscriptionSuccess />} />
                    
                    {/* Units Pages */}
                    <Route 
                      path="/apprentices/study-materials/city-guilds/level-2/core-units/:unitId" 
                      element={<UnitContentPage />} 
                    />

                    {/* Specific Unit Detail Pages */}
                    <Route 
                      path="/apprentices/study-materials/city-guilds/level-2/core-units/201"
                      element={<Level2Unit201Page />} 
                    />
                    <Route 
                      path="/apprentices/study-materials/city-guilds/level-2/core-units/202" 
                      element={<Level2Unit202Page />} 
                    />
                    <Route 
                      path="/apprentices/study-materials/city-guilds/level-2/core-units/203" 
                      element={<Level2Unit203Page />} 
                    />
                    <Route 
                      path="/apprentices/study-materials/city-guilds/level-2/core-units/204" 
                      element={<Level2Unit204Page />} 
                    />
                    
                    {/* Level 3 Unit Pages */}
                    <Route 
                      path="/apprentices/study-materials/city-guilds/level-3/305" 
                      element={<Level3Unit305Page />} 
                    />
                    <Route 
                      path="/apprentices/study-materials/city-guilds/level-3/305/assessment" 
                      element={<Level3Unit305AssessmentPage />} 
                    />
                    <Route
                      path="/apprentices/study-materials/city-guilds/level-3/305/:sectionId"
                      element={<Unit305SectionPage />}
                    />

                    {/* Unit Section Pages */}
                    <Route 
                      path="/apprentices/study-materials/city-guilds/level-2/core-units/201/:sectionId" 
                      element={<Unit201SectionPage />} 
                    />
                    <Route 
                      path="/apprentices/study-materials/city-guilds/level-2/core-units/202/:sectionId" 
                      element={<Unit202SectionPage />} 
                    />
                    <Route 
                      path="/apprentices/study-materials/city-guilds/level-2/core-units/203/:sectionId" 
                      element={<Unit203SectionPage />} 
                    />
                    <Route 
                      path="/apprentices/study-materials/city-guilds/level-2/core-units/204/:sectionId" 
                      element={<Unit204SectionPage />} 
                    />
                    
                    {/* Map apprentice routes */}
                    {ApprenticeRoutes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                    
                    {/* Map other route groups */}
                    {AuthRoutes}
                    {ElectricianRoutes}
                    {mentalHealthRoutes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                    
                    {/* Add mentorship routes directly */}
                    {mentorshipRoutes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                    
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </TooltipProvider>
              </ChatProvider>
            </NotificationProvider>
          </QueryClientProvider>
        </AuthProvider>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
