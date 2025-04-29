
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import ApprenticeRoutes from "./routes/ApprenticeRoutes"; // Fixed import
import { ElectricianRoutes } from "./routes/ElectricianRoutes";
import { MentalHealthRoutes } from "./routes/MentalHealthRoutes";
import { ChatProvider } from "./contexts/ChatContext";
import Level2Unit201Page from "./pages/Level2Unit201Page";
import Level2Unit202Page from "./pages/Level2Unit202Page";
import Level2Unit203Page from "./pages/Level2Unit203Page";
import Unit201SectionPage from "./pages/units/Unit201SectionPage";
import Unit202SectionPage from "./pages/units/Unit202SectionPage";
import Unit203SectionPage from "./pages/units/Unit203SectionPage";
import UnitContentPage from "./pages/UnitContentPage";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30000,
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
                    {MentalHealthRoutes}
                    
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
