
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ApprenticeHub from "./pages/ApprenticeHub";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import ApprenticesPage from "./pages/ApprenticesPage";
import ElectriciansPage from "./pages/ElectriciansPage";
import EmployersPage from "./pages/EmployersPage";
import Subscription from "./pages/Subscription";
import SubscriptionSuccess from "./pages/SubscriptionSuccess";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apprentices" element={<ApprenticesPage />} />
          <Route path="/electricians" element={<ElectriciansPage />} />
          <Route path="/employers" element={<EmployersPage />} />
          <Route path="/apprentice-hub" element={<ApprenticeHub />} />
          <Route path="/training" element={<ApprenticeHub />} />
          <Route path="/certification" element={<ApprenticeHub />} />
          <Route path="/tools" element={<ApprenticeHub />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/subscription/success" element={<SubscriptionSuccess />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
