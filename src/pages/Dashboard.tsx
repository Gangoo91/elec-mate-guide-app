
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
  const { user, loading, refreshSession } = useAuth();
  const [localLoading, setLocalLoading] = useState(true);
  const {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    filteredRoles
  } = useRoleFilter(roles);

  // Refresh session when dashboard is loaded
  useEffect(() => {
    refreshSession();
  }, []);

  // Reset loading state when auth state or page is ready
  useEffect(() => {
    if (!loading && isReady) {
      // Set a shorter timeout to prevent long loading states
      const timer = setTimeout(() => {
        setLocalLoading(false);
        console.log("Dashboard loading completed");
      }, 100); // Reduced from 300ms
      
      return () => clearTimeout(timer);
    }
  }, [loading, isReady]);

  // Force exit loading state after a maximum time to prevent stuck loading
  useEffect(() => {
    const maxLoadingTimer = setTimeout(() => {
      if (localLoading) {
        console.log("Force exiting dashboard loading state");
        setLocalLoading(false);
      }
    }, 2000);
    
    return () => clearTimeout(maxLoadingTimer);
  }, [localLoading]);

  // Persist dashboard loaded state in localStorage
  useEffect(() => {
    localStorage.setItem('dashboardLoaded', 'true');
  }, []);

  // Quick navigation for users (remove unnecessary clicks)
  useEffect(() => {
    if (user && !loading && !localLoading) {
      // If there's a stored role preference, navigate there directly
      const preferredRole = localStorage.getItem('preferredRole');
      if (preferredRole === 'apprentice') {
        navigate('/apprentice-hub');
      }
    }
  }, [user, loading, localLoading, navigate]);

  // Redirect to login if not authenticated
  if (!loading && !user) {
    return <Navigate to="/login" replace />;
  }
  
  // Improved loading state with a proper loading component
  if (loading || (localLoading && isReady)) {
    return (
      <MainLayout>
        <div className="container h-screen flex items-center justify-center">
          <LoadingSpinner size="lg" message="Loading dashboard..." />
        </div>
      </MainLayout>
    );
  }

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
