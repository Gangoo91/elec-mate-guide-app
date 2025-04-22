
import React, { useEffect, useState } from "react";
import { Book, Lightbulb, Briefcase } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import DashboardSearchBar from "@/components/dashboard/DashboardSearchBar";
import DashboardRoleGrid from "@/components/dashboard/DashboardRoleGrid";
import { useRoleFilter } from "@/hooks/useRoleFilter";
import { useDashboardController } from "@/hooks/useDashboardController";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner";
import PageHeader from "@/components/layout/PageHeader";

const roles = [
  {
    label: "Apprentices",
    icon: <Book className="h-7 w-7 text-[#FFC900]" />,
    path: "/apprentices",
    description: "Learning, assessment & mentorship for aspiring electricians.",
  },
  {
    label: "Electricians",
    icon: <Lightbulb className="h-7 w-7 text-[#FFC900]" />,
    path: "/electricians",
    description: "Professional resources for licensed electricians.",
  },
  {
    label: "Employers",
    icon: <Briefcase className="h-7 w-7 text-[#FFC900]" />,
    path: "/employers",
    description: "Talent recruitment and workforce management tools.",
  },
];

const Dashboard = () => {
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

  // Persist dashboard loaded state in localStorage instead of sessionStorage
  // to survive page refreshes better
  useEffect(() => {
    const dashboardLoaded = localStorage.getItem('dashboardLoaded');
    if (!dashboardLoaded) {
      localStorage.setItem('dashboardLoaded', 'true');
    }
  }, []);

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
      <div className="container px-4 py-6 md:py-12">
        <PageHeader 
          title="Electrical Industry Hub"
          description="Your all-in-one platform for apprentices, electricians, and employers to connect, learn, and thrive."
          hideBackButton={true}
        />

        <div className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20">
          <div className="mb-8">
            <DashboardSearchBar
              query={query}
              setQuery={setQuery}
              isFocused={isSearchFocused}
              setIsFocused={setIsSearchFocused}
            />
          </div>
          
          <DashboardRoleGrid roles={roles} filteredRoles={filteredRoles} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
