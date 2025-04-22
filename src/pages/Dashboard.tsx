
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

  // Improved initialization to ensure we're fully ready to render
  useEffect(() => {
    if (!loading && isReady) {
      // Short delay to ensure all child components are ready
      const timer = setTimeout(() => {
        setLocalLoading(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [loading, isReady]);

  useEffect(() => {
    // Apply animations after component is fully loaded
    if (!localLoading) {
      const timer = setTimeout(() => {
        const elements = document.querySelectorAll('.animate-on-load');
        elements.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('animate-fade-in');
          }, i * 100);
        });
      }, 100);
  
      return () => clearTimeout(timer);
    }
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
  if (loading || localLoading || !isReady) {
    return (
      <MainLayout>
        <div className="container h-screen flex items-center justify-center">
          <LoadingSpinner size="lg" />
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
