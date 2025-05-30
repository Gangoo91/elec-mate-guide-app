
import React, { useEffect } from "react";
import { Book, Lightbulb, Trophy } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import DashboardRoleGrid from "@/components/dashboard/DashboardRoleGrid";
import { useRoleFilter } from "@/hooks/useRoleFilter";
import DashboardHeroSection from "@/components/dashboard/DashboardHeroSection";

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
  const {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    filteredRoles
  } = useRoleFilter(roles);

  useEffect(() => {
    console.log("Dashboard component mounted");
  }, []);

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
