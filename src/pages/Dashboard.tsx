
import React, { useEffect, useState } from "react";
import { Book, Lightbulb, Briefcase } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import DashboardSearchBar from "@/components/dashboard/DashboardSearchBar";
import DashboardRoleGrid from "@/components/dashboard/DashboardRoleGrid";
import { useRoleFilter } from "@/hooks/useRoleFilter";
import { useDashboardController } from "@/hooks/useDashboardController";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner";
import PageHeader from "@/components/layout/PageHeader";

const roles = [
  {
    label: "Apprentices",
    icon: <Book className="h-7 w-7" />,
    path: "/apprentice-hub",
    description: "Learning, assessment & mentorship for aspiring electricians.",
  },
  {
    label: "Electricians",
    icon: <Lightbulb className="h-7 w-7" />,
    path: "/electricians",
    description: "Professional resources for licensed electricians.",
  },
  {
    label: "Employers",
    icon: <Briefcase className="h-7 w-7" />,
    path: "/employers",
    description: "Talent recruitment and workforce management tools.",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { isReady } = useDashboardController();
  const { user, loading } = useAuth();
  const [localLoading, setLocalLoading] = useState(true);
  const {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    filteredRoles
  } = useRoleFilter(roles);

  // Only refresh session once on initial mount
  useEffect(() => {
    // We don't need to explicitly refresh on each dashboard load
    // The useAuth hook already handles this
    console.log("Dashboard mounted");
  }, []);

  // More stable loading state management
  useEffect(() => {
    if (!loading && isReady) {
      console.log("Auth and dashboard controller both ready");
      // Slightly delay removing loading state to avoid flicker
      const timer = setTimeout(() => {
        setLocalLoading(false);
        console.log("Dashboard loading complete - showing content");
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [loading, isReady]);

  // Force exit loading state after a reasonable timeout
  useEffect(() => {
    const maxLoadingTimer = setTimeout(() => {
      if (localLoading) {
        console.log("Maximum loading time reached - forcing dashboard display");
        setLocalLoading(false);
      }
    }, 1500); // Shorter timeout to prevent long loading
    
    return () => clearTimeout(maxLoadingTimer);
  }, [localLoading]);

  // Store dashboard state for better persistence
  useEffect(() => {
    if (!localLoading && user) {
      localStorage.setItem('dashboardLoaded', 'true');
      localStorage.setItem('lastDashboardLoad', Date.now().toString());
    }
  }, [localLoading, user]);

  // Quick navigation for users with stored preferences
  useEffect(() => {
    if (user && !loading && !localLoading) {
      // If there's a stored role preference, navigate there directly
      const preferredRole = localStorage.getItem('preferredRole');
      if (preferredRole === 'apprentice') {
        navigate('/apprentice-hub');
      }
    }
  }, [user, loading, localLoading, navigate]);

  // Improved redirect condition that's less likely to flicker
  if (!loading && !user) {
    console.log("User not authenticated, redirecting to login");
    return <Navigate to="/login" replace />;
  }
  
  // Only show loading when absolutely necessary
  if ((loading || localLoading) && !localStorage.getItem('dashboardContent')) {
    console.log("Showing loading spinner");
    return (
      <MainLayout>
        <div className="container h-screen flex items-center justify-center">
          <LoadingSpinner size="lg" message="Loading dashboard..." />
        </div>
      </MainLayout>
    );
  }

  // Once we get here, we're showing the dashboard content
  console.log("Rendering dashboard content");
  
  // Store that we've successfully rendered the dashboard
  localStorage.setItem('dashboardContent', 'true');

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#22251e]">
        <div className="container px-4 py-6">
          <div className="mb-8">
            <DashboardSearchBar
              query={query}
              setQuery={setQuery}
              isFocused={isSearchFocused}
              setIsFocused={setIsSearchFocused}
            />
          </div>
          
          <DashboardRoleGrid 
            roles={roles} 
            filteredRoles={filteredRoles}
            onRoleSelected={(role) => {
              if (role.label === 'Apprentices') {
                localStorage.setItem('preferredRole', 'apprentice');
              }
            }} 
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
