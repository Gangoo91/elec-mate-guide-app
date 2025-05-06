
import React, { useEffect } from "react";
import { Book, Lightbulb, Trophy } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import DashboardRoleGrid from "@/components/dashboard/DashboardRoleGrid";
import { useRoleFilter } from "@/hooks/useRoleFilter";
import { useDashboardController } from "@/hooks/useDashboardController";
import DashboardHeroSection from "@/components/dashboard/DashboardHeroSection";
import LoadingSpinner from "@/components/LoadingSpinner";

// Define current roles explicitly - employers section has been removed
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
    label: "Leaderboards",
    icon: <Trophy className="h-7 w-7 text-[#FFC900]" />,
    path: "/leaderboards",
    description: "Recognition for top performers across the community.",
  }
];

const Dashboard = () => {
  const { isReady } = useDashboardController();
  const {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    filteredRoles
  } = useRoleFilter(roles);

  useEffect(() => {
    console.log("Dashboard mounted, ready state:", isReady);
    
    // Clear any stored navigation path to prevent redirection loops
    sessionStorage.removeItem('lastPath');
    
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
  }, [isReady]);

  // If the component is not ready yet, show a loading indicator
  if (!isReady) {
    return (
      <MainLayout>
        <div className="container px-4 py-4">
          <div className="flex items-center justify-center h-[60vh]">
            <LoadingSpinner size="lg" className="text-[#FFC900]" label="Loading dashboard..." />
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-4">
        <DashboardHeroSection hideLogoOverride={false} hideButtons={true} />
        <DashboardRoleGrid 
          roles={roles} 
          filteredRoles={filteredRoles}
        />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
