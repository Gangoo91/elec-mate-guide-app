
import React, { useEffect } from "react";
import { Book, Lightbulb, Briefcase } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import DashboardSearchBar from "@/components/dashboard/DashboardSearchBar";
import DashboardRoleGrid from "@/components/dashboard/DashboardRoleGrid";
import { useRoleFilter } from "@/hooks/useRoleFilter";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useUserPreferences } from "@/hooks/useUserPreferences";

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
  const location = useLocation();
  const { user, loading, refreshSession } = useAuth();
  const { setPreferredRole, refreshPreferences } = useUserPreferences();
  const {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    filteredRoles
  } = useRoleFilter(roles);

  // Ensure the session is fresh when visiting dashboard
  useEffect(() => {
    console.log("Dashboard - Component mounted, at path:", location.pathname);
    refreshSession();
    
    // Always clear preferred role when viewing the dashboard
    console.log("Dashboard - Clearing preferredRole since we're on the main dashboard");
    setPreferredRole(null);
    
    // Force a preferences refresh to ensure consistency
    refreshPreferences();
  }, [refreshSession, setPreferredRole, location.pathname, refreshPreferences]);

  // Handle role selection with direct navigation
  const handleRoleSelected = (role: any) => {
    console.log("Role selected:", role.label);
    if (role.label === 'Apprentices') {
      console.log("Setting preferredRole to apprentice");
      setPreferredRole('apprentice');
      navigate(role.path, { replace: true });
    } else {
      // For other roles, clear the preference
      console.log("Clearing preferredRole for non-apprentice role");
      setPreferredRole(null);
      navigate(role.path, { replace: true });
    }
  };
  
  // Show loading state while authenticating
  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-[#22251e] flex items-center justify-center">
          <LoadingSpinner size="lg" message="Loading dashboard..." />
        </div>
      </MainLayout>
    );
  }
  
  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
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
            onRoleSelected={handleRoleSelected}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
