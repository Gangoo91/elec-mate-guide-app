import React, { useEffect } from "react";
import { Book, Lightbulb, Briefcase } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import DashboardHeroSection from "@/components/dashboard/DashboardHeroSection";
import DashboardRoleGrid from "@/components/dashboard/DashboardRoleGrid";
import { useRoleFilter } from "@/hooks/useRoleFilter";
import { useDashboardController } from "@/hooks/useDashboardController";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  const { isReady } = useDashboardController();
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

  // If not ready yet, show a minimal loading state
  if (!isReady) {
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
        <DashboardHeroSection hideLogoOverride={true} hideButtons={true} />
        <DashboardRoleGrid roles={roles} filteredRoles={filteredRoles} />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
