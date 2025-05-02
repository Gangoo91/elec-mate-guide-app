
import React, { useEffect } from "react";
import { Book, Lightbulb, Trophy, GraduationCap } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import DashboardRoleGrid from "@/components/dashboard/DashboardRoleGrid";
import { useRoleFilter } from "@/hooks/useRoleFilter";
import { useDashboardController } from "@/hooks/useDashboardController";
import DashboardHeroSection from "@/components/dashboard/DashboardHeroSection";

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
    label: "Tutors",
    icon: <GraduationCap className="h-7 w-7 text-[#FFC900]" />,
    path: "/tutors",
    description: "Tools for colleges, training providers & assessors.",
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

  // Add console logs to debug role rendering
  console.log("Dashboard rendering, roles:", roles);
  console.log("Filtered roles:", filteredRoles);

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
    <MainLayout>
      <div className="container px-4 py-4">
        <DashboardHeroSection hideLogoOverride={false} hideButtons={true} />
        <DashboardRoleGrid 
          roles={roles} 
          filteredRoles={roles} // Always use the full roles array rather than filtered
        />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
