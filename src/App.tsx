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
import EmployersPage from "./pages/EmployersPage";
import Subscription from "./pages/Subscription";
import SubscriptionSuccess from "./pages/SubscriptionSuccess";
import ManageSubscription from "./pages/ManageSubscription";
import Settings from "./pages/Settings";
import { AuthRoutes } from "./routes/AuthRoutes";
import { ApprenticeRoutes } from "./routes/ApprenticeRoutes";
import { ElectricianRoutes } from "./routes/ElectricianRoutes";
import { MentalHealthRoutes } from "./routes/MentalHealthRoutes";
import { ChatProvider } from "./contexts/ChatContext";

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
                    <Route path="/employers" element={<EmployersPage />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/manage-subscription" element={<ManageSubscription />} />
                    <Route path="/subscription" element={<Subscription />} />
                    <Route path="/subscription/success" element={<SubscriptionSuccess />} />
                    
                    {AuthRoutes}
                    {ApprenticeRoutes}
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
