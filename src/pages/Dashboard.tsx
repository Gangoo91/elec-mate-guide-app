
import React, { useEffect } from "react";
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
  const { user, loading } = useAuth();
  const {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    filteredRoles
  } = useRoleFilter(roles);

  // Simple check for auth
  if (!loading && !user) {
    return <Navigate to="/login" replace />;
  }
  
  // Handle role selection with direct navigation - no state changes that could cause flickering
  const handleRoleSelected = (role: any) => {
    console.log("Role selected:", role.label);
    if (role.label === 'Apprentices') {
      localStorage.setItem('preferredRole', 'apprentice');
    }
    navigate(role.path);
  };
  
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
