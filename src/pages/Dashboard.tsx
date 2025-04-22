
import React, { useEffect } from "react";
import { Book, Lightbulb, Briefcase } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import DashboardHeroSection from "@/components/dashboard/DashboardHeroSection";
import DashboardSearchBar from "@/components/dashboard/DashboardSearchBar";
import DashboardRoleGrid from "@/components/dashboard/DashboardRoleGrid";
import { useRoleFilter } from "@/hooks/useRoleFilter";
import { useDashboardController } from "@/hooks/useDashboardController";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

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
  const {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    filteredRoles
  } = useRoleFilter(roles);

  useEffect(() => {
    // Apply animations after component mounts without clearing caches
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in');
        }, i * 100);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Redirect to login if not authenticated
  if (!loading && !user) {
    return <Navigate to="/login" replace />;
  }
  
  // If not ready yet, show a minimal loading state
  if (!isReady || loading) {
    return (
      <MainLayout>
        <div className="container px-4 py-10 md:py-16">
          <div className="flex items-center justify-center h-screen">
            <div className="animate-pulse">Loading dashboard...</div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-10 md:py-16">
        <DashboardHeroSection hideLogoOverride={true} />
        <DashboardSearchBar
          query={query}
          setQuery={setQuery}
          isFocused={isSearchFocused}
          setIsFocused={setIsSearchFocused}
        />
        <DashboardRoleGrid roles={roles} filteredRoles={filteredRoles} />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
