
import React, { useEffect } from "react";
import { Book, Lightbulb } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import DashboardRoleGrid from "@/components/dashboard/DashboardRoleGrid";
import { useRoleFilter } from "@/hooks/useRoleFilter";
import { useDashboardController } from "@/hooks/useDashboardController";
import DashboardHeroSection from "@/components/dashboard/DashboardHeroSection";
import TutorBox from "@/components/dashboard/TutorBox";

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

  // Force component to re-render with a unique key
  const renderKey = `dashboard-${Date.now()}`;

  useEffect(() => {
    console.log("Dashboard mounting with timestamp:", renderKey);
    
    // Apply animations after component mounts without clearing caches
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in');
        }, i * 100);
      });
    }, 100);

    // Force refresh if navigated directly to dashboard
    if (window.location.pathname === '/dashboard') {
      console.log("Direct navigation to dashboard detected");
    }

    return () => {
      clearTimeout(timer);
      console.log("Dashboard unmounting");
    };
  }, []);

  // Add console log to debug rendering
  console.log("Dashboard rendering, isReady:", isReady);

  if (!isReady) {
    return (
      <MainLayout>
        <div className="container px-4 py-4">
          <div className="flex items-center justify-center h-screen">
            <div className="animate-pulse">Loading dashboard...</div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout key={renderKey}>
      <div className="container px-4 py-4">
        <DashboardHeroSection hideLogoOverride={false} hideButtons={true} />
        
        {/* Dashboard content with Tutor Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <DashboardRoleGrid 
              roles={roles} 
              filteredRoles={filteredRoles}
            />
          </div>
          
          <div className="md:col-span-1">
            <TutorBox />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
