
import React, { useState, useEffect } from "react";
import { Book, Lightbulb, Briefcase } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import DashboardHeroSection from "@/components/dashboard/DashboardHeroSection";
import DashboardSearchBar from "@/components/dashboard/DashboardSearchBar";
import DashboardRoleGrid from "@/components/dashboard/DashboardRoleGrid";

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
  const [query, setQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredRoles = roles.filter((role) =>
    role.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
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

